"use client";

import Link from "next/link";

const webCapabilities = [
  {
    badge: "SINGLE PAGE UX/UI",
    title: "Custom Single-Page Design",
    description: "Ultra-fast μονοσέλιδες ιστοσελίδες σχεδιασμένες από το μηδέν, με εικαστική ταυτότητα προσαρμοσμένη για άμεση μετατροπή των επισκεπτών σε πελάτες.",
    accent: "border-cyan-500/30 hover:border-cyan-500/60",
    glow: "group-hover:bg-cyan-500/10",
    badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-500/20",
  },
  {
    badge: "CORPORATE MULTI-PAGE",
    title: "Πολυσέλιδες Εταιρικές Πλατφόρμες",
    description: "Ολοκληρωμένη αρχιτεκτονική έως 6+ εντήτων (Αρχική, Υπηρεσίες, Σχετικά, Επικοινωνία) για την πλήρη προβολή του brand και των υπηρεσιών σας.",
    accent: "border-cyan-500/30 hover:border-cyan-500/60",
    glow: "group-hover:bg-cyan-500/10",
    badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-500/20",
  },
  {
    badge: "SMART BOOKING",
    title: "Online Booking System & Ημερολόγιο",
    description: "Ενσωμάτωση έξυπνων συστημάτων κρατήσεων και ημερολογίων για αυτόματο προγραμματισμό συναντήσεων και ραντεβού από τους πελάτες σας.",
    accent: "border-amber-500/30 hover:border-amber-500/60",
    glow: "group-hover:bg-amber-500/10",
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-500/20",
  },
  {
    badge: "PERFORMANCE 99+",
    title: "Ultra-Fast Ταχύτητα & Core Web Vitals",
    description: "Ακαριαία ταχύτητα φόρτωσης και πλήρης βελτιστοποίηση σε κινητά & tablets, που κρατάει τους επισκέπτες στη σελίδα και μειώνει το bounce rate.",
    accent: "border-amber-500/30 hover:border-amber-500/60",
    glow: "group-hover:bg-amber-500/10",
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-500/20",
  },
  {
    badge: "SEO DOMINANCE",
    title: "Προηγμένο On-Page SEO & Google Maps",
    description: "Πλήρης τεχνική βελτιστοποίηση SEO, διασύνδεση με Google Business Profile και τοπικές αναζητήσεις για κυριαρχία στις μηχανές αναζήτησης.",
    accent: "border-emerald-500/30 hover:border-emerald-500/60",
    glow: "group-hover:bg-emerald-500/10",
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-500/20",
  },
  {
    badge: "MANAGED HOSTING",
    title: "High-Speed Hosting & Security",
    description: "Managed dedicated φιλοξενία υψηλών ταχυτήτων, πιστοποιητικά ασφαλείας SSL, μηνιαία backups και continuous security updates.",
    accent: "border-emerald-500/30 hover:border-emerald-500/60",
    glow: "group-hover:bg-emerald-500/10",
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-500/20",
  },
  {
    badge: "ENTERPRISE ARCHITECTURE",
    title: "Custom Tailor-made Next.js Web Apps",
    description: "100% εξατομικευμένη ανάπτυξη με Next.js, dynamic client portals, custom dashboards και υποστήριξη πολλαπλών γλωσσών (Multi-language).",
    accent: "border-purple-500/30 hover:border-purple-500/60",
    glow: "group-hover:bg-purple-500/10",
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-500/20",
  },
  {
    badge: "ADVANCED API INTEGRATIONS",
    title: "CRM, ERP & Payment Gateways",
    description: "Διασύνδεση της ιστοσελίδας με εξωτερικά συστήματα CRM/ERP, πύλες πληρωμών και custom workflows για πλήρη αυτοματοποίηση των διαδικασιών.",
    accent: "border-purple-500/30 hover:border-purple-500/60",
    glow: "group-hover:bg-purple-500/10",
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-500/20",
  },
];

export default function WebServicesClient() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 pb-24 px-6 relative overflow-hidden font-sans">
      {/* Visual Ambient Lighting Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-112.5 bg-linear-to-b from-cyan-500/15 via-cyan-500/5 to-transparent blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-125 h-125 bg-amber-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest font-semibold">
              WEB DEVELOPMENT & DIGITAL PRESENCE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8">
            Ψηφιακή Παρουσία <br className="hidden sm:inline" />
            <span className="bg-linear-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              Υψηλής Αισθητικής & Απόδοσης
            </span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-normal mb-10">
            Δημιουργούμε ultra-fast, custom ιστοσελίδες και web applications για κάθε σύγχρονη επιχείρηση. Συνδυάζουμε το minimal design με την τεχνολογία αιχμής, μετατρέποντας την ψηφιακή σας εικόνα σε μηχανή προσέλκυσης νέων πελατών.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 bg-cyan-500 text-black font-extrabold text-xs uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25"
            >
              ΔΕΙΤΕ ΤΑ ΠΑΚΕΤΑ WEB →
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-800 hover:text-white transition-all"
            >
              ZHTΗΣΤΕ ΠΡΟΣΦΟΡΑ
            </Link>
          </div>
        </div>

        {/* Live Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md">
          <div className="text-center p-4">
            <div className="text-3xl md:text-4xl font-black text-cyan-400 mb-1">95+</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">PageSpeed Score</div>
          </div>
          <div className="text-center p-4 border-l border-zinc-800/80">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">&lt; 2s</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Χρόνος Φόρτωσης</div>
          </div>
          <div className="text-center p-4 border-l border-zinc-800/80">
            <div className="text-3xl md:text-4xl font-black text-cyan-400 mb-1">100%</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Custom Code</div>
          </div>
          <div className="text-center p-4 border-l border-zinc-800/80">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">SEO</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Optimized Engine</div>
          </div>
        </div>

        {/* Features Showcase Grid */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold block mb-2">
              WEB ARCHITECTURE & FEATURES
            </span>
            <h2 className="text-3xl md:text-5xl font-black">
              Δυνατότητες & Web Υπηρεσίες
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webCapabilities.map((feature, idx) => (
              <div
                key={idx}
                className={`group relative p-7 rounded-2xl bg-zinc-900/50 border transition-all duration-300 backdrop-blur-md overflow-hidden ${feature.accent}`}
              >
                <div className={`absolute inset-0 transition-colors duration-500 pointer-events-none ${feature.glow}`} />
                <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider mb-4 border ${feature.badgeColor}`}>
                  {feature.badge}
                </span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="relative rounded-3xl bg-linear-to-b from-zinc-900 to-black border border-cyan-500/20 p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Έτοιμοι για μια Σύγχρονη Ψηφιακή Παρουσία;
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Επιλέξτε ανάμεσα σε εφάπαξ κατασκευή ή μηνιαία διαχειριζόμενα πλάνα συντήρησης.
          </p>
          <Link
            href="/pricing"
            className="inline-block px-10 py-5 bg-cyan-500 text-black font-extrabold text-xs uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-all shadow-xl shadow-cyan-500/20"
          >
            ΔΕΙΤΕ ΤΑ ΠΑΚΕΤΑ & ΤΙΜΕΣ →
          </Link>
        </div>
      </div>
    </main>
  );
}