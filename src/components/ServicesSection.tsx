import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dog, Cat, Rabbit, Bird, PawPrint, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import dogCare from "@/assets/dog-care.jpg";
import catCare from "@/assets/cat-care.jpg";
import smallPets from "@/assets/small-pets.jpg";
import birdsPets from "@/assets/bird-pets.jpg";
import pocketPet from "@/assets/pocket-pet.jpg";

const services = [
  {
    icon: Dog,
    title: "Dog Sitting",
    description: "Daily walks, playtime, feeding, and lots of love for your canine companion.",
    image: dogCare,
    gradient: "from-primary via-accent to-secondary",
    iconBg: "from-primary to-accent",
    features: ["Daily walks", "Playtime", "Feeding"],
  },
  {
    icon: Cat,
    title: "Cat Sitting",
    description: "Litter box care, feeding, playtime, and cozy cuddles for your feline friend.",
    image: catCare,
    gradient: "from-secondary via-primary to-accent",
    iconBg: "from-secondary to-accent",
    features: ["Litter care", "Feeding", "Cuddles"],
  },
  {
    icon: Rabbit,
    title: "Small Pet Care",
    description: "Specialized care for rabbits, hamsters, guinea pigs, and more.",
    image: smallPets,
    gradient: "from-accent via-secondary to-primary",
    iconBg: "from-accent to-primary",
    features: ["Cage cleaning", "Fresh food", "Exercise"],
  },
  {
    icon: Bird,
    title: "Bird Sitting",
    description: "Cage cleaning, feeding, and gentle interaction for your feathered friends.",
    image: birdsPets,
    gradient: "from-primary via-secondary to-accent",
    iconBg: "from-primary to-secondary",
    features: ["Cage care", "Feeding", "Interaction"],
  },
  {
    icon: PawPrint,
    title: "Pocket Pets",
    description: "Expert care for ferrets, mice, rats, and other pocket-sized companions.",
    image: pocketPet,
    gradient: "from-accent via-primary to-secondary",
    iconBg: "from-secondary to-primary",
    features: ["Habitat care", "Feeding", "Enrichment"],
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm border-2 border-accent/30 text-primary px-6 py-3 rounded-full mb-8 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-accent animate-pulse-soft" />
            <span className="text-sm font-bold">Premium Pet Care Services</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Services We <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional pet sitting for all types of pets, tailored to their unique needs and personalities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="group h-full overflow-hidden cursor-pointer border-2 border-border/30 hover:border-accent/60 transition-all duration-500 bg-white dark:bg-card shadow-lg hover:shadow-2xl relative rounded-2xl">
                  {/* Gradient Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.08 }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} pointer-events-none z-10`}
                  />

                  {/* Image Section with Enhanced Overlay */}
                  <div className="relative h-56 overflow-hidden rounded-t-2xl">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent`} />
                    
                    {/* Floating Animated Icon Badge */}
                    <motion.div
                      className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${service.iconBg} rounded-xl flex items-center justify-center shadow-xl`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    >
                      <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                    </motion.div>

                    {/* Service Number Badge */}
                    <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/95 dark:bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-primary font-bold text-base">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3 pt-6 px-6 relative z-20">
                    <CardTitle className="text-2xl mb-2 font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-20 px-6 pb-6">
                    {/* Feature Tags with Gradient Borders */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.features.map((feature, idx) => (
                        <motion.span
                          key={feature}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                          className="text-xs px-3 py-1.5 bg-accent/10 dark:bg-accent/20 border border-accent/40 rounded-full text-primary dark:text-accent font-semibold hover:bg-accent/20 dark:hover:bg-accent/30 transition-all duration-200"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Enhanced Learn More Button */}
                    <Link to="/services">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          variant="ghost" 
                          className="group/btn w-full bg-gradient-to-r from-accent/10 to-primary/10 hover:from-accent/20 hover:to-primary/20 border-2 border-accent/30 hover:border-accent/60 text-primary dark:text-accent hover:text-accent dark:hover:text-white font-semibold rounded-lg h-11 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                        </Button>
                      </motion.div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link to="/services">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-hover-friendly hover:shadow-glow-friendly transition-all duration-300"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
