"use client";

import React, { useState, useEffect } from "react";
import { GoldenDivider } from "./DecorativeOrnaments";
import { weddingData } from "../data/weddingData";
import { Sparkles, Heart } from "lucide-react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
    isMounted: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Event Target in IST
      const targetTime = new Date(weddingData.event.targetIsoString).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPassed: true,
          isMounted: true,
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds,
        isPassed: false,
        isMounted: true,
      };
    };

    // Calculate immediately on mount
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 relative text-center">
      <div className="wedding-container max-w-3xl mx-auto">
        
        {/* Header */}
        <p className="font-heading text-xs sm:text-sm tracking-[0.35em] text-[#D4A843] uppercase mb-2 font-medium">
          Counting Down to the Blessed Day
        </p>
        <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#FFF1D0] tracking-wide font-semibold drop-shadow-[0_2px_10px_rgba(244,215,122,0.3)]">
          The Celebration Begins In
        </h2>
        
        <GoldenDivider width="40%" className="my-3" />

        {/* If event has passed: Display graceful celebration message */}
        {timeLeft.isMounted && timeLeft.isPassed ? (
          <div className="my-8 p-8 bg-gradient-to-b from-[#570A0A] to-[#360505] border-2 border-[#D4A843]/60 rounded-sm shadow-xl relative max-w-xl mx-auto">
            <div className="absolute inset-2 border border-[#F4D77A]/20 pointer-events-none rounded-[2px]" />
            <Sparkles className="w-8 h-8 text-[#F4D77A] mx-auto mb-3 animate-pulse" />
            <h3 className="font-heading text-2xl sm:text-3xl text-[#FFF1D0] font-semibold mb-2">
              The Celebration Has Commenced!
            </h3>
            <p className="font-body text-base text-[#F4D77A] italic">
              Thank you for keeping Rajesh &amp; Nithya in your heartfelt prayers and blessings.
            </p>
          </div>
        ) : (
          /* Live Countdown Clock */
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 my-8 max-w-2xl mx-auto">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="relative bg-gradient-to-b from-[#570A0A] via-[#460808] to-[#2E0404] border border-[#D4A843]/55 rounded-sm p-5 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.6)] group hover:border-[#F4D77A] transition-all duration-300"
              >
                {/* Inner Border Notch */}
                <div className="absolute inset-1.5 border border-[#F4D77A]/25 pointer-events-none rounded-[2px]" />
                
                {/* Digit Display */}
                <div className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#FFF1D0] drop-shadow-[0_2px_8px_rgba(244,215,122,0.4)] tracking-tight">
                  {timeLeft.isMounted
                    ? String(unit.value).padStart(2, "0")
                    : "--"}
                </div>

                {/* Unit Label */}
                <div className="font-heading text-xs sm:text-sm tracking-[0.25em] uppercase text-[#D4A843] font-semibold mt-2">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="font-body text-xs sm:text-sm text-[#D4A843]/80 italic mt-4">
          Timezone: Indian Standard Time (IST &bull; UTC+05:30)
        </p>

      </div>
    </section>
  );
}
