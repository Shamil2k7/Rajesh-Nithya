import "./globals.css";
import { weddingData } from "../data/weddingData";

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
      { url: "/rajesh-nithyar-reception/favicon.svg", type: "image/svg+xml" },
      { url: "/rajesh-nithyar-reception/favicon.ico" },
    ],
    shortcut: "/rajesh-nithyar-reception/favicon.svg",
    apple: "/rajesh-nithyar-reception/favicon.svg",
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
    <html lang="en">
      <body className="antialiased selection:bg-[#D4A843] selection:text-[#240202]">
        {children}
      </body>
    </html>
  );
}
