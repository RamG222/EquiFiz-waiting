import "./WhyChoose.css";

const CARDS = [
  {
    title: "Institutional-grade features at ₹299",
    subtitle: "Professional-level analysis tools at retail prices",
    icon: "🏅",
    hoverTitle: "Pricing Breakdown",
    hoverItems: [
      { label: "Others", value: "₹2K–25K / year", type: "bad" },
      { label: "Equifiz", value: "₹1,188 / year", type: "good" },
      { label: "Up to 95% savings", value: "", type: "highlight" },
    ],
  },
  {
    title: "Every ratio explained in plain English",
    subtitle: "No jargon. Clear explanations for every metric",
    icon: "❓",
    hoverTitle: "Example: P/E Ratio",
    hoverItems: [
      { label: "Other Platforms", value: "Complex jargon", type: "bad" },
      {
        label: "Equifiz Explains",
        value: "Is this stock expensive?",
        type: "good",
      },
    ],
  },
  {
    title: "Your data, your control",
    subtitle: "Transparent. No hidden costs. Privacy first",
    icon: "🔒",
    hoverTitle: "Your Privacy",
    hoverItems: [
      {
        label: "Data Ownership",
        value: "Your data belongs to you",
        type: "good",
      },
      {
        label: "Transparent Pricing",
        value: "₹299/month. No surprises",
        type: "info",
      },
    ],
  },
  {
    title: "Proven analysis framework",
    subtitle: "Methods used by successful portfolio managers",
    icon: "📈",
    hoverTitle: "Back-Tested Strategies",
    hoverItems: [
      { label: "DCF Analysis", value: "Warren Buffett’s method", type: "info" },
      { label: "Portfolio Theory", value: "Modern optimization", type: "good" },
    ],
  },
  {
    title: "Bank-grade security",
    subtitle: "Enterprise-level encryption & protection",
    icon: "🛡️",
    hoverTitle: "Enterprise Security",
    hoverItems: [
      { label: "256-bit Encryption", value: "Same as banks", type: "info" },
      { label: "SOC 2 Compliant", value: "Audited controls", type: "good" },
    ],
  },
];

export default function WhyChoose() {
  return (
    <section className="why">
      <h2>Why Smart Investors Choose Equifiz</h2>
      <p className="why-sub">
        Professional-grade analysis tools designed for retail investors who
        demand institutional quality
      </p>

      <div className="why-grid">
        {CARDS.map((c, i) => (
          <div className="why-card" key={i}>
            {/* FRONT */}
            <div className="card-front">
              <div className="icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.subtitle}</p>
            </div>

            {/* HOVER */}
            <div className="card-hover">
              <h4>{c.hoverTitle}</h4>

              {c.hoverItems.map((item, idx) => (
                <div key={idx} className={`hover-item ${item.type}`}>
                  <strong>{item.label}</strong>
                  {item.value && <span>{item.value}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
