import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dog, Cat, Rabbit, Bird, PawPrint, Check } from "lucide-react";
import { Link } from "react-router-dom";

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
    color: "text-primary",
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
    color: "text-secondary",
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
    color: "text-accent",
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
    color: "text-primary",
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
    color: "text-secondary",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Our <span className="text-gradient">Pet Care Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional, personalized care for every type of pet. All our sitters are experienced, insured, and passionate about animals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-14 h-14 rounded-2xl bg-muted flex items-center justify-center ${service.color}`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button size="lg">
                Book Your Pet Sitter Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
