import React, { useEffect, useState } from 'react';
import './AboutVawar.css';

const AboutVawar = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section className={`about-page ${isVisible ? 'visible' : ''}`}>
      <div className="about-decorations">
        <span className="about-decor about-decor-1">🌾</span>
        <span className="about-decor about-decor-2">🌱</span>
        <span className="about-decor about-decor-3">🚜</span>
        <span className="about-decor about-decor-4">💧</span>
      </div>

      <nav className="about-navbar">
        <div className="about-navbar-container">
          <div className="about-logo">
            <svg className="about-logo-icon" viewBox="0 0 24 24" fill="none">
              <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" fill="#66bb6a"/>
              <path d="M12 13C12 13 6 16 6 20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20C18 16 12 13 12 13Z" fill="#66bb6a"/>
            </svg>
            <span className="about-logo-text">Vawar</span>
          </div>
          <button className="about-nav-close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>

      <div className="about-hero">
        <div className="about-hero-content">
          <div className="about-icon-wrapper">
            <img src="/vawar.jpg" alt="VAWAR Logo" className="about-logo-image" />
          </div>
          <h1 className="about-title">VAWAR</h1>
          <p className="about-subtitle">Smart Farming Assistant</p>
          <div className="about-title-underline"></div>
        </div>
      </div>

      <section className="about-sections">
        <div className="about-sections-container">
          {/* App Purpose */}
          <div className="about-section-card">
            <div className="about-section-header">
              <div className="about-section-icon">🎯</div>
              <h3 className="about-section-title">App Purpose</h3>
            </div>
            <div className="about-section-content">
              <p>Empowering farmers with AI-driven insights for smarter agriculture.</p>
            </div>
          </div>

          {/* Organization / Developer Info */}
          <div className="about-section-card">
            <div className="about-section-header">
              <div className="about-section-icon">🏢</div>
              <h3 className="about-section-title">Organization / Developer Info</h3>
            </div>
            <div className="about-section-content">
              <p>Developed by the VAWAR team, dedicated to revolutionizing farming through technology.</p>
            </div>
          </div>

          {/* Version Number */}
          <div className="about-section-card">
            <div className="about-section-header">
              <div className="about-section-icon">📱</div>
              <h3 className="about-section-title">Version</h3>
            </div>
            <div className="about-section-content">
              <p>1.0.0+1</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="about-section-card">
            <div className="about-section-header">
              <div className="about-section-icon">⚙️</div>
              <h3 className="about-section-title">Tech Stack</h3>
            </div>
            <div className="about-section-content">
              <p>Built with Flutter and Dart, utilizing modern mobile development frameworks.</p>
            </div>
          </div>

          {/* Acknowledgements */}
          <div className="about-section-card about-acknowledgements">
            <div className="about-section-header">
              <div className="about-section-icon">🙏</div>
              <h3 className="about-section-title">Acknowledgements</h3>
            </div>
            <div className="about-section-content">
              <p className="about-ack-label">Libraries & APIs:</p>
              <ul className="about-bullet-list">
                <li>Flutter - UI Framework</li>
                <li>Dart - Programming Language</li>
                <li>Connectivity Plus - Network Status</li>
                <li>Google Sign-In - Authentication</li>
                <li>Flutter Local Notifications - Push Notifications</li>
                <li>Provider - State Management</li>
                <li>SQFlite - Local Database</li>
                <li>Path Provider - File System Access</li>
              </ul>
            </div>
          </div>

          {/* Instagram */}
          <div className="about-section-card about-instagram">
            <div className="about-section-content">
              <div className="about-insta-wrapper">
                <img src="/insta.jpg" alt="Instagram" className="about-insta-icon" />
                <span className="about-insta-handle">@vawar_official</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-footer-section">
        <div className="about-footer-card">
          <div className="about-footer-icon">🌾</div>
          <p className="about-footer-text">
            Thank you for choosing VAWAR - Your Smart Farming Partner.
          </p>
        </div>
      </section>
    </section>
  );
};

export default AboutVawar;

