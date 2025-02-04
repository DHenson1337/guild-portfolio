// src/components/guild/Library/BookCard/index.jsx
import { motion } from "framer-motion";
import "./styles.css";

const BookCard = ({ skill, isSelected, onSelect }) => {
  return (
    <motion.div
      className={`book-card clickable ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(skill)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="book-content">
        <div className="book-image-container">
          <img src={skill.bookImage} alt={skill.title} className="book-image" />
        </div>
        <div className="book-title">{skill.title}</div>
        <div className="book-icon">
          <img src={skill.icon} alt="" aria-hidden="true" />
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
