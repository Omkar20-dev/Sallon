import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us - we'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center border-none shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">
                  123 Beauty Street<br />
                  Luxury Plaza<br />
                  New York, NY 10001
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                    (123) 456-7890
                  </a>
                  <br />
                  <a href="tel:+1234567891" className="hover:text-primary transition-colors">
                    (123) 456-7891
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:info@bellaluxe.com" className="hover:text-primary transition-colors">
                    info@bellaluxe.com
                  </a>
                  <br />
                  <a href="mailto:bookings@bellaluxe.com" className="hover:text-primary transition-colors">
                    bookings@bellaluxe.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">Hours</h3>
                <p className="text-muted-foreground">
                  Mon - Sat: 9:00 AM - 8:00 PM<br />
                  Sunday: 10:00 AM - 6:00 PM
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <Card className="border-none shadow-elegant overflow-hidden animate-fade-in">
            <div className="aspect-[21/9] bg-gradient-hero">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bella Luxe Beauty Parlor Location"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl font-display font-bold mb-6 gradient-text">
            Follow Us
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stay connected for beauty tips, promotions, and inspiration
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-primary text-white hover:shadow-elegant hover:scale-110 transition-all duration-300"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-primary text-white hover:shadow-elegant hover:scale-110 transition-all duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-primary text-white hover:shadow-elegant hover:scale-110 transition-all duration-300"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-elegant bg-gradient-primary text-white animate-fade-in">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-display font-bold mb-4">
                Ready to Book?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Schedule your appointment and experience luxury beauty treatments
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/booking">Book Appointment Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
