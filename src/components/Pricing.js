import React, { useEffect, useState } from 'react';
import './Pricing.css';

const Pricing = ({ onClose }) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    
    // Scene progression
    const sceneTimers = [
      setTimeout(() => setCurrentScene(1), 3000),   // Scene 1 -> 2
      setTimeout(() => setCurrentScene(2), 6000),   // Scene 2 -> 3
      setTimeout(() => setCurrentScene(3), 9000),   // Scene 3 -> 4
      setTimeout(() => setShowFinal(true), 12000),  // Final celebration
    ];

    return () => sceneTimers.forEach(clearTimeout);
  }, []);

  const scenes = [
    {
      id: 0,
      emoji: '👨‍🌾',
      title: 'Farmer Working Hard',
      description: 'A farmer works tirelessly in the field, nurturing crops with hope and dedication.',
      bgGradient: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 50%, #CDDC39 100%)'
    },
    {
      id: 1,
      emoji: '🔍',
      title: 'Seeking Better Outcomes',
      description: 'Searching for better yields, better prices, and a better future for the family.',
      bgGradient: 'linear-gradient(135deg, #FF9800 0%, #FFC107 50%, #FFEB3B 100%)'
    },
    {
      id: 2,
      emoji: '💔',
      title: 'Financial Struggles',
      description: 'Despite hard work, unpredictable weather and market prices bring hardship.',
      bgGradient: 'linear-gradient(135deg, #607D8B 0%, #9E9E9E 50%, #BDBDBD 100%)'
    },
    {
      id: 3,
      emoji: '🎉',
      title: 'A New Beginning',
      description: 'Vawar brings hope with free AI-powered tools to help farmers thrive!',
      bgGradient: 'linear-gradient(135deg, #E91E63 0%, #9C27B0 50%, #673AB7 100%)'
    }
  ];

  return (
    <div className={`pricing-page ${isVisible ? 'visible' : ''}`}>
      {/* Background decorations */}
      <div className="pricing-decorations">
        <span className="decor-grain decor-grain-1">🌾</span>
        <span className="decor-grain decor-grain-2">🌾</span>
        <span className="decor-grain decor-grain-3">🌱</span>
        <span className="decor-grain decor-grain-4">🌿</span>
        <span className="decor-grain decor-grain-5">🚜</span>
        <span className="decor-grain decor-grain-6">🧑‍🌾</span>
        <span className="decor-grain decor-grain-7">🌻</span>
        <span className="decor-grain decor-grain-8">🌽</span>
      </div>

      {/* Navigation */}
      <nav className="pricing-navbar">
        <div className="pricing-navbar-container">
<button className="pricing-nav-back" onClick={onClose}>
            ←
          </button>
        </div>
      </nav>

      {/* Story Scenes */}
      <div className="pricing-scenes-container">
        {!showFinal && scenes.map((scene, index) => (
          <div 
            key={scene.id}
            className={`pricing-scene scene-${index} ${currentScene === index ? 'active' : ''} ${currentScene > index ? 'completed' : ''}`}
          >
            <div className="scene-background" style={{ background: scene.bgGradient }}></div>
            <div className="scene-content">
              <div className="scene-emoji-container">
                <span className="scene-emoji">{scene.emoji}</span>
                <div className="emoji-glow"></div>
              </div>
              <h2 className="scene-title">{scene.title}</h2>
              <p className="scene-description">{scene.description}</p>
              <div className="scene-progress">
                {[0, 1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className={`progress-dot ${i <= currentScene ? 'filled' : ''}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Final Celebration - Free for Farmers */}
        {showFinal && (
          <div className="pricing-final-celebration">
            <div className="celebration-container">
              {/* Sparkle effects */}
              <div className="celebration-sparkles">
                {[...Array(30)].map((_, i) => (
                  <div 
                    key={i} 
                    className="sparkle-celebration"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${1 + Math.random() * 2}s`
                    }}
                  >
                    {['✨', '⭐', '🌟', '💫', '🎊', '🎉'][i % 6]}
                  </div>
                ))}
              </div>

              {/* Floating elements */}
              <div className="celebration-floats">
                <span className="float-emoji" style={{left: '10%', animationDelay: '0s'}}>🌾</span>
                <span className="float-emoji" style={{left: '25%', animationDelay: '0.5s'}}>🚜</span>
                <span className="float-emoji" style={{left: '40%', animationDelay: '1s'}}>🌻</span>
                <span className="float-emoji" style={{left: '55%', animationDelay: '1.5s'}}>🌽</span>
                <span className="float-emoji" style={{left: '70%', animationDelay: '2s'}}>🍎</span>
                <span className="float-emoji" style={{left: '85%', animationDelay: '2.5s'}}>🧑‍🌾</span>
                <span className="float-emoji" style={{left: '15%', animationDelay: '3s'}}>🌱</span>
                <span className="float-emoji" style={{left: '75%', animationDelay: '3.5s'}}>🌿</span>
              </div>

              {/* Main content */}
              <div className="celebration-content">
                <div className="celebration-icon">
                  <span className="celebration-main-emoji">🎊</span>
                </div>
                <h1 className="celebration-title">
                  <span className="title-line-1">🎉 CELEBRATION! 🎉</span>
                </h1>
                <div className="celebration-message">
                  <div className="message-box">
                    <span className="message-emoji">🆓</span>
                    <h2 className="message-text">FREE</h2>
                    <p className="message-subtext">FOR</p>
                    <h3 className="message-highlight">FARMERS</h3>
                    <span className="message-emoji">🚜</span>
                  </div>
                </div>
                <div className="celebration-details">
                  <p>🌾 AI-Powered Disease Detection</p>
                  <p>🌤️ Smart Weather Forecasting</p>
                  <p>💬 24/7 Mauli Chatbot Support</p>
                  <p>📊 Personalized Farm Advisory</p>
                </div>
                <div className="celebration-cta">
                  <button className="cta-button">
                    Get Started Now! 🚀
                  </button>
                </div>
              </div>

              {/* Fireworks */}
              <div className="fireworks">
                <div className="firework" style={{left: '20%', top: '30%'}}></div>
                <div className="firework" style={{left: '70%', top: '20%'}}></div>
                <div className="firework" style={{left: '50%', top: '10%'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pricing;

