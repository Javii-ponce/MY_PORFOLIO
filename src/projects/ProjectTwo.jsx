/*
import { Link } from "react-router-dom";


export default function ProjectTwo() {
  return (
    <div className="project-page">
      <h1>Project 2</h1>
      <p>Experimental project exploring new ideas.</p>


      <Link to="/portfolio">← Back to Portfolio</Link>
    </div>
  );
}
*/


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectTwo() {
  const images = [
    "/ITCompany1.png",
    "/ITCompany22.png",
    "/ITCompany3.png",
  ];

  const [activeImage, setActiveImage] = useState(null);

  // Close modal on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="project-page">
      <h1>Greenfield International Technologies Inc</h1>

      <p className="project-description">
        This is a Webiste application for a company in which wanted a new update to there exsiting webiste. I worked on this webiste application in the 
        UI/UX side with one other person.
      </p>

      {/* IMAGE GRID */}
      <div className="project-gallery">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Dating app screen ${i + 1}`}
            className="project-image"
            onClick={() => setActiveImage(src)}
          />
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {activeImage && (
        <div className="lightbox-overlay" onClick={() => setActiveImage(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close image"
            >
              ✕
            </button>

            <img
              src={activeImage}
              alt="Full size preview"
              className="lightbox-image"
            />
          </div>
        </div>
      )}

      <Link to="/portfolio" className="project-back">
        ← Back to Portfolio
      </Link>
    </div>
  );
}
