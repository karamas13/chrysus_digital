"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ServiceOption = "AI Agents" | "Automations" | "Web Development" | "Άλλο";

interface FormDataState {
  fullName: string;
  service: ServiceOption;
  email: string;
  phone: string;
  message: string;
}

const serviceOptions: { id: ServiceOption; title: string; icon: string; desc: string }[] = [
  { id: "AI Agents", title: "AI Agents", icon: "🤖", desc: "Αυτοματοποιημένοι ψηφιακοί βοηθοί" },
  { id: "Automations", title: "Automations", icon: "⚡", desc: "Βελτιστοποίηση διαδικασιών" },
  { id: "Web Development", title: "Web Development", icon: "🌐", desc: "Σύγχρονες ιστοσελίδες & Apps" },
  { id: "Άλλο", title: "Άλλο", icon: "💡", desc: "Εξειδικευμένες λύσεις" },
];

export default function ContactFlashcards() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [direction, setDirection] = useState<number>(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const [formData, setFormData] = useState<FormDataState>({
    fullName: "",
    service: "AI Agents",
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

  const validateStep3 = () => {
    let valid = true;
    const newErrors = { phone: "", email: "" };

    // Validation Τηλεφώνου
    if (formData.phone.length !== 10) {
      newErrors.phone = "Το τηλέφωνο πρέπει να έχει 10 ψηφία.";
      valid = false;
    } else if (!/^[268]/.test(formData.phone)) {
      newErrors.phone = "Πρέπει να ξεκινάει από 2, 6 ή 8.";
      valid = false;
    }

    // Validation Email
    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      newErrors.email = "Εισάγετε μια έγκυρη διεύθυνση email.";
      valid = false;
    }

    setErrors((prev) => ({ ...prev, ...newErrors }));
    return valid;
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 3 && !validateStep3()) return;

    setDirection(1);
    setStep((prev) => (prev < 4 ? ((prev + 1) as 1 | 2 | 3 | 4) : prev));
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((prev) => (prev > 1 ? ((prev - 1) as 1 | 2 | 3 | 4) : prev));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validateStep1() || !validateStep3()) return;

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
          subject: `Νέο Αίτημα Επικοινωνίας (${formData.service}): ${formData.fullName.trim()}`,
          from_name: formData.fullName.trim(),
          service_requested: formData.service,
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
      service: "AI Agents",
      email: "",
      phone: "",
      message: "",
    });
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 30 : -30,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative text-left">
      {/* Ambient background glow */}
      <div 
        aria-hidden="true" 
        className="absolute -inset-1 bg-linear-to-r from-amber-500/20 via-main-400/10 to-transparent rounded-3xl blur-xl opacity-50 pointer-events-none" 
      />

      <div className="bg-[#09090b]/95 border border-zinc-800 p-6 sm:p-8 rounded-3xl backdrop-blur-2xl shadow-2xl relative overflow-hidden min-h-110 flex flex-col justify-between">
        
        {/* STATE: SUBMITTING */}
        {status === "submitting" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            role="status"
            aria-live="polite"
            className="flex flex-col items-center justify-center my-auto py-12 text-center"
          >
            <div className="w-12 h-12 border-3 border-amber-400 border-t-transparent rounded-full animate-spin mb-6" aria-hidden="true" />
            <h3 className="text-xl font-serif font-bold text-white mb-2">Αποστολή αλλήλων...</h3>
            <p className="text-xs font-mono text-zinc-400">Παρακαλώ περιμένετε μια στιγμή.</p>
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
            <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-6 text-amber-400 text-2xl shadow-lg shadow-amber-400/10" aria-hidden="true">
              ✓
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              Το μήνυμά σας στάλθηκε!
            </h3>
            <p className="text-xs text-zinc-400 font-light mb-8 max-w-xs leading-relaxed">
              Ευχαριστούμε. Ένας εκπρόσωπος της Chrysus Digital θα επικοινωνήσει μαζί σας σύντομα.
            </p>
            <button
              type="button"
              onClick={resetForm}
              className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-mono text-xs font-bold rounded-xl transition duration-200 cursor-pointer shadow-lg shadow-amber-400/10"
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
            <p className="text-xs text-zinc-400 font-light mb-8 max-w-xs leading-relaxed">
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
              <div className="flex items-center justify-between gap-2 mb-6" aria-label={`Βήμα ${step} από 4`}>
                <div className="flex gap-1.5 flex-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      aria-current={step === i ? "step" : undefined}
                      className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${
                        step >= i ? "bg-amber-400" : "bg-zinc-800"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-mono font-medium text-zinc-500 pl-2">
                  {step} / 4
                </span>
              </div>

              {/* Steps Animated Container */}
              <AnimatePresence mode="wait" custom={direction}>
                {/* STEP 1: ONOMA */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                      ΒΗΜΑ 1
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Πώς σας λένε;
                    </h3>
                    <p className="text-xs text-zinc-400 font-light">
                      Εισάγετε το ονοματεπώνυμό σας για να ξεκινήσουμε.
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
                        className={`w-full bg-zinc-950/80 border ${
                          errors.fullName ? "border-red-500/80 focus:border-red-500" : "border-zinc-800 focus:border-amber-400/60"
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

                {/* STEP 2: ΕΠΙΛΟΓΗ ΥΠΗΡΕΣΙΑΣ */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                      ΒΗΜΑ 2
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Ποια υπηρεσία σας ενδιαφέρει;
                    </h3>
                    <p className="text-xs text-zinc-400 font-light">
                      Επιλέξτε το πεδίο που ταιριάζει στις ανάγκες της επιχείρησής σας.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {serviceOptions.map((opt) => {
                        const isSelected = formData.service === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, service: opt.id }))}
                            className={`p-3 rounded-xl border text-left transition duration-200 cursor-pointer flex items-start gap-3 ${
                              isSelected
                                ? "bg-amber-400/10 border-amber-400 text-white shadow-md shadow-amber-400/5"
                                : "bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                            }`}
                          >
                            <span className="text-lg leading-none mt-0.5" aria-hidden="true">{opt.icon}</span>
                            <div>
                              <div className="text-xs font-bold font-mono text-white mb-0.5">{opt.title}</div>
                              <div className="text-[11px] text-zinc-500 font-light leading-snug">{opt.desc}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: EMAIL & PHONE (ΥΠΟΧΡΕΩΤΙΚΑ ΚΑΙ ΤΑ ΔΥΟ) */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                      ΒΗΜΑ 3
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Στοιχεία επικοινωνίας
                    </h3>
                    <p className="text-xs text-zinc-400 font-light">
                      Παρακαλώ συμπληρώστε το email και το τηλέφωνό σας.
                    </p>

                    <div className="space-y-3 pt-1">
                      {/* Email Input */}
                      <div>
                        <label htmlFor="email" className="block text-[11px] font-mono text-zinc-400 mb-1">
                          Email <span className="text-amber-400">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-3.5 text-zinc-500 text-xs" aria-hidden="true">✉</span>
                          <input
                            id="email"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            placeholder="name@example.gr"
                            value={formData.email}
                            onChange={(e) => {
                              const cleanEmail = e.target.value.trim().toLowerCase();
                              setFormData((prev) => ({ ...prev, email: cleanEmail }));
                              if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                            }}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            className={`w-full bg-zinc-950/80 border ${
                              errors.email ? "border-red-500/80 focus:border-red-500" : "border-zinc-800 focus:border-amber-400/60"
                            } rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none transition`}
                          />
                        </div>
                        {errors.email && (
                          <p id="email-error" className="text-red-400 text-[11px] mt-1 font-mono">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone Input */}
                      <div>
                        <label htmlFor="phone" className="block text-[11px] font-mono text-zinc-400 mb-1">
                          Τηλέφωνο <span className="text-amber-400">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-3.5 text-zinc-500 text-xs" aria-hidden="true">📞</span>
                          <input
                            id="phone"
                            type="tel"
                            inputMode="numeric"
                            autoComplete="tel"
                            maxLength={10}
                            placeholder="69XXXXXXXX"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? "phone-error" : undefined}
                            className={`w-full bg-zinc-950/80 border ${
                              errors.phone ? "border-red-500/80 focus:border-red-500" : "border-zinc-800 focus:border-amber-400/60"
                            } rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none transition`}
                          />
                        </div>
                        {errors.phone && (
                          <p id="phone-error" className="text-red-400 text-[11px] mt-1 font-mono">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: ΜΗΝΥΜΑ */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                      ΒΗΜΑ 4
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Πώς μπορούμε να βοηθήσουμε;
                    </h3>
                    <p className="text-xs text-zinc-400 font-light">
                      Προαιρετικό — σημειώστε οποιαδήποτε λεπτομέρεια επιθυμείτε.
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
                        className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl p-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400/60 transition resize-none"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="pt-6 flex items-center justify-between gap-3 border-t border-zinc-900/60 mt-4">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 font-mono text-xs font-bold hover:bg-zinc-900 transition cursor-pointer"
                >
                  Πίσω
                </button>
              ) : <div />}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    (step === 1 && formData.fullName.trim().length < 2) ||
                    (step === 3 && (formData.phone.length !== 10 || !formData.email.trim()))
                  }
                  className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-mono text-xs font-bold uppercase transition disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-amber-400/10 ml-auto cursor-pointer"
                >
                  Συνέχεια →
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-mono text-xs font-bold uppercase transition shadow-lg shadow-amber-400/20 ml-auto cursor-pointer"
                >
                  Αποστολή
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}