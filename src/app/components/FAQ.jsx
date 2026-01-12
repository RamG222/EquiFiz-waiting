// src/components/FAQ.jsx
"use client";
import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    q: "When will I get access to Equifiz?",
    a: "We're rolling out access in phases starting Q1 2026. Waitlist members get priority access, and referring friends moves you up in the queue. Early supporters will be notified first.",
  },
  {
    q: "How does the referral program work?",
    a: "Share your unique referral code with friends. For every person who joins using your code, you earn points toward rewards and move up in our access queue. Rewards include early access, credits, and premium features.",
  },
  {
    q: "How do you protect my personal data?",
    a: "We follow strict data protection standards including encryption, secure storage, and GDPR compliance. We never sell your data to third parties. You can request data deletion or export at any time by contacting support.",
  },
  {
    q: "Will Equifiz be free to use?",
    a: "Equifiz offers a generous free tier with essential features. Premium plans start at ₹299/month and include advanced analytics, real-time alerts, and priority support. Waitlist members get 3 months free on any premium plan.",
  },
  {
    q: "What's your anti-fraud policy?",
    a: "We actively monitor for fake referrals, duplicate accounts, and other fraudulent activities. Accounts found violating our terms will lose referral rewards and may be suspended. We use email verification and other measures to ensure fair play.",
  },
  {
    q: "How can I contact you?",
    a: "Reach out to us at contact@equifiz.com or through our chat widget (available to waitlist members). We typically respond within 24 hours. For urgent issues, priority support is available for premium users.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-subtitle">Got questions? We've got answers.</p>

      <div className="faq-box">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{item.q}</span>

              {/* REAL ARROW */}
              <svg
                className={`faq-arrow ${openIndex === index ? "open" : ""}`}
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 9l6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {openIndex === index && <div className="faq-answer">{item.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
