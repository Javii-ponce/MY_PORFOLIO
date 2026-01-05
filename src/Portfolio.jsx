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



    
  {/* ROW 2 — Project 1, 2, 3 */}
  <div className="projects-row">
    <Link to="/projects/one" className="project-box">
                <h3 className="project-title">Figma Project 1</h3>
                <p className="project-desc">
                This project was for a dating app named Panshi
                </p>
                <span className="project-link">View Project →</span>
            </Link>

    <Link to="/projects/two" className="project-box">
                <h3 className="project-title">Figma Project 2</h3>
                <p className="project-desc">
                This project was for a webiste for greenfield international technologies inc. This is just the sample of the outline. 
                </p>
                <span className="project-link">View Project →</span>
            </Link>

    <Link to="/projects/three" className="project-box">
                <h3 className="project-title">ChessGame Project 3</h3>
                <p className="project-desc">
                A modern chess game with interactive play, adjustable AI difficulty, 
                save/load features, and beginner-friendly tutorials.
                </p>
                <span className="project-link">View Project →</span>
            </Link>
  </div>




  {/* ROW 1 */}
  <div className="projects-row">
     <Link to="/projects/portfolio" className="project-box">
                <h3 className="project-title">3</h3>
                <p className="project-desc">
                React-based portfolio with modern UI
                </p>
                <span className="project-link">View Project →</span>
            </Link>

    <Link to="/projects/uiux" className="project-box">
                <h3 className="project-title">4</h3>
                <p className="project-desc">
                Design systems, wireframes, and user flows
                </p>
                <span className="project-link">View Project →</span>
            </Link>

    <Link to="/projects/apps" className="project-box">
                <h3 className="project-title">5</h3>
                <p className="project-desc">
                Dynamic apps built with modern JavaScript
                </p>
                <span className="project-link">View Project →</span>
            </Link>
  </div>

</section>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link to="/" className="contact-btn">
          ← Back to Home
        </Link>
      </div>


      </div>
    </div>
  );
}




