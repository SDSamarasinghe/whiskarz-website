import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const CTASection = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/pet-heart.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary animate-gradient opacity-90" />
      
      {/* Lottie Animation - Left Side */}
      {animationData && (
        <div className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 opacity-30">
          <Lottie animationData={animationData} loop={true} />
        </div>
      )}
      
      {/* Lottie Animation - Right Side */}
      {animationData && (
        <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 opacity-30">
          <Lottie animationData={animationData} loop={true} />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 text-center overflow-hidden"
        >
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
            >
              Ready to Book a Sitter?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Give your pet the care they deserve. Join hundreds of happy pet parents in Toronto and experience worry-free travel.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto group bg-white text-primary hover:bg-white/90 shadow-2xl text-lg px-8 py-6 h-auto"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              
              <Link to="/services">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mt-12 text-white/90"
            >
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 fill-white" />
                <span className="text-sm font-medium">5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 fill-white" />
                <span className="text-sm font-medium">500+ Happy Pets</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">Premium Service</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
