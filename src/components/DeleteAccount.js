// src/components/DeleteAccount.js
import "./DeleteAccount.css";
import React from "react";
import { FaTrashAlt, FaEnvelope, FaMobileAlt, FaCog } from "react-icons/fa";

function DeleteAccount() {
  return (
    <div className="delete-account-page">
      {/* Header */}
      <header className="delete-account-header">
        <div className="delete-account-header-content">
          <h1>Account Deletion Request</h1>
          <p className="delete-account-subtitle">
            How to delete your QuizzyPop account and data
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="delete-account-container">
        <div className="delete-account-content">
          {/* Quick Method */}
          <section className="method-section">
            <h2 className="section-title">
              <FaTrashAlt /> Quickest Method: Delete In-App
            </h2>
            <div className="steps-container">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Open QuizzyPop App</h3>
                  <p>Launch the QuizzyPop app on your device</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Go to Settings</h3>
                  <p>Tap the Settings icon (⚙️) in the app</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Delete Account</h3>
                  <p>Tap "Delete Account" and confirm</p>
                </div>
              </div>
            </div>

            <div className="method-note">
              <FaMobileAlt />
              <p>
                <strong>Recommended:</strong> This is the fastest way to delete
                your account and all associated data immediately.
              </p>
            </div>
          </section>

          {/* Alternative Method */}
          <section className="method-section">
            <h2 className="section-title">
              <FaEnvelope /> Alternative: Email Request
            </h2>
            <div className="email-method">
              <div className="email-contact">
                <h4>Email for Account Deletion Requests:</h4>
                <div className="email-display">dev@robertrovenko.com</div>
                <p>Subject: "QuizzyPop Account Deletion Request"</p>
              </div>

              <div className="email-requirements">
                <h4>Include in your email:</h4>
                <ul>
                  <li>Your QuizzyPop username</li>
                  <li>Subject: "QuizzyPop Account Deletion Request"</li>
                  <li>Confirmation you want all data deleted</li>
                </ul>
              </div>
            </div>

            <div className="processing-info">
              <h4>What happens after deletion:</h4>
              <ul>
                <li>All game progress and scores are permanently deleted</li>
                <li>Leaderboard entries are removed</li>
                <li>Account cannot be recovered</li>
                <li>Process completed within 7 business days</li>
              </ul>
            </div>
          </section>

          {/* Guest Accounts */}
          <section className="guest-section">
            <h2 className="section-title">
              <FaCog /> Guest Accounts
            </h2>
            <div className="guest-info">
              <h3>Playing as Guest?</h3>
              <p>
                Guest account data is stored locally on your device only. To
                delete guest data:
              </p>
              <ul>
                <li>
                  <strong>Uninstall the app</strong> – Removes all local data
                </li>
                <li>
                  <strong>Clear app data</strong> – In device Settings → Apps →
                  QuizzyPop → Clear Data
                </li>
              </ul>
              <p className="guest-note">
                Note: Guest data cannot be recovered once cleared.
              </p>
            </div>
          </section>

          {/* Support */}
        </div>
      </main>
    </div>
  );
}

export default DeleteAccount;
