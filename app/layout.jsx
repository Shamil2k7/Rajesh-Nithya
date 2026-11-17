import { Great_Vibes, Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";
import { weddingData } from "../data/weddingData";

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const viewport = {
  themeColor: "#570A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: `${weddingData.groom.displayName} & ${weddingData.bride.displayName} - Wedding Reception Invitation`,
  description: `You are cordially invited to celebrate the wedding reception of ${weddingData.groom.fullName} and ${weddingData.bride.fullName} at ${weddingData.venue.name}, ${weddingData.venue.address}.`,
  keywords: ["Wedding Invitation", "Indian Wedding", "Reception", "Rajesh Kumar", "Nithya Suni", "VMM Arcade"],
  authors: [{ name: "Rajesh Kumar & Nithya Suni" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: `${weddingData.groom.displayName} & ${weddingData.bride.displayName} | Wedding Reception`,
    description: `Save the Date: ${weddingData.event.displayDate} at ${weddingData.venue.name}, ${weddingData.venue.address}`,
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${cormorantGaramond.variable} ${lora.variable}`}>
      <body className="antialiased selection:bg-[#D4A843] selection:text-[#240202]">
        {children}
      </body>
    </html>
  );
}
