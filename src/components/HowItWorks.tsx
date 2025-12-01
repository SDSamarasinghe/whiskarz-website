import React, { useEffect, useRef, useState } from "react";
import { Search, Calendar, Home, Heart, Shield, CheckCircle } from "lucide-react";

interface ProcessStepData {
  id: number;
  number: string;
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  side: "left" | "right";
}

const processSteps: ProcessStepData[] = [
  {
    id: 1,
    number: "01",
    title: "Browse Sitters",
    icon: Search,
    description:
      "Discover vetted, loving pet sitters in your Toronto & GTA neighborhood with transparent profiles and reviews.",
    side: "left",
  },
  {
    id: 2,
    number: "02",
    title: "Book & Schedule",
    icon: Calendar,
    description:
      "Pick dates, customize care instructions, and secure your booking instantly—no back‑and‑forth required.",
    side: "right",
  },
  {
    id: 3,
    number: "03",
    title: "Meet & Greet",
    icon: Home,
    description:
      "Enjoy a quick intro visit or call to ensure the perfect fit and build trust before day one.",
    side: "left",
  },
  {
    id: 4,
    number: "04",
    title: "Care & Updates",
    icon: Heart,
    description:
      "Your pet receives personalized attention while you get photo & activity updates for total peace of mind.",
    side: "right",
  },
  {
    id: 5,
    number: "05",
    title: "Safety First",
    icon: Shield,
    description:
      "We use secure profiles, verified care history, and clear emergency protocols every step of the way.",
    side: "left",
  },
  {
    id: 6,
    number: "06",
    title: "Happy Return",
    icon: CheckCircle,
    description:
      "Reunite with a relaxed, well‑cared‑for companion—and easily rebook the sitter they loved.",
    side: "right",
  },
];

const ProcessItem: React.FC<{ step: ProcessStepData; index: number }> = ({ step, index }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const Icon = step.icon;
  const isLeft = step.side === "left";
  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 mb-12 md:mb-20 transition-all duration-1000 ${
        visible
          ? "opacity-100 translate-x-0"
          : isLeft
          ? "opacity-0 -translate-x-32"
          : "opacity-0 translate-x-32"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Mobile Layout */}
      <div className="md:hidden flex items-start gap-4 p-4 bg-white/50 backdrop-blur rounded-xl border border-gray-100 shadow-sm">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white backdrop-blur rounded-xl border-2 border-accent/40 flex items-center justify-center flex-shrink-0 hover:border-accent hover:bg-accent/5 transition-all">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent" strokeWidth={1.5} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl sm:text-3xl font-bold text-accent">.{step.number}</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary">{step.title}</h3>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>

      {/* Desktop Layout - Left content */}
      <div className={`hidden md:flex flex-col ${isLeft ? "items-end text-right" : ""}`}>
        {isLeft && (
          <>
            <div className="flex items-center gap-4 mb-3">
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary">
                {step.title}
              </h3>
              <span className="text-3xl lg:text-4xl xl:text-5xl font-bold text-accent">.{step.number}</span>
            </div>
            <p className="text-muted-foreground text-sm lg:text-base xl:text-lg leading-relaxed max-w-md">
              {step.description}
            </p>
          </>
        )}
      </div>
      {/* Desktop Layout - Center icon */}
      <div className="hidden md:flex items-start justify-center pt-2">
        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 backdrop-blur rounded-xl border-2 border-accent/40 flex items-center justify-center hover:border-accent hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
          <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-accent" strokeWidth={1.5} />
        </div>
      </div>
      {/* Desktop Layout - Right content */}
      <div className={`hidden md:flex flex-col ${!isLeft ? "items-start text-left" : ""}`}>
        {!isLeft && (
          <>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl lg:text-4xl xl:text-5xl font-bold text-accent">.{step.number}</span>
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary">{step.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm lg:text-base xl:text-lg leading-relaxed max-w-md">
              {step.description}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Radial accent glows */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-4 px-2">
            <span className="text-primary">How We </span>
            <span className="text-accent">Care</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            A transparent, safe & loving sitter experience—step by step.
          </p>
        </div>

        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-56 bottom-10 w-px bg-gradient-to-b from-accent/60 via-accent/30 to-transparent -translate-x-1/2 hidden md:block" />

        <div className="relative">
          {processSteps.map((step, i) => (
            <ProcessItem key={step.id} step={step} index={i} />
          ))}
        </div>

        {/* CTA */}
       
      </div>
    </section>
  );
};

export default HowItWorks;
