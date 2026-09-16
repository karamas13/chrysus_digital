import type { Metadata } from "next";
import ContactFlashcards from "@/components/ui/ContactFlashcards";

// 1. ΠΛΗΡΕΣ B2B SEO METADATA (.com domain)
export const metadata: Metadata = {
  title: "Επικοινωνία | Chrysus Digital - Ψηφιακή Αναβάθμιση Επιχειρήσεων",
  description:
    "Επικοινωνήστε με την Chrysus Digital. Εξειδικευμένες λύσεις AI Agents, Automations και Web Development για το επόμενο βήμα της επιχείρησής σας.",
  keywords: [
    "Chrysus Digital επικοινωνία",
    "AI Voice Agents Greece",
    "Business Automations",
    "Κατασκευή ιστοσελίδων",
    "AI Receptionist",
    "Ψηφιακός μετασχηματισμός επιχειρήσεων",
  ],
  alternates: {
    canonical: "https://chrysusdigital.com/contact",
  },
  openGraph: {
    title: "Επικοινωνία | Chrysus Digital",
    description:
      "Ξεκινήστε την ψηφιακή αναβάθμιση της επιχείρησής σας με εξειδικευμένους AI Agents & Automations.",
    url: "https://chrysusdigital.com/contact",
    siteName: "Chrysus Digital",
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Επικοινωνία | Chrysus Digital",
    description:
      "Ξεκινήστε την ψηφιακή αναβάθμιση της επιχείρησής σας με εξειδικευμένους AI Agents & Automations.",
  },
};

// 2. JSON-LD STRUCTURED DATA (Schema.org)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://chrysusdigital.com/contact/#webpage",
      url: "https://chrysusdigital.com/contact",
      name: "Επικοινωνία | Chrysus Digital",
      description:
        "Σελίδα επικοινωνίας της Chrysus Digital για λύσεις AI και Automations επιχειρήσεων.",
    },
    {
      "@type": "ProfessionalService",
      name: "Chrysus Digital",
      url: "https://chrysusdigital.com",
      email: "contact@chrysusdigital.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "GR",
      },
      areaServed: "Global",
      serviceType: ["AI Agents", "Automations", "Web Development"],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* Script injection για Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#030303] text-zinc-100 py-20 px-6 relative flex flex-col justify-center items-center overflow-hidden mt-10">
        {/* Background Grid Pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
        />

        {/* Ambient Background Glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-100 bg-amber-500/5 blur-[180px] rounded-full pointer-events-none"
        />

        {/* Header Section */}
        <header className="text-center max-w-2xl mx-auto mb-10 relative z-10">
          <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-[0.4em] px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/20 inline-block">
            ΕΠΙΚΟΙΝΩΝΙΑ // CHRYSUS DIGITAL
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-5 mb-3 tracking-tight font-sans leading-tight">
            Ξεκινήστε την Αναβάθμιση της{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-500 to-amber-200">
              Επιχείρησής σας
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto font-light leading-relaxed font-sans">
            Συμπληρώστε την παρακάτω φόρμα και επικοινωνήστε μαζί μας για να
            διαμορφώσουμε τις κατάλληλες digital λύσεις προσαρμοσμένες στις
            ανάγκες σας.
          </p>
        </header>

        {/* Component Flashcards (Client Component) */}
        <div className="w-full relative z-10">
          <ContactFlashcards />
        </div>

        {/* Trust & Direct Contact Badges */}
        <div className="mt-12 relative z-10 flex flex-wrap justify-center items-center gap-6 text-xs text-zinc-400 font-mono">
          <a
            href="mailto:contact@chrysusdigital.com"
            className="flex items-center gap-2 hover:text-amber-400 transition"
          >
            <span aria-hidden="true">✉</span> contact@chrysusdigital.com
          </a>
          <span className="text-zinc-800" aria-hidden="true">
            •
          </span>
          <div className="flex items-center gap-2">
            <span aria-hidden="true">📍</span> Ελλάδα / Remote Services
          </div>
        </div>
      </main>
    </>
  );
}