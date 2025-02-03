import React from "react";
import MagicalParticles from "./MagicalParticles";
import "./styles.css";

const BackgroundEffects = () => {
  return (
    <>
      <div className="ambient-glow">
        <div className="glow-point"></div>
        <div className="glow-point"></div>
        <div className="glow-point"></div>
      </div>
      <div className="scanlines"></div>
      <MagicalParticles />
    </>
  );
};

export default BackgroundEffects;
