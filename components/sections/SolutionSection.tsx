"use client";

import { motion } from "framer-motion";

const agentFeatures = [
  {
    id: "01",
    tag: "A.I. ΡΕΣΕΨΙΟΝΙΣΤ",
    title: "Αυτόματη Απάντηση & Φυσική Επικοινωνία",
    description:
      "Απαντά αμέσως σε κάθε κλήση, διαχειρίζεται πολλαπλά αιτήματα (κρατήσεις, ακυρώσεις, μεταθέσεις, συχνές ερωτήσεις) σε μία κλήση και προσφέρει επιλογές AI-first, overflow ή after-hours.",
    benefit:
      "Πλήρης κάλυψη του ιατρείου 24/7 χωρίς να χάνεται καμία κλήση ασθενούς.",
    accent: "amber",
    visual: (
      <div className="bg-zinc-950 p-4 rounded-xl border border-amber-500/20 font-mono text-xs space-y-2">
        <div className="flex items-center justify-between text-amber-400 border-b border-zinc-800 pb-2">
          <span className="flex items-center gap-2 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            ΚΑΤΑΣΤΑΣΗ: ΑΝΑΛΗΨΗ ΚΛΗΣΗΣ
          </span>
          <span className="text-[10px] text-zinc-500">ZADARMA PBX</span>
        </div>
        <div className="flex items-center gap-1.5 pt-1">
          <div className="w-1 h-4 bg-amber-500/80 rounded-full animate-bounce" />
          <div className="w-1 h-7 bg-amber-400 rounded-full animate-bounce [animation-delay:0.1s]" />
          <div className="w-1 h-3 bg-amber-500/80 rounded-full animate-bounce [animation-delay:0.2s]" />
          <div className="w-1 h-6 bg-amber-300 rounded-full animate-bounce [animation-delay:0.3s]" />
          <div className="w-1 h-2 bg-amber-500/50 rounded-full animate-bounce [animation-delay:0.4s]" />
          <span className="text-[10px] text-zinc-400 font-sans ml-2">
            «Γεια σας, πώς μπορώ να σας εξυπηρετήσω;»
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "02",
    tag: "ΔΙΑΧΕΙΡΙΣΗ ΡΑΝΤΕΒΟΥ",
    title: "Προγραμματισμός & Συγχρονισμός",
    description:
      "Κλείνει, ελέγχει, ακυρώνει και μεταθέτει ραντεβού βάσει των κανόνων του ιατρείου (διάρκεια, ελάχιστος χρόνος προειδοποίησης, προετοιμασία) με αυτόματο συγχρονισμό Google Calendar.",
    benefit:
      "Απόλυτος έλεγχος του προγράμματος χωρίς διπλοεγγραφές ή λάθη.",
    accent: "amber",
    visual: (
      <div className="bg-zinc-950 p-4 rounded-xl border border-amber-500/20 text-xs font-mono">
        <div className="text-amber-400 mb-2 font-bold flex justify-between text-[11px]">
          <span>GOOGLE CALENDAR SYNC</span>
          <span className="text-emerald-400">✓ ΣΥΓΧΡΟΝΙΣΜΕΝΟ</span>
        </div>
        <div className="space-y-1.5 text-[11px]">
          <div className="p-2 rounded bg-zinc-900 border border-zinc-800 flex justify-between items-center text-zinc-400">
            <span>• Καθαρισμός (30 λεπτά)</span>
            <span className="text-[9px] bg-amber-950/60 text-amber-400 px-1.5 py-0.5 rounded">
              Κανόνες Ιατρείου
            </span>
          </div>
          <div className="p-2 rounded bg-amber-950/40 border border-amber-500/30 flex justify-between items-center text-white font-bold">
            <span>• Νέο Ραντεβού: 17:30</span>
            <span className="text-[9px] bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded">
              Καταχωρήθηκε
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "03",
    tag: "ΔΙΑΛΟΓΗ ΕΠΕΙΓΟΝΤΩΝ",
    title: "Διαχείριση Επειγόντων & Telegram Alerts",
    description:
      "Εντοπίζει επείγοντα οδοντιατρικά περιστατικά εκτός ωραρίου, επιχειρεί μεταβίβαση στον γιατρό ή αποστέλλει άμεση ειδοποίηση Telegram με κουμπί επιβεβαίωσης.",
    benefit:
      "Άμεση αντίδραση στα κρίσιμα περιστατικά με πλήρη ασφάλεια δεδομένων.",
    accent: "red",
    visual: (
      <div className="bg-zinc-950 p-4 rounded-xl border border-red-500/20 text-xs font-mono space-y-2">
        <div className="flex items-center justify-between text-red-400 font-bold text-[11px]">
          <span className="flex items-center gap-1.5">
            <span className="text-xs">🚨</span> ΤΗΛΕΓΡΑΦΗΜΑ / TELEGRAM ALERT
          </span>
          <span className="text-[9px] bg-red-950 text-red-400 px-1.5 py-0.5 rounded">
            ΕΠΕΙΓΟΝ
          </span>
        </div>
        <div className="p-2.5 rounded bg-red-950/30 border border-red-500/30 text-zinc-300 font-sans text-[11px]">
          <span className="text-red-400 font-mono font-bold block mb-1">
            Ειδοποίηση Εκτός Ωραρίου:
          </span>
          «Κλήση επιστροφής: +30 69XXXXXXXX | Ώρα: 21:15 | [Επιβεβαίωση]»
        </div>
      </div>
    ),
  },
  {
    id: "04",
    tag: "ΒΑΣΗ ΓΝΩΣΗΣ & FAQs",
    title: "Εγκεκριμένες Απαντήσεις Ιατρείου",
    description:
      "Απαντά σε συχνές ερωτήσεις για υπηρεσίες, τιμές, ασφάλειες, τρόπους πληρωμής, πρόσβαση/parking και οδηγίες προετοιμασίας βάσει των δικών σας γραπτών εγκρίσεων.",
    benefit:
      "Αποσυμφόρηση της γραμματείας από επαναλαμβανόμενες τηλεφωνικές ερωτήσεις.",
    accent: "amber",
    visual: (
      <div className="bg-zinc-950 p-4 rounded-xl border border-amber-500/20 text-xs font-mono space-y-2">
        <div className="text-zinc-400 text-[10px]">
          Ερώτηση: «Ποιο είναι το ωράριο & οι τιμές;»
        </div>
        <div className="p-2 bg-amber-950/30 border border-amber-500/20 rounded text-amber-200 font-sans text-[11px]">
          «Το ιατρείο λειτουργεί 09:00-21:00. Ο καθαρισμός ανέρχεται στα... Θέλετε
          να ελέγξουμε διαθεσιμότητα;»
        </div>
      </div>
    ),
  },
  {
    id: "05",
    tag: "ΕΞΥΠΝΗ ΔΡΟΜΟΛΟΓΗΣΗ",
    title: "Ζωντανή Μεταβίβαση & Safe Fallbacks",
    description:
      "Μεταβιβάζει ζωντανά την κλήση στη γραμματεία κατά τις ώρες λειτουργίας. Αν δεν υπάρξει απάντηση ή αν η κλήση είναι από απόκρυψη, ενεργοποιεί αυτόματα ασφαλή διαδρομή.",
    benefit:
      "Μηδενικό ρίσκο απώλειας επικοινωνίας χάρη στα διπλά επίπεδα ασφαλείας.",
    accent: "amber",
    visual: (
      <div className="bg-zinc-950 p-4 rounded-xl border border-amber-500/20 text-xs font-mono space-y-1.5">
        <div className="text-amber-400 font-bold text-[11px]">
          ROUTING & CALL TRANSFER
        </div>
        <div className="grid grid-cols-2 gap-1.5 text-[10px]">
          <div className="p-1.5 bg-zinc-900 rounded border border-zinc-800 text-zinc-300">
            <span>• Ώρες Εργασίας</span> → Transfer
          </div>
          <div className="p-1.5 bg-zinc-900 rounded border border-zinc-800 text-zinc-300">
            <span>• Μη Απάντηση</span> → Callback Request
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "06",
    tag: "ΤΗΛΕΦΩΝΙΚΟ ΟΙΚΟΣΥΣΤΗΜΑ",
    title: "Zadarma PBX & Πολυ-Εταιρική Υποδομή",
    description:
      "Σύνδεση μέσω Zadarma PBX με υποστήριξη για 1 έως 3 γιατρούς/ημερολόγια, πολλαπλά εσωτερικά γραμματείας (Softphones) και παράλληλες AI κλήσεις.",
    benefit:
      "Πλήρης επεκτασιμότητα που προσαρμόζεται από μικρά έως πολυμελή ιατρεία.",
    accent: "cyan",
    visual: (
      <div className="bg-zinc-950 p-4 rounded-xl border border-cyan-500/20 text-xs font-mono space-y-2">
        <div className="flex justify-between items-center text-cyan-400 text-[11px]">
          <span>ZADARMA PBX / EXTENSIONS</span>
          <span className="text-emerald-400">ΕΝΕΡΓΟ</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 justify-center py-1">
          <span className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
            AI Line
          </span>
          <span>↔</span>
          <span className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
            Staff App
          </span>
          <span>↔</span>
          <span className="bg-cyan-950 text-cyan-300 px-2 py-1 rounded border border-cyan-800">
            Google Cal
          </span>
        </div>
      </div>
    ),
  },
];

export default function SolutionValueSection() {
  return (
    <section className="relative py-28 px-6 bg-[#030303] overflow-hidden">
      {/* Background Atmosphere Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-150 bg-amber-500/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-[0.4em] px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/20">
            Ο A.I. AGENT ΣΤΗΝ ΠΡΑΞΗ
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-6 mb-4 tracking-tight font-serif leading-tight">
            Ένας Αυτόνομος 24/7{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-500 to-amber-200">
              Ψηφιακός Ρεσεψιονίστ
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Ανακαλύψτε πώς η τεχνητή νοημοσύνη διαχειρίζεται τις τηλεφωνικές κλήσεις, τις κρατήσεις ραντεβού και την εξυπηρέτηση των ασθενών με απόλυτη ασφάλεια.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agentFeatures.map((item, index) => {
            const isCyan = item.accent === "cyan";
            const isRed = item.accent === "red";

            let borderStyle = "border-amber-500/30 hover:border-amber-500/60";
            let tagStyle = "text-amber-400 bg-amber-950/40 border-amber-500/30";
            let benefitTextColor = "text-amber-300/90";

            if (isCyan) {
              borderStyle = "border-cyan-500/30 hover:border-cyan-500/60";
              tagStyle = "text-cyan-400 bg-cyan-950/40 border-cyan-500/30";
              benefitTextColor = "text-cyan-300/90";
            } else if (isRed) {
              borderStyle = "border-red-500/30 hover:border-red-500/60";
              tagStyle = "text-red-400 bg-red-950/40 border-red-500/30";
              benefitTextColor = "text-red-300/90";
            }

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`group relative rounded-3xl p-7 bg-zinc-900/30 border backdrop-blur-xl flex flex-col justify-between transition-all duration-500 ${borderStyle}`}
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-[10px] font-mono tracking-widest px-2.5 py-0.5 rounded-full border uppercase ${tagStyle}`}
                    >
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono text-zinc-600 font-bold">
                      {item.id}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed font-light mb-6">
                    {item.description}
                  </p>

                  {/* Interactive Visual Element */}
                  <div className="mb-6">{item.visual}</div>
                </div>

                {/* Feature Benefit Callout */}
                <div className="pt-4 border-t border-zinc-800/80">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                    ΟΦΕΛΟΣ ΙΑΤΡΕΙΟΥ
                  </span>
                  <p
                    className={`text-xs font-medium leading-snug ${benefitTextColor}`}
                  >
                    {item.benefit}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}