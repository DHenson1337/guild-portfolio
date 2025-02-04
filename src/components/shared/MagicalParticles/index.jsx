// src/components/shared/MagicalParticles/index.jsx
import { useEffect, useRef } from "react";
import "./styles.css";

const MagicalParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (
          this.x < 0 ||
          this.x > canvas.width ||
          this.y < 0 ||
          this.y > canvas.height
        ) {
          this.reset();
        }

        this.opacity += (Math.random() - 0.5) * 0.01;
        this.opacity = Math.max(0, Math.min(0.5, this.opacity));
      }

      draw() {
        const isDark = document.body.classList.contains("dark-theme");
        ctx.fillStyle = `rgba(255, 255, 255, ${
          isDark ? this.opacity : this.opacity * 0.3
        })`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="magical-particles" />;
};

export default MagicalParticles;
