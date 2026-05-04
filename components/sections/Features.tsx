"use client";

import React from 'react';
import FeatureCard from '../ui/FeatureCard';

const features = [
  {
    title: "24/7 Υποδοχή",
    description: "Η AI receptionist απαντά σε εισερχόμενες κλήσεις όλο το 24ωρο, διασφαλίζοντας ότι καμία ευκαιρία δεν χάνεται, ακόμα και εκτός ωραρίου.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    )
  },
  {
    title: "Έξυπνη Κατηγοριοποίηση",
    description: "Ξεχωρίζει αυτόματα τα επείγοντα περιστατικά από τις γενικές ερωτήσεις και προωθεί σωστά τις πληροφορίες στην ομάδα σας.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
    )
  },
  {
    title: "Διαχείριση Αιτημάτων",
    description: "Καταγράφει με ακρίβεια τα στοιχεία των ασθενών και παρέχει βασικές πληροφορίες για το ιατρείο, όπως ωράριο και τοποθεσία.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    )
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-[#030303] relative overflow-hidden" id="features">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-main-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-bold text-main-400 uppercase tracking-[0.4em] mb-4 font-mono">
            Η ΛΥΣΗ ΜΑΣ
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Μια AI Receptionist σχεδιασμένη <br />
            <span className="italic font-serif font-light text-zinc-400">αποκλειστικά για οδοντιατρεία</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              index={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}