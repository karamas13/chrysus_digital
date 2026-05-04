"use client";

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Σύνδεση Αριθμού",
    description: "Συνδέουμε το υπάρχον τηλέφωνο του ιατρείου σας με το σύστημα AI μέσα σε λίγα λεπτά, χωρίς αλλαγή παρόχου.",
  },
  {
    number: "02",
    title: "Εκπαίδευση AI",
    description: "Τροφοδοτούμε την AI με τις πληροφορίες του ιατρείου σας: ωράριο, υπηρεσίες, τιμές και προτιμήσεις επικοινωνίας.",
  },
  {
    number: "03",
    title: "Αυτόματη Υποδοχή",
    description: "Η AI απαντά αμέσως σε κάθε κλήση, λύνει απορίες και καταγράφει τα στοιχεία των ενδιαφερόμενων ασθενών.",
  },
  {
    number: "04",
    title: "Ενημέρωση Ομάδας",
    description: "Λαμβάνετε άμεσα ειδοποίηση με την περίληψη της κλήσης, ώστε να κλείσετε το ραντεβού με ένα κλικ.",
  }
];

export default function Process() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 20%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-24 bg-[#030303] relative overflow-hidden" id="process">
      <div className="container mx-auto px-6 relative">
        
        <div className="text-center mb-20">
          <h2 className="text-[10px] font-bold text-main-400 uppercase tracking-[0.4em] mb-4 font-mono">
            Η ΜΕΘΟΔΟΛΟΓΙΑ ΜΑΣ
          </h2>
          <p className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
            ΠΩΣ  <span className="text-main-500">ΛΕΙΤΟΥΡΓΕΙ</span>
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          
          {/* THE NEON LINE */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2" />
          
          <motion.div 
            style={{ scaleY }}
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-details-600 to-details-300 -translate-x-1/2 shadow-[0_0_15px_rgba(212,175,55,0.8)] origin-top z-10"
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
                  className="ml-12 md:ml-0 w-[calc(100%-48px)] md:w-[42%] p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20 backdrop-blur-md relative group hover:border-main-500/40 transition-all duration-700"
                >
                  <span className="text-4xl font-black text-zinc-800 absolute top-4 right-6 group-hover:text-main-500/20 transition-colors duration-700 font-mono">
                    {step.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </motion.div>

                {/* Neon Node (Dot) */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center top-8 md:top-1/2 md:-translate-y-1/2">
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="w-2 h-2 rounded-full bg-[#030303] border border-details-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-20"
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