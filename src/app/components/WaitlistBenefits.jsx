import "./WaitlistBenefits.css";

export default function WaitlistBenefits() {
  return (
    <section className="waitlist-section">
      <h2 className="waitlist-title">Why Join the Waitlist Now?</h2>
      <p className="waitlist-subtitle">
        Early adopters get the best experience, exclusive benefits, and a voice
        in shaping the future
      </p>

      <div className="waitlist-cards">
        {/* CARD 1 */}
        <div className="waitlist-card">
          <div className="icon blue">⏳</div>
          <span className="tag green">Early Access</span>
          <h3>Early Birds discount</h3>
          <p>First 1000 users get lifetime benefits and priority support</p>
        </div>

        {/* CARD 2 */}
        <div className="waitlist-card">
          <div className="icon blue">🔓</div>
          <span className="tag blue">Beta Access</span>
          <h3>Exclusive Features Unlocked First</h3>
          <p>Beta access to new tools before they go public</p>
        </div>

        {/* CARD 3 */}
        <div className="waitlist-card">
          <div className="icon blue">✋</div>
          <span className="tag green">Your Input</span>
          <h3>Shape the Platform</h3>
          <p>Your feedback directly influences our roadmap</p>
        </div>
      </div>
    </section>
  );
}
