// src/components/guild/BountyHall/index.jsx
import { useState, useEffect } from "react";
import { useGuild } from "../../../context/GuildContext";
import GuildArea from "../GuildArea";
import BountyBoard from "./BountyBoard";
import BountyDetail from "./BountyDetail";
import WizardLoader from "../../shared/WizardLoader";
import "./styles.css";

function BountyHall() {
  const [selectedBounty, setSelectedBounty] = useState(null);
  const { updateDialogue } = useGuild();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingBounty, setIsLoadingBounty] = useState(false);

  useEffect(() => {
    // Update dialogue when component mounts
    updateDialogue(
      "Welcome to the Bounty Hall! Here you'll find records of past missions and achievements."
    );
  }, []);

  const deskContent = <BountyDetail bounty={selectedBounty} />;

  if (isLoading) {
    return (
      <WizardLoader onFinished={() => setIsLoading(false)} duration={3500} />
    );
  }

  return (
    <GuildArea deskContent={deskContent}>
      <BountyBoard onBountySelect={setSelectedBounty} />
    </GuildArea>
  );
}

export default BountyHall;
