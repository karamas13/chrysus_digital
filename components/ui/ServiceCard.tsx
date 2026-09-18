"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  badge?: string;
  variant?: "amber" | "cyan" | "emerald";
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  badge,
  variant = "amber",
  className = "",
}: ServiceCardProps) {

  // Dynamic Tailwind Classes & Symbols με βάση το variant
  const getStyles = () => {
    switch (variant) {
      case "cyan":
        return {
          titleColor: "text-cyan-400 group-hover:text-cyan-300",
          borderHover: "group-hover:border-cyan-500/40",
          glowColor: "bg-cyan-500/15",
          badgeColor: "text-cyan-400 bg-cyan-950/50 border-cyan-500/30",
          indicatorColor: "bg-cyan-500 shadow-[0_0_12px_#06b6d4]",
          topGradient: "from-cyan-500/20 via-transparent to-transparent",
          symbol: (
            /* Square Geometric Icon for Web */
            <div className="w-3 h-3 border border-cyan-400/40 group-hover:border-cyan-400 group-hover:rotate-45 transition-all duration-500" />
          ),
        };
      case "emerald":
        return {
          titleColor: "text-emerald-400 group-hover:text-emerald-300",
          borderHover: "group-hover:border-emerald-500/40",
          glowColor: "bg-emerald-500/15",
          badgeColor: "text-emerald-400 bg-emerald-950/50 border-emerald-500/30",
          indicatorColor: "bg-emerald-500 shadow-[0_0_12px_#10b981]",
          topGradient: "from-emerald-500/20 via-transparent to-transparent",
          symbol: (
            /* Rhombus Geometric Icon for Automations */
            <div className="w-3 h-3 border border-emerald-400/40 rotate-45 group-hover:border-emerald-400 group-hover:scale-110 transition-all duration-500" />
          ),
        };
      case "amber":
      default:
        return {
          titleColor: "text-amber-400 group-hover:text-amber-300",
          borderHover: "group-hover:border-amber-500/40",
          glowColor: "bg-amber-500/15",
          badgeColor: "text-amber-400 bg-amber-950/50 border-amber-500/30",
          indicatorColor: "bg-amber-500 shadow-[0_0_12px_#f59e0b]",
          topGradient: "from-amber-500/20 via-transparent to-transparent",
          symbol: (
            /* Sphere/Circle Geometric Icon for AI */
            <div className="w-3 h-3 rounded-full border border-amber-400/40 group-hover:border-amber-400 group-hover:scale-125 transition-all duration-500" />
          ),
        };
    }
  };

  const styles = getStyles();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl bg-zinc-950/60 border border-zinc-800/80 p-8 transition-all duration-300 backdrop-blur-md hover:bg-zinc-900/40 hover:shadow-2xl ${styles.borderHover} ${className}`}
    >
      {/* Top Subtle Border Highlight (Glass Edge) */}
      <div 
        className={`absolute inset-x-0 top-0 h-px bg-linear-to-r ${styles.topGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
      />

      {/* Background Radial Glow Effect */}
      <div
        className={`absolute -top-20 -right-20 w-56 h-56 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${styles.glowColor}`}
      />

      {/* Header Container: Badge + Geometric Symbol */}
      <div className="flex items-center justify-between mb-6">
        {badge ? (
          <span className={`text-[10px] font-mono tracking-widest px-3 py-1 rounded-full border uppercase transition-colors duration-300 ${styles.badgeColor}`}>
            {badge}
          </span>
        ) : <div />}

        {/* Dynamic Category Symbol */}
        <div className="p-1 opacity-60 group-hover:opacity-100 transition-opacity">
          {styles.symbol}
        </div>
      </div>

      {/* Card Content */}
      <h3 className={`text-xl font-bold mb-3 tracking-tight transition-colors duration-300 ${styles.titleColor}`}>
        {title}
      </h3>
      
      <p className="text-zinc-400 text-sm leading-relaxed font-light">
        {description}
      </p>

      {/* Bottom Glow Indicator Line */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-in-out ${styles.indicatorColor}`}
      />
    </motion.div>
  );
}