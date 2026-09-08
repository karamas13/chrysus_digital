import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import Services from "@/components/sections/Services";
import ProblemStatement from "@/components/sections/ProblemStatement"
import SolutionSection from "@/components/sections/SolutionSection";
import FAQSection from "@/components/sections/FAQ";

// You can add more sections here as we build them
// import Services from "@/components/sections/Services";
// import Portfolio from "@/components/sections/Portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <SolutionSection />
      <Process />
      <Services />
      <FAQSection />
      <CTA />
      {/* Future Sections will go here:
        <Services />
        <Portfolio />
        <Contact />
      */}
    </>
  );
}