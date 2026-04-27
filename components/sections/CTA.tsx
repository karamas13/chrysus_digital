"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 bg-tertiary-950 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-main-400/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto rounded-[3rem] border border-tertiary-800 bg-tertiary-900/20 backdrop-blur-md p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

          <h2 className="text-xs font-bold text-main-400 uppercase tracking-[0.5em] mb-6">
            Begin the Journey
          </h2>
          
          <h3 className="text-4xl md:text-7xl font-black text-tertiary-50 tracking-tight mb-8 leading-[1.1]">
            READY TO MINT YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-main-200 via-main-400 to-main-700">
              DIGITAL LEGACY?
            </span>
          </h3>

          <p className="text-tertiary-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            We are currently accepting a limited number of high-impact projects for 2026. 
            Secure your brand's position at the top of the digital hierarchy.
          </p>

          <div className="flex flex-col items-center w-full max-w-md mx-auto mt-12">
           <form className="relative w-full group">
               <input 
                 type="email" 
                 placeholder="Enter your professional email" 
                 className="w-full bg-tertiary-950/50 border border-tertiary-800 rounded-full px-8 py-5 text-tertiary-100 outline-none focus:border-main-500/50 transition-all duration-500 placeholder:text-tertiary-600"
               />
               <button 
                 type="submit"
                 className="absolute right-2 top-2 bottom-2 px-6 bg-main-400 hover:bg-main-300 text-tertiary-950 font-bold rounded-full text-xs uppercase tracking-widest transition-all duration-300 active:scale-95"
               >
                 Join the Waitlist
               </button>
             </form>
             <p className="mt-4 text-[10px] text-tertiary-500 uppercase tracking-[0.2em]">
               Limited availability for Q2 2026
             </p>
          </div>

          {/* Decorative Corner Neon Lines */}
          <div className="absolute top-0 left-0 w-24 h-[1px] bg-gradient-to-r from-details-500 to-transparent" />
          <div className="absolute top-0 left-0 h-24 w-[1px] bg-gradient-to-b from-details-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}