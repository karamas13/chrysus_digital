import type { Metadata } from "next";
import PricingClient from "@/components/PricingClient";

// 1. ΠΛΗΡΕΣ B2B SEO METADATA (.com domain)
export const metadata: Metadata = {
  title: "Τιμοκατάλογος & Πακέτα | Chrysus Digital",
  description:
    "Δείτε τις τιμές για AI Voice Agents, Business Automations και Web Development. Διαφανή πακέτα χωρίς κρυφές χρεώσεις για την επιχείρησή σας.",
  keywords: [
    "Chrysus Digital τιμές",
    "AI Voice Agents κόστος",
    "Business Automations τιμοκατάλογος",
    "Κατασκευή ιστοσελίδας τιμή",
    "AI Receptionist τιμές",
  ],
  alternates: {
    canonical: "https://chrysusdigital.com/pricing",
  },
  openGraph: {
    title: "Τιμοκατάλογος & Πακέτα | Chrysus Digital",
    description:
      "Επιλέξτε το κατάλληλο πακέτο AI Voice Agents, Automations ή Web Development για την επιχείρησή σας.",
    url: "https://chrysusdigital.com/pricing",
    siteName: "Chrysus Digital",
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Τιμοκατάλογος & Πακέτα | Chrysus Digital",
    description:
      "Επιλέξτε το κατάλληλο πακέτο AI Voice Agents, Automations ή Web Development για την επιχείρησή σας.",
  },
};

// 2. JSON-LD STRUCTURED DATA (Schema.org)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://chrysusdigital.com/pricing/#webpage",
      url: "https://chrysusdigital.com/pricing",
      name: "Τιμοκατάλογος & Πακέτα | Chrysus Digital",
      description:
        "Διαφανείς τιμές και συνδρομητικά πακέτα για AI Agents, Automations και Web Development.",
    },
    {
      "@type": "OfferCatalog",
      name: "Chrysus Digital Services & Pricing",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Voice Agents",
            description: "Πλήρης AI ρεσεψιονίστ για διαχείριση κλήσεων & ραντεβού",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Automations",
            description: "Workflow & API Automations, Review Systems & Call Recovery",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom Single-Page & Corporate Multi-Page ιστοσελίδες",
          },
        },
      ],
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PricingClient />
    </>
  );
}