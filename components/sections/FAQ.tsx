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
    question: "Πώς συνδέεται ο A.I. Agent με το Calendar της επιχείρησής μου;",
    answer:
      "Ο AI Agent συνδέεται απευθείας με το Google ή Outlook Calendar. Ελέγχει τη διαθεσιμότητα σε πραγματικό χρόνο, τηρεί τους κανόνες σας (διάρκεια, buffer time, ωράριο) και καταχωρεί, ακυρώνει ή μεταθέτει ραντεβού αυτόματα, εξαλείφοντας τις διπλοεγγραφές.",
  },
  {
    id: "faq-2",
    category: "λειτουργια",
    question: "Τι συμβαίνει σε επείγοντα περιστατικά ή εκτός ωραρίου;",
    answer:
      "Το σύστημα αξιολογεί τη σοβαρότητα του αιτήματος. Αν αναγνωρίσει επείγον περιστατικό, επιχειρεί άμεση μεταβίβαση στο τηλέφωνο ασφαλείας σας. Αν δεν απαντήσετε, αποστέλλει ακαριαία ειδοποίηση (Alert) στο Telegram/Viber με τα στοιχεία του καλούντος για άμεση επανάκληση.",
  },
  {
    id: "faq-3",
    category: "τεχνικα",
    question: "Χρειάζεται να αλλάξω τον υφιστάμενο τηλεφωνικό μου αριθμό;",
    answer:
      "Όχι. Διατηρείτε 100% τον υφιστάμενο αριθμό και τον πάροχό σας. Η διασύνδεση γίνεται μέσω απλής προώθησης κλήσεων (Overflow, After-Hours ή AI-First) από το υφιστάμενο τηλεφωνικό σας κέντρο (PBX).",
  },
  {
    id: "faq-4",
    category: "τεχνικα",
    question: "Τι γίνεται αν ο A.I. Agent δεχθεί ερώτηση που δεν γνωρίζει;",
    answer:
      "Ο Agent απαντά αυστηρά και μόνο με βάση τη Βάση Γνώσης (Knowledge Base) που έχουμε εγκρίνει μαζί σας. Αν υποβληθεί εξειδικευμένη ερώτηση εκτός πεδίου, ενημερώνει ευγενικά τον πελάτη και καταγράφει αίτημα επικοινωνίας για το προσωπικό σας.",
  },
  {
    id: "faq-5",
    category: "ασφαλεια",
    question: "Πώς διασφαλίζεται η προστασία δεδομένων (GDPR);",
    answer:
      "Η αρχιτεκτονική μας είναι πλήρως συμμορφωμένη με τον GDPR. Όλες οι συνομιλίες και τα δεδομένα κρυπτογραφούνται. Στις εξωτερικές ειδοποιήσεις (Telegram/Viber) δεν μεταφέρονται ευαίσθητα προσωπικά δεδομένα, παρά μόνο τα απαραίτητα στοιχεία επικοινωνίας.",
  },
  {
    id: "faq-6",
    category: "τεχνικα",
    question: "Πώς αντιμετωπίζονται οι κλήσεις με απόκρυψη;",
    answer:
      "Για λόγους ταυτοποίησης και ασφαλείας, οι κλήσεις από απόκρυψη δεν επεξεργάζονται από τον AI Agent. Μεταβιβάζονται απευθείας στη φυσική γραμματεία κατά τις ώρες λειτουργίας ή καθοδηγούνται καταλλήλως εκτός ωραρίου.",
  },
  {
    id: "faq-7",
    category: "τιμολογηση",
    question: "Πώς διαμορφώνονται τα πλάνα συνδρομής;",
    answer:
      "Η τιμολόγηση προσαρμόζεται ανάλογα με τον μηνιαίο όγκο κλήσεων, τον αριθμό των συνδεδεμένων ημερολογίων/στελεχών και τις ειδικές απαιτήσεις αυτοματισμού. Όλα τα πλάνα περιλαμβάνουν διασύνδεση Calendar, ειδοποιήσεις και analytics.",
  },
  {
    id: "faq-8",
    category: "τιμολογηση",
    question: "Πόσος χρόνος απαιτείται για την πλήρη ενεργοποίηση;",
    answer:
      "Η διαδικασία Onboarding ολοκληρώνεται συνήθως σε 3 έως 5 εργάσιμες ημέρες. Περιλαμβάνει τη δημιουργία της Βάσης Γνώσης, τη διασύνδεση με το τηλεφωνικό κέντρο & το ημερολόγιό σας, καθώς και εξαντλητικές δοκιμές πριν τη ζωντανή λειτουργία.",
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
    <section 
      id="faq"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#030303] text-zinc-100 overflow-hidden"
    >
      {/* 1. Subtle Tech Grid Pattern Overlay */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
      />

      {/* 2. Background Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 
            id="faq-heading"
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Όσα Θέλετε να Γνωρίζετε για τις{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-500 to-amber-200">
              Ψηφιακές Λύσεις
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-xs sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Απαντήσεις στις κυριότερες απορίες σχετικά με τη λειτουργία των AI Agents, την ασφάλεια, την τηλεφωνία και τις ενοποιήσεις.
          </p>
        </header>

        {/* Filter Categories (Tablist - Mobile Friendly) */}
        <div 
          role="tablist" 
          aria-label="Κατηγορίες ερωτήσεων" 
          className="flex items-center justify-start sm:justify-center gap-2 mb-10 sm:mb-12 overflow-x-auto no-scrollbar pb-2 sm:pb-0"
        >
          {[
            { id: "all", label: "Όλες" },
            { id: "λειτουργια", label: "Λειτουργία" },
            { id: "τεχνικα", label: "Τεχνικά & Τηλεφωνία" },
            { id: "ασφαλεια", label: "Ασφάλεια & GDPR" },
            { id: "τιμολογηση", label: "Πλάνα & Χρέωση" },
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 border cursor-pointer whitespace-nowrap shrink-0 ${
                  isSelected
                    ? "bg-amber-500 text-black border-amber-400 font-bold shadow-lg shadow-amber-500/20"
                    : "bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            const buttonId = `faq-btn-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <div
                key={faq.id}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-sm ${
                  isOpen
                    ? "bg-zinc-900/80 border-amber-500/40 shadow-xl shadow-amber-950/20"
                    : "bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700"
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span 
                      itemProp="name" 
                      className="text-sm sm:text-lg font-bold text-white leading-snug"
                    >
                      {faq.question}
                    </span>
                    <div
                      aria-hidden="true"
                      className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${
                        isOpen
                          ? "bg-amber-500 text-black border-amber-400 rotate-180"
                          : "bg-zinc-800 text-zinc-400 border-zinc-700"
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div 
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                        className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 text-zinc-300 text-xs sm:text-sm font-light leading-relaxed border-t border-zinc-800/50"
                      >
                        <span itemProp="text">{faq.answer}</span>
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