"use client";

import Link from "next/link";

const automationFeatures = [
  {
    badge: "REPUTATION ENGINE",
    title: "Αυτόματη Συλλογή Google Reviews",
    description: "Έξυπνη αποστολή αιτημάτων αξιολόγησης μέσω SMS/Viber μετά την ολοκλήρωση της υπηρεσίας για συνεχή ενίσχυση της φήμης σας στο Google.",
    accent: "border-emerald-500/30 hover:border-emerald-500/60",
    glow: "group-hover:bg-emerald-500/10",
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-500/20",
  },
  {
    badge: "NO-SHOW REDUCTION",
    title: "Μείωση Μη Εμφανίσεων Πελατών",
    description: "Αυτοματοποιημένες υπενθυμίσεις SMS 24 ώρες και 2 ώρες πριν το ραντεβού, επιτρέποντας στους πελάτες άμεση επιβεβαίωση ή ακύρωση.",
    accent: "border-emerald-500/30 hover:border-emerald-500/60",
    glow: "group-hover:bg-emerald-500/10",
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-500/20",
  },
  {
    badge: "CALL RECOVERY",
    title: "Ανάκτηση Χαμένων Κλήσεων",
    description: "Ακαριαία αποστολή SMS follow-up και αυτόματη καταγραφή αιτήματος αμέσως μόλις υπάρξει μη απαντημένη κλήση.",
    accent: "border-cyan-500/30 hover:border-cyan-500/60",
    glow: "group-hover:bg-cyan-500/10",
    badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-500/20",
  },
  {
    badge: "REAL-TIME ALERTS",
    title: "Ειδοποιήσεις SMS, Email & Telegram",
    description: "Άμεση ενημέρωση της ομάδας σας στο κινητό ή στο email σε πραγματικό χρόνο για κάθε νέα κράτηση, αλλαγή ή επείγον αίτημα.",
    accent: "border-cyan-500/30 hover:border-cyan-500/60",
    glow: "group-hover:bg-cyan-500/10",
    badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-500/20",
  },
  {
    badge: "SMART BOOKING",
    title: "Σύστημα Κρατήσεων & Calendar Sync",
    description: "Πλήρης συντονισμός Two-Way μεταξύ του ημερολογίου της επιχείρησής σας (Google/Outlook Calendar) και των ειδοποιήσεων.",
    accent: "border-amber-500/30 hover:border-amber-500/60",
    glow: "group-hover:bg-amber-500/10",
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-500/20",
  },
  {
    badge: "CLIENT RECALL",
    title: "Αυτοματοποιημένη Επαναφορά Πελατών",
    description: "Προγραμματισμένος επανέλεγχος (Recall) που υπενθυμίζει αυτόματα στους πελάτες τον προγραμματισμό της επόμενης επίσκεψης.",
    accent: "border-amber-500/30 hover:border-amber-500/60",
    glow: "group-hover:bg-amber-500/10",
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-500/20",
  },
  {
    badge: "SLOT RECOVERY",
    title: "Ανάκτηση Κενών Θέσεων & Λίστα Αναμονής",
    description: "Αυτόματη κάλυψη ακυρωμένων ραντεβού μέσω άμεσης ειδοποίησης των επόμενων διαθέσιμων πελατών στη λίστα αναμονής.",
    accent: "border-purple-500/30 hover:border-purple-500/60",
    glow: "group-hover:bg-purple-500/10",
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-500/20",
  },
  {
    badge: "ENTERPRISE FLOWS",
    title: "Custom CRM & ERP Integrations",
    description: "Εξατομικευμένη διασύνδεση με το υπάρχον CRM/ERP της επιχείρησής σας μέσω Custom API, Webhooks και Dedicated Architect.",
    accent: "border-purple-500/30 hover:border-purple-500/60",
    glow: "group-hover:bg-purple-500/10",
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-500/20",
  },
];

export default function AutomationsClient() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 pb-24 px-6 relative overflow-hidden font-sans">
      {/* Background Lighting Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-112.5 bg-linear-to-b from-emerald-500/15 via-emerald-500/5 to-transparent blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-125 h-125 bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-emerald-300 uppercase tracking-widest font-semibold">
              WORKFLOWS & BUSINESS AUTOMATIONS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8">
            Έξυπνες <span className="bg-linear-to-r from-emerald-200 via-emerald-400 to-teal-500 bg-clip-text text-transparent">Αυτοματοποιήσεις</span> για Κάθε Επιχείρηση
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-normal mb-10">
            Συνδέστε το CRM, το ημερολόγιο και τα κανάλια επικοινωνίας του οργανισμού σας. Εξαλείψτε τις μη εμφανίσεις πελατών (No-shows), ανακτήστε χαμένες κλήσεις και αυξήστε τις αξιολογήσεις σας στο Google χωρίς χειροκίνητη προσπάθεια.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-black font-extrabold text-xs uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25"
            >
              ΔΕΙΤΕ ΤΑ ΠΑΚΕΤΑ ΑΥΤΟΜΑΤΟΠΟΙΗΣΗΣ →
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-800 hover:text-white transition-all"
            >
              ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ
            </Link>
          </div>
        </div>

        {/* Dynamic Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md">
          <div className="text-center p-4">
            <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">-80%</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Ακυρώσεις No-Show</div>
          </div>
          <div className="text-center p-4 border-l border-zinc-800/80">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">100%</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Ανάκτηση Κλήσεων</div>
          </div>
          <div className="text-center p-4 border-l border-zinc-800/80">
            <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">5x</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Περισσότερα Reviews</div>
          </div>
          <div className="text-center p-4 border-l border-zinc-800/80">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">24/7</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Αυτόματο Sync</div>
          </div>
        </div>

        {/* Features Showcase Grid */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold block mb-2">
              AUTOMATION ENGINE FEATURES
            </span>
            <h2 className="text-3xl md:text-5xl font-black">
              Δυνατότητες & Λειτουργίες
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={`group relative p-7 rounded-2xl bg-zinc-900/50 border transition-all duration-300 backdrop-blur-md overflow-hidden ${feature.accent}`}
              >
                <div className={`absolute inset-0 transition-colors duration-500 pointer-events-none ${feature.glow}`} />
                <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider mb-4 border ${feature.badgeColor}`}>
                  {feature.badge}
                </span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-3xl bg-linear-to-b from-zinc-900 to-black border border-emerald-500/20 p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Εκσυγχρονίστε τις Ροές Εργασίας της Επιχείρησής σας
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Επιλέξτε το κατάλληλο πακέτο αυτοματοποιήσεων ή επικοινωνήστε μαζί μας για τη διαμόρφωση custom ροής εργασιών.
          </p>
          <Link
            href="/pricing"
            className="inline-block px-10 py-5 bg-emerald-500 text-black font-extrabold text-xs uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20"
          >
            ΔΕΙΤΕ ΤΑ ΠΑΚΕΤΑ & ΤΙΜΕΣ →
          </Link>
        </div>
      </div>
    </main>
  );
}