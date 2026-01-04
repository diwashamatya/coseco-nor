import React, { useState } from "react";
import "./Navigation.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-container">
      {/* 1. LOGO */}
      <div className="nav-logo">ANTAEUS</div>

      {/* 2. BURGER ICON (Fixed at top right) */}
      <div
        className={`burger-icon ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* 3. FULL PAGE OVERLAY */}
      <div className={`full-page-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-content">
          <div className="menu-grid">
            <div className="menu-section">
              <span className="section-title">Who we are</span>
              <ul>
                <li>About us</li>
                <li>Career</li>
                <li>Sustainability</li>
              </ul>
            </div>
            <div className="menu-section">
              <span className="section-title">What we do</span>
              <ul>
                <li>Marine & Offshore</li>
                <li>Corporate & MICE</li>
                <li>Leisure & DMC</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
