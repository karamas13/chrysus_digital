"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: string;
  category: "λειτουργια" | "τεχνικα" | "ασφαλεια" | "τιμολογηση";
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "λειτουργια",
    question: "Πώς διαχειρίζεται ο A.I. Agent τα ραντεβού στο Google Calendar;",
    answer:
      "Ο A.I. Agent συνδέεται απευθείας με το Google Calendar του ιατρείου. Ελέγχει τη διαθεσιμότητα σε πραγματικό χρόνο βάσει των κανόνων που ορίζετε (διάρκεια συνεδρίας, ελάχιστος χρόνος προειδοποίησης, απαιτούμενος χρόνος προετοιμασίας) και καταχωρεί, ακυρώνει ή μεταθέτει ραντεβού χωρίς κίνδυνο διπλοεγγραφών.",
  },
  {
    id: "faq-2",
    category: "λειτουργια",
    question: "Τι συμβαίνει αν ένας ασθενής καλέσει για επείγον περιστατικό εκτός ωραρίου;",
    answer:
      "Το σύστημα αξιολογεί το αίτημα και, αν αναγνωρίσει επείγον οδοντιατρικό περιστατικό εκτός ωραρίου, επιχειρεί ζωντανή μεταβίβαση στον γιατρό. Αν η μεταβίβαση δεν ολοκληρωθεί, αποστέλλει άμεση ειδοποίηση (Alert) στο Telegram του γιατρού με τον αριθμό κλήσης και την ώρα, ώστε να καλέσει πίσω αμέσως.",
  },
  {
    id: "faq-3",
    category: "τεχνικα",
    question: "Χρειάζεται να αλλάξω τον υπάρχοντα τηλεφωνικό μου αριθμό;",
    answer:
      "Όχι. Διατηρείτε τον υφιστάμενο τηλεφωνικό σας αριθμό. Η σύνδεση γίνεται μέσω του τηλεφωνικού κέντρου Zadarma PBX με απλή προώθηση κλήσεων (Overflow, After-Hours ή AI-First), χωρίς διακοπή της καθημερινής λειτουργίας του ιατρείου.",
  },
  {
    id: "faq-4",
    category: "τεχνικα",
    question: "Πώς διαχειρίζεται το σύστημα τις κλήσεις με απόκρυψη;",
    answer:
      "Για λόγους ασφαλείας και ορθής ταυτοποίησης, οι κλήσεις από απόκρυψη δεν δρομολογούνται στον A.I. Agent. Μεταβιβάζονται απευθείας στη φυσική γραμματεία κατά τις ώρες λειτουργίας ή καθοδηγούνται κατάλληλα εκτός ωραρίου.",
  },
  {
    id: "faq-5",
    category: "ασφαλεια",
    question: "Πώς προστατεύονται τα προσωπικά και ιατρικά δεδομένα των ασθενών;",
    answer:
      "Το σύστημα σχεδιάστηκε με αυστηρή προσήλωση στην ιδιωτικότητα. Δεν αποθηκεύονται ευαίσθητα ιατρικά δεδομένα στις εξωτερικές ειδοποιήσεις (π.χ. στο Telegram στέλνεται μόνο ο αριθμός τηλεφώνου, η ώρα και ένας εσωτερικός αναγνωριστικός κωδικός). Παράλληλα, ζητείται ρητή συναίνεση πριν από την καταγραφή αιτημάτων επανάκλησης (Callback Requests).",
  },
  {
    id: "faq-6",
    category: "ασφαλεια",
    question: "Τι απαντά ο A.I. Agent αν του υποβληθεί μια εξειδικευμένη ιατρική ερώτηση;",
    answer:
      "Ο Agent βασίζεται αποκλειστικά στη Βάση Γνώσης που έχει εγκριθεί από εσάς. Δεν παρέχει ιατρικές διαγνώσεις ή θεραπευτικές συμβουλές. Σε εξειδικευμένες ερωτήσεις, ενημερώνει τον ασθενή ότι το θέμα απαιτεί εκτίμηση από τον γιατρό και καταγράφει αίτημα επικοινωνίας.",
  },
  {
    id: "faq-7",
    category: "τιμολογηση",
    question: "Ποια είναι η διαφορά μεταξύ των πλάνων Solo, Team και Clinic;",
    answer:
      "Το πλάνο Solo καλύπτει 1 γιατρό/ημερολόγιο (έως 250 λεπτά AI), το Team καλύπτει έως 2 γιατρούς/ημερολόγια (έως 600 λεπτά AI), ενώ το Clinic καλύπτει έως 3 γιατρούς/ημερολόγια (έως 1.200 λεπτά AI με προτεραιότητα στην υποστήριξη). Όλα τα πλάνα περιλαμβάνουν πλήρη συγχρονισμό Google Calendar και ειδοποιήσεις Telegram.",
  },
  {
    id: "faq-8",
    category: "τιμολογηση",
    question: "Πόσος χρόνος απαιτείται για την πλήρη ενεργοποίηση της υπηρεσίας;",
    answer:
      "Η διαδικασία Onboarding ολοκληρώνεται συνήθως σε λίγες εργάσιμες ημέρες. Περιλαμβάνει τη συμπλήρωση του ερωτηματολογίου ιατρείου, τη ρύθμιση της Βάσης Γνώσης, τη διασύνδεση του Google Calendar & Zadarma PBX και τις τελικές δοκιμαστικές κλήσεις επιβεβαίωσης.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredFaqs =
    activeTab === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeTab);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-28 px-6 bg-[#030303] text-zinc-100 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-100 bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-[0.4em] px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/20">
            ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ (FAQ)
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-6 mb-4 tracking-tight font-serif leading-tight">
            Όσα θέλετε να γνωρίζετε για τον{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-500 to-amber-200">
              A.I. Agent
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Απαντήσεις στις κυριότερες απορίες σχετικά με τη λειτουργία, την ασφάλεια, την τηλεφωνία Zadarma και τη διασύνδεση με το ιατρείο σας.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "all", label: "Όλες" },
            { id: "λειτουργια", label: "Λειτουργία" },
            { id: "τεχνικα", label: "Τεχνικά & Τηλεφωνία" },
            { id: "ασφαλεια", label: "Ασφάλεια & GDPR" },
            { id: "τιμολογηση", label: "Πλάνα & Χρέωση" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 border cursor-pointer ${
                activeTab === tab.id
                  ? "bg-amber-500 text-black border-amber-400 font-bold shadow-lg shadow-amber-500/20"
                  : "bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-zinc-900/80 border-amber-500/40 shadow-xl shadow-amber-950/20"
                    : "bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${
                      isOpen
                        ? "bg-amber-500 text-black border-amber-400 rotate-180"
                        : "bg-zinc-800 text-zinc-400 border-zinc-700"
                    }`}
                  >
                    ↓
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-zinc-300 text-sm font-light leading-relaxed border-t border-zinc-800/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}