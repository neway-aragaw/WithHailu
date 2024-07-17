import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Working-env.css"
import workingVideo from "../asset/Lobby_video.mp4"

function WorkingEnvironment() {
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
    navigate('/multiple-choice'); // Navigate to the multiple choice page
  };

  return (
    <div className="video-player">
        <h1>video 1-Understanding the work Environment</h1>
      <video
        ref={videoRef}
        src={workingVideo}// Replace with the actual path to your video
        controls
        onEnded={handleVideoEnd}
      />
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default WorkingEnvironment;
