import React, { useEffect, useState } from 'react';
import './Features.css';

const Features = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [expandedCardId, setExpandedCardId] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    setTimeout(() => setCardsVisible(true), 600);
  }, []);

  const handleCardClick = (id) => setExpandedCardId(id);
  const handleBack = () => setExpandedCardId(null);

  const features = [
    { id: 1, title: 'Leaf Disease Detection', description: 'Detect crop diseases instantly using AI.', button: 'View Details', detailedDescription: 'AI-powered leaf disease detection system.', features: ['Instant identification', '50+ diseases', 'Treatment tips'], image: '/ldd.jpg' },
    { id: 2, title: 'Weather Prediction', description: 'Get real-time weather forecasts.', button: 'View Details', detailedDescription: 'Advanced weather forecasting system.', features: ['7-day forecast', 'Rainfall alerts', 'Temperature tracking'], image: '/weather.jpg' },
    { id: 3, title: 'Mauli Chatbot', description: 'Your AI assistant for 24/7 support.', button: 'View Details', detailedDescription: 'Personal farming assistant available 24/7.', features: ['24/7 assistance', 'Multi-language', 'Expert answers'], image: '/mauli (2).jpg' },
    { id: 4, title: 'Shivar Advisory', description: 'Personalized farming guidance.', button: 'View Details', detailedDescription: 'Customized agricultural advice.', features: ['Location advice', 'Soil tips', 'Crop recommendations'], image: '/shivar.jpg' }
  ];

  return (
    <section className={`features-page ${isVisible ? 'visible' : ''}`}>
      <nav className="features-navbar">
        <div className="features-navbar-container">
          <span className="features-logo-text">Vawar</span>
          <button className="features-nav-close" onClick={onClose}>✕</button>
        </div>
      </nav>

      <div className="features-hero">
        <h1 className="features-title">Explore Vawar Features</h1>
        <p className="features-subtitle">Discover smart tools for farmers.</p>
      </div>

      <section className="features-cards-section">
        <div className="features-cards-container">
          {expandedCardId && <div className="features-overlay active" onClick={handleBack}></div>}
          <div className={`features-grid ${cardsVisible ? 'visible' : ''} ${expandedCardId ? 'expanded-mode' : ''}`}>
            {features.map((feature, index) => {
              const isExpanded = expandedCardId === feature.id;
              return (
                <div key={feature.id} className={`features-card card-${index + 1} ${isExpanded ? 'expanded' : ''}`}>
                  <button className="features-card-back" onClick={handleBack}>Close ✕</button>
                  <div className="features-card-icon">
                    <img src={feature.image} alt={feature.title} className="features-card-image" />
                  </div>
                  <h3 className="features-card-title">{feature.title}</h3>
                  <p className="features-card-description">{feature.description}</p>
                  {isExpanded && (
                    <div className="features-card-expanded-content">
                      <p className="features-card-detailed">{feature.detailedDescription}</p>
                      <ul className="features-card-features-list">
                        {feature.features.map((f, i) => <li key={i}>✓ {f}</li>)}
                      </ul>
                    </div>
                  )}
                  <button className={`features-card-button ${isExpanded ? 'hidden' : ''}`} onClick={(e) => { e.stopPropagation(); handleCardClick(feature.id); }}>{feature.button} →</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;
