import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import FeaturesSection from "@/components/features/FeaturesSection";
import CodeEditorDemo from "@/components/code-editor/CodeEditorDemo";
import TestimonialsSection from "@/components/features/TestimonialsSection";
import PricingSection from "@/components/features/PricingSection";
import FAQSection from "@/components/features/FAQSection";
import ContactSection from "@/components/features/ContactSection";
import BlogPreview from "@/components/features/BlogPreview";
import CTASection from "@/components/features/CTASection";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CookieConsent from "@/components/ui/CookieConsent";
import LoadingAnimation from "@/components/ui/LoadingAnimation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <LoadingAnimation />
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <CodeEditorDemo />
        <TestimonialsSection />
        <PricingSection />
        <BlogPreview />
        <FAQSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
}
