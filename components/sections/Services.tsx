"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section className="py-24 bg-tertiary-950" id="services">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-xs font-bold text-main-400 uppercase tracking-[0.4em] mb-4">
            Our Capabilities
          </h2>
          <p className="text-4xl md:text-6xl font-black text-tertiary-50 tracking-tight uppercase">
            The Digital <span className="text-tertiary-500 italic font-serif font-light">Inventory</span>
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:h-[600px]">
          
          {/* Box 1: Large Featured Service (The "Flagship") */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bg-tertiary-900/40 border border-tertiary-800 rounded-[2.5rem] p-10 relative overflow-hidden group transition-all duration-500 hover:border-main-500/50"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-main-400 text-xs font-bold uppercase tracking-widest bg-main-400/10 px-3 py-1 rounded-full">Web Architecture</span>
                <h3 className="text-3xl font-bold text-tertiary-50 mt-6 mb-4">Full-Scale Digital <br />Foundations</h3>
                <p className="text-tertiary-400 max-w-xs">We build ultra-fast, SEO-optimized engines using Next.js 15, ensuring your brand never compromises on speed or security.</p>
              </div>
              <button className="text-main-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn Methodology <span>→</span>
              </button>
            </div>
            {/* Visual element - Abstract Gradient */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-main-400/10 rounded-full blur-[80px] group-hover:bg-main-400/20 transition-all duration-700" />
          </motion.div>

          {/* Box 2: Medium - UI/UX Design */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-1 bg-tertiary-900/40 border border-tertiary-800 rounded-[2.5rem] p-8 relative overflow-hidden group transition-all duration-500 hover:border-details-500/50"
          >
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center h-full">
              <div className="max-w-[60%]">
                <h3 className="text-2xl font-bold text-tertiary-50 mb-2">Luxury UI/UX</h3>
                <p className="text-tertiary-400 text-sm">Visual identities that command respect through minimalist aesthetics and gold-standard typography.</p>
              </div>
              <div className="mt-4 md:mt-0 p-4 bg-details-500/10 rounded-2xl border border-details-500/20 text-details-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 12V3"/><path d="M12 21v-9"/><path d="M21 12H3"/></svg>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Small - Performance */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-1 bg-tertiary-900/40 border border-tertiary-800 rounded-[2.5rem] p-8 group transition-all duration-500 hover:border-tertiary-600"
          >
            <div className="h-full flex flex-col justify-between">
              <div className="text-main-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
              </div>
              <div>
                <h4 className="text-tertiary-50 font-bold mb-1">Performance</h4>
                <p className="text-tertiary-500 text-xs">99+ Lighthouse scores guaranteed.</p>
              </div>
            </div>
          </motion.div>

          {/* Box 4: Small - E-Commerce */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-1 bg-details-500/5 border border-details-500/20 rounded-[2.5rem] p-8 group transition-all duration-500 hover:border-details-500/50"
          >
             <div className="h-full flex flex-col justify-between">
              <div className="text-details-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </div>
              <div>
                <h4 className="text-tertiary-50 font-bold mb-1">E-Commerce</h4>
                <p className="text-tertiary-500 text-xs">High-conversion Shopify & custom stores.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}