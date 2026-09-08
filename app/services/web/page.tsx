import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";

export default function WebServicesPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 pb-20 px-6 font-serif text-center">
      <div className="max-w-5xl mx-auto">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-[0.4em] mb-4 block">
          WEB DEVELOPMENT & DIGITAL PRESENCE
        </span>
        <h1 className="text-4xl md:text-6xl font-black mb-8">
          Κατασκευή Ιστοσελίδων για Οδοντιάτρους
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-3xl font-light mx-auto">
          Σχεδιάζουμε luxury, ultra-fast ιστοσελίδες που αναδεικνύουν την ποιότητα των υπηρεσιών σας, παρουσιάζουν περιστατικά Before/After και μετατρέπουν τους επισκέπτες σε πιστούς ασθενείς.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
           <ServiceCard
              variant="cyan"
              badge="FEATURE 01"
              title="24/7 Διαθεσιμότητα"
              description="Καμία χαμένη κλήση εκτός ωραρίου ή τις ώρες αιχμής που το προσωπικό είναι απασχολημένο."
            />
           <ServiceCard
              variant="cyan"
              badge="FEATURE 01"
              title="24/7 Διαθεσιμότητα"
              description="Καμία χαμένη κλήση εκτός ωραρίου ή τις ώρες αιχμής που το προσωπικό είναι απασχολημένο."
            />
           <ServiceCard
              variant="cyan"
              badge="FEATURE 01"
              title="24/7 Διαθεσιμότητα"
              description="Καμία χαμένη κλήση εκτός ωραρίου ή τις ώρες αιχμής που το προσωπικό είναι απασχολημένο."
            />
           <ServiceCard
              variant="cyan"
              badge="FEATURE 01"
              title="24/7 Διαθεσιμότητα"
              description="Καμία χαμένη κλήση εκτός ωραρίου ή τις ώρες αιχμής που το προσωπικό είναι απασχολημένο."
            />
        </div>

        <Link href="/pricing" className="btn-secondary inline-block px-8 py-4 text-xs font-mono uppercase tracking-widest">
          Δειτε τα Πακετα Web →
        </Link>
      </div>
    </main>
  );
}