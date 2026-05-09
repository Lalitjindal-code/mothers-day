import { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio('/bg-music.mp3');
    audioRef.current.loop = true; // Still keep loop as a fallback
    audioRef.current.volume = 0.5;

    // Loop logic: reset to 8s if it reaches 54s
    const handleTimeUpdate = () => {
      if (audioRef.current && audioRef.current.currentTime >= 54) {
        audioRef.current.currentTime = 8;
      }
    };
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

    const handleFirstInteraction = () => {
      if (!hasStarted && audioRef.current) {
        setHasStarted(true);
        setIsPlaying(true);
        audioRef.current.currentTime = 8; // Start from 8 seconds
        audioRef.current.play().catch(e => console.error("Audio play failed:", e));
        
        window.removeEventListener('click', handleFirstInteraction);
        window.removeEventListener('touchstart', handleFirstInteraction);
      }
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasStarted]);

  // Handle component unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <button 
      onClick={(e) => {
        e.stopPropagation();
        toggleMute();
      }}
      className="fixed bottom-6 right-6 z-[1000] p-4 bg-white/60 backdrop-blur-md border border-white/50 rounded-full shadow-[0_8px_32px_rgba(248,180,200,0.3)] text-deep-rose hover:bg-white hover:scale-110 transition-all duration-300 group flex items-center justify-center"
      aria-label="Toggle background music"
    >
      <div className="absolute inset-0 rounded-full bg-badge-gradient opacity-0 group-hover:opacity-10 transition-opacity"></div>
      {isPlaying ? (
        <div className="relative">
          <Volume2 size={24} className="animate-pulse" />
          <Music size={12} className="absolute -top-2 -right-2 animate-bounce" />
        </div>
      ) : (
        <VolumeX size={24} />
      )}
    </button>
  );
}
