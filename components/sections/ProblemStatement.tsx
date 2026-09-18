"use client";

import { motion } from "framer-motion";

interface SolutionPillar {
  number: string;
  category: string;
  title: string;
  description: string;
  accentColor: "amber" | "cyan" | "emerald";
  icon: React.ReactNode;
}

const pillars: SolutionPillar[] = [
  {
    number: "01",
    category: "AI VOICE AGENTS",
    title: "Αναπάντητες Κλήσεις & Χαμένες Ευκαιρίες",
    description: "24/7 αυτόματη τηλεφωνική υποδοχή που απαντά άμεσα, κλείνει ραντεβού και δεν αφήνει κανέναν πελάτη να φύγει.",
    accentColor: "amber",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: "02",
    category: "WEB DEVELOPMENT",
    title: "Απαρχαιωμένη Ψηφιακή Παρουσία",
    description: "Ultra-fast, σύγχρονες ιστοσελίδες σχεδιασμένες για ακαριαία εμπιστοσύνη και υψηλό conversion rate.",
    accentColor: "cyan",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    number: "03",
    category: "BUSINESS AUTOMATIONS",
    title: "Χειροκίνητη Σπατάλη Χρόνου",
    description: "Αυτοματοποίηση επαναλαμβανόμενων εργασιών, υπενθυμίσεων και διασύνδεσης CRM/ERP χωρίς λάθη.",
    accentColor: "emerald",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const colorStyles = {
  amber: {
    iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/30 group-hover:border-amber-400 group-hover:bg-amber-500/20",
    badge: "text-amber-400",
    glow: "bg-amber-500/10 group-hover:bg-amber-500/20",
    cardGlow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]",
  },
  cyan: {
    iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30 group-hover:border-cyan-400 group-hover:bg-cyan-500/20",
    badge: "text-cyan-400",
    glow: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
    cardGlow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
  },
  emerald: {
    iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 group-hover:border-emerald-400 group-hover:bg-emerald-500/20",
    badge: "text-emerald-400",
    glow: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    cardGlow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
  },
};

export default function ProblemSection() {
  return (
    <section 
      aria-labelledby="digital-solutions-heading"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-linear-to-b from-[#030303] via-zinc-950/80 to-[#030303] overflow-hidden"
    >
      {/* Subtle Tech Grid Pattern Overlay */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[3rem_3rem] md:bg-size-[3.5rem_3.5rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
          <span className="text-zinc-500 font-mono text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase block mb-2 sm:mb-3 font-semibold">
            ΟΛΟΚΛΗΡΩΜΕΝΕΣ ΨΗΦΙΑΚΕΣ ΛΥΣΕΙΣ
          </span>
          <h2 
            id="digital-solutions-heading" 
            className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Εκσυγχρονίστε την επιχείρησή σας σε 3 επίπεδα
          </h2>
          <p className="mt-3 sm:mt-4 text-zinc-400 text-xs sm:text-base font-light leading-relaxed">
            Καλύπτουμε τα τρία πιο κρίσιμα σημεία ανάπτυξης: επικοινωνία, ψηφιακή εικόνα και εσωτερική παραγωγικότητα.
          </p>
        </header>

        {/* Minimal Process Flow Grid */}
        <div className="relative">
          
          {/* Dashed Connecting Line (Desktop Only) */}
          <div 
            aria-hidden="true" 
            className="hidden md:block absolute top-10 left-[15%] right-[15%] h-px border-t border-dashed border-zinc-800 z-0" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
            {pillars.map((item, index) => {
              const theme = colorStyles[item.accentColor];

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.5 }} 
                  className="group relative flex flex-col items-center text-center p-2 rounded-2xl transition-all duration-300"
                >
                  {/* Local Ambient Spotlight attached strictly to this item */}
                  <div 
                    aria-hidden="true" 
                    className={`absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-[80px] pointer-events-none transition-all duration-500 ${theme.glow}`}
                  />

                  {/* Minimal Circular Icon Badge */}
                  <div 
                    className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full border flex items-center justify-center mb-5 sm:mb-6 transition-all duration-300 backdrop-blur-md ${theme.iconBg} ${theme.cardGlow}`}
                  >
                    {item.icon}
                  </div>

                  {/* Category Tag */}
                  <span className={`relative z-10 text-[10px] font-mono font-bold uppercase tracking-widest mb-2 ${theme.badge}`}>
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="relative z-10 text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="relative z-10 text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}