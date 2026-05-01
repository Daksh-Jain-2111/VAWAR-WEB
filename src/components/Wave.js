import React from 'react';
import './Wave.css';

const Wave = () => {
  return (
    <div className="wave-container">
      <svg 
        className="wave" 
        viewBox="0 0 1440 120" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill="#f5f7f6" 
          fillOpacity="1" 
          d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,64C672,53,768,75,864,96C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        ></path>
      </svg>
    </div>
  );
};

export default Wave;

