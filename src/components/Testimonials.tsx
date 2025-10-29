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
    gradient: "from-primary to-accent",
    location: "Oshawa, ON",
  },
  {
    name: "Michael Chen",
    pet: "Two Cats - Luna & Milo",
    rating: 5,
    text: "As a first-time user, I was nervous leaving my cats. The sitter was professional, caring, and my cats actually seemed sad when I got home!",
    image: "M",
    gradient: "from-accent to-secondary",
    location: "Ajax, ON",
  },
  {
    name: "Emily Rodriguez",
    pet: "Rabbit - Clover",
    rating: 5,
    text: "Finding someone who knows rabbit care is hard. Whiskarz's specialized sitters gave Clover excellent care. Highly recommend!",
    image: "E",
    gradient: "from-secondary to-primary",
    location: "Bowmanville, ON",
  },
  {
    name: "David Thompson",
    pet: "French Bulldog - Bruno",
    rating: 5,
    text: "The best pet sitting service we've used! Bruno gets so excited when his sitter arrives. They treat him like family.",
    image: "D",
    gradient: "from-primary via-accent to-secondary",
    location: "Whitby, ON",
  },
  {
    name: "Lisa Wang",
    pet: "Persian Cat - Snowball",
    rating: 5,
    text: "Professional, reliable, and genuinely caring. Snowball is picky about people, but she loved her sitter from day one!",
    image: "L",
    gradient: "from-accent via-primary to-secondary",
    location: "Courtice, ON",
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
    <section className="py-28 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Enhanced Decorative Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm border-2 border-accent/30 text-primary px-6 py-3 rounded-full mb-8 shadow-lg"
          >
            <Star className="w-5 h-5 text-accent fill-current animate-pulse-soft" />
            <span className="text-sm font-bold">Trusted by Pet Parents</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            What Pet Parents <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our happy clients across Toronto, GTA & Durham Region
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
                <Card className="max-w-4xl mx-auto border-2 border-border/30 hover:border-accent/50 transition-all duration-500 bg-white dark:bg-card shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden relative group">
                  {/* Gradient Accent Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${testimonials[currentIndex].gradient}`} />
                  
                  {/* Decorative Quote Background */}
                  <div className="absolute top-8 right-8 opacity-5">
                    <Quote className="w-32 h-32 text-primary" />
                  </div>

                  <CardContent className="pt-12 pb-10 px-8 md:px-12 relative z-10">
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className={`w-14 h-14 bg-gradient-to-br ${testimonials[currentIndex].gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Quote className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    {/* Star Rating */}
                    <div className="flex mb-6 space-x-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <Star className="w-6 h-6 text-accent fill-accent drop-shadow-sm" />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 mb-8 italic leading-relaxed font-medium">
                      "{testimonials[currentIndex].text}"
                    </p>
                    
                    {/* Author Info */}
                    <div className="flex items-center space-x-5">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 bg-gradient-to-br ${testimonials[currentIndex].gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-white font-bold text-2xl">
                          {testimonials[currentIndex].image}
                        </span>
                      </motion.div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white text-lg">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-sm text-primary font-semibold">
                          {testimonials[currentIndex].pet}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          📍 {testimonials[currentIndex].location}
                        </p>
                      </div>
                    </div>
                  </CardContent>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-accent/20 rounded-tr-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary/20 rounded-bl-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(-1)}
                className="h-14 w-14 rounded-xl border-2 border-accent/30 hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-white hover:border-transparent transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </motion.div>
            
            {/* Enhanced Dots Indicator */}
            <div className="flex gap-3 px-4">
              {testimonials.map((testimonial, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? `w-12 bg-gradient-to-r ${testimonial.gradient} shadow-md`
                      : "w-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(1)}
                className="h-14 w-14 rounded-xl border-2 border-accent/30 hover:bg-gradient-to-br hover:from-accent hover:to-secondary hover:text-white hover:border-transparent transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-20"
        >
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 backdrop-blur-sm border-2 border-accent/30 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
              <Star className="w-8 h-8 text-white fill-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-sm text-muted-foreground font-semibold">Happy Pet Families</div>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-accent/10 via-secondary/10 to-accent/10 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
              <Quote className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent mb-2">
              4.9★
            </div>
            <div className="text-sm text-muted-foreground font-semibold">Average Rating</div>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-secondary/10 via-primary/10 to-secondary/10 backdrop-blur-sm border-2 border-secondary/30 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-sm text-muted-foreground font-semibold">Satisfaction Rate</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
