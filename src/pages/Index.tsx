import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PetServicesSlideshow from "@/components/PetServicesSlideshow";
import HowItWorks from "@/components/HowItWorks";
import PSICertification from "@/components/PSICertification";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
// import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PetServicesSlideshow />
      <HowItWorks />
      <PSICertification />
      <PricingSection />
      <Testimonials />
      {/* <CTASection /> */}
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
