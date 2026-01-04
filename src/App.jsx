import React from "react";
import "./Hero.css";
import HeaderShowcase from "./components/HeaderShowCase";
import Coseco from "../public/images/CosecoLogo.jpg"
import Services from './components/Services'
import ServicesTypography from "./components/ServicesTypography";
import PerspectiveScroll from "./components/PerspectiveScroll";
import TeamPage from "./components/TeamPage";
import Home from "./components/Home";
import Test from "./components/Test";
import People from "./components/People";
import GlobalPresence from "./components/Global";
import NavBar from './components/NavBar/NavBar'


const Hero = () => {
  return (
    <div className="landing-container">
      {/* Permanent Floating Sticky Navbar */}
      <nav className="navbar-floating">
        <img className="nav-logo" src={Coseco}></img>

       
        <ul className="nav-links">
          <li>Home</li>
          <li>Solutions</li>
          <li>Contact</li>
          <li>About us</li>
          <li>News & Blog</li>
          <li>Team</li>
          <li>Customers</li>
        </ul>
      </nav>
      <NavBar />
      <People />
      <GlobalPresence />
      <Test /> 
      {/* <Home></Home> */}
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
      <HeaderShowcase />
      <Services />
      <ServicesTypography />
      <PerspectiveScroll />
      <TeamPage />
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
