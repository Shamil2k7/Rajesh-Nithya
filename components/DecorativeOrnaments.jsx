"use client";

import React from "react";

// Corner Filigree Ornament matching the original wedding card's top corners
export function CornerOrnament({ className = "", position = "top-left", size = 110 }) {
  const transformMap = {
    "top-left": "none",
    "top-right": "scaleX(-1)",
    "bottom-left": "scaleY(-1)",
    "bottom-right": "scale(-1, -1)",
  };

  const transform = transformMap[position] || "none";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none transition-transform duration-700 ${className}`}
      style={{ transform, transformOrigin: "center" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldFiligree" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4D77A" />
          <stop offset="45%" stopColor="#D4A843" />
          <stop offset="75%" stopColor="#C39430" />
          <stop offset="100%" stopColor="#F7E298" />
        </linearGradient>
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#F4D77A" floodOpacity="0.35" />
        </filter>
      </defs>

      <g stroke="url(#goldFiligree)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" filter="url(#goldGlow)">
        {/* Outer framing double border lines */}
        <path d="M 6 150 L 6 18 A 12 12 0 0 1 18 6 L 150 6" fill="none" strokeWidth="1.5" opacity="0.8" />
        <path d="M 12 135 L 12 24 A 12 12 0 0 1 24 12 L 135 12" fill="none" strokeWidth="1" opacity="0.5" />

        {/* Corner Scrollwork & Royal Flourishes */}
        <path d="M 18 42 C 26 28 42 22 58 24 C 74 26 84 38 82 52 C 80 66 65 72 52 68 C 39 64 36 48 46 38 C 54 30 68 34 68 44 C 68 50 62 54 56 52" fill="none" />
        
        {/* Secondary floral curve extending along top */}
        <path d="M 82 24 C 98 18 118 20 134 14 C 144 10 148 4 156 6" fill="none" />
        <path d="M 94 28 C 108 30 122 25 136 24" fill="none" opacity="0.75" />
        
        {/* Secondary floral curve extending along left */}
        <path d="M 24 82 C 18 98 20 118 14 134 C 10 144 4 148 6 156" fill="none" />
        <path d="M 28 94 C 30 108 25 122 24 136" fill="none" opacity="0.75" />

        {/* Leaf & Petal motifs */}
        <path d="M 38 20 C 44 14 56 12 60 18 C 54 22 46 24 38 20 Z" fill="url(#goldFiligree)" fillOpacity="0.4" />
        <path d="M 20 38 C 14 44 12 56 18 60 C 22 54 24 46 20 38 Z" fill="url(#goldFiligree)" fillOpacity="0.4" />
        <path d="M 72 32 C 84 26 94 30 92 38 C 84 40 76 38 72 32 Z" fill="url(#goldFiligree)" fillOpacity="0.3" />
        <path d="M 32 72 C 26 84 30 94 38 92 C 40 84 38 76 32 72 Z" fill="url(#goldFiligree)" fillOpacity="0.3" />

        {/* Accent Beads and Dots */}
        <circle cx="18" cy="18" r="3" fill="url(#goldFiligree)" />
        <circle cx="150" cy="6" r="2.5" fill="url(#goldFiligree)" />
        <circle cx="6" cy="150" r="2.5" fill="url(#goldFiligree)" />
        <circle cx="56" cy="52" r="2" fill="url(#goldFiligree)" />
        <circle cx="106" cy="22" r="1.8" fill="url(#goldFiligree)" />
        <circle cx="22" cy="106" r="1.8" fill="url(#goldFiligree)" />
      </g>
    </svg>
  );
}

// Sacred Om Symbol (ॐ) with gentle golden radiance and detail
export function OmSymbol({ className = "", size = 68 }) {
  return (
    <div className={`inline-flex items-center justify-center relative ${className}`}>
      {/* Background Soft Glow */}
      <div 
        className="absolute inset-0 rounded-full blur-md opacity-35 bg-[#F4D77A] transform scale-125 pointer-events-none" 
        aria-hidden="true"
      />
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-[0_2px_8px_rgba(244,215,122,0.4)]"
      >
        <defs>
          <linearGradient id="omGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF1D0" />
            <stop offset="25%" stopColor="#F4D77A" />
            <stop offset="70%" stopColor="#D4A843" />
            <stop offset="100%" stopColor="#A87720" />
          </linearGradient>
        </defs>

        {/* Sacred Om glyph path with classic proportions */}
        <path
          d="M 32 30 C 26 30 20 35 20 42 C 20 50 28 55 35 56 C 26 58 18 64 18 73 C 18 83 27 90 38 90 C 50 90 60 81 61 71 C 62 60 52 53 45 52 C 49 48 52 42 50 36 C 47 28 39 26 33 26"
          stroke="url(#omGoldGradient)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Tail loop swoosh */}
        <path
          d="M 52 52 C 60 55 69 62 72 72 C 75 80 84 82 89 77 C 93 73 93 65 86 59 C 78 52 64 50 52 52"
          stroke="url(#omGoldGradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Crescent / Chandrabindu */}
        <path
          d="M 56 26 C 63 21 75 22 84 27"
          stroke="url(#omGoldGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Bindu (Dot) */}
        <circle cx="70" cy="14" r="3.8" fill="url(#omGoldGradient)" />
      </svg>
    </div>
  );
}

// Traditional Floral Mandala Flower (exactly matching the bottom section of the invitation card)
export function MandalaFlower({ className = "", size = 120, opacity = 1 }) {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315];
  const subPetals = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mandalaGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4D77A" />
          <stop offset="50%" stopColor="#D4A843" />
          <stop offset="100%" stopColor="#BD8B26" />
        </linearGradient>
      </defs>

      <g stroke="url(#mandalaGold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(100, 100)">
        {/* Outer concentric accent ring */}
        <circle cx="0" cy="0" r="88" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        <circle cx="0" cy="0" r="82" strokeWidth="1.2" opacity="0.8" />

        {/* 8 Primary Outer Pointed Petals */}
        {petals.map((angle) => (
          <g key={`petal-${angle}`} transform={`rotate(${angle})`}>
            {/* Outer pointed leaf/petal */}
            <path
              d="M 0 -85 C 16 -68 22 -44 0 -25 C -22 -44 -16 -68 0 -85 Z"
              fill="none"
              strokeWidth="1.6"
            />
            {/* Inner petal vein */}
            <line x1="0" y1="-80" x2="0" y2="-32" strokeWidth="1" opacity="0.8" />
            <circle cx="0" cy="-62" r="2.2" fill="url(#mandalaGold)" />
            {/* Petal tip accent dot */}
            <circle cx="0" cy="-86" r="1.8" fill="url(#mandalaGold)" />
          </g>
        ))}

        {/* 8 Intermediate Petals */}
        {subPetals.map((angle) => (
          <g key={`subpetal-${angle}`} transform={`rotate(${angle})`}>
            <path
              d="M 0 -70 C 11 -55 14 -38 0 -22 C -14 -38 -11 -55 0 -70 Z"
              fill="none"
              strokeWidth="1.2"
              opacity="0.85"
            />
            <circle cx="0" cy="-54" r="1.6" fill="url(#mandalaGold)" />
          </g>
        ))}

        {/* Mid-tier rosette rings */}
        <circle cx="0" cy="0" r="38" strokeWidth="1.4" />
        <circle cx="0" cy="0" r="32" strokeWidth="1" opacity="0.7" />

        {/* Inner 8 petal flower */}
        {petals.map((angle) => (
          <g key={`inner-petal-${angle}`} transform={`rotate(${angle})`}>
            <path
              d="M 0 -32 C 8 -24 8 -12 0 0 C -8 -12 -8 -24 0 -32 Z"
              fill="none"
              strokeWidth="1.3"
            />
            <circle cx="0" cy="-20" r="1.5" fill="url(#mandalaGold)" />
          </g>
        ))}

        {/* Central rings & bindu */}
        <circle cx="0" cy="0" r="14" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="8" strokeWidth="1" fill="#570A0A" />
        <circle cx="0" cy="0" r="3.5" fill="url(#mandalaGold)" />
      </g>
    </svg>
  );
}

// Elegant Horizontal Divider with center Lotus/Diamond ornament
export function GoldenDivider({ className = "", width = "100%", subtitle = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center my-6 ${className}`} style={{ width }}>
      <div className="flex items-center justify-center w-full max-w-xl px-4">
        {/* Left Tapering Gold Line */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#D4A843] to-[#F4D77A] opacity-75" />

        {/* Center Ornamental Medallion */}
        <div className="mx-3 flex items-center space-x-1.5 text-[#F4D77A]">
          <span className="w-1.5 h-1.5 rotate-45 border border-[#D4A843] bg-[#570A0A]" />
          <span className="w-2.5 h-2.5 rotate-45 border border-[#F4D77A] bg-[#D4A843]" />
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[#F4D77A]">
            <path
              d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
              fill="url(#mandalaGold)"
              stroke="#D4A843"
              strokeWidth="0.75"
            />
          </svg>
          <span className="w-2.5 h-2.5 rotate-45 border border-[#F4D77A] bg-[#D4A843]" />
          <span className="w-1.5 h-1.5 rotate-45 border border-[#D4A843] bg-[#570A0A]" />
        </div>

        {/* Right Tapering Gold Line */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#D4A843] to-[#F4D77A] opacity-75" />
      </div>

      {subtitle && (
        <span className="text-[#D4A843] font-serif text-xs tracking-[0.25em] uppercase mt-1.5 opacity-90">
          {subtitle}
        </span>
      )}
    </div>
  );
}

// Repeating Bottom Mandala Ribbon (Identical to the bottom of the invitation card)
export function BottomMandalaBanner({ className = "" }) {
  return (
    <div className={`w-full relative overflow-hidden bg-gradient-to-b from-[#4A0808] to-[#2E0404] ${className}`}>
      {/* Upper Double Gold Border Bar with Gradient */}
      <div className="w-full">
        <div className="h-[2px] w-full bg-gradient-to-r from-[#D4A843] via-[#F4D77A] to-[#D4A843] shadow-[0_0_8px_rgba(244,215,122,0.5)]" />
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4A843] to-transparent mt-[3px] opacity-60" />
      </div>

      {/* Row of Mandalas with concentric motifs */}
      <div className="py-6 px-4 flex justify-around items-center opacity-85 relative">
        {/* Subtle radial shading overlay */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

        <div className="flex items-center justify-between w-full max-w-6xl mx-auto space-x-2 md:space-x-8">
          <MandalaFlower size={100} className="hidden lg:block opacity-65" />
          <MandalaFlower size={120} className="opacity-80" />
          <MandalaFlower size={140} className="opacity-95 transform scale-105" />
          <MandalaFlower size={120} className="opacity-80" />
          <MandalaFlower size={100} className="hidden lg:block opacity-65" />
        </div>
      </div>

      {/* Lower subtle border */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4A843] to-transparent opacity-40" />
    </div>
  );
}

// Traditional Royal Card Frame Wrapper
export function RoyalFrame({ children, className = "" }) {
  return (
    <div className={`relative p-5 md:p-10 border border-[#D4A843]/40 rounded-sm bg-[#570A0A]/90 shadow-[0_10px_40px_rgba(0,0,0,0.6)] ${className}`}>
      {/* Inner thin golden border */}
      <div className="absolute inset-2 md:inset-3 border border-[#D4A843]/25 pointer-events-none rounded-[2px]" />

      {/* 4 Corner Ornaments */}
      <CornerOrnament position="top-left" size={70} className="absolute -top-1 -left-1 md:top-1 md:left-1" />
      <CornerOrnament position="top-right" size={70} className="absolute -top-1 -right-1 md:top-1 md:right-1" />
      <CornerOrnament position="bottom-left" size={70} className="absolute -bottom-1 -left-1 md:bottom-1 md:left-1" />
      <CornerOrnament position="bottom-right" size={70} className="absolute -bottom-1 -right-1 md:bottom-1 md:right-1" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
