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

export default function ProjectThree() {
  const images = [
    "/chess1.png",
    "/chess2Light.png",
    "/chess3.png",
    "/chess4.png",
    "/chess5.png",
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
      <h1>Chess Game</h1>

      <p className="project-description">

        Chess is a classic board game that has been played for centuries but learning it and improving can be 
        challenging especially for beginners. Our project aims to create a modern, easy to use and enjoyable version 
        of a classical game which can be enjoyed by everyone from complete beginner to experienced players. The game will provide a clear 
        and simple interface with clean visuals and responsive game-play and also provide some additional tools to help users learn, play and analyze games. Players will be
        able to enjoy the game alone, with friends or test their skill level with different levels of AI players.

        -I worked on the hint of the application, also front-end of the application.
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
