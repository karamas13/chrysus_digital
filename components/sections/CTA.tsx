"use client";

import { motion } from 'framer-motion';
import ContactFlashcards from '@/components/ui/ContactFlashcards';

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
          className="max-w-5xl mx-auto rounded-[3rem] border border-zinc-800 bg-zinc-900/20 backdrop-blur-md p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

          <h2 className="text-[10px] font-bold text-main-400 uppercase tracking-[0.5em] mb-6 font-mono">
            ΕΚΔΗΛΩΣΗ ΕΝΔΙΑΦΕΡΟΝΤΟΣ
          </h2>
          
          <h3 className="text-3xl md:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1]">
            ΕΚΣΥΓΧΡΟΝΙΣΤΕ ΤΟ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-main-200 via-main-400 to-main-700">
              ΙΑΤΡΕΙΟ ΣΑΣ
            </span>
          </h3>

          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">         
            Εξασφαλίστε την αυτόματη εξυπηρέτηση των ασθενών σας σήμερα.
            Συμπληρώστε τα στοιχεία σας στη φόρμα παρακάτω!
          </p>

          {/* Flashcards Component Container */}
          <div className="mt-8">
            <ContactFlashcards />
          </div>

          {/* Decorative Corner Neon Lines */}
          <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-cyan-500 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
          <div className="absolute top-0 left-0 h-24 w-px bg-gradient-to-b from-cyan-500 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </motion.div>
      </div>
    </section>
  );
}