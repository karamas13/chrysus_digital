"use client";

import { useState } from "react";
import PricingCard, { PlanFeature } from "@/components/ui/PricingCard";

type AiBillingType = "monthly" | "yearly";
type WebBillingType = "onetime" | "managed";
type AutoBillingType = "monthly" | "yearly";

const aiPlansData: Record<AiBillingType, PlanFeature[]> = {
  monthly: [
    {
      name: "Essential AI",
      badge: "Βασικό Πακέτο",
      price: "149€",
      period: "/ μήνα",
      setupFee: "+ 199€ Setup Fee",
      description: "Πλήρης AI ρεσεψιονίστ για μικρές & μεσαίες επιχειρήσεις.",
      isPopular: false,
      features: [
        "400 λεπτά AI κλήσεων / μήνα",
        "100 SMS segments / μήνα",
        "1 Ταυτόχρονη AI κλήση & 1 Softphone extension",
        "1 Ημερολόγιο / Πάροχος & 1 Τοποθεσία",
        "Πλήρης διαχείριση ραντεβού (Κράτηση, Ακύρωση, Αλλαγή)",
        "Telegram alerts για επείγοντα περιστατικά",
      ],
      detailedFeatures: [
        "400 λεπτά AI κλήσεων / μήνα",
        "100 SMS segments για υπενθυμίσεις ραντεβού",
        "Λειτουργίες: AI-first, overflow, missed-call-only & εκτός ωραρίου",
        "Πλήρης διαχείριση ραντεβού (Κράτηση, Αναζήτηση, Ακύρωση, Αλλαγή)",
        "Προσαρμογή τύπων ραντεβού, διάρκειας & οδηγιών",
        "Διαχείριση ωραρίου, αργιών & εκτάκτων διαστημάτων",
        "Καταγραφή αιτημάτων επιστροφής κλήσης (Callback queue)",
        "Live μεταφορά κλήσης στο προσωπικό (Live Transfer)",
        "1 Ταυτόχρονη AI κλήση (με αυτόματη δρομολόγηση overflow)",
        "1 Staff Softphone extension & Ring-group routing",
        "Telegram alerts για επείγοντα με tracking ανεπίλυτων περιπτώσεων",
        "1 Ημερολόγιο, 1 Τοποθεσία & 1 Τηλεφωνικός Αριθμός",
      ],
    },
    {
      name: "Professional AI",
      badge: "Δημοφιλέστερο",
      price: "299€",
      period: "/ μήνα",
      setupFee: "+ 299€ Setup Fee",
      description: "Αυξημένη χωρητικότητα κλήσεων & πλήρης υποστήριξη ομάδας.",
      isPopular: true,
      features: [
        "900 λεπτά AI κλήσεων / μήνα",
        "300 SMS segments / μήνα",
        "2 Ταυτόχρονες AI κλήσεις & 2 Softphone extensions",
        "1 Ημερολόγιο / Πάροχος & 1 Τοποθεσία",
        "Live Sync με Google Calendar & έλεγχος συγκρούσεων",
        "2-way SMS επιβεβαιώσεις & Missed-call text-back",
      ],
      detailedFeatures: [
        "Όλα τα χαρακτηριστικά του Essential AI",
        "900 λεπτά AI κλήσεων / μήνα",
        "300 SMS segments συνολικά",
        "SMS επιβεβαιώσεις & υπενθυμίσεις με links ακύρωσης/αλλαγής",
        "2-way SMS επιβεβαίωση, ακύρωση & αναπρογραμματισμός",
        "Missed-call text-back μέσω των διαθέσιμων SMS",
        "Αποστολή οδηγιών / digital intake-form link",
        "Ημερήσια αναφορά (Digest) ραντεβού & επιστροφών κλήσεων",
        "2 Ταυτόχρονες AI κλήσεις",
        "Συγχρονισμός Google Calendar & αυτόματος έλεγχος διαθεσιμότητας",
        "2 Staff Softphone extensions στο ring group",
        "Υποστήριξη προτεραιότητας (Priority Support)",
      ],
    },
    {
      name: "Premium AI",
      badge: "Multi-Team / Enterprise",
      price: "599€",
      period: "/ μήνα",
      setupFee: "+ 499€ – 799€ Setup Fee",
      description: "Για πολυεταιρικά σχήματα & κλινικές με πολλαπλά τμήματα.",
      isPopular: false,
      features: [
        "1.800 λεπτά AI κλήσεων / μήνα",
        "600 SMS segments / μήνα",
        "4 Ταυτόχρονες AI κλήσεις & 4 Softphone extensions",
        "Έως 3 Ημερολόγια & Έως 2 Τοποθεσίες",
        "Εξειδικευμένη δρομολόγηση κλήσεων ανά τμήμα/έδρα",
        "Priority Onboarding & Dedicated Support",
      ],
      detailedFeatures: [
        "Όλα τα χαρακτηριστικά του Professional AI",
        "1.800 λεπτά AI κλήσεων / μήνα",
        "600 SMS segments συνολικά",
        "4 Ταυτόχρονες AI κλήσεις",
        "4 Staff Softphone extensions στο ring group",
        "Διαφορετικοί προορισμοί μεταφοράς ανά τμήμα ή AI αριθμό",
        "Προηγμένη δρομολόγηση βάσει ώρας & τμήματος",
        "Προγραμματισμός για πολλαπλούς παρόχους",
        "Σύντομες αναφορές (Summaries) αποτελέσματος κλήσης",
        "AI επιστροφή κλήσεων σε αποθηκευμένα αιτήματα",
        "Λίστα αναμονής ακυρώσεων & αυτόματη προσφορά κενών slots",
        "Μηνιαία βελτιστοποίηση FAQ, ροής κλήσεων & performance review",
        "Υποστήριξη έως 3 Ημερολογίων & έως 2 Τοποθεσιών",
        "Priority Onboarding & Dedicated Support",
      ],
    },
  ],
  yearly: [
    {
      name: "Essential AI",
      badge: "Βασικό Πακέτο",
      price: "119€",
      period: "/ μήνα",
      setupFee: "Τιμολογείται ετησίως (1.428€)",
      description: "Πλήρης AI ρεσεψιονίστ για μικρές & μεσαίες επιχειρήσεις.",
      isPopular: false,
      features: [
        "400 λεπτά AI κλήσεων / μήνα",
        "100 SMS segments / μήνα",
        "1 Ταυτόχρονη AI κλήση & 1 Softphone extension",
        "1 Ημερολόγιο / Πάροχος & 1 Τοποθεσία",
        "Πλήρης διαχείριση ραντεβού (Κράτηση, Ακύρωση, Αλλαγή)",
        "Telegram alerts για επείγοντα περιστατικά",
      ],
      detailedFeatures: [
        "400 λεπτά AI κλήσεων / μήνα",
        "100 SMS segments για υπενθυμίσεις ραντεβού",
        "Λειτουργίες: AI-first, overflow, missed-call-only & εκτός ωραρίου",
        "Πλήρης διαχείριση ραντεβού (Κράτηση, Αναζήτηση, Ακύρωση, Αλλαγή)",
        "Προσαρμογή τύπων ραντεβού, διάρκειας & οδηγιών",
        "Διαχείριση ωραρίου, αργιών & εκτάκτων διαστημάτων",
        "Καταγραφή αιτημάτων επιστροφής κλήσης (Callback queue)",
        "Live μεταφορά κλήσης στο προσωπικό (Live Transfer)",
        "1 Ταυτόχρονη AI κλήση (με αυτόματη δρομολόγηση overflow)",
        "1 Staff Softphone extension & Ring-group routing",
        "Telegram alerts για επείγοντα με tracking ανεπίλυτων περιπτώσεων",
        "1 Ημερολόγιο, 1 Τοποθεσία & 1 Τηλεφωνικός Αριθμός",
      ],
    },
    {
      name: "Professional AI",
      badge: "Δημοφιλέστερο",
      price: "239€",
      period: "/ μήνα",
      setupFee: "Τιμολογείται ετησίως (2.868€)",
      description: "Αυξημένη χωρητικότητα κλήσεων & πλήρης υποστήριξη ομάδας.",
      isPopular: true,
      features: [
        "900 λεπτά AI κλήσεων / μήνα",
        "300 SMS segments / μήνα",
        "2 Ταυτόχρονες AI κλήσεις & 2 Softphone extensions",
        "1 Ημερολόγιο / Πάροχος & 1 Τοποθεσία",
        "Live Sync με Google Calendar & έλεγχος συγκρούσεων",
        "2-way SMS επιβεβαιώσεις & Missed-call text-back",
      ],
      detailedFeatures: [
        "Όλα τα χαρακτηριστικά του Essential AI",
        "900 λεπτά AI κλήσεων / μήνα",
        "300 SMS segments συνολικά",
        "SMS επιβεβαιώσεις & υπενθυμίσεις με links ακύρωσης/αλλαγής",
        "2-way SMS επιβεβαίωση, ακύρωση & αναπρογραμματισμός",
        "Missed-call text-back μέσω των διαθέσιμων SMS",
        "Αποστολή οδηγιών / digital intake-form link",
        "Ημερήσια αναφορά (Digest) ραντεβού & επιστροφών κλήσεων",
        "2 Ταυτόχρονες AI κλήσεις",
        "Συγχρονισμός Google Calendar & αυτόματος έλεγχος διαθεσιμότητας",
        "2 Staff Softphone extensions στο ring group",
        "Υποστήριξη προτεραιότητας (Priority Support)",
      ],
    },
    {
      name: "Premium AI",
      badge: "Multi-Team / Enterprise",
      price: "479€",
      period: "/ μήνα",
      setupFee: "Τιμολογείται ετησίως (5.748€)",
      description: "Για πολυεταιρικά σχήματα & κλινικές με πολλαπλά τμήματα.",
      isPopular: false,
      features: [
        "1.800 λεπτά AI κλήσεων / μήνα",
        "600 SMS segments / μήνα",
        "4 Ταυτόχρονες AI κλήσεις & 4 Softphone extensions",
        "Έως 3 Ημερολόγια & Έως 2 Τοποθεσίες",
        "Εξειδικευμένη δρομολόγηση κλήσεων ανά τμήμα/έδρα",
        "Priority Onboarding & Dedicated Support",
      ],
      detailedFeatures: [
        "Όλα τα χαρακτηριστικά του Professional AI",
        "1.800 λεπτά AI κλήσεων / μήνα",
        "600 SMS segments συνολικά",
        "4 Ταυτόχρονες AI κλήσεις",
        "4 Staff Softphone extensions στο ring group",
        "Διαφορετικοί προορισμοί μεταφοράς ανά τμήμα ή AI αριθμό",
        "Προηγμένη δρομολόγηση βάσει ώρας & τμήματος",
        "Προγραμματισμός για πολλαπλούς παρόχους",
        "Σύντομες αναφορές (Summaries) αποτελέσματος κλήσης",
        "AI επιστροφή κλήσεων σε αποθηκευμένα αιτήματα",
        "Λίστα αναμονής ακυρώσεων & αυτόματη προσφορά κενών slots",
        "Μηνιαία βελτιστοποίηση FAQ, ροής κλήσεων & performance review",
        "Υποστήριξη έως 3 Ημερολογίων & έως 2 Τοποθεσιών",
        "Priority Onboarding & Dedicated Support",
      ],
    },
  ],
};

const webPlansData: Record<WebBillingType, PlanFeature[]> = {
  onetime: [
    {
      title: "Starter Landing",
      badge: "Single Page",
      price: "250€",
      type: "Εφάπαξ πληρωμή",
      description:
        "Ultra-fast μονοσέλιδη ιστοσελίδα σχεδιασμένη για άμεση μετατροπή επισκεπτών σε πελάτες.",
      isBestOffer: false,
      features: [
        "Custom Single-Page UX/UI Design",
        "Ultra-Fast Ταχύτητα Φόρτωσης",
        "Πλήρης Προσαρμογή σε Κινητά & Tablets",
        "Έως 2 reviews για αλλαγές πριν την παράδοση",
        "Online Booking System (Προαιρετικό)",
        "SEO Optimization",
        "Πλήρης Παράδοση & Ιδιοκτησία Κώδικα",
      ],
    },
    {
      title: "Corporate Multi-Page",
      badge: "Δημοφιλέστερο Web",
      price: "420€",
      type: "Εφάπαξ πληρωμή",
      description:
        "Ολοκληρωμένη πολυσέλιδη ιστοσελίδα για πλήρη προβολή των υπηρεσιών και του brand σας.",
      isBestOffer: true,
      features: [
        "Ότι περιλαμβάνει το Starter πλάνο",
        "Έως 6 Πολυσέλιδες Ενότητες (Αρχική, Υπηρεσίες, κ.ά.)",
        "Online Booking System & Ημερολόγιο (Προαιρετικό)",
        "Έως 5 reviews για αλλαγές πριν την παράδοση",
        "Προηγμένο SEO & Google Business Profile",
        "Διασύνδεση με Social Media & Contact Funnels",
      ],
    },
    {
      title: "Enterprise Custom Web",
      badge: "Bespoke Solution",
      price: "Custom",
      type: "Κατόπιν Συνεννόησης",
      description:
        "Εξατομικευμένη web εφαρμογή υψηλών απαιτήσεων με custom integrations.",
      isBestOffer: false,
      features: [
        "100% Tailor-made Architecture",
        "Custom Online Booking & CRM Workflows (Προαιρετικό)",
        "Custom Dynamic Dashboards & Client Portals",
        "Advanced API Integrations (ERP / Payment Gateways)",
        "Απεριόριστα reviews για αλλαγές πριν την παράδοση",
        "Πλήρης προσαρμογή σε οποιαδήποτε ανάγκη σας",
      ],
    },
  ],
  managed: [
    {
      title: "Starter Landing",
      badge: "Single Page + Support",
      price: "149€",
      type: "+ 29€ / μήνα συντήρηση",
      description:
        "Μειωμένο αρχικό κόστος κατασκευής με πλήρη μηνιαία τεχνική υποστήριξη & φιλοξενία.",
      isBestOffer: false,
      features: [
        "Custom Single-Page UX/UI Design",
        "Online Booking System (Προαιρετικό)",
        "Δωρεάν High-Speed Hosting & Domain",
        "Μηνιαία Backups & Security Updates",
        "Έως 1 ώρα αλλαγών περιεχομένου / μήνα",
        "Βασικό On-Page SEO Optimization",
        "Πλήρης διαχείριση της σελίδας",
      ],
    },
    {
      title: "Corporate Multi-Page",
      badge: "Best Value Hybrid",
      price: "249€",
      type: "+ 49€ / μήνα συντήρηση",
      description:
        "Χαμηλή αρχική επένδυση με συνεχόμενη τεχνική διαχείριση και ανανεώσεις περιεχομένου.",
      isBestOffer: true,
      features: [
        "Έως 6 Πολυσέλιδες Ενότητες (Αρχική, Υπηρεσίες, κ.ά.)",
        "Online Booking System & Ημερολόγιο (Προαιρετικό)",
        "Managed Dedicated Hosting",
        "Έως 3 ώρες αλλαγών & updates περιεχομένου / μήνα",
        "Συνεχής Βελτιστοποίηση SEO & Analytics Report",
        "Πλήρης διαχείριση της σελίδας",
      ],
    },
    {
      title: "Enterprise Custom Web",
      badge: "Bespoke Managed",
      price: "Custom",
      type: "Custom Monthly SLA",
      description:
        "Πλήρως διαχειριζόμενη web πλατφόρμα με dedicated developer & continuous integration.",
      isBestOffer: false,
      features: [
        "100% Tailor-made Architecture (Next.js)",
        "Custom Booking System & Enterprise APIs",
        "Dedicated Managed Infrastructure",
        "Continuous Deployment & Custom Features",
        "Πολυγλωσσική Υποστήριξη (Multi-language)",
        "Guaranteed Response SLA (<2 hours)",
      ],
    },
  ],
};

const automationPlansData: Record<AutoBillingType, PlanFeature[]> = {
  monthly: [
    {
      name: "Review & Call Recovery",
      badge: "Βασικοί Αυτοματισμοί",
      price: "49€",
      period: "/ μήνα",
      setupFee: "Περιλαμβάνει Εξατομικευμένο σύστημα διαχείρισης",
      description:
        "Αυτοματοποιημένες κριτικές Google, ανάκτηση χαμένων κλήσεων & ακυρώσεων.",
      isPopular: false,
      features: [
        "Πρόσβαση στο Εξατομικευμένο σύστημα διαχείρισης",
        "Αυτόματη Συλλογή Κριτικών Google (Google Reviews)",
        "Μείωση Μη Εμφανίσεων Πελατών (No-Show Reduction)",
        "Ανάκτηση Χαμένων Κλήσεων (Missed-Call Recovery)",
        "Ειδοποιήσεις SMS / Email σε πραγματικό χρόνο",
      ],
      detailedFeatures: [
        "Πλήρης πρόσβαση στη δική μας εξατομικευμένη πλατφόρμα διαχείρισης εργασιών",
        "Αυτόματη αποστολή αιτημάτων για Google Reviews μετά από ραντεβού",
        "Σύστημα μείωσης μη εμφανίσεων (No-Show Reduction) με αυτόματες υπενθυμίσεις",
        "Ανάκτηση χαμένων κλήσεων (Missed-Call Recovery) με άμεση αποστολή SMS/follow-up",
        "Άμεση καταγραφή και ειδοποιήσεις για κάθε ενέργεια",
        "Μηνιαίος τεχνικός έλεγχος & διασφάλιση ορθής λειτουργίας",
      ],
    },
    {
      name: "Full Growth Engine",
      badge: "Δημοφιλέστερο",
      price: "79€",
      period: "/ μήνα",
      setupFee: "Περιλαμβάνει Εξατομικευμένο σύστημα διαχείρισης",
      description:
        "Πλήρες πακέτο αυτοματοποιήσεων με 800 SMS, Booking System & Recalls.",
      isPopular: true,
      features: [
        "Όλα τα χαρακτηριστικά του βασικού πακέτου",
        "800 SMS / μήνα περιλαμβάνονται",
        "Απλό Σύστημα Κρατήσεων (Simple Booking System)",
        "Επαναφορά Πελατών (Client Recall)",
        "Ανάκτηση Κενών Θέσεων & Λίστας Αναμονής (Empty-Slot / Waiting-List)",
      ],
      detailedFeatures: [
        "Πλήρης πρόσβαση στο Εξατομικευμένο σύστημα διαχείρισης",
        "Όλα τα features του βασικού πακέτου (Google Reviews, No-Show, Missed-Call Recovery)",
        "800 SMS / μήνα έτοιμα προς χρήση",
        "Απλό Σύστημα Κρατήσεων (Simple Booking System)",
        "Αυτοματοποιημένος επανέλεγχος & επαναφορά πελατών (Client Recall)",
        "Αυτόματη κάλυψη ακυρωμένων slots από τη λίστα αναμονής",
        "Two-way συντονισμός με το ημερολόγιο της επιχείρησης",
      ],
    },
    {
      name: "Custom Enterprise Workflow",
      badge: "Tailor-made Flows",
      price: "Custom",
      period: "",
      setupFee: "Κατόπιν Συνεννόησης",
      description:
        "Εξατομικευμένο σύστημα αυτοματισμών προσαρμοσμένο 100% στις ανάγκες σας.",
      isPopular: false,
      features: [
        "Πλήρης προσαρμογή στις δικές σας απαιτήσεις",
        "Όλα τα διαθέσιμα features & αυτοματισμοί",
        "Custom Booking System Integration (CRM / ERP)",
        "Ειδικοί Αυτοματισμοί & Tailor-made Workflows",
        "Dedicated Automation Architect",
      ],
      detailedFeatures: [
        "Πλήρης πρόσβαση στο Εξατομικευμένο σύστημα διαχείρισης με custom ρυθμίσεις",
        "Όλα τα διαθέσιμα features των προηγούμενων πακέτων",
        "Custom διασύνδεση του δικού σας Booking System / CRM / ERP",
        "Σχεδιασμός & υλοποίηση εξειδικευμένων workflows κατόπιν απαίτησης",
        "Custom API Integrations & Webhooks",
        "Dedicated Automation Architect & VIP support",
      ],
    },
  ],
  yearly: [
    {
      name: "Review & Call Recovery",
      badge: "Βασικοί Αυτοματισμοί",
      price: "39€",
      period: "/ μήνα",
      setupFee: "Τιμολογείται ετησίως (468€)",
      description:
        "Αυτοματοποιημένες κριτικές Google, ανάκτηση χαμένων κλήσεων & ακυρώσεων.",
      isPopular: false,
      features: [
        "Πρόσβαση στο Εξατομικευμένο σύστημα διαχείρισης",
        "Αυτόματη Συλλογή Κριτικών Google (Google Reviews)",
        "Μείωση Μη Εμφανίσεων Πελατών (No-Show Reduction)",
        "Ανάκτηση Χαμένων Κλήσεων (Missed-Call Recovery)",
        "Ειδοποιήσεις SMS / Email σε πραγματικό χρόνο",
      ],
      detailedFeatures: [
        "Πλήρης πρόσβαση στη δική μας εξατομικευμένη πλατφόρμα διαχείρισης εργασιών",
        "Αυτόματη αποστολή αιτημάτων για Google Reviews μετά από ραντεβού",
        "Σύστημα μείωσης μη εμφανίσεων (No-Show Reduction) με αυτόματες υπενθυμίσεις",
        "Ανάκτηση χαμένων κλήσεων (Missed-Call Recovery) με άμεση αποστολή SMS/follow-up",
        "Άμεση καταγραφή και ειδοποιήσεις για κάθε ενέργεια",
        "Μηνιαίος τεχνικός έλεγχος & διασφάλιση ορθής λειτουργίας",
      ],
    },
    {
      name: "Full Growth Engine",
      badge: "Δημοφιλέστερο",
      price: "63€",
      period: "/ μήνα",
      setupFee: "Τιμολογείται ετησίως (756€)",
      description:
        "Πλήρες πακέτο αυτοματοποιήσεων με 800 SMS, Booking System & Recalls.",
      isPopular: true,
      features: [
        "Όλα τα χαρακτηριστικά του βασικού πακέτου",
        "800 SMS / μήνα περιλαμβάνονται",
        "Απλό Σύστημα Κρατήσεων (Simple Booking System)",
        "Επαναφορά Πελατών (Client Recall)",
        "Ανάκτηση Κενών Θέσεων & Λίστας Αναμονής (Empty-Slot / Waiting-List)",
      ],
      detailedFeatures: [
        "Πλήρης πρόσβαση στο Εξατομικευμένο σύστημα διαχείρισης",
        "Όλα τα features του βασικού πακέτου (Google Reviews, No-Show, Missed-Call Recovery)",
        "800 SMS / μήνα έτοιμα προς χρήση",
        "Απλό Σύστημα Κρατήσεων (Simple Booking System)",
        "Αυτοματοποιημένος επανέλεγχος & επαναφορά πελατών (Client Recall)",
        "Αυτόματη κάλυψη ακυρωμένων slots από τη λίστα αναμονής",
        "Two-way συντονισμός με το ημερολόγιο της επιχείρησης",
      ],
    },
    {
      name: "Custom Enterprise Workflow",
      badge: "Tailor-made Flows",
      price: "Custom",
      period: "",
      setupFee: "Κατόπιν Συνεννόησης",
      description:
        "Εξατομικευμένο σύστημα αυτοματισμών προσαρμοσμένο 100% στις ανάγκες σας.",
      isPopular: false,
      features: [
        "Πλήρης πρόσβαση στο Εξατομικευμένο σύστημα διαχείρισης",
        "Όλα τα διαθέσιμα features & αυτοματισμοί",
        "Custom Booking System Integration (CRM / ERP)",
        "Ειδικοί Αυτοματισμοί & Tailor-made Workflows",
        "Dedicated Automation Architect",
      ],
      detailedFeatures: [
        "Πλήρης πρόσβαση στο Εξατομικευμένο σύστημα διαχείρισης με custom ρυθμίσεις",
        "Όλα τα διαθέσιμα features των προηγούμενων πακέτων",
        "Custom διασύνδεση του δικού σας Booking System / CRM / ERP",
        "Σχεδιασμός & υλοποίηση εξειδικευμένων workflows κατόπιν απαίτησης",
        "Custom API Integrations & Webhooks",
        "Dedicated Automation Architect & VIP support",
      ],
    },
  ],
};

export default function PricingClient() {
  const [aiBilling, setAiBilling] = useState<AiBillingType>("monthly");
  const [webBilling, setWebBilling] = useState<WebBillingType>("onetime");
  const [autoBilling, setAutoBilling] = useState<AutoBillingType>("monthly");

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 pb-24 px-6 relative overflow-hidden font-sans">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="text-amber-400">Αναβαθμίστε σήμερα</span> την Επιχείρησή σας
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Διαφανείς τιμές χωρίς κρυφές χρεώσεις. Επιλέξτε τα πακέτα που
            καλύπτουν τις ανάγκες σας ή συνδυάστε τα για την απόλυτη ψηφιακή
            μεταμόρφωση.
          </p>
        </div>

        {/* SECTION 1: AI RECEPTIONIST */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-amber-400 text-xs font-mono uppercase tracking-widest font-bold">
                01 / AI VOICE AGENTS
              </span>
              <h2 className="text-3xl font-bold mt-2">AI Receptionist Plans</h2>
            </div>

            {/* AI Toggle */}
            <div className="bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-800 flex items-center self-start md:self-auto">
              <button
                type="button"
                onClick={() => setAiBilling("monthly")}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  aiBilling === "monthly"
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Μηνιαία
              </button>
              <button
                type="button"
                onClick={() => setAiBilling("yearly")}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  aiBilling === "yearly"
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Ετήσια
                <span className="bg-amber-400/20 text-amber-300 text-[10px] px-2 py-0.5 rounded-full border border-amber-500/30">
                  -20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {aiPlansData[aiBilling].map((plan, index) => (
              <PricingCard
                key={plan.name || index}
                plan={plan}
                index={index}
                accentColor="amber"
                ctaText="ΕΠΙΛΟΓΗ ΠΑΚΕΤΟΥ AI"
              />
            ))}
          </div>
        </div>

        {/* SECTION 2: AUTOMATIONS */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-emerald-400 text-xs font-mono uppercase tracking-widest font-bold">
                02 / BUSINESS AUTOMATIONS
              </span>
              <h2 className="text-3xl font-bold mt-2">
                Workflow & API Automations
              </h2>
            </div>

            {/* Automation Toggle */}
            <div className="bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-800 flex items-center self-start md:self-auto">
              <button
                type="button"
                onClick={() => setAutoBilling("monthly")}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  autoBilling === "monthly"
                    ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Μηνιαία
              </button>
              <button
                type="button"
                onClick={() => setAutoBilling("yearly")}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  autoBilling === "yearly"
                    ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Ετήσια
                <span className="bg-emerald-400/20 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/30">
                  -20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {automationPlansData[autoBilling].map((plan, index) => (
              <PricingCard
                key={plan.name || index}
                plan={plan}
                index={index}
                accentColor="emerald"
                ctaText="ΕΠΙΛΟΓΗ AUTOMATION"
              />
            ))}
          </div>
        </div>

        {/* SECTION 3: WEB DEVELOPMENT */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest font-bold">
                03 / WEB DEVELOPMENT
              </span>
              <h2 className="text-3xl font-bold mt-2">
                Web Design & Digital Presence
              </h2>
            </div>

            {/* Web Toggle */}
            <div className="bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-800 flex items-center self-start md:self-auto">
              <button
                type="button"
                onClick={() => setWebBilling("onetime")}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  webBilling === "onetime"
                    ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Εφάπαξ
              </button>
              <button
                type="button"
                onClick={() => setWebBilling("managed")}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  webBilling === "managed"
                    ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Managed (Μηνιαίο)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {webPlansData[webBilling].map((plan, index) => (
              <PricingCard
                key={plan.title || index}
                plan={plan}
                index={index}
                accentColor="cyan"
                ctaText="ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ WEB"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}