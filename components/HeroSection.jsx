"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { OmSymbol, GoldenDivider, MandalaFlower, CornerOrnament } from "./DecorativeOrnaments";
import { weddingData } from "../data/weddingData";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const omRef = useRef(null);
  const namesRef = useRef(null);
  const subtitleRef = useRef(null);
  const mandalaBgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for Hero section elements
      gsap.fromTo(
        omRef.current,
        { scale: 0.6, opacity: 0, y: -20 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "back.out(1.7)" }
      );

      gsap.fromTo(
        namesRef.current?.children || [],
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.3, stagger: 0.2, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.9 }
      );

      // Subtle slow rotation of background mandala
      gsap.to(mandalaBgRef.current, {
        rotation: 360,
        duration: 90,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex flex-col items-center justify-center py-20 px-4 md:px-8 overflow-hidden text-center"
    >
      {/* 4 Corner Ornaments */}
      <CornerOrnament position="top-left" size={100} className="absolute top-4 left-4 md:top-8 md:left-8 opacity-80" />
      <CornerOrnament position="top-right" size={100} className="absolute top-4 right-4 md:top-8 md:right-8 opacity-80" />
      <CornerOrnament position="bottom-left" size={100} className="absolute bottom-4 left-4 md:bottom-8 md:left-8 opacity-80" />
      <CornerOrnament position="bottom-right" size={100} className="absolute bottom-4 right-4 md:bottom-8 md:right-8 opacity-80" />

      {/* Rotating Background Mandala Watermark */}
      <div
        ref={mandalaBgRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.07] select-none"
      >
        <MandalaFlower size={650} />
      </div>

      {/* Floating Gold Sparkle Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="gold-particle" style={{ top: "25%", left: "15%", width: "5px", height: "5px", animationDuration: "7s" }} />
        <div className="gold-particle" style={{ top: "65%", left: "85%", width: "6px", height: "6px", animationDuration: "9s" }} />
        <div className="gold-particle" style={{ top: "35%", right: "18%", width: "4px", height: "4px", animationDuration: "6s" }} />
        <div className="gold-particle" style={{ bottom: "20%", left: "30%", width: "5px", height: "5px", animationDuration: "8s" }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Sacred Om at Top Center */}
        <div ref={omRef} className="mb-6">
          <OmSymbol size={75} />
        </div>

        {/* Small Invitation Category Header */}
        <p className="font-heading text-sm md:text-base tracking-[0.35em] text-[#D4A843] uppercase mb-4 font-semibold">
          {weddingData.event.type}
        </p>

        {/* Couple Names in Grand Calligraphy & Gold Finish */}
        <div ref={namesRef} className="flex flex-col items-center my-2 space-y-1 md:space-y-2">
          <h1 className="font-calligraphy text-5xl sm:text-7xl md:text-8xl text-[#FFF1D0] tracking-normal leading-[1.2] drop-shadow-[0_4px_16px_rgba(244,215,122,0.45)]">
            {weddingData.groom.displayName}
          </h1>

          <div className="my-1 flex items-center justify-center">
            <span className="font-calligraphy text-3xl sm:text-4xl md:text-5xl text-[#F4D77A] px-4 font-normal">
              &amp;
            </span>
          </div>

          <h1 className="font-calligraphy text-5xl sm:text-7xl md:text-8xl text-[#FFF1D0] tracking-normal leading-[1.2] drop-shadow-[0_4px_16px_rgba(244,215,122,0.45)]">
            {weddingData.bride.displayName}
          </h1>
        </div>

        {/* Golden Flourish Divider */}
        <GoldenDivider width="85%" />

        {/* Supporting Invitation Text */}
        <div ref={subtitleRef} className="max-w-xl mx-auto mt-2">
          <p className="font-body text-base sm:text-lg md:text-xl text-[#FFF1D0]/90 italic font-normal leading-relaxed">
            &ldquo;{weddingData.event.subtitle}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
