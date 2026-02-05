// src/components/Pricing.js
import "./Pricing.css";
import React from "react";
import {
  FaGem,
  FaGamepad,
  FaGift,
  FaCrown,
  FaLock,
  FaUnlock,
} from "react-icons/fa";

function Pricing() {
  return (
    <div className="pricing-page">
      {/* Header */}
      <header className="pricing-header">
        <div className="pricing-header-content">
          <h1>QuizzyPop Pricing</h1>
          <p className="pricing-subtitle">
            Everything you need to know about costs and rewards
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="pricing-container">
        <div className="pricing-content">
          {/* Powerups Section */}
          <section className="pricing-section">
            <h2 className="section-title">
              <FaGift /> Powerups (One-Time Use)
            </h2>
            <p className="section-description">
              Enhance your gameplay with powerups. Each powerup can be used once
              per purchase.
            </p>

            <div className="powerups-grid">
              <div className="powerup-card">
                <div className="powerup-icon freeze">❄️</div>
                <h3>Freeze Time</h3>
                <div className="powerup-price free">FREE</div>
                <p className="powerup-desc">
                  Freezes timer for 3 seconds on current question
                </p>
              </div>

              <div className="powerup-card">
                <div className="powerup-icon phoenix">🐦‍🔥</div>
                <h3>Phoenix</h3>
                <div className="powerup-price">
                  <FaGem /> 3 Gems
                </div>
                <p className="powerup-desc">
                  Automatically corrects wrong answers or timeouts
                </p>
              </div>

              <div className="powerup-card">
                <div className="powerup-icon cheat">🎯</div>
                <h3>Answer Cheat</h3>
                <div className="powerup-price">
                  <FaGem /> 3 Gems
                </div>
                <p className="powerup-desc">
                  Automatically selects the correct answer
                </p>
              </div>

              <div className="powerup-card">
                <div className="powerup-icon double">⚡</div>
                <h3>Double Points</h3>
                <div className="powerup-price">
                  <FaGem /> 7 Gems
                </div>
                <p className="powerup-desc">Gives 2x XP for the entire quiz</p>
              </div>

              <div className="powerup-card">
                <div className="powerup-icon time">⏱️</div>
                <h3>Extra Time</h3>
                <div className="powerup-price">
                  <FaGem /> 7 Gems
                </div>
                <p className="powerup-desc">
                  Gives 10 seconds per question instead of 7
                </p>
              </div>
            </div>
          </section>

          {/* Genres Section */}
          <section className="pricing-section">
            <h2 className="section-title">
              <FaGamepad /> Quiz Genres
            </h2>
            <p className="section-description">
              Unlock new categories permanently. Once unlocked, they're yours
              forever!
            </p>

            <div className="genre-card">
              <div className="genre-header">
                <div className="genre-icon">
                  <FaLock />
                </div>
                <div className="genre-info">
                  <h3>Unlock Any Genre</h3>
                  <div className="genre-price">
                    <FaGem /> 25 Gems Each
                  </div>
                </div>
              </div>

              <div className="genre-list">
                <div className="genre-item">
                  <span className="genre-name">General Knowledge</span>
                  <span className="genre-cost">25 gems</span>
                </div>
                <div className="genre-item">
                  <span className="genre-name">Entertainment</span>
                  <span className="genre-cost">25 gems</span>
                </div>
                <div className="genre-item">
                  <span className="genre-name">Gaming</span>
                  <span className="genre-cost">25 gems</span>
                </div>
                <div className="genre-item">
                  <span className="genre-name">Msuic</span>
                  <span className="genre-cost">25 gems</span>
                </div>
                <div className="genre-item">
                  <span className="genre-name">Science</span>
                  <span className="genre-cost">25 gems</span>
                </div>
                <div className="genre-item">
                  <span className="genre-name">Technology</span>
                  <span className="genre-cost">25 gems</span>
                </div>
                <div className="genre-item">
                  <span className="genre-name">Food</span>
                  <span className="genre-cost">25 gems</span>
                </div>
                <div className="genre-item">
                  <span className="genre-name">History</span>
                  <span className="genre-cost">25 gems</span>
                </div>
              </div>

              <div className="genre-note">
                <FaUnlock /> <strong>Permanent unlock</strong> - Once purchased,
                unlimited access forever!
              </div>
            </div>
          </section>

          {/* Gem Packs Section */}
          <section className="pricing-section">
            <h2 className="section-title">
              <FaGem /> Gem Packs
            </h2>
            <p className="section-description">
              Purchase gems to unlock genres and powerups. Better value in
              larger packs!
            </p>

            <div className="gem-packs-grid">
              <div className="gem-pack-card">
                <div className="gem-pack-header">
                  <div className="gem-count">10 Gems</div>
                  <div className="gem-price">$0.99 USD</div>
                </div>
                <div className="gem-value">
                  <FaGem /> $0.10 per gem
                </div>
                <ul className="gem-features">
                  <li>1 Powerup + 7 gems left</li>
                  <li>Try out premium features</li>
                </ul>
              </div>

              <div className="gem-pack-card popular">
                <div className="popular-badge">
                  <FaCrown /> Most Popular
                </div>
                <div className="gem-pack-header">
                  <div className="gem-count">25 Gems</div>
                  <div className="gem-price">$1.99 USD</div>
                </div>
                <div className="gem-value">
                  <FaGem /> $0.08 per gem
                </div>
                <ul className="gem-features">
                  <li>Unlock 1 full genre</li>
                  <li>OR 8 powerups</li>
                  <li>Great starter pack</li>
                </ul>
              </div>

              <div className="gem-pack-card">
                <div className="gem-pack-header">
                  <div className="gem-count">50 Gems</div>
                  <div className="gem-price">$3.99 USD</div>
                </div>
                <div className="gem-value">
                  <FaGem /> $0.08 per gem
                </div>
                <ul className="gem-features">
                  <li>Unlock 2 genres</li>
                  <li>OR 16 powerups</li>
                  <li>Best for regular players</li>
                </ul>
              </div>

              <div className="gem-pack-card best-value">
                <div className="value-badge">⭐ Best Value</div>
                <div className="gem-pack-header">
                  <div className="gem-count">120 Gems</div>
                  <div className="gem-price">$7.99 USD</div>
                </div>
                <div className="gem-value">
                  <FaGem /> $0.07 per gem
                </div>
                <ul className="gem-features">
                  <li>Unlock 4+ genres</li>
                  <li>OR 40+ powerups</li>
                  <li>Complete collection</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Free to Play Section */}
          <section className="free-section">
            <div className="free-card">
              <h2>💎 Earn Gems for FREE!</h2>
              <p>
                You don't need to spend money to enjoy QuizzyPop! Earn gems
                through:
              </p>

              <div className="free-methods">
                <div className="free-method">
                  <div className="method-icon">⭐</div>
                  <div className="method-info">
                    <h4>Leveling Up</h4>
                    <p>Earn gems as you progress through levels</p>
                  </div>
                </div>

                <div className="free-method">
                  <div className="method-icon">📅</div>
                  <div className="method-info">
                    <h4>Daily Quizzes</h4>
                    <p>Play the daily ranked quiz for rewards</p>
                  </div>
                </div>

                <div className="free-method">
                  <div className="method-icon">🏆</div>
                  <div className="method-info">
                    <h4>Leaderboards</h4>
                    <p>Get rank 1, 2, or 3 for gem rewards</p>
                  </div>
                </div>

                <div className="free-method">
                  <div className="method-icon">🎯</div>
                  <div className="method-info">
                    <h4>Achievements</h4>
                    <p>Complete challenges for bonus gems</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Refund Policy Section */}
          <section className="policy-section">
            <div className="policy-card">
              <h2>📋 Refund & Purchase Policy</h2>

              <div className="policy-points">
                <div className="policy-point">
                  <div className="policy-icon">⚠️</div>
                  <div className="policy-info">
                    <h4>Digital Goods Policy</h4>
                    <p>
                      All purchases (gems, powerups, unlocked genres) are
                      digital goods and are <strong>non-refundable</strong> once
                      purchased and delivered to your account.
                    </p>
                  </div>
                </div>

                <div className="policy-point">
                  <div className="policy-icon">🔒</div>
                  <div className="policy-info">
                    <h4>Immediate Delivery</h4>
                    <p>
                      Gems are delivered instantly to your account upon
                      purchase. Unlocked genres and purchased powerups are
                      available immediately and cannot be returned.
                    </p>
                  </div>
                </div>

                <div className="policy-point">
                  <div className="policy-icon">📱</div>
                  <div className="policy-info">
                    <h4>Platform Store Policies</h4>
                    <p>
                      For accidental purchases or technical issues, please
                      contact your platform's support (Apple App Store or Google
                      Play Store) as they handle billing and refunds according
                      to their policies.
                    </p>
                  </div>
                </div>

                <div className="policy-point">
                  <div className="policy-icon">💡</div>
                  <div className="policy-info">
                    <h4>Before You Purchase</h4>
                    <p>
                      Please review your purchase carefully. You can test the
                      free "Freeze Time" powerup and earn free gems before
                      deciding to make any purchases.
                    </p>
                  </div>
                </div>
              </div>

              <div className="policy-note">
                <p>
                  <strong>Note:</strong> By making a purchase, you acknowledge
                  that all sales are final for delivered digital content. For
                  billing questions, contact your platform's support team.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Pricing;
