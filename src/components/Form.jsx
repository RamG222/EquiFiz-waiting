function FormCard() {
  return (
    <div className="form-card">
      <label>Email address *</label>
      <input type="email" placeholder="you@example.com" />

      <label>Phone (optional)</label>
      <input type="text" placeholder="+91 98765 43210" />

      <div className="checkbox">
        <input type="checkbox" />
        <span>
          I accept the <a href="#">Privacy Policy</a> and Terms of Service *
        </span>
      </div>

      <button className="cta-btn">
        Join the waitlist <span>→</span>
      </button>

      <p className="form-note">
        No spam, ever. Get notified when we launch with exclusive early access.
      </p>
    </div>
  );
}

export default FormCard;
