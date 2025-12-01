import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GiSittingDog, GiCat, GiRabbit, GiBirdHouse, GiRat } from 'react-icons/gi';
import { motion } from 'framer-motion';
import dogCare from '@/assets/dog-care.jpg';
import catCare from '@/assets/cat-care.jpg';
import smallPets from '@/assets/small-pets.jpg';
import birdsPets from '@/assets/bird-pets.jpg';
import pocketPet from '@/assets/pocket-pet.jpg';

const services = [
  {
    icon: GiSittingDog,
    title: 'Dog Sitting',
    description:
      'Daily walks, playtime, feeding, and lots of love for your canine companion. We specialize in building trust and creating memorable moments.',
    image: dogCare,
    features: ['Daily Walks', 'Playtime', 'Feeding', 'Cuddles'],
  },
  {
    icon: GiCat,
    title: 'Cat Sitting',
    description:
      'Litter box care, feeding, playtime, and cozy cuddles for your feline friend. We understand their unique personality and needs.',
    image: catCare,
    features: ['Litter Care', 'Feeding', 'Playtime', 'Companionship'],
  },
  {
    icon: GiRabbit,
    title: 'Small Pet Care',
    description:
      'Specialized care for rabbits, hamsters, guinea pigs, and more. Proper handling, nutrition, and enrichment activities included.',
    image: smallPets,
    features: ['Feeding', 'Habitat Care', 'Handling', 'Enrichment'],
  },
  {
    icon: GiBirdHouse,
    title: 'Bird Sitting',
    description:
      'Cage cleaning, feeding, and gentle interaction for your feathered friends. We ensure their songs continue to brighten your home.',
    image: birdsPets,
    features: ['Cage Cleaning', 'Feeding', 'Interaction', 'Monitoring'],
  },
  {
    icon: GiRat,
    title: 'Pocket Pets',
    description:
      'Expert care for ferrets, mice, rats, and other pocket-sized companions. Tailored care for each species specific requirements.',
    image: pocketPet,
    features: ['Housing Care', 'Feeding', 'Socialization', 'Health Check'],
  },
];

const PetServicesSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection('next');
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const currentService = services[currentIndex];
  const CurrentIcon = currentService.icon;

  return (
    <section
      id="pet-services"
      className="relative py-24 bg-background overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 mb-12 text-center relative z-10"
      >
        <h2 className="font-bold leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl mb-6">
          <span className="text-foreground">Professional Care for </span>
          <span className="text-primary">Every Pet</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Tailored pet sitting services designed for your furry, feathered, and fluffy companions with expert care
        </p>
      </motion.div>

      {/* Slider Container */}
      <div className="relative max-w-7xl mx-auto px-16 md:px-20 mb-8">
        <div className="relative h-[520px] md:h-[450px] lg:h-[420px] flex items-center justify-center overflow-visible">
          {/* Slides */}
          {services.map((service, index) => {
            const isActive = index === currentIndex;
            const isPrev =
              index === (currentIndex - 1 + services.length) % services.length;
            const isNext = index === (currentIndex + 1) % services.length;

            // Hide slides that aren't prev, active, or next
            if (!isActive && !isPrev && !isNext) {
              return null;
            }

            let positionClass = '';
            let opacityClass = '';
            let scaleClass = '';
            let zIndexClass = '';
            let widthClass = '';

            if (isActive) {
              positionClass = 'translate-x-0';
              opacityClass = 'opacity-100';
              scaleClass = 'scale-100';
              zIndexClass = 'z-30';
              widthClass = 'w-full max-w-3xl';
            } else if (isPrev) {
              positionClass = '-translate-x-[75%] md:-translate-x-[70%]';
              opacityClass = 'opacity-60';
              scaleClass = 'scale-90';
              zIndexClass = 'z-10';
              widthClass = 'w-full max-w-3xl';
            } else if (isNext) {
              positionClass = 'translate-x-[75%] md:translate-x-[70%]';
              opacityClass = 'opacity-60';
              scaleClass = 'scale-90';
              zIndexClass = 'z-10';
              widthClass = 'w-full max-w-3xl';
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.4,
                  scale: isActive ? 1 : 0.9,
                  x: isActive ? 0 : isPrev ? '-100%' : '100%'
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`absolute ${positionClass} ${opacityClass} ${scaleClass} ${zIndexClass} transition-all duration-700 ease-in-out ${widthClass}`}
                style={{ 
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
                <div className="h-full flex items-center justify-center px-2 md:px-4">
                  <motion.div
                    whileHover={isActive ? { y: -4, scale: 1.02 } : {}}
                    transition={{ duration: 0.3 }}
                    className="w-full bg-card rounded-2xl shadow-xl border border-border overflow-hidden h-[480px] md:h-[420px] lg:h-[400px]"
                  >
                    <div className="grid md:grid-cols-2 gap-0 h-full">
                      {/* Left Side - Content */}
                      <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-card h-full overflow-y-auto">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.6, x: -10 }}
                          transition={{ duration: 0.5, delay: isActive ? 0.2 : 0 }}
                          className="mb-5 flex items-center gap-3"
                        >
                          <motion.div
                            whileHover={isActive ? { rotate: 360 } : {}}
                            transition={{ duration: 0.6 }}
                            className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 flex-shrink-0"
                          >
                            <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                          </motion.div>
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                            {service.title}
                          </h3>
                        </motion.div>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={isActive ? { opacity: 1 } : { opacity: 0.5 }}
                          transition={{ duration: 0.5, delay: isActive ? 0.3 : 0 }}
                          className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-5"
                        >
                          {service.description}
                        </motion.p>

                        {/* Features */}
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap gap-2 mb-5"
                          >
                            {service.features.map((feature, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
                                whileHover={{ scale: 1.05 }}
                                className="text-xs md:text-sm font-medium text-foreground bg-muted px-3 py-1.5 rounded-lg border border-border"
                              >
                                {feature}
                              </motion.span>
                            ))}
                          </motion.div>
                        )}

                        {isActive && (
                          <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold shadow-sm transition-all w-fit text-sm md:text-base"
                          >
                            Learn More
                          </motion.button>
                        )}
                      </div>

                      {/* Right Side - Visual */}
                      <div className="relative flex items-center justify-center overflow-hidden h-full min-h-[200px] md:min-h-[280px]">
                        <motion.img
                          whileHover={isActive ? { scale: 1.05 } : {}}
                          transition={{ duration: 0.5 }}
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${isActive ? 'from-black/40' : 'from-black/50'} via-black/10 to-transparent transition-all duration-500`}></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1, x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 bg-card/95 backdrop-blur-sm rounded-full shadow-xl border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
          aria-label="Previous service"
        >
          <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, x: 4 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 bg-card/95 backdrop-blur-sm rounded-full shadow-xl border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
          aria-label="Next service"
        >
          <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors" />
        </motion.button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 relative z-10">
        {services.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-10 h-2.5 bg-primary'
                : 'w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60'
            }`}
            aria-label={`Go to service ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default PetServicesSlideshow;
