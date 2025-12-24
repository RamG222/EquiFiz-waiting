import { useState } from "react";
import "./Features.css";

const FEATURES = [
  {
    title: "Valuation Models",
    desc: "DCF, Dividend, Graham, Weighted. Built for precision.",
    icon: "📊",
  },
  {
    title: "Portfolio Monitoring",
    desc: "Allocation, stress testing, smart ratios.",
    icon: "🛡️",
  },
  {
    title: "IPO Tracker",
    desc: "Anchor investors, GMP, objectives — all in one glance.",
    icon: "⚡",
  },
  {
    title: "Sector Analysis",
    desc: "Macro drivers, Porters 5 forces, and correlations.",
    icon: "📈",
  },
  {
    title: "AI Analyst Chatbot",
    desc: "Ask anything. Get answers backed by real data.",
    icon: "🤖",
  },
  {
    title: "Investment Strategies",
    desc: "Timeless wisdom from world-class books, live-adapted.",
    icon: "📘",
  },
  {
    title: "Fund Allocation Tool",
    desc: "Get your personalized investment mix in minutes.",
    icon: "🎯",
  },
  {
    title: "Comparisons",
    desc: "Index, stocks, sectors, commodities — all side by side.",
    icon: "🔗",
  },
  {
    title: "ConCalls Summary",
    desc: "AI-powered insights from quarterly earnings calls.",
    icon: "🧠",
  },
  {
    title: "Forensic Checks",
    desc: "Deep-dive analysis to uncover red flags.",
    icon: "🕵️",
  },
];

export default function Features() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(FEATURES.length / itemsPerPage);

  const start = page * itemsPerPage;
  const visible = FEATURES.slice(start, start + itemsPerPage);

  return (
    <section className="features">
      <h2>Powerful Features, Simplified</h2>
      <p className="features-sub">
        Everything you need to make informed investment decisions, all in one platform
      </p>

      <div className="features-wrapper">
        <button
          className="arrow left"
          onClick={() => setPage(Math.max(page - 1, 0))}
        >
          ‹
        </button>

        <div className="features-grid">
          {visible.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <button
          className="arrow right"
          onClick={() => setPage(Math.min(page + 1, totalPages - 1))}
        >
          ›
        </button>
      </div>
<div className="pagination">
  <div className="track">
    <div
      className="progress"
      style={{ width: `${((page + 1) / totalPages) * 100}%` }}
    />
  </div>
      <div className="dots">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={i === page ? "dot active" : "dot"}
            onClick={() => setPage(i)}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
