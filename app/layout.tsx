import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

// Premium Sans-Serif for body and technical UI (Cyan details)
const sans = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: '--font-sans' 
});

// Elegant Serif for high-end headings (Gold accents)
const serif = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ['400', '600', '700'],
  variable: '--font-serif' 
});

export const metadata: Metadata = {
  title: "Chrysus Digital | Bespoke Web Experiences",
  description: "Transforming digital presence into gold through high-end design and performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sans.variable} ${serif.variable} font-sans bg-tertiary-950 text-tertiary-100 antialiased`}>
        {/* You would place your Navigation component here so it stays on every page */}
        <Navigation />
        
        <main>{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}