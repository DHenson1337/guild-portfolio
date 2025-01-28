// src/components/guild/GuildDesk.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./GuildDesk.css";

// Import character expressions
import Ribbon1 from "../../assets/images/Ribbon1.png";
import Ribbon2 from "../../assets/images/Ribbon2.png";
import Ribbon3 from "../../assets/images/Ribbon3.png";
import Ribbon4 from "../../assets/images/Ribbon4.png";

function GuildDesk({ children }) {
  // State management for character expressions and dialogue
  const [currentExpression, setCurrentExpression] = useState(Ribbon1);
  const [dialogue, setDialogue] = useState(
    "Feel free to ask me about any of our facilities!"
  );

  // Theme colors for desk styling
  const woodColor = "var(--secondary-light)";
  const accentColor = "var(--accent-dark)";

  // Handle character blinking with improved timing
  useEffect(() => {
    let isBlinking = false;
    let blinkTimeout;

    const blink = () => {
      if (!isBlinking) {
        isBlinking = true;
        setCurrentExpression(Ribbon3); // Close eyes

        // Open eyes after short duration
        blinkTimeout = setTimeout(() => {
          setCurrentExpression(Ribbon2);
          isBlinking = false;
        }, 150);
      }
    };

    // Set up recurring blink with random intervals
    const blinkInterval = setInterval(() => {
      blink();
    }, Math.random() * 4000 + 2000); // Random interval between 2-6 seconds

    // Cleanup function to prevent memory leaks
    return () => {
      clearInterval(blinkInterval);
      clearTimeout(blinkTimeout);
    };
  }, []);

  return (
    <div className="guild-area">
      {/* Character Section with integrated dialogue */}
      <div className="character-section">
        <div className="character-container">
          {/* Dialogue box with improved positioning */}
          <motion.div
            className="dialogue-box"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {dialogue}
          </motion.div>

          {/* Character with breathing animation */}
          <motion.div
            className="character"
            animate={{ y: [-2, 2] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <img
              src={currentExpression}
              alt="Guild Receptionist"
              className="character-image"
            />
          </motion.div>
        </div>
      </div>

      {/* Content Section for routed components */}
      <div className="content-section">{children}</div>

      {/* Enhanced desk with decorative elements */}
      <div className="desk">
        {/* Desk top surface with shadow effect */}
        <div className="desk-top">
          <div className="desk-shadow" />
          <div className="desk-decorations">
            {[...Array(5)].map((_, i) => (
              <div key={`decoration-${i}`} className="desk-decoration-line" />
            ))}
          </div>
        </div>

        {/* Desk front panel with enhanced decorative elements */}
        <div className="desk-front">
          <div className="desk-patterns">
            {[...Array(10)].map((_, i) => (
              <div key={`pattern-${i}`} className="desk-pattern-line" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuildDesk;
