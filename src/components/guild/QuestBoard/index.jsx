// src/components/guild/QuestBoard/index.jsx
import { useState } from "react";
import { useGuild } from "../../../context/GuildContext";
import QuestCard from "./QuestCard";
import "./styles.css";

const QuestBoard = ({ onQuestSelect }) => {
  const { updateDialogue } = useGuild();
  const [selectedQuest, setSelectedQuest] = useState(null);

  // Sample quest data
  const quests = [
    {
      id: 1,
      title: "Project 1",
      description: "A  description of project  ",
      technologies: ["React", "Node.js"],
      links: {
        github: "https://github.com/...",
        live: "https://...",
      },
      image: "/assets/images/projects/p1.png",
    },
    {
      id: 2,
      title: "Project 1",
      description: "A description of project 1",
      technologies: ["React", "Node.js"],
      image: "/assets/images/projects/p2.png",
      links: {
        github: "https://github.com/...",
        live: "https://...",
      },
    },
    {
      id: 3,
      title: "Project 1",
      description: "A description of project 1",
      technologies: ["React", "Node.js"],
      image: "/assets/images/projects/p3.png",
      links: {
        github: "https://github.com/...",
        live: "https://...",
      },
    },
    {
      id: 4,
      title: "Project 1",
      description: "A description of project 1",
      technologies: ["React", "Node.js"],
      image: "/path/to/image1.jpg",
      links: {
        github: "https://github.com/...",
        live: "https://...",
      },
    },
    // Add more sample quests...
  ];

  const handleQuestSelect = (quest) => {
    setSelectedQuest(quest);
    updateDialogue(
      `This quest involves ${quest.technologies.join(", ")}. ${
        quest.description
      }`
    );

    // Send the quest info to the parent component
    onQuestSelect({
      title: quest.title,
      liveLink: quest.links?.live,
      image: quest.image,
    });
  };

  return (
    <div className="quest-board-container">
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
