"use client";

import { useState } from "react";
import Link from "next/link";

type ServiceCategory = "ai" | "automations" | "web" | null;

export default function ServicesClient() {
  const [hoveredSide, setHoveredSide] = useState<ServiceCategory>(null);

  return (
    <main className="relative min-h-screen w-full bg-[#030303] text-white overflow-hidden pt-30 flex flex-col font-serif">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-white/5 blur-[150px]" />
      </div>

      {/* Header Info */}
      <div className="text-center pt-8 pb-6 z-20 pointer-events-none px-4">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mt-2 text-white font-sans">
          ΕΠΙΛΕΞΤΕ ΚΑΤΗΓΟΡΙΑ 
          <span className="text-emerald-500"> ΥΠΗΡΕΣΙΩΝ</span>
        </h1>
        <p className="text-zinc-400 text-xs md:text-sm font-sans mt-2 max-w-md mx-auto">
          Εξειδικευμένες λύσεις τεχνητής νοημοσύνης, αυτοματοποίησης και ιστού για σύγχρονες επιχειρήσεις.
        </p>
      </div>

      {/* 3-Column Split Screen Grid */}
      <div className="relative flex-1 grid grid-cols-1 lg:grid-cols-3 w-full h-full min-h-[75vh] border-t border-zinc-900">
        
        {/* ================= 01: AI SERVICES (AMBER) ================= */}
        <Link href="/services/ai" className="relative group block h-full">
          <div
            onMouseEnter={() => setHoveredSide("ai")}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative h-full w-full p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800/80 transition-all duration-700 overflow-hidden cursor-pointer ${
              hoveredSide && hoveredSide !== "ai" ? "opacity-35" : "opacity-100"
            }`}
          >
            {/* Radial Amber Light */}
            <div
              className={`absolute top-1/2 -left-32 -translate-y-1/2 w-96 h-96 bg-amber-500/15 rounded-full blur-[130px] pointer-events-none transition-opacity duration-700 ${
                hoveredSide === "ai" ? "opacity-100 scale-125" : "opacity-20 scale-100"
              }`}
            />

            {/* Geometric Core Element */}
            <div className="absolute top-10 right-8 w-20 h-20 rounded-full border border-amber-500/10 flex items-center justify-center pointer-events-none group-hover:border-amber-500/30 transition-colors duration-500">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 group-hover:scale-110 transition-transform duration-500" />
            </div>

            <div className="relative z-10">
              <span className="text-xs font-mono tracking-[0.3em] text-amber-400 uppercase block mb-4">
                01 // VOICE & CONVERSATION AI
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-white group-hover:text-amber-300 transition-colors duration-300 mb-4 font-sans">
                AI Receptionists & Voice Agents
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed font-sans font-light mb-8">
                Αυτοματοποιημένη τηλεφωνική υποδοχή 24/7 με εξειδικευμένη AI φωνή. Διαχειριστείτε κλήσεις, ραντεβού και αιτήματα πελατών αυτόματα.
              </p>

              {/* Bullet Features */}
              <ul className="space-y-3 mb-8 text-xs text-zinc-300 font-sans">
                <li className="flex items-center gap-3">
                  <span className="text-amber-400 font-bold">✦</span> 24/7 Αυτόματη Απάντηση Κλήσεων
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-400 font-bold">✦</span> Φυσική Ελληνική Φωνή AI
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-400 font-bold">✦</span> Smart Qualification & Lead Triage
                </li>
              </ul>
            </div>

            {/* Bottom Call to Action */}
            <div className="relative z-10 pt-6 border-t border-zinc-800/60 flex items-center justify-between mt-auto font-sans">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                AI Υπηρεσιες →
              </span>
              <div className="w-10 h-10 rounded-full border border-amber-500/40 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                ↗
              </div>
            </div>
          </div>
        </Link>

        {/* ================= 02: AUTOMATIONS (EMERALD) ================= */}
        <Link href="/services/automations" className="relative group block h-full">
          <div
            onMouseEnter={() => setHoveredSide("automations")}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative h-full w-full p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800/80 transition-all duration-700 overflow-hidden cursor-pointer ${
              hoveredSide && hoveredSide !== "automations" ? "opacity-35" : "opacity-100"
            }`}
          >
            {/* Radial Emerald Light */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/15 rounded-full blur-[130px] pointer-events-none transition-opacity duration-700 ${
                hoveredSide === "automations" ? "opacity-100 scale-125" : "opacity-20 scale-100"
              }`}
            />

            {/* Geometric Core Element */}
            <div className="absolute top-10 right-8 w-20 h-20 border border-emerald-500/10 flex items-center justify-center rotate-45 pointer-events-none group-hover:border-emerald-500/30 transition-colors duration-500">
              <div className="w-8 h-8 bg-emerald-500/10 border border-emerald-500/30 group-hover:scale-110 transition-transform duration-500" />
            </div>

            <div className="relative z-10">
              <span className="text-xs font-mono tracking-[0.3em] text-emerald-400 uppercase block mb-4">
                02 // WORKFLOW & SYSTEMS
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-white group-hover:text-emerald-300 transition-colors duration-300 mb-4 font-sans">
                Smart Automations
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed font-sans font-light mb-8">
                Συνδέστε τα συστήματα της επιχείρησής σας. Αυτοματοποιήστε υπενθυμίσεις, CRM ενημερώσεις, follow-ups και εσωτερικά workflows.
              </p>

              {/* Bullet Features */}
              <ul className="space-y-3 mb-8 text-xs text-zinc-300 font-sans">
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400 font-bold">✦</span> Live Calendar & CRM Integrations
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400 font-bold">✦</span> Automated Multi-channel Reminders
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400 font-bold">✦</span> Lead Nurturing & Review Workflows
                </li>
              </ul>
            </div>

            {/* Bottom Call to Action */}
            <div className="relative z-10 pt-6 border-t border-zinc-800/60 flex items-center justify-between mt-auto font-sans">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 group-hover:translate-x-2 transition-transform duration-300">
                Automations →
              </span>
              <div className="w-10 h-10 rounded-full border border-emerald-500/40 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                ↗
              </div>
            </div>
          </div>
        </Link>

        {/* ================= 03: WEB SERVICES (CYAN) ================= */}
        <Link href="/services/web" className="relative group block h-full">
          <div
            onMouseEnter={() => setHoveredSide("web")}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative h-full w-full p-8 lg:p-12 flex flex-col justify-between transition-all duration-700 overflow-hidden cursor-pointer ${
              hoveredSide && hoveredSide !== "web" ? "opacity-35" : "opacity-100"
            }`}
          >
            {/* Radial Cyan Light */}
            <div
              className={`absolute top-1/2 -right-32 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none transition-opacity duration-700 ${
                hoveredSide === "web" ? "opacity-100 scale-125" : "opacity-20 scale-100"
              }`}
            />

            {/* Geometric Core Element */}
            <div className="absolute top-10 right-8 w-20 h-20 rounded-2xl border border-cyan-500/10 flex items-center justify-center pointer-events-none group-hover:border-cyan-500/30 transition-colors duration-500">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-500" />
            </div>

            <div className="relative z-10">
              <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase block mb-4">
                03 // DIGITAL PRESENCE
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-white group-hover:text-cyan-300 transition-colors duration-300 mb-4 font-sans">
                Web Development
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed font-sans font-light mb-8">
                Σύγχρονες, ultra-fast ιστοσελίδες και web εφαρμογές σχεδιασμένες για μέγιστη μετατροπή επισκεπτών σε πελάτες.
              </p>

              {/* Bullet Features */}
              <ul className="space-y-3 mb-8 text-xs text-zinc-300 font-sans">
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400 font-bold">✦</span> Custom High-Performance Architecture
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400 font-bold">✦</span> Advanced SEO & Technical Optimization
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400 font-bold">✦</span> Full-stack Integration & Scalability
                </li>
              </ul>
            </div>

            {/* Bottom Call to Action */}
            <div className="relative z-10 pt-6 border-t border-zinc-800/60 flex items-center justify-between mt-auto font-sans">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 group-hover:translate-x-2 transition-transform duration-300">
                Web Υπηρεσιες →
              </span>
              <div className="w-10 h-10 rounded-full border border-cyan-500/40 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                ↗
              </div>
            </div>
          </div>
        </Link>

      </div>
    </main>
  );
}