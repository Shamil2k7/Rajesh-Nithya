"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function MusicPlayer({ isAutoPlayRequested = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);

  // Initialize and play the traditional wedding melody
  const startMusic = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.55;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
          return;
        }
      }
    } catch (err) {
      console.warn("Direct audio playback blocked or pending user interaction:", err);
    }
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      startMusic();
    }
  };

  // Trigger when opening invitation is clicked
  useEffect(() => {
    if (isAutoPlayRequested && !isPlaying) {
      startMusic();
    }
  }, [isAutoPlayRequested]);

  return (
    <div className="fixed top-5 right-5 z-40 flex items-center gap-2">
      {/* Hidden audio element loading the traditional Indian wedding shehnai & tanpura song */}
      <audio
        ref={audioRef}
        src="/audio/wedding-song.mp3"
        preload="auto"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/audio/wedding-song.mp3" type="audio/mp3" />
        <source src="/audio/wedding-song.wav" type="audio/wav" />
      </audio>

      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Mute traditional wedding shehnai song" : "Play traditional wedding shehnai song"}
        className="group relative flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2 rounded-full bg-[#3D0505]/95 hover:bg-[#570A0A] border border-[#D4A843]/70 shadow-[0_4px_16px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Pulsing Aura Indicator */}
        <span className="relative flex h-2.5 w-2.5 items-center justify-center">
          {isPlaying ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4D77A] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F4D77A]" />
            </>
          ) : (
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4A843]/60" />
          )}
        </span>

        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-[#F4D77A] animate-pulse" />
        ) : (
          <VolumeX className="w-4 h-4 text-[#D4A843]/80 group-hover:text-[#F4D77A]" />
        )}

        <span className="font-heading text-xs tracking-wider text-[#FFF1D0] font-medium uppercase pr-0.5 hidden sm:inline">
          {isPlaying ? "Shehnai Song: On" : "Wedding Song: Off"}
        </span>
      </button>
    </div>
  );
}
