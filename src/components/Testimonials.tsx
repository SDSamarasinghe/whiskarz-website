import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    pet: "Golden Retriever - Max",
    rating: 5,
    text: "Whiskarz is amazing! Our sitter sent daily photos and Max was so happy. We'll definitely book again for our next trip.",
  },
  {
    name: "Michael Chen",
    pet: "Two Cats - Luna & Milo",
    rating: 5,
    text: "As a first-time user, I was nervous leaving my cats. The sitter was professional, caring, and my cats actually seemed sad when I got home!",
  },
  {
    name: "Emily Rodriguez",
    pet: "Rabbit - Clover",
    rating: 5,
    text: "Finding someone who knows rabbit care is hard. Whiskarz's specialized sitters gave Clover excellent care. Highly recommend!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            What Pet Parents Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.pet}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
