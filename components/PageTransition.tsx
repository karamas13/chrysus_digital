"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isWebSection = pathname.includes("/web");

  // --- STATE TO TRACK IF THE PAGE JUST OPENED (INITIAL MOUNT) ---
  const [hasMountedOnce, setHasMountedOnce] = useState(false);

  // Set mounted state to true after the very first render finishes
  useEffect(() => {
    // We add a tiny delay to ensure Framer Motion doesn't catch
    // the change within the same render cycle
    const timer = setTimeout(() => {
      setHasMountedOnce(true);
    }, 100);
    
    return () => clearTimeout(timer); // Cleanup
  }, []); // Run only ONCE on component mount

  // --- SAFEGUARDS & DYNAMIC STYLING ---
  const activeColorClass = isWebSection ? "text-cyan-400" : "text-amber-400";
  const activeBgGlow = isWebSection ? "bg-cyan-500/15" : "bg-amber-500/15";
  const activeRing = isWebSection ? "border-cyan-400" : "border-amber-400";

  // Define transition times to reuse
  const loaderDuration = 1.5;
  const loaderDelay = 0.5;

  return (
    <div className="relative w-full min-h-screen">
      {/* 
          1. Premium Fullscreen Overlay (The Loader Screen)
          
          CHANGE: If hasMountedOnce is FALSE (initial open), we forcefully
          hide the loader by starting initial opacity at 0 and setting 
          pointer-events-none immediately.
      */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`loader-${pathname}`}
          // safeguard against initial load: start already hidden
          initial={{ opacity: hasMountedOnce ? 1 : 0 }} 
          animate={{ opacity: 0 }}
          transition={{ duration: loaderDuration, delay: loaderDelay, ease: "easeInOut" }}
          // Ensure it cannot be clicked on initial load if visible for 1ms
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030303] overflow-hidden ${
            hasMountedOnce ? "pointer-events-none" : "pointer-events-none opacity-0"
          }`}
        >
          {/* Background Grid Pattern & Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(#1f1f23_1px,transparent_1px)] bg-size-[24px_24px] opacity-40" />
          <div className={`absolute w-80 h-80 rounded-full blur-[140px] ${activeBgGlow}`} />

          {/* Animated Glowing Dual Ring Loader */}
          <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
            {/* Outer Static Subtle Ring */}
            <div
              className={`absolute inset-0 rounded-full border ${
                isWebSection ? "border-cyan-500/20" : "border-amber-500/20"
              }`}
            />

            {/* Spinning Glowing Arc */}
            <div
              className={`w-16 h-16 rounded-full border-2 border-t-transparent animate-spin ${activeRing} ${
                isWebSection
                  ? "shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                  : "shadow-[0_0_20px_rgba(212,175,55,0.5)]"
              }`}
            />
          </div>

          {/* Minimal Typography */}
          <span className="text-[15px] font-mono tracking-[0.4em] text-zinc-400 uppercase mb-1">
            CHRYSUS DIGITAL
          </span>
          <span
            className={`text-xs font-mono font-bold tracking-widest uppercase ${activeColorClass}`}
          >
            LOADING...
          </span>

          {/* Decorative Corner Tech Details */}
          <span className="absolute top-2 left-3 text-[7px] font-mono text-zinc-600">
            SYS.01
          </span>
          <span className="absolute top-2 right-3 text-[7px] font-mono text-zinc-600">
            2026
          </span>
        </motion.div>
      </AnimatePresence>

      {/* 
          2. Page Content Reveal
          
          CHANGE: If hasMountedOnce is FALSE (initial open), we don't animate the
          initial state (start fully visible).
      */}
      <motion.div
        key={`content-${pathname}`}
        // safeguard against initial load: start fully visible
        initial={{ opacity: hasMountedOnce ? 0 : 1, scale: hasMountedOnce ? 0.99 : 1 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: loaderDelay + 0.1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}