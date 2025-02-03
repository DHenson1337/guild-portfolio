import React from "react";
import "./styles.css";

const MagicalBackground = () => {
  return (
    <div className="magical-background">
      {/* Large Magic Circle */}
      <svg className="magic-circle circle-1" viewBox="0 0 100 100">
        <circle className="outer-ring" cx="50" cy="50" r="45" />
        <circle className="inner-ring" cx="50" cy="50" r="35" />
        {/* Magical Runes */}
        <path className="rune" d="M50 15 L55 25 L45 25 Z" />
        <path className="rune" d="M85 50 L75 55 L75 45 Z" />
        <path className="rune" d="M50 85 L45 75 L55 75 Z" />
        <path className="rune" d="M15 50 L25 45 L25 55 Z" />
      </svg>

      {/* Medium Magic Circle */}
      <svg className="magic-circle circle-2" viewBox="0 0 100 100">
        <circle className="outer-ring" cx="50" cy="50" r="40" />
        <polygon
          className="star"
          points="50,10 61,40 90,40 67,60 77,90 50,70 23,90 33,60 10,40 39,40"
        />
      </svg>

      {/* Small Magic Circle */}
      <svg className="magic-circle circle-3" viewBox="0 0 100 100">
        <circle className="inner-ring" cx="50" cy="50" r="30" />
        <path className="arcane-symbols" d="M50 20 A30 30 0 0 1 80 50" />
        <path className="arcane-symbols" d="M50 80 A30 30 0 0 1 20 50" />
      </svg>

      {/* Parchment Texture Overlay */}
      <div className="parchment-overlay"></div>

      {/* Extra Magical Elements */}
      <div className="magical-sparkles">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              "--delay": `${i * 2}s`,
              "--position": `${i * 20}%`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MagicalBackground;
