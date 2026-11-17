/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          950: "#1A0202",
          900: "#240202",
          800: "#3D0505",
          700: "#570A0A",
          600: "#6B0D0D",
          500: "#801212",
        },
        gold: {
          100: "#FFF8E6",
          200: "#FFF1D0",
          300: "#FBE3A1",
          400: "#F4D77A",
          500: "#D4A843",
          600: "#B88A2E",
          700: "#9C7021",
          800: "#7A5416",
        },
        cream: "#FFF1D0",
      },
      fontFamily: {
        calligraphy: ["var(--font-great-vibes)", "cursive"],
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-lora)", "Garamond", "serif"],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(244, 215, 122, 0.4)',
        'royal-card': '0 20px 50px rgba(0, 0, 0, 0.75), inset 0 0 40px rgba(36, 2, 2, 0.6)',
      },
    },
  },
  plugins: [],
};
