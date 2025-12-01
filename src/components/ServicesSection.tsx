import { Dog, Cat, Rabbit, Bird, PawPrint } from "lucide-react";
import dogCare from "@/assets/dog-care.jpg";
import catCare from "@/assets/cat-care.jpg";
import smallPets from "@/assets/small-pets.jpg";
import birdsPets from "@/assets/bird-pets.jpg";
import pocketPet from "@/assets/pocket-pet.jpg";

const services = [
  {
    icon: Dog,
    title: "Dog Sitting",
    description: "Daily walks, playtime, feeding, and lots of love for your canine companion.",
    image: dogCare,
  },
  {
    icon: Cat,
    title: "Cat Sitting",
    description: "Litter box care, feeding, playtime, and cozy cuddles for your feline friend.",
    image: catCare,
  },
  {
    icon: Rabbit,
    title: "Small Pet Care",
    description: "Specialized care for rabbits, hamsters, guinea pigs, and more.",
    image: smallPets,
  },
  {
    icon: Bird,
    title: "Bird Sitting",
    description: "Cage cleaning, feeding, and gentle interaction for your feathered friends.",
    image: birdsPets,
  },
  {
    icon: PawPrint,
    title: "Pocket Pets",
    description: "Expert care for ferrets, mice, rats, and other pocket-sized companions.",
    image: pocketPet,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Trend Loop Style */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-bold leading-[1.15] sm:leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
            <span className="text-black">Complete Pet Care </span>
            <span className="text-accent">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Professional pet sitting for all types of pets, tailored to their unique needs
          </p>
        </div>

        {/* Services Grid - Trend Loop Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group border border-gray-100"
              >
                {/* Service Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/* Service Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button className="bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-4 rounded-full shadow-sm hover:shadow-lg transition-all">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
