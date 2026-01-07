import React, { useState } from "react";
import "./UseCases.css";

const cases = [
  "Urban Bus Operators",
  "Regional Transit Authorities",
  "Metro & Light Rail Systems",
  "Smart Cities Initiatives",
];

const descriptions = [
  "Streamline operations with automated fare collection and real-time tracking for urban bus networks.",
  "Centralized management systems for regional transportation coordination and planning.",
  "Integrated solutions for metro systems with seamless passenger experience and operational efficiency.",
  "Comprehensive smart mobility platforms for modern urban development and sustainability.",
];

const UseCases = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="usecases-section">
      <h2 className="section-title">
        <span>Who We Serve</span>
      </h2>

      <div className="usecases-grid">
        {cases.map((item, index) => (
          <div
            className="usecase-card"
            key={index}
            data-index={index + 1}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span>{item}</span>
            {hoveredIndex === index && (
              <div className="usecase-description">{descriptions[index]}</div>
            )}
            {hoveredIndex === index && (
              <a href="#" className="usecase-cta">
                Learn More
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
