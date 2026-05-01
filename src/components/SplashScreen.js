import React, { useState, useEffect } from 'react';
import './SplashScreen.css';
import vawarImage from '../vawar.jpg';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`splash-screen ${isFading ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <div className="splash-logo">
          <img 
            src={vawarImage} 
            alt="Vawar Logo" 
            className="splash-image" 
          />
        </div>
        <h1 className="splash-title">Vawar</h1>
        <p className="splash-fullform">Versatile AI for Weather Agriculture and Resources</p>
        <p className="splash-subtitle">AI-Powered Smart Farming Assistant</p>
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;

