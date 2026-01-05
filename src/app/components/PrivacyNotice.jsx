// src/components/PrivacyNotice.jsx
import "./PrivacyNotice.css";

export default function PrivacyNotice() {
  return (
    <section className="privacy-section">
      <div className="privacy-card">
        <h3 className="privacy-title">Privacy & Data Protection</h3>

        <p className="privacy-text">
          By joining our waitlist, you consent to receive product updates and
          marketing communications. We respect your privacy and follow GDPR
          guidelines. You can opt out anytime by clicking unsubscribe in our
          emails or contacting support. Your data helps us improve Equifiz and
          notify you about relevant features.
        </p>

        <div className="privacy-links">
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
          <a href="">Data Deletion Request</a>
        </div>
      </div>
    </section>
  );
}
