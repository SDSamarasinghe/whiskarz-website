import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dog, Cat, Rabbit, Bird, PawPrint, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import dogCare from "@/assets/dog-care.jpg";
import catCare from "@/assets/cat-care.jpg";
import smallPets from "@/assets/small-pets.jpg";

const services = [
  {
    icon: Dog,
    title: "Dog Sitting",
    description: "Daily walks, playtime, feeding, and lots of love for your canine companion.",
    image: dogCare,
    color: "text-primary",
  },
  {
    icon: Cat,
    title: "Cat Sitting",
    description: "Litter box care, feeding, playtime, and cozy cuddles for your feline friend.",
    image: catCare,
    color: "text-secondary",
  },
  {
    icon: Rabbit,
    title: "Small Pet Care",
    description: "Specialized care for rabbits, hamsters, guinea pigs, and more.",
    image: smallPets,
    color: "text-accent",
  },
  {
    icon: Bird,
    title: "Bird Sitting",
    description: "Cage cleaning, feeding, and gentle interaction for your feathered friends.",
    image: smallPets,
    color: "text-primary",
  },
  {
    icon: PawPrint,
    title: "Pocket Pets",
    description: "Expert care for ferrets, mice, rats, and other pocket-sized companions.",
    image: smallPets,
    color: "text-secondary",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Services We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional pet sitting for all types of pets, tailored to their unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="hover-lift overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center ${service.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/services">
                    <Button variant="ghost" className="group/btn w-full">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
