import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import PageTransition from '@/components/PageTransition'; // 1. Import του PageTransition

// Initialize fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="el" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-[#030303] text-white antialiased"> 
        <Navigation />
        
        {/* 2. Wrapping του main με το PageTransition */}
        <PageTransition>
          <main>{children}</main>
        </PageTransition>

        <Footer />
      </body>
    </html>
  );
}