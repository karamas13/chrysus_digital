"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

// Explicitly typing the variants to avoid naming conflicts
const heroStaggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <div className="min-h-screen w-full relative font-mono">
    {/* Golden Horizon Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 90%), #050505",
      }}
    />
  
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Visuals (Concept 1 & 2 Hybrid) */}
      <div className="absolute inset-0 pointer-events-none">
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={heroStaggerVariants} // Explicitly mapped
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.span 
            variants={fadeUpVariants}
            className="inline-block py-1 px-4 rounded-full border border-main-800 bg-main-950/30 text-main-300 text-xs font-bold tracking-[0.3em] uppercase mb-8"
          >
            CHRYSUS DIGITAL
          </motion.span>

          {/* Main Heading */}
          <motion.h1 
            variants={fadeUpVariants}
            className="text-5xl md:text-8xl font-black text-tertiary-50 leading-[1.1] mb-8"
          >
            ΤΗΛΕΦΩΝΙΚΗ ΥΠΟΔΟΧΗ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-main-300 via-main-400 to-main-700">
              AI
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={fadeUpVariants}
            className="text-tertiary-300 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
           Μην αφήνετε χαμένες κλήσεις να γίνονται χαμένα ραντεβού.
           AI τηλεφωνική υποδοχή για οδοντιατρεία που απαντά 24/7, καταγράφει σωστά τα αιτήματα των ασθενών και βοηθά το ιατρείο σας να μη χάνει νέες ευκαιρίες.

          </motion.p>

          {/* Buttons using your custom @layer utility classes */}
          <motion.div 
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="btn-primary">
              Κλείστε Δωρεάν Demo
            </button>
            <button className="btn-secondary">
              Δείτε Πώς Λειτουργεί
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </div>
  );
}


