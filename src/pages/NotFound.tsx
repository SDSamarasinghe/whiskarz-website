import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Search, PawPrint, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background with Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-secondary/90 to-accent/85" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      </div>

      {/* Decorative Animated Elements */}
      <div className="absolute inset-0 opacity-20 z-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary rounded-full blur-3xl"
        />
      </div>

      {/* Floating Paw Prints */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-1/4 opacity-20"
      >
        <PawPrint className="w-24 h-24 text-white" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 left-1/4 opacity-20"
      >
        <PawPrint className="w-32 h-32 text-white" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-8">
          {/* Animated Paw Print Icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full mb-8 border-4 border-white/30"
          >
            <PawPrint className="w-16 h-16 text-white" />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 className="text-9xl md:text-[200px] font-heading font-bold text-white mb-6 leading-none">
            404
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Oops! This Page Wandered Off
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Looks like this page went chasing squirrels. Let's get you back home where the treats are!
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            The page you're looking for doesn't exist or may have been moved.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto group bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-glow-friendly hover:shadow-xl transition-all duration-300"
              >
                <Home className="mr-2 w-5 h-5" />
                Back to Home
              </Button>
            </motion.div>
          </Link>
          
          <Link to="/services">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 backdrop-blur-sm bg-white/5"
              >
                <Search className="mr-2 w-5 h-5" />
                Browse Services
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Quick Links Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              icon: PawPrint,
              title: "Our Services",
              description: "Explore our pet care options",
              link: "/services",
              gradient: "from-accent to-secondary",
            },
            {
              icon: Heart,
              title: "About Us",
              description: "Meet our caring team",
              link: "/about",
              gradient: "from-primary to-accent",
            },
            {
              icon: ArrowLeft,
              title: "Contact",
              description: "Get in touch with us",
              link: "/contact",
              gradient: "from-secondary to-primary",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Link to={item.link}>
                  <Card className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-glow-friendly cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-white/80">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Error Path Info (for developers) */}
        {process.env.NODE_ENV === 'development' && (
          <motion.div
            variants={itemVariants}
            className="mt-12 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 max-w-2xl mx-auto"
          >
            <p className="text-white/60 text-sm font-mono">
              Attempted path: <span className="text-accent">{location.pathname}</span>
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default NotFound;
