// src/components/guild/GuildDesk/index.jsx
import { motion } from "framer-motion";
import "./styles.css";

function GuildDesk({ children, deskContent }) {
  return (
    <div className="guild-area">
      {/* Main content area */}
      <div className="content-section">{children}</div>

      {/* Desk overlay */}
      <div className="desk">
        <div className="desk-top" />
        <div className="desk-info">{deskContent}</div>
      </div>
    </div>
  );
}

export default GuildDesk;
