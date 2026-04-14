// src/components/HowToPlay.js
import React, { useState } from "react";
import "./HowToPlay.css";
import {
  FaCalendar,
  FaFire,
  FaGamepad,
  FaCheckCircle,
  FaHeart,
  FaClock,
  FaTrophy,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function HowToPlay() {
  const [activeMode, setActiveMode] = useState("daily");

  const gameModes = {
    daily: {
      title: "Daily Quiz",
      icon: <FaCalendar />,
      color: "#00aaff",
      description: "Play the same quiz as everyone worldwide every 24 hours",
      features: [
        {
          icon: <FaCalendar />,
          title: "Global Competition",
          desc: "Everyone plays the same quiz on the same day worldwide",
        },
        {
          icon: <FaTrophy />,
          title: "Leaderboards",
          desc: "Compare your score with all players globally",
        },
        {
          icon: <FaClock />,
          title: "Once Per Day",
          desc: "Play one Daily Quiz per 24 hours. Choose wisely!",
        },
        {
          icon: <FaCheckCircle />,
          title: "Ranked Points",
          desc: "Earn points that count toward global leaderboards",
        },
      ],
      mechanics: {
        questions: "10 Questions",
        time: "7 seconds per question",
        lives: "∞ Lives",
        scoring: "Points based on speed",
        reward: "Leaderboard ranking + Gems",
      },
      tips: [
        "Plan strategically - you get only one attempt per day",
        "Speed and accuracy matter for your leaderboard position",
        "Beating your previous score is key to climbing ranks",
        "Top 3 finishers earn exclusive gem rewards",
      ],
    },
    survival: {
      title: "Survival Mode",
      icon: <FaFire />,
      color: "#ff6b6b",
      description:
        "How long can you survive? Unlimited questions with 3 lives to protect",
      features: [
        {
          icon: <FaFire />,
          title: "Infinite Questions",
          desc: "Questions keep coming until you run out of lives",
        },
        {
          icon: <FaHeart />,
          title: "3 Lives System",
          desc: "Start with 3 hearts. Lose one for each wrong answer",
        },
        {
          icon: <FaTrophy />,
          title: "Streak Tracking",
          desc: "Build streaks for consecutive correct answers",
        },
        {
          icon: <FaFire />,
          title: "No Time Limit",
          desc: "Take as long as you need per question (no rushing!)",
        },
      ],
      mechanics: {
        questions: "Infinite",
        time: "No limit per question",
        lives: "3 Lives (3 wrong answers = game over)",
        scoring: "Streak-based rewards",
        reward: "Gems based on streak length",
      },
      tips: [
        "Play cautiously - each wrong answer costs a life",
        "Take your time, there's no timer pressure",
        "The longer your streak, the higher your rewards",
        "Use powerups strategically to extend your survival",
      ],
    },
    normal: {
      title: "Normal Quiz",
      icon: <FaGamepad />,
      color: "#00cc8e",
      description: "Pick a category and test your knowledge in 10 questions",
      features: [
        {
          icon: <FaGamepad />,
          title: "Choose Your Category",
          desc: "Pick from 15+ genres from free to premium unlocks",
        },
        {
          icon: <FaClock />,
          title: "Timed Challenges",
          desc: "7 seconds per question - answer fast!",
        },
        {
          icon: <FaCheckCircle />,
          title: "10 Question Format",
          desc: "Each quiz is exactly 10 questions long",
        },
        {
          icon: <FaTrophy />,
          title: "XP & Gems",
          desc: "Earn experience and gems with each correct answer",
        },
      ],
      mechanics: {
        questions: "10 Questions",
        time: "7 seconds per question",
        lives: "∞ Lives",
        scoring: "XP per correct answer",
        reward: "Gems + XP + Achievements",
      },
      tips: [
        "Pick categories you're confident in to build streaks",
        "Answer quickly to maximize your score",
        "Use Freeze Time powerup strategically",
        "Experiment with different categories to unlock achievements",
      ],
    },
  };

  const gameplayFlow = [
    {
      step: 1,
      title: "Choose Your Mode",
      description: "Select Daily Quiz, Survival, or Normal Quiz",
      highlight:
        "Daily Quiz = Global competition | Survival = Endless challenge",
    },
    {
      step: 2,
      title: "Pick a Category (Normal Mode Only)",
      description: "Choose from free or unlocked premium categories",
      highlight: "Free: Random, Hard Quiz | Premium: Unlock for 20 gems each",
    },
    {
      step: 3,
      title: "Read the Statement",
      description: "A true/false statement appears with 7 seconds on the clock",
      highlight: "No time limit in Survival mode - take your time deciding!",
    },
    {
      step: 4,
      title: "Press TRUE or FALSE",
      description: "Tap the green TRUE button or red FALSE button to answer",
      highlight: "Quick reflexes matter! Every second counts in timed modes",
    },
    {
      step: 5,
      title: "Get Instant Feedback",
      description: "See if you're correct and get ready for the next question",
      highlight: "Wrong answer in Survival = -1 life",
    },
    {
      step: 6,
      title: "Complete the Quiz",
      description: "Finish all questions and see your detailed results",
      highlight: "View accuracy, speed, XP earned, and gems collected",
    },
  ];

  const buttons = [
    {
      name: "TRUE",
      color: "#00cc8e",
      description: "Green button - The statement is TRUE",
    },
    {
      name: "FALSE",
      color: "#ff6b6b",
      description: "Red button - The statement is FALSE",
    },
  ];

  const gameRules = [
    {
      icon: "🎮",
      title: "All Quizzes Use Buttons",
      description:
        "Every quiz mode (Daily, Survival, Normal) is played using the same TRUE/FALSE buttons",
    },
    {
      icon: "⏱️",
      title: "Time Pressure (Except Survival)",
      description:
        "You have 7 seconds per question in Daily and Normal quizzes. Survival mode has no timer!",
    },
    {
      icon: "❤️",
      title: "Lives System",
      description:
        "Only Survival mode uses the 3-lives system. Daily and Normal quizzes have unlimited lives",
    },
    {
      icon: "💎",
      title: "Rewards Vary By Mode",
      description:
        "Each mode rewards gems differently based on performance and completion",
    },
    {
      icon: "🏆",
      title: "Leaderboards",
      description:
        "Only Daily Quiz contributes to global leaderboards. Compete worldwide!",
    },
    {
      icon: "🎁",
      title: "Use Powerups",
      description:
        "Enhance your gameplay with powerups in any mode to improve your score",
    },
  ];

  const currentMode = gameModes[activeMode];

  return (
    <div className="how-to-play-page">
      {/* Header */}
      <header className="htp-header">
        <div className="htp-header-content">
          <h1>How to Play QuizzyPop</h1>
          <p className="htp-subtitle">Master the game in minutes</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="htp-container">
        {/* Game Modes Section */}
        <section className="modes-section">
          <h2>Choose Your Game Mode</h2>
          <div className="modes-grid">
            {Object.entries(gameModes).map(([key, mode]) => (
              <button
                key={key}
                className={`mode-button ${activeMode === key ? "active" : ""}`}
                onClick={() => setActiveMode(key)}
                style={{
                  "--mode-color": mode.color,
                }}
              >
                <div className="mode-button-icon">{mode.icon}</div>
                <div className="mode-button-title">{mode.title}</div>
              </button>
            ))}
          </div>

          {/* Active Mode Details */}
          <div className="mode-details">
            <div className="mode-header">
              <div
                className="mode-icon-large"
                style={{ color: currentMode.color }}
              >
                {currentMode.icon}
              </div>
              <div>
                <h3>{currentMode.title}</h3>
                <p>{currentMode.description}</p>
              </div>
            </div>

            <div className="mode-content">
              <div className="mode-features">
                <h4>Key Features</h4>
                <div className="features-grid">
                  {currentMode.features.map((feature, idx) => (
                    <div key={idx} className="mode-feature">
                      <div
                        className="feature-icon"
                        style={{ color: currentMode.color }}
                      >
                        {feature.icon}
                      </div>
                      <h5>{feature.title}</h5>
                      <p>{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mode-mechanics">
                <h4>Game Mechanics</h4>
                <div className="mechanics-list">
                  {Object.entries(currentMode.mechanics).map(([key, value]) => (
                    <div key={key} className="mechanic-item">
                      <span className="mechanic-label">{key}</span>
                      <span className="mechanic-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mode-tips">
                <h4>💡 Pro Tips</h4>
                <ul className="tips-list">
                  {currentMode.tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Button Guide Section */}
        <section className="buttons-section">
          <h2>The Core Mechanic: TRUE or FALSE</h2>
          <p className="section-description">
            All QuizzyPop quizzes are played using two simple buttons
          </p>

          <div className="buttons-showcase">
            {buttons.map((btn, idx) => (
              <div
                key={idx}
                className={`button-showcase ${btn.name.toLowerCase()}`}
              >
                <div className="button-visual">
                  <button
                    className={`showcase-button ${btn.name.toLowerCase()}`}
                  >
                    {btn.name}
                  </button>
                </div>
                <div className="button-info">
                  <h4>{btn.name}</h4>
                  <p>{btn.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="button-example">
            <h4>Example Flow:</h4>
            <div className="example-flow">
              <div className="flow-step">
                <div className="flow-number">1</div>
                <div className="flow-text">
                  <p className="statement">
                    "The Great Wall of China is 13,171 miles long"
                  </p>
                </div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <div className="flow-number">2</div>
                <div className="flow-text">
                  <p>Decide: Is this TRUE or FALSE?</p>
                  <p className="timer">⏱️ 7 seconds remaining</p>
                </div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <div className="flow-number">3</div>
                <div className="flow-text">
                  <button className="showcase-button false">FALSE</button>
                  <p className="small-text">You clicked FALSE</p>
                </div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <div className="flow-number">4</div>
                <div className="flow-text">
                  <p>✅ Correct! The actual length is 21,196 miles</p>
                  <p className="reward">+10 XP</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gameplay Flow */}
        <section className="gameplay-flow-section">
          <h2>Complete Gameplay Flow</h2>
          <div className="gameplay-steps">
            {gameplayFlow.map((step, idx) => (
              <div key={idx} className="gameplay-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                  <div className="step-highlight">{step.highlight}</div>
                </div>
                {idx < gameplayFlow.length - 1 && (
                  <div className="step-arrow">
                    <FaChevronRight />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Game Rules */}
        <section className="game-rules-section">
          <h2>Game Rules & Mechanics</h2>
          <div className="rules-grid">
            {gameRules.map((rule, idx) => (
              <div key={idx} className="rule-card">
                <div className="rule-icon">{rule.icon}</div>
                <h4>{rule.title}</h4>
                <p>{rule.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Reference */}
        <section className="quick-reference-section">
          <h2>Quick Reference: Mode Comparison</h2>
          <div className="comparison-table">
            <div className="table-header">
              <div className="table-cell">Feature</div>
              <div className="table-cell">Daily Quiz</div>
              <div className="table-cell">Survival</div>
              <div className="table-cell">Normal Quiz</div>
            </div>
            {[
              {
                feature: "Questions",
                daily: "10",
                survival: "Infinite",
                normal: "10",
              },
              {
                feature: "Time per Q",
                daily: "7 sec",
                survival: "No limit",
                normal: "7 sec",
              },
              { feature: "Lives", daily: "∞", survival: "3", normal: "∞" },
              {
                feature: "Category",
                daily: "Fixed",
                survival: "Random",
                normal: "Your choice",
              },
              {
                feature: "Leaderboard",
                daily: "✓ Global",
                survival: "Personal best",
                normal: "Personal best",
              },
              {
                feature: "Frequency",
                daily: "1x per day",
                survival: "Anytime",
                normal: "Anytime",
              },
              {
                feature: "Reward Type",
                daily: "Ranking + Gems",
                survival: "Streak gems",
                normal: "XP + Gems",
              },
            ].map((row, idx) => (
              <div key={idx} className="table-row">
                <div className="table-cell bold">{row.feature}</div>
                <div className="table-cell">{row.daily}</div>
                <div className="table-cell">{row.survival}</div>
                <div className="table-cell">{row.normal}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="htp-cta">
          <h2>Ready to Start Playing?</h2>
          <p>Download QuizzyPop and challenge yourself today!</p>
          <div className="cta-buttons">
            <a
              href="https://play.google.com/store/apps/details?id=com.rovenkodev.quizzypop"
              className="cta-button primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Now <FaChevronRight />
            </a>
            <Link to="/features" className="cta-button secondary">
              Learn More Features
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HowToPlay;
