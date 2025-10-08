import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-pets.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Happy pet sitter with pets"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Trusted by 500+ Pet Parents</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Your Pet's{" "}
            <span className="text-gradient">Home Away From Home</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Professional, loving pet sitting services in Toronto. Because your furry friends deserve the best care while you're away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto group">
                Book a Sitter
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Services
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center space-x-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border">
              <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Insured</p>
                <p className="text-sm text-muted-foreground">Fully bonded</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Experienced</p>
                <p className="text-sm text-muted-foreground">Vetted sitters</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 text-accent fill-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Top Rated</p>
                <p className="text-sm text-muted-foreground">4.9/5 stars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
