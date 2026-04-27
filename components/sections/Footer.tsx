"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  internal: [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Philosophy', href: '#agency' },
  ],
  social: [
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'X / Twitter', href: 'https://x.com' },
  ]
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tertiary-950 pt-24 pb-12 border-t border-tertiary-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start mb-20">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="relative h-12 w-80 mb-6">
              <Image 
                src="/images/Logo.avif" // Using your verified path
                alt="Chrysus Digital"
                fill
                className="object-cover object-left"
              />
            </div>
            <p className="text-tertiary-500 text-sm max-w-xs leading-relaxed">
              Minting the gold standard of digital experiences. High-performance architecture meets luxury aesthetics.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col items-center md:items-center">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-main-400 mb-6">
              Navigation
            </h4>
            <div className="flex flex-col items-center gap-4">
              {footerLinks.internal.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-sm text-tertiary-400 hover:text-tertiary-50 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-details-400 mb-6">
              Connect
            </h4>
            <div className="flex flex-col items-center md:items-end gap-4">
              {footerLinks.social.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-tertiary-400 hover:text-details-300 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-12 border-t border-tertiary-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-tertiary-600 uppercase tracking-widest">
            © {currentYear} CHRYSUS DIGITAL. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] text-tertiary-600 hover:text-tertiary-400 transition-colors uppercase tracking-widest">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[10px] text-tertiary-600 hover:text-tertiary-400 transition-colors uppercase tracking-widest">
              Terms of Service
            </Link>
          </div>

          {/* Small Decorative Neon Accent */}
          <div className="h-1 w-12 bg-gradient-to-r from-main-400 to-details-400 rounded-full opacity-50" />
        </div>
      </div>
    </footer>
  );
}