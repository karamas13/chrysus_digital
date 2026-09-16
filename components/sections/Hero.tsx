"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// Λίστα με εναλλαγή χρωματικών accents & στυλ badges (primary vs secondary)
const agentFeatures = [
  {
    title: "24/7 Αυτόματη Απάντηση Κλήσεων",
    tag: "AVAILABILITY",
    variant: "primary",
  },
  {
    title: "Άμεση Διαλογή Αιτημάτων",
    tag: "TRIAGE AI",
    variant: "secondary",
  },
  {
    title: "Business Automations & CRM",
    tag: "AUTOMATIONS",
    variant: "primary",
  },
  {
    title: "Custom Web Development",
    tag: "WEB DEVELOPMENT",
    variant: "secondary",
  },
  {
    title: "Φυσική Ελληνική Φωνή AI",
    tag: "VOICE AGENT",
    variant: "primary",
  },
  {
    title: "Μηδενικές Χαμένες Κλήσεις",
    tag: "PERFORMANCE",
    variant: "secondary",
  },
  {
    title: "Πλήρης Συμμόρφωση GDPR",
    tag: "SECURITY",
    variant: "primary",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const revealVariants: Variants = {
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <section
      ref={containerRef}
      aria-label="Εισαγωγή"
      className="relative min-h-screen w-full bg-[#030303] flex flex-col justify-between overflow-hidden pt-32 pb-8 font-serif"
    >
      {/* ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-150 h-150 bg-main-600/10 blur-[120px] rounded-full" />
      </div>

      {/* MAIN HERO CONTENT */}
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 my-auto"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT: REVEAL CONTENT --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left"
          >
            {/* Tagline */}
            <div className="overflow-hidden inline-block">
              <motion.div variants={revealVariants} className="flex items-center gap-4">
                <div className="h-px w-8 bg-main-500 hidden md:block" />
                <span className="text-main-400 font-mono text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase">
                  Chrysus Digital // AI & Web Transformation
                </span>
              </motion.div>
            </div>

            {/* H1 Title */}
            <div className="overflow-hidden">
              <motion.h1
                variants={revealVariants}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter"
              >
                ΛΙΓΟΤΕΡΑ ΤΗΛΕΦΩΝΑ{" "}
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-main-300 via-main-500 to-main-800">
                  ΠΕΡΙΣΣΟΤΕΡΟΙ ΠΕΛΑΤΕΣ
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <div className="overflow-hidden">
              <motion.p
                variants={revealVariants}
                className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-zinc-400 font-light leading-relaxed px-2 md:px-0"
              >
                <strong className="text-white font-medium">
                  Ολοκληρωμένες λύσεις AI & Digital Solutions
                </strong>{" "}
                για σύγχρονες επιχειρήσεις. Από AI Voice Agents που απαντούν 24/7 και αυτοματοποιήσεις workflows, έως custom ιστοσελίδες υψηλής απόδοσης.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={revealVariants}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 justify-center lg:justify-start"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#cta"
                  aria-label="Επικοινωνήστε μαζί μας"
                  className="btn-primary w-full sm:w-auto px-10 py-4 md:py-5 text-center transition-all duration-300"
                >
                  ΞΕΚΙΝΗΣΤΕ ΤΩΡΑ
                </a>

                <Link
                  href="/pricing"
                  aria-label="Δείτε τα διαθέσιμα πακέτα συνδρομής"
                  className="btn-secondary w-full sm:w-auto px-10 py-4 md:py-5 text-center transition-all duration-300"
                >
                  ΔΙΑΘΕΣΙΜΑ ΠΑΚΕΤΑ
                </Link>
              </div>
            </motion.div>

            <motion.p
              variants={revealVariants}
              className="text-[10px] md:text-[11px] font-mono text-zinc-500 uppercase tracking-widest pt-2"
            >
              Ιδανικό για επιχειρήσεις & επαγγελματίες που θέλουν 24/7 αυτόματη εξυπηρέτηση & ψηφιακή υπεροχή.
            </motion.p>
          </motion.div>

          {/* --- RIGHT: SIDEBAR (LOGS DEMO) --- */}
          <div className="lg:col-span-5 w-full" aria-hidden="true">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-5 md:p-8 rounded-4xl border border-white/5 bg-white/2 backdrop-blur-3xl space-y-6 max-w-md mx-auto lg:max-w-none"
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono text-amber-400 tracking-widest uppercase">
                  LOGS // CHRYSUS_ENGINE_24/7
                </span>
                <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  ΕΝΕΡΓΟ // 12ms
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { label: "VOICE AGENT (24/7)", val: "ΕΝΕΡΓΟ", color: "text-amber-400" },
                  { label: "CALENDAR & CRM SYNC", val: "ΣΥΓΧΡΟΝΙΣΜΕΝΟ", color: "text-emerald-400" },
                  { label: "AUTOMATION ENGINE", val: "ONLINE", color: "text-cyan-400" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center group">
                    <span className="text-[11px] text-zinc-400 font-mono uppercase tracking-tighter">
                      {item.label}
                    </span>
                    <span className={`text-[10px] font-bold font-mono ${item.color}`}>
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-black/40 p-4 rounded-2xl border border-white/5 h-36 md:h-40 overflow-hidden relative">
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-black/30 z-10 pointer-events-none" />
                <motion.div
                  animate={{ y: [0, -180] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  className="space-y-2"
                >
                  {[
                    "Εισερχόμενη κλήση: +30 210 ...",
                    "Αναγνώριση πρόθεσης πελάτη...",
                    "Έλεγχος διαθεσιμότητας Calendar & CRM",
                    "Ερώτημα: Πληροφορίες Υπηρεσιών & Ραντεβού",
                    "Εκτέλεση επιχειρησιακών κανόνων",
                    "Καταχώρηση ραντεβού: Τρίτη 17:30",
                    "Αποστολή επιβεβαίωσης SMS / Viber",
                    "Επιβεβαίωση κλήσης: Ολοκληρώθηκε (84s)",
                    "Αυτόματο Review Flow: Ενεργό",
                    "Έτοιμο για την επόμενη κλήση...",
                  ].map((log, i) => (
                    <p key={i} className="text-[10px] font-mono text-amber-300/70 lowercase">
                      {`> ${log}`}
                    </p>
                  ))}
                </motion.div>
              </div>

              <div className="pt-2">
                <div className="w-full h-0.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full bg-amber-500"
                  />
                </div>
                <p className="text-[8px] font-mono text-zinc-500 mt-2 text-center uppercase tracking-widest">
                  ΑΥΤΟΜΑΤΗ ΕΞΥΠΗΡΕΤΗΣΗ // ΣΤΑΘΕΡΗ ΣΥΝΔΕΣΗ
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* --- MINIMAL COLOR-ACCENTED MARQUEE --- */}
      <div
        aria-hidden="true"
        className="relative z-10 w-full mt-12 pt-5 pb-5 border-t border-b border-white/5 bg-black/50 backdrop-blur-md overflow-hidden"
      >
        <div className="flex whitespace-nowrap mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-6 pr-6"
          >
            {[...agentFeatures, ...agentFeatures].map((item, idx) => {
              const isPrimary = item.variant === "primary";

              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-300 ${
                    isPrimary
                      ? "bg-main-500/5 border-main-500/20 text-white"
                      : "bg-white/2 border-details-900 text-zinc-300"
                  }`}
                >
                  {/* Tag Chip */}
                  <span
                    className={`text-[9px] font-mono tracking-wider px-2 py-0.5 rounded-full uppercase ${
                      isPrimary
                        ? "bg-main-800/20 text-main-300 font-semibold"
                        : "bg-details-800 text-zinc-200"
                    }`}
                  >
                    {item.tag}
                  </span>

                  {/* Feature Title */}
                  <span className="text-xs md:text-sm font-sans tracking-wide">
                    {item.title}
                  </span>

                  {/* Diamond Separator */}
                  <span className={`text-[8px] ml-1 ${isPrimary ? "text-main-400" : "text-details-600"}`}>
                    ◆
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}