"use client"

// app/layout.tsx
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';

// 1. Initialize the fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', // This creates a CSS variable
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 2. Add both font variables to the html class
    <html lang="gr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans"> 
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}