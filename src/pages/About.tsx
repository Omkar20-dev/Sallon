import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Client-Centered Care",
      description: "Your satisfaction and comfort are our top priorities. We listen to your needs and deliver personalized beauty solutions.",
    },
    {
      icon: Award,
      title: "Expert Excellence",
      description: "Our team consists of certified professionals with years of experience in the beauty industry.",
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "We use only the finest products and latest techniques to ensure exceptional results.",
    },
    {
      icon: Users,
      title: "Inclusive Beauty",
      description: "We celebrate diversity and believe every person deserves to feel beautiful and confident.",
    },
  ];

  const team = [
    { name: "Sophie Martinez", role: "Master Stylist & Owner", experience: "15+ years" },
    { name: "Isabella Chen", role: "Makeup Artist Specialist", experience: "10+ years" },
    { name: "Olivia Patel", role: "Skincare Expert", experience: "12+ years" },
    { name: "Emma Rodriguez", role: "Bridal Specialist", experience: "8+ years" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
            About Bella Luxe
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where luxury meets expertise, and beauty is celebrated in every detail
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-display font-bold mb-6 text-center gradient-text">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2010, Bella Luxe Beauty Parlor was born from a passion for empowering individuals through the art of beauty. What started as a small boutique salon has blossomed into a premier destination for luxury beauty treatments.
              </p>
              <p>
                Our founder, Sophie Martinez, envisioned a space where elegance meets expertise, where every client is treated like royalty, and where the latest beauty innovations blend seamlessly with timeless techniques.
              </p>
              <p>
                Today, we're proud to serve thousands of satisfied clients each year, offering a comprehensive range of services in our state-of-the-art facility. Our team of certified professionals stays at the forefront of beauty trends, continuously training to bring you the best in hair styling, skincare, makeup artistry, and spa treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Certified professionals dedicated to your beauty journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.experience} experience</p>
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
                Experience the Bella Luxe Difference
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Book your appointment today and discover why we're the preferred choice for luxury beauty
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/booking">Schedule Your Visit</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
