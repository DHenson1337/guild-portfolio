// src/components/guild/QuestBoard/QuestCard/index.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

const QuestCard = ({ quest, isSelected, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`quest-card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(quest)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="quest-content">
        <div className="quest-image-container">
          <img src={quest.image} alt={quest.title} className="quest-image" />
        </div>
        <h3 className="quest-title">{quest.title}</h3>
      </div>
    </motion.div>
  );
};

export default QuestCard;
