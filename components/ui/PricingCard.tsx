"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export interface PlanFeature {
  title?: string;
  name?: string;
  badge: string;
  price: string;
  period?: string;
  type?: string;
  setupFee?: string;
  description: string;
  isPopular?: boolean;
  isBestOffer?: boolean;
  features: string[];
}

interface PricingCardProps {
  plan: PlanFeature;
  index: number;
  accentColor: 'amber' | 'cyan' | 'emerald';
  ctaText: string;
}

const colorStyles = {
  amber: {
    popularBorder: 'border-2 border-amber-500/80 shadow-[0_0_40px_rgba(245,158,11,0.12)]',
    badgePopular: 'bg-amber-500/20 text-amber-300 border border-amber-500/40',
    subText: 'text-amber-400/90',
    icon: 'text-amber-400',
    buttonPopular: 'bg-amber-500 hover:bg-amber-400 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]',
  },
  cyan: {
    popularBorder: 'bg-cyan-950/20 border-2 border-cyan-500/80 shadow-[0_0_40px_rgba(6,182,212,0.15)]',
    badgePopular: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40',
    subText: 'text-cyan-400/90',
    icon: 'text-cyan-400',
    buttonPopular: 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]',
  },
  emerald: {
    popularBorder: 'border-2 border-emerald-500/80 shadow-[0_0_40px_rgba(16,185,129,0.12)]',
    badgePopular: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40',
    subText: 'text-emerald-400/90',
    icon: 'text-emerald-400',
    buttonPopular: 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]',
  },
};

export default function PricingCard({ plan, index, accentColor, ctaText }: PricingCardProps) {
  const isHighlighted = plan.isPopular || plan.isBestOffer;
  const theme = colorStyles[accentColor];
  const title = plan.name || plan.title;
  const subDetail = plan.setupFee || plan.type;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-500 ${
        isHighlighted
          ? `bg-zinc-900/50 ${theme.popularBorder}`
          : 'bg-zinc-900/20 border border-zinc-800/80 hover:border-zinc-700'
      }`}
    >
      <div>
        <div className="flex justify-between items-center mb-6">
          <span
            className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full ${
              isHighlighted ? theme.badgePopular : 'bg-zinc-800 text-zinc-400'
            }`}
          >
            {plan.badge}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-zinc-400 text-xs leading-relaxed mb-8 h-10">{plan.description}</p>

        <div className="mb-1 flex items-baseline gap-1">
          <span className="text-4xl font-black text-white">{plan.price}</span>
          {plan.period && <span className="text-zinc-500 text-xs font-mono">{plan.period}</span>}
        </div>
        {subDetail && <p className={`text-[11px] font-mono ${theme.subText} mb-8`}>{subDetail}</p>}

        <div className="w-full h-px bg-zinc-800 mb-8" />

        <ul className="space-y-3.5 mb-10">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-xs text-zinc-300">
              <svg className={`w-4 h-4 shrink-0 mt-0.5 ${theme.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/#cta"
        className={`w-full py-4 text-center font-bold text-xs uppercase tracking-widest rounded-xl transition-all ${
          isHighlighted
            ? theme.buttonPopular
            : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
        }`}
      >
        {ctaText}
      </Link>
    </motion.div>
  );
}