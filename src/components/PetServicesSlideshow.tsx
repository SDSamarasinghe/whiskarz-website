import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GiSittingDog, GiCat, GiRabbit, GiBirdHouse, GiRat } from 'react-icons/gi';
import { AnimatePresence, motion } from 'framer-motion';

const services = [
  {
    icon: GiSittingDog,
    title: 'Dog Sitting',
    description:
      'Daily walks, playtime, feeding, and lots of love for your canine companion. We specialize in building trust and creating memorable moments.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop&q=80',
    features: ['Daily Walks', 'Playtime', 'Feeding', 'Cuddles'],
  },
  {
    icon: GiCat,
    title: 'Cat Sitting',
    description:
      'Litter box care, feeding, playtime, and cozy cuddles for your feline friend. We understand their unique personality and needs.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&auto=format&fit=crop&q=80',
    features: ['Litter Care', 'Feeding', 'Playtime', 'Companionship'],
  },
  {
    icon: GiRabbit,
    title: 'Rabbit Care',
    description:
      'Specialized care for rabbits, hamsters, guinea pigs, and more. Proper handling, nutrition, and enrichment activities included.',
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=800&auto=format&fit=crop&q=80',
    features: ['Feeding', 'Habitat Care', 'Handling', 'Enrichment'],
  },
  {
    icon: GiBirdHouse,
    title: 'Bird Sitting',
    description:
      'Cage cleaning, feeding, and gentle interaction for your feathered friends. We ensure their songs continue to brighten your home.',
    image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=80',
    features: ['Cage Cleaning', 'Feeding', 'Interaction', 'Monitoring'],
  },
  {
    icon: GiRat,
    title: 'Pocket Pets',
    description:
      'Expert care for ferrets, mice, rats, and other pocket-sized companions. Tailored care for each species specific requirements.',
    image: 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?w=800&auto=format&fit=crop&q=80',
    features: ['Housing Care', 'Feeding', 'Socialization', 'Health Check'],
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

const PetServicesSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const prevIndex = (currentIndex - 1 + services.length) % services.length;
  const nextIndex = (currentIndex + 1) % services.length;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    const isMovingForward =
      index > currentIndex || (currentIndex === services.length - 1 && index === 0);
    setDirection(isMovingForward ? 1 : -1);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const currentService = services[currentIndex];
  const ServiceIcon = currentService.icon;

  return (
    <section
      id="pet-services"
      className="relative py-24 bg-background overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onFocusCapture={() => setIsAutoPlaying(false)}
      onBlurCapture={() => setIsAutoPlaying(true)}
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
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-10 mb-8">
        <div className="flex items-center justify-center gap-4 lg:gap-6">
          <button
            type="button"
            onClick={prevSlide}
            className="hidden md:block w-[24%] lg:w-[22%] text-left"
            aria-label={`View previous service: ${services[prevIndex].title}`}
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card/80 opacity-70 hover:opacity-90 transition-opacity">
              <div className="relative h-[220px] lg:h-[260px]">
                <img
                  src={services[prevIndex].image}
                  alt={services[prevIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-sm md:text-base font-semibold text-white truncate">
                  {services[prevIndex].title}
                </p>
              </div>
            </div>
          </button>

          <div className="w-full md:w-[52%] lg:w-[56%] relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.article
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="grid md:grid-cols-2 min-h-[540px] md:min-h-[440px]"
                role="group"
                aria-roledescription="slide"
                aria-label={`${currentIndex + 1} of ${services.length}: ${currentService.title}`}
              >
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 flex-shrink-0">
                      <ServiceIcon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                      {currentService.title}
                    </h3>
                  </div>

                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
                    {currentService.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {currentService.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs md:text-sm font-medium text-foreground bg-muted px-3 py-1.5 rounded-lg border border-border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold shadow-sm transition-colors w-fit text-sm md:text-base"
                  >
                    Learn More
                  </button>
                </div>

                <div className="relative min-h-[230px] md:min-h-full overflow-hidden">
                  <motion.img
                    key={currentService.image}
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="hidden md:block w-[24%] lg:w-[22%] text-left"
            aria-label={`View next service: ${services[nextIndex].title}`}
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card/80 opacity-70 hover:opacity-90 transition-opacity">
              <div className="relative h-[220px] lg:h-[260px]">
                <img
                  src={services[nextIndex].image}
                  alt={services[nextIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-sm md:text-base font-semibold text-white truncate">
                  {services[nextIndex].title}
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.06, x: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          className="absolute left-2 md:left-[24%] lg:left-[21%] top-1/2 -translate-y-1/2 z-40 w-11 h-11 md:w-12 md:h-12 bg-card/95 backdrop-blur-sm rounded-full shadow-lg border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group"
          aria-label="Previous service"
        >
          <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.06, x: 3 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className="absolute right-2 md:right-[24%] lg:right-[21%] top-1/2 -translate-y-1/2 z-40 w-11 h-11 md:w-12 md:h-12 bg-card/95 backdrop-blur-sm rounded-full shadow-lg border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group"
          aria-label="Next service"
        >
          <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors" />
        </motion.button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 relative z-10" role="tablist" aria-label="Select pet service slide">
        {services.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => goToSlide(index)}
            type="button"
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-10 h-2.5 bg-primary'
                : 'w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60'
            }`}
            aria-selected={index === currentIndex}
            role="tab"
            aria-label={`Go to service ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default PetServicesSlideshow;
