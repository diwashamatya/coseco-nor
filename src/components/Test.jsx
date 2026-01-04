import React, { useEffect, useRef, useState } from "react";
import "./Test.css";

const PremiumHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const bubbles = [
    { id: 1, label: "MARINE & OFFSHORE", class: "bubble-top" },
    { id: 2, label: "CORPORATE & MICE", class: "bubble-left" },
    { id: 3, label: "LEISURE & DMC", class: "bubble-bottom" },
  ];

  return (
    <div className="hero-container" ref={containerRef}>
      {/* Decorative Gradient Glows */}
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      <div className={`hero-content ${isVisible ? "is-visible" : ""}`}>
        <h1 className="hero-text">
          <span className="line line-1">ON BOARD</span>
          <span className="line line-2">ON TIME. ANYTIME</span>
          <span className="line line-3">WORLDWIDE.</span>
        </h1>
      </div>

      {bubbles.map((b) => (
        <div key={b.id} className={`bubble-wrapper ${b.class}`}>
          <div className="bubble-mask">
            <div className="bubble-glass"></div>
            <div className="bubble-content">
              <span className="bubble-label">{b.label}</span>
            </div>
          </div>
          <div className="circle-outline"></div>
        </div>
      ))}
    </div>
  );
};

export default PremiumHero;
