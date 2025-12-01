import { motion } from "framer-motion";
import { Shield, Award, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { GiShieldDisabled, GiDiploma, GiTrophyCup } from "react-icons/gi";
import { useState } from "react";

const PSICertification = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-muted/20 via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary px-6 py-3 rounded-full mb-8"
          >
            <GiTrophyCup className="w-5 h-5" />
            <span className="text-sm font-semibold">Certified Excellence</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            <span className="text-primary">PSI Certified</span>{" "}
            Professional Pet Sitters
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whiskarz is a proud member in good standing with Pet Sitters International, 
            committed to the highest standards of pet care excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* PSI Certificate Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Card className="bg-card border-2 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-xl overflow-hidden group">
              <CardContent className="p-6 md:p-8">
                <div className="relative bg-gradient-to-br from-muted/30 to-background rounded-2xl shadow-xl border-4 border-primary/20 p-8 md:p-10">
                  {/* Certificate Content */}
                  <div className="text-center space-y-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-primary tracking-wide">
                        Certificate of Membership
                      </h3>
                    </motion.div>
                    
                    <p className="text-xs italic text-muted-foreground">This certifies that</p>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-3xl md:text-4xl font-bold text-foreground tracking-tight"
                    >
                      WHISKARZ
                    </motion.p>
                    
                    <p className="text-xs italic text-muted-foreground">is a member in good standing with</p>
                    
                    <p className="text-xl md:text-2xl font-bold text-primary mb-4">
                      Pet Sitters International
                    </p>
                    
                    {/* PSI Logo */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 150 }}
                      className="flex justify-center my-6"
                    >
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <GiDiploma className="w-12 h-12 text-primary-foreground" />
                      </div>
                    </motion.div>
                    
                    <div className="max-w-md mx-auto space-y-3">
                      <p className="text-xs text-muted-foreground italic leading-relaxed">
                        and has agreed to follow the Code of Conduct and Quality Standards set forth by PSI.
                      </p>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="inline-block bg-primary/10 border border-primary/30 rounded-lg px-4 py-2"
                      >
                        <p className="text-sm font-semibold text-primary">
                          PSI membership expires 9/22/2026
                        </p>
                      </motion.div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t">
                      <p className="text-sm font-semibold text-primary italic">
                        Pet-Sitting Excellence through Education
                      </p>
                    </div>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-lg"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-lg"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-lg"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-lg"></div>
                </div>
              </CardContent>
            </Card>

            {/* Verified Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 200 }}
              className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl z-10 border-4 border-background"
            >
              <CheckCircle2 className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          {/* Benefits & Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                What PSI Certification Means for You
              </h3>
              
              {[
                {
                  icon: Shield,
                  title: "Verified Professional Standards",
                  description: "We follow strict codes of conduct and quality standards set by Pet Sitters International.",
                },
                {
                  icon: Award,
                  title: "Continuous Education",
                  description: "Our team participates in ongoing training and education to provide the best care for your pets.",
                },
                {
                  icon: CheckCircle2,
                  title: "Bonded & Insured",
                  description: "Full insurance coverage and bonding for your complete peace of mind.",
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                const isHovered = hoveredBenefit === index;
                
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    onMouseEnter={() => setHoveredBenefit(index)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                  >
                    <Card className="bg-card border-2 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg">
                      <CardContent className="flex items-start space-x-4 p-6">
                        <motion.div
                          animate={isHovered ? { scale: 1.1, rotate: [0, -5, 5, 0] } : { scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5 }}
                          className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                        >
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-foreground text-lg mb-2">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                        
                        {/* Animated indicator */}
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                          className="flex-shrink-0"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full" />
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-muted/50 border-2 border-primary/20 rounded-2xl p-6 mt-8 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                >
                  <GiTrophyCup className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <div>
                  <p className="font-bold text-foreground text-lg mb-1">Trusted by 500+ Families</p>
                  <p className="text-sm text-muted-foreground">
                    Serving Toronto, GTA & Durham Region with certified excellence since 2020
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PSICertification;
