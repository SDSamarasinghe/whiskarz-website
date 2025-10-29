import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Blue Gradient Overlay - Same as About Page */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&auto=format&fit=crop&q=80"
          alt="Happy pets"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-secondary/90 to-accent/85" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="max-w-4xl">
          <motion.div variants={badgeVariants} className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full border border-white/30 shadow-lg">
              <span className="text-sm font-semibold">Trusted by 500+ Happy Pet Families in Toronto, GTA & Durham Region</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 leading-[1.1]"
            variants={itemVariants}
          >
            Your Pet's{" "}
            <span className="text-accent block mt-2">Home Away From Home</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-2xl"
            variants={itemVariants}
          >
            Professional, loving pet care services in Toronto, North York, Scarborough, Markham, Richmond Hill, and surrounding areas. Because your furry friends deserve the best attention while you're away.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-5 mb-16"
            variants={itemVariants}
          >
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto group bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-hover-friendly hover:shadow-glow-friendly transition-all duration-300"
                >
                  Book a Sitter Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
            {/* <Link to="/services">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 backdrop-blur-sm"
                >
                  View All Services
                </Button>
              </motion.div>
            </Link> */}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            variants={containerVariants}
          >
            {[
              { 
                icon: Shield, 
                title: "Fully Insured", 
                subtitle: "Bonded & Licensed", 
                gradient: "from-secondary to-primary"
              },
              { 
                icon: Heart, 
                title: "Experienced Care", 
                subtitle: "Vetted Professionals", 
                gradient: "from-primary to-accent"
              },
              { 
                icon: Star, 
                title: "Top Rated", 
                subtitle: "4.9/5 Star Reviews", 
                gradient: "from-accent to-secondary"
              }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-glow-friendly">
                    <CardContent className="flex items-center space-x-4 p-5">
                      <div className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-base">{stat.title}</p>
                        <p className="text-sm text-white/80 font-medium">{stat.subtitle}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
