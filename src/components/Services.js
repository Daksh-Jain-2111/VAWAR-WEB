import React, { useEffect, useState } from 'react';
import './Services.css';

const Services = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    setTimeout(() => setCardsVisible(true), 600);
  }, []);

  const services = [
    { 
      id: 1, 
      title: 'Leaf Disease Detection', 
      description: 'Detect crop diseases instantly using advanced AI technology.',
      button: 'View Details', 
      detailedDescription: 'Our AI-powered leaf disease detection system uses computer vision to identify over 50 common crop diseases. Simply capture an image of the affected leaf and get instant diagnosis with treatment recommendations.',
      features: ['Instant identification', '50+ diseases database', 'Treatment recommendations', 'Early detection'],
      image: '/ldd.jpg',
      icon: '🌿'
    },
    { 
      id: 2, 
      title: 'Weather Prediction', 
      description: 'Get real-time weather forecasts tailored for farming.',
      button: 'View Details', 
      detailedDescription: 'Advanced weather forecasting system specifically designed for agricultural needs. Get 7-day forecasts, rainfall predictions, temperature tracking, and optimal farming time recommendations.',
      features: ['7-day forecast', 'Rainfall alerts', 'Temperature tracking', 'Farming suggestions'],
      image: '/weather.jpg',
      icon: '🌤️'
    },
    { 
      id: 3, 
      title: 'Mauli Chatbot', 
      description: 'Your AI assistant for 24/7 farming support.',
      button: 'View Details', 
      detailedDescription: 'Meet Mauli, your personal farming assistant available round the clock. Get answers to all your agricultural queries, from crop selection to pest management, in multiple languages.',
      features: ['24/7 assistance', 'Multi-language support', 'Expert farming advice', 'Instant responses'],
      image: '/mauli (2).jpg',
      icon: '🤖'
    },
    { 
      id: 4, 
      title: 'Shivar Advisory', 
      description: 'Personalized farming guidance for better yields.',
      button: 'View Details', 
      detailedDescription: 'Get customized agricultural advice based on your location, soil type, and current crop conditions. Our expert system provides personalized recommendations for maximum productivity.',
      features: ['Location-based advice', 'Soil analysis tips', 'Crop recommendations', 'Seasonal planning'],
      image: '/shivar.jpg',
      icon: '🌾'
    }
  ];

  return (
    <section className={`services-page ${isVisible ? 'visible' : ''}`}>
      <nav className="services-navbar">
        <div className="services-navbar-container">
          <span className="services-logo-text">Vawar</span>
          <button className="services-nav-close" onClick={onClose}>✕</button>
        </div>
      </nav>

      <div className="services-hero">
        <div className="services-hero-content">
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">Smart solutions for modern farming</p>
          <div className="services-hero-stats">
            <div className="services-stat">
              <span className="services-stat-number">50+</span>
              <span className="services-stat-label">Diseases Detected</span>
            </div>
            <div className="services-stat">
              <span className="services-stat-number">24/7</span>
              <span className="services-stat-label">AI Support</span>
            </div>
            <div className="services-stat">
              <span className="services-stat-number">100%</span>
              <span className="services-stat-label">Free Service</span>
            </div>
          </div>
        </div>
        <div className="services-hero-decoration">
          <div className="services-floating-leaf leaf-1">🌿</div>
          <div className="services-floating-leaf leaf-2">🌾</div>
          <div className="services-floating-leaf leaf-3">🌱</div>
        </div>
      </div>

      <section className="services-cards-section">
        <div className="services-cards-container">
          <div className={`services-grid ${cardsVisible ? 'visible' : ''}`}>
            {services.map((service, index) => {
              return (
                <div key={service.id} className={`services-card card-${index + 1}`}>
                  <div className="services-card-icon">
                    <img src={service.image} alt={service.title} className="services-card-image" />
                  </div>
                  <div className="services-card-badge">{service.icon}</div>
                  <h3 className="services-card-title">{service.title}</h3>
                  <p className="services-card-description">{service.description}</p>
                  <div className="services-card-expanded-content">
                    <p className="services-card-detailed">{service.detailedDescription}</p>
                    <ul className="services-card-features-list">
                      {service.features.map((f, i) => <li key={i}>✓ {f}</li>)}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;

