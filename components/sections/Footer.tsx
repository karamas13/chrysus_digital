"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  social: [
    { name: 'Instagram', href: 'https://www.instagram.com/chrysus.digital/' },
  ]
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030303] pt-10 pb-6 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-4">
          
          {/* Brand Info - More Compact */}
          <div className="flex flex-col items-start max-w-xs">
            <div className="relative h-8 w-40 mb-4">
              <Image 
                src="/images/Logo.avif"
                alt="Chrysus Digital"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-zinc-500 text-[11px] leading-relaxed uppercase tracking-wider font-mono">
              AI-Powered Receptionists για οδοντιατρεία που στοχεύουν στην κορυφή.
            </p>
          </div>

            <div className="flex flex-col items-start">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4 font-mono">
                Social
              </h4>
              <div className="flex flex-col gap-2">
                {footerLinks.social.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] text-zinc-400 hover:text-main-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Ultra Compact */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-600 uppercase tracking-widest font-mono mx-auto">
            © {currentYear} CHRYSUS DIGITAL
          </p>              
        </div>
    </footer>
  );
}