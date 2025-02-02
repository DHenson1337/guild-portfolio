// src/components/guild/BountyHall/BountyDetail/index.jsx
import { motion } from "framer-motion";
import "./styles.css";

const BountyDetail = ({ bounty }) => {
  if (!bounty) {
    return (
      <div className="bounty-detail">
        <h2>Wanted Board</h2>
        <p>Select a bounty to view details about the position.</p>
      </div>
    );
  }

  const bountyImage =
    bounty.type === "education"
      ? "/assets/images/bountyHall/knowledge.png"
      : "/assets/images/bountyHall/worker.png";

  return (
    <div className="bounty-detail">
      <div className="jail-cell">
        <motion.div
          className="bounty-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="bounty-title">{bounty.position}</h2>
          <div className="prisoner-container">
            <img
              src={bountyImage}
              alt={
                bounty.type === "education"
                  ? "Education"
                  : "Professional Experience"
              }
              className="prisoner-image"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BountyDetail;
