import "./App.css";
import Features from "./Features";
import WhyChoose from "./WhyChoose";
import Stats from "./Stats";
import WaitlistBenefits from "./WaitlistBenefits";
import WaitlistBadge from "./WaitlistBadge";
import ComingSoon from "./ComingSoon";
import FAQ from "./FAQ";
import PrivacyNotice from "./PrivacyNotice";
import Footer from "./Footer";
import FormCard from "./Form";

export default function App() {
  return (
    <div className="page">
      {/* Top gradient line */}
      <div className="top-bar"></div>

      <div className="container">
        {/* LEFT SECTION */}
        <div className="left">
          <h1>
            Invest Simpler.
            <br />
            Trade Smarter.
            <br />
            <span>Own the Future.</span>
          </h1>

          <p className="subtitle">One Place to Research, Analyse and Decide.</p>

          {/* FORM CARD */}
          <FormCard />
        </div>

        {/* RIGHT SECTION */}
        <div className="right">
          <div className="float star">✦</div>
          <div className="float star small">✧</div>

          <div className="float percent">%</div>

          <div className="float rupee">₹</div>
          <div className="logo-box">
            <img src="/logo.png" alt="Equifiz Logo" className="logo-img" />
          </div>

          <div className="chart-card">
            <div className="chart-header"></div>
            <div className="bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="growth">+24.7%</div>
          </div>
        </div>
      </div>
      <Features />
      <WhyChoose />
      <Stats />
      <WaitlistBenefits />
      <WaitlistBadge />
      <ComingSoon />
      <FAQ />
      <PrivacyNotice />
      <Footer />
    </div>
  );
}
