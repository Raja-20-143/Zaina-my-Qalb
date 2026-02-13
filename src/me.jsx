import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import "./App.css";

function App() {
  const [page, setPage] = useState(1); 
  // 1 = proposal
  // 2 = ring
  // 3 = surprise text
  // 4 = slideshow

  const [currentPhoto, setCurrentPhoto] = useState(0);
  const audioRef = useRef(null);

  // 🎵 SONGS
  const ours = [
    "/ours/adada.mp3"
  ];

  // 📸 PHOTOS (public/love folder)
  const photos = [
    "/love/1.jpg",
    "/love/2.jpg",
    "/love/3.jpg",
    "/love/4.jpg",
    "/love/5.jpg",
    "/love/6.jpg",
    "/love/7.jpg",
    "/love/8.jpg"
  ];

  // Slideshow auto change
  useEffect(() => {
    if (page === 4) {
      const interval = setInterval(() => {
        setCurrentPhoto((prev) =>
          prev === photos.length - 1 ? 0 : prev + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [page]);

  const handleNext = () => {
    setPage(page + 1);
  };

  const startConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 100,
    });
  };

  return (
    <div className="container">

      {/* PAGE 1 */}
      {page === 1 && (
        <div className="page">
          <h1>Will You Be Mine? ❤️</h1>
          <button onClick={() => setPage(2)}>Yes 💍</button>
        </div>
      )}

      {/* PAGE 2 */}
      {page === 2 && (
        <div className="page">
          <h1>She Said Yes! 💖</h1>
          <button onClick={() => {
            startConfetti();
            setPage(3);
          }}>
            Next
          </button>
        </div>
      )}

      {/* PAGE 3 */}
      {page === 3 && (
        <div className="page">
          <h1>If you want surprise click next 🎁</h1>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {/* PAGE 4 - SLIDESHOW */}
      {page === 4 && (
        <div className="page">
          <h1>Our Beautiful Memories 💕</h1>
          <img
            src={photos[currentPhoto]}
            alt="memory"
            className="slideshow"
          />
        </div>
      )}

      <audio ref={audioRef} src={ours[0]} autoPlay loop />
    </div>
  );
}

export default App;
