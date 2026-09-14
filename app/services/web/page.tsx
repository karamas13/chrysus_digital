import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";

export default function WebServicesPage() {
  return (
    <main className="relative min-h-screen bg-[#030303] text-white pt-32 pb-24 px-6 font-sans overflow-hidden">
      
      {/* Visual Accent: Cyan Glow Circles στο background */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Category Label */}
        <span className="inline-block text-xs font-mono text-cyan-400 uppercase tracking-[0.4em] mb-4 px-3 py-1 bg-cyan-950/40 border border-cyan-500/20 rounded-full">
          WEB DEVELOPMENT & DIGITAL PRESENCE
        </span>
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
          Ψηφιακή Παρουσία <br className="hidden sm:inline" />
          <span className="bg-linear-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            Υψηλής Αισθητικής & Απόδοσης
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-16 max-w-3xl font-light mx-auto">
          Δημιουργούμε ultra-fast, custom ιστοσελίδες και web applications για κάθε σύγχρονη επιχείρηση. Συνδυάζουμε το minimal design με την τελευταία λέξη της τεχνολογίας, μετατρέποντας την ψηφιακή σας εικόνα σε μηχανή προσέλκυσης νέων πελατών.
        </p>

        {/* Feature Cards Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
          <ServiceCard
            variant="cyan"
            badge="CYAN ARCHITECTURE"
            title="Custom Design & Identity"
            description="Μοναδική οπτική ταυτότητα σχεδιασμένη από το μηδέν. Χωρίς έτοιμα templates, με εικαστικά στοιχεία που αναδεικνύουν το κύρος και την ποιότητα των υπηρεσιών σας."
          />
          <ServiceCard
            variant="cyan"
            badge="PERFORMANCE 99+"
            title="Ultra-Fast Core Web Vitals"
            description="Ακαριαία ταχύτητα φόρτωσης. Βέλτιστη εμπειρία χρήσης σε κινητά και tablets που κρατάει τους επισκέπτες στη σελίδα σας."
          />
          <ServiceCard
            variant="cyan"
            badge="CONVERSION ENGINE"
            title="Smart Booking & Funnels"
            description="Ενσωμάτωση έξυπνων φορμών επικοινωνίας, online ραντεβού και αυτοματοποιημένων workflows που μετατρέπουν τους απλούς επισκέπτες σε ενεργούς πελάτες."
          />
          <ServiceCard
            variant="cyan"
            badge="LOCAL & GLOBAL SEO"
            title="Search Engine Dominance"
            description="Πλήρης τεχνική βελτιστοποίηση SEO και διασύνδεση με Google Maps / Business Profile για να βγαίνετε στις πρώτες θέσεις των αναζητήσεων στον κλάδο σας."
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link 
            href="/pricing" 
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-cyan-500/10 border border-cyan-500/40 px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] active:scale-95"
          >
            <span>Δειτε τα Πακετα Web</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1.5 text-cyan-400 group-hover:text-white">
              →
            </span>
          </Link>
        </div>

      </div>
    </main>
  );
}