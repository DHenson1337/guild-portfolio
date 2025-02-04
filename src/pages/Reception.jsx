// src/pages/Reception.jsx
import { useEffect, useState } from "react";
import GuildArea from "../components/guild/GuildArea";
import { useGuild } from "../context/GuildContext";
import WizardLoader from "../components/shared/WizardLoader";

function Reception() {
  const { updateDialogue } = useGuild();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    updateDialogue(
      "Welcome to the Reception! Choose any quest and I'll share the details."
    );
  }, []);

  if (isLoading) {
    return (
      <WizardLoader onFinished={() => setIsLoading(false)} duration={1200} />
    );
  }

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
      <div className="reception-content">
        <h2>Main Content</h2>
        <p>Example content...</p>
      </div>
    </GuildArea>
  );
}

export default Reception;
