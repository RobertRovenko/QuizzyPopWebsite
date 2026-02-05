// src/components/CookiePolicy.js
import "./CookiePolicy.css";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";

function CookiePolicy() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = `${currentYear}-02-05`;
  const pageRef = useRef(null);

  useEffect(() => {
    // Get the actual header height
    const header = document.querySelector(".header");
    if (header && pageRef.current) {
      const headerHeight = header.offsetHeight;
      pageRef.current.style.paddingTop = `${headerHeight}px`;
    }
  }, []);

  return (
    <div className="cookie-page" ref={pageRef}>
      {/* Header */}
      <header className="cookie-header">
        <div className="cookie-header-content">
          <h1>Cookie Policy</h1>
          <p className="cookie-subtitle">Last Updated: {lastUpdated}</p>
          <p className="cookie-important">
            <strong>Good news:</strong> QuizzyPop does not use cookies! 🍪
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="cookie-container">
        <div className="cookie-content">
          {/* Quick Summary */}
          <section className="cookie-section cookie-highlight">
            <h2>📋 Simple Cookie Policy</h2>
            <div className="summary-grid">
              <div className="summary-item">
                <h3>✅ What We Don't Use</h3>
                <ul>
                  <li>
                    <strong>No Tracking Cookies</strong>
                  </li>
                  <li>
                    <strong>No Advertising Cookies</strong>
                  </li>
                  <li>
                    <strong>No Analytics Cookies</strong>
                  </li>
                  <li>
                    <strong>No Preference Cookies</strong>
                  </li>
                  <li>
                    <strong>No Third-Party Cookies</strong>
                  </li>
                </ul>
              </div>
              <div className="summary-item">
                <h3>✅ What We Do Instead</h3>
                <ul>
                  <li>
                    <strong>Local Device Storage</strong> for game progress
                  </li>
                  <li>
                    <strong>Anonymous Game Data</strong> (if you create account)
                  </li>
                  <li>
                    <strong>Zero Tracking</strong> of your browsing
                  </li>
                  <li>
                    <strong>Privacy-First Design</strong>
                  </li>
                </ul>
              </div>
            </div>
            <p className="policy-note" style={{ marginTop: "15px" }}>
              <strong>TL;DR:</strong> We don't use cookies. Your privacy is
              respected.
            </p>
          </section>

          {/* 1. No Cookies Policy */}
          <section className="cookie-section">
            <h2>1. We Don't Use Cookies</h2>
            <p>
              QuizzyPop does not use cookies, web beacons, tracking pixels, or
              any other tracking technologies on our website or in our mobile
              app.
            </p>
            <p>
              Unlike many websites and apps, we believe in minimal data
              collection and maximum user privacy.
            </p>
          </section>

          {/* 2. What We Use Instead */}
          <section className="cookie-section">
            <h2>2. What We Use Instead of Cookies</h2>

            <h3>2.1 Local Storage (Device)</h3>
            <ul>
              <li>
                <strong>Purpose:</strong> Save your game progress locally on
                your device
              </li>
              <li>
                <strong>Technology:</strong> AsyncStorage (React Native) /
                localStorage (web)
              </li>
              <li>
                <strong>Data:</strong> Game scores, XP, unlocks, settings
              </li>
              <li>
                <strong>Privacy:</strong> Never transmitted to our servers
                (Guest Mode)
              </li>
            </ul>

            <h3>2.2 Account Data (Optional)</h3>
            <ul>
              <li>
                <strong>Purpose:</strong> Sync game progress across your devices
              </li>
              <li>
                <strong>Data:</strong> Username and encrypted game progress
              </li>
              <li>
                <strong>Storage:</strong> Secure database (only if you create
                account)
              </li>
              <li>
                <strong>Control:</strong> You can delete your account anytime
              </li>
            </ul>
          </section>

          {/* 3. Third-Party Services */}
          <section className="cookie-section">
            <h2>3. Third-Party Services</h2>

            <h3>3.1 Google Play Store / Apple App Store</h3>
            <p>
              When you download QuizzyPop from an app store, they may use their
              own cookies and tracking for distribution purposes. We have no
              control over these third-party cookies.
            </p>
            <p>Please review their respective privacy policies:</p>
            <ul>
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Privacy Policy
                </a>
              </li>
            </ul>

            <h3>3.2 Website Hosting</h3>
            <p>
              Our website may be hosted on services that use essential technical
              cookies for security and performance. These are standard for all
              websites and cannot be disabled.
            </p>
          </section>

          {/* 4. Your Privacy Rights */}
          <section className="cookie-section cookie-highlight">
            <h2>4. Your Privacy Rights</h2>

            <h3>4.1 Right to Know</h3>
            <p>
              You have the right to know what data we collect. Since we don't
              use cookies, there are no cookie preferences to manage.
            </p>

            <h3>4.2 Right to Delete</h3>
            <p>You can delete your data by:</p>
            <ul>
              <li>
                <strong>Guest Mode:</strong> Clear app data or uninstall the app
              </li>
              <li>
                <strong>Account Mode:</strong> Email us to delete your account
              </li>
            </ul>

            <h3>4.3 Right to Opt-Out</h3>
            <p>
              Since we don't use tracking cookies, there's nothing to opt-out
              of. Your privacy is protected by design.
            </p>
          </section>

          {/* 5. Contact & Questions */}
          <section className="cookie-section cookie-contact">
            <h2>5. Contact & Questions</h2>
            <p>
              If you have questions about our no-cookie policy or believe we may
              have inadvertently collected data, please contact us:
            </p>
            <div className="contact-info">
              <p>
                <strong>Email:</strong> dev@robertrovenko.com
              </p>
              <p>
                <strong>Response Time:</strong> Within 7 business days
              </p>
            </div>
            <p className="policy-note">
              <strong>Note:</strong> We're committed to maintaining our
              no-cookie policy and will update this page if our practices
              change.
            </p>
          </section>

          {/* 6. Policy Updates */}
          <section className="cookie-section">
            <h2>6. Policy Updates</h2>
            <p>
              We will update this Cookie Policy if we ever decide to use cookies
              in the future. Any changes will be clearly communicated.
            </p>
            <p>
              Currently, we have no plans to implement cookies or tracking
              technologies.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default CookiePolicy;
