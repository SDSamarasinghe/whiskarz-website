import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { AuroraBackground } from "@/components/ui/aurora-background";
import AnimatedPawPrints from "@/components/ui/AnimatedPawPrints";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-32 md:pb-56 lg:pb-72 xl:pb-80 overflow-hidden">
      <AuroraBackground className="absolute inset-0">
        {/* Animated Paw Prints only (removed grid pattern overlay) */}
        <AnimatedPawPrints />
      </AuroraBackground>
      
      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-6 w-full">
        {/* Centered Hero Content - Trend Loop Style */}
        <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 mt-6 sm:mt-8 md:mt-12 relative px-2 sm:px-4">
          <h1 className="font-bold leading-[1.15] sm:leading-[1.1] tracking-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl animate-fade-in-up">
            <span className="block text-primary mb-1 sm:mb-2">WHISKARZ</span>
            <span className="block text-foreground text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-1 sm:mb-2">Your Pet's</span>
            <span className="block bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent">Home Away From Home</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in px-2 sm:px-4 leading-relaxed">
            Professional, loving pet care services in Toronto, GTA & Durham Region. Because your furry friends deserve the best.
          </p>
          
          {/* Animated Pet Sitter Images */}
          <div className="relative w-full max-w-7xl mx-auto mt-2 sm:mt-4 hidden sm:block">
            {/* Left Side - Woman with Dog */}
            <div className="absolute left-[15%] sm:left-[18%] md:left-[22%] xl:left-[24%] top-0 sm:top-2 w-[200px] sm:w-[280px] md:w-[430px] lg:w-[530px] xl:w-[570px] h-auto animate-slide-in-left transition-all duration-500">
              <img 
                src="/leftside.png" 
                alt="Pet sitter with dog"
                className="w-full h-auto object-contain drop-shadow-2xl select-none"
                loading="lazy"
              />
            </div>
            
            {/* Right Side - Woman with Toy */}
            <div className="absolute right-[15%] sm:right-[18%] md:right-[22%] xl:right-[24%] top-0 sm:top-2 w-[200px] sm:w-[280px] md:w-[430px] lg:w-[530px] xl:w-[570px] h-auto animate-slide-in-right transition-all duration-500">
              <img 
                src="/rightside.png" 
                alt="Pet sitter playing"
                className="w-full h-auto object-contain drop-shadow-2xl select-none"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-5 animate-fade-in px-2 sm:px-4 relative z-20 mt-4 sm:mt-6">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-accent text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-accent/90 transition-all hover:shadow-hover hover:scale-105 flex items-center justify-center space-x-2 group shadow-soft">
                <span>Book a Sitter Now</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform text-white" />
              </button>
            </Link>
            <span className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium text-center">Trusted by 500+ Happy Pet Families</span>
          </div>

          {/* Stat Cards - Trend Loop Style */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16 max-w-4xl mx-auto">
            {[
              { 
                icon: Shield, 
                title: "Fully Insured", 
                subtitle: "Bonded & Licensed"
              },
              { 
                icon: Heart, 
                title: "Experienced Care", 
                subtitle: "Vetted Professionals"
              },
              { 
                icon: Star, 
                title: "Top Rated", 
                subtitle: "4.9/5 Star Reviews"
              }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.title}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-card-friendly hover:shadow-hover transition-all hover:-translate-y-2 border border-border/60"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-foreground text-base">{stat.title}</p>
                      <p className="text-sm text-muted-foreground font-medium">{stat.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
