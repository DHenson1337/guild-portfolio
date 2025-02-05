// src/pages/Library.jsx
import { useState, useEffect } from "react";
import { useGuild } from "../context/GuildContext";
import { motion, AnimatePresence } from "framer-motion";
import GuildArea from "../components/guild/GuildArea";
import BookShelf from "../components/guild/Library/BookShelf";
import WizardLoader from "../components/shared/WizardLoader";
import openBookImg from "/assets/images/library/ui/open-book.png";
import "../components/guild/Library/styles.css";

function Library() {
  const [selectedSkillInfo, setSelectedSkillInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { updateDialogue } = useGuild();

  useEffect(() => {
    updateDialogue(
      "Welcome to the Library! Here you can explore all the skills and knowledge I've acquired."
    );
  }, []);

  if (isLoading) {
    return (
      <WizardLoader onFinished={() => setIsLoading(false)} duration={1800} />
    );
  }

  const deskContent = selectedSkillInfo ? (
    <motion.div
      key={selectedSkillInfo.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="desk-book-container"
    >
      <div className="open-book-display">
        <img src={openBookImg} alt="" className="open-book-bg" />
        <div className="book-content">
          <div className="icon-container">
            <img
              src={selectedSkillInfo.icon}
              alt={selectedSkillInfo.title}
              className="skill-icon"
            />
          </div>
          <h2>{selectedSkillInfo.title}</h2>
        </div>
      </div>
    </motion.div>
  ) : (
    <div className="desk-book-container">
      <div className="open-book-display">
        <img src={openBookImg} alt="" className="open-book-bg" />
        <div className="book-content">
          <h2>Welcome to the Library</h2>
        </div>
      </div>
    </div>
  );

  return (
    <GuildArea deskContent={deskContent}>
      <BookShelf onSkillSelect={setSelectedSkillInfo} />
    </GuildArea>
  );
}

export default Library;
