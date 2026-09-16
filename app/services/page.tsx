import type { Metadata } from "next";
import ServicesClient from "@/components/ServiceClient"; 

export const metadata: Metadata = {
  title: "Υπηρεσίες AI, Automations & Web Development | Chrysus Digital",
  description:
    "Ανακαλύψτε τις υπηρεσίες της Chrysus Digital: AI Voice Agents, έξυπνες αυτοματοποιήσεις διαδικασιών (Automations) και custom Web Development για σύγχρονες επιχειρήσεις.",
  keywords: [
    "AI Agents",
    "AI Receptionist",
    "Business Automations",
    "Custom Web Development",
    "Ψηφιακός Μετασχηματισμός",
    "Chrysus Digital services",
  ],
  alternates: {
    canonical: "https://chrysusdigital.com/services",
  },
  openGraph: {
    title: "Υπηρεσίες AI, Automations & Web Development | Chrysus Digital",
    description:
      "Ολοκληρωμένες ψηφιακές λύσεις Τεχνητής Νοημοσύνης, Αυτοματοποίησης και Ιστού για την ανάπτυξη της επιχείρησής σας.",
    url: "https://chrysusdigital.com/services",
    siteName: "Chrysus Digital",
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Υπηρεσίες | Chrysus Digital",
    description:
      "AI Voice Receptionists, Business Automations & Custom Web Development.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemPage",
      "@id": "https://chrysusdigital.com/services/#webpage",
      url: "https://chrysusdigital.com/services",
      name: "Υπηρεσίες | Chrysus Digital",
      description: "Κατάλογος B2B ψηφιακών υπηρεσιών AI, Automations και Web Development.",
    },
    {
      "@type": "Service",
      serviceType: "AI Voice & Conversation Agents",
      provider: {
        "@type": "Organization",
        name: "Chrysus Digital",
        url: "https://chrysusdigital.com",
      },
      description: "24/7 Αυτόματη τηλεφωνική υποδοχή με τεχνητή νοημοσύνη.",
    },
    {
      "@type": "Service",
      serviceType: "Business Automations & Integrations",
      provider: {
        "@type": "Organization",
        name: "Chrysus Digital",
        url: "https://chrysusdigital.com",
      },
      description: "Αυτοματοποίηση εταιρικών διαδικασιών, CRM και workflows.",
    },
    {
      "@type": "Service",
      serviceType: "Custom Web Development",
      provider: {
        "@type": "Organization",
        name: "Chrysus Digital",
        url: "https://chrysusdigital.com",
      },
      description: "Σχεδιασμός και ανάπτυξη ταχύτατων custom ιστοσελίδων.",
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesClient />
    </>
  );
}