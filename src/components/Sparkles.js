import React, { useEffect, useState } from 'react';
import './Sparkles.css';

const Sparkles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random sparkle particles
    const generateParticles = () => {
      const newParticles = [];
      const count = 50; // Number of sparkles

      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${2 + Math.random() * 3}s`,
          animationDelay: `${Math.random() * 5}s`,
          size: `${2 + Math.random() * 4}px`,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="sparkles-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="sparkle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDuration: particle.animationDuration,
            animationDelay: particle.animationDelay,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;

