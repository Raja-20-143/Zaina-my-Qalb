import React from "react";
import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import "./App.css";

function App() {
  const [page, setPage] = useState(1); 
  // 1=proposal, 2=ring, 3=surprise text, 4=slideshow

  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [currentSong, setCurrentSong] = useState(0);

  const audioRef = useRef(null);

  // 🎵 YOUR SONG LIST (public/ours folder)
  const ours = [
    "/ours/adada.mp3"
  ];

  // 📸 YOUR PHOTOS (public/love folder)
  const photos = [
    "/love/1.jpg",
    "/love/2.jpg",
    "/love/3.jpg",
    "/love/4.jpg",
    "/love/5.jpg",
    "/love/6.jpg",
    "/love/7.jpg",
    "/love/8.jpg",
    "/love/9.jpg",
    "/love/10.jpg",
    "/love/11.jpg",
    "/love/12.jpg",
    "/love/13.jpg",
    "/love/14.jpg",
    "/love/15.jpg",
    "/love/16.jpg",
    "/love/17.jpg",
    "/love/17a.jpg",
    "/love/18.jpg",
    "/love/19.jpg",
    "/love/20.jpg",
    "/love/21.jpg",
    "/love/22.jpg",
    "/love/23.jpg",
    "/love/24.jpg",
    "/love/25.jpg",
    "/love/26.jpg",
    "/love/28.jpg"
  ];

  // Slideshow only on page 4
  useEffect(() => {
    if (page === 4) {
      const interval = setInterval(() => {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [page]);

  const handleYes = () => {
    setPage(2);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 300);
  };

  const handleNextToSurprise = () => {
    setPage(3);
  };

  const handleNextToSlideshow = () => {
    setPage(4);
  };

  const handleSongEnd = () => {
    setCurrentSong((prev) => (prev + 1) % ours.length);
  };

  const moveNoButton = (e) => {
    const button = e.target;
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
  };

  return (
    <div className="container">
      
      {/* 🎵 Audio */}
      <audio
        ref={audioRef}
        src={ours[currentSong]}
        onEnded={handleSongEnd}
      />

      {/* PAGE 1 — Proposal */}
      {page === 1 && (
        <>
          <h3>From RAJA ❤️</h3>
          <h1>ZAINA, Will you be my wife? 💍</h1>
          <h2>I’m ready for you my butterfly 🦋</h2>

          <div className="buttons">
            <button className="yes" onClick={handleYes}>
              YES ❤️
            </button>

            <button className="no" onMouseOver={moveNoButton}>
              NO 🙈
            </button>
          </div>
        </>
      )}

      {/* PAGE 2 — Ring Page */}
      {page === 2 && (
        <div className="success">
          <h1>RAJA ❤️ ZAINA</h1>
          <h2 className="ring">Forever Starts Now 💍</h2>

          <button className="nextBtn" onClick={handleNextToSurprise}>
            Next ➜
          </button>
        </div>
      )}

      {/* PAGE 3 — Surprise Text */}
      {page === 3 && (
        <div className="success">
          <h1>You have surprise 🎁</h1>
          <h2>Click next ❤️</h2>

          <button className="nextBtn" onClick={handleNextToSlideshow}>
            Next ➜
          </button>
        </div>
      )}

      {/* PAGE 4 — Slideshow */}
      {page === 4 && (
        <div className="slideshowPage">
          <h1>Our Beautiful Memories ❤️</h1>

          <img
            src={photos[currentPhoto]}
            alt="memory"
            className="slideshow"
          />
        </div>
      )}

    </div>
  );
}

export default App;
