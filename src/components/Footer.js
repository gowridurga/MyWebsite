import './Footer.css'

const Footer = () => (
  <footer>
    <nav>
      <a href="#home" className="footer-link">
        Home
      </a>
      <a href="#about" className="footer-link">
        About
      </a>
      <a href="#services" className="footer-link">
        Services
      </a>
      <a href="#contact" className="footer-link">
        Contact
      </a>
    </nav>
    <div className="social-icons">
      <a href="https://facebook.com">Facebook</a>
      <a href="https://twitter.com">Twitter</a>
      <a href="https://instagram.com">Instagram</a>
    </div>
  </footer>
)

export default Footer
