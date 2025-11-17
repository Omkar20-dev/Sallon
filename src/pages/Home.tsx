import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Star, Clock } from "lucide-react";
import heroImage from "@/assets/hero-salon.png";
import ReelSection from "@/components/sections/ReelSection";
import reels from "@/data/reels.json";

const Home = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Premium Services",
      description: "Experience luxury beauty treatments tailored to your unique needs",
    },
    {
      icon: Heart,
      title: "Expert Care",
      description: "Our certified professionals deliver exceptional results with care",
    },
    {
      icon: Star,
      title: "Top Quality",
      description: "Using only the finest products and latest techniques",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Open 7 days a week to accommodate your busy schedule",
    },
  ];

  const services = [
    {
      title: "Hair Styling",
      description: "Expert cuts, coloring, and treatments for beautiful, healthy hair",
      price: "From $50",
    },
    {
      title: "Facial Treatments",
      description: "Rejuvenating facials for glowing, radiant skin",
      price: "From $80",
    },
    {
      title: "Bridal Packages",
      description: "Complete bridal beauty solutions for your special day",
      price: "From $350",
    },
    {
      title: "Spa Services",
      description: "Relaxing spa treatments for complete rejuvenation",
      price: "From $65",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      text: "Absolutely amazing experience! The staff is professional and the results exceeded my expectations.",
      rating: 5,
    },
    {
      name: "Emma Johnson",
      text: "My go-to place for all beauty needs. The bridal package was perfect for my wedding day!",
      rating: 5,
    },
    {
      name: "Lisa Anderson",
      text: "The most luxurious salon experience. I always leave feeling pampered and beautiful.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" /> */}
          <div className="absolute inset-0 " />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-foreground">
              Create Your Own Unique Hair Story
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Award-winning hair salon based in the UK
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button  size="lg">
                <Link to="/booking">Book Online</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+1234567890">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of premium beauty treatments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-primary font-semibold">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button  size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

  <ReelSection reels={reels} />


      {/* Testimonials */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Read testimonials from our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-none shadow-soft hover:shadow-elegant transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-elegant bg-gradient-primary text-white animate-fade-in">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-display font-bold mb-4">
                Ready to Transform Your Look?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Book your appointment today and experience the Bella Luxe difference
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/booking">Book Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
