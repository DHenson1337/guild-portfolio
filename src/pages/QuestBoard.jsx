// src/pages/QuestBoard.jsx
import { useState, useEffect } from "react";
import { useGuild } from "../context/GuildContext";
import { motion, AnimatePresence } from "framer-motion";
import GuildArea from "../components/guild/GuildArea";
import QuestBoard from "../components/guild/QuestBoard";

function QuestBoardPage() {
  const [selectedQuestInfo, setSelectedQuestInfo] = useState(null);
  const { updateDialogue } = useGuild();

  useEffect(() => {
    // Update dialogue when component mounts
    updateDialogue(
      "Welcome to the Projects Page! Choose any quest(project) and I'll share the details."
    );
  }, []); // Empty dependency array means this runs once on mount

  const deskContent = selectedQuestInfo ? (
    <motion.div
      key={selectedQuestInfo.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: "1rem",
        border: "2px solid var(--secondary)",
        borderRadius: "8px",
        animation: "shimmer-border 1.5s ease-in-out",
      }}
    >
      <h2>{selectedQuestInfo.title}</h2>
      {selectedQuestInfo.liveLink && (
        <a
          href={selectedQuestInfo.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="live-demo-link"
        >
          View Live Demo
        </a>
      )}
      <a
        href={selectedQuestInfo.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="quest-image-link"
      >
        <motion.img
          src={selectedQuestInfo.image}
          alt={selectedQuestInfo.title}
          style={{ maxWidth: "100%", height: "auto", cursor: "pointer" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </a>
    </motion.div>
  ) : (
    <div>
      <h2>Welcome to the Quest Board</h2>
      <p>Select a quest to view more details about the project.</p>
    </div>
  );

  return (
    <GuildArea deskContent={deskContent}>
      <QuestBoard onQuestSelect={setSelectedQuestInfo} />
    </GuildArea>
  );
}

export default QuestBoardPage;
