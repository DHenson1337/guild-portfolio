// src/components/guild/GuildReceptionist/index.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useGuild, EXPRESSIONS } from "../../../context/GuildContext";
import "./styles.css";

// Import character expressions
import Ribbon1 from "../../../assets/images/ribbon/Ribbon1.png"; // Talking
import Ribbon2 from "../../../assets/images/ribbon/Ribbon2.png"; // Neutral
import Ribbon3 from "../../../assets/images/ribbon/Ribbon3.png"; // Closed
import Ribbon4 from "../../../assets/images/ribbon/Ribbon4.png"; // Happy

const expressionMap = {
  [EXPRESSIONS.TALKING]: Ribbon1,
  [EXPRESSIONS.NEUTRAL]: Ribbon2,
  [EXPRESSIONS.CLOSED]: Ribbon3,
  [EXPRESSIONS.HAPPY]: Ribbon4,
};

function GuildReceptionist() {
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
        // 20% chance to blink every interval
        blink();
      }
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, [blink]);

  return (
    <div className="receptionist-section">
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
            key={dialogue} // Force animation restart on dialogue change
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
            <motion.img
              src={expressionMap[currentExpression]}
              alt="Guild Receptionist"
              className="character-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default GuildReceptionist;
