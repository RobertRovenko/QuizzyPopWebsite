// src/components/Hero.js
import React from "react";
import SVGBackground from "./SVGBackground";
import "./Hero.css";
import signupMockup from "../assets/images/signupmockup.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <SVGBackground />

      {/* Single mockup image - CSS handles positioning */}
      <img
        src={signupMockup}
        alt="Quiz App Signup Mockup"
        className="hero-mockup"
      />

      <div className="container hero-content">
        <h1 className="hero-title">
          Test Your Knowledge.
          <span className="highlight-text"> Challenge Your Mind.</span>
        </h1>
        <p className="hero-subtitle">
          Dive into the ultimate quiz experience with daily challenges,
          power-ups, and leaderboard competition. Download now and start popping
          quizzes!
        </p>
        <div className="hero-buttons">
          <a href="#download" className="btn btn-primary">
            Get on Google Play
          </a>
          <a href="#features" className="btn btn-secondary">
            Learn More
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">10+</div>
            <div className="stat-label">Quiz Categories</div>
          </div>
          <div className="stat">
            <div className="stat-number">999+</div>
            <div className="stat-label">Questions</div>
          </div>
          <div className="stat">
            <div className="stat-number">⚡</div>
            <div className="stat-label">Power-Ups</div>
          </div>
          <div className="stat">
            <div className="stat-number">🏆</div>
            <div className="stat-label">Competitions</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
