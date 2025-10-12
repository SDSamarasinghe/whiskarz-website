import { Link } from "react-router-dom";
import { PawPrint, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative overflow-hidden mt-20">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=1920&auto=format&fit=crop&q=80"
          alt="Footer background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/98 via-secondary/95 to-primary/98" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      </div>

      {/* Top Wave Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>

      {/* Decorative Animated Elements */}
      <div className="absolute inset-0 opacity-10 z-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/50 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Top CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pb-16 border-b border-white/10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm text-accent px-5 py-2.5 rounded-full mb-6 border border-accent/30"
          >
            <PawPrint className="w-4 h-4" />
            <span className="text-sm font-semibold">Join Our Pet-Loving Community</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Ready to Give Your Pet the <span className="text-accent">Best Care</span>?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Book a trusted sitter today and enjoy peace of mind knowing your furry friend is in loving hands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-glow-friendly hover:shadow-xl transition-all duration-300"
                >
                  Book a Sitter Now
                </Button>
              </motion.div>
            </Link>
            <Link to="/services">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary via-accent to-secondary hover:from-accent hover:to-primary text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-glow-friendly hover:shadow-xl border-0 transition-all duration-300"
                >
                  View Our Services
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-accent rounded-full blur-lg opacity-60 animate-pulse-soft"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center shadow-glow-friendly">
                  <img
                    src="/whiskarz-logo.png"
                    alt="Whiskarz Logo"
                    className="w-10 h-10 object-contain drop-shadow-lg"
                    draggable="false"
                  />
                </div>
              </motion.div>
              <span className="text-3xl font-heading font-bold text-white">
                Whiskarz
              </span>
            </div>
            <p className="text-white/90 text-base leading-relaxed">
              Professional, trusted pet sitting services for all your furry (and not-so-furry) friends in Toronto. Your pets deserve the best care.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-3 py-2 rounded-lg border border-white/20">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold">Insured</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-3 py-2 rounded-lg border border-white/20">
                <Heart className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold">4.9★ Rated</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gradient-to-br from-accent to-secondary hover:from-secondary hover:to-accent backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-glow-friendly"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-white transition-all" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="font-heading font-bold text-white mb-6 text-xl flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-accent transition-colors text-base flex items-center space-x-3 group font-medium"
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 bg-accent rounded-full group-hover:w-8 transition-all duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-heading font-bold text-white mb-6 text-xl flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <PawPrint className="w-4 h-4 text-white" />
              </div>
              <span>Our Services</span>
            </h3>
            <ul className="space-y-4">
              {["Dog Sitting", "Cat Sitting", "Rabbit Care", "Bird Sitting", "Pocket Pet Care"].map((service, index) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="text-white/90 text-base flex items-center space-x-3 font-medium group cursor-pointer hover:text-accent transition-colors"
                >
                  <motion.div
                    whileHover={{ rotate: 20, scale: 1.2 }}
                    className="w-6 h-6 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors"
                  >
                    <PawPrint className="w-3.5 h-3.5 text-accent" />
                  </motion.div>
                  <span>{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
              <h3 className="font-heading font-bold text-white mb-4 text-xl flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span>Stay Updated</span>
              </h3>
              <p className="text-white/80 text-sm mb-4">Get pet care tips & exclusive offers!</p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-accent focus:bg-white/15 rounded-xl h-12 text-base"
                  required
                />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-accent to-secondary hover:from-secondary hover:to-accent text-white font-semibold rounded-xl h-12 shadow-lg hover:shadow-glow-friendly transition-all duration-300"
                  >
                    Subscribe Now
                  </Button>
                </motion.div>
              </form>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3">
                {[
                  { icon: MapPin, text: "Toronto, Ontario", color: "from-accent to-primary" },
                  { icon: Phone, text: "(416) 555-PETS", color: "from-primary to-secondary" },
                  { icon: Mail, text: "hello@whiskarz.com", color: "from-secondary to-accent" }
                ].map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.li 
                      key={contact.text}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-start space-x-3 text-white/90 text-base group cursor-pointer hover:text-accent transition-colors"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-br ${contact.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{contact.text}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/20 pt-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <p className="text-white/90 text-base font-medium">
                © {currentYear} Whiskarz. All rights reserved.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full hidden md:block" />
                <span className="text-white/80 text-sm font-medium">Fully Insured & Bonded</span>
              </div>
            </div>
            
            <motion.div 
              className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-full border border-white/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white/90 text-sm font-medium">Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-accent fill-accent" />
              </motion.div>
              <span className="text-white/90 text-sm font-medium">for pets in Toronto</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
