"use client";

import { useState } from 'react';
import PricingCard, { PlanFeature } from '@/components/ui/PricingCard';

// ----------------------------------------------------------------------
// TYPES & DATA
// ----------------------------------------------------------------------

type AiBillingType = 'monthly' | 'yearly';
type WebBillingType = 'onetime' | 'managed';
type AutoBillingType = 'monthly' | 'yearly';

const aiPlansData = {
  monthly: [
    {
      name: "Starter AI",
      badge: "Βασικό Πακέτο",
      price: "149€",
      period: "/ μήνα",
      setupFee: "Δωρεάν Εγκατάσταση",
      description: "Για μικρές επιχειρήσεις & ιατρεία που θέλουν να καλύπτουν όλες τις εκτός ωραρίου κλήσεις.",
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
      name: "Pro Reception",
      badge: "Δημοφιλέστερο",
      price: "299€",
      period: "/ μήνα",
      setupFee: "Δωρεάν Εγκατάσταση",
      description: "Πλήρης αυτοματοποίηση ραντεβού & εξυπηρέτησης πελατών για αναπτυσσόμενες εταιρείες.",
      isPopular: true,
      features: [
        "Όλα τα στοιχεία του Starter",
        "Έως 500 λεπτά ομιλίας / μήνα",
        "Live Sync με Google/Outlook Calendar",
        "Εκπαίδευση με Πλήρη Τιμοκατάλογο & FAQ",
        "Προτεραιοποίηση Επειγόντων (SMS Alert)",
        "Μηνιαίο Report & Analytics Κλήσεων"
      ]
    },
    {
      name: "Enterprise AI",
      badge: "Custom Scale",
      price: "Custom",
      period: "",
      setupFee: "Κατόπιν Συνεννόησης",
      description: "Για μεγάλους οργανισμούς με πολλαπλά τμήματα, υποκαταστήματα και αυξημένες απαιτήσεις.",
      isPopular: false,
      features: [
        "Απεριόριστα Λεπτά Ομιλίας",
        "Custom Integration με ERP / CRM / POS",
        "Custom Voice Cloning & AI Προσωπικότητα",
        "Δρομολόγηση για Πολλαπλά Τμήματα & Έδρες",
        "Προσωπικός Account Manager",
        "SLA Εγγύηση 99.9% Διαθεσιμότητας"
      ]
    }
  ],
  yearly: [
    {
      name: "Starter AI",
      badge: "Βασικό Πακέτο",
      price: "119€",
      period: "/ μήνα",
      setupFee: "Τιμολογείται ετησίως (1.428€)",
      description: "Για μικρές επιχειρήσεις & ιατρεία που θέλουν να καλύπτουν όλες τις εκτός ωραρίου κλήσεις.",
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
      name: "Pro Reception",
      badge: "Δημοφιλέστερο",
      price: "239€",
      period: "/ μήνα",
      setupFee: "Τιμολογείται ετησίως (2.868€)",
      description: "Πλήρης αυτοματοποίηση ραντεβού & εξυπηρέτησης πελατών για αναπτυσσόμενες εταιρείες.",
      isPopular: true,
      features: [
        "Όλα τα στοιχεία του Starter",
        "Έως 500 λεπτά ομιλίας / μήνα",
        "Live Sync με Google/Outlook Calendar",
        "Εκπαίδευση με Πλήρη Τιμοκατάλογο & FAQ",
        "Προτεραιοποίηση Επειγόντων (SMS Alert)",
        "Μηνιαίο Report & Analytics Κλήσεων"
      ]
    },
    {
      name: "Enterprise AI",
      badge: "Custom Scale",
      price: "Custom",
      period: "",
      setupFee: "Κατόπιν Συνεννόησης",
      description: "Για μεγάλους οργανισμούς με πολλαπλά τμήματα, υποκαταστήματα και αυξημένες απαιτήσεις.",
      isPopular: false,
      features: [
        "Απεριόριστα Λεπτά Ομιλίας",
        "Custom Integration με ERP / CRM / POS",
        "Custom Voice Cloning & AI Προσωπικότητα",
        "Δρομολόγηση για Πολλαπλά Τμήματα & Έδρες",
        "Προσωπικός Account Manager",
        "SLA Εγγύηση 99.9% Διαθεσιμότητας"
      ]
    }
  ]
};

const webPlansData = {
  onetime: [
    {
      title: "Starter Landing",
      badge: "Single Page",
      price: "350€",
      type: "Εφάπαξ πληρωμή",
      description: "Ultra-fast μονοσέλιδη ιστοσελίδα σχεδιασμένη για άμεση μετατροπή επισκεπτών σε πελάτες.",
      isBestOffer: false,
      features: [
        "Custom Single-Page UX/UI Design",
        "Ultra-Fast Ταχύτητα Φόρτωσης (<1s)",
        "Πλήρης Προσαρμογή σε Κινητά & Tablets",
        "Φόρμα Επικοινωνίας & Google Maps",
        "Βασικό On-Page SEO Optimization"
      ]
    },
    {
      title: "Corporate Multi-Page",
      badge: "Δημοφιλέστερο Web",
      price: "650€",
      type: "Εφάπαξ πληρωμή",
      description: "Ολοκληρωμένη πολυσέλιδη ιστοσελίδα για πλήρη προβολή των υπηρεσιών και του brand σας.",
      isBestOffer: true,
      features: [
        "Έως 6 Πολυσέλιδες Ενότητες (Αρχική, Υπηρεσίες, κ.ά.)",
        "Διαδραστική Gallery / Portfolio Έργων",
        "Προηγμένο Local SEO & Google Business Profile",
        "Διασύνδεση με Online Booking / Contact Funnels",
        "Δωρεάν SSL & Hosting για 1 Έτος"
      ]
    },
    {
      title: "Enterprise Custom Web",
      badge: "Bespoke Solution",
      price: "Custom",
      type: "Κατόπιν Συνεννόησης",
      description: "Εξατομικευμένη web εφαρμογή ή e-commerce υψηλών απαιτήσεων με custom integrations.",
      isBestOffer: false,
      features: [
        "100% Tailor-made Architecture (Next.js / Headless)",
        "Custom Dynamic Dashboards & Client Portals",
        "Advanced API Integrations (ERP / CRM / Payment Gateways)",
        "Πολυγλωσσική Υποστήριξη (Multi-language)",
        "Dedicated Server Deployment & 24/7 Monitoring"
      ]
    }
  ],
  managed: [
    {
      title: "Starter Landing",
      badge: "Single Page + Support",
      price: "190€",
      type: "+ 29€ / μήνα συντήρηση",
      description: "Μειωμένο αρχικό κόστος κατασκευής με πλήρη μηνιαία τεχνική υποστήριξη & φιλοξενία.",
      isBestOffer: false,
      features: [
        "Custom Single-Page UX/UI Design",
        "Δωρεάν High-Speed Hosting & Domain",
        "Μηνιαία Backups & Security Updates",
        "Έως 1 ώρα αλλαγών περιεχομένου / μήνα",
        "Βασικό On-Page SEO Optimization"
      ]
    },
    {
      title: "Corporate Multi-Page",
      badge: "Best Value Hybrid",
      price: "390€",
      type: "+ 49€ / μήνα συντήρηση",
      description: "Η ιδανική λύση για επιχειρήσεις που θέλουν χαμηλή αρχική επένδυση και συνεχόμενη ανανέωση.",
      isBestOffer: true,
      features: [
        "Έως 6 Πολυσέλιδες Ενότητες (Αρχική, Υπηρεσίες, κ.ά.)",
        "Δωρεάν Managed Dedicated Hosting",
        "Έως 3 ώρες αλλαγών & updates περιεχομένου / μήνα",
        "Συνεχής Βελτιστοποίηση SEO & Analytics Report",
        "24/7 VIP Τεχνική Υποστήριξη"
      ]
    },
    {
      title: "Enterprise Custom Web",
      badge: "Bespoke Managed",
      price: "Custom",
      type: "Custom Monthly SLA",
      description: "Πλήρως διαχειριζόμενη web πλατφόρμα με dedicated developer & continuous integration.",
      isBestOffer: false,
      features: [
        "100% Tailor-made Architecture (Next.js)",
        "Dedicated Managed Infrastructure",
        "Continuous Deployment & Custom Features",
        "Πολυγλωσσική Υποστήριξη (Multi-language)",
        "Guaranteed Response SLA (<2 hours)"
      ]
    }
  ]
};

const automationPlansData = {
  monthly: [
    {
      name: "Workflow Starter",
      badge: "Βασικός Αυτοματισμός",
      price: "129€",
      period: "/ μήνα",
      setupFee: "+ 150€ Setup Fee",
      description: "Αυτοματοποιήστε τις καθημερινές επαναλαμβανόμενες εργασίες και τα leads σας.",
      isPopular: false,
      features: [
        "Έως 2 Active Automations (Make/n8n)",
        "Lead Capture & Email Notifications",
        "Σύνδεση Φόρμας Site με Google Sheets/CRM",
        "Αυτόματα Email Επιβεβαίωσης Πελατών",
        "Μηνιαίος Έλεγχος Καλησ λειτουργίας"
      ]
    },
    {
      name: "Business Engine",
      badge: "Δημοφιλέστερο",
      price: "249€",
      period: "/ μήνα",
      setupFee: "+ 250€ Setup Fee",
      description: "Πλήρες σύστημα αυτοματοποίησης πωλήσεων, τιμολόγησης και CRM.",
      isPopular: true,
      features: [
        "Έως 6 Active Multi-Step Workflows",
        "Auto-Invoicing & Payment Alerts",
        "Two-Way Sync: CRM, WhatsApp, Email, Calendar",
        "Αυτοματοποιημένα Review Requests",
        "Custom Error Handling & Recovery Logs"
      ]
    },
    {
      name: "Custom Enterprise",
      badge: "Tailor-made Flows",
      price: "Custom",
      period: "",
      setupFee: "Κατόπιν Συνεννόησης",
      description: "Ειδικοί αυτοματισμοί μεγάλης κλίμακας για πολύπλοκα επιχειρησιακά workflows.",
      isPopular: false,
      features: [
        "Απεριόριστα Custom Workflows & Node Execution",
        "Custom Webhooks & Internal API Connectors",
        "AI Data Extraction (Parsing PDFs & Invoices)",
        "Self-Hosted n8n Infrastructure Setup",
        "Dedicated Automation Architect"
      ]
    }
  ],
  yearly: [
    {
      name: "Workflow Starter",
      badge: "Βασικός Αυτοματισμός",
      price: "99€",
      period: "/ μήνα",
      setupFee: "Δωρεάν Setup (Ετήσιο 1.188€)",
      description: "Αυτοματοποιήστε τις καθημερινές επαναλαμβανόμενες εργασίες και τα leads σας.",
      isPopular: false,
      features: [
        "Έως 2 Active Automations (Make/n8n)",
        "Lead Capture & Email Notifications",
        "Σύνδεση Φόρμας Site με Google Sheets/CRM",
        "Αυτόματα Email Επιβεβαίωσης Πελατών",
        "Μηνιαίος Έλεγχος Καλησ λειτουργίας"
      ]
    },
    {
      name: "Business Engine",
      badge: "Δημοφιλέστερο",
      price: "199€",
      period: "/ μήνα",
      setupFee: "Δωρεάν Setup (Ετήσιο 2.388€)",
      description: "Πλήρες σύστημα αυτοματοποίησης πωλήσεων, τιμολόγησης και CRM.",
      isPopular: true,
      features: [
        "Έως 6 Active Multi-Step Workflows",
        "Auto-Invoicing & Payment Alerts",
        "Two-Way Sync: CRM, WhatsApp, Email, Calendar",
        "Αυτοματοποιημένα Review Requests",
        "Custom Error Handling & Recovery Logs"
      ]
    },
    {
      name: "Custom Enterprise",
      badge: "Tailor-made Flows",
      price: "Custom",
      period: "",
      setupFee: "Κατόπιν Συνεννόησης",
      description: "Ειδικοί αυτοματισμοί μεγάλης κλίμακας για πολύπλοκα επιχειρησιακά workflows.",
      isPopular: false,
      features: [
        "Απεριόριστα Custom Workflows & Node Execution",
        "Custom Webhooks & Internal API Connectors",
        "AI Data Extraction (Parsing PDFs & Invoices)",
        "Self-Hosted n8n Infrastructure Setup",
        "Dedicated Automation Architect"
      ]
    }
  ]
};

// ----------------------------------------------------------------------
// PAGE COMPONENT
// ----------------------------------------------------------------------

export default function PricingPage() {
  const [aiBilling, setAiBilling] = useState<AiBillingType>('monthly');
  const [webBilling, setWebBilling] = useState<WebBillingType>('onetime');
  const [autoBilling, setAutoBilling] = useState<AutoBillingType>('monthly');

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 pb-24 px-6 relative overflow-hidden font-sans">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Διάλεξε τις Υπηρεσίες που Ταιριάζουν στην Επιχείρησή σου
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Διαφανείς τιμές χωρίς κρυφές χρεώσεις. Επιλέξτε τα πακέτα που καλύπτουν τις ανάγκες σας ή συνδυάστε τα για την απόλυτη ψηφιακή μεταμόρφωση.
          </p>
        </div>

        {/* SECTION 1: AI RECEPTIONIST */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-amber-400 text-xs font-mono uppercase tracking-widest font-bold">01 / AI VOICE AGENTS</span>
              <h2 className="text-3xl font-bold mt-2">AI Receptionist Plans</h2>
            </div>
            
            {/* AI Toggle */}
            <div className="bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-800 flex items-center self-start md:self-auto">
              <button
                onClick={() => setAiBilling('monthly')}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  aiBilling === 'monthly' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Μηνιαία
              </button>
              <button
                onClick={() => setAiBilling('yearly')}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  aiBilling === 'yearly' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Ετήσια
                <span className="bg-amber-400/20 text-amber-300 text-[10px] px-2 py-0.5 rounded-full border border-amber-500/30">
                  -20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {aiPlansData[aiBilling].map((plan, index) => (
              <PricingCard
                key={plan.name || index}
                plan={plan}
                index={index}
                accentColor="amber"
                ctaText="ΕΠΙΛΟΓΗ ΠΑΚΕΤΟΥ AI"
              />
            ))}
          </div>
        </div>

        {/* SECTION 2: WEB DEVELOPMENT */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest font-bold">02 / WEB DEVELOPMENT</span>
              <h2 className="text-3xl font-bold mt-2">Web Design & E-shop</h2>
            </div>

            {/* Web Toggle */}
            <div className="bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-800 flex items-center self-start md:self-auto">
              <button
                onClick={() => setWebBilling('onetime')}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  webBilling === 'onetime' ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Εφάπαξ
              </button>
              <button
                onClick={() => setWebBilling('managed')}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  webBilling === 'managed' ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Managed (Μηνιαίο)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {webPlansData[webBilling].map((plan, index) => (
              <PricingCard
                key={plan.title || index}
                plan={plan}
                index={index}
                accentColor="cyan"
                ctaText="ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ WEB"
              />
            ))}
          </div>
        </div>

        {/* SECTION 3: AUTOMATIONS */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-emerald-400 text-xs font-mono uppercase tracking-widest font-bold">03 / BUSINESS AUTOMATIONS</span>
              <h2 className="text-3xl font-bold mt-2">Workflow & API Automations</h2>
            </div>

            {/* Automation Toggle */}
            <div className="bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-800 flex items-center self-start md:self-auto">
              <button
                onClick={() => setAutoBilling('monthly')}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  autoBilling === 'monthly' ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Μηνιαία
              </button>
              <button
                onClick={() => setAutoBilling('yearly')}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  autoBilling === 'yearly' ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Ετήσια
                <span className="bg-emerald-400/20 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/30">
                  -20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {automationPlansData[autoBilling].map((plan, index) => (
              <PricingCard
                key={plan.name || index}
                plan={plan}
                index={index}
                accentColor="emerald"
                ctaText="ΕΠΙΛΟΓΗ AUTOMATION"
              />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}