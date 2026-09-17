"use client";

import { motion } from "framer-motion";
import ContactFlashcards from "@/components/ui/ContactFlashcards";

export default function CTA() {
  return (
    <section 
      id="cta"
      aria-labelledby="cta-heading"
      className="relative py-24 sm:py-32 md:py-40 bg-[#030303] overflow-hidden"
    >
      {/* 1. Subtle Tech Grid Pattern Overlay */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
      />

      {/* 2. Tri-Color Ambient Spotlights (Amber, Cyan, Emerald) */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/4 -translate-x-1/2 w-80 h-80 bg-amber-500/6 blur-[140px] rounded-full pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/6 blur-[160px] rounded-full pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-1/3 right-1/4 translate-x-1/2 w-80 h-80 bg-emerald-500/6 blur-[140px] rounded-full pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Open Header (Without Container Limits) */}
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          {/* Status Tag */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-[0.25em] text-zinc-400 uppercase">
              ΕΚΔΗΛΩΣΗ ΕΝΔΙΑΦΕΡΟΝΤΟΣ
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            id="cta-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]"
          >
            Εκσυγχρονίστε την <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-400 to-amber-100">
              επιχείρησή σας
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-zinc-400 text-xs sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed"
          >
            Αποκτήστε 24/7 αυτόματη εξυπηρετείση, σύγχρονη ιστοσελίδα και αυτοματοποιημένες ροές εργασίας. Συμπληρώστε τα στοιχεία σας παρακάτω!
          </motion.p>
        </header>

        {/* Minimal Subtle Divider Line */}
       

        {/* Contact Flashcards Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10"
        >
          <ContactFlashcards />
        </motion.div>

      </div>
    </section>
  );
}