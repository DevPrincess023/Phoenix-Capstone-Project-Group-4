import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo" id="navbar-logo">
          <img
            src="/assets/logo.svg"
            alt="Planet logo"
            className="navbar-logo-icon"
          />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
