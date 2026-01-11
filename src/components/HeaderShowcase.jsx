import React, { useState, useEffect } from "react";
import "./HeaderShowcase.css";

const headers = [
  {
    id: 1,
    title: "Public Transport",
    content:
      "Specialized mobile solutions for public transport operators, streamlining passenger flow and ticketing.",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    position: "left", // Image on left
  },
  {
    id: 2,
    title: "Mobile Payments",
    content:
      "Supporting EMV, QR codes, Apple Pay, and Google Pay for a fast and secure commuter experience.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    position: "right", // Image on right
  },
  {
    id: 3,
    title: "AFC Solutions",
    content:
      "Automated Fare Collection systems designed for small and medium-sized bus and transport operators.",
    image:
      "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=800",
    position: "left", // Image on left
  },
  {
    id: 4,
    title: "WizarPOS Partnership",
    content:
      "Integrating world-class Android ticket validators with Coseco's proprietary transit software.",
    image:
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
    position: "right", // Image on right
  },
  {
    id: 5,
    title: "Global Mobility",
    content:
      "Expanding digital transformation in the transit sector across Europe and global markets.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
    position: "left", // Image on left
  },
];

const HeaderShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % headers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentHeader = headers[activeIndex];

  return (
    <div className="showcase-wrapper">
      <h1 className="showcase-title">Customer success is our priority</h1>

      <div
        className={`showcase-card ${
          currentHeader.position === "right" ? "reverse" : ""
        }`}
      >
        {/* Image Panel */}
        <div className="showcase-visual">
          <div className="mockup-container">
            <img
              src={currentHeader.image}
              alt="Device Mockup"
              className="device-img"
            />
          </div>
        </div>

        {/* Content Panel */}
        <div className="showcase-content">
          <div className="content-inner">
            <h2 className="content-title">{currentHeader.title}</h2>
            <p className="content-text">{currentHeader.content}</p>

            <div className="action-row">
              <button className="case-study-btn">
                LEARN MORE <span>→</span>
              </button>

              {/* Progress Dots */}
              <div className="dot-navigation">
                {headers.map((_, index) => (
                  <div
                    key={index}
                    className={`nav-dot ${
                      index === activeIndex ? "active" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderShowcase;
