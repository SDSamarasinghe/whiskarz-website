import { motion } from "framer-motion";
import { Shield, Award, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PSICertification = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />

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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm border-2 border-accent/30 text-primary px-6 py-3 rounded-full mb-8 shadow-lg"
          >
            <Award className="w-5 h-5 text-accent animate-pulse-soft" />
            <span className="text-sm font-bold">Certified Excellence</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              PSI Certified
            </span>{" "}
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
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative"
          >
            <Card className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-card border-2 border-border/30 hover:border-accent/50 transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden group">
              <CardContent className="p-6 md:p-8">
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border-4 border-primary/10 p-8 md:p-10">
                  {/* Certificate Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-primary tracking-wide">
                      Certificate of Membership
                    </h3>
                    
                    <p className="text-xs italic text-gray-600 dark:text-gray-400">This certifies that</p>
                    
                    <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                      WHISKARZ
                    </p>
                    
                    <p className="text-xs italic text-gray-600 dark:text-gray-400">is a member in good standing with</p>
                    
                    <p className="text-xl md:text-2xl font-bold text-primary mb-4">
                      Pet Sitters International
                    </p>
                    
                    {/* PSI Logo */}
                    <div className="flex justify-center my-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-secondary rounded-full flex items-center justify-center shadow-lg">
                        <Shield className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    <div className="max-w-md mx-auto space-y-3">
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic leading-relaxed">
                        and has agreed to follow the Code of Conduct and Quality Standards set forth by PSI.
                      </p>
                      
                      <div className="inline-block bg-accent/10 border border-accent/30 rounded-lg px-4 py-2">
                        <p className="text-sm font-semibold text-accent">
                          PSI membership expires 9/22/2026
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-semibold text-green-600 dark:text-green-500 italic">
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
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
              className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl z-10 border-4 border-white dark:border-gray-900"
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
                  gradient: "from-primary to-accent"
                },
                {
                  icon: Award,
                  title: "Continuous Education",
                  description: "Our team participates in ongoing training and education to provide the best care for your pets.",
                  gradient: "from-accent to-secondary"
                },
                {
                  icon: CheckCircle2,
                  title: "Bonded & Insured",
                  description: "Full insurance coverage and bonding for your complete peace of mind.",
                  gradient: "from-secondary to-primary"
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <Card className="bg-white dark:bg-card border-2 border-border/30 hover:border-accent/50 transition-all duration-300 shadow-md hover:shadow-lg">
                      <CardContent className="flex items-start space-x-4 p-6">
                        <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground text-lg mb-2">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
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
              className="bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/30 rounded-2xl p-6 mt-8"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
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
