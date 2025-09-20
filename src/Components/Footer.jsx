import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaApple, 
  FaGooglePlay 
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & description */}
        <div className="footer-logo">
          <h2>
            <Link to="/"><span>TransliFy</span> AI</Link>
          </h2>
          <p>Breaking language barriers with AI.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Services</Link>
          <Link to="/">Contact</Link>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaEnvelope className="contact-icon" /> Email: support@translify.ai</p>
          <p><FaPhone className="contact-icon" /> Phone: +1 (800) 555-0199</p>
          <p><FaMapMarkerAlt className="contact-icon" /> Address: San Francisco, CA, USA</p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>

          {/* Download Section */}
          <div className="download-app">
            <h3>Download Our App</h3>
            <div className="app-buttons">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="app-btn apple">
                <FaApple /> App Store
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="app-btn playstore">
                <FaGooglePlay /> Google Play
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="footer-bottom">
        <p>© {currentYear} TransliFy AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
