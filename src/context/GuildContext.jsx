// src/context/GuildContext.jsx
import { createContext, useContext, useState, useCallback } from "react";

const GuildContext = createContext();

export function GuildProvider({ children }) {
  const [dialogue, setDialogue] = useState(
    "Welcome to the Guild! How may I assist you today?"
  );
  const [isInteractionEnabled, setIsInteractionEnabled] = useState(true);

  // Handle dialogue changes
  const updateDialogue = useCallback((newDialogue) => {
    setDialogue(newDialogue);
  }, []);

  // Click interaction responses
  const randomInteractions = [
    "Need help finding your way around?",
    "Looking for something specific?",
    "I'm here to assist you!",
    "How may I help you today?",
    "Feel free to ask about any of our facilities.",
  ];

  const handleCharacterClick = useCallback(() => {
    if (!isInteractionEnabled) return;

    const interaction =
      randomInteractions[Math.floor(Math.random() * randomInteractions.length)];
    updateDialogue(interaction);
  }, [isInteractionEnabled, updateDialogue]);

  return (
    <GuildContext.Provider
      value={{
        dialogue,
        isInteractionEnabled,
        updateDialogue,
        handleCharacterClick,
        setIsInteractionEnabled,
      }}
    >
      {children}
    </GuildContext.Provider>
  );
}

export function useGuild() {
  const context = useContext(GuildContext);
  if (!context) {
    throw new Error("useGuild must be used within a GuildProvider");
  }
  return context;
}
