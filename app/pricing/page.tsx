"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const aiPlans = [
  {
    name: "Starter AI",
    badge: "Βασικό Πακέτο",
    priceMonthly: "149€",
    priceYearly: "119€",
    setupFee: "Δωρεάν Εγκατάσταση",
    description: "Για μικρά ιατρεία που θέλουν να καλύπτουν όλες τις εκτός ωραρίου κλήσεις.",
    isPopular: false,
    features: [
      "24/7 Αυτόματη Τηλεφωνική Υποδοχή",
      "Έως 150 λεπτά ομιλίας / μήνα",
      "Βασικό Triage & Καταγραφή Αιτημάτων",
      "SMS & Email Ειδοποιήσεις",
      "Εκπαίδευση με Βασικές Πληροφορίες",
      "Σύνδεση στον υπάρχοντα αριθμό"
    ]
  },
  {
    name: "Pro Clinic",
    badge: "Δημοφιλέστερο",
    priceMonthly: "299€",
    priceYearly: "239€",
    setupFee: "Δωρεάν Εγκατάσταση",
    description: "Πλήρης αυτοματοποίηση ραντεβού και υποδοχής για πολυιατρεία.",
    isPopular: true,
    features: [
      "Όλα τα στοιχεία του Starter",
      "Έως 500 λεπτά ομιλίας / μήνα",
      "Live Sync με Google/Outlook Calendar",
      "Εκπαίδευση με Πλήρη Τιμοκατάλογο",
      "Προτεραιοποίηση Επειγόντων (SMS Alert)",
      "Μηνιαίο Report & Analytics Κλήσεων"
    ]
  },
  {
    name: "Enterprise AI",
    badge: "Εξατομικευμένο",
    priceMonthly: "Custom",
    priceYearly: "Custom",
    setupFee: "Κατόπιν Συνεννόησης",
    description: "Για μεγάλες κλινικές με πολλαπλές έδρες και εξειδικευμένη ροή εργασιών.",
    isPopular: false,
    features: [
      "Απεριόριστα Λεπτά Ομιλίας",
      "Custom Integration με Dental CRM / ERP",
      "Custom Voice Cloning & AI Προσωπικότητα",
      "Δρομολόγηση για Πολλαπλούς Γιατρούς & Έδρες",
      "Προσωπικός Account Manager",
      "SLA Εγγύηση 99.9% Διαθεσιμότητας"
    ]
  }
];

const webServices = [
  {
    title: "Starter Landing",
    badge: "Βασικό Web",
    price: "250€",
    type: "Εφάπαξ επένδυση",
    description: "Μονοσέλιδη (Landing Page) ultra-fast ιστοσελίδα σχεδιασμένη για άμεση μετατροπή επισκεπτών σε ασθενείς.",
    isBestOffer: false,
    features: [
      "Μονοσέλιδη Δομή Υψηλής Μετατροπής (High-Converting)",
      "Πλήρως Βελτιστοποιημένο για Κινητά & Ακαριαία Ταχύτητα",
      "Παρουσίαση Ιατρείου & Βασικών Υπηρεσιών",
      "Ενσωμάτωση Google Maps & Φόρμας Επικοινωνίας",
      "Βασικό SEO & Σύνδεση με Social Media"
    ]
  },
  {
    title: "Multi-Page Clinic",
    badge: "Καλύτερη Επιλογή",
    price: "420€",
    type: "Εφάπαξ επένδυση",
    description: "Πλήρης πολυσέλιδη ιστοσελίδα για ολοκληρωμένη παρουσίαση του ιατρείου και των υπηρεσιών σας.",
    isBestOffer: true,
    features: [
      "Πολυσέλιδη Δομή (Αρχική, Υπηρεσίες, Γιατρός, Επικοινωνία)",
      "Διαδραστική Gallery Περιστατικών (Πριν & Μετά)",
      "Προηγμένο Τοπικό SEO (Local SEO) για Κατάταξη στο Google",
      "Άμεση Σύνδεση με Online Booking / AI Receptionist",
      "Δωρεάν SSL & Φιλοξενία (Hosting) για 1 Έτος"
    ]
  },
  {
    title: "Custom Bespoke Web",
    badge: "Ειδικός Σχεδιασμός",
    price: "Custom",
    type: "Κατόπιν Συνεννόησης",
    description: "Εξατομικευμένη λύση υψηλών απαιτήσεων για μεγάλες οδοντιατρικές κλινικές και πολυϊατρεία.",
    isBestOffer: false,
    features: [
      "100% Εξατομικευμένος Σχεδιασμός (Custom UX/UI Design)",
      "Πολυμεσικό & Διαδραστικό Περιεχόμενο (3D/Animations)",
      "Ειδικές Συνδέσεις (Integrations) με Dental ERP / CRM",
      "Υποστήριξη Πολλαπλών Γλωσσών (Πολυγλωσσικό)",
      "Αποκλειστική Υποδομή & Προτεραιότητα στην Υποστήριξη"
    ]
  }
];



export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 pb-24 px-6 relative overflow-hidden font-serif">
      {/* Atmosphere Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-150 bg-main-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[10px] font-bold text-main-400 uppercase tracking-[0.5em] mb-4 font-mono">
            ΤΙΜΟΚΑΤΑΛΟΓΟΣ & ΛΥΣΕΙΣ
          </h2>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
            ΟΛΟΚΛΗΡΩΜΕΝΑ ΠΑΚΕΤΑ <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-main-300 via-main-500 to-main-800">
              ΨΗΦΙΑΚΗΣ ΥΠΟΔΟΧΗΣ
            </span>
          </h1>
          <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
            Επιλέξτε την κατάλληλη συνδρομή AI Receptionist ή συνδυάστε την με μια σύγχρονη ιστοσελίδα.
          </p>
        </div>

        {/* SECTION 1: AI RECEPTIONIST PLANS */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-main-500/40 flex-1" />
            <span className="text-xs font-mono text-main-400 uppercase tracking-widest">01 // Πακέτα AI Receptionist</span>
            <div className="h-px bg-main-500/40 flex-1" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {aiPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-500 ${
                  plan.isPopular 
                    ? 'bg-zinc-900/40 border-2 border-main-500/80 shadow-[0_0_50px_rgba(212,175,55,0.12)]' 
                    : 'bg-zinc-900/20 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full ${
                      plan.isPopular ? 'bg-main-500/20 text-main-300 border border-main-500/30' : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-8 h-10">{plan.description}</p>

                  <div className="mb-1">
                    <span className="text-3xl font-black text-white">{plan.priceMonthly}</span>
                    {plan.priceMonthly !== "Custom" && <span className="text-zinc-500 text-sm"> / μήνα</span>}
                  </div>
                  <p className="text-[11px] font-mono text-main-400 mb-8">{plan.setupFee}</p>

                  <div className="w-full h-px bg-zinc-800 mb-8" />

                  <ul className="space-y-3.5 mb-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-zinc-300">
                        <svg className={`w-4 h-4 shrink-0 mt-0.5 ${plan.isPopular ? 'text-main-400' : 'text-cyan-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    plan.isPopular ? 'btn-primary' : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                  }`}
                >
                  ΕΠΙΛΟΓΗ ΠΑΚΕΤΟΥ
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: WEB CREATION SERVICES */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-cyan-500/40 flex-1" />
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">02 // Κατασκευή Ιστοσελίδων</span>
            <div className="h-px bg-cyan-500/40 flex-1" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {webServices.map((web, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 md:p-10 rounded-3xl border flex flex-col justify-between transition-all duration-500 ${
                  web.isBestOffer 
                    ? 'bg-cyan-950/20 border-2 border-cyan-500/80 shadow-[0_0_50px_rgba(6,182,212,0.15)]' 
                    : 'bg-zinc-900/20 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full ${
                      web.isBestOffer ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      {web.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{web.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-6 h-10">{web.description}</p>
                  
                  <div className="text-3xl font-black text-white mb-1">{web.price}</div>
                  <p className="text-xs font-mono text-cyan-400/80 mb-8">{web.type}</p>

                  <div className="w-full h-px bg-zinc-800 mb-8" />

                  <ul className="space-y-3.5 mb-10">
                    {web.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-zinc-300">
                        <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href="/#cta" 
                  className={`w-full py-4 text-center font-bold text-xs uppercase tracking-widest rounded-xl transition-all ${
                    web.isBestOffer 
                      ? 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                  }`}
                >
                  ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ WEB
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}