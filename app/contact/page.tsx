import ContactFlashcards from "@/components/ui/ContactFlashcards"; // Διορθώστε το path ανάλογα με το φάκελό σας

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 py-20 px-6 relative flex flex-col justify-center items-center overflow-hidden">
      {/* Ambient Background Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-100 bg-amber-500/5 blur-[180px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
        <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-[0.4em] px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/20">
          ΕΠΙΚΟΙΝΩΝΙΑ // CHRYSUS DIGITAL
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-2 tracking-tight font-serif">
          Ξεκινήστε την Αναβάθμιση του{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-500 to-amber-200">
            Ιατρείου σας
          </span>
        </h1>
      </div>

      {/* Component Flashcards */}
      <ContactFlashcards />
    </div>
  );
}