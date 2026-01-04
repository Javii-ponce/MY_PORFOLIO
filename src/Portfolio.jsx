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




/** added new */
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="container portfolio-layout">

        {/* HERO */}
        <header className="portfolio-hero">
          <h1 className="portfolio-title">Portfolio of Projects</h1>
          <p className="portfolio-subtitle">
            Click a project to view details
          </p>
        </header>

        {/* PROJECTS */}
        <section className="projects-section">
  <h2 className="projects-heading">Projects</h2>

  {/* ROW 1 */}
  <div className="projects-row">
     <Link to="/projects/portfolio" className="project-box">
                <h3 className="project-title">Personal Portfolio Website</h3>
                <p className="project-desc">
                React-based portfolio with modern UI
                </p>
                <span className="project-link">View Project →</span>
            </Link>

    <Link to="/projects/uiux" className="project-box">
                <h3 className="project-title">UI / UX Case Studies</h3>
                <p className="project-desc">
                Design systems, wireframes, and user flows
                </p>
                <span className="project-link">View Project →</span>
            </Link>

    <Link to="/projects/apps" className="project-box">
                <h3 className="project-title">Interactive Web Applications</h3>
                <p className="project-desc">
                Dynamic apps built with modern JavaScript
                </p>
                <span className="project-link">View Project →</span>
            </Link>
  </div>

  {/* ROW 2 — Project 1, 2, 3 */}
  <div className="projects-row">
    <Link to="/projects/one" className="project-box">
                <h3 className="project-title">Project 1</h3>
                <p className="project-desc">
                Experimental project exploring new ideas
                </p>
                <span className="project-link">View Project →</span>
            </Link>

    <Link to="/projects/two" className="project-box">
                <h3 className="project-title">Project 2</h3>
                <p className="project-desc">
                Feature-focused build with clean architecture
                </p>
                <span className="project-link">View Project →</span>
            </Link>
            
    <Link to="/projects/three" className="project-box">
                <h3 className="project-title">Project 3</h3>
                <p className="project-desc">
                Performance-optimized interactive experience
                </p>
                <span className="project-link">View Project →</span>
            </Link>
  </div>
</section>

      </div>
    </div>
  );
}




