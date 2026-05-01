import React from 'react';
import './Hero.css';

const Hero = ({ onExploreFeatures, onWatchDemo }) => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-main">Vawar</span>
          </h1>
          <p className="hero-subtitle">AI-Powered Smart Farming Assistant</p>
          <p className="hero-description">
            Transform your agricultural practice with cutting-edge AI technology. 
            Get real-time disease detection, weather predictions, and expert advice 
            all in one powerful platform.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={onWatchDemo}>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
              </svg>
              Watch Demo
            </button>
            <button className="btn-secondary" onClick={onExploreFeatures}>
              Explore Features
              <svg className="btn-arrow" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <img src="/db.jpg" alt="VAWAR App" className="hero-image" />
          <div className="floating-element elem-1">
            <div className="float-card">
              <span className="float-icon">🌡️</span>
              <span className="float-text">28°C</span>
            </div>
          </div>
          <div className="floating-element elem-2">
            <div className="float-card">
              <span className="float-icon">💧</span>
              <span className="float-text">65%</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;

