import { Search, Calendar, Home, Heart, Check } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Browse Sitters",
    description: "Find experienced, vetted pet sitters in your Toronto neighborhood.",
    color: "from-primary to-primary/80",
    bgColor: "bg-primary/10",
  },
  {
    icon: Calendar,
    title: "Book & Schedule",
    description: "Choose your dates and customize care instructions for your pet.",
    color: "from-secondary to-secondary/80",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Home,
    title: "Meet & Greet",
    description: "Meet your sitter beforehand to ensure a perfect match.",
    color: "from-accent to-accent/80",
    bgColor: "bg-accent/10",
  },
  {
    icon: Heart,
    title: "Relax & Enjoy",
    description: "Get photo updates while your pet enjoys personalized care at home.",
    color: "from-primary to-accent",
    bgColor: "bg-primary/10",
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
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
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
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
          >
            <Check className="w-4 h-4" />
            <span className="text-sm font-medium">Simple Process</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, stress-free pet sitting in four easy steps
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={stepVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative"
              >
                {/* Connection Line (Desktop) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                    className="hidden lg:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/40 to-accent/40 origin-left"
                  />
                )}

                <div className="relative bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/30 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-hover group">
                  {/* Step Number Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.2 + index * 0.15,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg text-white font-bold text-lg"
                  >
                    {index + 1}
                  </motion.div>

                  <div className="flex flex-col items-center text-center">
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg relative group-hover:shadow-glow`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Decorative Element */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                      className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg mb-4">
            Ready to get started?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-glow transition-all duration-300"
            >
              Start Your Journey
              <Heart className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
