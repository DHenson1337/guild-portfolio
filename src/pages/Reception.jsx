// src/pages/Reception.jsx
import React from "react";
import GuildReceptionist from "../components/guild/GuildReceptionist";
import GuildDesk from "../components/guild/GuildDesk";

function Reception() {
  return (
    <GuildDesk>
      <GuildReceptionist />
    </GuildDesk>
  );
}

export default Reception;
