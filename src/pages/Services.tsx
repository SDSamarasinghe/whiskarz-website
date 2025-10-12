import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dog, Cat, Rabbit, Bird, PawPrint, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const serviceDetails = [
  {
    icon: Dog,
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
    gradient: "from-primary/90 to-secondary/80",
  },
  {
    icon: Cat,
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
    gradient: "from-secondary/90 to-accent/80",
  },
  {
    icon: Rabbit,
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
    gradient: "from-accent/90 to-primary/80",
  },
  {
    icon: Bird,
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
    gradient: "from-primary/90 to-accent/80",
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
    gradient: "from-secondary/90 to-primary/80",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
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
              className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6"
            >
              <PawPrint className="w-4 h-4" />
              <span className="text-sm font-medium">Premium Pet Care</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Pet Care Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Professional, personalized care for every type of pet. All our sitters are experienced, insured, and passionate about animals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group relative overflow-hidden border-2 border-border/50 hover:border-accent/50 transition-all duration-500 h-full bg-card/50 backdrop-blur-sm shadow-card-friendly hover:shadow-glow-friendly">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} mix-blend-multiply`} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-3">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg group-hover:shadow-glow-friendly transition-shadow duration-300"
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <ArrowRight className="w-6 h-6 text-accent" />
                          </motion.div>
                        </div>
                        <CardTitle className="text-2xl font-bold text-foreground group-hover:text-white transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-base mt-2 text-muted-foreground group-hover:text-white/90 transition-colors duration-300">
                          {service.description}
                        </CardDescription>
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
                              className="flex items-start space-x-3 group/item"
                            >
                              <div className="mt-0.5 flex-shrink-0">
                                <div className="w-5 h-5 rounded-full bg-accent/20 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                                  <Check className="w-3.5 h-3.5 text-accent group-hover:text-white transition-colors duration-300" />
                                </div>
                              </div>
                              <span className="text-muted-foreground group-hover:text-white/95 transition-colors duration-300 leading-relaxed">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Learn More Link */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          className="mt-6 pt-4 border-t border-border/50 group-hover:border-white/20 transition-colors duration-300"
                        >
                          <Link
                            to="/contact"
                            className="inline-flex items-center space-x-2 text-accent group-hover:text-white font-semibold transition-colors duration-300 group/link"
                          >
                            <span>Book This Service</span>
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ArrowRight className="w-4 h-4" />
                            </motion.div>
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
            className="mt-16 text-center"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-accent to-secondary hover:shadow-glow-friendly transition-all duration-300 text-white font-semibold px-8 py-6 text-lg rounded-xl group"
              >
                <span>Book Your Pet Sitter Today</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Trusted by over 1,000+ happy pet parents in Toronto
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
