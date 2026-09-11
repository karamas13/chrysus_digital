"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "ΑΡΧΙΚΗ", href: "/" },
  { name: "Πακέτα", href: "/pricing" }, 
  { name: "Υπηρεσίες", href: "/services" },
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
    <nav className="absolute top-0 left-0 w-full z-[100] px-4 md:px-6 py-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-500 border ${
          isScrolled 
            ? "bg-tertiary-950/80 backdrop-blur-xl border-white/10 py-2 shadow-2xl" 
            : "bg-transparent border-transparent py-4"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-8">
          
          {/* 1. LOGO */}
          <div className="flex-1 flex justify-start">
            <Link 
              href="/" 
              className="relative w-40 h-10 md:w-48 md:h-12 transition-transform active:scale-95"
              aria-label="Αρχική σελίδα Chrysus Digital"
            >
              <Image 
                src="/images/Logo.avif" 
                alt="Chrysus Digital Logo"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                className="object-contain object-left" 
                priority
              />
            </Link>
          </div>

          {/* 2. NAV LINKS - Desktop */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="text-[13px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-main-400 transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* 3. ACTIONS & MOBILE TOGGLE */}
          <div className="flex-1 flex justify-end items-center gap-4">          
            <button 
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-main-400 hover:bg-main-400/10 rounded-lg transition-colors cursor-pointer"
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

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop to close menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] md:hidden"
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-24 left-4 right-4 p-8 bg-tertiary-950 border border-white/10 rounded-3xl shadow-2xl md:hidden z-50"
            >
              <ul className="flex flex-col gap-8 items-center">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-200 hover:text-main-400 transition-colors"
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
    </nav>
  );
}