"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isWebSection = pathname.includes("/web");

  // Dynamic Stylings based on active route
  const activeColorClass = isWebSection ? "text-cyan-400" : "text-amber-400";
  const activeBgGlow = isWebSection ? "bg-cyan-500/15" : "bg-amber-500/15";
  const activeRing = isWebSection ? "border-cyan-400" : "border-amber-400";

  return (
    <div className="relative w-full min-h-screen">
      {/* Premium Fullscreen Overlay */}
      <motion.div
        key={`loader-${pathname}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-50 pointer-events-none flex flex-col items-center justify-center bg-[#030303] overflow-hidden"
      >
        {/* Background Grid Pattern & Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f1f23_1px,transparent_1px)] bg-size-[24px_24px] opacity-40" />
        <div className={`absolute w-80 h-80 rounded-full blur-[140px] ${activeBgGlow}`} />

    
          
          {/* Animated Glowing Dual Ring Loader */}
          <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
            {/* Outer Static Subtle Ring */}
            <div className={`absolute inset-0 rounded-full border ${isWebSection ? "border-cyan-500/20" : "border-amber-500/20"}`} />
            
            {/* Spinning Glowing Arc */}
            <div
              className={`w-16 h-16 rounded-full border-2 border-t-transparent animate-spin ${activeRing} ${
                isWebSection ? "shadow-[0_0_20px_rgba(6,182,212,0.5)]" : "shadow-[0_0_20px_rgba(212,175,55,0.5)]"
              }`}
            />
          </div>

          {/* Minimal Typography */}
          <span className="text-[15px] font-mono tracking-[0.4em] text-zinc-400 uppercase mb-1">
            CHRYSUS DIGITAL
          </span>
          <span className={`text-xs font-mono font-bold tracking-widest uppercase ${activeColorClass}`}>
            LOADING...
          </span>

          {/* Decorative Corner Tech Details */}
          <span className="absolute top-2 left-3 text-[7px] font-mono text-zinc-600">SYS.01</span>
          <span className="absolute top-2 right-3 text-[7px] font-mono text-zinc-600">2026</span>
       
      </motion.div>

      {/* Page Content Reveal */}
      <motion.div
        key={`content-${pathname}`}
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}