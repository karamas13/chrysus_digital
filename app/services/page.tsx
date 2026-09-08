"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
  const [hoveredSide, setHoveredSide] = useState<"ai" | "web" | null>(null);

  return (
    <main className="relative min-h-screen w-full bg-[#030303] text-white overflow-hidden pt-20 flex flex-col font-serif">
      {/* Header Info */}
      <div className="text-center pt-8 pb-4 z-20 pointer-events-none px-4">
        <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-400 uppercase">
          CHRYSSUS DIGITAL SERVICES
        </span>
        <h1 className="text-2xl md:text-4xl font-black tracking-tight mt-1">
          ΕΠΙΛΕΞΤΕ ΚΑΤΗΓΟΡΙΑ ΥΠΗΡΕΣΙΩΝ
        </h1>
      </div>

      {/* Split Screen Grid */}
      <div className="relative flex-1 grid grid-cols-1 md:grid-cols-2 w-full h-full min-h-[75vh]">
        
        {/* ================= LEFT SIDE: AI SERVICES ================= */}
        <Link href="/services/ai" className="relative group block">
          <div
            onMouseEnter={() => setHoveredSide("ai")}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative h-full w-full p-8 md:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800/80 transition-all duration-700 overflow-hidden cursor-pointer ${
              hoveredSide === "web" ? "opacity-40" : "opacity-100"
            }`}
          >
            {/* Smooth Radial Gold Light emitting from Left */}
            <div
              className={`absolute top-1/2 -left-32 -translate-y-1/2 w-96 h-96 md:w-150 md:h-150 bg-amber-500/15 rounded-full blur-[140px] pointer-events-none transition-opacity duration-700 ${
                hoveredSide === "ai" ? "opacity-100 scale-110" : "opacity-30 scale-100"
              }`}
            />

            <div className="relative z-10">
              <span className="text-xs font-mono tracking-[0.3em] text-amber-400/90 uppercase block mb-4">
                01 // AUTOMATION & AI
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white group-hover:text-amber-300 transition-colors duration-300 mb-6">
                AI Receptionist Services
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md font-light mb-8">
                Αυτοματοποιημένη τηλεφωνική υποδοχή 24/7 με εξειδικευμένη τεχνητή νοημοσύνη. Διαχειριστείτε ραντεβού, επείγοντα περιστατικά και ερωτήσεις ασθενών αυτόματα.
              </p>

              {/* Bullet Features */}
              <ul className="space-y-3 mb-8 text-xs md:text-sm text-zinc-300">
                <li className="flex items-center gap-3">
                  <span className="text-amber-400 font-bold">✦</span> 24/7 Αυτόματη Απάντηση Κλήσεων
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-400 font-bold">✦</span> Live Sync με Google & Outlook Calendar
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-400 font-bold">✦</span> Smart Emergency Triage & SMS Alerts
                </li>
              </ul>
            </div>

            {/* Bottom Call to Action */}
            <div className="relative z-10 pt-6 border-t border-zinc-800/60 flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                Εξερευνηστε τις AI Υπηρεσιες →
              </span>
              <div className="w-10 h-10 rounded-full border border-amber-500/40 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                ↗
              </div>
            </div>
          </div>
        </Link>

        {/* ================= RIGHT SIDE: WEB SERVICES ================= */}
        <Link href="/services/web" className="relative group block">
          <div
            onMouseEnter={() => setHoveredSide("web")}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative h-full w-full p-8 md:p-16 flex flex-col justify-between transition-all duration-700 overflow-hidden cursor-pointer ${
              hoveredSide === "ai" ? "opacity-40" : "opacity-100"
            }`}
          >
            {/* Smooth Radial Cyan Light emitting from Right */}
            <div
              className={`absolute top-1/2 -right-32 -translate-y-1/2 w-96 h-96 md:w-150 md:h-150 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none transition-opacity duration-700 ${
                hoveredSide === "web" ? "opacity-100 scale-110" : "opacity-30 scale-100"
              }`}
            />

            <div className="relative z-10">
              <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase block mb-4">
                02 // DIGITAL PRESENCE
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white group-hover:text-cyan-300 transition-colors duration-300 mb-6">
                Web Development Services
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md font-light mb-8">
                Σύγχρονες, ultra-fast και αισθητικά κομψές ιστοσελίδες ειδικά σχεδιασμένες για την προσέλκυση και μετατροπή επισκεπτών σε νέους ασθενείς.
              </p>

              {/* Bullet Features */}
              <ul className="space-y-3 mb-8 text-xs md:text-sm text-zinc-300">
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400 font-bold">✦</span> Custom Luxury UX/UI Design (Dark/Light)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400 font-bold">✦</span> Ultra Fast Performance & Local SEO
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400 font-bold">✦</span> Native AI Voice & Booking Widget
                </li>
              </ul>
            </div>

            {/* Bottom Call to Action */}
            <div className="relative z-10 pt-6 border-t border-zinc-800/60 flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 group-hover:translate-x-2 transition-transform duration-300">
                Εξερευνηστε τις Web Υπηρεσιες →
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