import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import InteractiveMap from "./InteractiveMap";

// Service area coordinates (latitude, longitude)
const serviceLocations = [
  { name: "Toronto", lat: 43.6532, lng: -79.3832 },
  { name: "The Beaches", lat: 43.6677, lng: -79.2941 },
  { name: "Bayview", lat: 43.7615, lng: -79.3892 },
  { name: "North York", lat: 43.7615, lng: -79.4111 },
  { name: "Scarborough", lat: 43.7731, lng: -79.2578 },
  { name: "Markham", lat: 43.8561, lng: -79.3370 },
  { name: "Pickering", lat: 43.8384, lng: -79.0868 },
  { name: "Finch", lat: 43.7806, lng: -79.4163 },
  { name: "Whitby", lat: 43.8975, lng: -78.9429 },
  { name: "Richmond Hill", lat: 43.8828, lng: -79.4403 },
  { name: "Ajax", lat: 43.8509, lng: -79.0204 },
  { name: "Oshawa", lat: 43.8971, lng: -78.8658 },
  { name: "Etobicoke", lat: 43.6205, lng: -79.5132 },
  { name: "Thornhill", lat: 43.8150, lng: -79.4233 },
];

const PricingSection = () => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<typeof serviceLocations[0] | null>(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-background">
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Interactive Map Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="-mx-4 sm:-mx-6 lg:-mx-8"
        >
          <div className="bg-muted/30 py-8 sm:py-12 md:py-16 border-y">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-semibold">Service Areas</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3 px-2">
                  We Serve Your Community
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
                  Professional pet sitting services across the Greater Toronto Area and Durham Region
                </p>
              </div>

              {/* Interactive Map Container */}
              <div className="max-w-6xl mx-auto">
                <Card className="border-2 shadow-lg overflow-hidden bg-card">
                  <CardContent className="p-0">
                    {/* Google Maps Integration */}
                    <div className="relative w-full" style={{ height: '600px' }}>
                      <InteractiveMap 
                        locations={serviceLocations}
                        selectedLocation={selectedLocation}
                        onMarkerClick={setSelectedLocation}
                      />

                      {/* Overlay Legend */}
                      <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-xl shadow-lg border-2 border-primary/20 p-4 z-10 max-w-xs">
                        <h4 className="font-bold text-base text-foreground mb-3 flex items-center space-x-2">
                          <MapPin className="w-5 h-5 text-primary" />
                          <span>Our Service Areas</span>
                        </h4>
                        <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                          {serviceLocations.map((location, index) => (
                            <motion.div
                              key={location.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              onMouseEnter={() => setHoveredLocation(location.name)}
                              onMouseLeave={() => setHoveredLocation(null)}
                              onClick={() => setSelectedLocation(location)}
                              className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                                hoveredLocation === location.name 
                                  ? 'bg-primary/10 scale-105' 
                                  : 'hover:bg-muted'
                              }`}
                            >
                              <div className="w-3 h-3 bg-primary rounded-full border-2 border-background shadow-md flex-shrink-0" />
                              <span className="text-sm font-semibold text-foreground">{location.name}</span>
                            </motion.div>
                          ))}
                        </div>
                        <div className="mt-4 pt-3 border-t">
                          <p className="text-xs text-muted-foreground italic">
                            Click markers to explore
                          </p>
                        </div>
                      </div>

                      {/* Service Info Badge */}
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-xl shadow-lg p-4 z-10 max-w-xs">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="font-bold text-sm mb-1">Serving 14 Locations</p>
                            <p className="text-xs opacity-90">GTA & Durham Region</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Location Grid Below Map */}
                    <div className="bg-muted/50 p-8 border-t">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                        {serviceLocations.map((location, index) => (
                          <motion.div
                            key={location.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            onMouseEnter={() => setHoveredLocation(location.name)}
                            onMouseLeave={() => setHoveredLocation(null)}
                            className={`bg-card border-2 ${
                              hoveredLocation === location.name 
                                ? 'border-primary shadow-md' 
                                : 'border-border hover:border-primary/50'
                            } rounded-lg p-4 text-center transition-all duration-300 cursor-pointer`}
                          >
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                              <MapPin className="w-4 h-4 text-primary-foreground" />
                            </div>
                            <p className="font-semibold text-foreground text-sm">{location.name}</p>
                            <p className="text-xs text-primary mt-1">Available</p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-8 text-center">
                        <p className="text-sm text-muted-foreground">
                          Don't see your area? <a href="/contact" className="text-primary font-semibold hover:underline">Contact us</a> - we may still be able to help!
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            All rates are in Canadian Dollars (CAD). Holiday rates apply to statutory holidays and special occasions. 
            <span className="text-primary font-semibold"> Contact us for custom packages and long-term care options.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
