import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Coseco from "../../public/images/CosecoLogo.jpg";
import "./RootLayout.css";
import Footer from "./Footer";

const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll for Glassy Navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Body Lock when Menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => {
    // Small delay ensures the Router processes the link click 
    // before the modal DOM state changes
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 10);
  };

  return (
    <div className="layout-container">
      {/* NAVBAR */}
      <nav
        className={`navbar ${isMenuOpen ? "hidden" : ""} ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="navbar-content">
          <NavLink to="/" className="logo-link" onClick={closeMenu}>
            <img src={Coseco} alt="Coseco Logo" className="logo" />
          </NavLink>

          <div className="desktop-nav">
            <ul className="nav-links">
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/services">SERVICES</NavLink>
              </li>
              <li>
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT US</NavLink>
              </li>
            </ul>
          </div>

          {/* <button
            className="burger-btn"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="burger-svg"
            >
              <line
                className="line-top"
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                className="line-mid"
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                className="line-bot"
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button> */}

          <div className="nav-actions">
            {/* Theme / Language Switcher SVG */}
            <button className="icon-btn theme-toggle" aria-label="Switch Theme">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            </button>

            <button
              className="icon-btn lang-toggle"
              aria-label="Change Language"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </button>

            {/* Existing Burger Button */}
            <button
              className="burger-btn"
              onClick={toggleMenu}
              aria-label="Open menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="burger-svg"
              >
                <line
                  className="line-top"
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  className="line-mid"
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  className="line-bot"
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* FULLSCREEN GLASS MODAL */}
      <div className={`fullscreen-modal ${isMenuOpen ? "active" : ""}`}>
        <button
          className="modal-close-btn"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="modal-content">
          <div className="modal-logo">
            <img src={Coseco} alt="Coseco Logo" className="logo" />
          </div>

          <div className="menu-grid">
            <div className="menu-column">
              <h3 className="column-title">Who we are</h3>
              <div className="column-links">
                <NavLink to="/" onClick={closeMenu}>
                  Home
                </NavLink>
                <NavLink to="/about" onClick={closeMenu}>
                  About Us
                </NavLink>
                <NavLink to="/team" onClick={closeMenu}>
                  Team
                </NavLink>
              </div>
            </div>

            <div className="menu-column">
              <h3 className="column-title">What we do</h3>
              <div className="column-links">
                <NavLink to="/services" onClick={closeMenu}>
                  Services
                </NavLink>
                <NavLink to="/customers" onClick={closeMenu}>
                  Customers
                </NavLink>
                <NavLink to="/blog" onClick={closeMenu}>
                  News & Blog
                </NavLink>
              </div>
            </div>

            <div className="menu-column">
              <h3 className="column-title">Connect</h3>
              <div className="column-links">
                <NavLink to="/contact" onClick={closeMenu}>
                  Contact
                </NavLink>
                <NavLink to="/support" onClick={closeMenu}>
                  Support
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;