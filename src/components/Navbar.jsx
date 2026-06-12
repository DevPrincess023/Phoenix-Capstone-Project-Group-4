import React from 'react';
import './Navbar.css';

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button 
          onClick={() => scrollToSection('hero')}
          className="navbar-logo"
        >
          🪐 Planet
        </button>
        <div className="nav-links">
          <button 
            onClick={() => scrollToSection('planets')}
            className="nav-link"
          >
            Planets
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="nav-link"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
