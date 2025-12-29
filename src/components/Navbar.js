// src/components/Navbar.js
import React, { useState } from "react";

const Navbar = ({ theme, onToggleTheme, onNavClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    if (onNavClick) onNavClick(sectionId);
    setMobileOpen(false);
  };

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  return (
    <header>
      <div className="container">
        <div className="nav">
          {/* LEFT */}
          <div className="nav-left">
            <div className="nav-logo-circle">ML</div>
            <div>
              <div className="nav-name">Manoranjan Lakshminarayanappa</div>
              <div className="nav-tagline">Software Engineer (New Grad)</div>
            </div>
          </div>

          {/* CENTER */}
          <nav className="nav-links">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("about");
              }}
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("projects");
              }}
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("skills");
              }}
            >
              Skills
            </a>
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("education");
              }}
            >
              Education
            </a>
            <a
              href="#how-i-work"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("how-i-work");
              }}
            >
              How I Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
            >
              Contact
            </a>
          </nav>

          {/* RIGHT */}
          <div className="nav-right">
            <div className="nav-cta">
              <button
                type="button"
                className="btn btn-primary nav-cta-btn"
                onClick={() => handleNavClick("contact")}
              >
                Let’s Connect
              </button>
            </div>

            <button
              type="button"
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label="Toggle light and dark mode"
              title="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
