import { useEffect } from "react";
import "./styles.css";

const WizardLoader = ({ onFinished, duration = 1500 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinished?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [onFinished, duration]);

  return (
    <div className="loader-container">
      <div className="scene">
        <div className="objects">
          <div className="square"></div>
          <div className="circle"></div>
          <div className="triangle"></div>
        </div>
        <div className="wizard">
          <div className="body"></div>
          <div className="right-arm">
            <div className="right-hand"></div>
          </div>
          <div className="left-arm">
            <div className="left-hand"></div>
          </div>
          <div className="head">
            <div className="beard"></div>
            <div className="face">
              <div className="adds"></div>
            </div>
            <div className="hat">
              <div className="hat-of-the-hat"></div>
              <div className="four-point-star --first"></div>
              <div className="four-point-star --second"></div>
              <div className="four-point-star --third"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="progress"></div>
      <div className="noise"></div>
    </div>
  );
};

export default WizardLoader;
