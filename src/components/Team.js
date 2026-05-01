import React, { useEffect, useState } from 'react';
import './Team.css';

const Team = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    setTimeout(() => setCardsVisible(true), 600);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'Daksh S. Jain',
      role: 'Co-Founder',
      email: 'dakshjainlptp1008@gmail.com',
      linkedin: 'https://www.linkedin.com/in/daksh-jain-a9b714352?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      instagram: '@dakshu1748',
      image: '/dj.jpg'
    },
    {
      id: 2,
      name: 'Rajwardhan K. Patil',
      role: 'Co-Founder',
      email: 'rajwardhanpatil519@gmail.com',
      linkedin: 'https://www.linkedin.com/in/rajwardhan-patil08?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      instagram: '@_rajwardhan_patil_08',
      image: '/raj.jpg'
    },
    {
      id: 3,
      name: 'Rusahikesh B. Borse',
      role: 'Co-Founder',
      email: 'borserushi8888@gmail.com',
      linkedin: 'https://www.linkedin.com/in/rushikesh-borse-781710372?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      instagram: '@_rushiii_borse_',
      image: '/rushi.jpg'
    }
  ];

  return (
    <section className={`team-page ${isVisible ? 'visible' : ''}`}>
      {/* Background decorations */}
      <div className="team-decorations">
        <span className="team-decor team-decor-1">🌾</span>
        <span className="team-decor team-decor-2">🌿</span>
        <span className="team-decor team-decor-3">🌱</span>
        <span className="team-decor team-decor-4">🚜</span>
        <span className="team-decor team-decor-5">🌻</span>
        <span className="team-decor team-decor-6">🌽</span>
      </div>

      {/* Navigation Bar */}
      <nav className="team-navbar">
        <div className="team-navbar-container">
          <div className="team-logo">
            <svg className="team-logo-icon" viewBox="0 0 24 24" fill="none">
              <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" fill="#66bb6a"/>
              <path d="M12 13C12 13 6 16 6 20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20C18 16 12 13 12 13Z" fill="#66bb6a"/>
            </svg>
            <span className="team-logo-text">Vawar</span>
          </div>
          <button className="team-nav-close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="team-hero">
        <div className="team-hero-content">
          <h1 className="team-title">Meet Our Team</h1>
          <p className="team-subtitle">The passionate people behind Vawar</p>
          <div className="team-title-underline"></div>
        </div>
      </div>

      {/* Team Cards Section */}
      <section className="team-cards-section">
        <div className="team-cards-container">
          <div className={`team-cards-grid ${cardsVisible ? 'visible' : ''}`}>
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className={`team-card team-card-${index + 1}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card Glow Effect */}
                <div className="team-card-glow"></div>
                
                {/* Card Content */}
                <div className="team-card-content">
                  {/* Image Container */}
                  <div className="team-card-image-container">
                    <div className="team-card-image-wrapper">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="team-card-image"
                      />
                    </div>
                    <div className="team-card-image-ring"></div>
                  </div>

                  {/* Info */}
                  <h3 className="team-card-name">{member.name}</h3>
                  <p className="team-card-role">{member.role}</p>

                  {/* Social Links */}
                  <div className="team-card-socials">
                    <a 
                      href={`mailto:${member.email}`} 
                      className="team-social-link team-social-email"
                      title="Email"
                    >
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    {member.instagram && (
                      <a 
                        href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="team-social-link team-social-instagram"
                        title="Instagram"
                      >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
                        </svg>
                      </a>
                    )}
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="team-social-link team-social-linkedin"
                      title="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="2" y="9" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>

                  {/* Email Display */}
                  <div className="team-card-email">
                    <span className="team-email-label">Email:</span>
                    <span className="team-email-value">{member.email}</span>
                  </div>
                </div>

                {/* Card Border Effect */}
                <div className="team-card-border"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Team;

