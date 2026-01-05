// src/components/WaitlistBadge.jsx
import "./WaitlistBadge.css";

export default function WaitlistBadge() {
  return (
    <div className="waitlist-badge-wrapper">
      <div className="waitlist-badge">
        <span className="status-dot"></span>
        <span className="badge-text">
          Join <strong>3017+</strong> investors already on the waitlist
        </span>
      </div>
    </div>
  );
}
