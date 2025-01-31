// src/components/guild/GuildDesk/index.jsx
import { motion } from "framer-motion";
import "./styles.css";

function GuildDesk({ children }) {
  return (
    <div className="desk">
      <div className="desk-top" />
      <motion.div
        className="desk-info"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default GuildDesk;
