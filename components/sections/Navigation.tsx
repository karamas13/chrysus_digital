"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "ΑΡΧΙΚΗ", href: "/" },
  { name: "Υπηρεσίες", href: "/services" },
  { name: "Πακέτα", href: "/pricing" }, 
  { name: "Επικοινωνία", href: "/contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll Handler
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock Body Scroll & Keyboard Escape Handler for Mobile Menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 md:px-6 py-3 transition-all duration-300">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 border ${
          isScrolled 
            ? "bg-zinc-950/85 backdrop-blur-md border-white/10 py-1.5 shadow-2xl" 
            : "bg-transparent border-transparent py-2"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 h-12 md:h-14">
          
          {/* 1. LOGO */}
          <div className="flex-1 flex justify-start items-center overflow-visible">
            <Link 
              href="/" 
              className="inline-flex items-center transition-transform active:scale-95 origin-left scale-110 sm:scale-125 md:scale-130 lg:scale-135"
              aria-label="Αρχική σελίδα Chrysus Digital"
            >
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
          </div>

          {/* 2. NAV LINKS - Desktop Only (lg screens & above) */}
          <ul className="hidden lg:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="text-[12px] lg:text-[13px] font-bold uppercase tracking-[0.25em] text-zinc-400 hover:text-amber-400 transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* 3. ACTIONS & MOBILE/TABLET TOGGLE */}
          <div className="flex-1 flex justify-end items-center gap-4">          
            <button 
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-zinc-200 hover:text-amber-400 hover:bg-zinc-900 rounded-lg transition-colors cursor-pointer"
              aria-label={isOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {isOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M4 12h16M4 6h16M12 18h8"/>}
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile & Tablet Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
              aria-hidden="true"
            />

            {/* Mobile/Tablet Menu Content */}
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-20 left-4 right-4 p-8 bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl lg:hidden z-50"
            >
              <ul className="flex flex-col gap-6 items-center">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-200 hover:text-amber-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}            
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}