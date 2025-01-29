// src/components/guild/GuildDesk.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useGuild, EXPRESSIONS } from "../../context/GuildContext";
import "./GuildDesk.css";

// Import character expressions
import Ribbon1 from "../../assets/images/Ribbon1.png";
import Ribbon2 from "../../assets/images/Ribbon2.png";
import Ribbon3 from "../../assets/images/Ribbon3.png";
import Ribbon4 from "../../assets/images/Ribbon4.png";

const expressionMap = {
  [EXPRESSIONS.TALKING]: Ribbon1, // Speaking pose
  [EXPRESSIONS.NEUTRAL]: Ribbon2, // Default, eyes open
  [EXPRESSIONS.CLOSED]: Ribbon3, // Blinking
  [EXPRESSIONS.HAPPY]: Ribbon4, // Happy/casual smile
};

function GuildDesk({ children, title = "Guild Reception Desk" }) {
  const {
    dialogue,
    currentExpression,
    isInteractionEnabled,
    handleCharacterClick,
    blink,
  } = useGuild();

  // Handle natural blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (Math.random() < 0.2) {
        // 20% chance to blink each interval
        blink();
      }
    }, 3000); // Check every 3 seconds

    return () => clearInterval(blinkInterval);
  }, [blink]);

  return (
    <div className="guild-area">
      <div className="character-section">
        <div className="character-container">
          <motion.div
            className="character-wrapper"
            animate={{ y: [-2, 2] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4,
              ease: "easeInOut",
            }}
          >
            {/* Dialogue Box */}
            <motion.div
              className="dialogue-box"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {dialogue}
            </motion.div>

            {/* Character */}
            <div
              className="character"
              onClick={handleCharacterClick}
              style={{
                cursor: isInteractionEnabled ? "pointer" : "default",
              }}
            >
              <img
                src={expressionMap[currentExpression]}
                alt="Guild Receptionist"
                className="character-image"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section with Title */}
      <div className="content-section">
        <h2 className="content-title">{title}</h2>
        {children}
      </div>

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
