/**
 * Wedding Information Data Source
 * 
 * All details are configured here to avoid hardcoding across multiple components.
 * Configurable year: Change `eventYear` below to any year.
 */

export const weddingData = {
  // Couple Details
  groom: {
    fullName: "Rajesh Kumar E R",
    displayName: "Rajesh Kumar",
    parents: "Mr. Radhakrishnan E V & Mrs. Ambika devi M D",
    relation: "Son of",
  },
  bride: {
    fullName: "Nithya Suni",
    displayName: "Nithya Suni",
    parents: "Mr. Suni Rajan & Mrs. Rajani Suni",
    relation: "Daughter of",
  },

  // Event Details
  event: {
    type: "Wedding Reception",
    title: "Reception of Rajesh Kumar & Nithya Suni",
    subtitle: "Together with our families, we invite you to celebrate a special occasion.",
    cordialMessage: "cordially invite you to the reception of their Son",
    conductedText: "which will be conducted on",
    dayOfWeek: "Friday",
    monthName: "January",
    dayNumber: "08",
    displayDate: "Friday, January 08",
    timeDisplay: "4:00 PM to 8:00 PM",
    originalCardTime: "4 to 8 pm",
    
    // Configurable Year
    // Set to 2027 by default to showcase live countdown; change as required
    eventYear: 2027,

    // Timezone & ISO timestamp (Indian Standard Time: UTC+05:30)
    // 4:00 PM is 16:00
    get targetIsoString() {
      const year = this.eventYear;
      return `${year}-01-08T16:00:00+05:30`;
    },
    timezone: "Asia/Kolkata",
    timezoneOffsetMinutes: 330, // +05:30
  },

  // Venue Details
  venue: {
    name: "VMM Arcade",
    address: "Karappuram",
    fullAddress: "VMM Arcade, Karappuram",
    googleMapsUrl: "https://maps.app.goo.gl/SmQajpNfCXqHx8Ci7",
    // Embeddable URL with Karappuram pin
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=VMM+Arcade,+Karappuram&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },

  // Opening & Closing text
  content: {
    invitationPreamble: "You Are Cordially Invited",
    openingButtonText: "Open Invitation",
    closingMessage: "We look forward to celebrating this beautiful occasion with you.",
    blessingText: "With best compliments from family, relatives & friends",
  },

  // Aesthetic Colors (Source of truth)
  theme: {
    primaryBg: "#570A0A",       // Main background deep maroon
    secondaryBg: "#3D0505",     // Secondary deeper maroon
    darkestBg: "#240202",       // Rich shadow maroon
    antiqueGold: "#D4A843",     // Classic Indian wedding antique gold
    brightGold: "#F4D77A",      // Highlight shimmering gold
    lightCream: "#FFF1D0",      // Soft golden cream text
    borderGold: "rgba(212, 168, 67, 0.4)",
  }
};

export default weddingData;
