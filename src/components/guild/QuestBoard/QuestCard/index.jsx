// src/components/guild/QuestBoard/QuestCard/index.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react"; // ExternalLink
import "./styles.css";

// Custom SVG for GitHub icon (to replace deprecated GithubIcon)
const GithubSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.77 5.07 5.07 0 0 0-.09-3.81S18.73.65 16 2.48A13.38 13.38 0 0 0 12 2a13.38 13.38 0 0 0-4 0C5.27.65 4.09.92 4.09.92a5.07 5.07 0 0 0-.09 3.81 5.44 5.44 0 0 0-1.5 3.77c0 5.42 3.3 6.62 6.44 7A3.37 3.37 0 0 0 9 21.13V25"></path>
  </svg>
);

const QuestCard = ({ quest, isSelected, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`quest-card clickable ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(quest)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="quest-content">
        <div className="quest-image-container">
          <img src={quest.image} alt={quest.title} className="quest-image" />
          <div className="quest-links">
            {quest.links?.github && (
              <a
                href={quest.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="quest-link"
              >
                <GithubSVG /> {/* ✅ Uses the custom GitHub SVG */}
              </a>
            )}
            {quest.links?.live && (
              <a
                href={quest.links.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="quest-link"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <h3 className="quest-title">{quest.title}</h3>
      </div>
    </motion.div>
  );
};

export default QuestCard;
