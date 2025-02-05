// src/pages/Resume.jsx
import { useEffect } from "react";
import { useGuild } from "../context/GuildContext";
import GuildArea from "../components/guild/GuildArea";
import "./Resume.css";

function Resume() {
  const { updateDialogue } = useGuild();

  useEffect(() => {
    updateDialogue({
      type: "html",
      content:
        "Here lies the chronicles of my professional journey and magical abilities!",
    });
  }, []);

  const deskContent = (
    <div>
      <h2>Professional Chronicles</h2>
      <p>A detailed record of my adventures and accumulated knowledge.</p>
    </div>
  );

  return (
    <GuildArea deskContent={deskContent}>
      <div className="resume-content">
        <header className="resume-header">
          <h1>Davon Henson</h1>
          <div className="contact-info">
            <p>Brooklyn, NY 11226</p>
            <p>347-856-2590 | davonhensontech@gmail.com</p>
            <p>
              <a
                href="https://www.linkedin.com/in/davon-e-henson/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              |
              <a
                href="https://github.com/DHenson1337"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
        </header>

        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>
            Recent graduate of the Per Scholas Software Engineering track with
            15 weeks of hands-on experience in JavaScript, HTML, and CSS,
            demonstrating a solid foundation in IT principles and practices.
            Passionate about developing engaging and user-friendly applications
            that bring joy and positivity to users. Eager to leverage technical
            skills and creativity in a software engineering role to create
            innovative solutions that make a difference.
          </p>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <ul>
            <li>
              <strong>Programming Languages:</strong> HTML, CSS, JavaScript,
              TypeScript
            </li>
            <li>
              <strong>Frontend:</strong> ReactJS, Bootstrap, Phaser
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express, MongoDB
            </li>
            <li>
              <strong>Tools:</strong> GitHub, Document Object Model (DOM)
            </li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Per Scholas</h3>
            <p>Software Engineering, Mern Stack Developer</p>
            <p>Bronx, NY | September 2024</p>
          </div>
          <div className="education-item">
            <h3>New York City College of Technology</h3>
            <p>Bachelor of Arts in Computer Systems Technology</p>
            <p>Brooklyn, NY | December 2020</p>
          </div>
        </section>

        {/* Professional Experience section... */}
        <section className="resume-section">
          <h2>Professional Experience</h2>
          {/* Add each job experience following the same pattern */}
          <div className="experience-item">
            <h3>Empire City Laboratory</h3>
            <p className="job-title">Accessioning Technician</p>
            <p className="job-duration">January 2022 - March 2023</p>
            <ul>
              <li>
                Streamlined the medical testing process by utilizing Empire's
                medical database to efficiently manage access to hundreds of
                blood samples, COVID swabs, and bioproducts daily from various
                medical facilities.
              </li>
              {/* Add other bullet points... */}
            </ul>
          </div>
          {/* Add other experiences... */}
        </section>
      </div>
    </GuildArea>
  );
}

export default Resume;
