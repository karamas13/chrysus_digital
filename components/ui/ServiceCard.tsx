"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  badge?: string;
  variant?: "amber" | "cyan";
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  badge,
  variant = "amber",
  className = "",
}: ServiceCardProps) {
  const isCyan = variant === "cyan";

  // Dynamic Tailwind Classes με βάση το variant
  const styles = {
    titleColor: isCyan ? "text-cyan-400 group-hover:text-cyan-300" : "text-amber-400 group-hover:text-amber-300",
    borderHover: isCyan ? "group-hover:border-cyan-500/40" : "group-hover:border-amber-500/40",
    glowColor: isCyan ? "bg-cyan-500/10" : "bg-amber-500/10",
    badgeColor: isCyan ? "text-cyan-400/80 bg-cyan-950/40 border-cyan-500/20" : "text-amber-400/80 bg-amber-950/40 border-amber-500/20",
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-8 transition-colors duration-300 backdrop-blur-sm ${styles.borderHover} ${className}`}
    >
      {/* Background Radial Glow Effect στο Hover */}
      <div
        className={`absolute -top-24 -right-24 w-60 h-60 rounded-full blur-[90px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${styles.glowColor}`}
      />

      {/* Centered Badge Property */}
      {badge && (
        <div className="flex justify-center mb-6">
          <span className={`text-[10px] font-mono tracking-widest px-3 py-1 rounded-full border uppercase ${styles.badgeColor}`}>
            {badge}
          </span>
        </div>
      )}

      {/* Card Content */}
      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${styles.titleColor}`}>
        {title}
      </h3>
      
      <p className="text-zinc-400 text-sm leading-relaxed font-light">
        {description}
      </p>

      {/* Bottom Subtle Indicator Line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${
          isCyan ? "bg-cyan-500/60" : "bg-amber-500/60"
        }`}
      />
    </motion.div>
  );
}