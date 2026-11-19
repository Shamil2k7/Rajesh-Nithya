"use client";

import React, { useState } from "react";
import OpeningInvitation from "./OpeningInvitation";
import HeroSection from "./HeroSection";
import FamilyInvitation from "./FamilyInvitation";
import EventDetails from "./EventDetails";
import Countdown from "./Countdown";
import VenueSection from "./VenueSection";
import ShareSection from "./ShareSection";
import ClosingSection from "./ClosingSection";
import FloatingLocation from "./FloatingLocation";
import MusicPlayer from "./MusicPlayer";
import { Mail, ArrowUp } from "lucide-react";

export default function WeddingPage() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMusicAutoTriggered, setIsMusicAutoTriggered] = useState(false);

  const handleOpened = () => {
    setIsOpened(true);
    setIsMusicAutoTriggered(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReopen = () => {
    setIsOpened(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#570A0A] text-[#FFF1D0] relative selection:bg-[#D4A843] selection:text-[#240202]">
      
      {/* 1. Cinematic Envelope Opening Experience */}
      {!isOpened && (
        <OpeningInvitation onOpened={handleOpened} />
      )}

      {/* 2. Main Wedding Website Content (Visible after opening) */}
      <div className={`transition-opacity duration-1000 ${isOpened ? "opacity-100" : "opacity-0 pointer-events-none h-screen overflow-hidden"}`}>
        
        {/* Hero Section */}
        <HeroSection />

        {/* Family Invitation Card */}
        <FamilyInvitation />

        {/* Event Details: Date, Time & Venue */}
        <EventDetails />

        {/* Real-time Countdown Timer in IST */}
        <Countdown />

        {/* Venue Location & Navigation */}
        <VenueSection />

        {/* Share via WhatsApp & Copy Link Section */}
        <ShareSection />

        {/* Closing Greetings & Repeating Mandala Border */}
        <ClosingSection />

        {/* Ambient Royal Music Player (Generic label with NO song title) */}
        <MusicPlayer isAutoPlayRequested={isMusicAutoTriggered} />

        {/* Floating Location Button (Bottom Right) */}
        {isOpened && <FloatingLocation />}

        {/* Floating Utility Controls (Re-open Envelope & Back to Top) */}
        {isOpened && (
          <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
            <button
              onClick={handleReopen}
              title="Re-open Royal Envelope"
              className="flex items-center gap-2 px-3 py-2.5 rounded-full bg-[#3D0505]/90 hover:bg-[#570A0A] border border-[#D4A843]/60 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 text-[#FFF1D0]"
            >
              <Mail className="w-4 h-4 text-[#F4D77A]" />
              <span className="font-heading text-xs tracking-wider uppercase hidden sm:inline">
                Replay Envelope
              </span>
            </button>

            <button
              onClick={scrollToTop}
              title="Scroll to Top"
              className="p-2.5 rounded-full bg-[#3D0505]/90 hover:bg-[#570A0A] border border-[#D4A843]/60 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 text-[#F4D77A]"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
