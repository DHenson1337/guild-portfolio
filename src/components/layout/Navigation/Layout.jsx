// src/components/layout/Navigation/Layout.jsx
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router";
import "./Layout.css";

function Layout() {
  // Theme management
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <div className="layout">
      <header>
        <h1>The Guild Reception Desk</h1>
        <nav className="nav-container">
          <div className="nav-links">
            <div className="nav-item">
              <Link to="/">About</Link>
              <div className="dropdown-content">
                <Link to="/">Reception</Link>
              </div>
            </div>

            <div className="nav-item">
              <Link to="/library">Skills</Link>
              <div className="dropdown-content">
                <Link to="/library">Library</Link>
              </div>
            </div>

            <div className="nav-item">
              <Link to="/quests">Projects</Link>
              <div className="dropdown-content">
                <Link to="/quests">Quest Board</Link>
              </div>
            </div>

            <div className="nav-item">
              <Link to="/bounties">Experience</Link>
              <div className="dropdown-content">
                <Link to="/bounties">Bounty Hall</Link>
              </div>
            </div>
          </div>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              isDarkTheme ? "Switch to light theme" : "Switch to dark theme"
            }
          >
            {isDarkTheme ? "Day" : "Night"}
          </button>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer>
        <nav>
          <Link to="/resume">Resume</Link>
          <Link to="/portfolio">Game Portfolio</Link>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default Layout;
