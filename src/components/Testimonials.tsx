import { Star, Quote, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { GiDogHouse } from "react-icons/gi";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    pet: "Golden Retriever - Max",
    rating: 5,
    text: "City Critter Care is amazing! Our sitter sent daily photos and Max was so happy. We'll definitely book again for our next trip.",
    image: "S",
    location: "Oshawa, ON",
  },
  {
    id: 2,
    name: "Michael Chen",
    pet: "Two Cats - Luna & Milo",
    rating: 5,
    text: "As a first-time user, I was nervous leaving my cats. The sitter was professional, caring, and my cats actually seemed sad when I got home!",
    image: "M",
    location: "Ajax, ON",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    pet: "Rabbit - Clover",
    rating: 5,
    text: "Finding someone who knows rabbit care is hard. City Critter Care's specialized sitters gave Clover excellent care. Highly recommend!",
    image: "E",
    location: "Bowmanville, ON",
  },
  {
    id: 4,
    name: "David Thompson",
    pet: "French Bulldog - Bruno",
    rating: 5,
    text: "The best pet sitting service we've used! Bruno gets so excited when his sitter arrives. They treat him like family.",
    image: "D",
    location: "Whitby, ON",
  },
  {
    id: 5,
    name: "Lisa Wang",
    pet: "Persian Cat - Snowball",
    rating: 5,
    text: "Professional, reliable, and genuinely caring. Snowball is picky about people, but she loved her sitter from day one!",
    image: "L",
    location: "Courtice, ON",
  },
  {
    id: 6,
    name: "James Mitchell",
    pet: "Beagle - Charlie",
    rating: 5,
    text: "Charlie has never been happier! The daily walks and attention he gets from City Critter Care is exceptional. Worth every penny!",
    image: "J",
    location: "Toronto, ON",
  },
];

const Testimonials = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-primary/20"
          >
            <GiDogHouse className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-semibold">Pet Parent Reviews</span>
          </motion.div>

          <h2 className="font-bold leading-[1.15] sm:leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-foreground px-2">
            <span>What Pet Parents </span>
            <span className="text-primary">Say</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Trusted by 500+ happy families across Toronto, GTA & Durham Region
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => {
            const isHovered = hoveredCard === index;
            
            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg border-2 border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  {/* Quote Icon */}
                  <motion.div
                    animate={isHovered ? { scale: 1.1, rotate: [0, -10, 0] } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center"
                  >
                    <Quote className="w-5 h-5 text-primary" />
                  </motion.div>

                  {/* Star Rating */}
                  <div className="flex mb-4 space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      >
                        <Star className="w-5 h-5 text-primary fill-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground text-base mb-6 leading-relaxed flex-grow">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-3 pt-4 border-t">
                    <motion.div
                      animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                    >
                      <span className="text-primary-foreground font-bold text-lg">
                        {testimonial.image}
                      </span>
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground truncate">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground truncate">{testimonial.pet}</p>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="truncate">{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isHovered ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-1 bg-primary rounded-b-2xl"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
