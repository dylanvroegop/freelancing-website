import { HeroSection } from "@/components/zzp/hero-section";
import { PainSection } from "@/components/zzp/pain-section";
import { SolutionSection } from "@/components/zzp/solution-section";
import { DeliverablesSection } from "@/components/zzp/deliverables-section";
import { AboutSection } from "@/components/zzp/about-section";
import { OfferSection } from "@/components/zzp/offer-section";
import { FAQSection } from "@/components/zzp/faq-section";
import { ContactSection } from "@/components/zzp/contact-section";
import { Navbar } from "@/components/zzp/navbar";
import { Footer } from "@/components/zzp/footer";

export default function ZZPTimmermanPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="rest-wood-bg">
          <PainSection />
          <SolutionSection />
          <DeliverablesSection />
          <AboutSection />
          <OfferSection />
          <ContactSection />
          <FAQSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
