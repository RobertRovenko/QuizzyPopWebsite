// src/components/Attributions.js
import React from "react";
import "./Attributions.css";
import { Link } from "react-router-dom";

function Attributions() {
  return (
    <div className="attributions-page">
      {/* Header */}
      <header className="attributions-header">
        <div className="attributions-header-content">
          <h1>Asset Attributions</h1>
          <p className="attributions-subtitle">Credit where credit is due</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="attributions-container">
        <div className="attributions-content">
          <section className="attributions-section">
            <h2>🎨 Animated Emojis</h2>

            <div className="attribution-item">
              <h3>Noto Emoji by Google</h3>
              <p>
                Animated emoji used throughout QuizzyPop are from the Noto Emoji
                project.
              </p>
              <div className="attribution-details">
                <p>
                  <strong>License:</strong> Creative Commons Attribution 4.0
                  International (CC BY 4.0)
                </p>
                <p>
                  <strong>Source:</strong>{" "}
                  <a
                    href="https://github.com/googlefonts/noto-emoji"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/googlefonts/noto-emoji
                  </a>
                </p>
                <p>
                  <strong>License Link:</strong>{" "}
                  <a
                    href="https://creativecommons.org/licenses/by/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    creativecommons.org/licenses/by/4.0
                  </a>
                </p>
                <p>
                  <strong>Modifications:</strong> Some emoji have been resized,
                  recolored, or animated for use in QuizzyPop.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Attributions;
