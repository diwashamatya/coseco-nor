import React, { useEffect, useState } from "react";
import "./Home.css";

const HeroComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const bubbles = [
    { id: 1, label: "MARINE & OFFSHORE", class: "bubble-top" },
    { id: 2, label: "CORPORATE & MICE", class: "bubble-left" },
    { id: 3, label: "LEISURE & DMC", class: "bubble-bottom" },
  ];

  return (
    <div className="hero-container">
      {/* Animated Typography */}
      <h1 className={`hero-text ${isLoaded ? "animate" : ""}`}>
        <span className="line line-left">ON BOARD</span>
        <span className="line line-right">ON TIME. ANYTIME</span>
        <span className="line line-left indent">WORLDWIDE.</span>
      </h1>

      {/* Floating Interactive Bubbles */}
      {bubbles.map((bubble) => (
        <div key={bubble.id} className={`bubble-wrapper ${bubble.class}`}>
          <div className="bubble-glass-container">
            <div className="bubble-blur-layer"></div>
            <div className="circle-outline"></div>
            <span className="bubble-label">{bubble.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroComponent;
