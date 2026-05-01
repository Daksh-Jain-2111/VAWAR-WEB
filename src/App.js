import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Wave from './components/Wave';
import Challenges from './components/Challenges';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Contact from './components/Contact';
import Services from './components/Services';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import AboutVawar from './components/AboutVawar';
import Sparkles from './components/Sparkles';
import DemoModal from './components/DemoModal';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleExploreFeatures = () => {
    setShowFeatures(true);
  };

  const handleCloseFeatures = () => {
    setShowFeatures(false);
  };

  const handleShowPricing = () => {
    setShowPricing(true);
  };

  const handleClosePricing = () => {
    setShowPricing(false);
  };

  const handleShowTeam = () => {
    setShowTeam(true);
  };

  const handleCloseTeam = () => {
    setShowTeam(false);
  };

  const handleShowContact = () => {
    setShowContact(true);
  };

  const handleCloseContact = () => {
    setShowContact(false);
  };

  const handleShowServices = () => {
    setShowServices(true);
  };

  const handleCloseServices = () => {
    setShowServices(false);
  };

  const handleShowPrivacy = () => {
    setShowPrivacy(true);
  };

  const handleClosePrivacy = () => {
    setShowPrivacy(false);
  };

  const handleShowTerms = () => {
    setShowTerms(true);
  };

const handleCloseTerms = () => {
    setShowTerms(false);
  };

  const handleShowAbout = () => {
    setShowAbout(true);
  };

  const handleCloseAbout = () => {
    setShowAbout(false);
  };

  const handleWatchDemo = () => {
    setShowDemo(true);
  };

  const handleCloseDemo = () => {
    setShowDemo(false);
  };

  return (
    <div className="App">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {!showSplash && <Sparkles />}
      
      <div className={`main-content ${showSplash ? 'hidden' : ''}`}>
        {showDemo && (
          <DemoModal onClose={handleCloseDemo} />
        )}
        
        {showFeatures && (
          <Features onClose={handleCloseFeatures} />
        )}
        
        {showPricing && (
          <Pricing onClose={handleClosePricing} />
        )}
        
        {showTeam && (
          <Team onClose={handleCloseTeam} />
        )}
        
        {showContact && (
          <Contact onClose={handleCloseContact} />
        )}
        
        {showServices && (
          <Services onClose={handleCloseServices} />
        )}
        
        {showPrivacy && (
          <Privacy onClose={handleClosePrivacy} />
        )}
        
{showTerms && (
          <Terms onClose={handleCloseTerms} />
        )}
        
        {showAbout && (
          <AboutVawar onClose={handleCloseAbout} />
        )}
        
        {!showFeatures && !showPricing && !showTeam && !showContact && !showServices && !showPrivacy && !showTerms && !showAbout && (
          <>
            <Navbar 
              onExploreFeatures={handleExploreFeatures} 
              onShowPricing={handleShowPricing} 
              onShowTeam={handleShowTeam}
              onShowServices={handleShowServices}
              onShowAbout={handleShowAbout}
            />
<Hero onExploreFeatures={handleExploreFeatures} onWatchDemo={handleWatchDemo} />
          <Challenges onExploreFeatures={handleExploreFeatures} />
          <Wave />
            
            <footer className="footer">
              <div className="footer-container">
                <div className="footer-brand">
                  <div className="footer-logo">
                    <svg className="logo-icon" viewBox="0 0 24 24" fill="none">
                      <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" fill="#66bb6a"/>
                      <path d="M12 13C12 13 6 16 6 20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20C18 16 12 13 12 13Z" fill="#66bb6a"/>
                    </svg>
                    <span>Vawar</span>
                  </div>
                  <p className="footer-tagline">AI-Powered Smart Farming Assistant</p>
                </div>
                <div className="footer-links">
                  <div className="footer-column">
                    <h4>Product</h4>
                    <a href="#features" onClick={(e) => { e.preventDefault(); handleExploreFeatures(); }}>Features</a>
                    <a href="#pricing" onClick={(e) => { e.preventDefault(); handleShowPricing(); }}>Pricing</a>
                    <a href="#service" onClick={(e) => { e.preventDefault(); handleShowServices(); }}>Service</a>
                  </div>
<div className="footer-column">
                    <h4>Company</h4>
                    <a href="#about" onClick={(e) => { e.preventDefault(); handleShowAbout(); }}>About</a>
                    <a href="#team" onClick={(e) => { e.preventDefault(); handleShowTeam(); }}>Team</a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); handleShowContact(); }}>Contact</a>
                  </div>
                  <div className="footer-column">
                    <h4>Legal</h4>
                    <a href="#privacy" onClick={(e) => { e.preventDefault(); handleShowPrivacy(); }}>Privacy</a>
                    <a href="#terms" onClick={(e) => { e.preventDefault(); handleShowTerms(); }}>Terms</a>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <p>&copy; 2026 Vawar. All rights reserved.</p>
              </div>
            </footer>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

