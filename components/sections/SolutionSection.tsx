"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FeaturePillar {
  id: string;
  badge: string;
  title: string;
  description: string;
  accentColor: "amber" | "emerald" | "cyan";
  points: { title: string; desc: string }[];
}

const pillars: FeaturePillar[] = [
  {
    id: "voice",
    badge: "01 / AI VOICE AGENTS",
    title: "Αυτόνομη Τηλεφωνική Υποδοχή 24/7",
    description: "Ο AI Voice Agent απαντά σε φυσική γλώσσα, κλείνει ραντεβού και εξυπηρετεί τους πελάτες σας χωρίς καθυστερήσεις.",
    accentColor: "amber",
    points: [
      { title: "24/7 Διαθεσιμότητα", desc: "Απάντηση εκτός ωραρίου & σε ώρες αιχμής χωρίς αναμονή." },
      { title: "Φυσική Συνομιλία", desc: "Άμεση επικοινωνία σε Ελληνικά & Αγγλικά." },
      { title: "Αυτόματες Απαντήσεις", desc: "Συχνές ερωτήσεις για τιμές, τοποθεσία & υπηρεσίες." }
    ],
  },
  {
    id: "automations",
    badge: "02 / BUSINESS AUTOMATIONS",
    title: "Αυτόματος Συντονισμός & CRM",
    description: "Σύνδεση κλήσεων απευθείας με τα ημερολόγια και τα συστήματα της επιχείρησής σου χωρίς χειροκίνητη καταχώρηση.",
    accentColor: "emerald",
    points: [
      { title: "Calendar Sync", desc: "Live έλεγχος διαθεσιμότητας & καταχώρηση ραντεβού." },
      { title: "Smart Reminders", desc: "Αυτόματα SMS/Email για μείωση των No-Shows." },
      { title: "CRM Integration", desc: "Αυτόματη ενημέρωση καρτέλας πελάτη μετά από κάθε κλήση." }
    ],
  },
  {
    id: "web",
    badge: "03 / WEB DEVELOPMENT",
    title: "Ultra-Fast Ιστοσελίδες & Web Apps",
    description: "Σύγχρονη ψηφιακή παρουσία υψηλής ταχύτητας σχεδιασμένη για να μετατρέπει τους επισκέπτες σε πελάτες.",
    accentColor: "cyan",
    points: [
      { title: "Premium Performance", desc: "Ακαριαία ταχύτητα φόρτωσης & Search Engine Optimization." },
      { title: "Mobile First UX", desc: "Πλήρης προσαρμογή σε κινητά, tablets & desktops." },
      { title: "Online Booking Integration", desc: "Ενσωμάτωση συστήματος κρατήσεων & contact funnels." }
    ],
  }
];

const colorStyles = {
  amber: {
    badge: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    pill: "bg-amber-500 text-black font-bold shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    border: "border-amber-500/30",
    glow: "bg-amber-500/10",
  },
  emerald: {
    badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    pill: "bg-emerald-500 text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    border: "border-emerald-500/30",
    glow: "bg-emerald-500/10",
  },
  cyan: {
    badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    pill: "bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)]",
    iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    border: "border-cyan-500/30",
    glow: "bg-cyan-500/10",
  }
};

export default function SolutionValueSection() {
  const [activeTab, setActiveTab] = useState<string>("voice");

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];
  const theme = colorStyles[currentPillar.accentColor];

  return (
    <section 
      aria-labelledby="solution-section-heading"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-linear-to-b from-[#030303] via-zinc-950/80 to-[#030303] overflow-hidden"
    >
      {/* Background Tech Grid */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[3rem_3rem] md:bg-size-[3.5rem_3.5rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">         
          <h2 
            id="solution-section-heading" 
            className="text-4xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Δυνατότητες & 
            
            <span className="text-main-500"> Λειτουργείες</span>
          </h2>
        </header>

        {/* Animated Pill Tabs (Mobile-Friendly Horizontal Scroll) */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 p-1.5 bg-zinc-900/60 backdrop-blur-md rounded-2xl border border-zinc-800/80 max-w-full sm:max-w-2xl mx-auto overflow-x-auto no-scrollbar scroll-smooth">
          {pillars.map((tab) => {
            const isActive = tab.id === activeTab;
            const tabTheme = colorStyles[tab.accentColor];

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-mono font-bold transition-colors cursor-pointer select-none whitespace-nowrap shrink-0 ${
                  isActive ? "text-black" : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className={`absolute inset-0 rounded-xl ${tabTheme.pill}`}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.badge.split("/ ")[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Dynamic Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className={`rounded-2xl sm:rounded-3xl bg-zinc-900/30 border ${theme.border} p-5 sm:p-8 lg:p-12 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center shadow-2xl relative overflow-hidden`}
          >
            {/* Background Ambient Glow */}
            <div className={`absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none ${theme.glow}`} />

            {/* Left Column: Information & Points */}
            <div className="lg:col-span-full">
              <span className={`inline-block text-[9px] sm:text-[10px] font-mono tracking-widest px-2.5 sm:px-3 py-1 rounded-full border uppercase mb-3 sm:mb-4 ${theme.badge}`}>
                {currentPillar.badge}
              </span>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
                {currentPillar.title}
              </h3>
              
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-6 sm:mb-8">
                {currentPillar.description}
              </p>

              {/* 3 Minimal Points */}
              <div className="space-y-3 sm:space-y-4">
                {currentPillar.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 bg-zinc-950/40 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-zinc-800/60">
                    <div className={`w-5 sm:w-6 h-5 sm:h-6 shrink-0 rounded-lg border flex items-center justify-center text-[10px] sm:text-[11px] font-mono font-bold mt-0.5 ${theme.iconBg}`}>
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white mb-0.5">{pt.title}</h4>
                      <p className="text-zinc-400 text-[10px] sm:text-[11px] font-light leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}