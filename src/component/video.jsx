import React, { useRef, useState } from 'react';
import './Video.css';

export default function Video() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="planetary-section" id="video-section">
      <div className="container">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            controls
            preload="metadata"
            poster="Assets/Planetary image.jpeg"
            title="Planetary data visualization showing orbital paths and measurements"
            aria-label="Video showing planetary data visualization"
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
          >
            <source src="Video/Updated vid.mp4" type="video/mp4" />
            <p>
              Your browser does not support the video tag.{' '}
              <a href="Video/Updated vid.mp4">Download the video here</a>.
            </p>
          </video>

          {!isPlaying && (
            <button
              className="play-button"
              onClick={handlePlayPause}
              aria-label="Play video"
            >
              <span className="play-icon">▶</span>
            </button>
          )}
        </div>

        <div className="content">
          <h2>
            How Planetary Data Helps Us <br />
            Understand Space
          </h2>
          <p>
            Planetary science goes beyond images. Comparing{' '}
            <strong>mass, diameter, gravity,</strong> and <strong>density</strong>,
            we gain insight into how planets form, behave, and interact within
            the solar system.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default App;
