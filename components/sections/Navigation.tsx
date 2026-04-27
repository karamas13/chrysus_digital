"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Agency', href: '#agency' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-500 border ${
          isScrolled 
            ? 'bg-tertiary-950/80 backdrop-blur-xl border-tertiary-800 py-2 shadow-2xl' 
            : 'bg-transparent border-transparent py-4'
        }`}
      >
        {/* Changed justify-evenly to justify-between */}
        <div className="flex items-center justify-between px-6 md:px-8">
          
          {/* 1. Left Lane: Logo (Set to 33% width to balance the nav) */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="relative h-12 w-80 md:h-16 md:w-62 transition-transform active:scale-95">
              <Image 
                src="/images/Logo.avif" 
                alt="Chrysus Digital Logo"
                fill
                className="object-cover object-left" 
                priority
              />
            </Link>
          </div>

          {/* 2. Middle Lane: Nav Links (Centered perfectly) */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-tertiary-400 hover:text-main-400 transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. Right Lane: Actions (Aligned to end) */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <button className="hidden sm:block btn-secondary !px-4 !py-2 !text-[9px]">
              Start Project
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-main-400 hover:bg-main-400/10 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M4 12h16M4 6h16M12 18h8"/>}
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 p-8 bg-tertiary-900 border border-tertiary-800 rounded-3xl shadow-2xl md:hidden z-50 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold uppercase tracking-[0.2em] text-tertiary-100"
                >
                  {link.name}
                </Link>
              ))}
              <button className="btn-primary w-full">Let's Talk</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}