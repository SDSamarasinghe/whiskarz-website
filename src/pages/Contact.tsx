import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Clock, Sparkles, Calendar, PawPrint, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import api from "@/lib/api";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    customerType: "",
    firstName: "",
    lastName: "",
    address: "",
    numberOfPets: "",
    petTypes: [] as string[],
    startDate: "",
    endDate: "",
    phoneNumber: "",
    email: "",
    additionalDetails: "",
  });

  const petTypeOptions = [
    "Cat(s)",
    "Dog(s)",
    "Rabbit(s)",
    "Bird(s)",
    "Guinea pig(s)",
    "Ferret(s)",
    "Other",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePetTypeChange = (petType: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      petTypes: checked
        ? [...prev.petTypes, petType]
        : prev.petTypes.filter((type) => type !== petType),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate required fields
      if (
        !formData.customerType ||
        !formData.firstName ||
        !formData.lastName ||
        !formData.address ||
        !formData.numberOfPets ||
        formData.petTypes.length === 0 ||
        !formData.startDate ||
        !formData.endDate ||
        !formData.phoneNumber ||
        !formData.email
      ) {
        toast.error("Please fill in all required fields");
        setIsLoading(false);
        return;
      }

      // Prepare data for API
      const payload = {
        ...formData,
        numberOfPets: Number(formData.numberOfPets),
        petTypes: formData.petTypes,
      };

      const response = await api.post("/bookings/service-inquiry", payload);

      toast({
        title: (
          <span className="text-gradient-hero font-bold text-lg flex items-center gap-2">
            <Sparkles className="w-5 h-5 animate-float" /> Inquiry Sent!
          </span>
        ),
        description: (
          <span className="block text-base mt-2 text-center">
            We will contact you soon to discuss details and availability.<br />Thank you for choosing <span className="font-semibold text-primary">Whiskarz</span>!
          </span>
        ),
        className: "bg-background/90 border-2 border-primary shadow-glow rounded-xl px-6 py-5 flex flex-col items-center justify-center animate-in fade-in-80 slide-in-from-top-full",
        style: { left: '50%', transform: 'translateX(-50%)', top: '40%', position: 'fixed', zIndex: 9999, minWidth: '340px', maxWidth: '90vw' },
      });

      // Reset form
      setFormData({
        customerType: "",
        firstName: "",
        lastName: "",
        address: "",
        numberOfPets: "",
        petTypes: [],
        startDate: "",
        endDate: "",
        phoneNumber: "",
        email: "",
        additionalDetails: "",
      });
    } catch (error: unknown) {
      console.error("Service inquiry error:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to submit service inquiry";
      const apiError = error as { response?: { data?: { message?: string } } };
      
      toast.error("Service inquiry failed", {
        description:
          apiError.response?.data?.message ||
          errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Book Your Service</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Get in <span className="text-gradient-hero">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to book a sitter? Fill out our service inquiry form below and we'll contact you within 24 hours to discuss details and availability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="hover-lift border-2 hover:border-primary/30 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">(416) 555-PETS</p>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Sun, 8am-8pm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-2 hover:border-primary/30 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@whiskarz.com</p>
                      <p className="text-sm text-muted-foreground mt-1">24-48 hour response</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-2 hover:border-primary/30 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">Serving all of Toronto</p>
                      <p className="text-sm text-muted-foreground mt-1">& surrounding areas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-2 hover:border-primary/30 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                      <p className="text-muted-foreground">Mon-Fri: 7am-9pm</p>
                      <p className="text-muted-foreground">Sat-Sun: 8am-8pm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="border-2 hover:border-primary/30 transition-all duration-300 shadow-card">
                <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-accent/5">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Pet Service Inquiry</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    After you fill out this service request, we will contact you to go over details and availability. Thank you for considering Whiskarz for your pets!
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Customer Information */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2 pb-2 border-b-2 border-primary/20">
                        <PawPrint className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold text-foreground">Customer Information</h3>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="customerType" className="text-sm font-medium">
                          Are you a new or existing customer? *
                        </Label>
                        <Select
                          value={formData.customerType}
                          onValueChange={(value) => handleSelectChange("customerType", value)}
                          required
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select customer type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">I am a new customer</SelectItem>
                            <SelectItem value="existing">I am an existing customer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="border-2 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="border-2 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phoneNumber">Phone Number *</Label>
                          <Input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="(416) 555-0123"
                            required
                            className="border-2 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            required
                            className="border-2 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address (including unit number and postal code) *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="123 Main St, Unit 4B, Toronto ON M5V 3A1"
                          required
                          className="border-2 focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Pet Information */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2 pb-2 border-b-2 border-accent/20">
                        <PawPrint className="w-5 h-5 text-accent" />
                        <h3 className="text-lg font-semibold text-foreground">Pet Information</h3>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="numberOfPets">Number of Pets *</Label>
                        <Select
                          value={formData.numberOfPets}
                          onValueChange={(value) => handleSelectChange("numberOfPets", value)}
                          required
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select number of pets" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">One</SelectItem>
                            <SelectItem value="2">Two</SelectItem>
                            <SelectItem value="3">Three or more</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-3">
                        <Label>Select Type of Pets *</Label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {petTypeOptions.map((petType) => (
                            <div
                              key={petType}
                              className="flex items-center space-x-2 p-3 border-2 rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                            >
                              <Checkbox
                                id={petType}
                                checked={formData.petTypes.includes(petType)}
                                onCheckedChange={(checked) =>
                                  handlePetTypeChange(petType, checked as boolean)
                                }
                              />
                              <Label htmlFor={petType} className="cursor-pointer">
                                {petType}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Service Information */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2 pb-2 border-b-2 border-secondary/20">
                        <Calendar className="w-5 h-5 text-secondary" />
                        <h3 className="text-lg font-semibold text-foreground">Service Information</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="startDate">Start Date *</Label>
                          <Input
                            id="startDate"
                            name="startDate"
                            type="date"
                            value={formData.startDate}
                            onChange={handleInputChange}
                            required
                            className="border-2 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="endDate">End Date *</Label>
                          <Input
                            id="endDate"
                            name="endDate"
                            type="date"
                            value={formData.endDate}
                            onChange={handleInputChange}
                            required
                            className="border-2 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalDetails">
                          Additional Details
                          <span className="text-muted-foreground text-sm ml-2">
                            (medication schedules, special care instructions, etc.)
                          </span>
                        </Label>
                        <Textarea
                          id="additionalDetails"
                          name="additionalDetails"
                          rows={5}
                          value={formData.additionalDetails}
                          onChange={handleInputChange}
                          placeholder="Please provide any special care instructions, medication schedules, feeding requirements, or other important details about your pets..."
                          className="border-2 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isLoading}
                        className="w-full sm:flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 disabled:opacity-50"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Calendar className="mr-2 h-5 w-5" />
                            Submit Service Inquiry
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Contact;
