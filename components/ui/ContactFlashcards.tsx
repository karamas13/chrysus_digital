"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactFlashcards() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [contactMethod, setContactMethod] = useState<"phone" | "email">("phone");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const nextStep = () => {
    if (step === 1 && formData.fullName.trim() === "") return;
    if (step === 2) {
      if (contactMethod === "phone" && formData.phone.trim() === "") return;
      if (contactMethod === "email" && formData.email.trim() === "") return;
    }
    setStep((prev) => (prev < 3 ? ((prev + 1) as 1 | 2 | 3) : prev));
  };

  const prevStep = () => {
    setStep((prev) => (prev > 1 ? ((prev - 1) as 1 | 2 | 3) : prev));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          to: "contact@chrysusdigital.gr",
          subject: `Νέο Αίτημα Επικοινωνίας: ${formData.fullName}`,
          from_name: formData.fullName,
          contact_method: contactMethod,
          phone: formData.phone,
          email: formData.email,
          message: formData.message || "Δεν συμπληρώθηκε επιπλέον μήνυμα",
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const resetForm = () => {
    setStep(1);
    setStatus("idle");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="w-full max-w-lg mx-auto relative text-left">
      <div className="bg-[#09090b]/90 border border-zinc-800 p-6 sm:p-8 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden min-h-[380px] flex flex-col justify-between">
        
        {/* STATE: SUBMITTING */}
        {status === "submitting" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center my-auto py-12 text-center"
          >
            <div className="w-10 h-10 border-2 border-main-400 border-t-transparent rounded-full animate-spin mb-6" />
            <h3 className="text-xl font-serif font-bold text-white mb-2">Αποστολή...</h3>
            <p className="text-xs font-mono text-zinc-400">Παρακαλώ περιμένετε.</p>
          </motion.div>
        )}

        {/* STATE: SUCCESS */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center my-auto py-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-main-400/10 border border-main-400/30 flex items-center justify-center mb-6 text-main-400 text-2xl shadow-lg shadow-main-400/10">
              ✓
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              Το μήνυμά σας στάλθηκε!
            </h3>
            <p className="text-xs text-zinc-400 font-light mb-8 max-w-xs">
              Θα επικοινωνήσουμε μαζί σας σύντομα.
            </p>
            <button
              onClick={resetForm}
              className="w-full py-3.5 bg-main-400 hover:bg-main-300 text-black font-mono text-xs font-bold rounded-xl transition duration-200"
            >
              Επιστροφή στην αρχική
            </button>
          </motion.div>
        )}

        {/* STATE: IDLE / FORM FLASHCARDS */}
        {status === "idle" && (
          <>
            <div>
              {/* Progress Bar & Counter */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="flex gap-2 flex-1">
                  <div className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${step >= 1 ? "bg-main-400" : "bg-zinc-800"}`} />
                  <div className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${step >= 2 ? "bg-main-400" : "bg-zinc-800"}`} />
                  <div className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${step >= 3 ? "bg-main-400" : "bg-zinc-800"}`} />
                </div>
                <span className="text-xs font-mono font-medium text-zinc-500 pl-2">
                  {step} / 3
                </span>
              </div>

              {/* Steps */}
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-widest text-main-400 font-bold block">
                      ΒΗΜΑ 1
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Πώς σας λένε;
                    </h2>
                    <p className="text-xs text-zinc-400 font-light">
                      Βάλτε μόνο το όνομά σας για να ξεκινήσουμε.
                    </p>

                    <div className="relative pt-4">
                      <span className="absolute left-4 top-7 text-zinc-500 text-sm">👤</span>
                      <input
                        type="text"
                        autoFocus
                        placeholder="π.χ. Ιωάννης Παπαδόπουλος"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        onKeyDown={(e) => e.key === "Enter" && nextStep()}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-main-500/60 transition"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-widest text-main-400 font-bold block">
                      ΒΗΜΑ 2
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Πώς να επικοινωνήσουμε;
                    </h2>
                    <p className="text-xs text-zinc-400 font-light">
                      Δώστε ένα τηλέφωνο ή ένα email.
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setContactMethod("phone")}
                        className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono font-bold transition border ${
                          contactMethod === "phone"
                            ? "bg-main-400 text-black border-main-400"
                            : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700"
                        }`}
                      >
                        <span>📞</span> Τηλέφωνο
                      </button>
                      <button
                        type="button"
                        onClick={() => setContactMethod("email")}
                        className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono font-bold transition border ${
                          contactMethod === "email"
                            ? "bg-main-400 text-black border-main-400"
                            : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700"
                        }`}
                      >
                        <span>✉</span> Email
                      </button>
                    </div>

                    <div className="relative pt-2">
                      <span className="absolute left-4 top-5 text-zinc-500 text-sm">
                        {contactMethod === "phone" ? "📞" : "✉"}
                      </span>
                      {contactMethod === "phone" ? (
                        <input
                          type="tel"
                          autoFocus
                          placeholder="π.χ. +30 69XX XXX XXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          onKeyDown={(e) => e.key === "Enter" && nextStep()}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-main-500/60 transition"
                        />
                      ) : (
                        <input
                          type="email"
                          autoFocus
                          placeholder="π.χ. doctor@example.gr"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onKeyDown={(e) => e.key === "Enter" && nextStep()}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-main-500/60 transition"
                        />
                      )}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-widest text-main-400 font-bold block">
                      ΒΗΜΑ 3
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Θέλετε να μας πείτε κάτι ακόμα;
                    </h2>
                    <p className="text-xs text-zinc-400 font-light">
                      Προαιρετικό — μπορείτε και να το παραλείψετε.
                    </p>

                    <div className="relative pt-2">
                      <textarea
                        rows={3}
                        autoFocus
                        placeholder="Γράψτε μας λίγες λεπτομέρειες..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-main-500/60 transition resize-none"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Controls */}
            <div className="pt-8 flex items-center justify-between gap-3">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-5 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 font-mono text-xs font-bold hover:bg-zinc-900 transition"
                >
                  Πίσω
                </button>
              ) : <div />}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    (step === 1 && !formData.fullName.trim()) ||
                    (step === 2 && contactMethod === "phone" && !formData.phone.trim()) ||
                    (step === 2 && contactMethod === "email" && !formData.email.trim())
                  }
                  className="px-6 py-3 rounded-xl bg-main-400 hover:bg-main-300 text-black font-mono text-xs font-bold uppercase transition disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-main-400/10 ml-auto"
                >
                  Συνέχεια →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleSubmit()}
                  className="px-6 py-3 rounded-xl bg-main-400 hover:bg-main-300 text-black font-mono text-xs font-bold uppercase transition shadow-lg shadow-main-400/20 ml-auto"
                >
                  Αποστολή
                </button>
              )}
            </div>
          </>
        )}
      </div>

      <p className="text-[10px] text-zinc-600 text-center font-mono mt-4">
        🔒 Τα στοιχεία σας προστατεύονται σύμφωνα με τους κανόνες GDPR.
      </p>
    </div>
  );
}