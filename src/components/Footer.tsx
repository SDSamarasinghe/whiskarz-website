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
    <footer className="relative overflow-hidden mt-20 border-t">
      {/* Minimal Background */}
      <div className="absolute inset-0 z-0 bg-muted/30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Top CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pb-12 border-b"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Ready to Give Your Pet the <span className="text-primary">Best Care</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Book a trusted sitter today and enjoy peace of mind knowing your furry friend is in loving hands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-lg"
              >
                Book a Sitter Now
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg"
                variant="outline"
                className="font-semibold px-8 rounded-lg"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <img
                src="/whiskarz-logo.png"
                alt="Whiskarz Logo"
                className="w-8 h-8 object-contain mr-2"
                draggable="false"
              />
              <span className="text-2xl font-heading font-bold text-foreground">
                Whiskarz
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional, trusted pet sitting services in Toronto, North York, Scarborough, Markham, Richmond Hill, and surrounding areas.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center space-x-1.5 bg-muted text-foreground px-3 py-1.5 rounded-md text-xs font-medium">
                <Shield className="w-3.5 h-3.5 text-primary" />
                <span>Insured</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-muted text-foreground px-3 py-1.5 rounded-md text-xs font-medium">
                <Heart className="w-3.5 h-3.5 text-primary" />
                <span>4.9★ Rated</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-foreground font-semibold mb-3 text-sm">Follow Us</h4>
              <div className="flex space-x-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-9 h-9 bg-muted hover:bg-primary hover:text-primary-foreground text-foreground rounded-lg flex items-center justify-center transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
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
            className="space-y-4"
          >
            <h3 className="font-semibold text-foreground text-sm">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-foreground text-sm">Our Services</h3>
            <ul className="space-y-3">
              {["Dog Sitting", "Cat Sitting", "Rabbit Care", "Bird Sitting", "Pocket Pet Care"].map((service) => (
                <li 
                  key={service}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-muted/50 rounded-lg p-5 border">
              <h3 className="font-semibold text-foreground mb-3 text-sm">Stay Updated</h3>
              <p className="text-muted-foreground text-xs mb-4">Get pet care tips & exclusive offers!</p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10 text-sm"
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full h-10 text-sm"
                >
                  Subscribe
                </Button>
              </form>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-sm">Contact Us</h4>
              <ul className="space-y-2">
                {[
                  { icon: MapPin, text: "2191 Yonge Street, Toronto, ON M4S 3H8" },
                  { icon: Phone, text: "+1 (647) 548-8025" },
                  { icon: Mail, text: "hello@whiskarz.com" }
                ].map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <li 
                      key={contact.text}
                      className="flex items-start space-x-2 text-muted-foreground text-xs"
                    >
                      <Icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{contact.text}</span>
                    </li>
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
          className="border-t pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Whiskarz. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-primary rounded-full hidden md:block" />
                <span className="text-muted-foreground text-xs">Fully Insured & Bonded</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span>for pets in Toronto, GTA & Durham Region</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
