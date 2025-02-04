// src/components/guild/BountyHall/BountyCard/index.jsx
import { motion } from "framer-motion";
import "./styles.css";

const BountyCard = ({ bounty, isSelected, onSelect }) => {
  // Determine which image to use based on bounty type
  const bountyImage =
    bounty.type === "education"
      ? "/assets/images/bountyHall/knowledge.png"
      : "/assets/images/bountyHall/worker.png";

  return (
    <motion.div
      className={`bounty-card clickable ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(bounty)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bounty-content">
        <h3 className="bounty-position">{bounty.position}</h3>
        <div className="bounty-image-container">
          <img
            src={bountyImage}
            alt={
              bounty.type === "education"
                ? "Education"
                : "Professional Experience"
            }
            className="bounty-image"
          />
        </div>
        <div className="bounty-company">{bounty.company}</div>
      </div>
    </motion.div>
  );
};

export default BountyCard;
