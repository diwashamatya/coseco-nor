import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="landing-container">
      {/* Blurry Glassmorphism Navbar */}
      <nav className="navbar">
        <div className="nav-logo">PALANTIR</div>
        <div className="nav-actions">
          <button className="btn-primary">Get Started</button>
          <button className="btn-icon">🔍</button>
          <button className="btn-icon">☰</button>
        </div>
      </nav>

      <main className="hero-content">
        <div className="text-section">
          <span className="subtitle">WARP SPEED</span>
          <h1 className="main-title">
            The Manufacturing OS for American <br />
            <span>Re-Industrialization ↗</span>
          </h1>
        </div>

        <div className="vertical-labels">
          <div className="label-item">Defense</div>
          <div className="label-item">Commercial</div>
          <div className="label-item">Industrial</div>
        </div>
      </main>

      <footer className="hero-footer">
        <div className="footer-col">
          <p>
            MODERN OPERATING SYSTEM
            <br />
            SOFTWARE DEFINED
            <br />
            MANUFACTURING ON AIP.
          </p>
        </div>
        <div className="footer-col">
          <p className="label">BUILT ON:</p>
          <ul>
            <li>→ ONTOLOGY</li>
            <li>→ AIP</li>
            <li>→ INDUSTRIAL AI</li>
          </ul>
        </div>
        <div className="footer-col">
          <p className="label">WARP SPEED →</p>
          <p>
            ENHANCES VISIBILITY AND ADAPTABILITY ACROSS THE ENTIRE PRODUCT
            LIFECYCLE FROM DESIGN TO USE IN THE FIELD.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
