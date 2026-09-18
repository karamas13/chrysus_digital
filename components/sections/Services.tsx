"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  return (
    <section 
      id="services"
      aria-labelledby="services-heading"
      className="py-24 sm:py-32 bg-[#030303] relative overflow-hidden"
    >
      {/* 1. Subtle Tech Grid Pattern Overlay */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[3rem_3rem] md:bg-size-[3.5rem_3.5rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <header className="mb-16 text-center md:text-left">
          <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-[0.4em] mb-3 font-mono block">
            ΔΥΝΑΤΟΤΗΤΕΣ & ΠΥΛΩΝΕΣ
          </span>
          <h2 
            id="services-heading"
            className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase"
          >
            Παροχή <span className="text-zinc-500 italic font-serif font-light lowercase">Υπηρεσιών</span>
          </h2>
        </header>

        {/* Bento / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Box 1: AI Voice Agents (Amber Accent) */}
          <motion.article 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-8 sm:p-10 relative overflow-hidden group transition-all duration-500 hover:border-amber-500/50 flex flex-col justify-between min-h-95 backdrop-blur-sm"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-amber-400 text-[10px] font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full font-mono">
                  AI PROTOCOL
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-6 mb-4">
                  24/7 Έξυπνη <br />Τηλεφωνική Υποδοχή
                </h3>
                <p className="text-zinc-400 max-w-sm text-sm leading-relaxed font-light">
                  Ο AI Voice Agent απαντά αμέσως σε κάθε κλήση πελάτη, λύνει απορίες και καταγράφει τα στοιχεία των ραντεβού σας 24 ώρες το 24ωρο.
                </p>
              </div>
              <div className="pt-6">
                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest font-mono">
                  Σταθερό μηνιαίο κόστος χωρίς κρυφές χρεώσεις
                </p>
              </div>
            </div>
            <div 
              aria-hidden="true" 
              className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] group-hover:bg-amber-500/20 transition-all duration-700 pointer-events-none" 
            />
          </motion.article>

          {/* Box 2: Automations (Emerald Accent) */}
          <motion.article 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-8 sm:p-10 relative overflow-hidden group transition-all duration-500 hover:border-emerald-500/50 flex flex-col justify-between min-h-95 backdrop-blur-sm"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-mono">
                  WORKFLOWS & AUTOMATIONS
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-6 mb-4">
                  Αυτοματοποιήσεις <br />Διαδικασιών
                </h3>
                <p className="text-zinc-400 max-w-sm text-sm leading-relaxed font-light">
                  Σύνδεση των συστημάτων σας (CRM, Ημερολόγια), αυτόματες υπενθυμίσεις ραντεβού, οργάνωση δεδομένων και εξοικονόμηση δεκάδων ωρών.
                </p>
              </div>
              <div className="pt-6">
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest font-mono">
                  Βελτιστοποίηση παραγωγικότητας
                </p>
              </div>
            </div>
            <div 
              aria-hidden="true" 
              className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-all duration-700 pointer-events-none" 
            />
          </motion.article>

          {/* Box 3: Web Dev (Cyan Accent) */}
          <motion.article 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-8 sm:p-10 relative overflow-hidden group transition-all duration-500 hover:border-cyan-500/50 flex flex-col justify-between min-h-95 backdrop-blur-sm"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full font-mono">
                  WEB DEVELOPMENT
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-6 mb-4">
                  Ανάπτυξη <br />Σύγχρονης Ιστοσελίδας
                </h3>
                <p className="text-zinc-400 max-w-sm text-sm leading-relaxed font-light">
                  Σχεδιασμός & ανάπτυξη ultra-fast, σύγχρονης ιστοσελίδας ή Web App, πλήρως προσαρμοσμένης στις ανάγκες του brand σας.
                </p>
              </div>
              <div className="pt-6">
                <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest font-mono">
                  Εφάπαξ επένδυση & πλήρης ιδιοκτησία
                </p>
              </div>
            </div>
            <div 
              aria-hidden="true" 
              className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-all duration-700 pointer-events-none" 
            />
          </motion.article>

        </div>

        {/* Link to Services Page */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 text-xs sm:text-sm font-mono tracking-widest uppercase group"
          >
            <span>Δείτε αναλυτικά όλες τις υπηρεσίες</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-cyan-400 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}