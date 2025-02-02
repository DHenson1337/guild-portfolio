// src/components/guild/BountyHall/BountyBoard/index.jsx
import { useState } from "react";
import { useGuild } from "../../../../context/GuildContext";
import BountyCard from "../BountyCard";
import "./styles.css";

const BountyBoard = ({ onBountySelect }) => {
  const { updateDialogue } = useGuild();
  const [selectedBounty, setSelectedBounty] = useState(null);

  // Sample bounty data - replace with your actual experience
  const bounties = [
    {
      id: 1,
      company: "Example University",
      companyDescription: "A prestigious institution of higher learning",
      position: "Computer Science Student",
      description:
        "Studied various aspects of computer science and software development",
      type: "education",
    },
    {
      id: 2,
      company: "Tech Corp",
      companyDescription: "Leading technology solutions provider",
      position: "Software Developer",
      description: "Developed and maintained web applications",
      type: "professional",
    },
  ];

  const handleBountySelect = (bounty) => {
    setSelectedBounty(bounty);
    updateDialogue(`${bounty.company}: ${bounty.companyDescription}`);

    onBountySelect({
      position: bounty.position,
      type: bounty.type,
      description: bounty.description,
    });
  };

  return (
    <div className="bounty-board-container">
      <div className="bounty-board">
        <div className="bounty-grid">
          {bounties.map((bounty) => (
            <BountyCard
              key={bounty.id}
              bounty={bounty}
              isSelected={selectedBounty?.id === bounty.id}
              onSelect={handleBountySelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BountyBoard;
