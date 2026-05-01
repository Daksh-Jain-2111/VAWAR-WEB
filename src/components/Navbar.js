import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onExploreFeatures, onShowPricing, onShowTeam, onShowServices, onShowAbout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesDropdownOpen && !e.target.closest('.services-dropdown-container')) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [servicesDropdownOpen]);

  const menuItems = ['Features', 'About', 'Team', 'Pricing'];

  const services = [
    { id: 1, title: 'Leaf Disease Detection', icon: '🌿', desc: 'AI-powered disease detection' },
    { id: 2, title: 'Weather Prediction', icon: '🌤️', desc: 'Real-time weather forecasts' },
    { id: 3, title: 'Mauli Chatbot', icon: '🤖', desc: '24/7 AI farming assistant' },
    { id: 4, title: 'Shivar Advisory', icon: '🌾', desc: 'Personalized farming guidance' }
  ];

  const handleServiceClick = (serviceId) => {
    setServicesDropdownOpen(false);
    if (onShowServices) onShowServices(serviceId);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <svg 
              className="logo-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" 
                fill="#66bb6a"
              />
              <path 
                d="M12 13C12 13 6 16 6 20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20C18 16 12 13 12 13Z" 
                fill="#66bb6a"
              />
              <path 
                d="M12 13V16M12 16C10 16 8 17.5 8 19M12 16C14 16 16 17.5 16 19" 
                stroke="#1b5e20" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
            </svg>
            <span className="logo-text">Vawar</span>
          </div>

          <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
            {menuItems.map((item) => (
              <li key={item} className="navbar-menu-item">
                {item === 'Features' ? (
                  <a 
                    href="#" 
                    className="navbar-link"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onExploreFeatures) onExploreFeatures();
                    }}
                  >
                    {item}
                  </a>
                ) : item === 'Pricing' ? (
                  <a 
                    href="#" 
                    className="navbar-link"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onShowPricing) onShowPricing();
                    }}
                  >
                    {item}
                  </a>
) : item === 'Team' ? (
                  <a 
                    href="#" 
                    className="navbar-link"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onShowTeam) onShowTeam();
                    }}
                  >
                    {item}
                  </a>
                ) : item === 'About' ? (
                  <a 
                    href="#" 
                    className="navbar-link"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onShowAbout) onShowAbout();
                    }}
                  >
                    {item}
                  </a>
                ) : (
                  <a href="#about" className="navbar-link">
                    {item}
                  </a>
                )}
              </li>
            ))}
            {/* Services Dropdown */}
            <li className="navbar-menu-item services-dropdown-container">
              <button 
                className={`navbar-link services-link ${servicesDropdownOpen ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setServicesDropdownOpen(!servicesDropdownOpen);
                }}
              >
                Services
                <span className={`services-arrow ${servicesDropdownOpen ? 'open' : ''}`}>▼</span>
              </button>
              <div className={`services-dropdown ${servicesDropdownOpen ? 'open' : ''}`}>
                <div className="services-dropdown-header">
                  <span className="services-dropdown-title">Our Services</span>
                  <span className="services-dropdown-subtitle">Smart farming solutions</span>
                </div>
                <div className="services-dropdown-items">
                  {services.map((service) => (
                    <button 
                      key={service.id} 
                      className="services-dropdown-item"
                      onClick={() => handleServiceClick(service.id)}
                    >
                      <span className="services-dropdown-icon">{service.icon}</span>
                      <div className="services-dropdown-item-content">
                        <span className="services-dropdown-item-title">{service.title}</span>
                        <span className="services-dropdown-item-desc">{service.desc}</span>
                      </div>
                      <span className="services-dropdown-arrow">→</span>
                    </button>
                  ))}
                </div>
                <button 
                  className="services-dropdown-cta"
                  onClick={() => {
                    setServicesDropdownOpen(false);
                    if (onShowServices) onShowServices();
                  }}
                >
                  View All Services →
                </button>
              </div>
            </li>
          </ul>

          <div className="navbar-actions">
            <button 
              className="btn-contact" 
              onClick={() => setShowContactModal(true)}
            >
              Contact Us
            </button>
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {showContactModal && (
        <div 
          className="contact-modal-overlay"
          onClick={() => setShowContactModal(false)}
        >
          <div 
            className="contact-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="contact-card-close"
              onClick={() => setShowContactModal(false)}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h2 className="contact-card-title">Contact Us</h2>
            <div className="contact-card-content">
              <a href="mailto:team.vawar@gmail.com" className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="contact-text">team.vawar@gmail.com</span>
              </a>
              <a href="https://instagram.com/vawar_official" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 2H17C18.6569 2 20 3.34315 20 5V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V5C4 3.34315 5.34315 2 7 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="1" fill="currentColor"/>
                  </svg>
                </div>
                <span className="contact-text">@vawar_official</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

