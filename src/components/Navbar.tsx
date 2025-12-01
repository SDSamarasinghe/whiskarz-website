import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          whileHover={{ boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
          transition={{ duration: 0.3 }}
          className="bg-card/95 backdrop-blur-md rounded-full shadow-lg border border-border px-4 md:px-8 py-3 md:py-4 flex items-center justify-between"
        >
          {/* Logo + Brand Word */}
          <Link
            to="/"
            aria-label="Whiskarz Home"
            className="group relative flex items-center gap-3"
          >
            {/* Decorative halo */}
            <div
              aria-hidden
              className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
            />
            <motion.img
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              src="/whiskarz-logo.png"
              alt="Whiskarz brand mark"
              className="h-9 md:h-11 w-auto object-contain drop-shadow-sm transition-transform"
              loading="lazy"
            />
            <div className="flex flex-col">
              <motion.span
                layout
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-bold text-lg md:text-xl tracking-tight text-foreground"
              >
                WHISKARZ
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="hidden md:block text-xs font-medium text-muted-foreground tracking-wide"
              >
                Premium Pet Care
              </motion.span>
            </div>
            <span className="sr-only">Navigate to homepage</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.path}
                  className="text-foreground hover:text-primary transition-colors font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-2 md:space-x-3">
            {/* Sign In Button */}
            <motion.a
              href="https://app.whiskarz.com/login"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block text-foreground hover:text-primary transition-colors font-medium px-3 py-2 rounded-full hover:bg-muted/50"
            >
              <span className="text-sm md:text-base">Sign In</span>
            </motion.a>
            
            {/* Book Now Button */}
            <Link to="/contact" className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary border-2 border-primary text-primary-foreground px-4 md:px-6 py-2 md:py-2.5 rounded-full font-medium hover:bg-primary/90 transition-all hover:shadow-lg flex items-center space-x-2 group"
              >
                <span className="text-sm md:text-base">Book Now</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </Link>
            
            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-2 bg-card/95 backdrop-blur-md rounded-3xl shadow-lg border border-border py-4 px-6"
            >
              <nav className="flex flex-col space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-primary transition-colors font-medium text-left py-2 block"
                  >
                    Home
                  </Link>
                </motion.div>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (index + 1) * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-foreground hover:text-primary transition-colors font-medium text-left py-2 block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all mt-2 flex items-center justify-center space-x-2 w-full shadow-sm"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
