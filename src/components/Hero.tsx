import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hero-pets.jpg";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + index * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-mesh">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y }}
      >
        <img
          src={heroImage}
          alt="Happy pet sitter with pets"
          className="w-full h-[120vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/70" />
      </motion.div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity }}
      >
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={badgeVariants}>
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-primary/20">
              <Star className="w-4 h-4 fill-current animate-pulse-soft" />
              <span className="text-sm font-medium">Trusted by 500+ Pet Parents</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight"
            variants={itemVariants}
          >
            Your Pet's{" "}
            <span className="text-gradient-hero animate-gradient">Home Away From Home</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Professional, loving pet sitting services in Toronto. Because your furry friends deserve the best care while you're away.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            variants={itemVariants}
          >
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="w-full sm:w-auto group bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300">
                  Book a Sitter
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
            <Link to="/services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 hover:bg-muted/50">
                  View Services
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {[
              { icon: Shield, title: "Insured", subtitle: "Fully bonded", color: "secondary" },
              { icon: Heart, title: "Experienced", subtitle: "Vetted sitters", color: "primary" },
              { icon: Star, title: "Top Rated", subtitle: "4.9/5 stars", color: "accent" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  custom={index}
                  variants={statsVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center space-x-3 glassmorphism p-4 rounded-xl border border-border cursor-pointer"
                >
                  <div className={`w-12 h-12 bg-${stat.color}/20 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 text-${stat.color}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{stat.title}</p>
                    <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
