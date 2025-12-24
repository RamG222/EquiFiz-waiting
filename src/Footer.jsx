// src/components/Footer.jsx
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-col brand">
          <h3 className="logo">Equifiz</h3>
          <p className="brand-text">
            Simplifying investing in India's markets with data-driven insights
            and powerful tools for smarter financial decisions.
          </p>

          <div className="badges">
            <span className="badge">🇮🇳 Made in India</span>
            <span className="badge">SEBI Compliant</span>
          </div>
        </div>

        {/* Product */}
        <div className="footer-col">
          <h4>Product</h4>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>API Documentation</li>
            <li>Mobile App</li>
            <li>Chrome Extension</li>
            <li>Desktop App</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Kit</li>
            <li>Blog</li>
            <li>Investors</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul className="contact">
            <li>✉️ Contact@equifiz.com</li>
            <li>
              📍 Mumbai
              <br />
              Maharashtra 400001, India
            </li>
          </ul>

          <h4 className="follow-title">Follow Us</h4>
          <div className="socials">
            <span>🐦</span>
            <span>💼</span>
            <span>📸</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>© 2025 Equifiz Technologies Pvt. Ltd. All rights reserved.</span>

        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Risk Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
