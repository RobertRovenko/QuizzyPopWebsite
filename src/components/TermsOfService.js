// src/components/TermsOfService.js
import "./TermsOfService.css";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";

function TermsOfService() {
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
    <div className="terms-page" ref={pageRef}>
      {/* Header */}
      <header className="terms-header">
        <div className="terms-header-content">
          <h1>Terms of Service</h1>
          <p className="terms-subtitle">Last Updated: {lastUpdated}</p>
          <p className="terms-important">
            <strong>Important:</strong> By using QuizzyPop, you agree to these
            terms.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="terms-container">
        <div className="terms-content">
          {/* Quick Summary */}
          <section className="terms-section terms-highlight">
            <h2>📋 In Simple Terms</h2>
            <div className="summary-grid">
              <div className="summary-item">
                <h3>✅ You Agree To:</h3>
                <ul>
                  <li>Play fairly (no cheating)</li>
                  <li>Use appropriate usernames</li>
                  <li>Be responsible for your account</li>
                  <li>Accept app updates & changes</li>
                  <li>Not misuse the app</li>
                </ul>
              </div>
              <div className="summary-item">
                <h3>✅ We Agree To:</h3>
                <ul>
                  <li>Provide the quiz game service</li>
                  <li>Protect your privacy (see Privacy Policy)</li>
                  <li>Maintain fair leaderboards</li>
                  <li>Respond to issues promptly</li>
                  <li>Be transparent about changes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 1. Agreement to Terms */}
          <section className="terms-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using QuizzyPop ("the App"), you agree to be bound
              by these Terms of Service. If you disagree with any part of the
              terms, you may not access the App.
            </p>
            <p>
              <strong>Age Requirement:</strong> You must be at least 13 years
              old to use QuizzyPop. If you are under 13, you may only use Guest
              Mode under parental supervision.
            </p>
          </section>

          {/* 2. Description of Service */}
          <section className="terms-section">
            <h2>2. Description of Service</h2>
            <p>QuizzyPop is a mobile quiz application that provides:</p>
            <ul>
              <li>Interactive quiz games across various categories</li>
              <li>Guest Mode (play without account)</li>
              <li>Account Mode (save progress across devices)</li>
              <li>Leaderboards and achievements</li>
              <li>Regular content updates</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any part
              of the App at any time.
            </p>
          </section>

          {/* 3. Accounts */}
          <section className="terms-section">
            <h2>3. Accounts</h2>

            <h3>3.1 Guest Mode</h3>
            <ul>
              <li>No registration required</li>
              <li>Game progress stored locally on your device only</li>
              <li>
                Progress cannot be recovered if device is lost or app is
                uninstalled
              </li>
              <li>May have limited access to certain features</li>
            </ul>

            <h3>3.2 Account Mode</h3>
            <ul>
              <li>Requires creation of a username</li>
              <li>Game progress is synced to our servers</li>
              <li>Allows playing across multiple devices</li>
              <li>Provides data backup and recovery</li>
            </ul>

            <h3>3.3 Account Responsibilities</h3>
            <ul>
              <li>You are responsible for maintaining account security</li>
              <li>You must provide accurate information</li>
              <li>You may not share your account with others</li>
              <li>
                We reserve the right to disable accounts that violate these
                terms
              </li>
            </ul>

            <h3>3.4 Username Guidelines</h3>
            <p>Usernames must not contain:</p>
            <ul>
              <li>Offensive, abusive, or hateful language</li>
              <li>Impersonation of other individuals or entities</li>
              <li>Promotion of illegal activities</li>
              <li>Sexually explicit content</li>
              <li>Advertising or commercial promotion</li>
            </ul>
            <p>
              We reserve the right to change or remove inappropriate usernames.
            </p>
          </section>

          {/* 4. User Conduct */}
          <section className="terms-section">
            <h2>4. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Use any unauthorized third-party software to modify or interfere
                with the App
              </li>
              <li>Attempt to hack, cheat, or exploit bugs in the App</li>
              <li>Use automated systems (bots) to play quizzes</li>
              <li>Harass, threaten, or bully other users</li>
              <li>
                Share inappropriate content through usernames or other means
              </li>
              <li>
                Reverse engineer, decompile, or disassemble any portion of the
                App
              </li>
              <li>Use the App for any illegal purpose</li>
            </ul>
          </section>

          {/* 5. Intellectual Property */}
          <section className="terms-section">
            <h2>5. Intellectual Property</h2>

            <h3>5.1 Our Rights</h3>
            <p>
              The QuizzyPop app, including all source code, databases,
              functionality, software, website designs, audio, video, text,
              photographs, and graphics, are owned by us and are protected by
              copyright and trademark laws.
            </p>

            <h3>5.2 Your Rights</h3>
            <p>
              You retain ownership of your game data (scores, progress,
              achievements). By using the App, you grant us a license to store
              and display this data as part of the App's functionality.
            </p>

            <h3>5.3 Third-Party Assets</h3>
            <p>
              The App includes animated emoji from Noto Emoji by Google, used
              under Creative Commons Attribution 4.0 International (CC BY 4.0).
              Full attribution available at{" "}
              <Link to="/attributions">Attributions Page</Link>.
            </p>
          </section>

          {/* 6. Purchases and Payments */}
          <section className="terms-section">
            <h2>6. Purchases and Payments</h2>
            <p>
              QuizzyPop is free to download and play. If we introduce in-app
              purchases in the future, additional terms will apply.
            </p>
            <p>
              All purchases are processed through the respective app store
              (Google Play Store or Apple App Store) and are subject to their
              terms and conditions.
            </p>
          </section>

          {/* 7. Termination */}
          <section className="terms-section">
            <h2>7. Termination</h2>

            <h3>7.1 By You</h3>
            <p>
              You may stop using the App at any time. For Account users, you may
              request account deletion by contacting us at
              dev@robertrovenko.com.
            </p>

            <h3>7.2 By Us</h3>
            <p>
              We may terminate or suspend your account immediately, without
              prior notice, for conduct that we believe violates these Terms or
              is harmful to other users, us, or third parties, or for any other
              reason.
            </p>

            <h3>7.3 Effect of Termination</h3>
            <p>
              Upon termination, your right to use the App will cease
              immediately. Guest data will be deleted when you uninstall the
              App. Account data will be deleted according to our data retention
              policies.
            </p>
          </section>

          {/* 8. Disclaimer of Warranties */}
          <section className="terms-section terms-important-section">
            <h2>8. Disclaimer of Warranties</h2>
            <p>
              THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE
              MAKE NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE APP'S
              OPERATION OR AVAILABILITY.
            </p>
            <p>Specifically, we do not warrant that:</p>
            <ul>
              <li>The App will be uninterrupted or error-free</li>
              <li>Quiz questions are 100% accurate or complete</li>
              <li>The App will meet your specific requirements</li>
              <li>Errors will be corrected</li>
              <li>The App is free of viruses or other harmful components</li>
            </ul>
          </section>

          {/* 9. Limitation of Liability */}
          <section className="terms-section terms-important-section">
            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR
              ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE,
              GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul>
              <li>
                Your access to or use of or inability to access or use the App
              </li>
              <li>Any conduct or content of any third party on the App</li>
              <li>Any content obtained from the App</li>
              <li>
                Unauthorized access, use, or alteration of your transmissions or
                content
              </li>
              <li>Loss of game progress or data</li>
            </ul>
            <p>
              OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR
              RELATING TO THESE TERMS OR THE APP SHALL NOT EXCEED THE AMOUNT YOU
              HAVE PAID TO US IN THE PAST SIX MONTHS.
            </p>
          </section>

          {/* 10. Indemnification */}
          <section className="terms-section">
            <h2>10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold us harmless from and
              against any claims, liabilities, damages, losses, and expenses,
              including without limitation, reasonable legal and accounting
              fees, arising out of or in any way connected with:
            </p>
            <ul>
              <li>Your access to or use of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party right</li>
              <li>Any content you submit to the App</li>
            </ul>
          </section>

          {/* 11. Governing Law */}
          <section className="terms-section">
            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of [Your Country/State], without regard to its conflict
              of law provisions.
            </p>
            <p>
              Any disputes arising under these Terms shall be resolved in the
              courts located in [Your City, Country/State].
            </p>
          </section>

          {/* 12. Changes to Terms */}
          <section className="terms-section">
            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify you of any changes by updating the "Last Updated" date at
              the top of these Terms.
            </p>
            <p>
              Your continued use of the App after any such changes constitutes
              your acceptance of the new Terms. If you do not agree to any of
              these Terms or any future Terms, do not use or access the App.
            </p>
          </section>

          {/* 13. Severability */}
          <section className="terms-section">
            <h2>13. Severability</h2>
            <p>
              If any provision of these Terms is held to be invalid or
              unenforceable by a court, the remaining provisions of these Terms
              will remain in effect.
            </p>
          </section>

          {/* 14. Entire Agreement */}
          <section className="terms-section">
            <h2>14. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any other legal
              notices published by us on the App, shall constitute the entire
              agreement between you and us concerning the App.
            </p>
          </section>

          {/* 15. Contact Information */}
          <section className="terms-section terms-contact">
            <h2>15. Contact Information</h2>
            <p>For questions about these Terms, please contact us at:</p>
            <div className="contact-info">
              <p>
                <strong>Email:</strong> dev@robertrovenko.com
              </p>
              <p>
                <strong>Developer:</strong> rovenkodev
              </p>
              <p>
                <strong>Response Time:</strong> Within 7 business days
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default TermsOfService;
