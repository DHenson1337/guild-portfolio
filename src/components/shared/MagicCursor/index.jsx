// src/components/shared/MagicCursor/index.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles.css";

const MagicCursor = () => {
  const dotRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ball = ballRef.current;

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const dotPos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const ballPos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    // Initial position
    gsap.set(dot, { xPercent: -50, yPercent: -50, x: dotPos.x, y: dotPos.y });
    gsap.set(ball, {
      xPercent: -50,
      yPercent: -50,
      x: ballPos.x,
      y: ballPos.y,
    });

    const mouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      gsap.to(dot, { duration: 0.1, x: mouse.x, y: mouse.y });
    };

    const updatePosition = () => {
      ballPos.x += (mouse.x - ballPos.x) * 0.1;
      ballPos.y += (mouse.y - ballPos.y) * 0.1;
      gsap.set(ball, { x: ballPos.x, y: ballPos.y });
    };

    // Add hover functionality
    const handleMouseOver = (e) => {
      const isQuestLink = e.target.matches(".quest-link");
      const isClickable = e.target.matches(
        'a, button, [role="button"], input, select, textarea, .clickable'
      );

      if (isQuestLink) {
        dot.classList.add("clickable");
        ball.classList.add("clickable", "quest-link-hover");
      } else if (isClickable) {
        dot.classList.add("clickable");
        ball.classList.add("clickable");
      }
    };

    const handleMouseOut = () => {
      dot.classList.remove("clickable", "quest-link-hover");
      ball.classList.remove("clickable", "quest-link-hover");
    };

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    gsap.ticker.add(updatePosition);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      gsap.ticker.remove(updatePosition);
    };
  }, []);

  return (
    <div id="magic-cursor">
      <div ref={dotRef} id="dot"></div>
      <div ref={ballRef} id="ball"></div>
    </div>
  );
};

export default MagicCursor;
