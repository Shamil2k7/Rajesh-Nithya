"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { weddingData } from "../data/weddingData";

export default function FloatingLocation() {
  const handleClick = (e) => {
    const venueEl = document.getElementById("venue-section");
    if (venueEl) {
      e.preventDefault();
      venueEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      <a
        href={weddingData.venue.googleMapsUrl}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        title="View Venue & Directions: VMM Arcade, Karappuram"
        aria-label="View Venue & Directions"
        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#3D0505]/95 hover:bg-[#570A0A] border border-[#D4A843]/70 shadow-[0_4px_20px_rgba(0,0,0,0.65),0_0_15px_rgba(244,215,122,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 text-[#FFF1D0]"
      >
        <span className="relative flex h-2.5 w-2.5 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4D77A] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F4D77A]" />
        </span>

        <MapPin className="w-4 h-4 text-[#F4D77A] group-hover:scale-110 transition-transform" />

        <span className="font-heading text-xs tracking-wider uppercase font-semibold text-[#FFF1D0] pr-0.5">
          Venue Location
        </span>

        <Navigation className="w-3.5 h-3.5 text-[#D4A843] group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
}
