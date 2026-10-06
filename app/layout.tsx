import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import PageTransition from '@/components/PageTransition'; 
import { preload } from 'react-dom';




// Initialize fonts
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-space',
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  preload('/images/bgimg2.jpg', { 
    as: 'image', 
    fetchPriority: 'high' 
  } as any);

  return (
    <html lang="el" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <link rel="preload" as="image" href="/images/Logo.avif" fetchPriority="high" />
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