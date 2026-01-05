/*import { Link } from "react-router-dom";


export default function ProjectThree() {
  return (
    <div className="project-page">
      <h1>Project 3</h1>
      <p>Experimental project exploring new ideas.</p>

      <h3>hey its me</h3>

      <Link to="/portfolio">← Back to Portfolio</Link>
    </div>
  );
}
*/


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectFive() {
  const images = [
    "/FW.png",
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
      <h1>Furniture Website</h1>

      <p className="project-description">
        Current Project development of a furniture website! This is not completed 
        there is much more to add but this is the current state of the ongoing project
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
