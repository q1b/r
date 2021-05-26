import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import OHM from './assets/Ohm.mp3'

const AudioPlayer = ({}) => {
  // State
  const [isPlaying, setIsPlaying] = useState(false);

  // OHM SounD
  const audioSrc  = OHM;

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  useEffect(() => {
    audioRef.current.pause();
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      isReady.current = true;
    }
  }, [0]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="absolute bottom-8 left-8">
        <AudioControls
          isPlaying={isPlaying}
          onPlayPauseClick={setIsPlaying}
        />
    </div>
  );
};

export default AudioPlayer;
