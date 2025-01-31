// src/components/guild/GuildArea/index.jsx
import { motion } from "framer-motion";
import GuildReceptionist from "../GuildReceptionist";
import GuildDesk from "../GuildDesk";
import "./styles.css";

function GuildArea({ children, deskContent }) {
  return (
    <div className="guild-container">
      {/* Left column: Receptionist & desk */}
      <motion.div
        className="left-panel"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GuildReceptionist />
        <GuildDesk>{deskContent}</GuildDesk>
      </motion.div>

      {/* Right column: Content area */}
      <motion.div
        className="right-panel"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default GuildArea;
