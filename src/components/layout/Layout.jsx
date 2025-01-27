import { Outlet } from "react-router";
import GuildReceptionist from "./GuildReceptionist";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <header>
        <h1>The Guild Reception Desk</h1>
        <button className="theme-toggle"> Day / Night </button>
      </header>

      <main>
        <GuildReceptionist />
        <div className="content">
          <Outlet />
        </div>
      </main>

      <footer>
        <nav>
          <a href="/resume">Resume</a>
          <a href="/portfolio">Game Portfolio</a>
          <a href="/Linkdin"> Linkdin Logo</a>
          <a href="/Github"> Github Logo</a>
        </nav>
      </footer>
    </div>
  );
}

export default Layout;
