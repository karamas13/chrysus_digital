import type { Metadata } from "next";
import WebServicesClient from "./WebServicesClient";

export const metadata: Metadata = {
  title: "Κατασκευή Ιστοσελίδων & Web Applications | Chrysus Digital",
  description:
    "Custom σχεδιασμός ιστοσελίδων υψηλής αισθητικής και ταχύτητας (Next.js)[cite: 3]. Συστήματα κρατήσεων, διασύνδεση CRM, managed hosting και τεχνικό SEO[cite: 3].",
  keywords: [
    "Κατασκευή Ιστοσελίδων",
    "Custom Web Development",
    "Next.js Web Applications",
    "Online Booking System",
    "Managed Web Hosting",
    "Τεχνικό SEO",
  ],
  alternates: {
    canonical: "https://chrysusdigital.com/web-services",
  },
  openGraph: {
    title: "Κατασκευή Ιστοσελίδων & Web Applications | Chrysus Digital",
    description:
      "Ultra-fast custom ιστοσελίδες και web εφαρμογές με ενσωματωμένα συστήματα κρατήσεων και βέλτιστο SEO[cite: 3].",
    url: "https://chrysusdigital.com/web-services",
    siteName: "Chrysus Digital",
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Κατασκευή Ιστοσελίδων & Web Applications | Chrysus Digital",
    description:
      "Ultra-fast custom ιστοσελίδες και web εφαρμογές με ενσωματωμένα συστήματα κρατήσεων και βέλτιστο SEO[cite: 3].",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://chrysusdigital.com/web-services/#webpage",
      url: "https://chrysusdigital.com/web-services",
      name: "Κατασκευή Ιστοσελίδων & Web Applications | Chrysus Digital",
      description:
        "Υπηρεσίες σχεδιασμού και ανάπτυξης custom ιστοσελίδων, web εφαρμογών και συστημάτων κρατήσεων[cite: 3].",
    },
    {
      "@type": "Service",
      name: "Custom Web Development Services",
      provider: {
        "@type": "Organization",
        name: "Chrysus Digital",
        url: "https://chrysusdigital.com",
      },
      serviceType: "Web Development & Digital Presence",
      areaServed: "GR",
      description:
        "Custom σχεδιασμός Single-Page & Multi-Page ιστοσελίδων, Next.js εφαρμογών και διασύνδεση με CRM[cite: 3].",
    },
  ],
};

export default function WebServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WebServicesClient />
    </>
  );
}