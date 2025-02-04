// src/components/guild/QuestBoard/QuestCard/index.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./styles.css";

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
                <Github size={20} />
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
