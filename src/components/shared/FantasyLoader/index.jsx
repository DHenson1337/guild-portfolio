// src/components/shared/FantasyLoader/index.jsx
import { useState, useEffect } from "react";
import "./styles.css";

const FantasyLoader = ({ size = "md" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 2000); // Flip every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className={`fantasy-loader ${size} ${isFlipped ? "flipped" : ""}`}>
        {/* Top Frame */}
        <div className="hourglass-frame top">
          <div className="frame-border" />
          <div className="frame-triangle" />
        </div>

        {/* Bottom Frame */}
        <div className="hourglass-frame bottom">
          <div className="frame-border" />
          <div className="frame-triangle" />
        </div>

        {/* Sand Animation */}
        <div className="sand-container">
          <div className="sand-stream top" />
          <div className="sand-drop" />
          <div className="sand-stream bottom" />
        </div>

        {/* Magical sparkles */}
        <div className="sparkles">
          <div className="sparkle sparkle-1" />
          <div className="sparkle sparkle-2" />
          <div className="sparkle sparkle-3" />
        </div>
      </div>
    </div>
  );
};

export default FantasyLoader;
