// src/components/FAQ.js
import "./FAQ.css";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const pageRef = useRef(null);
  const searchInputRef = useRef(null);

  // FAQ items
  const faqItems = [
    {
      question: "What is QuizzyPop?",
      answer: (
        <>
          <div className="game-description">
            <h4>🎮 QuizzyPop - Time-Based True or False Quiz Game 🎮</h4>
            <p>
              <strong>QuizzyPop</strong> is a fast-paced time-based true or
              false game where you have 7 seconds to answer each statement. Each
              quiz consists of 10 questions across various categories.
            </p>

            <div className="game-features-grid">
              <div className="feature-item">
                <span>
                  <strong>Free Categories:</strong> Start with "Random" and
                  "Hard Quiz"
                </span>
              </div>
              <div className="feature-item">
                <span>
                  <strong>Unlock More:</strong> Unlock General Knowledge, Food,
                  Music, Gaming, History for 25 gems each
                </span>
              </div>
              <div className="feature-item">
                <span>
                  <strong>Daily Quiz:</strong> Ranked daily competition for
                  leaderboard points
                </span>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      question: "How do powerups work?",
      answer: (
        <>
          <p>QuizzyPop features 5 powerups to enhance your gameplay:</p>
          <ul className="powerup-list">
            <li>
              <strong>⏸️ Freeze Time (Free):</strong> Freezes timer for 3
              seconds on current question
            </li>
            <li>
              <strong>🎯 Answer Cheat:</strong> Automatically selects correct
              answer (costs gems)
            </li>
            <li>
              <strong>🔥 Phoenix (3 gems):</strong> Automatically corrects wrong
              answers or timeouts
            </li>
            <li>
              <strong>⚡ Double Points (7 gems):</strong> Gives 2x XP for the
              entire quiz
            </li>
            <li>
              <strong>⏱️ Extra Time (7 gems):</strong> Gives 10 seconds per
              question instead of 7
            </li>
          </ul>
          <p className="tip">
            💡 Pro Tip: Use powerups strategically in ranked matches!
          </p>
        </>
      ),
    },
    {
      question: "How do I earn gems?",
      answer: (
        <>
          <p>Gems can be earned through multiple ways:</p>
          <ul className="powerup-list">
            <li>
              <strong>⭐ Leveling Up:</strong> Earn gems as you level up
            </li>
            <li>
              <strong>📅 Daily Quiz:</strong> Play the daily ranked quiz
            </li>
            <li>
              <strong>🏆 Leaderboard:</strong> Get rank 1, 2, or 3 on the ladder
            </li>
            <li>
              <strong>🛒 IAP Bundles:</strong> Purchase gems through in-app
              purchases
            </li>
            <li>
              <strong>🎯 Achievements:</strong> Complete achievements for bonus
              gems
            </li>
          </ul>
          <p>Use gems to unlock new categories or activate powerups!</p>
        </>
      ),
    },
    {
      question: "What quiz categories are available?",
      answer:
        "Start with 'Random' and 'Hard Quiz' for free. Unlock additional categories (General Knowledge, Food, Music, Gaming, History) for 25 gems each. Each unlocked category gives unlimited access. More categories coming soon!",
    },
    {
      question: "Do I need to create an account to play?",
      answer:
        "No! You can play as Guest without registration. Guest mode saves progress locally on your device. Create an account for cross-device access and personalized username on leaderboards.",
    },
    {
      question: "What's the difference between Guest and Account?",
      answer: (
        <>
          <div className="comparison-grid">
            <div className="comparison-col">
              <h5>Guest Account</h5>
              <ul className="powerup-list">
                <li>🎮 Play immediately, no registration</li>
                <li>📱 Progress saved locally only</li>
                <li>👤 Appear anonymously on leaderboards</li>
                <li>💾 Data stored on device only</li>
              </ul>
            </div>
            <div className="comparison-col">
              <h5>Full Account</h5>
              <ul className="powerup-list">
                <li>🔄 Cross-device progress sync</li>
                <li>✨ Personalized username</li>
                <li>☁️ Cloud backup of progress</li>
                <li>🔒 Recoverable if device lost</li>
              </ul>
            </div>
          </div>
          <p className="privacy-note">
            See our Privacy Policy for full details.
          </p>
        </>
      ),
    },
    {
      question: "How do leaderboards work?",
      answer:
        "Compete in daily and all-time leaderboards. Earn points from playing the daily quiz (once per day). The ranked 'daily quiz' mode contributes to your ladder position. Top 3 ranks earn gem rewards. Your best score each day counts!",
    },
    {
      question: "What are achievements?",
      answer:
        "Earn achievements for level badges, answering fast (under 3 seconds), getting perfect scores, using powerups, and advancing in the game. Track your progress in the profile section. Complete achievements for bonus gems and XP!",
    },
    {
      question: "What stats are shown after a quiz?",
      answer:
        "After each quiz, view detailed stats including: correct/incorrect answers, time taken, timeouts, average answer time, accuracy percentage, XP earned, and gems collected (if any).",
    },
    {
      question: "Can I customize game settings?",
      answer:
        "Yes! Enable/disable vibration, sound effects, and background music in Settings. Adjust these anytime to suit your preference. Settings are saved automatically.",
    },
    {
      question: "How often are new questions added?",
      answer:
        "New questions are added regularly throughout the year. We continuously update all categories to keep the game fresh and challenging.",
    },
    {
      question: "Is QuizzyPop free to play?",
      answer:
        "Yes! All core gameplay is completely free. Optional in-app purchases are available for gems and cosmetic items, but never required to enjoy the full game. No pay-to-win mechanics!",
    },
    {
      question: "Can I play offline?",
      answer:
        "Yes! All quizzes are downloaded to your device. Play offline anytime. For account users, progress syncs automatically when you're back online.",
    },
    {
      question: "How do I recover progress if I lose my device?",
      answer: (
        <>
          <p>
            <strong>Guest Mode:</strong> Progress cannot be recovered as it's
            stored locally only.
          </p>
          <p>
            <strong>Account Mode:</strong> Simply log in on a new device to
            restore all progress from the cloud.
          </p>
          <p className="tip">
            💡 Tip: We recommend creating an account to protect your progress!
          </p>
        </>
      ),
    },
    {
      question: "How do I delete my account or data?",
      answer:
        "You can delete your account in the Settings menu. Guest users can clear app data or uninstall the app.",
    },
    {
      question: "Is QuizzyPop suitable for children?",
      answer:
        "Yes! QuizzyPop is family-friendly with no inappropriate content. Guest mode is ideal for kids as it requires no personal information. We comply with COPPA regulations.",
    },
    {
      question: "I found a bug or have suggestions",
      answer:
        "Email us at dev@robertrovenko.com. We appreciate all feedback and read every message to improve QuizzyPop! Bug reports with screenshots are especially helpful.",
    },
  ];

  // Create filtered items with their correct original indices
  const filteredItems = useMemo(() => {
    const items = faqItems.filter((item) => {
      return (
        searchTerm === "" ||
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (typeof item.answer === "string" &&
          item.answer.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });

    // Map to include the original index from the full array
    return items.map((item) => {
      const originalIndex = faqItems.findIndex(
        (faqItem) =>
          faqItem.question === item.question && faqItem.answer === item.answer,
      );
      return {
        ...item,
        originalIndex: originalIndex,
      };
    });
  }, [searchTerm]);

  // Handle search with debouncing
  const handleSearch = useCallback(
    (e) => {
      const value = e.target.value;
      setSearchTerm(value);

      // Auto-open first result when searching
      if (value && filteredItems.length > 0) {
        const item = filteredItems[0];
        setOpenIndex(item.originalIndex);

        // Scroll to the first result
        setTimeout(() => {
          const firstElement = document.getElementById(
            `faq-${item.originalIndex}`,
          );
          if (firstElement) {
            firstElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 100);
      } else if (!value) {
        setOpenIndex(null);
      }
    },
    [filteredItems],
  );

  // Toggle single question with scroll to focus
  const toggleQuestion = (index) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);

    // Scroll to the question when opening
    if (isOpening) {
      setTimeout(() => {
        const element = document.getElementById(`faq-${index}`);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
      }, 100);
    }
  };

  // Focus search input on "/" key press
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (
        (e.key === "/" || e.key === "s") &&
        e.target.tagName !== "INPUT" &&
        e.target.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === "Escape" && searchTerm) {
        setSearchTerm("");
        searchInputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [searchTerm]);

  // Update padding based on header height
  useEffect(() => {
    const updatePadding = () => {
      const header = document.querySelector(".faq-header");
      if (header && pageRef.current) {
        const headerHeight = header.offsetHeight;
        pageRef.current.style.paddingTop = `${headerHeight}px`;
      }
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  return (
    <div className="faq-page" ref={pageRef}>
      {/* Header */}
      <header className="faq-header">
        <div className="faq-header-content">
          <h1>Frequently Asked Questions</h1>
          <p className="faq-subtitle">Got questions? We've got answers!</p>

          {/* Search */}
          <div className="faq-search">
            <div className="search-wrapper">
              <FaSearch className="search-icon" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search questions... (Press '/' to focus)"
                value={searchTerm}
                onChange={handleSearch}
                aria-label="Search FAQ questions"
              />
              {searchTerm && (
                <button
                  className="clear-search"
                  onClick={() => {
                    setSearchTerm("");
                    searchInputRef.current?.focus();
                  }}
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}
            </div>
            {searchTerm && (
              <div className="search-results-info">
                Found {filteredItems.length} result
                {filteredItems.length !== 1 ? "s" : ""}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="faq-container">
        <div className="faq-content">
          {/* FAQ List */}
          <section className="faq-list">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => {
                const displayNumber = item.originalIndex + 1;
                return (
                  <div
                    key={item.originalIndex}
                    id={`faq-${item.originalIndex}`}
                    className={`faq-item ${openIndex === item.originalIndex ? "open" : ""}`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleQuestion(item.originalIndex)}
                      aria-expanded={openIndex === item.originalIndex}
                    >
                      <span className="question-text">
                        <span className="question-number">
                          Q{displayNumber}
                        </span>
                        {item.question}
                      </span>
                      <span className="question-icon">
                        {openIndex === item.originalIndex ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </span>
                    </button>

                    <div className="faq-answer">
                      <div className="answer-content">{item.answer}</div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="no-results">
                <h3>No results found for "{searchTerm}"</h3>
                <p>Try a different search term</p>
                <button
                  className="action-btn"
                  onClick={() => {
                    setSearchTerm("");
                  }}
                >
                  Show all questions
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default FAQ;
