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
  },
  {
    id: 2,
    title: "Mobile Payments",
    content:
      "Supporting EMV, QR codes, Apple Pay, and Google Pay for a fast and secure commuter experience.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "AFC Solutions",
    content:
      "Automated Fare Collection systems designed for small and medium-sized bus and transport operators.",
    image:
      "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "WizarPOS Partnership",
    content:
      "Integrating world-class Android ticket validators with Coseco's proprietary transit software.",
    image:
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Global Mobility",
    content:
      "Expanding digital transformation in the transit sector across Europe and global markets.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
  },
];

const HeaderShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000;
    const intervalTime = 50;
    const increment = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % headers.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleHeaderClick = (index) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <div className="showcase-container">

      <div className="showcase-header">
        <span className="showcase-subtitle">Our Expertise</span>
        <h1 className="showcase-main-title">Modernizing <span>Global Transit</span></h1>
      </div>
      {/* Header Tabs */}
      <div className="header-tabs">
        {headers.map((header, index) => (
          <div
            key={header.id}
            className={`header-item ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleHeaderClick(index)}
          >
            <span className="header-text">{header.title}</span>
            <div
              className="fill-bar"
              style={{ width: index === activeIndex ? `${progress}%` : "0%" }}
            />
          </div>
        ))}
        {/* Contact Us button separated from the map loop */}
        <button
          className="see-all-btn"
          onClick={() => (window.location.href = "/contact")}
        >
          CONTACT US
        </button>
      </div>

      {/* Dynamic Content Area */}
      <div className="content-render-area">
        <div className="text-side">
          <h2>{headers[activeIndex].title}</h2>
          <p>{headers[activeIndex].content}</p>
        </div>
        <div className="image-side">
          <img
            src={headers[activeIndex].image}
            alt={headers[activeIndex].title}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderShowcase;
