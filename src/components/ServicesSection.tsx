import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dog, Cat, Rabbit, Bird, PawPrint, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import dogCare from "@/assets/dog-care.jpg";
import catCare from "@/assets/cat-care.jpg";
import smallPets from "@/assets/small-pets.jpg";

const services = [
  {
    icon: Dog,
    title: "Dog Sitting",
    description: "Daily walks, playtime, feeding, and lots of love for your canine companion.",
    image: dogCare,
    color: "primary",
    features: ["Daily walks", "Playtime", "Feeding"],
  },
  {
    icon: Cat,
    title: "Cat Sitting",
    description: "Litter box care, feeding, playtime, and cozy cuddles for your feline friend.",
    image: catCare,
    color: "secondary",
    features: ["Litter care", "Feeding", "Cuddles"],
  },
  {
    icon: Rabbit,
    title: "Small Pet Care",
    description: "Specialized care for rabbits, hamsters, guinea pigs, and more.",
    image: smallPets,
    color: "accent",
    features: ["Cage cleaning", "Fresh food", "Exercise"],
  },
  {
    icon: Bird,
    title: "Bird Sitting",
    description: "Cage cleaning, feeding, and gentle interaction for your feathered friends.",
    image: smallPets,
    color: "primary",
    features: ["Cage care", "Feeding", "Interaction"],
  },
  {
    icon: PawPrint,
    title: "Pocket Pets",
    description: "Expert care for ferrets, mice, rats, and other pocket-sized companions.",
    image: smallPets,
    color: "secondary",
    features: ["Habitat care", "Feeding", "Enrichment"],
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Premium Pet Care</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Services We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional pet sitting for all types of pets, tailored to their unique needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full overflow-hidden group cursor-pointer border-2 hover:border-primary/30 hover:shadow-hover transition-all duration-300 bg-card/80 backdrop-blur-sm">
                  <div className="relative h-52 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Floating Icon Badge */}
                    <motion.div
                      className={`absolute top-4 right-4 w-14 h-14 bg-${service.color} rounded-full flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <Link to="/services">
                      <Button variant="ghost" className="group/btn w-full hover:bg-primary/10">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
