import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1 className="hero-title">
            Invest Smarter.
            <br />
            Trade Simpler.
            <br />
            <span>Own the Future.</span>
          </h1>

          <p className="hero-subtitle">
            A new era of investing — data, analysis, and strategies, all in one
            platform.
          </p>

          <form className="hero-form">
            <label>Email address *</label>
            <input type="email" placeholder="you@example.com" />

            <label>Phone (optional)</label>
            <input type="text" placeholder="+91 98765 43210" />

            <div className="checkbox">
              <input type="checkbox" />
              <span>
                I accept the <a href="#">Privacy Policy</a> and Terms of Service
              </span>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE WILL COME NEXT */}
        <div className="hero-right">
          {/* LOGO */}
          <div className="brand-logo">
            <div className="logo-box">
              <span>E</span>
            </div>
          </div>

          {/* CHART CARD */}
          <div className="chart-card">
            <div className="chart-header"></div>

            <div className="bars">
              <div className="bar"></div>
              <div className="bar tall"></div>
              <div className="bar medium"></div>
              <div className="bar tall"></div>
              <div className="bar"></div>
            </div>

            <span className="profit">+24.7%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
