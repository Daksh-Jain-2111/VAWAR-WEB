import React, { useEffect, useState } from 'react';
import './Privacy.css';

const Privacy = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const sections = [
    {
      title: 'What Data We Collect',
      description: 'We collect the following types of data to provide and improve our smart farming services:',
      icon: '📊',
      points: [
        'Login Information: Email address, full name, and phone number for account creation and authentication',
        'Images: Leaf images uploaded for disease detection analysis',
        'Location: GPS coordinates for weather forecasting and field analysis (with permission)',
        'Device ID: Unique device identifier for app functionality and security',
        'Usage Data: App usage patterns, feature interactions, and performance metrics',
        'Connectivity Information: Network status for offline functionality',
      ]
    },
    {
      title: 'Why We Collect It',
      description: 'We collect this data to:',
      icon: '🎯',
      points: [
        'Provide personalized farming recommendations and AI-powered insights',
        'Enable accurate weather forecasting for your location',
        'Analyze leaf images for disease detection using machine learning',
        'Ensure secure account access and prevent unauthorized use',
        'Improve app performance and user experience',
        'Maintain offline functionality when internet is unavailable',
        'Send relevant notifications about weather alerts and crop conditions',
      ]
    },
    {
      title: 'Who We Share It With',
      description: 'Your privacy is our priority. We do not sell or rent your personal data to third parties.',
      icon: '🤝',
      points: [
        'Third-Party APIs: We may share anonymized data with trusted agricultural APIs for weather forecasting and crop analysis',
        'Service Providers: Limited data sharing with cloud storage providers for app functionality',
        'Legal Requirements: We may disclose data if required by law or to protect our rights',
        'Aggregated Data: Anonymous, aggregated data may be used for research and improvement purposes',
      ]
    },
    {
      title: 'How Long We Store It',
      description: 'We retain your data for the following periods:',
      icon: '⏱️',
      points: [
        'Account Data: Stored as long as your account is active, deleted upon account deletion',
        'Images: Stored temporarily for analysis (up to 30 days) then automatically deleted',
        'Location Data: Stored only during active sessions, not permanently retained',
        'Usage Analytics: Aggregated data retained for up to 2 years for improvement purposes',
        'Device Information: Stored for security purposes during active account period',
      ]
    },
    {
      title: 'Your Rights',
      description: 'You have the following rights regarding your data:',
      icon: '🛡️',
      points: [
        'Delete Data: Request complete deletion of your account and associated data',
        'Export Data: Request a copy of all your personal data in a portable format',
        'Revoke Permissions: Withdraw location or camera permissions at any time',
        'Access Information: View what data we have collected about you',
        'Correct Information: Update or correct your personal information',
        'Data Portability: Transfer your data to another service if technically feasible',
      ]
    }
  ];

  return (
    <section className={`privacy-page ${isVisible ? 'visible' : ''}`}>
      <div className="privacy-decorations">
        <span className="privacy-decor privacy-decor-1">🔒</span>
        <span className="privacy-decor privacy-decor-2">📜</span>
        <span className="privacy-decor privacy-decor-3">🛡️</span>
        <span className="privacy-decor privacy-decor-4">✓</span>
      </div>

      <nav className="privacy-navbar">
        <div className="privacy-navbar-container">
          <div className="privacy-logo">
            <svg className="privacy-logo-icon" viewBox="0 0 24 24" fill="none">
              <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" fill="#66bb6a"/>
              <path d="M12 13C12 13 6 16 6 20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20C18 16 12 13 12 13Z" fill="#66bb6a"/>
            </svg>
            <span className="privacy-logo-text">Vawar</span>
          </div>
          <button className="privacy-nav-close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>

      <div className="privacy-hero">
        <div className="privacy-hero-content">
          <div className="privacy-shield-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="privacy-title">Privacy Statement</h1>
          <p className="privacy-subtitle">Your data privacy is our top priority</p>
          <div className="privacy-title-underline"></div>
          <p className="privacy-date">Last updated: {new Date().toISOString().split('T')[0]}</p>
        </div>
      </div>

      <section className="privacy-sections">
        <div className="privacy-sections-container">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className={`privacy-section-card ${expandedSection === index ? 'expanded' : ''}`}
              onClick={() => toggleSection(index)}
            >
              <div className="privacy-section-header">
                <div className="privacy-section-icon">{section.icon}</div>
                <div className="privacy-section-title-wrap">
                  <h3 className="privacy-section-title">{section.title}</h3>
                  <p className="privacy-section-description">{section.description}</p>
                </div>
                <div className="privacy-section-toggle">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d={expandedSection === index ? "M18 15L12 9L6 15" : "M6 9L12 15L18 9"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className="privacy-section-content">
                <ul className="privacy-points-list">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="privacy-point" style={{ animationDelay: `${pointIndex * 0.1}s` }}>
                      <span className="privacy-point-bullet">•</span>
                      <span className="privacy-point-text">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="privacy-footer-section">
        <div className="privacy-footer-card">
          <div className="privacy-footer-icon">🌾</div>
          <p className="privacy-footer-text">
            Thank you for trusting VAWAR with your farming journey.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Privacy;

