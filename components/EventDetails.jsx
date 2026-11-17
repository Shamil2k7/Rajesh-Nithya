"use client";

import React from "react";
import { Calendar, Clock, MapPin, CalendarPlus } from "lucide-react";
import { GoldenDivider } from "./DecorativeOrnaments";
import { weddingData } from "../data/weddingData";

export default function EventDetails() {
  const { event, venue } = weddingData;

  // Generate Google Calendar Link
  const getGoogleCalendarUrl = () => {
    const year = event.eventYear;
    // January is month 01. 4 PM to 8 PM IST (16:00 to 20:00 IST is 10:30 to 14:30 UTC)
    // 2027-01-08 16:00 IST = 20270108T103000Z
    const startDate = `${year}0108T103000Z`;
    const endDate = `${year}0108T143000Z`;
    const title = encodeURIComponent(`Wedding Reception: Rajesh Kumar & Nithya Suni`);
    const details = encodeURIComponent(`You are cordially invited to celebrate the wedding reception of Rajesh Kumar & Nithya Suni.\nVenue: ${venue.fullAddress}`);
    const location = encodeURIComponent(venue.fullAddress);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="wedding-container max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-heading text-xs sm:text-sm tracking-[0.35em] text-[#D4A843] uppercase mb-2 font-medium">
            {event.conductedText}
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#FFF1D0] tracking-wide font-semibold drop-shadow-[0_2px_10px_rgba(244,215,122,0.3)]">
            Save the Date
          </h2>
          <GoldenDivider width="45%" className="my-3" />
        </div>

        {/* 3 Traditional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1: Date */}
          <div className="relative group bg-gradient-to-b from-[#570A0A] to-[#380404] border border-[#D4A843]/50 rounded-sm p-6 sm:p-8 text-center shadow-lg hover:border-[#F4D77A] transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-1.5 border border-[#F4D77A]/20 pointer-events-none rounded-[2px]" />
            <div className="w-12 h-12 mx-auto rounded-full bg-[#3D0505] border border-[#D4A843] flex items-center justify-center mb-4 text-[#F4D77A] group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6" />
            </div>
            <p className="font-heading text-xs tracking-[0.25em] uppercase text-[#D4A843] mb-1">
              Date
            </p>
            <h3 className="font-heading text-xl sm:text-2xl text-[#FFF1D0] font-semibold mb-1">
              {event.displayDate}
            </h3>
            <p className="font-heading text-sm text-[#F4D77A] tracking-widest font-medium">
              {event.eventYear}
            </p>
          </div>

          {/* Card 2: Time */}
          <div className="relative group bg-gradient-to-b from-[#570A0A] to-[#380404] border border-[#D4A843]/50 rounded-sm p-6 sm:p-8 text-center shadow-lg hover:border-[#F4D77A] transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-1.5 border border-[#F4D77A]/20 pointer-events-none rounded-[2px]" />
            <div className="w-12 h-12 mx-auto rounded-full bg-[#3D0505] border border-[#D4A843] flex items-center justify-center mb-4 text-[#F4D77A] group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <p className="font-heading text-xs tracking-[0.25em] uppercase text-[#D4A843] mb-1">
              Timing
            </p>
            <h3 className="font-heading text-xl sm:text-2xl text-[#FFF1D0] font-semibold mb-1">
              {event.timeDisplay}
            </h3>
            <p className="font-heading text-sm text-[#F4D77A] tracking-wider italic">
              ({event.originalCardTime})
            </p>
          </div>

          {/* Card 3: Venue */}
          <div className="relative group bg-gradient-to-b from-[#570A0A] to-[#380404] border border-[#D4A843]/50 rounded-sm p-6 sm:p-8 text-center shadow-lg hover:border-[#F4D77A] transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-1.5 border border-[#F4D77A]/20 pointer-events-none rounded-[2px]" />
            <div className="w-12 h-12 mx-auto rounded-full bg-[#3D0505] border border-[#D4A843] flex items-center justify-center mb-4 text-[#F4D77A] group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <p className="font-heading text-xs tracking-[0.25em] uppercase text-[#D4A843] mb-1">
              Venue
            </p>
            <h3 className="font-heading text-xl sm:text-2xl text-[#FFF1D0] font-semibold mb-1">
              {venue.name}
            </h3>
            <p className="font-heading text-sm text-[#F4D77A] tracking-wide">
              {venue.address}
            </p>
          </div>

        </div>

        {/* Add to Calendar Action */}
        <div className="mt-10 flex justify-center">
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline inline-flex items-center gap-2 group"
          >
            <CalendarPlus className="w-4 h-4 text-[#F4D77A] group-hover:scale-110 transition-transform" />
            <span>Add Event to Google Calendar</span>
          </a>
        </div>

      </div>
    </section>
  );
}
