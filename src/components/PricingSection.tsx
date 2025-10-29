import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
// import InteractiveMap from "./InteractiveMap";

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
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Interactive Map Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="-mx-4 sm:-mx-6 lg:-mx-8"
        >
          <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm border border-accent/30 text-primary px-4 py-2 rounded-full mb-4">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm font-bold">Service Areas</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  We Serve Your Community
                </h3>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Professional pet sitting services across these areas and surrounding regions
                </p>
              </div>

              {/* Interactive Map Container */}
              <div className="max-w-6xl mx-auto">
                <Card className="border-2 border-accent/30 shadow-2xl overflow-hidden bg-white dark:bg-card">
                  <CardContent className="p-0">
                    {/* Custom Designed Map */}
                    <div className="relative w-full" style={{ height: '600px' }}>
                      {/* Google Map - Commented Out */}
                      {/* <InteractiveMap 
                        locations={serviceLocations}
                        selectedLocation={selectedLocation}
                        onMarkerClick={setSelectedLocation}
                      /> */}

                      {/* Custom SVG Map Design */}
                      <div className="w-full h-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 relative overflow-hidden">
                        {/* Decorative Grid Lines */}
                        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>

                        {/* Decorative Circles for Map Style */}
                        <div className="absolute inset-0">
                          <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
                          />
                        </div>

                        {/* Location Markers - Positioned across the map */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-full h-full max-w-4xl max-h-[500px]">
                            {serviceLocations.map((location, index) => {
                              // Custom positioning for each city (artistic placement)
                              const positions = [
                                { top: '45%', left: '40%' }, // Toronto (center)
                                { top: '42%', left: '55%' }, // The Beaches
                                { top: '35%', left: '42%' }, // Bayview
                                { top: '28%', left: '38%' }, // North York
                                { top: '30%', left: '60%' }, // Scarborough
                                { top: '20%', left: '50%' }, // Markham
                                { top: '35%', left: '75%' }, // Pickering
                                { top: '25%', left: '35%' }, // Finch
                                { top: '45%', left: '82%' }, // Whitby
                                { top: '18%', left: '40%' }, // Richmond Hill
                                { top: '40%', left: '78%' }, // Ajax
                                { top: '48%', left: '88%' }, // Oshawa
                                { top: '52%', left: '22%' }, // Etobicoke
                                { top: '22%', left: '42%' }, // Thornhill
                              ];

                              const position = positions[index] || { top: '50%', left: '50%' };
                              const isSelected = selectedLocation?.name === location.name;
                              const isHovered = hoveredLocation === location.name;

                              return (
                                <motion.div
                                  key={location.name}
                                  className="absolute cursor-pointer"
                                  style={position}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ 
                                    opacity: 1, 
                                    scale: isSelected ? 1.4 : isHovered ? 1.2 : 1,
                                  }}
                                  transition={{ 
                                    duration: 0.3,
                                    delay: index * 0.05,
                                  }}
                                  whileHover={{ scale: 1.3, zIndex: 50 }}
                                  onClick={() => setSelectedLocation(location)}
                                  onMouseEnter={() => setHoveredLocation(location.name)}
                                  onMouseLeave={() => setHoveredLocation(null)}
                                >
                                  {/* Marker Pin */}
                                  <div className="relative group">
                                    {/* Pulse Effect */}
                                    {(isSelected || isHovered) && (
                                      <motion.div
                                        className="absolute -inset-4 bg-red-500/30 rounded-full"
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                      />
                                    )}
                                    
                                    {/* Pin Icon */}
                                    <div className={`relative w-10 h-10 ${isSelected || isHovered ? 'w-12 h-12' : ''} transition-all duration-300`}>
                                      <div className="absolute inset-0 bg-red-500 rounded-full shadow-xl flex items-center justify-center border-4 border-white">
                                        <MapPin className="w-5 h-5 text-white" />
                                      </div>
                                    </div>

                                    {/* Location Label */}
                                    <motion.div
                                      initial={{ opacity: 0, y: 5 }}
                                      animate={{ opacity: isSelected || isHovered ? 1 : 0, y: isSelected || isHovered ? 0 : 5 }}
                                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg shadow-xl border-2 border-accent/30 whitespace-nowrap z-50"
                                    >
                                      <span className="text-xs font-bold text-foreground">{location.name}</span>
                                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white dark:bg-gray-800 border-t-2 border-l-2 border-accent/30 rotate-45" />
                                    </motion.div>

                                    {/* Connecting Lines (decorative) */}
                                    {isSelected && index < serviceLocations.length - 1 && (
                                      <motion.div
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        className="absolute top-0 left-0"
                                      />
                                    )}
                                  </div>
                                </motion.div>
                              );
                            })}

                            {/* Center Label */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.8 }}
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                            >
                              <div className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl border-2 border-accent/40">
                                <p className="text-2xl font-bold text-primary mb-1">Greater Toronto Area</p>
                                <p className="text-sm text-muted-foreground">& Durham Region</p>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Overlay Legend */}
                      <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-2xl border-2 border-accent/30 p-4 z-10 max-w-xs">
                        <h4 className="font-bold text-base text-foreground mb-3 flex items-center space-x-2">
                          <MapPin className="w-5 h-5 text-red-500" />
                          <span>Our Service Areas</span>
                        </h4>
                        <div className="space-y-2">
                          {serviceLocations.map((location, index) => (
                            <motion.div
                              key={location.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              onMouseEnter={() => setHoveredLocation(location.name)}
                              onMouseLeave={() => setHoveredLocation(null)}
                              onClick={() => setSelectedLocation(location)}
                              className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                                hoveredLocation === location.name 
                                  ? 'bg-accent/20 scale-105' 
                                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                              }`}
                            >
                              <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-md flex-shrink-0" />
                              <span className="text-sm font-semibold text-foreground">{location.name}</span>
                            </motion.div>
                          ))}
                        </div>
                        <div className="mt-4 pt-3 border-t border-border/30">
                          <p className="text-xs text-muted-foreground italic">
                            Click to explore the map
                          </p>
                        </div>
                      </div>

                      {/* Service Info Badge */}
                      <div className="absolute top-4 right-4 bg-gradient-to-br from-accent to-primary text-white rounded-xl shadow-2xl p-4 z-10 max-w-xs">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-sm mb-1">Serving 14 Locations</p>
                            <p className="text-xs opacity-90">Greater Toronto Area & Durham Region</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Location Grid Below Map */}
                    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 border-t-2 border-accent/20">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {serviceLocations.map((location, index) => (
                          <motion.div
                            key={location.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            onMouseEnter={() => setHoveredLocation(location.name)}
                            onMouseLeave={() => setHoveredLocation(null)}
                            className={`bg-white dark:bg-card border-2 ${
                              hoveredLocation === location.name 
                                ? 'border-accent shadow-lg' 
                                : 'border-border/30 hover:border-accent/50'
                            } rounded-xl p-4 text-center transition-all duration-300 cursor-pointer`}
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                              <MapPin className="w-4 h-4 text-white" />
                            </div>
                            <p className="font-semibold text-foreground text-sm">{location.name}</p>
                            <p className="text-xs text-accent mt-1">Available</p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-8 text-center">
                        <p className="text-sm text-muted-foreground italic">
                          Don't see your area? <a href="/contact" className="text-accent font-semibold hover:underline">Contact us</a> - we may still be able to help!
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
            <span className="text-accent font-semibold"> Contact us for custom packages and long-term care options.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
