"use client";

import Link from "next/link";

const coreCapabilities = [
  {
    badge: "VOICE AGENTS",
    title: "Φυσική Ομιλία & 24/7 Διαθεσιμότητα",
    description: "AI Agents που συνομιλούν με φυσική ελληνική φωνή, κατανοούν το πλαίσιο της συζήτησης και απαντούν ακαριαία χωρίς αναμονές.",
    accent: "border-amber-500/30 hover:border-amber-500/60",
    glow: "group-hover:bg-amber-500/10",
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-500/20",
  },
  {
    badge: "SMART BOOKING",
    title: "Διασύνδεση Ημερολογίων & CRM",
    description: "Απευθείας έλεγχος διαθεσιμότητας, προγραμματισμός συναντήσεων και αυτόματος συγχρονισμός με τα συστήματα της επιχείρησής σας.",
    accent: "border-cyan-500/30 hover:border-cyan-500/60",
    glow: "group-hover:bg-cyan-500/10",
    badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-500/20",
  },
  {
    badge: "AUTOMATED SMS & RECALLS",
    title: "Follow-ups & Ανάκτηση Χαμένων Κλήσεων",
    description: "Αυτόματη αποστολή SMS επιβεβαίωσης, υπενθυμίσεων και αυτόματη επανάκληση σε περιπτώσεις μη απαντημένων κλήσεων.",
    accent: "border-emerald-500/30 hover:border-emerald-500/60",
    glow: "group-hover:bg-emerald-500/10",
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-500/20",
  },
  {
    badge: "LIVE ROUTING",
    title: "Έξυπνη Δρομολόγηση & Ειδοποιήσεις",
    description: "Άμεση μεταφορά κλήσης στο κατάλληλο στέλεχος (Live Transfer) ή άμεση αποστολή ειδοποιήσεων για επείγοντα αιτήματα.",
    accent: "border-purple-500/30 hover:border-purple-500/60",
    glow: "group-hover:bg-purple-500/10",
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-500/20",
  },
];

const businessBenefits = [
  {
    icon: "⚡",
    title: "Ακαριαία Απόκριση",
    description: "Μηδενίστε τον χρόνο αναμονής των πελατών σας με άμεση εξυπηρέτηση 24 ώρες το 24ωρο, 365 ημέρες το χρόνο.",
  },
  {
    icon: "📈",
    title: "Αύξηση Μετατροπών",
    description: "Καταγράψτε κάθε επιχειρηματική ευκαιρία και μετατρέψτε τις εισερχόμενες κλήσεις σε επιβεβαιωμένα ραντεβού.",
  },
  {
    icon: "🔄",
    title: "Πλήρης Αυτοματοποίηση",
    description: "Απαλλάξτε την ομάδα σας από επαναλαμβανόμενες τηλεφωνικές εργασίες και εστιάστε στην ανάπτυξη της επιχείρησης.",
  },
  {
    icon: "🎯",
    title: "Προσαρμοστικότητα",
    description: "Πλήρης παραμετροποίηση στις διαδικασίες, τους κανόνες και το ύφος επικοινωνίας του οργανισμού σας.",
  },
  {
    icon: "📊",
    title: "Αναλυτικά Στοιχεία",
    description: "Πλήρης εικόνα για τους όγκους κλήσεων, τα αιτήματα των πελατών και την απόδοση της τηλεφωνικής υποδοχής.",
  },
  {
    icon: "🛡️",
    title: "Αξιοπιστία & Ασφάλεια",
    description: "Συνεχής διαθεσιμότητα με υψηλά πρότυπα ασφάλειας δεδομένων και ομαλή διασύνδεση με τις υπάρχουσες υποδομές σας.",
  },
];

export default function AIServicesClient() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 pb-24 px-6 relative overflow-hidden font-sans">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-500/15 via-amber-500/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-mono text-amber-300 uppercase tracking-widest font-semibold">
              NEXT-GEN AI TELEPHONY & WORKFLOWS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8">
            Ψηφιακοί <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">AI Receptionists</span> για την Επιχείρησή σας
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-normal mb-10">
            Μετατρέψτε κάθε τηλεφωνική κλήση σε ευκαιρία ανάπτυξης. Οι AI Voice Agents απαντούν ακαριαία 24/7, προγραμματίζουν ραντεβού, εξυπηρετούν πελάτες και αυτοματοποιούν την επικοινωνία του οργανισμού σας.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/25"
            >
              ΔΕΙΤΕ ΤΑ ΠΑΚΕΤΑ AI →
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-800 hover:text-white transition-all"
            >
              ΚΛΕΙΣΤΕ DEMO CALL
            </Link>
          </div>
        </div>

        {/* Performance Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-28 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md">
          <div className="text-center p-4">
            <div className="text-3xl md:text-4xl font-black text-amber-400 mb-1">100%</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Απάντηση Κλήσεων</div>
          </div>
          <div className="text-center p-4 border-l border-zinc-800/80">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">&lt; 1s</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Χρόνος Απόκρισης</div>
          </div>
          <div className="text-center p-4 border-l border-zinc-800/80">
            <div className="text-3xl md:text-4xl font-black text-amber-400 mb-1">24/7</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Συνεχής Λειτουργία</div>
          </div>
          <div className="text-center p-4 border-l border-zinc-800/80">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">0%</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Χαμένες Ευκαιρίες</div>
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold block mb-2">
              CORE CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-5xl font-black">
              Δυνατότητες AI Receptionist
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreCapabilities.map((feature, idx) => (
              <div
                key={idx}
                className={`group relative p-8 rounded-2xl bg-zinc-900/50 border transition-all duration-300 backdrop-blur-md overflow-hidden ${feature.accent}`}
              >
                <div className={`absolute inset-0 transition-colors duration-500 pointer-events-none ${feature.glow}`} />
                <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider mb-4 border ${feature.badgeColor}`}>
                  {feature.badge}
                </span>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Benefits Grid */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold block mb-2">
              VALUE PROPOSITION
            </span>
            <h2 className="text-3xl md:text-5xl font-black">
              Οφέλη για τον Οργανισμό σας
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-4">
              Σχεδιασμένο για να προσαρμόζεται πλήρως στη ροή εργασιών, τους κανόνες και τις ανάγκες κάθε σύγχρονης επιχειρηματικής δραστηριότητας.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessBenefits.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action */}
        <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900 to-black border border-amber-500/20 p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Έτοιμοι να Αναβαθμίσετε την Τηλεφωνική σας Υποδοχή;
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Επιλέξτε το κατάλληλο συνδρομητικό πακέτο ή επικοινωνήστε μαζί μας για τη διαμόρφωση μιας προσαρμοσμένης AI λύσης.
          </p>
          <Link
            href="/pricing"
            className="inline-block px-10 py-5 bg-amber-500 text-black font-extrabold text-xs uppercase tracking-widest rounded-xl hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20"
          >
            ΔΕΙΤΕ ΤΑ ΠΑΚΕΤΑ & ΤΙΜΕΣ →
          </Link>
        </div>
      </div>
    </main>
  );
}