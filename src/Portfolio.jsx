/*
import { Link } from "react-router-dom";
import "./index.css";

export default function Portfolio() {
  return (
    <div className="container">
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 className="pink-title">Portfolio</h1>
        <p className="subtitle">
          Selected projects & design work
        </p>
      </header>

      <section className="section visible">
        <h2>Projects</h2>

        <ul>
          <li>🌸 Personal Portfolio Website (React)</li>
          <li>🎨 UI/UX Case Studies (Figma)</li>
          <li>⚡ Interactive Web Apps</li>
        </ul>
      </section>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link to="/" className="contact-btn">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

*/

import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="container portfolio-layout">

        {/* PORTFOLIO HERO */}
        <header className="portfolio-hero">
          <h1 className="portfolio-title">Portfolio of Projects</h1>
          <p className="portfolio-subtitle">
            Click any project to view it live
          </p>
        </header>

        {/* PROJECTS SECTION */}
        <section className="section">
          <h2>Projects</h2>

          <div className="portfolio-grid">
            <a
              href="https://yourportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <h3>Personal Portfolio Website</h3>
              <span>View Live →</span>
            </a>

            <a
              href="https://figma.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <h3>UI / UX Case Studies</h3>
              <span>View Live →</span>
            </a>

            <a
              href="https://yourapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <h3>Interactive Web Applications</h3>
              <span>View Live →</span>
            </a>
          </div>
        </section>

        {/* BACK */}
        <div className="portfolio-cta">
          <Link to="/" className="contact-btn">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}




