"use client";

import React from "react";
import { OmSymbol, GoldenDivider, BottomMandalaBanner, CornerOrnament } from "./DecorativeOrnaments";
import { weddingData } from "../data/weddingData";

export default function ClosingSection() {
  const { groom, bride, content } = weddingData;

  return (
    <footer className="pt-16 pb-0 relative text-center overflow-hidden">
      <div className="wedding-container max-w-3xl mx-auto px-4 pb-16">
        
        {/* Subtle Om Symbol */}
        <div className="mb-6 flex justify-center">
          <OmSymbol size={56} />
        </div>

        {/* Closing Warm Message */}
        <div className="max-w-xl mx-auto space-y-4">
          <p className="font-body italic text-lg sm:text-2xl text-[#FFF1D0]/90 leading-relaxed font-normal">
            &ldquo;{content.closingMessage}&rdquo;
          </p>

          <GoldenDivider width="60%" className="my-6" />

          {/* Couple Sign-off */}
          <div className="space-y-1">
            <h3 className="font-calligraphy text-4xl sm:text-5xl md:text-6xl text-[#FFF1D0] drop-shadow-[0_2px_12px_rgba(244,215,122,0.4)]">
              {groom.displayName}
            </h3>
            <span className="font-calligraphy text-2xl sm:text-3xl text-[#F4D77A] inline-block my-0.5">
              &amp;
            </span>
            <h3 className="font-calligraphy text-4xl sm:text-5xl md:text-6xl text-[#FFF1D0] drop-shadow-[0_2px_12px_rgba(244,215,122,0.4)]">
              {bride.displayName}
            </h3>
          </div>

          <p className="font-heading text-xs sm:text-sm tracking-[0.25em] text-[#D4A843] uppercase pt-4 opacity-85">
            With Love &amp; Gratitude
          </p>
        </div>

      </div>

      {/* Repeating Golden Floral Mandala Banner (matching the bottom third of the original card) */}
      <BottomMandalaBanner />
    </footer>
  );
}
