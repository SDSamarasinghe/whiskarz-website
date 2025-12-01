import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Clock, Shield, Heart, Star, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GiDogHouse, GiSittingDog, GiCat, GiBirdHouse, GiRabbit } from "react-icons/gi";
import { useState } from "react";

const serviceDetails = [
  {
    icon: GiSittingDog,
    title: "Dog Sitting",
    description: "Comprehensive care for your canine companion",
    features: [
      "Daily walks (30-60 minutes)",
      "Feeding & fresh water",
      "Playtime & exercise",
      "Medication administration",
      "Daily photo updates",
      "Overnight stays available",
    ],
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop&q=80",
    color: "primary",
    stats: { experience: "5+ years", rating: "4.9", clients: "500+" },
  },
  {
    icon: GiCat,
    title: "Cat Sitting",
    description: "Loving care for your independent feline",
    features: [
      "Feeding & fresh water",
      "Litter box maintenance",
      "Playtime & cuddles",
      "Brushing & grooming",
      "Medication if needed",
      "Plant watering included",
    ],
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80",
    color: "secondary",
    stats: { experience: "5+ years", rating: "4.9", clients: "400+" },
  },
  {
    icon: GiRabbit,
    title: "Rabbit Care",
    description: "Specialized care for your hopping friend",
    features: [
      "Daily feeding & water",
      "Cage cleaning",
      "Exercise time",
      "Health monitoring",
      "Grooming assistance",
      "Behavioral enrichment",
    ],
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=800&auto=format&fit=crop&q=80",
    color: "accent",
    stats: { experience: "4+ years", rating: "4.8", clients: "200+" },
  },
  {
    icon: GiBirdHouse,
    title: "Bird Sitting",
    description: "Gentle care for your feathered companions",
    features: [
      "Fresh food & water daily",
      "Cage cleaning",
      "Social interaction",
      "Health checks",
      "Safe out-of-cage time",
      "Enrichment activities",
    ],
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800&auto=format&fit=crop&q=80",
    color: "primary",
    stats: { experience: "4+ years", rating: "4.9", clients: "150+" },
  },
  {
    icon: PawPrint,
    title: "Pocket Pet Care",
    description: "Expert care for small animals",
    features: [
      "Hamsters, guinea pigs, ferrets",
      "Habitat cleaning",
      "Fresh food & water",
      "Gentle handling",
      "Health monitoring",
      "Exercise & playtime",
    ],
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&auto=format&fit=crop&q=80",
    color: "secondary",
    stats: { experience: "3+ years", rating: "4.8", clients: "100+" },
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 via-background to-background relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20"
            >
              <GiDogHouse className="w-4 h-4" />
              <span className="text-sm font-semibold">Premium Pet Care</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Our <span className="text-primary">Pet Care Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Professional, personalized care for every type of pet. All our sitters are experienced, insured, and passionate about animals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredIndex === index;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 h-full bg-card shadow-sm hover:shadow-lg">
                    {/* Animated Icon Background */}
                    <motion.div
                      className="absolute top-0 right-0 w-64 h-64 opacity-5"
                      animate={isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                      transition={{ duration: 20, repeat: isHovered ? Infinity : 0, ease: "linear" }}
                    >
                      <Icon className="w-full h-full text-primary" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-4">
                          {/* Animated Icon */}
                          <motion.div
                            animate={isHovered ? { scale: 1.1, rotate: [0, -10, 10, 0] } : { scale: 1, rotate: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                          >
                            <Icon className="w-12 h-12 text-primary-foreground" />
                          </motion.div>
                          
                          {/* Stats Badge */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
                            className="bg-primary/10 px-3 py-1.5 rounded-full flex items-center space-x-1"
                          >
                            <Star className="w-4 h-4 text-primary fill-primary" />
                            <span className="text-sm font-bold text-primary">{service.stats.rating}</span>
                          </motion.div>
                        </div>
                        
                        <CardTitle className="text-2xl font-bold text-foreground mb-2">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-base text-muted-foreground">
                          {service.description}
                        </CardDescription>

                        {/* Service Stats */}
                        <div className="flex items-center gap-4 mt-4 pt-4 border-t">
                          <div className="flex items-center space-x-1.5 text-sm">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">{service.stats.experience}</span>
                          </div>
                          <div className="flex items-center space-x-1.5 text-sm">
                            <Heart className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">{service.stats.clients}</span>
                          </div>
                          <div className="flex items-center space-x-1.5 text-sm">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">Insured</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              className="flex items-start space-x-3"
                            >
                              <motion.div
                                className="mt-0.5 flex-shrink-0"
                                animate={isHovered ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                              >
                                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                  <Check className="w-3.5 h-3.5 text-primary" />
                                </div>
                              </motion.div>
                              <span className="text-muted-foreground leading-relaxed text-sm">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Book Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          className="mt-6 pt-4 border-t"
                        >
                          <Link to="/contact" className="block">
                            <Button
                              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
                              size="lg"
                            >
                              <span>Book {service.title}</span>
                              <motion.div
                                animate={{ x: isHovered ? [0, 5, 0] : 0 }}
                                transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                              >
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </motion.div>
                            </Button>
                          </Link>
                        </motion.div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center bg-muted/50 rounded-2xl p-12 border"
          >
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Book Your Pet Sitter?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join over 500+ happy pet parents who trust us with their beloved companions
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-lg group"
              >
                <span>Book Your Pet Sitter Today</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="text-sm text-muted-foreground">4.9 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">500+ Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
