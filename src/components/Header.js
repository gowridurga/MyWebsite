import './Header.css'

const Header = () => (
  <header>
    <h1>My Website</h1>
    <nav>
      <a href="#home" className="nav-link">
        Home
      </a>
      <a href="#about" className="nav-link">
        About
      </a>
      <a href="#services" className="nav-link">
        Services
      </a>
      <a href="#contact" className="nav-link">
        Contact
      </a>
    </nav>
  </header>
)

export default Header
