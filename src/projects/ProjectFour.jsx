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

export default function ProjectFour() {
  const images = [
    "/imageviewer1.png",
    "/imageviewer2.png",
    "/imageviewer3.png",
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
      <h1>Image Viewer</h1>

      <p className="project-description">

        A simple image viewer that lets users browse folders to find images, view them, make basic edits like adjusting
        brightness, zooming, and cropping, and save the edited images. The app includes an easy-to-use menu and a help section 
        so users can quickly understand how everything works. It is designed to be straightforward, user-friendly, and practical 
        for everyday image viewing and editing.
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
