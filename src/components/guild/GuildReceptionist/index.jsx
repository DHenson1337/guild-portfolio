// src/components/guild/GuildReceptionist/index.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useGuild } from "../../../context/GuildContext";
import "./styles.css";

// Import new receptionist images
import Receptionist1 from "/assets/images/receptionist/receptionist1.png"; //Dark Theme
import Receptionist2 from "/assets/images/receptionist/receptionist2.png"; //True Evil Theme

function GuildReceptionist() {
  const { dialogue, isInteractionEnabled, handleCharacterClick } = useGuild();
  const [currentReceptionist, setCurrentReceptionist] = useState(Receptionist1);

  // Update receptionist based on theme
  useEffect(() => {
    const updateReceptionist = () => {
      const isDarkTheme = document.body.classList.contains("dark-theme");
      setCurrentReceptionist(isDarkTheme ? Receptionist1 : Receptionist2);
    };

    // Initial setup
    updateReceptionist();

    // Create observer to watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          updateReceptionist();
        }
      });
    });

    // Start observing
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

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
            key={dialogue.content || dialogue}
            transition={{ duration: 0.3 }}
            dangerouslySetInnerHTML={
              typeof dialogue === "object" && dialogue.type === "html"
                ? { __html: dialogue.content }
                : { __html: dialogue }
            }
          />

          {/* Receptionist */}
          <div
            className="character clickable"
            onClick={handleCharacterClick}
            style={{
              cursor: isInteractionEnabled ? "pointer" : "default",
            }}
          >
            <motion.img
              src={currentReceptionist}
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
