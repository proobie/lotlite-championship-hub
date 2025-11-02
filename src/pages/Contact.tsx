import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

const GOOGLE_APPS_SCRIPT_URL = (import.meta as any).env?.VITE_GSHEET_WEB_APP_URL || "";
const GOOGLE_APPS_SCRIPT_URL_CONTACT = (import.meta as any).env?.VITE_GSHEET_WEB_APP_URL_CONTACT || GOOGLE_APPS_SCRIPT_URL;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!GOOGLE_APPS_SCRIPT_URL_CONTACT) {
      toast({
        title: "Missing Google Sheets URL",
        description: "Please set VITE_GSHEET_WEB_APP_URL in your environment.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        formType: "contact",
        sheetName: "Sheet2",
        timestamp: new Date().toISOString(),
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await fetch(GOOGLE_APPS_SCRIPT_URL_CONTACT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll respond within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Submission Failed",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "s.kumar@lotlitetechnology.com",
      secondary: "",
      description: "For general inquiries and support",
      link: "mailto:s.kumar@lotlitetechnology.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 9766499364",
      secondary: "",
      description: "Monday - Friday, 9:00 AM - 6:00 PM",
      link: "tel:+919766499364"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "B1-0302, Floor (-2), Blue Ridge Township, Hinjewadi Phase-1, Pune-411057",
      secondary: "B1-0302, Floor (-2), Blue Ridge Township, Hinjewadi Phase-1, Pune-411057",
      description: "By appointment only",
      link: "#map"
    },
    {
      icon: Clock,
      title: "Office Hours",
      primary: "Monday - Friday",
      secondary: "9:00 AM - 6:00 PM EST",
      description: "Weekend support via email",
      link: null
    }
  ];

  const officeLocations = [
    {
      name: "Main Office",
      address: "B1-0302, Floor (-2), Blue Ridge Township, Hinjewadi Phase-1, Pune-411057",
      phone: "+91 9766499364",
      email: "s.kumar@lotlitetechnology.com"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 circuit-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about MOS certification, training programs, or the World Championship?
              Our team is here to help you succeed. Reach out through any of our communication channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mx-auto">
                    <method.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">{method.title}</h3>
                    {method.link ? (
                      <a
                        href={method.link}
                        className="block text-primary hover:underline font-semibold"
                      >
                        {method.primary}
                      </a>
                    ) : (
                      <p className="text-primary font-semibold">{method.primary}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{method.secondary}</p>
                    <p className="text-xs text-muted-foreground italic">{method.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding circuit-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center space-x-2">
                    <MessageSquare className="w-7 h-7 text-primary" />
                    <span>Send Us a Message</span>
                  </CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and our team will respond within 24 hours during business days
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base">
                        Your Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="h-12 text-base"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="h-12 text-base"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-base">
                        Subject <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        required
                        value={formData.subject}
                        onValueChange={(value) => handleInputChange("subject", value)}
                      >
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="partnership">School Partnership</SelectItem>
                          <SelectItem value="training">Training Programs</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="registration">Registration Assistance</SelectItem>
                          <SelectItem value="competition">Competition Information</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="min-h-[150px] text-base resize-none"
                      />
                      <p className="text-sm text-muted-foreground">
                        Please provide as much detail as possible to help us assist you better
                      </p>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gradient-primary text-white font-semibold text-lg h-14"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Office Locations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Office Locations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {officeLocations.map((location, index) => (
                    <div key={index} className="space-y-2 pb-6 border-b last:border-0 last:pb-0">
                      <h4 className="font-bold text-lg text-primary">{location.name}</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <p>{location.address}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 flex-shrink-0" />
                          <a href={`tel:${location.phone}`} className="hover:text-primary">
                            {location.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 flex-shrink-0" />
                          <a href={`mailto:${location.email}`} className="hover:text-primary">
                            {location.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Response */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-bold text-lg">Quick Response Guarantee</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We understand that time is valuable. Our team commits to responding to all inquiries
                    within 24 hours during business days. For urgent matters, please call our main office line.
                  </p>
                </CardContent>
              </Card>

              {/* Partnership Info */}
              <Card className="bg-secondary/5 border-secondary/20">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-bold text-lg">School Partnerships</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We partner with educational institutions to bring MOS certification and championship
                    opportunities to students. Contact us to discuss how we can collaborate with your school.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Partnership Inquiries
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted/30" id="map">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Visit Our <span className="gradient-text">Main Office</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Schedule an appointment to visit our training facility and meet our team in person
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="p-4 text-center space-y-1">
              <h3 className="font-bold text-xl">Lotlite Technology Main Office</h3>
              <p className="text-muted-foreground text-sm">
                B1-0302, Floor (-2), Blue Ridge Township, Hinjewadi Phase-1, Pune-411057
              </p>
            </div>
            <div className="w-full h-64 md:h-80">
              <iframe
                title="Lotlite Technology Main Office Map"
                src="https://www.google.com/maps?q=B1-0302%2C%20Floor%20%28-2%29%2C%20Blue%20Ridge%20Township%2C%20Hinjewadi%20Phase-1%2C%20Pune-411057&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="p-4 text-center">
              <Button asChild variant="outline">
                <a href="https://www.google.com/maps/search/?api=1&query=B1-0302%2C%20Floor%20%28-2%29%2C%20Blue%20Ridge%20Township%2C%20Hinjewadi%20Phase-1%2C%20Pune-411057" target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="section-padding gradient-primary text-white circuit-pattern">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Need Immediate Answers?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Check out our comprehensive FAQ section or explore our resources page for detailed information
            about training programs, certification, and the championship process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 font-semibold">
              <a href="/resources#faq">View FAQ</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
