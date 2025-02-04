// src/pages/QuestBoard.jsx
import { useState, useEffect } from "react";
import { useGuild } from "../context/GuildContext";
import { motion } from "framer-motion";
import GuildArea from "../components/guild/GuildArea";
import QuestBoard from "../components/guild/QuestBoard";
import WizardLoader from "../components/shared/WizardLoader";

function QuestBoardPage() {
  const [selectedQuestInfo, setSelectedQuestInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { updateDialogue } = useGuild();

  useEffect(() => {
    updateDialogue(
      "Welcome to the Projects Page! Choose any quest(project) and I'll share the details."
    );
  }, []);

  if (isLoading) {
    return (
      <WizardLoader onFinished={() => setIsLoading(false)} duration={1500} />
    );
  }

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
      {selectedQuestInfo.image && (
        <motion.img
          src={selectedQuestInfo.image}
          alt={selectedQuestInfo.title}
          style={{ maxWidth: "100%", height: "auto" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
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
