import React, { useState, useEffect } from 'react';
import './DemoModal.css';

const DemoModal = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const demoVideos = [
    {
      id: 1,
      title: 'Login Demo',
      description: 'Experience the seamless authentication process with our secure login system. Access your personalized farming dashboard instantly.',
      video: '/login_demo.mp4',
      icon: '🔐'
    },
    {
      id: 2,
      title: 'Dashboard Demo',
      description: 'Explore our intuitive dashboard that provides real-time insights into your farm, weather conditions, and crop health at a glance.',
      video: '/dashboard_demo.mp4',
      icon: '📊'
    },
    {
      id: 3,
      title: 'Leaf Disease Detection Demo',
      description: 'Discover how our AI-powered system instantly identifies over 50+ crop diseases and provides treatment recommendations.',
      video: '/ldd_demo.mp4',
      icon: '🌿'
    },
    {
      id: 4,
      title: 'Weather Demo',
      description: 'Get accurate 7-day weather forecasts with rainfall alerts, temperature tracking, and climate recommendations for your crops.',
      video: '/weather_demo.mp4',
      icon: '🌤️'
    },
    {
      id: 5,
      title: 'ShivAR Demo',
      description: 'Experience augmented reality features that help visualize crop health and provide interactive farming guidance.',
      video: '/shivar_demo.mp4',
      icon: '📱'
    },
    {
      id: 6,
      title: 'Mauli Demo',
      description: 'Meet your personal AI farming assistant available 24/7 to answer questions and provide expert agricultural advice.',
      video: '/mauli_demo.mp4',
      icon: '🤖'
    }
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handlePlayVideo = (videoId) => {
    setActiveVideo(videoId);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`demo-modal ${isVisible ? 'visible' : ''}`} onClick={handleOverlayClick}>
      <div className="demo-modal-container">
        <div className="demo-modal-header">
          <h1 className="demo-modal-title">Watch Our Demos</h1>
          <p className="demo-modal-subtitle">Explore the powerful features of Vawar</p>
          <button className="demo-modal-close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="demo-cards-wrapper">
          {demoVideos.map((demo, index) => (
            <div 
              key={demo.id} 
              className={`demo-card ${activeVideo === demo.id ? 'playing' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="demo-card-header">
                <span className="demo-card-icon">{demo.icon}</span>
                <h3 className="demo-card-title">{demo.title}</h3>
              </div>
              
              <div className="demo-card-video-container">
                {activeVideo === demo.id ? (
                  <div className="demo-video-player">
                    <video 
                      src={demo.video} 
                      controls 
                      autoPlay 
                      className="demo-video"
                    >
                      Your browser does not support the video tag.
                    </video>
                    <button className="demo-video-close" onClick={handleCloseVideo}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div className="demo-video-placeholder">
                    <div className="demo-video-preview-bg"></div>
                    <div className="demo-play-button" onClick={() => handlePlayVideo(demo.id)}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <span className="demo-tap-text">Tap to play</span>
                  </div>
                )}
              </div>

              <p className="demo-card-description">{demo.description}</p>

              {activeVideo !== demo.id && (
                <button 
                  className="demo-card-play-btn" 
                  onClick={() => handlePlayVideo(demo.id)}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Play Demo
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoModal;

