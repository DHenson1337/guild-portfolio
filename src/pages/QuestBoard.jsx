// src/pages/QuestBoard.jsx
import { useState, useEffect } from "react";
import { useGuild } from "../context/GuildContext";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import GuildArea from "../components/guild/GuildArea";
import QuestBoard from "../components/guild/QuestBoard";
import WizardLoader from "../components/shared/WizardLoader";
import "./QuestBoard.css";

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

  // Enhanced desk content to include clickable image and live link
  const deskContent = selectedQuestInfo ? (
    <motion.div
      key={selectedQuestInfo.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="quest-details"
    >
      <h2>{selectedQuestInfo.title}</h2>
      {selectedQuestInfo.liveLink && (
        <a
          href={selectedQuestInfo.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="live-link"
        >
          <ExternalLink size={16} /> View Live Project
        </a>
      )}
      {selectedQuestInfo.image && (
        <a
          href={selectedQuestInfo.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="quest-image-link"
        >
          <motion.img
            src={selectedQuestInfo.image}
            alt={selectedQuestInfo.title}
            className="quest-detail-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </a>
      )}
    </motion.div>
  ) : (
    <div className="quest-welcome">
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
