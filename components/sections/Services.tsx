"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  return (
    <section 
      id="services"
      aria-labelledby="services-heading"
      className="py-24 bg-[#030303]"
    >
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <header className="mb-16">
          <span className="text-[10px] font-bold text-main-400 uppercase tracking-[0.4em] mb-4 font-mono block">
            ΔΥΝΑΤΟΤΗΤΕΣ
          </span>
          <h2 
            id="services-heading"
            className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase"
          >
            Παροχή <span className="text-zinc-500 italic font-serif font-light lowercase">Υπηρεσιών</span>
          </h2>
        </header>

        {/* Bento / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Box 1: AI Receptionist */}
          <motion.article 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-8 sm:p-10 relative overflow-hidden group transition-all duration-500 hover:border-main-500/50 flex flex-col justify-between min-h-[380px]"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-main-400 text-[10px] font-bold uppercase tracking-widest bg-main-400/10 px-3 py-1 rounded-full font-mono">
                  AI Protocol
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-6 mb-4">
                  24/7 Έξυπνη <br />Τηλεφωνική Υποδοχή
                </h3>
                <p className="text-zinc-400 max-w-sm text-sm leading-relaxed font-light">
                  Η AI receptionist απαντά αμέσως σε κάθε κλήση ασθενούς, λύνει απορίες και καταγράφει τα στοιχεία των ραντεβού σας 24 ώρες το 24ωρο.
                </p>
              </div>
              <div className="pt-6">
                <p className="text-main-500 text-xs font-bold uppercase tracking-widest">
                  Σταθερό μηνιαίο κόστος χωρίς κρυφές χρεώσεις
                </p>
              </div>
            </div>
            <div 
              aria-hidden="true" 
              className="absolute -bottom-20 -right-20 w-64 h-64 bg-main-500/10 rounded-full blur-[80px] group-hover:bg-main-500/20 transition-all duration-700 pointer-events-none" 
            />
          </motion.article>
         
          {/* Box 2: WebDev */}
          <motion.article 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-8 sm:p-10 relative overflow-hidden group transition-all duration-500 hover:border-details-500/50 flex flex-col justify-between min-h-[380px]"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-details-400 text-[10px] font-bold uppercase tracking-widest bg-details-400/10 px-3 py-1 rounded-full font-mono">
                  Web Development
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-6 mb-4">
                  Ανάπτυξη <br />Ιστοσελίδας Ιατρείου
                </h3>
                <p className="text-zinc-400 max-w-sm text-sm leading-relaxed font-light">
                  Σχεδιασμός & ανάπτυξη σύγχρονης, ταχύτατης ιστοσελίδας οδοντιατρείου, με πλήρη προσαρμογή στις προσωπικές σας ανάγκες.
                </p>
              </div>
              <div className="pt-6">
                <p className="text-details-500 text-xs font-bold uppercase tracking-widest">
                  Εφάπαξ πληρωμή
                </p>
              </div>
            </div>
            <div 
              aria-hidden="true" 
              className="absolute -bottom-20 -right-20 w-64 h-64 bg-details-500/10 rounded-full blur-[80px] group-hover:bg-details-500/20 transition-all duration-700 pointer-events-none" 
            />
          </motion.article>

        </div>

        {/* Link to Services Page */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 text-sm font-mono tracking-widest uppercase group"
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