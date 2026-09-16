"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  detailedFeatures?: string[]; // Προαιρετική λίστα με εκτενείς λεπτομέρειες για το modal
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
    modalBorder: 'border-amber-500/30',
    moreBtn: 'text-amber-400 hover:text-amber-300',
  },
  cyan: {
    popularBorder: 'bg-cyan-950/20 border-2 border-cyan-500/80 shadow-[0_0_40px_rgba(6,182,212,0.15)]',
    badgePopular: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40',
    subText: 'text-cyan-400/90',
    icon: 'text-cyan-400',
    buttonPopular: 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]',
    modalBorder: 'border-cyan-500/30',
    moreBtn: 'text-cyan-400 hover:text-cyan-300',
  },
  emerald: {
    popularBorder: 'border-2 border-emerald-500/80 shadow-[0_0_40px_rgba(16,185,129,0.12)]',
    badgePopular: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40',
    subText: 'text-emerald-400/90',
    icon: 'text-emerald-400',
    buttonPopular: 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]',
    modalBorder: 'border-emerald-500/30',
    moreBtn: 'text-emerald-400 hover:text-emerald-300',
  },
};

export default function PricingCard({ plan, index, accentColor, ctaText }: PricingCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isHighlighted = plan.isPopular || plan.isBestOffer;
  const theme = colorStyles[accentColor];
  const title = plan.name || plan.title;
  const subDetail = plan.setupFee || plan.type;
  const modalFeatures = plan.detailedFeatures || plan.features;

  // Lock scroll όταν το modal είναι ανοιχτό
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Κλείσιμο με ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
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

          <ul className="space-y-3.5 mb-8">
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

        <div className="space-y-4">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className={`w-full text-center text-s font-mono underline underline-offset-4 transition-colors ${theme.moreBtn} cursor-pointer`}
          >
            Περισσότερες Λεπτομέρειες
          </button>

          <Link
            href="/contact"
            className={`w-full block py-4 text-center font-bold text-xs uppercase tracking-widest rounded-xl transition-all ${
              isHighlighted
                ? theme.buttonPopular
                : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
            }`}
          >
            {ctaText}
          </Link>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-zinc-950 border ${theme.modalBorder} rounded-3xl p-6 md:p-8 shadow-2xl z-10 text-white scrollbar-thin scrollbar-thumb-zinc-800`}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-10">
                <span
                  className={`inline-block text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${
                    isHighlighted ? theme.badgePopular : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  {plan.badge}
                </span>
                <h3 className="text-3xl font-bold">{title}</h3>
                <p className="text-zinc-400 text-sm mt-2">{plan.description}</p>
              </div>

              {/* Pricing Summary */}
              <div className="bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800/80 mb-6 flex items-baseline justify-between">
                <div>
                  <span className="text-3xl font-black">{plan.price}</span>
                  {plan.period && <span className="text-zinc-500 text-xs font-mono ml-1">{plan.period}</span>}
                </div>
                {subDetail && <span className={`text-xs font-mono ${theme.subText}`}>{subDetail}</span>}
              </div>

              {/* Features List */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 font-bold">
                  Πληρης Λιστα Παροχων & Χαρακτηριστικων
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {modalFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-zinc-300 bg-zinc-900/30 p-3 rounded-xl border border-zinc-800/40">
                      <svg className={`w-4 h-4 shrink-0 mt-0.5 ${theme.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-1/3 py-3.5 text-center font-bold text-xs uppercase tracking-widest rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 transition-all border border-zinc-800"
                >
                  Κλεισιμο
                </button>
                <Link
                  href="/#cta"
                  onClick={() => setIsModalOpen(false)}
                  className={`w-full sm:w-2/3 py-3.5 text-center font-bold text-xs uppercase tracking-widest rounded-xl transition-all ${
                    isHighlighted
                      ? theme.buttonPopular
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                  }`}
                >
                  {ctaText}
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}