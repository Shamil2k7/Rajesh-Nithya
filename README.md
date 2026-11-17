# 🪔 Rajesh Kumar & Nithya Suni — Wedding Reception Invitation Website

A premium, bespoke Indian wedding reception invitation website built with **Next.js (App Router)**, **React**, **GSAP**, and **Tailwind CSS / Custom CSS**, faithful to the traditional aesthetic of the physical wedding invitation card.

---

## 🌟 Highlights & Features

1. **Cinematic Royal Opening Experience (Section 1)**
   - Deep royal maroon backdrop with 4-corner gold filigree scrollwork.
   - Sacred glowing Om (ॐ) medallion with royal wax-seal envelope.
   - Subtle floating gold dust particles.
   - **"Open Invitation"** trigger with GSAP 3D envelope unfolding, card reveal, and celebratory gold confetti.

2. **Wedding Hero (Section 2)**
   - Grand calligraphy typography (*Great Vibes*) for **Rajesh Kumar & Nithya Suni**.
   - Traditional golden floral mandala watermark with slow meditative rotation.
   - Supporting invitation wording: *"Together with our families, we invite you to celebrate a special occasion."*

3. **Traditional Family Invitation (Section 3)**
   - Centered invitation-card framed layout matching the physical card:
     - **Mr. Radhakrishnan E V & Mrs. Ambika devi M D**
     - *cordially invite you to the reception of their Son*
     - **Rajesh Kumar E R & Nithya Suni**
     - *Daughter of* **Mr. Suni Rajan & Mrs. Rajani Suni**

4. **Event Details (Section 4)**
   - *"Save the Date"*
   - **Friday, January 08**
   - **4:00 PM to 8:00 PM** (*4 to 8 pm*)
   - **VMM Arcade, Karappuram**
   - One-click **"Add Event to Google Calendar"** button.

5. **Real-Time Countdown Timer (Section 5)**
   - Accurate countdown in **Indian Standard Time (IST, UTC+05:30)** showing Days, Hours, Minutes, and Seconds.
   - Configurable event year in `data/weddingData.js`.
   - Displays a graceful celebration message once the event time is reached.

6. **Venue & Navigation (Section 6)**
   - Heading: *"Join Us at the Celebration"*
   - **VMM Arcade, Karappuram**
   - Interactive Google Map embed with fallback card.
   - Prominent gold **"Get Directions"** button linking directly to [Google Maps](https://maps.app.goo.gl/SmQajpNfCXqHx8Ci7).

7. **Closing Greetings & Floral Mandala Ribbon (Section 7)**
   - *"We look forward to celebrating this beautiful occasion with you."*
   - Couple signature with sacred Om symbol.
   - Continuous gold floral mandala ribbon tiling identically to the bottom third of the original invitation card.

8. **Floating Location Navigation & Music Controls**
   - **Background Wedding Audio**: Features the uploaded wedding song playing seamlessly in the background with unobtrusive controls (`Music On` / `Music Off`), completely without exposing any track name.
   - **Floating Location Button**: Positioned at the bottom-right (`fixed bottom-6 right-6`), providing quick one-touch access to the venue details and Google Maps directions.
   - **R&N Monogram Favicon**: Custom vector gold monogram on royal maroon background for both browser tabs and mobile bookmarking ([`public/favicon.svg`](file:///d:/Mini_Project/Wedding_invitaion2/public/favicon.svg)).
   - **Utility Controls**: Bottom-left controls to re-experience the envelope opening animation or smoothly return to the top.

---

## 🎨 Color Palette & Typography

- **Main Background**: `#570A0A`
- **Secondary Background**: `#3D0505`
- **Antique Gold**: `#D4A843`
- **Bright Gold**: `#F4D77A`
- **Light Cream**: `#FFF1D0`
- **Couple Names Font**: *Great Vibes* (Google Fonts)
- **Headings Font**: *Cormorant Garamond* (Google Fonts)
- **Body Font**: *Lora* (Google Fonts)

---

## ⚙️ Configuration

All wedding details are centrally organized in [`data/weddingData.js`](file:///d:/Mini_Project/Wedding_invitaion2/data/weddingData.js).

To change the event year or any detail:
```javascript
// data/weddingData.js
export const weddingData = {
  // ...
  event: {
    eventYear: 2027, // <-- Change this to your desired year (e.g. 2026, 2027, etc.)
    // ...
  }
};
```

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start local development server
npm run dev -- -p 3005

# Build production bundle
npm run build
```
