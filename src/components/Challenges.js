import React from 'react';
import './Challenges.css';

const Challenges = () => {
  const challenges = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#ffebee"/>
          <path d="M32 16C32 16 20 24 20 36C20 42.627 25.373 48 32 48C38.627 48 44 42.627 44 36C44 24 32 16 32 16Z" fill="#ef5350"/>
          <path d="M32 20V40M28 32H36" stroke="#c62828" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="32" cy="36" r="3" fill="#c62828"/>
        </svg>
      ),
      title: 'Crop Diseases',
      description: 'Identify and treat plant diseases early with AI-powered detection'
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#e3f2fd"/>
          <path d="M32 12L36 24H48L38 32L42 44L32 36L22 44L26 32L16 24H28L32 12Z" fill="#42a5f5"/>
          <circle cx="32" cy="32" r="4" fill="#1976d2"/>
        </svg>
      ),
      title: 'Unpredictable Weather',
      description: 'Get accurate weather forecasts and climate predictions'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="#fff3e0"/>
          <circle cx="32" cy="28" r="12" fill="#ffa726"/>
          <path d="M32 40V52M26 46H38" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
          <path d="M20 52H44" stroke="#ffa726" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Lack of Expert Advice',
      description: 'Connect with agricultural experts and get personalized guidance'
    }
  ];

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/app-release.apk';
    link.download = 'vawar-app-release.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="challenges" id="about">
      <div className="challenges-container">
        <h2 className="challenges-title">The Challenges Farmers Face</h2>
        <p className="challenges-subtitle">
          We understand the difficulties in modern agriculture. Here's how Vawar helps solve them.
        </p>
        
        <div className="challenges-grid">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="challenge-card">
              <div className="challenge-icon">
                {challenge.icon}
              </div>
              <h3 className="challenge-title">{challenge.title}</h3>
              <p className="challenge-description">{challenge.description}</p>
            </div>
          ))}
        </div>
        
        <div className="challenges-cta">
          <button className="challenges-cta-button" onClick={handleDownload}>
            Download APK
            <svg className="cta-arrow" viewBox="0 0 24 24" fill="none">
              <path d="M12 5L19 12M19 12L12 19M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Challenges;

