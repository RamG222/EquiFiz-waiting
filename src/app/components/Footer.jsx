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

        {/* Contact */}
        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul className="contact">
            <a href="mailto:contact@equifiz.com" target="_blank">
              <li>✉️ contact@equifiz.com</li>
            </a>
            <li>
              📍 Mumbai
              <br />
              Maharashtra 400001, India
            </li>
          </ul>

          <h4 className="follow-title">Follow Us</h4>
          <div className="socials">
            <a
              href="https://www.linkedin.com/company/equifiz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
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
