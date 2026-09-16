import type { Metadata } from "next";
import AIServicesClient from "./AiServicesClient";

// 1. Fully Generalized B2B SEO Metadata
export const metadata: Metadata = {
  title: "AI Voice Agents & Τηλεφωνική Υποδοχή AI | Chrysus Digital",
  description:
    "Αναβαθμίστε την επιχειρησιακή σας επικοινωνία με AI Receptionists. 24/7 αυτόματη απάντηση κλήσεων, προγραμματισμός ραντεβού, διασύνδεση CRM & SMS follow-ups.",
  keywords: [
    "AI Voice Agents",
    "AI Receptionist",
    "Τηλεφωνική Υποδοχή AI",
    "Αυτοματοποίηση Κλήσεων",
    "Smart Booking System",
    "AI για Επιχειρήσεις",
    "Virtual Voice Assistant",
  ],
  alternates: {
    canonical: "https://chrysusdigital.com/ai-services",
  },
  openGraph: {
    title: "AI Voice Agents & Τηλεφωνική Υποδοχή AI | Chrysus Digital",
    description:
      "24/7 AI τηλεφωνητές για επιχειρήσεις. Αυτόματος προγραμματισμός ραντεβού, διασύνδεση CRM και φυσική ελληνική ομιλία.",
    url: "https://chrysusdigital.com/ai-services",
    siteName: "Chrysus Digital",
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agents & Τηλεφωνική Υποδοχή AI | Chrysus Digital",
    description:
      "24/7 AI τηλεφωνητές για επιχειρήσεις. Αυτόματος προγραμματισμός ραντεβού, διασύνδεση CRM και φυσική ελληνική ομιλία.",
  },
};

// 2. Generalized Schema.org Structured Data (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://chrysusdigital.com/ai-services/#webpage",
      url: "https://chrysusdigital.com/ai-services",
      name: "AI Voice Agents & Τηλεφωνική Υποδοχή AI | Chrysus Digital",
      description:
        "Υπηρεσίες τεχνητής νοημοσύνης για αυτόματη τηλεφωνική εξυπηρέτηση, διαχείριση ραντεβού και αυτοματοποίηση ροής εργασιών.",
    },
    {
      "@type": "Service",
      name: "AI Voice Receptionist Services",
      provider: {
        "@type": "Organization",
        name: "Chrysus Digital",
        url: "https://chrysusdigital.com",
      },
      serviceType: "AI Telephony & Business Automation",
      areaServed: "GR",
      description:
        "Έξυπνοι AI agents για διαχείριση κλήσεων, κρατήσεων και υποστήριξη πελατών 24 ώρες το 24ωρο.",
    },
  ],
};

export default function AIServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AIServicesClient />
    </>
  );
}