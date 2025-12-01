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
import { Mail, Phone, MapPin, Clock, Calendar, PawPrint, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useMemo } from "react";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import api from "@/lib/api";
import Holidays from 'date-holidays';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  // Get today's date in YYYY-MM-DD format for date input min
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };
  
  // Get current time in HH:MM format for time input min
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };
  
  // Initialize Canadian holidays library
  const hd = useMemo(() => new Holidays('CA', 'ON'), []); // Canada, Ontario
  
  const [formData, setFormData] = useState({
    customerType: "",
    firstName: "",
    lastName: "",
    address: "",
    numberOfPets: "",
    petTypes: [] as string[],
    service: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
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

  const serviceOptions = [
    "Pet Sitting 30min",
    "Pet Sitting 30min Holiday",
    "Pet Sitting 45min",
    "Pet Sitting 45min Holiday",
    "Pet Sitting 1hr",
    "Pet Sitting 1hr Holiday",
    "Dog Walking 30min",
    "Dog Walking 30min Holiday",
    "Dog Walking 45min",
    "Dog Walking 45min Holiday",
    "Dog Walking 1hr",
    "Dog Walking 1hr Holiday",
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

  // Check if a date is a Canadian holiday using the library
  const isHoliday = (dateString: string) => {
    const date = new Date(dateString);
    const holidays = hd.isHoliday(date);
    return holidays !== false; // Returns false if not a holiday, or holiday info if it is
  };

  const getServiceDuration = (service: string) => {
    if (service.includes('30min')) return 30;
    if (service.includes('45min')) return 45;
    if (service.includes('1hr')) return 60;
    return 0;
  };

  const calculateTimeDifference = (startTime: string, endTime: string) => {
    const [startHour, startMin] = startTime.split(':').map(Number);
    const [endHour, endMin] = endTime.split(':').map(Number);
    
    const startMinutes = startHour * 60 + startMin;
    const endMinutes = endHour * 60 + endMin;
    
    return endMinutes - startMinutes;
  };

  const validateServiceAndTimes = () => {
    const { service, startDate, endDate, startTime, endTime } = formData;

    // Check if service is a holiday service
    const isHolidayService = service.includes('Holiday');

    // Validate holiday dates
    if (isHolidayService) {
      const startIsHoliday = isHoliday(startDate);
      const endIsHoliday = isHoliday(endDate);

      if (!startIsHoliday || !endIsHoliday) {
        toast({
          variant: "destructive",
          description: (
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-base mb-1">Holiday Service Date Mismatch</div>
                <div className="text-sm opacity-90">Holiday services can only be booked on official holidays. Please select a regular service or choose holiday dates.</div>
              </div>
            </div>
          ) as React.ReactNode,
          className: "bg-destructive/90 border-2 border-destructive shadow-lg rounded-xl px-6 py-4 animate-in fade-in-80 slide-in-from-top-4",
        });
        return false;
      }
    } else {
      // Regular service should not be on holidays
      const startIsHoliday = isHoliday(startDate);
      const endIsHoliday = isHoliday(endDate);

      if (startIsHoliday || endIsHoliday) {
        toast({
          variant: "destructive",
          description: (
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-base mb-1">Regular Service on Holiday</div>
                <div className="text-sm opacity-90">You selected a holiday date. Please choose a Holiday service or select a non-holiday date.</div>
              </div>
            </div>
          ) as React.ReactNode,
          className: "bg-destructive/90 border-2 border-destructive shadow-lg rounded-xl px-6 py-4 animate-in fade-in-80 slide-in-from-top-4",
        });
        return false;
      }
    }

    // Validate time duration matches service
    const expectedDuration = getServiceDuration(service);
    const actualDuration = calculateTimeDifference(startTime, endTime);

    if (actualDuration !== expectedDuration) {
      toast({
        variant: "destructive",
        description: (
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-base mb-1">Time Duration Mismatch</div>
              <div className="text-sm opacity-90">
                The selected service requires {expectedDuration} minutes, but you selected {actualDuration} minutes. 
                Please adjust your time selection to match the service duration.
              </div>
            </div>
          </div>
        ) as React.ReactNode,
        className: "bg-destructive/90 border-2 border-destructive shadow-lg rounded-xl px-6 py-4 animate-in fade-in-80 slide-in-from-top-4",
      });
      return false;
    }

    return true;
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
        !formData.service ||
        !formData.startDate ||
        !formData.endDate ||
        !formData.startTime ||
        !formData.endTime ||
        !formData.phoneNumber ||
        !formData.email
      ) {
        toast({
          variant: "destructive",
          description: (
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-base mb-1">Missing Information</div>
                <div className="text-sm opacity-90">Please fill in all required fields</div>
              </div>
            </div>
          ) as React.ReactNode,
          className: "bg-destructive/90 border-2 border-destructive shadow-lg rounded-xl px-6 py-4 animate-in fade-in-80 slide-in-from-top-4",
        });
        setIsLoading(false);
        return;
      }

      // Validate service type matches dates and times
      if (!validateServiceAndTimes()) {
        setIsLoading(false);
        return;
      }

      // Debug: verify times and service before sending
      console.log('Submitting inquiry formData:', formData);

      // Prepare data for API with service and explicit times
      const payload = {
        customerType: formData.customerType,
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        numberOfPets: Number(formData.numberOfPets),
        petTypes: formData.petTypes,
        service: formData.service,
        startDate: formData.startDate,
        endDate: formData.endDate,
        startTime: formData.startTime,
        endTime: formData.endTime,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        additionalDetails: formData.additionalDetails,
      };

      const response = await api.post("/bookings/service-inquiry", payload);

      toast({
        description: (
          <div className="flex flex-col items-center justify-center gap-3">
            <span className="text-gradient-hero font-bold text-lg flex items-center gap-2">
              <CheckCircle className="w-5 h-5 animate-float" /> Inquiry Sent!
            </span>
            <span className="block text-base text-center">
              We will contact you soon to discuss details and availability.<br />Thank you for choosing <span className="font-semibold text-primary">Whiskarz</span>!
            </span>
          </div>
        ) as React.ReactNode,
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
        service: "",
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
        phoneNumber: "",
        email: "",
        additionalDetails: "",
      });
    } catch (error: unknown) {
      console.error("Service inquiry error:", error);
      
      // Extract error message from API response
      const apiError = error as { response?: { data?: { message?: string } } };
      const errorMessage = apiError.response?.data?.message || "Failed to submit service inquiry. Please try again.";
      
      toast({
        variant: "destructive",
        description: (
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 flex-shrink-0" />
            <div>
              <div className="font-semibold text-base mb-1">Request Failed</div>
              <div className="text-sm opacity-90">{errorMessage}</div>
            </div>
          </div>
        ) as React.ReactNode,
        className: "bg-destructive/90 border-2 border-destructive shadow-lg rounded-xl px-6 py-5 animate-in fade-in-80 slide-in-from-top-4",
        style: { minWidth: '340px', maxWidth: '90vw' },
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
              <Calendar className="w-4 h-4" />
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
                    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                      <img src="/call.png" alt="Phone" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (647) 548-8025</p>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Sun, 8am-8pm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-2 hover:border-primary/30 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                      <img src="/health.png" alt="Email" className="w-full h-full object-contain" />
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
                    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                      <img src="/location.png" alt="Location" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">2191 Yonge Street</p>
                      <p className="text-muted-foreground">Toronto, ON M4S 3H8</p>
                      <p className="text-sm text-muted-foreground mt-1">Serving Toronto, GTA & Durham Region</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-2 hover:border-primary/30 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                      <img src="/animal.png" alt="Hours" className="w-full h-full object-contain" />
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
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <img src="/pets-calander.png" alt="Calendar" className="w-full h-full object-contain" />
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
                      
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-sm font-medium">
                          Service *
                        </Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleSelectChange("service", value)}
                          required
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select from drop down" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
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
                            placeholder="Select Date from drop down"
                            min={getTodayDate()}
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
                            placeholder="Select Date from drop down"
                            min={getTodayDate()}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="startTime">Start Time *</Label>
                          <Input
                            id="startTime"
                            name="startTime"
                            type="time"
                            value={formData.startTime}
                            onChange={handleInputChange}
                            required
                            className="border-2 focus:border-primary"
                            min={getCurrentTime()}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="endTime">End Time *</Label>
                          <Input
                            id="endTime"
                            name="endTime"
                            type="time"
                            value={formData.endTime}
                            onChange={handleInputChange}
                            required
                            className="border-2 focus:border-primary"
                            min={getCurrentTime()}
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
