import React, { useState, useEffect } from "react";
import "./HeaderShowcase.css";

const headers = [
  {
    id: 1,
    title: "Defense Reformation",
    content: "Transforming military operations with AI.",
  },
  {
    id: 2,
    title: "Warp Speed",
    content: "Accelerating industrial manufacturing cycles.",
  },
  {
    id: 3,
    title: "Working Intelligence",
    content: "Human-machine teaming for complex tasks.",
  },
  {
    id: 4,
    title: "DevCon 3",
    content: "Building the next generation of software.",
  },
  {
    id: 5,
    title: "AIPCon 8",
    content: "Exploring the future of Artificial Intelligence.",
  },
];

const HeaderShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000; // 5 seconds per header
    const intervalTime = 50; // Update every 50ms
    const increment = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Move to next header and reset progress
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
    setProgress(0); // Reset progress when manually clicked
  };

  return (
    <div className="showcase-container">
      {/* Header Tabs */}
      <div className="header-tabs">
        {headers.map((header, index) => (
          <div
            key={header.id}
            className={`header-item ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleHeaderClick(index)}
          >
            <span className="header-text">{header.title}</span>
            {/* The Background Filling Animation */}
            <div
              className="fill-bar"
              style={{ width: index === activeIndex ? `${progress}%` : "0%" }}
            />
          </div>
        ))}
        <button className="see-all-btn">SEE ALL</button>
      </div>

      {/* Dynamic Content Area (Renders based on active header) */}
      <div className="content-render-area">
        <h2>{headers[activeIndex].title}</h2>
        <p>{headers[activeIndex].content}</p>
      </div>
    </div>
  );
};

export default HeaderShowcase;
