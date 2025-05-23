// src/components/guild/QuestBoard/index.jsx
import { useState } from "react";
import { useGuild } from "../../../context/GuildContext";
import QuestCard from "./QuestCard";
// import DustParticles from "../../shared/DustParticles";
import "./styles.css";

const QuestBoard = ({ onQuestSelect }) => {
  const { updateDialogue } = useGuild();
  const [selectedQuest, setSelectedQuest] = useState(null);

  // Sample quest data
  const quests = [
    {
      id: 1,
      title: "Game Portfolio",
      description: "🎮An interactive Game Portfolio!",
      technologies: [
        "React",
        "Node.js",
        "Kaplay.js",
        "HTML/CSS",
        "Jotai",
        "GLSL Shaders",
      ],
      links: {
        github: "https://github.com/DHenson1337/dev-portfolio.git",
        live: "https://dhenson1337.github.io/dev-portfolio/",
      },
      image: "/assets/images/projects/p1.png",
    },
    {
      id: 2,
      title: "Mini-Game-PlayGround",
      description:
        "🕹A Website with MiniGames and a Leaderboard (PSA Initial Loadtimes)",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "/assets/images/projects/p2.png",
      links: {
        github: "https://github.com/DHenson1337/mini-game-playground-client",
        live: "https://mini-game-playground.netlify.app/",
      },
    },
    {
      id: 3,
      title: "Sky Cast",
      description: "✨A website advertising a potential future product",
      technologies: ["HTML", "CSS"],
      image: "/assets/images/projects/p3.png",
      links: {
        github: "https://github.com/DHenson1337/SBA307-Sky-Cast",
        live: "https://dhenson1337.github.io/SBA307-Sky-Cast/index.html",
      },
    },
    {
      id: 4,
      title: "Apple Catcher",
      description: "🍎A fun mini-game about catching apples!",
      technologies: ["HTML", "CSS", "Phaser", "JavaScript"],
      image: "/assets/images/projects/p5.png",
      links: {
        github: "https://github.com/DHenson1337/Phaser-Apple-Game",
        live: "https://dhenson1337-phaser-orchard-run.netlify.app/",
      },
    },

    // Add more sample quests... someday
  ];

  const handleQuestSelect = (quest) => {
    setSelectedQuest(quest);

    // Create highlighted technology string
    const techString = quest.technologies
      .map((tech) => `<span class="tech-highlight">${tech}</span>`)
      .join(", ");

    // Use the techString in the dialogue update
    updateDialogue({
      type: "html",
      content: `This quest involves ${techString}. ${quest.description}`,
    });

    onQuestSelect({
      title: quest.title,
      liveLink: quest.links?.live,
      image: quest.image,
    });
  };

  return (
    <div className="quest-board-container">
      {/* <DustParticles /> */}
      <div className="quest-board">
        <div className="quest-grid">
          {quests.map((quest) => (
            <QuestCard
              key={quest.id}
              quest={quest}
              isSelected={selectedQuest?.id === quest.id}
              onSelect={handleQuestSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestBoard;
