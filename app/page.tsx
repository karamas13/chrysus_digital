import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import ProblemStatement from "@/components/sections/ProblemStatement";
import ScrollToTop from "@/components/ScrollToTop";

// Dynamic imports για τα components κάτω από το fold (Lazy Loading & Core Web Vitals)
const SolutionSection = dynamic(() => import("@/components/sections/SolutionSection"));
const Process = dynamic(() => import("@/components/sections/Process"));
const Services = dynamic(() => import("@/components/sections/Services"));
const FAQSection = dynamic(() => import("@/components/sections/FAQ"));
const CTA = dynamic(() => import("@/components/sections/CTA"));

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chrysusdigital.com";

// Πλήρη & Βελτιστοποιημένα Metadata για SEO & Social Sharing
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chrysus Digital | AI Voice Agents & Αυτοματοποίηση Επιχειρήσεων",
  description:
    "Αναβαθμίστε την επιχείρησή σας με 24/7 AI Τηλεφωνικούς Agents, αυτοματοποίηση επιχειρηματικών διαδικασιών (Workflows) και σύγχρονο Web Development.",
  keywords: [
    "Chrysus Digital",
    "AI Voice Agents",
    "AI Γραμματέας",
    "Ψηφιακή Υποδοχή",
    "Αυτοματοποίηση Επιχειρήσεων",
    "Business Automation Workflows",
    "Κατασκευή Ιστοσελίδων",
    "Web Development Next.js",
    "AI Chatbot",
    "Αυτοματοποίηση Ραντεβού",
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Chrysus Digital | AI Voice Agents & Ψηφιακές Λύσεις",
    description:
      "24/7 AI Τηλεφωνική Υποδοχή, Αυτοματοποιήσεις Διαδικασιών & Custom Web Development για σύγχρονες επιχειρήσεις.",
    url: siteUrl,
    siteName: "Chrysus Digital",
    locale: "el_GR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Chrysus Digital - AI Voice Agents & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chrysus Digital | AI Voice Agents & Ψηφιακές Λύσεις",
    description:
      "24/7 AI Τηλεφωνική Υποδοχή, Αυτοματοποιήσεις Διαδικασιών & Custom Web Development.",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function Home() {
  // JSON-LD Schema για Google Rich Snippets & Knowledge Graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Chrysus Digital",
        description: "AI Voice Agents, Business Automations & Web Development",
        inLanguage: "el-GR",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Chrysus Digital",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/Logo.avif`,
        },
        image: `${siteUrl}/og-image.png`,
        email: "contact@chrysusdigital.gr",
        sameAs: ["https://www.instagram.com/chrysus.digital/"],
        address: {
          "@type": "PostalAddress",
          addressCountry: "GR",
        },
        knowsAbout: [
          "Artificial Intelligence",
          "AI Voice Agents",
          "Business Process Automation",
          "Web Development",
          "Workflow Integration",
        ],
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#services`,
        name: "Ψηφιακές Λύσεις & AI Αυτοματοποιήσεις",
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        serviceType: "Digital Solutions & AI Integration",
        areaServed: "GR",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Υπηρεσίες Chrysus Digital",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "24/7 AI Voice Agent & Τηλεφωνική Υποδοχή",
                description:
                  "Έξυπνη τηλεφωνική υποδοχή AI που απαντά 24/7, κλείνει ραντεβού και εξυπηρετεί πελάτες.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Αυτοματοποιήσεις Διαδικασιών (Workflows)",
                description:
                  "Διασύνδεση CRM, ημερολογίων και αυτόματων ειδοποιήσεων για εξοικονόμηση χρόνου.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Ανάπτυξη Σύγχρονων Ιστοσελίδων (Web Development)",
                description:
                  "Ultra-fast ιστοσελίδες και e-shops σχεδιασμένα με Next.js & Tailwind CSS.",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Πώς διαχειρίζεται ο A.I. Agent τα ραντεβού στο Google Calendar;",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ο A.I. Agent συνδέεται απευθείας με το ημερολόγιό σας, ελέγχει τη διαθεσιμότητα σε πραγματικό χρόνο και καταχωρεί ή μεταθέτει ραντεβού αυτόματα.",
            },
          },
          {
            "@type": "Question",
            name: "Χρειάζεται να αλλάξω τον υπάρχοντα τηλεφωνικό μου αριθμό;",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Όχι. Διατηρείτε τον υφιστάμενο αριθμό σας. Η σύνδεση γίνεται με απλή προώθηση κλήσεων μέσω τηλεφωνικού κέντρου PBX.",
            },
          },
          {
            "@type": "Question",
            name: "Πώς προστατεύονται τα προσωπικά δεδομένα των πελατών;",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Το σύστημα συμμορφώνεται πλήρως με τον κανονισμό GDPR και δεν αποθηκεύει ευαίσθητα προσωπικά δεδομένα σε εξωτερικές ειδοποιήσεις.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Έγχυση Structured Data (JSON-LD) στο head */}
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