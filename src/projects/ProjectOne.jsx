import { Link } from "react-router-dom";

export default function ProjectOne() {
  return (
    <div className="project-page">
      <h1>Project 1</h1>
      <p>Experimental project exploring new ideas.</p>

      <Link to="/portfolio">← Back to Portfolio</Link>
    </div>
  );
}
