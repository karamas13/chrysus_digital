import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";

export default function AIServicesPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 pb-20 px-6 font-serif text-center">
      <div className="max-w-5xl mx-auto">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-[0.4em] mb-4 block">
          AUTOMATION & AI RECEPTION
        </span>
        <h1 className="text-4xl md:text-6xl font-black mb-8">
          Τηλεφωνική Υποδοχή AI για Οδοντιατρεία
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-3xl font-light mx-auto">
          Η AI Receptionist απαντά στις κλήσεις του ιατρείου σας 24 ώρες το 24ωρο, κλείνει ραντεβού απευθείας στο ημερολόγιό σας, αξιολογεί τα επείγοντα περιστατικά και απαντά σε συχνές ερωτήσεις ασθενών με απόλυτα φυσική ομιλία.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-center">
          <ServiceCard
            variant="amber"
            badge="PERFORMANCE"
            title="Ultra Fast Loading"
            description="Βελτιστοποιημένες ταχύτητες φορτωσης για υψηλό conversion rate και κατάταξη στο Google."
          />
          <ServiceCard
            variant="amber"
            badge="PERFORMANCE"
            title="Ultra Fast Loading"
            description="Βελτιστοποιημένες ταχύτητες φορτωσης για υψηλό conversion rate και κατάταξη στο Google."
          />
          <ServiceCard
            variant="amber"
            badge="PERFORMANCE"
            title="Ultra Fast Loading"
            description="Βελτιστοποιημένες ταχύτητες φορτωσης για υψηλό conversion rate και κατάταξη στο Google."
          />
          <ServiceCard
            variant="amber"
            badge="PERFORMANCE"
            title="Ultra Fast Loading"
            description="Βελτιστοποιημένες ταχύτητες φορτωσης για υψηλό conversion rate και κατάταξη στο Google."
          />
        </div>

        <Link href="/pricing" className="btn-primary inline-block px-8 py-4 text-xs font-mono uppercase tracking-widest">
          Δειτε τα Πακετα AI →
        </Link>
      </div>
    </main>
  );
}