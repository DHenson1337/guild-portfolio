import React from "react";
import GuildDesk from "../components/guild/GuildDesk";
import GuildReceptionist from "../components/guild/GuildReceptionist";
import "./Reception.css";

function Reception() {
  return (
    <div className="guild-container">
      {/* Left column: Ribbon & desk */}
      <div className="left-panel">
        <GuildReceptionist />
        <GuildDesk />
      </div>

      {/* Right column: placeholder or future content */}
      <div className="right-panel">
        {/* This will eventually hold your scrollable content like a quest board */}
        <h2>Right Panel Content Goes Here</h2>
      </div>
    </div>
  );
}

export default Reception;
