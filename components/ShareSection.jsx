"use client";

import React, { useState } from "react";
import { Share2, Check, MessageCircle, Send } from "lucide-react";
import { GoldenDivider, CornerOrnament } from "./DecorativeOrnaments";

export default function ShareSection() {
  const [copiedLink, setCopiedLink] = useState(false);

  const cardUrl = "https://www.weddinginvitelik.ink/rajesh-nithyar-reception";

  const invitationMessage = `🌸 *Wedding Invitation* 🌸

Together with their families, *Rajesh Kumar E R* and *Nithya Suni* cordially invite you to join the occasion of their joyous commitment.

🗓 *Date:* Thursday, January 07, 2027
⏰ *Time:* 9:30 AM
📍 *Venue:* SREE KRISHNA TEMPLE, GURUVAYUR

View our wedding card here:
${cardUrl}`;

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(invitationMessage)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(cardUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch (e) {
      console.warn("Clipboard copy failed", e);
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="wedding-container max-w-2xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="font-heading text-xs sm:text-sm tracking-[0.35em] text-[#D4A843] uppercase mb-2 font-medium">
            Share the Celebration
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#FFF1D0] tracking-wide font-semibold drop-shadow-[0_2px_10px_rgba(244,215,122,0.3)]">
            Send via WhatsApp
          </h2>
          <GoldenDivider width="40%" className="my-3" />
          <p className="font-body text-sm sm:text-base text-[#FFF1D0]/80 max-w-md mx-auto">
            Invite your family, relatives, and friends to celebrate this joyous occasion.
          </p>
        </div>

        {/* Traditional Royal Sharing Container */}
        <div className="relative bg-gradient-to-b from-[#570A0A] via-[#480808] to-[#360505] border-2 border-[#D4A843]/60 rounded-sm p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
          {/* Inner Accent Border */}
          <div className="absolute inset-2 sm:inset-3 border border-[#F4D77A]/25 pointer-events-none rounded-[2px]" />
          
          {/* Corner Flourishes */}
          <CornerOrnament position="top-left" size={60} className="absolute top-1 left-1 opacity-70" />
          <CornerOrnament position="top-right" size={60} className="absolute top-1 right-1 opacity-70" />

          <div className="relative z-10 flex flex-col items-center">
            
            {/* The Two Main Action Buttons: Share on WhatsApp & Copy Link */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 my-2">
              
              {/* Button 1: Share on WhatsApp */}
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm bg-[#25D366] hover:bg-[#20BD5A] text-white font-heading font-semibold text-base sm:text-lg tracking-wider uppercase shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 text-decoration-none"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Share on WhatsApp</span>
                <Send className="w-4 h-4 ml-0.5" />
              </a>

              {/* Button 2: Copy Link */}
              <button
                onClick={handleCopyLink}
                className="w-full sm:w-auto btn-gold-royal inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base sm:text-lg"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-5 h-5 text-[#240202]" />
                    <span className="font-semibold">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-5 h-5 text-[#240202]" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

            </div>

            {/* Subtle URL display */}
            <p className="font-mono text-xs text-[#D4A843]/80 tracking-wide mt-5 text-center break-all">
              {cardUrl}
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
