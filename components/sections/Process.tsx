"use client";

import { motion } from "framer-motion";

interface ProcessStep {
  number: string;
  stage: string;
  title: string;
  description: string;
  highlight: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    stage: "ΧΑΡΤΟΓΡΑΦΗΣΗ",
    title: "Συλλογή & Κανόνες",
    description: "Καταγράφουμε το ωράριο, τις υπηρεσίες, τον τιμοκατάλογο και τις ροές εργασίας της επιχείρησής σας.",
    highlight: "100% προσαρμογή στις ανάγκες σας",
  },
  {
    number: "02",
    stage: "ΔΙΑΣΥΝΔΕΣΗ",
    title: "Ενοποίηση Συστημάτων",
    description: "Συνδέουμε το ημερολόγιο, το CRM, την τηλεφωνία και τους επιθυμητούς αυτοματισμούς.",
    highlight: "Χωρίς αλλαγή τηλεφωνικού παρόχου",
  },
  {
    number: "03",
    stage: "ΕΚΠΑΙΔΕΥΣΗ",
    title: "Δοκιμές & Ασφάλεια",
    description: "Εκπαιδεύουμε το AI σε σενάρια κρατήσεων, ακυρώσεων και εκτός ωραρίου κλήσεων.",
    highlight: "Εξαντλητικός εσωτερικός έλεγχος",
  },
  {
    number: "04",
    stage: "ΕΝΑΡΞΗ",
    title: "24/7 Πλήρης Λειτουργία",
    description: "Ενεργοποιούμε την αυτόματη εκτροπή. Οι AI Agents αναλαμβάνουν άμεσα την εξυπηρέτηση.",
    highlight: "Μηδενικές χαμένες ευκαιρίες",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-20 sm:py-28 bg-[#030303] relative overflow-hidden text-zinc-100"
    >
      {/* 1. Subtle Tech Grid Pattern Overlay */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
      />

      {/* 2. Background Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-80 bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">         
          <h2 
            id="process-heading"
            className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Πώς Τίθεται Σε <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-400 to-amber-100">
              Πλήρη Λειτουργία
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-xs sm:text-base font-light leading-relaxed">
            4 απλά βήματα για την πλήρη ενεργοποίηση των AI Agents & αυτοματοποιήσεων στην επιχείρησή σας.
          </p>
        </header>

        {/* Horizontal Process Grid Container */}
        <div className="relative">
          
          {/* Horizontal Connecting Line (Desktop) */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-[27px] left-[10%] right-[10%] h-px bg-gradient-to-r from-amber-500/20 via-amber-500/60 to-amber-500/20 z-0" 
          />

          {/* Steps Horizontal Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md hover:border-amber-500/40 hover:bg-zinc-900/70 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Step Node & Number Header */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Circle Stepper Node */}
                    <div className="w-10 h-10 rounded-full bg-[#030303] border border-amber-500/40 group-hover:border-amber-400 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.15)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all duration-300">
                      <span className="text-xs font-mono font-bold text-amber-400">
                        {step.number}
                      </span>
                    </div>

                    {/* Stage Tag */}
                    <span className="text-[10px] font-mono font-medium tracking-widest text-zinc-400 uppercase bg-zinc-800/60 border border-zinc-700/50 px-2.5 py-1 rounded-md">
                      {step.stage}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-amber-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Highlight Badge Footer */}
                <div className="pt-3 border-t border-zinc-800/60 flex items-center gap-2">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
                  <span className="text-[11px] font-medium text-amber-300/90 tracking-wide truncate">
                    {step.highlight}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}