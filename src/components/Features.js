// src/components/Features.js
import React, { useState } from "react";
import "./Features.css";
import {
  FaGamepad,
  FaTrophy,
  FaFire,
  FaUsers,
  FaChartLine,
  FaUnlock,
  FaStar,
  FaClock,
  FaAward,
  FaMobile,
  FaShieldAlt,
  FaCoins,
  FaChevronRight,
} from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
function Features() {
  const [activeTab, setActiveTab] = useState("gameplay");

  const featureCategories = {
    gameplay: {
      title: "Gameplay Features",
      icon: <FaGamepad />,
      features: [
        {
          icon: <FaClock />,
          title: "Time-Based Challenges",
          description:
            "7 seconds per question keeps you on your toes. True or False - decide fast!",
        },
        {
          icon: <FaGamepad />,
          title: "10-Question Quizzes",
          description:
            "Each quiz has 10 questions across various categories. Quick, engaging, and fun.",
        },
        {
          icon: <FaUnlock />,
          title: "15+ Quiz Categories",
          description:
            "From General Knowledge to Internet Culture. Unlock new categories with gems.",
        },
        {
          icon: <FaMobile />,
          title: "Play Offline",
          description:
            "All quizzes are downloaded to your device. Play anytime, anywhere.",
        },
        {
          icon: <FaFire />,
          title: "Survival Mode",
          description:
            "Keep answering until you fail. How long can you survive? Challenge your limits.",
        },
        {
          icon: <FaShieldAlt />,
          title: "Guest or Account",
          description:
            "Play instantly as Guest or create an account for cloud sync and cross-device play.",
        },
      ],
    },
    progression: {
      title: "Progression & Rewards",
      icon: <FaChartLine />,
      features: [
        {
          icon: <FaChartLine />,
          title: "Dynamic Leveling",
          description:
            "Earn XP and level up. Each level brings new challenges and rewards.",
        },
        {
          icon: <FaCoins />,
          title: "Gem Earning System",
          description:
            "Earn gems from quizzes, leveling up, achievements, and daily challenges.",
        },
        {
          icon: <FaStar />,
          title: "Achievement Tracking",
          description:
            "Unlock achievements for speed runs, perfect scores, powerups, and more.",
        },
        {
          icon: <FaTrophy />,
          title: "Global Leaderboards",
          description:
            "Compete daily and all-time. Reach top 3 for exclusive gem rewards.",
        },
        {
          icon: <FaAward />,
          title: "Ranked Daily Quiz",
          description:
            "Play once per day in ranked mode. Earn points and climb the ladder.",
        },
        {
          icon: <FaFire />,
          title: "Streak Tracking",
          description:
            "Maintain daily streaks and unlock bonus rewards for consistency.",
        },
      ],
    },
    powerups: {
      title: "Powerups",
      icon: <FaFire />,
      features: [
        {
          icon: <FaClock />,
          title: "❄️ Freeze Time (FREE)",
          description:
            "Freeze the timer for 3 seconds on the current question.",
          gems: "FREE",
        },
        {
          icon: <FaShieldAlt />,
          title: "🐦‍🔥 Phoenix (3 Gems)",
          description:
            "Automatically corrects wrong answers or timeouts. Save yourself!",
          gems: "3",
        },
        {
          icon: <FaAward />,
          title: "🎯 Answer Cheat (3 Gems)",
          description: "Automatically selects the correct answer for you.",
          gems: "3",
        },
        {
          icon: <FaFire />,
          title: "⚡ Double Points (7 Gems)",
          description: "Earn 2x XP for the entire quiz. Double your rewards!",
          gems: "7",
        },
        {
          icon: <FaClock />,
          title: "⏱️ Extra Time (7 Gems)",
          description:
            "Extend your answer time to 10 seconds per question instead of 7.",
          gems: "7",
        },
        {
          icon: <FaHeart />,
          title: "❤️ Extra Heart (5 Gems)",
          description: "Gain an extra life to keep playing longer.",
          gems: "5",
        },
      ],
    },
    cosmetics: {
      title: "QuizzyPass & Cosmetics",
      icon: <FaStar />,
      features: [
        {
          icon: <FaStar />,
          title: "QuizzyPass Free",
          description:
            "Free seasonal pass with regular gem rewards. Level up and earn!",
          price: "FREE",
        },
        {
          icon: <FaAward />,
          title: "QuizzyPass Premium",
          description:
            "Exclusive seasonal title, avatar, and huge gem rewards throughout the season.",
          price: "150 Gems / $2.99",
        },
        {
          icon: <FaTrophy />,
          title: "Seasonal Titles",
          description:
            "Earn exclusive titles from QuizzyPass Premium. Show off your status!",
          badge: true,
        },
        {
          icon: <FaUsers />,
          title: "Custom Avatars",
          description:
            "Unlock premium avatars exclusive to QuizzyPass. Stand out on leaderboards.",
          badge: true,
        },
        {
          icon: <FaStar />,
          title: "Profile Customization",
          description:
            "Personalize your profile with titles, avatars, and achievement badges.",
          badge: true,
        },
        {
          icon: <FaAward />,
          title: "Rank Badges",
          description:
            "Display leaderboard rank and achievement badges on your profile.",
          badge: true,
        },
      ],
    },
  };

  const keyHighlights = [
    {
      number: "15+",
      label: "Quiz Categories",
      description: "From Free to Unlockable",
    },
    {
      number: "6",
      label: "Unique Powerups",
      description: "Strategic Gameplay",
    },
    {
      number: "∞",
      label: "Questions",
      description: "Constantly Updated",
    },
    {
      number: "100%",
      label: "Free to Play",
      description: "No Pay-to-Win",
    },
  ];

  return (
    <div className="features-page">
      {/* Header */}
      <header className="features-header">
        <div className="features-header-content">
          <h1>Packed with Features</h1>
          <p className="features-subtitle">
            Everything you need to master QuizzyPop
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="features-container">
        {/* Key Highlights */}
        <section className="highlights-section">
          <div className="highlights-grid">
            {keyHighlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-number">{highlight.number}</div>
                <div className="highlight-label">{highlight.label}</div>
                <div className="highlight-description">
                  {highlight.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Categories Tabs */}
        <section className="features-tabs-section">
          <div className="features-tabs">
            {Object.entries(featureCategories).map(([key, category]) => (
              <button
                key={key}
                className={`tab-button ${activeTab === key ? "active" : ""}`}
                onClick={() => setActiveTab(key)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-title">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            <div className="features-grid">
              {featureCategories[activeTab].features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  {feature.gems && (
                    <div className="feature-badge gems-badge">
                      {feature.gems}
                    </div>
                  )}
                  {feature.price && (
                    <div className="feature-badge price-badge">
                      {feature.price}
                    </div>
                  )}
                  {feature.badge && (
                    <div className="feature-badge cosmetic-badge">Premium</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free to Play Section */}
        <section className="free-to-play-section">
          <div className="ftp-content">
            <h2>Completely Free to Play</h2>
            <p>
              QuizzyPop is 100% free with no pay-to-win mechanics. All core
              features are available to everyone.
            </p>
            <div className="ftp-features">
              <div className="ftp-item">
                <span className="ftp-icon">🎮</span>
                <span>All quizzes playable for free</span>
              </div>
              <div className="ftp-item">
                <span className="ftp-icon">💎</span>
                <span>Earn gems without spending</span>
              </div>
              <div className="ftp-item">
                <span className="ftp-icon">🏆</span>
                <span>Compete on free leaderboards</span>
              </div>
              <div className="ftp-item">
                <span className="ftp-icon">⚡</span>
                <span>Free powerups available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why QuizzyPop Section */}
        <section className="why-section">
          <h2>Why Players Love QuizzyPop</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Quick 7-second questions keep the adrenaline pumping.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🎯</div>
              <h3>Highly Competitive</h3>
              <p>Daily ranked quizzes and global leaderboards challenge you.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🎁</div>
              <h3>Rewarding</h3>
              <p>Earn gems, achievements, and cosmetics constantly.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">♾️</div>
              <h3>Infinite Content</h3>
              <p>Questions constantly updated. Never run out of challenges.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📱</div>
              <h3>Always Available</h3>
              <p>Play offline anywhere. Your progress syncs to the cloud.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">👥</div>
              <h3>Social Leaderboards</h3>
              <p>Compete with friends and players worldwide.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="features-cta">
          <h2>Ready to Challenge Your Mind?</h2>
          <p>Join thousands of players competing in QuizzyPop</p>
          <div className="cta-buttons">
            <a
              href="https://play.google.com/store/apps/details?id=com.rovenkodev.quizzypop"
              className="cta-button primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Now <FaChevronRight />
            </a>
            <a href="/pricing" className="cta-button secondary">
              View Pricing
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Features;
