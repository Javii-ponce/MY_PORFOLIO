import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./index.css";
import Portfolio from "./Portfolio";

{/*
import ProjectPortfolio from "./projects/ProjectPortfolio";
import ProjectUIUX from "./projects/ProjectUIUX";
import ProjectApps from "./projects/ProjectApps";

import ProjectTwo from "./projects/ProjectTwo";
import ProjectThree from "./projects/ProjectThree";
*/}

import ProjectOne from "./projects/ProjectOne"; {/* THis is the first vertical 2nd one */}
import ProjectTwo from "./projects/ProjectTwo";
import ProjectThree from "./projects/ProjectThree";
import ProjectFour from "./projects/ProjectFour";
import ProjectFive from "./projects/ProjectFive";
import ProjectSix from "./projects/ProjectSix";


export default function App() {
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    // Reset visibility when route changes
    sections.forEach(section => section.classList.remove("visible"));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <Routes>
      {/* ================= HOME PAGE ================= */}
      <Route
        path="/"
        element={
          <>
            {/* Floating background */}
            <div className="floating-shapes">
              <div className="shape shape1"></div>
              <div className="shape shape2"></div>
              <div className="shape shape3"></div>
            </div>

            <div className="container">
              {/* HEADER */}
              <header>
                <div className="glitch-wrapper">
                  <h1 className="glitch pink-title" data-text="JAVIERA PONCE">
                    JAVIERA PONCE
                  </h1>
                </div>

                <p className="subtitle">
                  Frontend Developer · UI/UX Designer · Creative Coder
                </p>

                <nav className="nav-links">
                  <a href="#about">About</a>
                  <a href="#skills">Skills</a>
                  <a href="#experience">Experience</a>
                  <Link to="/portfolio">Portfolio</Link>
                  <a href="#contact">Contact</a>
                </nav>
              </header>

              {/* ABOUT */}
              <section id="about" className="section">
                <h2>About Me</h2>
                <p>
                  Front-End Developer with 2+ years of hands-on experience
                  building responsive, user-friendly, and accessible web
                  applications. Skilled in HTML, CSS, JavaScript, and React.js,
                  with a strong background in UI/UX design.
                </p>
                <p>
                  I’m passionate about delivering high-quality, customer-focused
                  digital experiences, optimizing performance, ensuring
                  cross-browser compatibility, and integrating RESTful APIs.
                </p>
              </section>

              {/* SKILLS */}
              <section id="skills" className="section">
                <h2>Skills</h2>

                <div className="skills-grid">
                  <div className="skill-card">
                    <h3>Frontend Development</h3>
                    <p>HTML, CSS, JavaScript, React.js, Responsive Design</p>
                  </div>

                  <div className="skill-card">
                    <h3>UI / UX Design</h3>
                    <p>Figma, Wireframing, Prototyping, Interactive Design</p>
                  </div>

                  <div className="skill-card">
                    <h3>Tools & Frameworks</h3>
                    <p>Node.js, npm, GitHub, Docker, VS Code</p>
                  </div>

                  <div className="skill-card">
                    <h3>Backend Integration</h3>
                    <p>RESTful APIs, SQL Basics</p>
                  </div>

                  <div className="skill-card">
                    <h3>Version Control</h3>
                    <p>Git, Branching, Merge Requests</p>
                  </div>

                  <div className="skill-card">
                    <h3>Other Skills</h3>
                    <p>Debugging, Performance Optimization</p>
                  </div>
                </div>
              </section>

              {/* EXPERIENCE */}
              <section id="experience" className="section">
                <h2>Experience</h2>

                <div className="experience-item">
                  <h3>UI / UX Designer</h3>
                  <p className="company">
                    Greenfield International Inc · Edmonton, AB
                  </p>
                  <p className="date">October 2024 – July 2025</p>
                  <ul>
                    <li>Designed responsive interfaces using Figma</li>
                    <li>Created wireframes and interactive prototypes</li>
                    <li>Collaborated with developers and PMs</li>
                    <li>Improved accessibility and usability</li>
                    <li>Maintained reusable design systems</li>
                  </ul>
                </div>

                <div className="experience-item">
                  <h3>Web Developer</h3>
                  <p className="company">BCBM · Lloydminster, AB</p>
                  <p className="date">April 2023 – August 2024</p>
                  <ul>
                    <li>Built responsive features using React.js</li>
                    <li>Integrated RESTful APIs</li>
                    <li>Ensured mobile and desktop compatibility</li>
                    <li>Fixed bugs and tested functionality</li>
                    <li>Followed best coding practices</li>
                  </ul>
                </div>
              </section>

              {/* EDUCATION */}
              <section className="section">
                <h2>Education</h2>
                <p>
                  <strong>Bachelor of Science in Computer Science</strong>
                  <br />
                  The King’s University · Edmonton, AB
                  <br />
                  Jan 2020 – Dec 2025
                </p>
              </section>

              {/* CONTACT */}
              <section id="contact" className="section">
                <h2>Contact</h2>

                <div className="contact-info">
                  <a
                    href="mailto:javieraponce106@gmail.com"
                    className="contact-btn"
                  >
                    Email Me
                  </a>

                  <a
                    href="https://www.linkedin.com/in/javiera-ponce-416229273"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-btn"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="/resume-javiera-ponce.pdf"
                    download
                    className="contact-btn"
                  >
                    📄 Download Resume
                  </a>
                </div>
              </section>

        {/* BACK TO TOP */}
        <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        >
        ↑
        </button>



              {/* FOOTER */}
              <footer>
                <p>© 2025 Javiera Ponce · 💗</p>
              </footer>
            </div>
          </>
        }
      />

      {/* ================= PORTFOLIO PAGE ================= */}
      <Route path="/portfolio" element={<Portfolio />} />

      <Route path="/projects/one" element={<ProjectOne />} />
      <Route path="/projects/two" element={<ProjectTwo />} />
      <Route path="/projects/three" element={<ProjectThree />} />
      <Route path="/projects/four" element={<ProjectFour />} />
      <Route path="/projects/five" element={<ProjectFive />} />
      <Route path="/projects/six" element={<ProjectSix />} />
    
          {/* MAIN PROJECTS 
        <Route path="/projects/portfolio" element={<ProjectPortfolio />} />
        <Route path="/projects/uiux" element={<ProjectUIUX />} />
        <Route path="/projects/apps" element={<ProjectApps />} />
        */}
        {/* EXTRA PROJECTS 
        <Route path="portfolio/projects/one" element={<ProjectOne />} />
        <Route path="/projects/two" element={<ProjectTwo />} />
        <Route path="/projects/three" element={<ProjectThree />} />
            */}
        
    </Routes>
  );
}
