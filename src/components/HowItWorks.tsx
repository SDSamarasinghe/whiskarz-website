import { Search, Calendar, Home, Heart, Check, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Search,
    title: "Browse Sitters",
    description: "Find experienced, vetted pet sitters in your Toronto neighborhood.",
    gradient: "from-primary via-accent to-secondary",
    iconBg: "from-primary to-accent",
    number: "01",
  },
  {
    icon: Calendar,
    title: "Book & Schedule",
    description: "Choose your dates and customize care instructions for your pet.",
    gradient: "from-accent via-secondary to-primary",
    iconBg: "from-accent to-secondary",
    number: "02",
  },
  {
    icon: Home,
    title: "Meet & Greet",
    description: "Meet your sitter beforehand to ensure a perfect match.",
    gradient: "from-secondary via-primary to-accent",
    iconBg: "from-secondary to-accent",
    number: "03",
  },
  {
    icon: Heart,
    title: "Relax & Enjoy",
    description: "Get photo updates while your pet enjoys personalized care at home.",
    gradient: "from-accent via-primary to-secondary",
    iconBg: "from-primary to-secondary",
    number: "04",
  },
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm text-primary border-2 border-accent/30 px-5 py-2.5 rounded-full mb-6 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold">Simple & Seamless Process</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
            How It <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get started with professional pet care in just four simple steps
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Animated Connection Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                    className="hidden lg:flex absolute top-24 -right-4 w-8 items-center justify-center z-20"
                  >
                    <ArrowRight className="w-6 h-6 text-accent animate-pulse-soft" />
                  </motion.div>
                )}

                <Card className="group relative h-full border-2 border-border/50 hover:border-accent/50 transition-all duration-500 bg-card/80 backdrop-blur-sm shadow-card-friendly hover:shadow-glow-friendly overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient}`}
                  />

                  {/* Large Number Watermark */}
                  <div className="absolute top-4 right-4 text-8xl font-heading font-black text-primary/5 group-hover:text-accent/10 transition-colors duration-500">
                    {step.number}
                  </div>

                  <CardContent className="relative z-10 p-8 flex flex-col items-center text-center h-full">
                    {/* Icon Container with Gradient */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="relative mb-6"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.iconBg} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                      <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${step.iconBg} flex items-center justify-center shadow-xl`}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                    </motion.div>

                    {/* Step Number Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.3 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 border border-accent/30"
                    >
                      <span className="text-xs font-bold text-accent">STEP {step.number}</span>
                    </motion.div>

                    <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-base flex-grow">
                      {step.description}
                    </p>

                    {/* Animated Bottom Border */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className={`h-1 bg-gradient-to-r ${step.iconBg} rounded-full mt-6`}
                    />

                    {/* Check Icon */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      className="mt-4 w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center"
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="relative inline-block">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-2xl opacity-30 animate-pulse-soft" />
            
            <div className="relative bg-gradient-to-br from-muted/50 to-background/50 backdrop-blur-sm border-2 border-accent/30 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block mb-4"
              >
                <Heart className="w-12 h-12 text-accent fill-accent" />
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Join hundreds of happy pet parents who trust us with their furry friends
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary via-accent to-secondary hover:from-secondary hover:via-accent hover:to-primary text-white rounded-xl font-semibold shadow-glow-friendly hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/services"
                    className="inline-flex items-center px-8 py-4 bg-background border-2 border-accent/50 hover:border-accent hover:bg-accent/5 text-foreground rounded-xl font-semibold transition-all duration-300 text-lg"
                  >
                    View All Services
                  </a>
                </motion.div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                {[
                  { label: "500+ Happy Clients", icon: Heart },
                  { label: "4.9★ Rating", icon: Sparkles },
                  { label: "Fully Insured", icon: Check }
                ].map((badge, index) => {
                  const BadgeIcon = badge.icon;
                  return (
                    <motion.div
                      key={badge.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      className="flex items-center space-x-2 bg-white/50 dark:bg-background/50 px-4 py-2 rounded-full border border-accent/20"
                    >
                      <BadgeIcon className="w-4 h-4 text-accent" />
                      <span className="text-sm font-semibold text-foreground">{badge.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
