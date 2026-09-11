import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import ProblemStatement from "@/components/sections/ProblemStatement";
import ScrollToTop from "@/components/ScrollToTop";

// Dynamic imports για τα components κάτω από το fold (Lazy Loading)
const SolutionSection = dynamic(() => import("@/components/sections/SolutionSection"));
const Process = dynamic(() => import("@/components/sections/Process"));
const Services = dynamic(() => import("@/components/sections/Services"));
const FAQSection = dynamic(() => import("@/components/sections/FAQ"));
const CTA = dynamic(() => import("@/components/sections/CTA"));

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chrysusdigital.gr";

// Πλήρη Metadata για SEO & Social Sharing
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chrysus Digital | Ψηφιακή Υποδοχή AI για Οδοντιατρεία",
  description:
    "AI τηλεφωνική υποδοχή για οδοντιατρεία που απαντά 24/7, καταγράφει σωστά τα αιτήματα και αυτοματοποιεί τα ραντεβού.",
  keywords: [
    "AI γραμματέας",
    "οδοντιατρείο AI",
    "ψηφιακή υποδοχή",
    "αυτοματοποίηση ραντεβού",
    "τηλεφωνική γραμματεία οδοντιατρείου",
    "Chrysus Digital",
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Chrysus Digital | Ψηφιακή Υποδοχή AI για Οδοντιατρεία",
    description: "24/7 AI Τηλεφωνική Υποδοχή και Αυτοματοποίηση Ραντεβού για Οδοντιατρεία.",
    url: siteUrl,
    siteName: "Chrysus Digital",
    locale: "el_GR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`, // Φροντίστε να υπάρχει εικόνα og-image.jpg στο /public
        width: 1200,
        height: 630,
        alt: "Chrysus Digital - AI Receptionists για Οδοντιατρεία",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chrysus Digital | Ψηφιακή Υποδοχή AI",
    description: "24/7 AI Τηλεφωνική Υποδοχή για Οδοντιατρεία",
    images: [`${siteUrl}/og-image.jpg`],
  },
};

export default function Home() {
  // JSON-LD Schema για Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Chrysus Digital",
        url: siteUrl,
        logo: `${siteUrl}/images/Logo.avif`,
        email: "contact@chrysusdigital.gr",
        sameAs: ["https://www.instagram.com/chrysus.digital/"],
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#service`,
        name: "AI Τηλεφωνική Υποδοχή για Οδοντιατρεία",
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        description:
          "24/7 AI Voice & Text Receptionist σχεδιασμένη ειδικά για οδοντιατρεία, με δυνατότητα αυτόματης καταχώρησης ραντεβού.",
        areaServed: "GR",
        serviceType: "Dental AI Receptionist",
      },
    ],
  };

  return (
    <>
      {/* Έγχυση JSON-LD Schema στο head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ScrollToTop />
      
      <main id="main-content">
        <Hero />
        <ProblemStatement />
        <SolutionSection />
        <Process />
        <Services />
        <FAQSection />
        <CTA />
      </main>
    </>
  );
}