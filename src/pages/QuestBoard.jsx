// src/pages/QuestBoard.jsx
import { useState } from "react";
import GuildArea from "../components/guild/GuildArea";
import QuestBoard from "../components/guild/QuestBoard";

function QuestBoardPage() {
  const [selectedQuestInfo, setSelectedQuestInfo] = useState(null);

  const deskContent = selectedQuestInfo ? (
    <div>
      <h2>{selectedQuestInfo.title}</h2>
      <img
        src={selectedQuestInfo.image}
        alt={selectedQuestInfo.title}
        style={{ maxWidth: "100%", height: "auto" }}
      />
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
    </div>
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
