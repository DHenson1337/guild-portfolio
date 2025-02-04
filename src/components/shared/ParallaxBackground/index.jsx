// src/components/shared/ParallaxBackground/index.jsx
import { useEffect, useRef } from "react";
import Rellax from "rellax";
import "./styles.css";

const ParallaxBackground = () => {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize Rellax for scroll parallax
    const rellax = new Rellax(".rellax", {
      speed: -2,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    // Mouse parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xValue = (clientX - window.innerWidth / 2) / 50;
      const yValue = (clientY - window.innerHeight / 2) / 50;

      const particles = document.querySelectorAll(".particle");
      particles.forEach((particle, i) => {
        const speed = i * 0.5;
        const x = xValue * speed;
        const y = yValue * speed;
        particle.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      rellax.destroy();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="parallax-container">
      {/* Background layers */}
      <div className="background-layer"></div>

      {/* Scroll parallax elements */}
      <div className="rellax magical-circle" data-rellax-speed="-4"></div>
      <div className="rellax magical-circle" data-rellax-speed="-2"></div>

      {/* Mouse parallax particles */}
      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ParallaxBackground;
