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

//Import logos
import react from "../../../../assets/images/library/icons/react-logo.png";
import node from "../../../../assets/images/library/icons/nodejs-logo.png";

const BookShelf = ({ onSkillSelect }) => {
  const { updateDialogue } = useGuild();
  const [selectedBook, setSelectedBook] = useState(null);

  // Sample skill data - replace with your actual skills
  const skills = [
    {
      id: 1,
      title: "React",
      description:
        "Building user interfaces with React and related technologies",
      icon: react,
      bookImage: bookBrown,
    },
    {
      id: 2,
      title: "Node.js",
      description: "Server-side JavaScript development with Node.js",
      icon: node,
      bookImage: bookRed,
    },
    // Add more skills as needed
  ];

  const handleBookSelect = (skill) => {
    setSelectedBook(skill);
    updateDialogue(`${skill.title}: ${skill.description}`);
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
