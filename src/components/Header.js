// src/components/Header.js
import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <img
            src="/favicon.png"
            alt="QuizzyPop Mascot"
            className="logo-mascot"
          />
          <span className="logo-text">QuizzyPop</span>
        </Link>
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/features" onClick={closeMenu}>
            Features
          </Link>
          <Link to="/howtoplay" onClick={closeMenu}>
            How to Play
          </Link>
          <Link to="/pricing" onClick={closeMenu}>
            Pricing
          </Link>
          <Link to="/faq" onClick={closeMenu}>
            FAQ
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.rovenkodev.quizzypop"
            onClick={closeMenu}
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
