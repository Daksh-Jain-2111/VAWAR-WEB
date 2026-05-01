import React, { useEffect, useState } from 'react';
import './Terms.css';

const Terms = ({ onClose }) => {
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
      title: 'Acceptance of Terms',
      description: 'By downloading, installing, or using the VAWAR mobile application, you agree to be bound by these Terms of Service.',
      icon: '📋',
      points: [
        'If you do not agree to these terms, do not use the VAWAR application',
        'We reserve the right to update these terms at any time without prior notice',
        'Your continued use of the app after changes constitutes acceptance of the new terms',
        'You are responsible for reviewing these terms regularly for any updates',
      ]
    },
    {
      title: 'Description of Service',
      description: 'VAWAR is an AI-powered smart farming assistant that provides the following services:',
      icon: '🌾',
      points: [
        'AI-based plant disease detection through leaf image analysis',
        'Weather forecasting and agricultural recommendations',
        'GPS-based location services for field analysis',
        'Farming tips and crop management guidance',
        'Offline functionality for areas with limited connectivity',
      ]
    },
    {
      title: 'User Accounts and Registration',
      description: 'To access certain features of VAWAR, you may need to create an account:',
      icon: '👤',
      points: [
        'You must provide accurate and complete registration information',
        'You are responsible for maintaining the confidentiality of your account credentials',
        'You must be at least 18 years old or have parental permission to use the app',
        'You agree to notify us immediately of any unauthorized access to your account',
        'We reserve the right to terminate accounts that violate these terms',
      ]
    },
    {
      title: 'User Content and Data',
      description: 'When using VAWAR, you may upload or submit content:',
      icon: '📷',
      points: [
        'You retain ownership of any images you upload for disease analysis',
        'You grant VAWAR a limited license to process images for analysis purposes',
        'You confirm you have the right to upload any content you submit',
        'We may use anonymized data to improve our AI models and services',
        'You are solely responsible for any content you share with third parties',
      ]
    },
    {
      title: 'Acceptable Use Policy',
      description: 'You agree to use VAWAR in accordance with the following guidelines:',
      icon: '⚖️',
      points: [
        'Use the app only for lawful agricultural and farming purposes',
        'Do not attempt to reverse engineer or modify the application',
        'Do not use the app to harm, abuse, or harass others',
        'Do not upload malicious code, viruses, or harmful content',
        'Do not attempt to gain unauthorized access to our systems',
        'Do not use automated tools to scrape or collect data from the app',
      ]
    },
    {
      title: 'Intellectual Property Rights',
      description: 'VAWAR and its content are protected by intellectual property laws:',
      icon: '💡',
      points: [
        'The VAWAR name, logo, and all related trademarks are owned by us',
        'The AI models and algorithms used for disease detection are proprietary',
        'You may not copy, reproduce, or distribute any part of the app without permission',
        'User-generated content remains your property, but you grant us usage rights',
        'We respect the intellectual property rights of others',
      ]
    },
    {
      title: 'Disclaimers and Limitation of Liability',
      description: 'Please understand the limitations of our service:',
      icon: '⚠️',
      points: [
        'VAWAR provides AI-based suggestions, not professional agricultural advice',
        'Disease detection results are for informational purposes only',
        'We do not guarantee the accuracy or completeness of weather forecasts',
        'Consult with agricultural experts for critical farming decisions',
        'We are not liable for any damages resulting from reliance on our service',
        'The app is provided "as is" without warranties of any kind',
      ]
    },
    {
      title: 'Privacy and Data Protection',
      description: 'Your privacy is important to us. Please review our Privacy Statement:',
      icon: '🔒',
      points: [
        'We collect and process data as described in our Privacy Statement',
        'We use industry-standard security measures to protect your data',
        'You can request deletion of your account and associated data',
        'We do not sell your personal data to third parties',
        'By using VAWAR, you consent to the data practices described in our Privacy Statement',
      ]
    },
    {
      title: 'Termination',
      description: 'We reserve the right to terminate access to VAWAR:',
      icon: '🚪',
      points: [
        'You may stop using VAWAR at any time by deleting the application',
        'We may suspend or terminate your account for violations of these terms',
        'Upon termination, your right to use the app ceases immediately',
        'Provisions related to intellectual property and liability survive termination',
      ]
    },
    {
      title: 'Governing Law and Disputes',
      description: 'These terms are governed by the following legal framework:',
      icon: '⚖️',
      points: [
        'These terms shall be governed by and construed in accordance with applicable laws',
        'Any disputes arising from these terms shall be resolved through appropriate channels',
        'If any provision of these terms is found invalid, the remaining provisions apply',
        'You agree to binding arbitration for any disputes before pursuing legal action',
      ]
    },
    {
      title: 'Contact Information',
      description: 'If you have questions about these Terms of Service, please contact us:',
      icon: '📧',
      points: [
        'Email: support@vawar.com',
        'We aim to respond to all inquiries within 48 business hours',
        'For urgent matters, please include "URGENT" in the subject line',
      ]
    }
  ];

  return (
    <section className={`terms-page ${isVisible ? 'visible' : ''}`}>
      <div className="terms-decorations">
        <span className="terms-decor terms-decor-1">📄</span>
        <span className="terms-decor terms-decor-2">📝</span>
        <span className="terms-decor terms-decor-3">✓</span>
        <span className="terms-decor terms-decor-4">📜</span>
      </div>

      <nav className="terms-navbar">
        <div className="terms-navbar-container">
          <div className="terms-logo">
            <svg className="terms-logo-icon" viewBox="0 0 24 24" fill="none">
              <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" fill="#66bb6a"/>
              <path d="M12 13C12 13 6 16 6 20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20C18 16 12 13 12 13Z" fill="#66bb6a"/>
            </svg>
            <span className="terms-logo-text">Vawar</span>
          </div>
          <button className="terms-nav-close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>

      <div className="terms-hero">
        <div className="terms-hero-content">
          <div className="terms-document-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="terms-title">Terms of Service</h1>
          <p className="terms-subtitle">Please read our terms and conditions carefully</p>
          <div className="terms-title-underline"></div>
          <p className="terms-date">Last updated: {new Date().toISOString().split('T')[0]}</p>
        </div>
      </div>

      <section className="terms-sections">
        <div className="terms-sections-container">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className={`terms-section-card ${expandedSection === index ? 'expanded' : ''}`}
              onClick={() => toggleSection(index)}
            >
              <div className="terms-section-header">
                <div className="terms-section-icon">{section.icon}</div>
                <div className="terms-section-title-wrap">
                  <h3 className="terms-section-title">{section.title}</h3>
                  <p className="terms-section-description">{section.description}</p>
                </div>
                <div className="terms-section-toggle">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d={expandedSection === index ? "M18 15L12 9L6 15" : "M6 9L12 15L18 9"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className="terms-section-content">
                <ul className="terms-points-list">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="terms-point" style={{ animationDelay: `${pointIndex * 0.1}s` }}>
                      <span className="terms-point-bullet">•</span>
                      <span className="terms-point-text">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="terms-footer-section">
        <div className="terms-footer-card">
          <div className="terms-footer-icon">🌾</div>
          <p className="terms-footer-text">
            By using VAWAR, you agree to these Terms of Service. Thank you for being part of our farming community.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Terms;

