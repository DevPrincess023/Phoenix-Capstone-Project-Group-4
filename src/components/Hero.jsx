import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title" id="hero-title">
            Explore Our Solar System Through Data
          </h1>
          <p className="hero-description" id="hero-description">
            Understand the planets not just by name, but by measurable
            facts. From size and mass to gravity and density, this page
            breaks down the solar system in a clear, data-driven way.
          </p>
          <div className="hero-actions">
            <a href="#explore" className="btn btn-primary" id="btn-explore">
              Explore the Data
            </a>
            <a href="#contact" className="btn btn-outline" id="btn-contact">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-planet-wrapper">
            <div className="hero-planet-glow"></div>
            <img
              src="/assets/earth.svg"
              alt="A glowing 3D planet Earth floating in space"
              className="hero-planet-img"
              id="hero-planet-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
