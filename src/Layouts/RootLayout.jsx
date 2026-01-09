import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Coseco from "../../public/images/CosecoLogo.jpg";
import "./RootLayout.css";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { themeName, toggleTheme, setTheme, availableThemes } = useTheme();

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => {
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

          <div className="nav-actions">
            {/* Theme Selector */}
            <div className="theme-selector">
              <button
                className="icon-btn theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch Theme (Current: ${themeName})`}
              >
                {themeName === "dark" && (
                  // Moon icon for dark theme
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
                {themeName === "darkBlue" && (
                  // Star icon for blue theme
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
                  </svg>
                )}
                {themeName === "white" && (
                  // Sun icon for light theme
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </button>

              {/* Theme dropdown */}
              <div className="theme-dropdown">
                {availableThemes.map((theme) => (
                  <button
                    key={theme}
                    className={`theme-option ${
                      themeName === theme ? "active" : ""
                    }`}
                    onClick={() => setTheme(theme)}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>

            {/* Language Toggle */}
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

            {/* Burger Button */}
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

          {/* Theme Toggle in Modal */}
          <div className="modal-theme-toggle">
            {availableThemes.map((theme) => (
              <button
                key={theme}
                className={themeName === theme ? "active" : ""}
                onClick={() => {
                  setTheme(theme);
                  closeMenu();
                }}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="main-content">{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
