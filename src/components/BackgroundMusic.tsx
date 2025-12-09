'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/WhatsApp Audio 2025-12-09 at 14.46.31_2e120788.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.1;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        // Unmuting - play the audio
        audioRef.current.play().catch((error) => {
          console.error('Failed to play audio:', error);
        });
        setIsMuted(false);
      } else {
        // Muting - pause the audio
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  return (
    <button
      onClick={toggleMute}
      className="music-toggle-btn"
      aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
      title={isMuted ? 'Play background music' : 'Pause background music'}
    >
      {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
    </button>
  );
}
