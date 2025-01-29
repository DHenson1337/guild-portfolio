// src/context/GuildContext.jsx
import { createContext, useContext, useState, useCallback } from "react";

// Define expression states with their intended uses
export const EXPRESSIONS = {
  TALKING: "TALKING", // Ribbon1 - For when actively speaking
  NEUTRAL: "NEUTRAL", // Ribbon2 - Default state, eyes open
  CLOSED: "CLOSED", // Ribbon3 - For blinking animation
  HAPPY: "HAPPY", // Ribbon4 - For happy/casual smile moments
};

const GuildContext = createContext();

export function GuildProvider({ children }) {
  const [dialogue, setDialogue] = useState(
    "Feel free to ask me about any of our facilities!"
  );
  const [currentExpression, setCurrentExpression] = useState(
    EXPRESSIONS.NEUTRAL
  );
  const [isInteractionEnabled, setIsInteractionEnabled] = useState(true);
  const [isBlinking, setIsBlinking] = useState(false);

  // Natural blinking animation - always transitions from NEUTRAL to CLOSED
  const blink = useCallback(() => {
    if (!isBlinking) {
      setIsBlinking(true);
      setCurrentExpression(EXPRESSIONS.CLOSED);

      setTimeout(() => {
        setCurrentExpression(EXPRESSIONS.NEUTRAL);
        setIsBlinking(false);
      }, 150);
    }
  }, [isBlinking]);

  // Handle dialogue changes with appropriate expressions
  const updateDialogue = useCallback(
    (newDialogue, expression = EXPRESSIONS.TALKING) => {
      setDialogue(newDialogue);
      if (!isBlinking) {
        setCurrentExpression(expression);
      }
    },
    [isBlinking]
  );

  // Click interaction responses
  const randomInteractions = [
    {
      text: "Need help finding your way around?",
      expression: EXPRESSIONS.HAPPY,
    },
    {
      text: "Looking for something specific?",
      expression: EXPRESSIONS.TALKING,
    },
    { text: "I'm here to assist you!", expression: EXPRESSIONS.HAPPY },
  ];

  const handleCharacterClick = useCallback(() => {
    if (!isInteractionEnabled || isBlinking) return;

    const interaction =
      randomInteractions[Math.floor(Math.random() * randomInteractions.length)];
    updateDialogue(interaction.text, interaction.expression);
  }, [isInteractionEnabled, isBlinking, updateDialogue]);

  return (
    <GuildContext.Provider
      value={{
        dialogue,
        currentExpression,
        isInteractionEnabled,
        isBlinking,
        updateDialogue,
        handleCharacterClick,
        blink,
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
