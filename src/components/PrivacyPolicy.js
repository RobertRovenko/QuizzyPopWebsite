// src/components/PrivacyPolicy.js
import "./PrivacyPolicy.css";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";

function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = `${currentYear}-02-05`;
  const pageRef = useRef(null);

  useEffect(() => {
    // Get the actual header height
    const header = document.querySelector(".header");
    if (header && pageRef.current) {
      const headerHeight = header.offsetHeight;
      // Apply the exact height as padding
      pageRef.current.style.paddingTop = `${headerHeight}px`;

      // Optional: Log for debugging
      console.log("Header height:", headerHeight);
    }
  }, []);

  return (
    <div className="privacy-policy-page" ref={pageRef}>
      {/* Header */}
      <header className="policy-header">
        <div className="policy-header-content">
          <h1>Privacy Policy</h1>
          <p className="policy-subtitle">Last Updated: {lastUpdated}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="policy-container">
        <div className="policy-content">
          {/* QUICK SUMMARY */}
          <section className="policy-section policy-highlight">
            <h2>📋 Choose Your Privacy Level</h2>
            <div className="summary-grid">
              <div className="summary-item">
                <h3>🎮 Play as Guest</h3>
                <ul>
                  <li>
                    <strong>✅ No Account Needed</strong>
                  </li>
                  <li>
                    <strong>✅ Data Stays on Your Device</strong>
                  </li>
                  <li>
                    <strong>✅ No Data Sent to Us</strong>
                  </li>
                  <li>
                    <strong>✅ Maximum Privacy</strong>
                  </li>
                  <li>
                    <strong>✅ Full Game Access</strong>
                  </li>
                </ul>
              </div>
              <div className="summary-item">
                <h3>🔐 Create Account</h3>
                <ul>
                  <li>
                    <strong>Stores:</strong> Username + Game Progress
                  </li>
                  <li>
                    <strong>Enables:</strong> Multi-device sync
                  </li>
                  <li>
                    <strong>Provides:</strong> Data backup & recovery
                  </li>
                </ul>
              </div>
            </div>
            <p className="policy-note" style={{ marginTop: "15px" }}>
              <strong>Your Choice:</strong> Play as Guest or Sign Up to save
              your progress
            </p>
          </section>

          {/* 1. Guest Mode (No Data Collection) */}
          <section className="policy-section">
            <h2>1. Guest Mode: Play Without Account</h2>

            <h3>1.1 How Guest Mode Works</h3>
            <ul>
              <li>
                <strong>Immediate Access:</strong> Tap "Play as Guest" to start
                playing immediately
              </li>
              <li>
                <strong>Local Storage Only:</strong> Game progress saved only on
                your device
              </li>
              <li>
                <strong>No Data Transmission:</strong> No information sent to
                our servers
              </li>
              <li>
                <strong>No Database Storage:</strong> Nothing stored in our
                database
              </li>
              <li>
                <strong>Complete Features:</strong> Access to all quizzes and
                game modes
              </li>
            </ul>

            <h3>1.2 Guest Mode Data Storage</h3>
            <ul>
              <li>
                <strong>Device Storage:</strong> Uses your phone's local storage
                (AsyncStorage)
              </li>
              <li>
                <strong>Data Types:</strong> Game scores, XP, unlocks (local
                only)
              </li>
              <li>
                <strong>Deletion:</strong> Clear app data or uninstall to remove
                everything
              </li>
              <li>
                <strong>No Recovery:</strong> If you lose your device, guest
                data is lost
              </li>
            </ul>

            <h3>1.3 Guest Limitations</h3>
            <ul>
              <li>Progress is device-specific</li>
              <li>No multi-device synchronization</li>
              <li>Leaderboards may be local only</li>
              <li>Cannot recover data if device is lost</li>
            </ul>
          </section>

          {/* 2. Account Mode (Optional) */}
          <section className="policy-section">
            <h2>2. Account Mode (Optional)</h2>
            <p>
              <strong>
                Only create an account if you want to sync progress across
                devices.
              </strong>
            </p>

            <h3>2.1 Information We Store With Account</h3>
            <ul>
              <li>
                <strong>Username:</strong> Your chosen display name (e.g.,
                "QuizMaster123")
              </li>
              <li>
                <strong>Game Progress:</strong> Scores, XP, levels, unlocks,
                achievements
              </li>
              <li>
                <strong>Account Data:</strong> Creation date and game statistics
              </li>
              <li>
                <strong>Settings:</strong> Your game preferences and controls
              </li>
            </ul>

            <h3>2.2 What We NEVER Store (Even With Account)</h3>
            <ul>
              <li>
                <strong>❌ Email Address</strong> (we don't ask for it)
              </li>
              <li>
                <strong>❌ Real Name or Personal Information</strong>
              </li>
              <li>
                <strong>❌ Location Data</strong>
              </li>
              <li>
                <strong>❌ Contacts List</strong>
              </li>
              <li>
                <strong>❌ Photos or Files</strong>
              </li>
              <li>
                <strong>❌ Payment Information</strong>
              </li>
              <li>
                <strong>❌ Camera or Microphone Access</strong>
              </li>
            </ul>
          </section>

          {/* 3. Data Storage & Security */}
          <section className="policy-section">
            <h2>3. Data Storage & Security</h2>

            <h3>3.1 Guest Data Storage</h3>
            <ul>
              <li>
                <strong>Location:</strong> Your device's local storage only
              </li>
              <li>
                <strong>Technology:</strong> AsyncStorage (secure device
                storage)
              </li>
              <li>
                <strong>Access:</strong> Only accessible on your device
              </li>
              <li>
                <strong>Encryption:</strong> Uses your device's built-in
                security
              </li>
            </ul>

            <h3>3.2 Account Data Storage</h3>
            <ul>
              <li>
                <strong>Database:</strong> Secure cloud database for sync
              </li>
              <li>
                <strong>Backups:</strong> Regular backups to prevent data loss
              </li>
              <li>
                <strong>Encryption:</strong> Data encrypted in transit and at
                rest
              </li>
              <li>
                <strong>Access Control:</strong> Only you can access your game
                data
              </li>
            </ul>
          </section>

          {/* 4. Data Sharing */}
          <section className="policy-section">
            <h2>4. Data Sharing</h2>
            <p>
              <strong>
                We do NOT sell, trade, or rent your data to anyone.
              </strong>
            </p>

            <h3>4.1 Guest Mode Sharing</h3>
            <p>
              <strong>Zero Sharing:</strong> Guest data never leaves your
              device.
            </p>

            <h3>4.2 Account Mode Limited Sharing</h3>
            <ul>
              <li>
                <strong>Leaderboards:</strong> Only username and scores visible
                to others
              </li>
              <li>
                <strong>Database Provider:</strong> Required for data storage
                and sync
              </li>
              <li>
                <strong>Legal Requirements:</strong> Only if required by law
              </li>
            </ul>

            <h3>4.3 Third-Party Services</h3>
            <ul>
              <li>
                <strong>Google Play Store:</strong> App distribution only
                <br />
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <strong>Database Service:</strong> Secure data storage for
                account users
              </li>
            </ul>
          </section>

          {/* 5. Data Comparison Table */}
          <section className="policy-section policy-highlight">
            <h2>5. Guest vs Account: Quick Comparison</h2>
            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Guest Mode</th>
                    <th>Account Mode</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data Collection</td>
                    <td>✅ None (device only)</td>
                    <td>Username + Game Progress</td>
                  </tr>
                  <tr>
                    <td>Data Storage Location</td>
                    <td>Your device only</td>
                    <td>Database + Your device</td>
                  </tr>
                  <tr>
                    <td>Multi-Device Sync</td>
                    <td>❌ No</td>
                    <td>✅ Yes</td>
                  </tr>
                  <tr>
                    <td>Data Recovery</td>
                    <td>❌ No (lose if device lost)</td>
                    <td>✅ Yes</td>
                  </tr>
                  <tr>
                    <td>Global Leaderboards</td>
                    <td>Local only</td>
                    <td>✅ Yes</td>
                  </tr>
                  <tr>
                    <td>Privacy Level</td>
                    <td>✅ Maximum</td>
                    <td>Standard (username only)</td>
                  </tr>
                  <tr>
                    <td>Data Deletion</td>
                    <td>Uninstall app</td>
                    <td>Contact us to delete account</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 6. Children's Privacy */}
          <section className="policy-section policy-important-section">
            <h2>🚸 6. Children's Privacy</h2>
            <p>
              <strong>
                QuizzyPop does not knowingly collect personal information from
                children under 13.
              </strong>
            </p>
            <ul>
              <li>Our app is suitable for general audiences</li>
              <li>Guest mode is ideal for children (no data collection)</li>
              <li>We do not collect age information</li>
            </ul>
          </section>

          {/* 7. Your Rights */}
          <section className="policy-section">
            <h2>7. Your Rights & Choices</h2>

            <h3>7.1 Guest Users</h3>
            <ul>
              <li>
                <strong>Complete Control:</strong> Your data never leaves your
                device
              </li>
              <li>
                <strong>Delete Everything:</strong> Uninstall app or clear app
                data
              </li>
              <li>
                <strong>Switch to Account:</strong> Convert to account anytime
              </li>
            </ul>

            <h3>7.2 Account Users</h3>
            <ul>
              <li>
                <strong>Delete Account:</strong> Permanent deletion of all your
                data
              </li>
            </ul>

            <h3>How to Exercise Your Rights:</h3>
            <ol>
              <li>
                <strong>Guests:</strong> Clear app data in device settings
              </li>
              <li>
                <strong>Account Users:</strong> Contact dev@robertrovenko.com
              </li>
              <li>
                <strong>All Users:</strong> Uninstall app to remove local data
              </li>
            </ol>
          </section>

          {/* 8. Policy Updates */}
          <section className="policy-section">
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this policy to reflect changes in our practices. We
              will notify you by updating the "Last Updated" date.
            </p>
            <p>
              Continued use of QuizzyPop means you accept the updated policy.
            </p>
          </section>

          {/* 9. Contact Information */}
          <section className="policy-section policy-contact">
            <h2>9. Contact Us</h2>
            <p>For privacy questions, data deletion requests, or concerns:</p>
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
            <p className="policy-note">
              <strong>Note:</strong> We're a small indie developer. We respect
              your privacy and handle all requests personally.
            </p>
          </section>

          {/* 10. Your Consent */}
          <section className="policy-section">
            <h2>10. Your Consent</h2>
            <p>By using QuizzyPop, you consent to:</p>
            <ul>
              <li>
                <strong>Guest Mode:</strong> Local storage on your device
              </li>
              <li>
                <strong>Account Mode:</strong> Database storage of username and
                game progress
              </li>
              <li>
                <strong>Leaderboards:</strong> Display of username and scores
                (account only)
              </li>
            </ul>
            <p>
              You can withdraw consent by deleting your account or uninstalling
              the app.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
