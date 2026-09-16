import type { Metadata } from "next";
import AutomationsClient from "./AutomationsClient";

export const metadata: Metadata = {
  title: "Αυτοματοποιήσεις & Business Workflows | Chrysus Digital",
  description:
    "Συνδέστε το CRM, το ημερολόγιο και τα κανάλια επικοινωνίας της επιχείρησής σας. Αυτοματοποιήστε τις υπενθυμίσεις SMS/Viber, την ανάκτηση χαμένων κλήσεων και τη συλλογή κριτικών Google.",
  keywords: [
    "Αυτοματοποιήσεις Επιχειρήσεων",
    "Business Workflows",
    "No-Show Reduction SMS",
    "Missed-Call Recovery",
    "Google Reviews Automations",
    "CRM Calendar Integration",
  ],
  alternates: {
    canonical: "https://chrysusdigital.com/automations",
  },
  openGraph: {
    title: "Αυτοματοποιήσεις & Business Workflows | Chrysus Digital",
    description:
      "Εξαλείψτε τις ακυρώσεις ραντεβού, ανακτήστε χαμένες κλήσεις και αυτοματοποιήστε τις αξιολογήσεις Google για την επιχείρησή σας.",
    url: "https://chrysusdigital.com/automations",
    siteName: "Chrysus Digital",
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Αυτοματοποιήσεις & Business Workflows | Chrysus Digital",
    description:
      "Εξαλείψτε τις ακυρώσεις ραντεβού, ανακτήστε χαμένες κλήσεις και αυτοματοποιήστε τις αξιολογήσεις Google για την επιχείρησή σας.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://chrysusdigital.com/automations/#webpage",
      url: "https://chrysusdigital.com/automations",
      name: "Αυτοματοποιήσεις & Business Workflows | Chrysus Digital",
      description:
        "Υπηρεσίες αυτοματοποίησης επιχειρησιακών διαδικασιών, υπενθυμίσεων SMS, συγχρονισμού CRM και ανάκτησης κλήσεων.",
    },
    {
      "@type": "Service",
      name: "Business Workflow Automations",
      provider: {
        "@type": "Organization",
        name: "Chrysus Digital",
        url: "https://chrysusdigital.com",
      },
      serviceType: "Workflow & CRM Automation Services",
      areaServed: "GR",
      description:
        "Ολοκληρωμένες λύσεις αυτοματοποίησης για διαχείριση ραντεβού, SMS υπενθυμίσεις, Google Reviews και διασύνδεση συστημάτων.",
    },
  ],
};

export default function AutomationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AutomationsClient />
    </>
  );
}