import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";

export default function AutomationsPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 pb-20 px-6 font-serif text-center">
      <div className="max-w-5xl mx-auto">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-[0.4em] mb-4 block">
          WORKFLOWS & CLINIC AUTOMATIONS
        </span>
        <h1 className="text-4xl md:text-6xl font-black mb-8">
          Αυτοματοποιήσεις & Workflows για Οδοντιατρεία
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-3xl font-light mx-auto">
          Συνδέστε το ημερολόγιο, το CRM και τα κανάλια επικοινωνίας του ιατρείου σας. Εξαλείψτε τις ακυρώσεις ραντεβού (No-shows), αυτοματοποιήστε τις υπενθυμίσεις ασθενών και αυξήστε τις θετικές αξιολογήσεις στο Google χωρίς χειροκίνητη προσπάθεια.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-center">
          <ServiceCard
            variant="emerald"
            badge="NO-SHOW REDUCTION"
            title="Αυτόματες Υπενθυμίσεις SMS & Viber"
            description="Αποστολή αυτόματων υπενθυμίσεων στους ασθενείς 24h και 2h πριν το ραντεβού με δυνατότητα επιβεβαίωσης ή ακύρωσης."
          />
          <ServiceCard
            variant="emerald"
            badge="CALENDAR SYNC"
            title="Live Sync Google Calendar & CRM"
            description="Πλήρης συγχρονισμός των ραντεβού μεταξύ του λογισμικού του ιατρείου, του ημερολογίου και των συστημάτων ειδοποιήσεων."
          />
          <ServiceCard
            variant="emerald"
            badge="REPUTATION"
            title="Αυτόματη Συλλογή Google Reviews"
            description="Αποστολή έξυπνου follow-up SMS/Viber μετά την ολοκλήρωση της θεραπείας για τη συλλογή θετικών αξιολογήσεων."
          />
          <ServiceCard
            variant="emerald"
            badge="DOCTOR ALERTS"
            title="Instant Telegram & Mobile Alerts"
            description="Άμεση ενημέρωση του γιατρού και της γραμματείας στο κινητό για νέες κρατήσεις, αλλαγές ή επείγοντα περιστατικά."
          />
        </div>

        <Link
          href="/pricing"
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-emerald-500/10 border border-emerald-500/40 px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] active:scale-95"
        >
          {/* Inner Glow/Shine overlay στο hover */}
          <span className="absolute inset-0 bg-linear-to-r from-transparent via-emerald-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        
          <span>Δειτε τα Πακετα Αυτοματοποιησης</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1.5 text-emerald-400 group-hover:text-white">
            →
          </span>
        </Link>
      </div>
    </main>
  );
}