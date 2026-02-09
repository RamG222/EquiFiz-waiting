"use client";
import { useState } from "react";
import Popup from "./Popup";

function FormCard() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !accepted) {
      setMessage("Email and policy acceptance are required.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phone,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage("✅ You’re on the waitlist!");
      setShowPopup(true);
      setEmail("");
      setPhone("");
      setAccepted(false);
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <label>Email address *</label>
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Phone (optional)</label>
      <input
        type="text"
        placeholder="Ex- 1234567890"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <div className="checkbox">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        <span>
          I accept the <a href="#">Privacy Policy</a> and Terms of Service *
        </span>
      </div>

      <button className="cta-btn" disabled={loading}>
        {loading ? "Joining..." : "Join the waitlist"} <span>→</span>
      </button>

      {message && <p className="form-note">{message}</p>}

      <Popup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        title="Success!"
        message="You have successfully joined the waitlist. We will notify you soon!"
      />
    </form>
  );
}

export default FormCard;
