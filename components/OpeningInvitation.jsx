"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import confetti from "canvas-confetti";
import { CornerOrnament, OmSymbol, GoldenDivider } from "./DecorativeOrnaments";
import { weddingData } from "../data/weddingData";
import { Sparkles, Heart } from "lucide-react";

export default function OpeningInvitation({ onOpened }) {
  const [isOpening, setIsOpening] = useState(false);
  const containerRef = useRef(null);
  const envelopeRef = useRef(null);
  const flapRef = useRef(null);
  const cardInsideRef = useRef(null);
  const sealRef = useRef(null);
  const contentRef = useRef(null);
  const particlesRef = useRef(null);

  // Floating gold dust particles in background
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate subtle gold floating particles
    const items = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: `${(i * 3.7) % 100}%`,
      top: `${(i * 5.3) % 100}%`,
      size: `${3 + (i % 4) * 2}px`,
      duration: `${6 + (i % 5) * 2}s`,
      delay: `${(i * 0.4) % 4}s`,
    }));
    setParticles(items);

    // Initial gentle reveal of opening screen
    const ctx = gsap.context(() => {
      gsap.fromTo(
        envelopeRef.current,
        { scale: 0.9, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 1.4, ease: "power3.out" }
      );
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power2.out", delay: 0.3 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Launch royal gold & cream confetti burst
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F4D77A", "#D4A843", "#FFF1D0", "#FFDF80", "#E0B34C"],
        disableForReducedMotion: true,
      });
    } catch (e) {}

    // GSAP Timeline for Royal Opening Animation
    const tl = gsap.timeline({
      onComplete: () => {
        if (onOpened) onOpened();
      },
    });

    // 1. Break / fade seal
    tl.to(sealRef.current, {
      scale: 1.25,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    })
    // 2. Flap unfolds upwards in 3D
    .to(flapRef.current, {
      rotateX: 180,
      duration: 0.65,
      ease: "power2.inOut",
      transformOrigin: "top center",
    }, "-=0.2")
    // 3. Card slides out and scales gracefully
    .to(cardInsideRef.current, {
      y: -80,
      scale: 1.05,
      duration: 0.75,
      ease: "power3.out",
    }, "-=0.3")
    // 4. Whole opening curtain dissolves smoothly into main website
    .to(containerRef.current, {
      opacity: 0,
      scale: 1.04,
      duration: 0.75,
      ease: "power2.inOut",
      delay: 0.1,
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-gradient-to-b from-[#450707] via-[#570A0A] to-[#2B0303] overflow-hidden select-none"
    >
      {/* 4 Corner Ornaments in Screen Edges */}
      <CornerOrnament position="top-left" size={120} className="absolute top-2 left-2 md:top-6 md:left-6 opacity-75" />
      <CornerOrnament position="top-right" size={120} className="absolute top-2 right-2 md:top-6 md:right-6 opacity-75" />
      <CornerOrnament position="bottom-left" size={120} className="absolute bottom-2 left-2 md:bottom-6 md:left-6 opacity-75" />
      <CornerOrnament position="bottom-right" size={120} className="absolute bottom-2 right-2 md:bottom-6 md:right-6 opacity-75" />

      {/* Floating Gold Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="gold-particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Royal Closed Invitation Envelope Container */}
      <div
        ref={envelopeRef}
        className="relative w-full max-w-lg md:max-w-xl mx-auto flex flex-col items-center"
        style={{ perspective: "1200px" }}
      >
        {/* Envelope Body */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] max-h-[500px] rounded-sm bg-gradient-to-b from-[#690D0D] to-[#3B0505] border-2 border-[#D4A843]/60 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(212,168,67,0.2)] overflow-hidden flex flex-col justify-between p-6 sm:p-10">
          
          {/* Inner Golden Inset Border */}
          <div className="absolute inset-3 border border-[#D4A843]/30 pointer-events-none rounded-[2px]" />
          
          {/* Subtle Royal Damask / Mandala Watermark */}
          <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_center,_#F4D77A_1px,_transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Envelope Top Triangle Flap (for 3D opening) */}
          <div
            ref={flapRef}
            className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#7A1010] to-[#500808] border-b border-[#D4A843]/50 origin-top shadow-md z-20"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="w-full h-full relative">
              {/* Flap gold piping border */}
              <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                <line x1="0" y1="0" x2="50" y2="98" stroke="#D4A843" strokeWidth="1" opacity="0.6" />
                <line x1="100" y1="0" x2="50" y2="98" stroke="#D4A843" strokeWidth="1" opacity="0.6" />
              </svg>
            </div>
          </div>

          {/* Invitation Card Inside peek */}
          <div
            ref={cardInsideRef}
            className="absolute inset-4 sm:inset-6 bg-gradient-to-b from-[#570A0A] to-[#350404] border border-[#F4D77A]/40 rounded-sm shadow-xl z-10 flex flex-col items-center justify-center p-6 text-center"
          >
            {/* Sacred Om at Top Center */}
            <div className="mb-2">
              <OmSymbol size={54} />
            </div>

            {/* Preamble */}
            <p className="font-heading text-xs sm:text-sm tracking-[0.3em] uppercase text-[#F4D77A]/90 mb-2">
              {weddingData.content.invitationPreamble}
            </p>

            {/* Couple Script Names preview */}
            <h2 className="font-calligraphy text-3xl sm:text-4xl text-[#FFF1D0] drop-shadow-[0_2px_10px_rgba(244,215,122,0.4)] my-1 leading-tight">
              {weddingData.groom.displayName}
            </h2>
            <span className="font-calligraphy text-xl sm:text-2xl text-[#D4A843] my-0.5">&amp;</span>
            <h2 className="font-calligraphy text-3xl sm:text-4xl text-[#FFF1D0] drop-shadow-[0_2px_10px_rgba(244,215,122,0.4)] my-1 leading-tight">
              {weddingData.bride.displayName}
            </h2>

            {/* Divider */}
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4A843] to-transparent my-3" />

            {/* Date highlight */}
            <p className="font-heading text-sm tracking-widest text-[#F4D77A]">
              {weddingData.event.displayDate}
            </p>
          </div>

          {/* Golden Wax Seal / Emblem at center junction */}
          <div
            ref={sealRef}
            onClick={handleOpen}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group transition-transform duration-300 hover:scale-110 active:scale-95"
            title="Click to Open Invitation"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#FFF1D0] via-[#D4A843] to-[#8C6014] p-[2.5px] shadow-[0_6px_20px_rgba(0,0,0,0.7),0_0_20px_rgba(244,215,122,0.5)]">
              <div className="w-full h-full rounded-full bg-[#570A0A] border border-[#F4D77A]/50 flex items-center justify-center relative overflow-hidden">
                <span className="font-calligraphy text-2xl sm:text-3xl text-[#F4D77A] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                  ॐ
                </span>
                {/* Shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Action Button & Supporting invitation prompt */}
        <div ref={contentRef} className="mt-8 flex flex-col items-center text-center z-30">
          <p className="font-heading text-lg sm:text-xl tracking-[0.2em] text-[#FFF1D0] mb-4 opacity-95">
            {weddingData.content.invitationPreamble}
          </p>

          <button
            onClick={handleOpen}
            className="btn-gold-royal group flex items-center gap-3 px-8 py-3.5 text-base sm:text-lg"
          >
            <Sparkles className="w-5 h-5 text-[#240202] transition-transform group-hover:rotate-45" />
            <span>{weddingData.content.openingButtonText}</span>
            <Sparkles className="w-5 h-5 text-[#240202] transition-transform group-hover:-rotate-45" />
          </button>

          <p className="text-xs text-[#D4A843]/80 font-body tracking-wider mt-3 italic">
            Click to unfold the royal invitation
          </p>
        </div>
      </div>
    </div>
  );
}
