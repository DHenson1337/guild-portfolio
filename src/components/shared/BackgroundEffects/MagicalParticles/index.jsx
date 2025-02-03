import { useEffect, useRef } from "react";
import "./styles.css";

const MagicalParticles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const particles = [];

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "magical-particle";

      // Random starting position
      const startX = Math.random() * window.innerWidth;
      const duration = 15 + Math.random() * 10;
      const offset = -50 + Math.random() * 100;

      particle.style.left = `${startX}px`;
      particle.style.setProperty("--duration", `${duration}s`);
      particle.style.setProperty("--offset", `${offset}px`);

      container.appendChild(particle);
      particles.push(particle);

      // Remove particle after animation
      particle.addEventListener("animationend", () => {
        particle.remove();
        const index = particles.indexOf(particle);
        if (index > -1) particles.splice(index, 1);
      });
    };

    // Create initial particles
    for (let i = 0; i < 15; i++) {
      setTimeout(createParticle, Math.random() * 2000);
    }

    // Continuously create new particles
    const interval = setInterval(createParticle, 3000);

    // Cleanup
    return () => {
      clearInterval(interval);
      particles.forEach((particle) => particle.remove());
    };
  }, []);

  return <div ref={containerRef} className="particle-container" />;
};

export default MagicalParticles;
