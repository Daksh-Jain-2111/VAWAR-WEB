import React, { useEffect, useState } from 'react';
import './Contact.css';

const Contact = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section className={`contact-page ${isVisible ? 'visible' : ''}`}>
      <div className="contact-decorations">
        <span className="contact-decor contact-decor-1">🌾</span>
        <span className="contact-decor contact-decor-2">🌿</span>
        <span className="contact-decor contact-decor-3">🌱</span>
      </div>

      <nav className="contact-navbar">
        <div className="contact-navbar-container">
          <div className="contact-logo">
            <svg className="contact-logo-icon" viewBox="0 0 24 24" fill="none">
              <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" fill="#66bb6a"/>
              <path d="M12 13C12 13 6 16 6 20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20C18 16 12 13 12 13Z" fill="#66bb6a"/>
            </svg>
            <span className="contact-logo-text">Vawar</span>
          </div>
          <button className="contact-nav-close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>

      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">We'd love to hear from you</p>
          <div className="contact-title-underline"></div>
        </div>
      </div>

      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success-message">
                <svg className="success-icon" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#4caf50" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="contact-submit-btn">
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>

          <div className="contact-info-cards">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p>team.vawae@gmail.com</p>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22 20.4703 21.7893 20.9982 21.4142 21.3891C21.0391 21.7801 20.5304 22.0001 20 22.0001C16.0792 22.0001 12.3594 20.4801 9.57071 17.6701C6.78202 14.8601 5.26667 11.1401 5.26667 7.21996C5.26667 6.68996 5.48667 6.18125 5.87764 5.80616C6.2686 5.43107 6.79652 5.22046 7.34667 5.21996H10.3467C11.1644 5.21713 11.8564 5.76496 12.04 6.56996C12.1667 7.16596 12.3267 7.74996 12.5333 8.31496C12.6933 8.77496 12.4333 9.27396 12.02 9.47396L10.6067 10.093C11.9556 12.8016 14.1984 15.0444 16.9067 16.393L17.5267 15.0066C17.7267 14.5933 18.2257 14.3333 18.6857 14.4933C19.2507 14.6999 19.8347 14.8599 20.4307 14.9866C21.2623 15.1759 21.8156 15.8999 21.7933 16.7466L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Phone</h3>
              <p>+91 94217 57907</p>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Location</h3>
              <p>Dhule, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;

