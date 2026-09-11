"use client";

import { motion } from "framer-motion";

interface ProblemItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

const problems: ProblemItem[] = [
  {
    number: "01",
    title: "Χαμένες Κλήσεις & Διαφυγόντα Έσοδα",
    description:
      "Όταν η γραμματεία οδοντιατρείου είναι απασχολημένη ή το ιατρείο είναι κλειστό, οι πιθανοί ασθενείς καλούν τον επόμενο οδοντίατρο. Κάθε αναπάντητη κλήση ισοδυναμεί με χαμένο ραντεβού.",
    highlight: "Έως 30% των κλήσεων χάνονται εκτός ωραρίου",
  },
  {
    number: "02",
    title: "Υπερφόρτωση Της Γραμματείας",
    description:
      "Το προσωπικό αναλώνει πολύτιμο χρόνο απαντώντας σε επαναλαμβανόμενες ερωτήσεις (τιμές καθαρισμού, τοποθεσία, διαθεσιμότητα) αντί να φροντίζει τους ασθενείς στον χώρο αναμονής.",
    highlight: "Διοικητικό άγχος & μειωμένη παραγωγικότητα",
  },
  {
    number: "03",
    title: "Απαρχαιωμένη Ψηφιακή Παρουσία",
    description:
      "Μια αργή ή μη προσβάσιμη από κινητά ιστοσελίδα αποθαρρύνει τους νέους ασθενείς. Αν η πρώτη εικόνα δεν εμπνέει εμπιστοσύνη, η μετατροπή σε ραντεβού αποτυγχάνει.",
    highlight: "Μειωμένο conversion rate & αδύναμο branding",
  },
];

export default function ProblemSection() {
  return (
    <section 
      aria-labelledby="problem-statement-heading"
      className="relative py-20 sm:py-28 px-6 bg-[#030303] overflow-hidden"
    >
      {/* Background Subtle Glow (Decorative) */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-red-800/10 blur-[140px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-400 font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase block mb-3">
            ΠΡΟΚΛΗΣΕΙΣ ΟΔΟΝΤΙΑΤΡΕΙΩΝ
          </span>
          <h2 
            id="problem-statement-heading" 
            className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif leading-tight"
          >
            Πόσους ασθενείς χάνει το ιατρείο σας{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-amber-400 to-amber-200">
              χωρίς να το γνωρίζετε;
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Η καθημερινή ροή ενός σύγχρονου οδοντιατρείου δημιουργεί "κυψέλες" απώλειας χρόνου και εσόδων που περιορίζουν την ανάπτυξη και την κερδοφορία σας.
          </p>
        </header>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.12, duration: 0.5 }} 
              className="group relative rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-red-500/30 p-8 flex flex-col justify-between transition-all duration-300 backdrop-blur-sm"
            >
              {/* Top Content */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-bold text-red-500/60 group-hover:text-red-400 transition-colors">
                    {item.number}
                  </span>
                  <div 
                    aria-hidden="true" 
                    className="w-2 h-2 rounded-full bg-red-500/40 group-hover:bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] transition-colors" 
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Impact Badge */}
              <div className="pt-4 border-t border-zinc-800/60">
                <span className="text-[11px] font-mono text-red-400/90 flex items-center gap-2">
                  <span aria-hidden="true" className="text-red-500">⚠</span> 
                  <span>{item.highlight}</span>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}