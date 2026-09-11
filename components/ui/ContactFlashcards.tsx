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

  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  // --- SAFEGUARDS & HANDLERS ---

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const sanitized = value.replace(/[^a-zA-Za-zA-Zα-ωΑ-ΩάέήίόύώΆΈΉΊΌΎΏϊϋΐΰ\s]/g, "");

    if (sanitized.length <= 50) {
      setFormData((prev) => ({ ...prev, fullName: sanitized }));
      if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: "" }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNums = e.target.value.replace(/\D/g, "");

    if (onlyNums.length <= 10) {
      setFormData((prev) => ({ ...prev, phone: onlyNums }));
      if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateStep1 = () => {
    const trimmed = formData.fullName.trim();
    if (!trimmed) {
      setErrors((prev) => ({ ...prev, fullName: "Το όνομα είναι υποχρεωτικό." }));
      return false;
    }
    if (trimmed.length < 2) {
      setErrors((prev) => ({ ...prev, fullName: "Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες." }));
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (contactMethod === "phone") {
      if (formData.phone.length !== 10) {
        setErrors((prev) => ({ ...prev, phone: "Το τηλέφωνο πρέπει να αποτελείται από 10 ψηφία." }));
        return false;
      }
      if (!/^[268]/.test(formData.phone)) {
        setErrors((prev) => ({ ...prev, phone: "Πρέπει να ξεκινάει από 2, 6 ή 8." }));
        return false;
      }
    }

    if (contactMethod === "email") {
      if (!formData.email.trim() || !isValidEmail(formData.email)) {
        setErrors((prev) => ({ ...prev, email: "Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email." }));
        return false;
      }
    }

    return true;
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;

    setStep((prev) => (prev < 3 ? ((prev + 1) as 1 | 2 | 3) : prev));
  };

  const prevStep = () => {
    setStep((prev) => (prev > 1 ? ((prev - 1) as 1 | 2 | 3) : prev));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validateStep1() || !validateStep2()) return;

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
          subject: `Νέο Αίτημα Επικοινωνίας: ${formData.fullName.trim()}`,
          from_name: formData.fullName.trim(),
          contact_method: contactMethod,
          phone: formData.phone,
          email: formData.email.trim(),
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
    setErrors({ fullName: "", phone: "", email: "" });
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="w-full max-w-lg mx-auto relative text-left">
      <div className="bg-[#09090b]/90 border border-zinc-800 p-6 sm:p-8 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden min-h-95 flex flex-col justify-between">
        
        {/* STATE: SUBMITTING */}
        {status === "submitting" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            role="status"
            aria-live="polite"
            className="flex flex-col items-center justify-center my-auto py-12 text-center"
          >
            <div className="w-10 h-10 border-2 border-main-400 border-t-transparent rounded-full animate-spin mb-6" aria-hidden="true" />
            <h3 className="text-xl font-serif font-bold text-white mb-2">Αποστολή...</h3>
            <p className="text-xs font-mono text-zinc-400">Παρακαλώ περιμένετε.</p>
          </motion.div>
        )}

        {/* STATE: SUCCESS */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            role="status"
            aria-live="polite"
            className="flex flex-col items-center justify-center my-auto py-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-main-400/10 border border-main-400/30 flex items-center justify-center mb-6 text-main-400 text-2xl shadow-lg shadow-main-400/10" aria-hidden="true">
              ✓
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              Το μήνυμά σας στάλθηκε!
            </h3>
            <p className="text-xs text-zinc-400 font-light mb-8 max-w-xs">
              Θα επικοινωνήσουμε μαζί σας σύντομα.
            </p>
            <button
              type="button"
              onClick={resetForm}
              className="w-full py-3.5 bg-main-400 hover:bg-main-300 text-black font-mono text-xs font-bold rounded-xl transition duration-200 cursor-pointer"
            >
              Επιστροφή στην αρχική
            </button>
          </motion.div>
        )}

        {/* STATE: ERROR */}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            role="alert"
            aria-live="assertive"
            className="flex flex-col items-center justify-center my-auto py-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-6 text-red-400 text-2xl shadow-lg shadow-red-500/10" aria-hidden="true">
              ✕
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              Κάτι πήγε στραβά!
            </h3>
            <p className="text-xs text-zinc-400 font-light mb-8 max-w-xs">
              Υπήρξε πρόβλημα κατά την αποστολή. Παρακαλώ δοκιμάστε ξανά.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="w-full py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs font-bold rounded-xl transition duration-200 cursor-pointer"
            >
              Δοκιμάστε ξανά
            </button>
          </motion.div>
        )}

        {/* STATE: IDLE / FORM FLASHCARDS */}
        {status === "idle" && (
          <form onSubmit={handleSubmit} className="flex flex-col justify-between flex-1">
            <div>
              {/* Progress Bar & Counter */}
              <div className="flex items-center justify-between gap-2 mb-6" aria-label={`Βήμα ${step} από 3`}>
                <div className="flex gap-2 flex-1">
                  <div 
                    aria-current={step === 1 ? "step" : undefined}
                    className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${step >= 1 ? "bg-main-400" : "bg-zinc-800"}`} 
                  />
                  <div 
                    aria-current={step === 2 ? "step" : undefined}
                    className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${step >= 2 ? "bg-main-400" : "bg-zinc-800"}`} 
                  />
                  <div 
                    aria-current={step === 3 ? "step" : undefined}
                    className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${step >= 3 ? "bg-main-400" : "bg-zinc-800"}`} 
                  />
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
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Πώς σας λένε;
                    </h3>
                    <p className="text-xs text-zinc-400 font-light">
                      Βάλτε το ονοματεπώνυμό σας για να ξεκινήσουμε.
                    </p>

                    <div className="relative pt-2">
                      <label htmlFor="fullName" className="sr-only">
                        Ονοματεπώνυμο
                      </label>
                      <span className="absolute left-4 top-5 text-zinc-500 text-sm" aria-hidden="true">👤</span>
                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="π.χ. Ιωάννης Παπαδόπουλος"
                        value={formData.fullName}
                        onChange={handleNameChange}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            nextStep();
                          }
                        }}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                        className={`w-full bg-zinc-950 border ${
                          errors.fullName ? "border-red-500/80 focus:border-red-500" : "border-zinc-800 focus:border-main-500/60"
                        } rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none transition`}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="text-red-400 text-xs mt-1.5 font-mono">
                          {errors.fullName}
                        </p>
                      )}
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
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Πώς να επικοινωνήσουμε;
                    </h3>
                    <p className="text-xs text-zinc-400 font-light">
                      Δώστε ένα τηλέφωνο ή ένα email.
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setContactMethod("phone");
                          setErrors((prev) => ({ ...prev, phone: "", email: "" }));
                        }}
                        aria-pressed={contactMethod === "phone"}
                        className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono font-bold transition border cursor-pointer ${
                          contactMethod === "phone"
                            ? "bg-main-400 text-black border-main-400"
                            : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700"
                        }`}
                      >
                        <span aria-hidden="true">📞</span> Τηλέφωνο
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setContactMethod("email");
                          setErrors((prev) => ({ ...prev, phone: "", email: "" }));
                        }}
                        aria-pressed={contactMethod === "email"}
                        className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono font-bold transition border cursor-pointer ${
                          contactMethod === "email"
                            ? "bg-main-400 text-black border-main-400"
                            : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700"
                        }`}
                      >
                        <span aria-hidden="true">✉</span> Email
                      </button>
                    </div>

                    <div className="relative pt-2">
                      <span className="absolute left-4 top-5 text-zinc-500 text-sm" aria-hidden="true">
                        {contactMethod === "phone" ? "📞" : "✉"}
                      </span>
                      {contactMethod === "phone" ? (
                        <div>
                          <label htmlFor="phone" className="sr-only">
                            Αριθμός Τηλεφώνου
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            inputMode="numeric"
                            autoComplete="tel"
                            maxLength={10}
                            placeholder="69XXXXXXXX"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                nextStep();
                              }
                            }}
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? "phone-error" : undefined}
                            className={`w-full bg-zinc-950 border ${
                              errors.phone ? "border-red-500/80 focus:border-red-500" : "border-zinc-800 focus:border-main-500/60"
                            } rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none transition`}
                          />
                          {errors.phone && (
                            <p id="phone-error" className="text-red-400 text-xs mt-1.5 font-mono">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div>
                          <label htmlFor="email" className="sr-only">
                            Διεύθυνση Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            placeholder="π.χ. name@example.gr"
                            value={formData.email}
                            onChange={(e) => {
                              const cleanEmail = e.target.value.trim().toLowerCase();
                              setFormData((prev) => ({ ...prev, email: cleanEmail }));
                              if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                nextStep();
                              }
                            }}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            className={`w-full bg-zinc-950 border ${
                              errors.email ? "border-red-500/80 focus:border-red-500" : "border-zinc-800 focus:border-main-500/60"
                            } rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none transition`}
                          />
                          {errors.email && (
                            <p id="email-error" className="text-red-400 text-xs mt-1.5 font-mono">
                              {errors.email}
                            </p>
                          )}
                        </div>
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
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Θέλετε να μας πείτε κάτι ακόμα;
                    </h3>
                    <p className="text-xs text-zinc-400 font-light">
                      Προαιρετικό — μπορείτε και να το παραλείψετε.
                    </p>

                    <div className="relative pt-2">
                      <label htmlFor="message" className="sr-only">
                        Επιπλέον μήνυμα
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        maxLength={500}
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
                  className="px-5 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 font-mono text-xs font-bold hover:bg-zinc-900 transition cursor-pointer"
                >
                  Πίσω
                </button>
              ) : <div />}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    (step === 1 && formData.fullName.trim().length < 2) ||
                    (step === 2 && contactMethod === "phone" && formData.phone.length !== 10) ||
                    (step === 2 && contactMethod === "email" && !formData.email.trim())
                  }
                  className="px-6 py-3 rounded-xl bg-main-400 hover:bg-main-300 text-black font-mono text-xs font-bold uppercase transition disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-main-400/10 ml-auto cursor-pointer"
                >
                  Συνέχεια →
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-main-400 hover:bg-main-300 text-black font-mono text-xs font-bold uppercase transition shadow-lg shadow-main-400/20 ml-auto cursor-pointer"
                >
                  Αποστολή
                </button>
              )}
            </div>
          </form>
        )}
      </div>

      <p className="text-[10px] text-zinc-600 text-center font-mono mt-4">
        🔒 Τα στοιχεία σας προστατεύονται σύμφωνα με τους κανόνες GDPR.
      </p>
    </div>
  );
}