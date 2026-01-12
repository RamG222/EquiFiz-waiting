// src/components/ComingSoon.jsx
import "./ComingSoon.css";

export default function ComingSoon() {
  return (
    <section className="coming-soon">
      <h2 className="coming-title">What&apos;s Coming Soon</h2>
      <p className="coming-subtitle">
        A glimpse into the future of investment analysis
      </p>

      <div className="cards-grid">
        {/* Card 1 */}
        <div className="feature-card">
          <div className="card-top">
            <div className="icon-box">🔗</div>
            <span className="quarter-badge">Q1 2026</span>
          </div>

          <h3>Option Chain</h3>
          <p>Complete bond analysis with yield curves and credit ratings</p>

          <div className="progress-row">
            <span>Development</span>
            <span>65%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "65%" }}></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="feature-card">
          <div className="card-top">
            <div className="icon-box">🔔</div>
            <span className="quarter-badge">Q1 2026</span>
          </div>

          <h3>Algos</h3>
          <p>AI-powered notifications for market opportunities and risks</p>

          <div className="progress-row">
            <span>Development</span>
            <span>40%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "40%" }}></div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="feature-card">
          <div className="card-top">
            <div className="icon-box">🌍</div>
            <span className="quarter-badge">Q1 2026</span>
          </div>

          <h3>Portfolio Allocation Tool</h3>
          <p>International markets, ADRs, and cross-currency analysis</p>

          <div className="progress-row">
            <span>Development</span>
            <span>15%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "15%" }}></div>
          </div>
        </div>
      </div>

      <div className="stay-tuned">
        <span className="green-dot"></span>
        Stay tuned for these exciting updates
      </div>
    </section>
  );
}
