import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-card-friendly border-b border-primary/10"
          : "bg-primary/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              <img
                src="/whiskarz-logo.png"
                alt="Whiskarz Logo"
                className="w-12 h-12 object-contain relative z-10 drop-shadow-lg"
                draggable="false"
              />
            </motion.div>
            <span className="text-2xl font-heading font-bold text-white group-hover:text-accent transition-colors duration-300">
              Whiskarz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  to={link.path}
                  className="relative px-4 py-2.5 text-white/90 hover:text-white transition-colors font-medium group rounded-lg hover:bg-white/10"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </Link>
              </motion.div>
            ))}
            
            <div className="flex items-center space-x-2 ml-4">
              <ThemeToggle />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="https://app.whiskarz.com/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white/50 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-300"
                  >
                    Sign In
                  </Button>
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">
                  <Button 
                    size="sm" 
                    className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2.5 rounded-xl shadow-hover-friendly hover:shadow-glow-friendly transition-all duration-300"
                  >
                    Book Now
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-1 py-4 border-t border-white/10">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-white/90 hover:text-white hover:bg-white/10 transition-all font-medium px-4 py-3 rounded-xl"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-2"
                >
                  <a 
                    href="https://app.whiskarz.com/login" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button 
                      variant="outline"
                      className="w-full bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white/50 text-white font-semibold rounded-xl py-3 mb-2"
                    >
                      Sign In
                    </Button>
                  </a>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl py-3">
                     Book Now
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
