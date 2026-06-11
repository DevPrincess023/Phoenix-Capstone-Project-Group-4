import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-container">
        <a href="#hero-section" className="navbar-logo" id="navbar-logo">
          <img
            src="/assets/logo.svg"
            alt="Planet logo"
            className="navbar-logo-icon"
          />
        </a>

        {/* Mobile menu toggle */}
        <button 
          className={`navbar-toggle ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation links */}
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#hero-section" className="navbar-link" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li className="navbar-item">
            <a href="#video-section" className="navbar-link" onClick={() => setIsOpen(false)}>Video</a>
          </li>
          <li className="navbar-item">
            <a href="#data-section" className="navbar-link" onClick={() => setIsOpen(false)}>Planets</a>
          </li>
          <li className="navbar-item">
            <a href="#table-section" className="navbar-link" onClick={() => setIsOpen(false)}>Planetary Facts</a>
          </li>
          <li className="navbar-item">
            <a href="#planetaryForm" className="navbar-link navbar-btn" onClick={() => setIsOpen(false)}>Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
