"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

export default function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group text-center relative p-8 rounded-3xl border border-tertiary-800 bg-tertiary-900/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-details-500/50 hover:shadow-[0_20px_40px_-15px_rgba(0,245,255,0.1)]"
    >
      {/* Animated Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-main-400/5 to-details-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon Wrapper */}
      <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-tertiary-800 border border-tertiary-700 text-main-400 group-hover:text-details-300 group-hover:border-details-500/30 transition-all duration-500">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-tertiary-50 mb-4 tracking-tight group-hover:text-main-300 transition-colors">
        {title}
      </h3>
      
      <p className="text-tertiary-400 leading-relaxed text-sm group-hover:text-tertiary-200 transition-colors">
        {description}
      </p>

      {/* Decorative Corner Detail */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-main-400/10 blur-[30px] rounded-full -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}