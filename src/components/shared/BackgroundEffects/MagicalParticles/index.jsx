import { useEffect, useRef } from "react";
import "./styles.css";

const MagicalParticles = () => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const maxParticles = 10; // Reduced from 15

  useEffect(() => {
    const container = containerRef.current;

    const createParticle = () => {
      // Check if we've reached max particles
      if (particlesRef.current.length >= maxParticles) {
        return;
      }

      const particle = document.createElement("div");
      particle.className = "magical-particle";

      const startX = Math.random() * window.innerWidth;
      const duration = 15 + Math.random() * 10;
      const offset = -50 + Math.random() * 100;

      particle.style.left = `${startX}px`;
      particle.style.setProperty("--duration", `${duration}s`);
      particle.style.setProperty("--offset", `${offset}px`);

      container.appendChild(particle);
      particlesRef.current.push(particle);

      particle.addEventListener("animationend", () => {
        particle.remove();
        particlesRef.current = particlesRef.current.filter(
          (p) => p !== particle
        );
      });
    };

    // Initial particles - create fewer
    for (let i = 0; i < Math.min(5, maxParticles); i++) {
      setTimeout(createParticle, Math.random() * 2000);
    }

    // Longer interval between particle creation
    const interval = setInterval(createParticle, 5000); // Increased from 3000

    return () => {
      clearInterval(interval);
      particlesRef.current.forEach((particle) => particle.remove());
      particlesRef.current = [];
    };
  }, []);

  return <div ref={containerRef} className="particle-container" />;
};

export default MagicalParticles;
