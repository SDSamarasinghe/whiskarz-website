import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          {!isExpanded ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => setIsExpanded(true)}
                className="h-16 w-16 rounded-full shadow-2xl bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300"
              >
                <Calendar className="h-6 w-6" />
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ width: 64 }}
              animate={{ width: "auto" }}
              className="bg-card rounded-full shadow-2xl border border-border p-2 flex items-center gap-2"
            >
              <Link to="/contact" className="flex-1">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Book Now</span>
                </Button>
              </Link>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsExpanded(false)}
                className="h-12 w-12 rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
