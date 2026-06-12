import React from 'react';
import './Hero.css';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Explore Our Solar System Through Data
        </h1>
        <p className="hero-description">
          Understand the planets not just by name, but by measurable
          facts. From size and mass to gravity and density, this page
          breaks down the solar system in a clear, data-driven way.
        </p>
        <div className="hero-actions">
          <button 
            onClick={() => scrollToSection('planets')}
            className="btn btn-primary"
          >
            Explore the Data
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn btn-outline"
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="planet-glow"></div>
        <div className="planet-circle"></div>
      </div>
    </section>
  );
}
