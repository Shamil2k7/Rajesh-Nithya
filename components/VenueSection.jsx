"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Compass, ExternalLink } from "lucide-react";
import { GoldenDivider, CornerOrnament } from "./DecorativeOrnaments";
import { weddingData } from "../data/weddingData";

export default function VenueSection() {
  const { venue } = weddingData;
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="venue-section" className="py-16 md:py-24 px-4 sm:px-6 relative scroll-mt-6">
      <div className="wedding-container max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-heading text-xs sm:text-sm tracking-[0.35em] text-[#D4A843] uppercase mb-2 font-medium">
            Location &amp; Navigation
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#FFF1D0] tracking-wide font-semibold drop-shadow-[0_2px_10px_rgba(244,215,122,0.3)]">
            Join Us at the Celebration
          </h2>
          <GoldenDivider width="45%" className="my-3" />
        </div>

        {/* Venue Container Card */}
        <div className="relative bg-gradient-to-b from-[#570A0A] via-[#480808] to-[#360505] border-2 border-[#D4A843]/60 rounded-sm p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
          {/* Inner Accent Border */}
          <div className="absolute inset-2 sm:inset-3 border border-[#F4D77A]/25 pointer-events-none rounded-[2px]" />
          
          {/* Corner Flourishes */}
          <CornerOrnament position="top-left" size={65} className="absolute top-1 left-1 opacity-70" />
          <CornerOrnament position="top-right" size={65} className="absolute top-1 right-1 opacity-70" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Left: Venue Information & Get Directions Button */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3D0505] border border-[#D4A843]/50 text-xs font-heading tracking-widest text-[#F4D77A] uppercase">
                <MapPin className="w-3.5 h-3.5 text-[#F4D77A]" />
                <span>Reception Hall</span>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl text-[#FFF1D0] font-semibold">
                {venue.name}
              </h3>

              <p className="font-body text-base sm:text-lg text-[#F4D77A] font-light">
                {venue.address}
              </p>

              <p className="font-body text-sm text-[#FFF1D0]/80 leading-relaxed">
                The reception ceremony will be held at the prominent {venue.name} in {venue.address}. Ample parking and guest facilities are available.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                {/* Primary Gold Button: "Get Directions" */}
                <a
                  href={venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-royal w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-base"
                >
                  <Navigation className="w-4 h-4 fill-current" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Right: Interactive Google Map or Fallback Card */}
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-[#D4A843]/60 shadow-xl bg-[#2E0404]">
                
                {/* Google Map iframe */}
                <iframe
                  title="Venue Location Map"
                  src={venue.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setMapLoaded(true)}
                  className={`w-full h-full transition-opacity duration-500 ${mapLoaded ? "opacity-95" : "opacity-0"}`}
                />

                {/* Fallback Location Overlay / Loading Placeholder */}
                {!mapLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#3D0505] text-[#FFF1D0]">
                    <Compass className="w-10 h-10 text-[#F4D77A] mb-3 animate-spin" style={{ animationDuration: "12s" }} />
                    <h4 className="font-heading text-xl text-[#F4D77A] font-semibold mb-1">
                      {venue.name}
                    </h4>
                    <p className="font-body text-sm text-[#FFF1D0]/80 mb-4">
                      {venue.address}
                    </p>
                    <a
                      href={venue.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold-outline text-xs px-4 py-2"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                )}

                {/* Decorative Map Frame Overlay */}
                <div className="absolute inset-0 border border-[#D4A843]/40 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
