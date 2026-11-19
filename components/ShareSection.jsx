"use client";

import React, { useState } from "react";
import { Share2, Copy, Check, MessageCircle, ExternalLink, Send } from "lucide-react";
import { GoldenDivider, CornerOrnament } from "./DecorativeOrnaments";

export default function ShareSection() {
  const [copiedText, setCopiedText] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedLinkType, setSelectedLinkType] = useState("reception"); // "reception" or "wedding"

  const receptionUrl = "https://www.weddinginvitelik.ink/rajesh-nithyar-reception";
  const weddingUrl = "https://www.weddinginvitelik.ink/rajesh-nithya";

  const activeUrl = selectedLinkType === "reception" ? receptionUrl : weddingUrl;

  const invitationMessage = `🌸 *Wedding Invitation* 🌸

Together with their families, *Rajesh Kumar E R* and *Nithya Suni* cordially invite you to join the occasion of their joyous commitment.

🗓 *Date:* Thursday, January 07, 2027
⏰ *Time:* 9:30 AM
📍 *Venue:* SREE KRISHNA TEMPLE, GURUVAYUR

View our wedding card here:
${activeUrl}`;

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(invitationMessage)}`;

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(invitationMessage);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2500);
    } catch (e) {
      console.warn("Clipboard copy failed", e);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(activeUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch (e) {
      console.warn("Clipboard copy failed", e);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="wedding-container max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="font-heading text-xs sm:text-sm tracking-[0.35em] text-[#D4A843] uppercase mb-2 font-medium">
            Share the Celebration
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#FFF1D0] tracking-wide font-semibold drop-shadow-[0_2px_10px_rgba(244,215,122,0.3)]">
            Send via WhatsApp
          </h2>
          <GoldenDivider width="45%" className="my-3" />
          <p className="font-body text-sm sm:text-base text-[#FFF1D0]/80 max-w-lg mx-auto">
            Share this auspicious invitation with your beloved family, relatives, and friends on WhatsApp or copy the invitation link.
          </p>
        </div>

        {/* Traditional Royal Sharing Container */}
        <div className="relative bg-gradient-to-b from-[#570A0A] via-[#480808] to-[#360505] border-2 border-[#D4A843]/60 rounded-sm p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
          {/* Inner Accent Border */}
          <div className="absolute inset-2 sm:inset-3 border border-[#F4D77A]/25 pointer-events-none rounded-[2px]" />
          
          {/* Corner Flourishes */}
          <CornerOrnament position="top-left" size={65} className="absolute top-1 left-1 opacity-70" />
          <CornerOrnament position="top-right" size={65} className="absolute top-1 right-1 opacity-70" />

          <div className="relative z-10 flex flex-col items-center">
            
            {/* Link Selector Tabs */}
            <div className="flex items-center gap-2 mb-6 p-1 rounded-full bg-[#2A0303] border border-[#D4A843]/40">
              <button
                onClick={() => setSelectedLinkType("reception")}
                className={`px-4 py-1.5 rounded-full text-xs font-heading tracking-wider uppercase transition-all ${
                  selectedLinkType === "reception"
                    ? "bg-gradient-to-r from-[#D4A843] to-[#F4D77A] text-[#240202] font-semibold shadow-md"
                    : "text-[#FFF1D0]/75 hover:text-[#FFF1D0]"
                }`}
              >
                Reception Link (/rajesh-nithyar-reception)
              </button>
              <button
                onClick={() => setSelectedLinkType("wedding")}
                className={`px-4 py-1.5 rounded-full text-xs font-heading tracking-wider uppercase transition-all ${
                  selectedLinkType === "wedding"
                    ? "bg-gradient-to-r from-[#D4A843] to-[#F4D77A] text-[#240202] font-semibold shadow-md"
                    : "text-[#FFF1D0]/75 hover:text-[#FFF1D0]"
                }`}
              >
                Ceremony Link (/rajesh-nithya)
              </button>
            </div>

            {/* Formatted Message Preview Box */}
            <div className="w-full bg-[#2E0404]/90 border border-[#D4A843]/40 rounded-sm p-5 sm:p-7 text-left font-body text-sm sm:text-base leading-relaxed text-[#FFF1D0] shadow-inner mb-6 relative group">
              <div className="absolute top-3 right-3 text-xs font-heading uppercase tracking-widest text-[#D4A843]/70">
                Message Preview
              </div>

              <div className="whitespace-pre-line select-all font-mono text-xs sm:text-sm text-[#FDF4DC] pt-2">
                {invitationMessage}
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              
              {/* Button 1: Share on WhatsApp */}
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm bg-[#25D366] hover:bg-[#20BD5A] text-white font-heading font-semibold text-sm sm:text-base tracking-wider uppercase shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 text-decoration-none"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Share on WhatsApp</span>
                <Send className="w-4 h-4 ml-0.5" />
              </a>

              {/* Button 2: Copy Message */}
              <button
                onClick={handleCopyText}
                className="w-full sm:w-auto btn-gold-outline inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base"
              >
                {copiedText ? (
                  <>
                    <Check className="w-4 h-4 text-[#F4D77A]" />
                    <span className="text-[#F4D77A] font-semibold">Message Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>

              {/* Button 3: Copy Card Link Only */}
              <button
                onClick={handleCopyLink}
                className="w-full sm:w-auto btn-gold-outline inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-[#F4D77A]" />
                    <span className="text-[#F4D77A] font-semibold">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

            </div>

            {/* Link destination confirmation */}
            <div className="mt-4 text-center">
              <p className="text-xs text-[#D4A843]/80 font-mono break-all">
                Card Link: <span className="underline">{activeUrl}</span>
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
