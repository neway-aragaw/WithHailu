import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Working-env.css"
import LobbyV from "../asset/C.MOV"

function Tablet() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoEnd = () => {
    navigate('/M-C-T'); // Navigate to the multiple choice page
  };

  return (
    <div className="video-player">
        <h1>video 3-Understanding The Tablet</h1>
      <video
        ref={videoRef}
        src={LobbyV}// Replace with the actual path to your video
        controls
        onEnded={handleVideoEnd}
      />
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default Tablet;
