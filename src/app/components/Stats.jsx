import "./Stats.css";

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat">
          <h2 className="blue">₹299</h2>
          <p>Per Month</p>
        </div>

        <div className="stat">
          <h2 className="green">₹0</h2>
          <p>Hidden Fees</p>
        </div>

        <div className="stat">
          <h2 className="blue">24/7</h2>
          <p>Data Access</p>
        </div>

        <div className="stat">
          <h2 className="green">10+</h2>
          <p>Analysis Tools</p>
        </div>
      </div>
    </section>
  );
}
