import { Link } from "react-router-dom";
import { PawPrint, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Heart } from "lucide-react";
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
    <footer className="bg-gradient-to-b from-muted/30 to-muted/50 border-t border-border mt-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-primary via-accent to-secondary rounded-full flex items-center justify-center shadow-lg"
              >
                <PawPrint className="w-7 h-7 text-white" />
              </motion.div>
              <span className="text-xl font-heading font-bold text-foreground">
                Whiskarz
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional, trusted pet sitting services for all your furry (and not-so-furry) friends in Toronto. Your pets deserve the best care.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heading font-semibold text-foreground mb-6 text-lg">Quick Links</h3>
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
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                    <span>{link.name}</span>
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
          >
            <h3 className="font-heading font-semibold text-foreground mb-6 text-lg">Our Services</h3>
            <ul className="space-y-3">
              {["Dog Sitting", "Cat Sitting", "Rabbit Care", "Bird Sitting", "Pocket Pet Care"].map((service) => (
                <li key={service} className="text-muted-foreground text-sm flex items-center space-x-2">
                  <PawPrint className="w-3 h-3 text-primary" />
                  <span>{service}</span>
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
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-6 text-lg">Stay Updated</h3>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50 border-border"
                  required
                />
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent">
                  Subscribe
                </Button>
              </form>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-sm">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                  <span>Toronto, Ontario</span>
                </li>
                <li className="flex items-start space-x-2 text-muted-foreground text-sm">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                  <span>(416) 555-PETS</span>
                </li>
                <li className="flex items-start space-x-2 text-muted-foreground text-sm">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                  <span>hello@whiskarz.com</span>
                </li>
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
          className="border-t border-border pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Whiskarz. All rights reserved. | Fully Insured & Bonded
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse-soft" />
              <span>for pets</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
