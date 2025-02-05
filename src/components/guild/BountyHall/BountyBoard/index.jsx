// src/components/guild/BountyHall/BountyBoard/index.jsx
import { useState } from "react";
import { useGuild } from "../../../../context/GuildContext";
import BountyCard from "../BountyCard";
// import DustParticles from "../../../shared/DustParticles";
import "./styles.css";

const BountyBoard = ({ onBountySelect }) => {
  const { updateDialogue } = useGuild();
  const [selectedBounty, setSelectedBounty] = useState(null);

  // Bounty data with a fantasy guild vibe
  const bounties = [
    {
      id: 1,
      company: "Per Scholas",
      companyDescription: "A venerable academy of tech sorcery in the Bronx",
      position: "Software Engineering Apprentice",
      description:
        "Embarked on a 15-week quest mastering JavaScript, HTML, and CSS to craft enchanting, user-friendly applications.",
      type: "education",
    },
    {
      id: 2,
      company: "New York City College of Technology",
      companyDescription: "A citadel of digital knowledge in Brooklyn",
      position: "Student of Computer Systems Technology",
      description:
        "Earned a BA by delving deep into the realm of computer systems, forging a formidable foundation in digital arts.",
      type: "education",
    },
    {
      id: 3,
      company: "Empire City Laboratory",
      companyDescription: "A realm where science meets precision in Brooklyn",
      position: "Accessioning Technician",
      description:
        "Streamlined the flow of vital specimens and ensured data accuracy, wielding modern alchemy to manage hundreds of samples daily.",
      type: "professional",
    },
    {
      id: 4,
      company: "U.S. Census Bureau",
      companyDescription: "The realm's trusted chronicler of citizen lore",
      position: "Enumerator",
      description:
        "Utilized enchanted mobile devices to capture the diverse tales of the realm, ensuring every voice was chronicled with care.",
      type: "professional",
    },
    {
      id: 5,
      company: "Mount Sinai Health System",
      companyDescription:
        "A sanctuary of healing and digital wisdom in New York",
      position: "Business Analyst Intern, IT",
      description:
        "Harnessed the magic of data with tools like Excel, conjuring insights that guided IT projects and safeguarded sacred patient records.",
      type: "professional",
    },
    {
      id: 6,
      company: "Costco Wholesale Warehouse",
      companyDescription: "A grand emporium of abundance in Brooklyn",
      position: "Cashier Assistant",
      description:
        "Mastered the art of customer service and inventory management, ensuring that every adventurer found their desired treasure.",
      type: "professional",
    },
  ];

  const handleBountySelect = (bounty) => {
    setSelectedBounty(bounty);
    updateDialogue({
      type: "html",
      content: `"<span class="tech-highlight">${bounty.company}</span>": ${bounty.companyDescription}`,
    });

    onBountySelect({
      position: bounty.position,
      type: bounty.type,
      description: bounty.description,
    });
  };

  return (
    <div className="bounty-board-container">
      {/* <DustParticles /> */}
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
