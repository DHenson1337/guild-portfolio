import { useEffect, useState } from "react";
import "./styles.css";

const DotsLoader = ({ onFinished }) => {
  const [shouldDisperse, setShouldDisperse] = useState(false);

  useEffect(() => {
    // Start disperse animation after 1.2 seconds
    const disperseTimer = setTimeout(() => {
      setShouldDisperse(true);
    }, 1200);

    // Call onFinished after disperse animation (1.5 seconds total)
    const finishTimer = setTimeout(() => {
      onFinished?.();
    }, 1500);

    return () => {
      clearTimeout(disperseTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  return (
    <div className="loader-container">
      <div className={`loader ${shouldDisperse ? "disperse" : ""}`}>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--text"></div>
      </div>
    </div>
  );
};

export default DotsLoader;
