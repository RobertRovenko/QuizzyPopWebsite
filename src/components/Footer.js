// src/components/Footer.js
import React from "react";
import "./Footer.css";
import {
  FaGooglePlay,
  FaApple,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaShieldAlt,
  FaFileContract,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section: Logo & Description */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-text">QUIZZYPOP</span>
            </div>
            <p className="footer-tagline">
              The ultimate quiz experience that challenges your mind and rewards
              your knowledge.
            </p>
            <div className="footer-social">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a href="mailto:rovenkodevsupport@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/howtoplay">How to Play</Link>
              </li>

              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="footer-links">
            <h3 className="footer-heading">Legal</h3>
            <ul>
              <li>
                <Link to="/privacy">
                  <FaShieldAlt /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms">
                  <FaFileContract /> Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/faq">
                  <FaQuestionCircle /> FAQ
                </Link>
              </li>

              <li>
                <Link to="/delete-account">Delete Account</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup (Optional) */}
          <div className="footer-newsletter">
            <h3 className="footer-heading">Stay Updated</h3>
            <p>Get notified about new features and quiz tournaments.</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email for newsletter"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Middle Section: App Download */}
        <div className="footer-middle">
          <div className="download-badges">
            {/* Google Play Badge */}
            <a
              href="https://play.google.com/store/apps/details?id=com.rovenkodev.quizzypop"
              target="_blank"
              rel="noopener noreferrer"
              className="download-badge play-badge"
            >
              <FaGooglePlay className="badge-icon" />
              <div className="badge-text">
                <span className="badge-label">GET IT ON</span>
                <span className="badge-store">Google Play</span>
              </div>
            </a>

            {/* App Store Badge - Coming Soon */}
            <div className="download-badge app-badge coming-soon">
              <FaApple className="badge-icon" />
              <div className="badge-text">
                <span className="badge-label">DOWNLOAD ON THE</span>
                <span className="badge-store">App Store</span>
                <span className="coming-soon-label">Coming Soon</span>
              </div>
            </div>
          </div>

          <p className="footer-dev-credit">
            Developed by{" "}
            <a
              href="https://play.google.com/store/apps/dev?id=6638725637924776409&hl=en-US"
              target="_blank"
              rel="noopener noreferrer"
            >
              rovenkodev
            </a>
          </p>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="footer-bottom">
          <div className="copyright">
            © {currentYear} Quizzypop. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">•</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="separator">•</span>
            <Link to="/attributions">Attributions</Link>
            <span className="separator">•</span>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
