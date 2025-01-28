// src/components/layout/GuildReceptionist.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./GuildReceptionist.css";

// Import all expressions
import Ribbon1 from "../../assets/images/Ribbon1.png"; // Normal expression
import Ribbon2 from "../../assets/images/Ribbon2.png"; // Neutral Expression
import Ribbon3 from "../../assets/images/Ribbon3.png"; // Eyes closed smile
import Ribbon4 from "../../assets/images/Ribbon4.png"; // Happy expression

const GuildReceptionist = () => {
  // State to manage current expression and dialogue
  const [currentExpression, setCurrentExpression] = useState(Ribbon1);
  const [dialogue, setDialogue] = useState("");
  const [isGreeting, setIsGreeting] = useState(true);

  // Blink interval effect
  useEffect(() => {
    let isBlinking = false; // Add this flag to prevent blink interruption

    // Function to handle blinking
    const blink = () => {
      if (!isBlinking) {
        isBlinking = true;
        setCurrentExpression(Ribbon3); // Eyes closed
        setTimeout(() => {
          setCurrentExpression(Ribbon2); // Back to gentle smile
          isBlinking = false;
        }, 150); // Duration of blink
      }
    };

    // Random interval between blinks (between 2 and 6 seconds)
    const getRandomBlinkInterval = () =>
      Math.floor(Math.random() * (6000 - 2000) + 2000);

    // Set up recurring blink
    const blinkInterval = setInterval(blink, getRandomBlinkInterval());

    // Cleanup function
    return () => {
      clearInterval(blinkInterval);
      isBlinking = false;
    };
  }, []); // Empty dependency array since we're managing state internally

  // Welcome messages for first-time visitors
  const welcomeMessages = [
    "Welcome to the Guild! I'm here to help guide you through our halls.",
    "You'll find various sections to explore. Where would you like to begin?",
    "Feel free to ask me about any of our facilities!",
  ];

  // Function to handle expression changes
  const changeExpression = (newExpression, duration = 3000) => {
    setCurrentExpression(newExpression);
    // Return to default expression after duration
    setTimeout(() => {
      setCurrentExpression(Ribbon1);
    }, duration);
  };

  // Initial greeting animation
  useEffect(() => {
    if (isGreeting) {
      // Cycle through welcome messages
      welcomeMessages.forEach((message, index) => {
        setTimeout(() => {
          setDialogue(message);
          changeExpression(index % 2 === 0 ? Ribbon2 : Ribbon4);
        }, index * 4000);
      });
      setIsGreeting(false);
    }
  }, [isGreeting]);

  return (
    <div className="receptionist-container">
      {/* Character Image with breathing animation */}
      <motion.div
        className="receptionist-character"
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
          className="receptionist-image"
        />
      </motion.div>

      {/* Dialogue Box */}
      <AnimatePresence>
        {dialogue && (
          <motion.div
            className="dialogue-box"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{dialogue}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GuildReceptionist;
