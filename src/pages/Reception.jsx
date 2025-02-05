// src/pages/Reception.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Mail, Linkedin, Github } from "lucide-react";
import GuildArea from "../components/guild/GuildArea";
import { useGuild } from "../context/GuildContext";
import WizardLoader from "../components/shared/WizardLoader";
import "./Reception.css";

function Reception() {
  const { updateDialogue } = useGuild();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    updateDialogue(
      "Welcome to the Reception! I'll be your attendant for today's portfolio viewing."
    );
  }, []);

  if (isLoading) {
    return (
      <WizardLoader onFinished={() => setIsLoading(false)} duration={1200} />
    );
  }

  const deskContent = (
    <div>
      <h2>Welcome to the Guild</h2>
      <p>
        I'm here to help guide you through our facilities. Feel free to explore
        our Quest Board for projects, Library for skills, or Bounty Hall for
        experience records.
      </p>
    </div>
  );

  return (
    <GuildArea deskContent={deskContent}>
      <div className="reception-content">
        <h2>About the Guild Master</h2>

        <div className="about-sections">
          <p>
            Greetings, traveler! I'm Davon Henson, a software engineer based in
            the realm of NYC. As a recent graduate of the Per Scholas Software
            Engineering program, I've mastered the arts of{" "}
            <span className="skill-highlight">JavaScript</span>,{" "}
            <span className="skill-highlight">HTML</span>, and{" "}
            <span className="skill-highlight">CSS</span> to craft digital
            experiences.
          </p>

          <p>
            My passion lies in creating engaging, user-friendly applications
            that bring joy to users. In the{" "}
            <Link to="/quests" className="highlight-link">
              Quest Board
            </Link>
            , you'll find my projects showcasing innovative solutions built with{" "}
            <span className="skill-highlight">React</span> and{" "}
            <span className="skill-highlight">Phaser</span>.
          </p>

          <p>
            The{" "}
            <Link to="/library" className="highlight-link">
              Library
            </Link>{" "}
            houses my technical arsenal, featuring both front-end enchantments
            like React and back-end powers through{" "}
            <span className="skill-highlight">Node.js</span> and{" "}
            <span className="skill-highlight">MongoDB</span>. Whether crafting
            responsive interfaces or forging interactive experiences, I
            transform creative visions into reality.
          </p>

          <p>
            My{" "}
            <Link to="/bounties" className="highlight-link">
              past adventures
            </Link>{" "}
            include streamlining medical testing workflows and analyzing vast
            datasets. Each experience has honed my problem-solving abilities and
            fueled my quest for continuous learning.
          </p>

          <p className="mission-statement">
            "On a quest to create extraordinary digital experiences that bridge
            imagination and functionality."
          </p>

          <div className="quick-actions">
            <Link to="/quests" className="action-btn">
              View Latest Projects
            </Link>
            <Link to="/library" className="action-btn">
              Explore Skills
            </Link>
          </div>

          <div className="contact-section">
            Ready to begin your quest? You can summon me through:
            <div className="contact-links">
              <a
                href="mailto:davonhensontech@gmail.com"
                className="highlight-link"
              >
                <Mail size={20} /> davonhensontech@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/davon-e-henson/"
                className="highlight-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a
                href="https://github.com/DHenson1337"
                className="highlight-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </GuildArea>
  );
}

export default Reception;
