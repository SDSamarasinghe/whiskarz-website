import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    pet: "Golden Retriever - Max",
    rating: 5,
    text: "Whiskarz is amazing! Our sitter sent daily photos and Max was so happy. We'll definitely book again for our next trip.",
    image: "S",
  },
  {
    name: "Michael Chen",
    pet: "Two Cats - Luna & Milo",
    rating: 5,
    text: "As a first-time user, I was nervous leaving my cats. The sitter was professional, caring, and my cats actually seemed sad when I got home!",
    image: "M",
  },
  {
    name: "Emily Rodriguez",
    pet: "Rabbit - Clover",
    rating: 5,
    text: "Finding someone who knows rabbit care is hard. Whiskarz's specialized sitters gave Clover excellent care. Highly recommend!",
    image: "E",
  },
  {
    name: "David Thompson",
    pet: "French Bulldog - Bruno",
    rating: 5,
    text: "The best pet sitting service we've used! Bruno gets so excited when his sitter arrives. They treat him like family.",
    image: "D",
  },
  {
    name: "Lisa Wang",
    pet: "Persian Cat - Snowball",
    rating: 5,
    text: "Professional, reliable, and genuinely caring. Snowball is picky about people, but she loved her sitter from day one!",
    image: "L",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        paginate(1);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [currentIndex, isPaused]);

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6"
          >
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Trusted by Pet Parents</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            What Pet Parents Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy clients
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Carousel */}
          <div 
            className="relative h-[400px] md:h-[350px] flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full px-4"
              >
                <Card className="max-w-3xl mx-auto hover:shadow-hover transition-all duration-300 border-2 bg-card/90 backdrop-blur-sm">
                  <CardContent className="pt-12 pb-10 px-8 md:px-12">
                    <Quote className="w-12 h-12 text-primary/20 mb-6" />
                    
                    <div className="flex mb-6 justify-center md:justify-start">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                      ))}
                    </div>
                    
                    <p className="text-lg md:text-xl text-foreground mb-8 italic leading-relaxed">
                      "{testimonials[currentIndex].text}"
                    </p>
                    
                    <div className="flex items-center justify-center md:justify-start space-x-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[currentIndex].image}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-lg">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].pet}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(-1)}
              className="h-12 w-12 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(1)}
              className="h-12 w-12 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 p-8 rounded-2xl glassmorphism"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-hero mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Happy Pets</div>
          </div>
          <div className="text-center border-x border-border">
            <div className="text-3xl md:text-4xl font-bold text-gradient-hero mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-hero mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
