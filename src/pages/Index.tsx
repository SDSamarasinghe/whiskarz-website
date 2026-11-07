import SEO from "@/components/SEO";
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
      <SEO
          title="Pet Sitters in Toronto & GTA | Whiskarz Premium Pet Care"
          description="Looking for trusted pet sitters in Toronto and the GTA? Whiskarz offers loving in-home pet sitting, dog walking and care for cats, rabbits, birds and small pets."
          path="/"
      />
    </div>
  );
};

export default Index;
