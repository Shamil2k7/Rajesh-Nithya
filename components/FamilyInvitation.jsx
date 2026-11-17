"use client";

import React from "react";
import { CornerOrnament, GoldenDivider, OmSymbol } from "./DecorativeOrnaments";
import { weddingData } from "../data/weddingData";

export default function FamilyInvitation() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 relative flex justify-center">
      {/* Centered Traditional Royal Card */}
      <div className="w-full max-w-3xl relative bg-gradient-to-b from-[#570A0A] via-[#460808] to-[#360505] border-2 border-[#D4A843]/60 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_0_50px_rgba(30,2,2,0.85)] p-6 sm:p-12 md:p-16 text-center">
        
        {/* Inner Golden Border Framing with Corner Notches */}
        <div className="absolute inset-2 sm:inset-4 border border-[#F4D77A]/35 pointer-events-none rounded-[2px]" />
        
        {/* 4 Corner Ornaments */}
        <CornerOrnament position="top-left" size={85} className="absolute top-1 left-1 sm:top-2 sm:left-2 opacity-85" />
        <CornerOrnament position="top-right" size={85} className="absolute top-1 right-1 sm:top-2 sm:right-2 opacity-85" />
        <CornerOrnament position="bottom-left" size={85} className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 opacity-85" />
        <CornerOrnament position="bottom-right" size={85} className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 opacity-85" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Sacred Om at Top */}
          <div className="mb-6">
            <OmSymbol size={62} />
          </div>

          {/* Groom's Parents */}
          <div className="space-y-2 mb-4">
            <h3 className="font-heading italic text-lg sm:text-2xl md:text-3xl text-[#F4D77A] font-semibold tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              {weddingData.groom.parents}
            </h3>
            
            <p className="font-body italic text-sm sm:text-base md:text-lg text-[#FFF1D0]/90 font-light tracking-wide pt-1">
              {weddingData.event.cordialMessage}
            </p>
          </div>

          {/* Couple Full Names in Traditional Calligraphy */}
          <div className="my-5 flex flex-col items-center space-y-1">
            <h2 className="font-calligraphy text-4xl sm:text-6xl md:text-7xl text-[#FFF1D0] tracking-normal drop-shadow-[0_4px_16px_rgba(244,215,122,0.4)] leading-tight">
              {weddingData.groom.fullName}
            </h2>

            <div className="my-1">
              <span className="font-calligraphy text-2xl sm:text-3xl md:text-4xl text-[#F4D77A] px-3">
                &amp;
              </span>
            </div>

            <h2 className="font-calligraphy text-4xl sm:text-6xl md:text-7xl text-[#FFF1D0] tracking-normal drop-shadow-[0_4px_16px_rgba(244,215,122,0.4)] leading-tight">
              {weddingData.bride.fullName}
            </h2>
          </div>

          {/* Bride's Parentage */}
          <div className="space-y-1 mt-2 mb-4">
            <p className="font-body italic text-xs sm:text-sm md:text-base text-[#D4A843] tracking-wider uppercase font-medium">
              {weddingData.bride.relation}
            </p>
            <h3 className="font-heading italic text-lg sm:text-2xl md:text-3xl text-[#F4D77A] font-semibold tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] pt-1">
              {weddingData.bride.parents}
            </h3>
          </div>

          {/* Traditional Golden Accent Divider */}
          <GoldenDivider width="70%" className="my-4" />

          {/* Respectful Blessing Note */}
          <p className="font-body text-xs sm:text-sm text-[#D4A843]/85 tracking-widest uppercase mt-1">
            {weddingData.content.blessingText}
          </p>
        </div>
      </div>
    </section>
  );
}
