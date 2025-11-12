import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Heart, Users, Award, PawPrint, TrendingUp, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Passion for Pets",
    description: "Every member of our team is a dedicated pet lover who treats your animals like family.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "All sitters are background-checked, insured, and trained in pet safety and first aid.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "We're proud to serve Toronto's pet community and build lasting relationships.",
  },
  {
    icon: Award,
    title: "Excellence in Care",
    description: "Our commitment to quality care has earned us a 4.9-star rating from pet parents.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&auto=format&fit=crop&q=80"
            alt="Happy pets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-secondary/90 to-accent/85" />
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full mb-6 border border-white/30"
            >
              <span className="text-sm font-semibold">Toronto's Premier Pet Care Service</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              About <span className="text-accent">Whiskarz</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/95 leading-relaxed"
            >
              We're more than just a pet sitting service – we're a community of passionate pet lovers dedicated to providing the highest quality care for Toronto's furry, feathered, and scaled friends.
            </motion.p>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
            >
              {[
                { number: "500+", label: "Happy Clients", icon: Heart },
                { number: "50+", label: "Expert Sitters", icon: Users },
                { number: "5000+", label: "Bookings", icon: TrendingUp },
                { number: "4.9★", label: "Rating", icon: Award },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Story Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-glow-friendly">
                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&auto=format&fit=crop&q=80"
                  alt="Pet care team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">24/7 Support</div>
                      <div className="text-sm text-muted-foreground">We're always here for you</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-2xl"
              />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6"
              >
                <PawPrint className="w-4 h-4" />
                <span className="text-sm font-semibold">Our Journey</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                Built on Love, Trust & <span className="text-gradient-hero">Excellence</span>
              </h2>
              
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Whiskarz was founded in 2020 by a group of pet enthusiasts who saw a need for reliable, professional pet sitting services that treat every animal with the love and care they deserve.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  As pet parents ourselves, we understand the anxiety of leaving your beloved companions. That's why we created a service built on trust, transparency, and genuine care for animals of all types.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Today, we're proud to serve hundreds of families across Toronto, providing peace of mind and exceptional care for dogs, cats, rabbits, birds, and pocket pets. Our team of experienced sitters shares your love for animals and treats each pet as if they were their own.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <div className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-semibold">Insured & Bonded</span>
                </div>
                <div className="flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-semibold">Award-Winning</span>
                </div>
                <div className="flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-semibold">Pet Parent Approved</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        
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
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            >
              <Heart className="w-4 h-4" />
              <span className="text-sm font-semibold">What Drives Us</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Our Core <span className="text-gradient-hero">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full border-2 border-border/50 hover:border-accent/50 transition-all duration-500 bg-card/80 backdrop-blur-sm shadow-card-friendly hover:shadow-glow-friendly">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="relative inline-block mb-6"
                      >
                        <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                        <div className="relative w-16 h-16 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow-friendly transition-shadow duration-300">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </motion.div>
                      
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&auto=format&fit=crop&q=80"
            alt="Happy pets playing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-secondary/90 to-accent/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Trusted by Pet Parents <span className="text-accent">Everywhere</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our numbers speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                number: "500+", 
                label: "Happy Clients", 
                description: "Pet parents trust us",
                icon: Heart,
                color: "from-accent to-primary"
              },
              { 
                number: "50+", 
                label: "Trusted Sitters", 
                description: "Vetted professionals",
                icon: Users,
                color: "from-primary to-secondary"
              },
              { 
                number: "5000+", 
                label: "Bookings Completed", 
                description: "Successful visits",
                icon: TrendingUp,
                color: "from-secondary to-accent"
              },
              { 
                number: "4.9", 
                label: "Average Rating", 
                description: "Customer satisfaction",
                icon: Award,
                color: "from-accent to-primary"
              },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-glow-friendly h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <motion.div
                        initial={{ scale: 1 }}
                        whileInView={{ scale: [1, 1.1, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-2"
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-base font-semibold text-white mb-1">{stat.label}</div>
                      <div className="text-sm text-white/70">{stat.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-5 py-3 rounded-full border border-white/20">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold">Background Checked</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-5 py-3 rounded-full border border-white/20">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold">Insured & Bonded</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-5 py-3 rounded-full border border-white/20">
              <Heart className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold">Pet CPR Certified</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
