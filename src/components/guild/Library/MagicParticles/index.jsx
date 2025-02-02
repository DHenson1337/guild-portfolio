// src/components/guild/Library/MagicParticles/index.jsx
import { useEffect, useRef } from "react";
import "./styles.css";

const MagicParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    class MagicOrb {
      constructor() {
        this.reset();
      }

      reset() {
        // Start from bottom of screen
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 10;
        this.size = Math.random() * 4 + 2;
        this.speedY = -(Math.random() * 0.5 + 0.2); // Slower upward movement
        this.opacity = 0;
        this.fadeSpeed = 0.005;
        this.isDarkTheme = document.body.classList.contains("dark-theme");
        this.wobbleOffset = Math.random() * Math.PI * 2;
        this.wobbleSpeed = 0.02;
      }

      update() {
        this.y += this.speedY;

        // Gentle wobble
        this.x += Math.sin(this.y * 0.02 + this.wobbleOffset) * 0.3;

        // Fade in/out
        if (this.y > canvas.height * 0.75) {
          this.opacity += this.fadeSpeed;
        } else if (this.y < canvas.height * 0.25) {
          this.opacity -= this.fadeSpeed;
        }

        this.opacity = Math.min(0.4, Math.max(0, this.opacity));

        // Reset when past top
        if (this.y < -10 || this.opacity <= 0) {
          this.reset();
        }
      }

      draw() {
        const baseColor = this.isDarkTheme
          ? [96, 165, 250] // Blue for dark theme
          : [255, 215, 0]; // Gold for light theme

        // Main glow
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 2
        );

        gradient.addColorStop(
          0,
          `rgba(${baseColor.join(",")},${this.opacity})`
        );
        gradient.addColorStop(
          0.5,
          `rgba(${baseColor.join(",")},${this.opacity * 0.5})`
        );
        gradient.addColorStop(1, "rgba(255,255,255,0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create fewer particles for a calmer effect
    const createParticles = () => {
      for (let i = 0; i < 15; i++) {
        particles.push(new MagicOrb());
      }
    };
    createParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="magic-particles" />;
};

export default MagicParticles;
