import { useEffect, useRef, useState } from 'react';
import theme from '../sounds/music-harry-potter.mp3';

function Music() {
  const audioRef = useRef(new Audio(theme));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5; // Set volume to 50%

    return () => {
      audioRef.current.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <button className="button" onClick={toggleMusic}>
        {isPlaying ? '🔇 Detener música' : '🎶 Activar música'}
      </button>
    </div>
  );
}

export default Music;