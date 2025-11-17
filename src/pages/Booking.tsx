import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { toast } from "sonner";
import { Calendar, Clock, User, Mail, Phone, Sparkles } from "lucide-react";

import { createBookingApi } from "@/lib/api/bookings";

// Zod Schema
const bookingSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  phone: z.string().trim().min(10),
  service: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  message: z.string().trim().max(500).optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const Booking = () => {
  const { register, handleSubmit, formState: { errors }, setValue, reset } =
    useForm<BookingFormData>({
      resolver: zodResolver(bookingSchema),
    });

  const services = [
    "Hair Styling",
    "Hair Coloring",
    "Facial Treatment",
    "Makeup - Party",
    "Makeup - Bridal",
    "Manicure & Pedicure",
    "Spa Treatment",
    "Bridal Package",
    "Other",
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM",
  ];

  // Mutation
  const bookingMutation = useMutation({
    mutationFn: createBookingApi,
    onSuccess: () => {
      toast.success("Appointment request submitted!", {
        description: "We'll contact you shortly to confirm your booking.",
      });
      reset();
    },
    onError: () => {
      toast.error("Booking failed!", {
        description: "Please try again.",
      });
    },
  });

  const onSubmit = (data: BookingFormData) => {
    const payload = {
      service: data.service,
      date: data.date,
      time: data.time,
      phone: data.phone,
      notes: data.message || "",
    };

    bookingMutation.mutate(payload);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
            Book Your Appointment
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Schedule your beauty transformation with our expert professionals
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-elegant animate-fade-in">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-2">
                    Schedule Your Visit
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll confirm your appointment
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Enter your full name"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="your.email@example.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="(123) 456-7890"
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <Label htmlFor="service" className="flex items-center">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Select Service *
                    </Label>
                    <Select onValueChange={(value) => setValue("service", value)}>
                      <SelectTrigger
                        className={errors.service ? "border-destructive" : ""}
                      >
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="text-sm text-destructive">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Preferred Date *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        {...register("date")}
                        min={new Date().toISOString().split("T")[0]}
                        className={errors.date ? "border-destructive" : ""}
                      />
                      {errors.date && (
                        <p className="text-sm text-destructive">
                          {errors.date.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Preferred Time *
                      </Label>
                      <Select onValueChange={(value) => setValue("time", value)}>
                        <SelectTrigger
                          className={errors.time ? "border-destructive" : ""}
                        >
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.time && (
                        <p className="text-sm text-destructive">
                          {errors.time.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Notes (Optional)</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Any special requests or requirements?"
                      rows={4}
                      className={errors.message ? "border-destructive" : ""}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="luxury"
                    size="lg"
                    className="w-full"
                    disabled={bookingMutation.isLoading}
                  >
                    {bookingMutation.isLoading
                      ? "Submitting..."
                      : "Book Appointment"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll contact you within 24 hours to confirm your appointment
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-display font-bold mb-6">Need Help?</h2>
            <p className="text-muted-foreground mb-8">
              You can also reach us directly via phone or WhatsApp
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <a href="tel:+1234567890">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us: (123) 456-7890
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
