// src/pages/Reception.jsx
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGuild, EXPRESSIONS } from "../context/GuildContext";
import "./Reception.css";

function Reception() {
  const { updateDialogue } = useGuild();
  const [showAbout, setShowAbout] = useState(false);
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);
  const [isInfoButtonDisabled, setIsInfoButtonDisabled] = useState(false);

  // Information sequence about different sections with longer delays
  const infoSequence = [
    {
      text: "Let me tell you about our facilities! In the Quest Board, you can view various projects completed by our guild members.",
      expression: EXPRESSIONS.TALKING,
      duration: 6000, // 6 seconds for reading
    },
    {
      text: "The Library holds our collection of skills and knowledge. Each book represents a different area of expertise.",
      expression: EXPRESSIONS.HAPPY,
      duration: 5000,
    },
    {
      text: "And in the Bounty Hall, you'll find records of past achievements and experiences.",
      expression: EXPRESSIONS.TALKING,
      duration: 5000,
    },
    {
      text: "Feel free to explore each section at your own pace!",
      expression: EXPRESSIONS.HAPPY,
      duration: 4000,
    },
  ];

  // Handle information button click with proper timing
  const handleRequestInfo = useCallback(() => {
    if (isInfoButtonDisabled) return;

    // Disable button during dialogue
    setIsInfoButtonDisabled(true);

    // Reset to beginning if we've shown all info
    const index =
      currentInfoIndex >= infoSequence.length ? 0 : currentInfoIndex;
    const currentInfo = infoSequence[index];

    if (currentInfo) {
      updateDialogue(currentInfo.text, currentInfo.expression);

      // Enable button after dialogue duration
      setTimeout(() => {
        setIsInfoButtonDisabled(false);
        setCurrentInfoIndex((prev) => (prev + 1) % infoSequence.length);
      }, currentInfo.duration);
    }
  }, [currentInfoIndex, infoSequence, updateDialogue, isInfoButtonDisabled]);

  // Initial welcome sequence with proper timing
  useEffect(() => {
    const welcomeSequence = [
      {
        text: "Welcome to the Guild! I'm Ribbon, your guide through this portfolio.",
        expression: EXPRESSIONS.HAPPY,
        delay: 0,
        duration: 4000,
      },
      {
        text: "I'll be helping you navigate through our various halls and facilities.",
        expression: EXPRESSIONS.TALKING,
        delay: 4500,
        duration: 4000,
      },
      {
        text: "Feel free to click on me anytime if you need assistance!",
        expression: EXPRESSIONS.HAPPY,
        delay: 9000,
        duration: 4000,
      },
    ];

    // Set button as disabled during welcome sequence
    setIsInfoButtonDisabled(true);

    welcomeSequence.forEach(({ text, expression, delay }) => {
      setTimeout(() => {
        updateDialogue(text, expression);
      }, delay);
    });

    // Enable button after welcome sequence
    setTimeout(() => {
      setIsInfoButtonDisabled(false);
    }, 13000); // Total duration of welcome sequence
  }, [updateDialogue]);

  return (
    <motion.div
      className="reception-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to the Guild</h1>

      <div className="welcome-buttons">
        <button
          onClick={handleRequestInfo}
          className={`info-button ${isInfoButtonDisabled ? "disabled" : ""}`}
          disabled={isInfoButtonDisabled}
        >
          Request Information
          {isInfoButtonDisabled && <span className="button-cooldown"></span>}
        </button>
        <button
          onClick={() => setShowAbout(!showAbout)}
          className="about-button"
        >
          About the Guild Master
        </button>
      </div>

      <AnimatePresence mode="wait">
        {showAbout && (
          <motion.div
            className="about-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2>About Me</h2>
            <div className="about-content">{/* Your about content here */}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Reception;
