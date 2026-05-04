"use client";

import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section className="py-24 bg-[#030303]" id="services">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-[10px] font-bold text-main-400 uppercase tracking-[0.4em] mb-4 font-mono">
            ΔΥΝΑΤΟΤΗΤΕΣ
          </h2>
          <p className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
            ΨΗΦΙΑΚΟ <span className="text-zinc-500 italic font-serif font-light lowercase">Οικοσύστημα</span>
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:h-150">
          
          {/* Box 1: AI Receptionist (The Flagship) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-10 relative overflow-hidden group transition-all duration-500 hover:border-main-500/50"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-main-400 text-[10px] font-bold uppercase tracking-widest bg-main-400/10 px-3 py-1 rounded-full font-mono">AI Protocol</span>
                <h3 className="text-3xl font-bold text-white mt-6 mb-4">24/7 Έξυπνη <br />Τηλεφωνική Υποδοχή</h3>
                <p className="text-zinc-400 max-w-xs text-sm leading-relaxed">
                  Η AI receptionist απαντά αμέσως σε κάθε κλήση, λύνει απορίες και καταγράφει τα στοιχεία των ασθενών σας 24 ώρες το 24ωρο.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-main-500 text-xs font-bold uppercase tracking-widest">Σταθερό μηνιαίο κόστος χωρίς κρυφές χρεώσεις</p>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-main-500/10 rounded-full blur-[80px] group-hover:bg-main-500/20 transition-all duration-700" />
          </motion.div>

          {/* Box 2: Web Design & Development */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-1 bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-8 relative overflow-hidden group transition-all duration-500 hover:border-main-500/50"
          >
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center h-full">
              <div className="max-w-[70%]">
                <h3 className="text-2xl font-bold text-white mb-2">Websites για Ιατρεία</h3>
                <p className="text-zinc-400 text-sm">
                  Δημιουργούμε σύγχρονες, γρήγορες ιστοσελίδες που αναδεικνύουν το κύρος του οδοντιατρείου σας και προσελκύουν νέους ασθενείς.
                </p>
              </div>
              <div className="mt-4 md:mt-0 p-4 bg-details-500/10 rounded-2xl border border-details-500/20 text-details-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 12V3"/><path d="M12 21v-9"/><path d="M21 12H3"/></svg>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Technical Support */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-1 bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-8 group transition-all duration-500 hover:border-zinc-600"
          >
            <div className="h-full flex flex-col justify-between">
              <div className="text-details-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 text-sm">Υποστήριξη</h4>
                <p className="text-zinc-500 text-[10px] leading-tight">Συνεχής παρακολούθηση και βελτιστοποίηση της AI.</p>
              </div>
            </div>
          </motion.div>

          {/* Box 4: Monthly Subscription Model */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-1 bg-details-500/5 border border-details-500/20 rounded-[2.5rem] p-8 group transition-all duration-500 hover:border-main-500/50"
          >
             <div className="h-full flex flex-col justify-between">
              <div className="text-main-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 text-sm">Monthly Fee</h4>
                <p className="text-zinc-500 text-[10px] leading-tight">Χωρίς κόστος εγκατάστασης. Μία συνδρομή για όλα.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}