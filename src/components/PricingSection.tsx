import { motion } from "framer-motion";
import { Check, Clock, Calendar, Sparkles, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import InteractiveMap from "./InteractiveMap";

// Service area coordinates (latitude, longitude)
const serviceLocations = [
  { name: "Oshawa", lat: 43.8971, lng: -78.8658 },
  { name: "Ajax", lat: 43.8509, lng: -79.0204 },
  { name: "Bowmanville", lat: 43.9128, lng: -78.6882 },
  { name: "Whitby", lat: 43.8975, lng: -78.9429 },
  { name: "Courtice", lat: 43.9128, lng: -78.7897 },
  { name: "Newcastle", lat: 43.9170, lng: -78.5897 },
];
// keep

const PricingSection = () => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<typeof serviceLocations[0] | null>(null);
  
  // Google Maps URL with all service locations marked
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=43.8971,-78.8658&zoom=10&maptype=roadmap`;
  
  // Alternative: Use multiple markers URL
  const googleMapsUrl = "https://www.google.com/maps/d/embed?mid=1your-custom-map-id&ehbc=2E312F";

  const pricingPlans = [
    {
      duration: "30 Minutes",
      icon: Clock,
      regular: "$28",
      holiday: "$35",
      description: "Perfect for quick check-ins and feeding",
      popular: false,
      gradient: "from-primary to-accent",
    },
    {
      duration: "45 Minutes",
      icon: Clock,
      regular: "$32",
      holiday: "$40",
      description: "Ideal for walks and playtime",
      popular: true,
      gradient: "from-accent to-secondary",
    },
    {
      duration: "1 Hour",
      icon: Clock,
      regular: "$35",
      holiday: "$46",
      description: "Extended care and attention",
      popular: false,
      gradient: "from-secondary to-primary",
    },
  ];

  const serviceAreas = [
    "Oshawa",
    "Ajax", 
    "Bowmanville",
    "Whitby",
    "Courtice",
    "Newcastle",
  ];

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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm border-2 border-accent/30 text-primary px-6 py-3 rounded-full mb-8 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-accent animate-pulse-soft" />
            <span className="text-sm font-bold">Transparent Pricing</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Simple, <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Affordable</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the perfect duration for your pet's care needs. All prices in CAD.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.duration}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className={`relative h-full overflow-hidden border-2 ${plan.popular ? 'border-accent/60 shadow-xl' : 'border-border/30'} hover:border-accent/50 transition-all duration-500 bg-white dark:bg-card shadow-lg hover:shadow-2xl`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0">
                      <div className="bg-gradient-to-r from-accent to-secondary text-white text-center py-2 text-sm font-bold">
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className={`${plan.popular ? 'pt-16' : 'pt-8'} pb-6`}>
                    <div className="flex justify-center mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-center text-foreground mb-2">
                      {plan.duration}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground text-center">
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6 pb-8">
                    {/* Regular Days */}
                    <div className="text-center">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                          Regular Days
                        </Badge>
                      </div>
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-4xl font-bold text-foreground">{plan.regular}</span>
                        <span className="text-sm text-muted-foreground">CAD</span>
                      </div>
                    </div>

                    <div className="border-t border-border/30 pt-4"></div>

                    {/* Holidays */}
                    <div className="text-center">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs border-accent/50 text-accent">
                          <Calendar className="w-3 h-3 mr-1" />
                          Holidays
                        </Badge>
                      </div>
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-4xl font-bold text-accent">{plan.holiday}</span>
                        <span className="text-sm text-muted-foreground">CAD</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="pt-4 space-y-3">
                      {[
                        "Professional care",
                        "Photo updates",
                        "Fully insured",
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className={`w-5 h-5 bg-gradient-to-br ${plan.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Map Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 -mx-4 sm:-mx-6 lg:-mx-8"
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
                    {/* Interactive Google Map */}
                    <div className="relative w-full" style={{ height: '600px' }}>
                      <InteractiveMap 
                        locations={serviceLocations}
                        selectedLocation={selectedLocation}
                        onMarkerClick={setSelectedLocation}
                      />

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
                            <p className="font-bold text-sm mb-1">Serving 6 Locations</p>
                            <p className="text-xs opacity-90">Durham Region & Surrounding Areas</p>
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
