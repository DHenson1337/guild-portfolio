// src/pages/Reception.jsx
import { useEffect } from "react";
import GuildArea from "../components/guild/GuildArea";
import { useGuild } from "../context/GuildContext";

function Reception() {
  const { updateDialogue } = useGuild();

  useEffect(() => {
    // Update dialogue when component mounts
    updateDialogue(
      "Welcome to the Reception! Choose any quest and I'll share the details."
    );
  }, []); // Empty dependency array means this runs once on mount

  const deskContent = (
    <div>
      <h2>Welcome to the Guild</h2>
      <p>
        I'm here to help guide you through our facilities. Feel free to explore
        our Quest Board for projects, Library for skills, or Bounty Hall for
        experience records.
      </p>
    </div>
  );

  return (
    <GuildArea deskContent={deskContent}>
      {/* Main content area */}
      <div className="reception-content">
        <h2>Main Content</h2>
        <p>Example content...</p>
      </div>
    </GuildArea>
  );
}

export default Reception;
