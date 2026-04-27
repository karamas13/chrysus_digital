"use client";

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your brand's DNA to uncover the unique value proposition that sets you apart.",
  },
  {
    number: "02",
    title: "Bespoke Design",
    description: "Our artisans craft a visual language that balances high-end luxury with modern functionality.",
  },
  {
    number: "03",
    title: "Technical Excellence",
    description: "Built on the gold standard of modern tech stacks for lightning-fast performance.",
  },
  {
    number: "04",
    title: "Launch & Legacy",
    description: "We ensure your digital asset continues to command authority long after the initial launch.",
  }
];

export default function Process() {
  const containerRef = useRef(null);
  
  // 1. Smoother Scroll Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  // 2. Spring Physics: This makes the line move "smoothly" rather than rigidly
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-24 bg-tertiary-950 relative overflow-hidden" id="process">
      <div className="container mx-auto px-6 relative">
        
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold text-details-400 uppercase tracking-[0.4em] mb-4">
            The Methodology
          </h2>
          <p className="text-4xl md:text-6xl font-black text-tertiary-50 tracking-tight uppercase">
            How we mint <span className="text-main-400">gold</span>
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          
          {/* THE NEON LINE: Mobile (Left) | Desktop (Center) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-tertiary-900 -translate-x-1/2" />
          
          <motion.div 
            style={{ scaleY }}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-details-500 to-details-300 -translate-x-1/2 shadow-[0_0_15px_rgba(0,245,255,0.6)] origin-top z-10"
          />

          <div className="space-y-16 md:space-y-32">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center justify-between ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="ml-12 md:ml-0 w-[calc(100%-48px)] md:w-[42%] p-8 rounded-3xl border border-tertiary-800 bg-tertiary-900/30 backdrop-blur-md relative group hover:border-details-500/40 transition-all duration-700"
                >
                  <span className="text-4xl font-black text-tertiary-800 absolute top-4 right-6 group-hover:text-main-400/20 transition-colors duration-700">
                    {step.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-tertiary-50 mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-tertiary-400 leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </motion.div>

                {/* Neon Node (Dot) */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center top-8 md:top-1/2 md:-translate-y-1/2">
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="w-3 h-3 rounded-full bg-tertiary-950 border-2 border-details-400 shadow-[0_0_10px_rgba(0,245,255,1)] z-20"
                  />
                </div>

                <div className="hidden md:block w-[42%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}