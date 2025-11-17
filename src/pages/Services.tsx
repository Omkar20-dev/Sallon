import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Scissors, Sparkles, Heart, Crown, Flower2, HandMetal } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      icon: Scissors,
      title: "Hair Services",
      services: [
        { name: "Women's Haircut", price: "$50-$80", duration: "45 min" },
        { name: "Men's Haircut", price: "$30-$45", duration: "30 min" },
        { name: "Hair Coloring", price: "$80-$200", duration: "2-3 hrs" },
        { name: "Highlights", price: "$100-$250", duration: "2-4 hrs" },
        { name: "Hair Treatment", price: "$60-$120", duration: "1 hr" },
        { name: "Blow Dry & Style", price: "$40-$70", duration: "45 min" },
      ],
    },
    {
      icon: Sparkles,
      title: "Facial Treatments",
      services: [
        { name: "Classic Facial", price: "$80", duration: "60 min" },
        { name: "Anti-Aging Facial", price: "$120", duration: "75 min" },
        { name: "Deep Cleansing Facial", price: "$90", duration: "60 min" },
        { name: "Hydrating Facial", price: "$100", duration: "60 min" },
        { name: "Chemical Peel", price: "$150", duration: "45 min" },
        { name: "Microdermabrasion", price: "$130", duration: "60 min" },
      ],
    },
    {
      icon: Heart,
      title: "Makeup Services",
      services: [
        { name: "Bridal Makeup", price: "$200-$400", duration: "2 hrs" },
        { name: "Party Makeup", price: "$80-$150", duration: "1 hr" },
        { name: "Natural Makeup", price: "$60-$100", duration: "45 min" },
        { name: "HD Makeup", price: "$120-$180", duration: "1 hr" },
        { name: "Makeup Lesson", price: "$150", duration: "2 hrs" },
      ],
    },
    {
      icon: Crown,
      title: "Bridal Packages",
      services: [
        { name: "Bridal Package Basic", price: "$350", duration: "3 hrs" },
        { name: "Bridal Package Premium", price: "$600", duration: "4 hrs" },
        { name: "Bridal Package Deluxe", price: "$900", duration: "5 hrs" },
        { name: "Pre-Bridal Treatment", price: "$400", duration: "Multiple sessions" },
        { name: "Bridal Trial Session", price: "$150", duration: "2 hrs" },
      ],
    },
    {
      icon: HandMetal,
      title: "Nail Services",
      services: [
        { name: "Manicure", price: "$35-$60", duration: "45 min" },
        { name: "Pedicure", price: "$45-$75", duration: "60 min" },
        { name: "Gel Manicure", price: "$50-$80", duration: "60 min" },
        { name: "Acrylic Nails", price: "$60-$100", duration: "90 min" },
        { name: "Nail Art", price: "$20-$50", duration: "30 min" },
      ],
    },
    {
      icon: Flower2,
      title: "Spa Treatments",
      services: [
        { name: "Body Massage", price: "$80-$150", duration: "60-90 min" },
        { name: "Body Scrub", price: "$70-$120", duration: "60 min" },
        { name: "Body Wrap", price: "$100-$160", duration: "75 min" },
        { name: "Aromatherapy", price: "$90-$140", duration: "60 min" },
        { name: "Hot Stone Massage", price: "$120-$180", duration: "90 min" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of premium beauty treatments designed to enhance your natural beauty
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <Card
                key={index}
                className="border-none shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mr-4">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-display font-bold">{category.title}</h2>
                  </div>
                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex justify-between items-start pb-4 border-b border-border last:border-0"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.duration}</p>
                        </div>
                        <span className="text-primary font-semibold ml-4">{service.price}</span>
                      </div>
                    ))}
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
                Book Your Service Today
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Experience luxury beauty treatments with our expert professionals
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/booking">Make an Appointment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
