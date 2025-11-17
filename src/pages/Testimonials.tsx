import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      service: "Bridal Package",
      rating: 5,
      date: "March 2024",
      text: "Absolutely stunning results! The team made me feel like a princess on my wedding day. Every detail was perfect, from the makeup to the hair styling. I couldn't have asked for a better experience.",
    },
    {
      name: "Emma Johnson",
      service: "Hair Coloring",
      rating: 5,
      date: "February 2024",
      text: "I've been coming to Bella Luxe for years, and they never disappoint. The color always turns out exactly how I want it, and the stylists really know their craft. Highly recommend!",
    },
    {
      name: "Lisa Anderson",
      service: "Facial Treatment",
      rating: 5,
      date: "March 2024",
      text: "The most relaxing and rejuvenating facial I've ever had. My skin has never looked better! The aesthetician was knowledgeable and made excellent product recommendations.",
    },
    {
      name: "Rachel Kim",
      service: "Full Makeover",
      rating: 5,
      date: "January 2024",
      text: "Transformed my look for a special event. The makeup artist was incredibly talented and listened to exactly what I wanted. I felt confident and beautiful!",
    },
    {
      name: "Jessica Martinez",
      service: "Spa Package",
      rating: 5,
      date: "February 2024",
      text: "A luxurious experience from start to finish. The spa treatments were divine, and the ambiance was so calming. This is my go-to place for self-care.",
    },
    {
      name: "Amanda Chen",
      service: "Hair Styling",
      rating: 5,
      date: "March 2024",
      text: "Best haircut I've ever had! The stylist really understood my hair type and what would work best for my face shape. I get compliments everywhere I go!",
    },
    {
      name: "Nicole Patel",
      service: "Manicure & Pedicure",
      rating: 5,
      date: "February 2024",
      text: "Always immaculate! The nail technicians are skilled and detail-oriented. My nails look perfect for weeks after each visit.",
    },
    {
      name: "Michelle Rodriguez",
      service: "Anti-Aging Facial",
      rating: 5,
      date: "January 2024",
      text: "Noticed visible improvements after just one session! The products they use are top quality, and the results speak for themselves. Will definitely be back!",
    },
    {
      name: "Sophia Williams",
      service: "Bridal Trial",
      rating: 5,
      date: "March 2024",
      text: "The bridal trial was worth every penny. They helped me choose the perfect look for my wedding day and made me feel so comfortable and beautiful.",
    },
  ];

  const stats = [
    { number: "5000+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "4.9", label: "Average Rating" },
    { number: "50+", label: "Services Offered" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
            Client Testimonials
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read what our valued clients have to say about their Bella Luxe experience
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-none shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Quote className="w-8 h-8 text-primary opacity-50" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.service}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-elegant bg-gradient-primary text-white animate-fade-in">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-display font-bold mb-4">
                Become Our Next Success Story
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of satisfied clients who trust Bella Luxe for their beauty needs
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/booking">Book Your Appointment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
