"use client";

import { useRef } from 'react';
import { motion, Variants } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const revealVariants: Variants = {
    hidden: { y: "110%" },
    visible: { 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#030303] flex items-start md:items-center justify-center overflow-hidden px-6 pt-32 pb-20 md:py-12 perspective-1000 font-serif"
    >
      {/* ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-150 h-150 bg-main-600/10 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        style={{ transformStyle: "preserve-3d" }}
        className="relative z-10 w-full max-w-7xl"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT: REVEAL CONTENT --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <div className="overflow-hidden inline-block">
              <motion.div variants={revealVariants} className="flex items-center gap-4">
                <div className="h-px w-8 bg-main-500 hidden md:block" />
                <span className="text-main-400 font-mono text-[10px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase">
                    Chrysus Project 2026
                </span>
              </motion.div>
            </div>

            <div className="space-y-2">
              <div className="overflow-hidden">
                <motion.h1 
                  variants={revealVariants} 
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter"
                >
                  ΨΗΦΙΑΚΗ
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 
                  variants={revealVariants} 
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-main-300 via-main-500 to-main-800 leading-[1.1] tracking-tighter"
                >
                   ΥΠΟΔΟΧΗ AI
                </motion.h1>
              </div>
            </div>

            <div className="overflow-hidden">
              <motion.p 
                variants={revealVariants} 
                className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-zinc-500 font-light leading-relaxed px-2 md:px-0"
              >
                <span className="text-white font-medium">AI τηλεφωνική υποδοχή για οδοντιατρεία</span> που απαντά 24/7, καταγράφει σωστά τα αιτήματα των ασθενών και βοηθά το ιατρείο σας να μη χάνει νέες ευκαιρίες.
              </motion.p>
            </div>

             <motion.div 
               variants={revealVariants} 
               className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 justify-center lg:justify-start"
             >
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               {/* Πρώτο κουμπί -> Οδηγεί στο CTA */}
               <a 
                 href="#cta" 
                 className="btn-primary w-full sm:w-auto px-10 py-4 md:py-5 text-center transition-all duration-300"
               >
                 ΚΛΕΙΣΤΕ ΔΩΡΕΑΝ DEMO
               </a>
             
               {/* Δεύτερο κουμπί -> Οδηγεί στο Process */}
               <a 
                 href="/pricing" 
                 className="btn-secondary w-full sm:w-auto px-10 py-4 md:py-5 text-center transition-all duration-300"
               >
                 ΔΙΑΘΕΣΙΜΑ ΠΑΚΕΤΑ
               </a>
             </div>
            </motion.div>
            
            <motion.p 
              variants={revealVariants}
              className="text-[10px] md:text-[11px] font-mono text-zinc-600 uppercase tracking-widest pt-2"
            >
              Ιδανικό για οδοντιατρεία που θέλουν πιο άμεση εξυπηρέτηση.
            </motion.p>
          </motion.div>

          {/* --- RIGHT: SIDEBAR (English gimmick preserved) --- */}
          <div className="lg:col-span-5 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="p-5 md:p-8 rounded-4xl border border-white/5 bg-white/2 backdrop-blur-3xl space-y-6 max-w-md mx-auto lg:max-w-none"
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono text-main-400 tracking-widest">AGENT_LOG_05</span>
                <span className="text-[10px] font-mono text-zinc-500">LIVE // 12ms</span>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Patient Triage", val: "ACTIVE", color: "text-main-400" },
                  { label: "Calendar Sync", val: "CONNECTED", color: "text-green-500" },
                  { label: "NLP Engine", val: "V4.2_STABLE", color: "text-zinc-300" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center group">
                    <span className="text-[11px] text-zinc-500 font-mono uppercase tracking-tighter">{item.label}</span>
                    <span className={`text-[10px] font-bold font-mono ${item.color}`}>{item.val}</span>
                  </div>
                ))}
              </div>

              <div className="bg-black/40 p-4 rounded-2xl border border-white/5 h-32 md:h-36 overflow-hidden relative">
                <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent z-10 pointer-events-none" />
                <motion.div
                  animate={{ y: [0, -140] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="space-y-2"
                >
                  {[
                    "Incoming call: +30 210...",
                    "Analyzing patient intent...",
                    "Emergency level: LOW",
                    "Query: Tooth extraction price",
                    "Responding via NLP...",
                    "Booking suggested for Tuesday",
                    "Call resolved: 142s",
                    "Ready for next query..."
                  ].map((log, i) => (
                    <p key={i} className="text-[10px] font-mono text-main-300/60 lowercase">
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
                    className="h-full bg-main-500" 
                  />
                </div>
                <p className="text-[8px] font-mono text-zinc-600 mt-2 text-center uppercase tracking-widest">AI Throughput Stable</p>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* FOOTER DECOR */}
      <div className="absolute bottom-10 left-10 right-10 hidden sm:flex justify-between opacity-20">
        <div className="text-[9px] font-mono text-white tracking-widest">SYSTEM_OK</div>
        <div className="text-[9px] font-mono text-white tracking-widest uppercase">Encryption: AES-256</div>
      </div>
    </div>
  );
}