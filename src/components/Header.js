// src/components/Header.js
import React, { useState } from "react";
import "./Header.css";
import qpopmascot from "../assets/images/qpopmascot.png";
import { Link } from "react-router-dom";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src={qpopmascot} alt="QuizzyPop" className="logo-mascot" />
          <span className="logo-text">QUIZZYPOP</span>
        </Link>
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#features" onClick={closeMenu}>
            Features
          </a>
          <a href="#how-to-play" onClick={closeMenu}>
            How to Play
          </a>
          <a href="#leaderboard" onClick={closeMenu}>
            Leaderboard
          </a>
          <Link to="/pricing">Pricing</Link>

          <Link to="/faq">FAQ</Link>
          <a
            href="https://play.google.com/apps/testing/com.rovenkodev.quizzypop"
            onClick={closeMenu}
            className="download-btn"
          >
            Download
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
