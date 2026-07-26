"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const aiPlans = [
  {
    name: "Starter AI",
    badge: "Essential",
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
    badge: "Most Popular",
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
    name: "Enterprise",
    badge: "Bespoke",
    priceMonthly: "Custom",
    priceYearly: "Custom",
    setupFee: "Κατόπιν Συνεννόησης",
    description: "Για μεγάλες κλινικές με πολλαπλές έδρες και εξειδικευμένο ροή εργασιών.",
    isPopular: false,
    features: [
      "Απεριόριστα Λεπτά Ομιλίας",
      "Custom Integration με Dental CRM / ERP",
      "Custom Voice Cloning & Persona AI",
      "Multi-doctor & Multi-location Routing",
      "Dedicated Account Manager",
      "SLA Εγγύηση 99.9% Availability"
    ]
  }
];

const webServices = [
  {
    title: "Dental Web Presence",
    badge: "Standalone",
    price: "από 890€",
    type: "Εφάπαξ επένδυση",
    description: "Σύγχρονη, ultra-fast ιστοσελίδα σχεδιασμένη αποκλειστικά για οδοντιατρεία.",
    features: [
      "Custom UX/UI Design (Dark / Light Modern Theme)",
      "Πλήρως Responsive & Mobile Optimized",
      "SEO Optimization για τοπική αναζήτηση",
      "Παρουσίαση Υπηρεσιών & Περιστατικών (Before/After)",
      "Ενσωμάτωση Φόρμας Ραντεβού & Google Maps"
    ]
  },
  {
    title: "Web + AI Ecosystem",
    badge: "Bundle Offer (-25%)",
    price: "Custom Package",
    type: "Ολοκληρωμένη Λύση",
    description: "Συνδυάστε τη νέα σας ιστοσελίδα με την AI Receptionist για μέγιστη μετατροπή.",
    isBundle: true,
    features: [
      "Πλήρης Κατασκευή Premium Ιστοσελίδας",
      "Direct Integration με την AI Receptionist",
      "Live Web Call Widget στο site",
      "25% Έκπτωση στην κατασκευή του Web",
      "Δωρεάν Hosting & Συντήρηση για 1 Έτος"
    ]
  }
];

const faqs = [
  {
    q: "Χρειάζεται να αλλάξω τον τηλεφωνικό αριθμό του ιατρείου;",
    a: "Όχι. Η προώθηση κλήσεων γίνεται αυτόματα στον δικό σας υπάρχοντα αριθμό. Δεν αλλάζετε πάροχο ούτε εξοπλισμό."
  },
  {
    q: "Πώς η AI αναγνωρίζει τα επείγοντα περιστατικά;",
    a: "Το σύστημα αναγνωρίζει λέξεις-κλειδιά (π.χ. οξύς πόνος, αιμορραγία) και ειδοποιεί αμέσως τον γιατρό μέσω SMS με την περίληψη της κλήσης."
  },
  {
    q: "Πόσος χρόνος χρειάζεται για την εγκατάσταση;",
    a: "Η σύνδεση της AI Receptionist ολοκληρώνεται σε 24-48 ώρες. Για την κατασκευή ιστοσελίδας ο μέσος χρόνος είναι 10-14 εργάσιμες ημέρες."
  }
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 pb-24 px-6 relative overflow-hidden font-serif">
      {/* Atmosphere Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-150 bg-main-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[10px] font-bold text-main-400 uppercase tracking-[0.5em] mb-4 font-mono">
            PRICING & SOLUTIONS
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

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800 font-mono text-xs">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full transition-all ${!isAnnual ? 'bg-main-500 text-black font-bold' : 'text-zinc-400'}`}
            >
              Μηνιαία
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full transition-all ${isAnnual ? 'bg-main-500 text-black font-bold' : 'text-zinc-400'}`}
            >
              Ετήσια (-20%)
            </button>
          </div>
        </div>

        {/* SECTION 1: AI RECEPTIONIST PLANS */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-main-500/40 flex-1" />
            <span className="text-xs font-mono text-main-400 uppercase tracking-widest">01 // AI Receptionist Plans</span>
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
                    <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
                      {isAnnual ? plan.priceYearly : plan.priceMonthly}
                    </span>
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
                  Επιλογη Πακετου
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: WEB CREATION SERVICES */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-cyan-500/40 flex-1" />
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">02 // Web Development for Dentists</span>
            <div className="h-px bg-cyan-500/40 flex-1" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {webServices.map((web, i) => (
              <div 
                key={i}
                className={`p-8 md:p-10 rounded-3xl border transition-all ${
                  web.isBundle 
                    ? 'bg-cyan-950/20 border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.1)]' 
                    : 'bg-zinc-900/20 border-zinc-800'
                }`}
              >
                <div className="flex justify-between items-center mb-6">
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full ${
                    web.isBundle ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-zinc-800 text-zinc-400'
                  }`}>
                    {web.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{web.title}</h3>
                <p className="text-zinc-400 text-xs mb-6">{web.description}</p>
                <div className="text-3xl font-black text-white mb-1">{web.price}</div>
                <p className="text-xs font-mono text-zinc-500 mb-8">{web.type}</p>

                <div className="w-full h-px bg-zinc-800 mb-8" />

                <ul className="space-y-3.5 mb-8">
                  {web.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-zinc-300">
                      <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/#cta" className="btn-secondary w-full py-4 text-center text-xs block">
                  ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ WEB
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: FAQ */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10 tracking-tight">Συχνές Ερωτήσεις (FAQ)</h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
                <h4 className="text-white font-bold text-sm mb-2">{faq.q}</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}