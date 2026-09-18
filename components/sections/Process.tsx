"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

interface ProcessStep {
  number: string;
  tag: string;
  title: string;
  description: string;
  highlight: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    tag: "ΣΤΑΔΙΟ 1: ΧΑΡΤΟΓΡΑΦΗΣΗ",
    title: "Συλλογή & Παραμετροποίηση",
    description:
      "Καταγράφουμε το ωράριο, τις υπηρεσίες, τον τιμοκατάλογο, τους κανόνες κρατήσεων και τις απαντήσεις σε συχνές ερωτήσεις της επιχείρησής σας. Ορίζουμε τη δρομολόγηση κλήσεων και τις ροές εργασίας.",
    highlight: "Πλήρης προσαρμογή στις επιχειρησιακές σας ανάγκες.",
  },
  {
    number: "02",
    tag: "ΣΤΑΔΙΟ 2: ΔΙΑΣΥΝΔΕΣΗ",
    title: "Τηλεφωνία & Ψηφιακό Οικοσύστημα",
    description:
      "Διαμορφώνουμε την τηλεφωνική υποδομή και διασυνδέουμε τα συστήματά σας (Google/Outlook Calendar, CRM, Telegram/Viber alerts, Webhooks). Ο υφιστάμενος πάροχός σας παραμένει ως έχει.",
    highlight: "Απρόσκοπτη σύνδεση χωρίς αλλαγή τηλεφωνικού παρόχου.",
  },
  {
    number: "03",
    tag: "ΣΤΑΔΙΟ 3: ΔΟΚΙΜΕΣ",
    title: "Εκπαίδευση & Εσωτερικός Έλεγχος",
    description:
      "Εκπαιδεύουμε τα συστήματα AI στις ιδιαιτερότητες του κλάδου σας. Διεξάγουμε εξαντλητικές δοκιμές σε σενάρια κρατήσεων, ακυρώσεων, επειγόντων αιτημάτων και εκτός ωραρίου κλήσεων.",
    highlight: "Εγγυημένη ασφάλεια και ορθότητα πριν την έναρξη.",
  },
  {
    number: "04",
    tag: "ΣΤΑΔΙΟ 4: ΕΝΑΡΞΗ",
    title: "Τελικός Έλεγχος & Πλήρης Λειτουργία",
    description:
      "Πραγματοποιούμε μαζί την τελική δοκιμαστική κλήση αποδοχής. Ενεργοποιείται η αυτόματη εκτροπή και οι AI Agents αναλαμβάνουν 24/7 την εξυπηρέτηση των πελατών σας.",
    highlight: "Άμεση κάλυψη 24/7 με μηδενικές χαμένες ευκαιρίες.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      id="process"
      aria-labelledby="process-heading"
      className="py-24 sm:py-32 bg-[#030303] relative overflow-hidden"
    >
      {/* 1. Subtle Tech Grid Pattern Overlay */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[3rem_3rem] md:bg-size-[3.5rem_3.5rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
      />

      {/* 2. Background Ambient Glows */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-150 h-150 bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-10 w-72 h-72 bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <span className="inline-block text-[10px] sm:text-xs font-mono font-semibold text-amber-400 uppercase tracking-[0.3em] px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/20 backdrop-blur-md">
            Η ΔΙΑΔΙΚΑΣΙΑ ΕΓΚΑΤΑΣΤΑΣΗΣ
          </span>
          <h2 
            id="process-heading"
            className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mt-6 mb-4 leading-tight"
          >
            Πώς Τίθεται Σε <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-500 to-amber-200">
              Πλήρη Λειτουργία
            </span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-base font-light leading-relaxed">
            Βήμα προς βήμα η διαδικασία ενσωμάτωσης των λύσεων AI & Automations στην επιχείρησή σας, με απόλυτη ασφάλεια και μηδενική αναστάτωση.
          </p>
        </header>

        {/* Timeline Structure */}
        <div className="relative max-w-5xl mx-auto">
          {/* Background Vertical Line */}
          <div 
            aria-hidden="true" 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-zinc-800 via-zinc-800/80 to-transparent -translate-x-1/2" 
          />

          {/* Glowing Active Progress Line */}
          <motion.div
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-amber-400 via-amber-500 to-amber-300 -translate-x-1/2 shadow-[0_0_18px_rgba(245,158,11,0.9)] origin-top z-10"
          />

          {/* Steps Ordered List */}
          <ol className="space-y-16 md:space-y-24 list-none p-0 m-0">
            {steps.map((step, index) => (
              <li
                key={step.number}
                className={`relative flex flex-col md:flex-row items-center justify-between ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Interactive Card */}
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="ml-14 md:ml-0 w-[calc(100%-56px)] md:w-[44%] p-6 sm:p-8 rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xl relative group hover:border-amber-500/50 hover:bg-zinc-900/50 transition-all duration-500 shadow-xl"
                >
                  {/* Glass Header Tag & Number Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-semibold tracking-widest text-amber-400/90 bg-amber-950/50 border border-amber-500/20 px-2.5 py-1 rounded-full uppercase">
                      {step.tag}
                    </span>
                    <span className="text-3xl font-black font-mono text-zinc-700 group-hover:text-amber-400/30 transition-colors duration-500">
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-amber-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm font-light mb-6">
                    {step.description}
                  </p>

                  {/* Highlight Box */}
                  <div className="pt-3.5 border-t border-zinc-800/80 flex items-center gap-2">
                    <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[11px] font-medium text-amber-300/90 tracking-wide">
                      {step.highlight}
                    </span>
                  </div>
                </motion.article>

                {/* Timeline Center Node (Dot) */}
                <div 
                  aria-hidden="true" 
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center top-8 md:top-1/2 md:-translate-y-1/2 z-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-4 h-4 rounded-full bg-[#030303] border-2 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.9)] flex items-center justify-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                  </motion.div>
                </div>

                <div aria-hidden="true" className="hidden md:block w-[44%]" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}