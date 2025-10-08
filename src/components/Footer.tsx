import { Link } from "react-router-dom";
import { PawPrint, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <PawPrint className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-lg font-heading font-bold text-foreground">
                PawCare Toronto
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional, trusted pet sitting services for all your furry (and not-so-furry) friends in Toronto.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Dog Sitting</li>
              <li className="text-muted-foreground text-sm">Cat Sitting</li>
              <li className="text-muted-foreground text-sm">Rabbit Care</li>
              <li className="text-muted-foreground text-sm">Bird Sitting</li>
              <li className="text-muted-foreground text-sm">Pocket Pet Care</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
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
                <span>hello@pawcareto.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} PawCare Toronto. All rights reserved. | Fully Insured & Bonded
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
