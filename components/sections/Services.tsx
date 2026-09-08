"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Services() {
  return (
    <section className="py-24 bg-[#030303]" id="services">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-[10px] font-bold text-main-400 uppercase tracking-[0.4em] mb-4 font-mono">
            ΔΥΝΑΤΟΤΗΤΕΣ
          </h2>
          <p className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
            Παροχή  <span className="text-zinc-500 italic font-serif font-light lowercase">Υπηρεσιών</span>
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:h-130">
          
          {/* Box 1: AI Receptionist (The Flagship) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-10 relative overflow-hidden group transition-all duration-500 hover:border-main-500/50"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-main-400 text-[10px] font-bold uppercase tracking-widest bg-main-400/10 px-3 py-1 rounded-full font-mono">AI Protocol</span>
                <h3 className="text-3xl font-bold text-white mt-6 mb-4">24/7 Έξυπνη <br />Τηλεφωνική Υποδοχή</h3>
                <p className="text-zinc-400 max-w-xs text-sm leading-relaxed">
                  Η AI receptionist απαντά αμέσως σε κάθε κλήση, λύνει απορίες και καταγράφει τα στοιχεία των ασθενών σας 24 ώρες το 24ωρο.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-main-500 text-xs font-bold uppercase tracking-widest mt-5">Σταθερό μηνιαίο κόστος χωρίς κρυφές χρεώσεις</p>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-main-500/10 rounded-full blur-[80px] group-hover:bg-main-500/20 transition-all duration-700" />
          </motion.div>
         
         
             {/* Box 2: WebDev */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-10 relative overflow-hidden group transition-all duration-500 hover:border-details-500/50"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-details-400 text-[10px] font-bold uppercase tracking-widest bg-details-400/10 px-3 py-1 rounded-full font-mono">Web Development</span>
                <h3 className="text-3xl font-bold text-white mt-6 mb-4">Ανάπτυξη <br />Ιστοσελίδας</h3>
                <p className="text-zinc-400 max-w-xs text-sm leading-relaxed">
                  Ανάπτυξη επαγγελματικής ιστοσελίδας, με πλήρη προσαρμογή στις προσωπικές σας ανάγκες και προτιμήσεις.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-details-500 text-xs font-bold uppercase tracking-widest mt-5">Εφάπαξ πληρωμή</p>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-details-500/10 rounded-full blur-[80px] group-hover:bg-details-500/20 transition-all duration-700" />
          </motion.div>

          


       

        </div>
         {/* Link to Services Page */}
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 text-sm font-mono tracking-widest uppercase group"
            >
              <span>Δειτε αναλυτικα ολες τις υπηρεσιες</span>
              <svg
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