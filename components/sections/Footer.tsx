import React from "react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  navigation: [
    { name: "Αρχική", href: "/" },
    { name: "Υπηρεσίες", href: "/services" },
    { name: "Πακέτα", href: "/pricing" },        
    { name: "Επικοινωνία", href: "/contact" },
  ],
  social: [
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/chrysus.digital/",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ]
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030303] pt-16 pb-8 border-t border-zinc-900 text-zinc-400 font-sans relative overflow-hidden">
      {/* Background Glow Effect */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-zinc-900 text-center items-center justify-items-center">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center space-y-2">
            <Link href="/" aria-label="Αρχική σελίδα Chrysus Digital" className="inline-block">
              <Image 
                 src="/images/Logo.avif" 
                 alt="Chrysus Digital Logo"
                 width={500}
                 height={125}
                 quality={100}
                 priority
                 unoptimized
                 className="w-32 sm:w-40 md:w-44 lg:w-48 h-auto object-contain" 
               />
            </Link>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-sm font-light uppercase tracking-wider font-mono">
              AI-Powered Receptionists για οδοντιατρεία που στοχεύουν στην κορυφή.
            </p>
            
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-[11px] font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>AI System Active</span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <nav aria-label="Πλοήγηση υποσέλιδου" className="flex flex-col items-center space-y-4">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400 font-mono">
              Πλοηγηση
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & Social Column */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400 font-mono">
              Επικοινωνια
            </h3>
            <div className="flex flex-col items-center space-y-3 text-xs">
              <a 
                href="mailto:contact@chrysusdigital.gr" 
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-amber-400 transition-colors duration-200 font-mono"
              >
                <span aria-hidden="true">✉</span> contact@chrysusdigital.gr
              </a>
              
              <div className="pt-2 flex flex-col items-center">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                  Social Media
                </span>
                <div className="flex justify-center gap-3">
                  {footerLinks.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-500/40 transition duration-200"
                      aria-label={`Ακολουθήστε μας στο ${item.name}`}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex justify-center items-center text-xs text-zinc-500 font-mono">
          <p className="tracking-wider text-center">
            © {currentYear} CHRYSUS DIGITAL. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
}