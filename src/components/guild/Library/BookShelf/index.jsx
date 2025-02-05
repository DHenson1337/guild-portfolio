// src/components/guild/Library/BookShelf/index.jsx
import { useState } from "react";
import { useGuild } from "../../../../context/GuildContext";
import BookCard from "../BookCard";
// import MagicParticles from "../MagicParticles";
import "./styles.css";

// Import book images
import bookRed from "../../../../assets/images/library/books/book-red.png";
import bookBlue from "../../../../assets/images/library/books/book-blue.png";
import bookNavy from "../../../../assets/images/library/books/book-navy.png";
import bookBrown from "../../../../assets/images/library/books/book-brown.png";
import bookGreen from "../../../../assets/images/library/books/book-green.png";

// Import logos (icons)
import react from "../../../../assets/images/library/icons/react-logo.png";
import node from "../../../../assets/images/library/icons/nodejs-logo.png";
import bootstrap from "../../../../assets/images/library/icons/bootstrap-logo.png";
import css from "../../../../assets/images/library/icons/css-logo.png";
import html from "../../../../assets/images/library/icons/html-logo.png";
import js from "../../../../assets/images/library/icons/js-logo.png";
import mernstack from "../../../../assets/images/library/icons/mernstack-logo.png";
import mongodb from "../../../../assets/images/library/icons/mongodb-logo.png";
import phaser from "../../../../assets/images/library/icons/phaser-logo.png";
import tailwind from "../../../../assets/images/library/icons/tailwind-logo.png";

const BookShelf = ({ onSkillSelect }) => {
  const { updateDialogue } = useGuild();
  const [selectedBook, setSelectedBook] = useState(null);

  // Fantasy-themed skill data
  const skills = [
    {
      id: 1,
      title: "React",
      description:
        "Ah, behold the art of React! With its enchanted components, our guild forges mesmerizing user interfaces that captivate the eye of any traveler.",
      icon: react,
      bookImage: bookRed,
    },
    {
      id: 2,
      title: "Node.js",
      description:
        "Step into the realm of Node.js, where our arcane servers wield the power of JavaScript to conjure robust, lightning-fast backend magic.",
      icon: node,
      bookImage: bookBlue,
    },
    {
      id: 3,
      title: "Bootstrap",
      description:
        "With Bootstrap as our sturdy shield, our designs adapt seamlessly to any device, be it a grand desktop or a humble mobile device.",
      icon: bootstrap,
      bookImage: bookNavy,
    },
    {
      id: 4,
      title: "CSS",
      description:
        "Through the mystic runes of CSS, our pages are adorned with style and flair, transforming plain elements into works of art.",
      icon: css,
      bookImage: bookBrown,
    },
    {
      id: 5,
      title: "HTML",
      description:
        "The ancient language of HTML forms the very foundation of our digital castle, structuring the content that tells our epic tale.",
      icon: html,
      bookImage: bookGreen,
    },
    {
      id: 6,
      title: "JavaScript",
      description:
        "JavaScript breathes life into our creations, imbuing them with interactive spells that delight and engage any who dare to explore.",
      icon: js,
      // Reusing a book color to cycle through the collection
      bookImage: bookRed,
    },
    {
      id: 7,
      title: "MERN Stack",
      description:
        "The MERN Stack is our full arsenal—a harmonious blend of magic and code that empowers our guild to craft complete, modern web applications.",
      icon: mernstack,
      bookImage: bookBlue,
    },
    {
      id: 8,
      title: "MongoDB",
      description:
        "Within the crypts of MongoDB, vast repositories of lore (data) are stored securely, waiting to be summoned at a moment's notice.",
      icon: mongodb,
      bookImage: bookNavy,
    },
    {
      id: 9,
      title: "Phaser",
      description:
        "Phaser brings interactive adventures to life, casting spells that animate the realm of 2D games and digital quests.",
      icon: phaser,
      bookImage: bookBrown,
    },
    {
      id: 10,
      title: "Tailwind CSS",
      description:
        "Swift as the wind, Tailwind CSS enables rapid UI crafting, channeling a flurry of utility classes to shape our designs with ease.",
      icon: tailwind,
      bookImage: bookGreen,
    },
  ];

  // Updated handler to simulate the guild receptionist's narration
  const handleBookSelect = (skill) => {
    setSelectedBook(skill);
    updateDialogue({
      type: "html",
      content: `"<span class="tech-highlight">${skill.title}</span>": ${skill.description}`,
    });
    onSkillSelect({
      title: skill.title,
      icon: skill.icon,
      description: skill.description,
    });
  };

  return (
    <div className="bookshelf-container">
      {/* <MagicParticles /> */}
      <div className="bookshelf">
        <div className="books-grid">
          {skills.map((skill) => (
            <BookCard
              key={skill.id}
              skill={skill}
              isSelected={selectedBook?.id === skill.id}
              onSelect={handleBookSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
