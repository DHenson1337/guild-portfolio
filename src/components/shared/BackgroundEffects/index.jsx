import React from "react";
import MagicalParticles from "./MagicalParticles";
import MagicalBackground from "../MagicalBackground";
import "./styles.css";

const BackgroundEffects = () => {
  return (
    <>
      <MagicalBackground />
      <div className="ambient-glow">
        <div className="glow-point"></div>
        <div className="glow-point"></div>
        <div className="glow-point"></div>
      </div>
      <MagicalParticles />
    </>
  );
};

export default BackgroundEffects;
