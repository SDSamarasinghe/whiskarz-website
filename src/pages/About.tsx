import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Heart, Users, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Pets",
    description: "Every member of our team is a dedicated pet lover who treats your animals like family.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "All sitters are background-checked, insured, and trained in pet safety and first aid.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "We're proud to serve Toronto's pet community and build lasting relationships.",
  },
  {
    icon: Award,
    title: "Excellence in Care",
    description: "Our commitment to quality care has earned us a 4.9-star rating from pet parents.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              About <span className="text-gradient">Whiskarz</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're more than just a pet sitting service – we're a community of passionate pet lovers dedicated to providing the highest quality care for Toronto's furry, feathered, and scaled friends.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Whiskarz was founded in 2020 by a group of pet enthusiasts who saw a need for reliable, professional pet sitting services that treat every animal with the love and care they deserve.
              </p>
              <p>
                As pet parents ourselves, we understand the anxiety of leaving your beloved companions. That's why we created a service built on trust, transparency, and genuine care for animals of all types.
              </p>
              <p>
                Today, we're proud to serve hundreds of families across Toronto, providing peace of mind and exceptional care for dogs, cats, rabbits, birds, and pocket pets. Our team of experienced sitters shares your love for animals and treats each pet as if they were their own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-5xl font-heading font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-heading font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Trusted Sitters</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-heading font-bold text-accent mb-2">5000+</div>
              <div className="text-muted-foreground">Bookings Completed</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl font-heading font-bold text-primary mb-2">4.9</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
