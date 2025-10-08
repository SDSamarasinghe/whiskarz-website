import { Search, Calendar, Home, Heart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Sitters",
    description: "Find experienced, vetted pet sitters in your Toronto neighborhood.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Calendar,
    title: "Book & Schedule",
    description: "Choose your dates and customize care instructions for your pet.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Home,
    title: "Meet & Greet",
    description: "Meet your sitter beforehand to ensure a perfect match.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Heart,
    title: "Relax & Enjoy",
    description: "Get photo updates while your pet enjoys personalized care at home.",
    color: "bg-primary/10 text-primary",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, stress-free pet sitting in four easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -z-10 hidden lg:block">
                    {index < steps.length - 1 && (
                      <div className="w-full h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 absolute left-10 w-[calc(100%+4rem)]" />
                    )}
                  </div>
                  <span className="text-4xl font-heading font-bold text-primary/20 mb-2">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
