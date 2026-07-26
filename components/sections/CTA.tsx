"use client";

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 bg-[#030303] overflow-hidden" id="cta">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-main-400/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto rounded-[3rem] border border-zinc-800 bg-zinc-900/20 backdrop-blur-md p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

          <h2 className="text-[10px] font-bold text-main-400 uppercase tracking-[0.5em] mb-6 font-mono">
            ΕΚΔΗΛΩΣΗ ΕΝΔΙΑΦΕΡΟΝΤΟΣ
          </h2>
          
          <h3 className="text-3xl md:text-7xl font-black text-white tracking-tight mb-8 leading-[1.1]">
            ΕΚΣΥΓΧΡΟΝΙΣΤΕ ΤΟ <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-main-200 via-main-400 to-main-700">
              ΙΑΤΡΕΙΟ ΣΑΣ
            </span>
          </h3>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Δεχόμαστε περιορισμένο αριθμό νέων συνεργασιών για το 2026.
            Εξασφαλίστε την αυτόματη εξυπηρέτηση των ασθενών σας σήμερα.
            Αφήστε μας το email σας και θα επικοινωνήσουμε μαζί σας σύντομα!
          </p>

          <div className="flex flex-col items-center w-full max-w-md mx-auto mt-12">
            <form className="relative w-full group">
                <input 
                  type="email" 
                  placeholder="Το email σας" 
                  className="w-full text-center bg-[#030303]/50 border border-zinc-800 rounded-full px-8 py-5 text-white outline-none focus:border-main-500/50 transition-all duration-500 placeholder:text-zinc-600"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-6 btn-primary m-2"
                >
                  ΕΝΔΙΑΦΕΡΟΜΑΙ
                </button>
              </form>
              <p className="mt-4 text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-mono">
                Περιορισμένη διαθεσιμότητα για το Q2 2026
              </p>
          </div>

          {/* Decorative Corner Neon Lines - Cyan Shadow applied */}
          <div className="absolute top-0 left-0 w-24 h-px bg-linear-to-r from-cyan-500 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
          <div className="absolute top-0 left-0 h-24 w-px bg-linear-to-b from-cyan-500 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </motion.div>
      </div>
    </section>
  );
}