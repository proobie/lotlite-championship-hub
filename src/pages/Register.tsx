import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Shield, Clock, Award } from "lucide-react";

const GOOGLE_APPS_SCRIPT_URL = (import.meta as any).env?.VITE_GSHEET_WEB_APP_URL || "";

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    school: "",
    grade: "",
    mosSubject: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to receive communications to proceed with registration.",
        variant: "destructive",
      });
      return;
    }

    if (!GOOGLE_APPS_SCRIPT_URL) {
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
        timestamp: new Date().toISOString(),
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        school: formData.school,
        grade: formData.grade,
        mosSubject: formData.mosSubject,
        consent: formData.consent,
      };

      // Use no-cors to avoid CORS issues with Apps Script. This will send the data
      // but returns an opaque response which we treat as success.
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Registration Submitted!",
        description: "We received your details. A Lotlite representative will contact you within 24 hours.",
      });
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Submission Failed",
        description: "Please check your internet connection and try again.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };



  const nextSteps = [
    {
      icon: CheckCircle,
      title: "Confirmation Call",
      description: "Within 24 hours, a Lotlite representative will contact you to verify your information and answer any questions you may have about the program.",
      time: "24 hours"
    },
    {
      icon: Award,
      title: "Eligibility Assessment",
      description: "We'll confirm your student status and help you determine the best training program based on your current skill level and championship goals.",
      time: "2-3 days"
    },
    {
      icon: Clock,
      title: "Program Enrollment",
      description: "Once confirmed, you'll receive access to your chosen training program, study materials, and your personalized preparation roadmap.",
      time: "3-5 days"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navigation />

        <section className="pt-32 pb-20 min-h-screen flex items-center circuit-pattern">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <Card className="border-2 border-primary">
                <CardHeader className="text-center pb-8">
                  <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-4xl mb-4">Registration Successful!</CardTitle>
                  <CardDescription className="text-lg">
                    Thank you for registering with Lotlite Technology for the MOS World Championship.
                    Your journey to becoming a certified Microsoft Office Specialist begins now.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="bg-primary/5 p-6 rounded-xl">
                    <h3 className="font-bold text-xl mb-4">What Happens Next?</h3>
                    <div className="space-y-6">
                      {nextSteps.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <step.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-lg">{step.title}</h4>
                              <span className="text-sm text-muted-foreground">{step.time}</span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      In the meantime, feel free to explore our resources or contact us with any questions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild variant="outline">
                        <a href="/resources">View Training Resources</a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href="/contact">Contact Support</a>
                      </Button>
                      <Button asChild className="gradient-primary text-white">
                        <a href="/">Return Home</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 circuit-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold">Registration</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Begin Your <span className="gradient-text">Championship Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Register now to join the MOS World Championship and receive expert training from Lotlite Technology.
              Complete the form below to get started.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Registration Form</CardTitle>
                  <CardDescription className="text-base">
                    Fill out all required fields to complete your registration. All information is kept confidential
                    and used solely for program enrollment and communication purposes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-base">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full legal name"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
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
                      <p className="text-sm text-muted-foreground">
                        We'll send program updates and important information to this email
                      </p>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (234) 567-8900"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="h-12 text-base"
                      />
                    </div>

                    {/* School Name */}
                    <div className="space-y-2">
                      <Label htmlFor="school" className="text-base">
                        School Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="school"
                        type="text"
                        placeholder="Enter your school name"
                        required
                        value={formData.school}
                        onChange={(e) => handleInputChange("school", e.target.value)}
                        className="h-12 text-base"
                      />
                    </div>

                    {/* Grade Level */}
                    <div className="space-y-2">
                      <Label htmlFor="grade" className="text-base">
                        Grade Level <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="grade"
                        type="text"
                        placeholder="Enter your grade level"
                        required
                        value={formData.grade}
                        onChange={(e) => handleInputChange("grade", e.target.value)}
                        className="h-12 text-base"
                      />
                    </div>

                    {/* MOS Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="mosSubject" className="text-base">
                        MOS Subject of Interest <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        required
                        value={formData.mosSubject}
                        onValueChange={(value) => handleInputChange("mosSubject", value)}
                      >
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select your preferred application" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="word">Microsoft Word</SelectItem>
                          <SelectItem value="excel">Microsoft Excel</SelectItem>
                          <SelectItem value="powerpoint">Microsoft PowerPoint</SelectItem>
                          <SelectItem value="multiple">Multiple Applications</SelectItem>
                          <SelectItem value="undecided">Undecided - Need Guidance</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground">
                        You can certify in multiple applications—this helps us recommend the best starting point
                      </p>
                    </div>

                    {/* Consent */}
                    <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                        className="mt-1"
                      />
                      <div className="space-y-1">
                        <Label
                          htmlFor="consent"
                          className="text-sm font-normal leading-relaxed cursor-pointer"
                        >
                          I agree to receive communications from Lotlite Technology regarding the MOS Championship,
                          training programs, and related opportunities. I understand that I can unsubscribe at any time.
                          By submitting this form, I acknowledge that I have read and agree to Lotlite Technology's{" "}
                          <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gradient-primary text-white font-semibold text-lg h-14"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Complete Registration"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Secure & Confidential</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your information is encrypted and stored securely. We never share your personal data with
                    third parties without your explicit consent.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">Quick Response</p>
                      <p className="text-sm text-muted-foreground">
                        Confirmation within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">Personalized Consultation</p>
                      <p className="text-sm text-muted-foreground">
                        One-on-one program planning
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">Immediate Access</p>
                      <p className="text-sm text-muted-foreground">
                        Training materials upon enrollment
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-bold text-lg">Need Assistance?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Have questions about the registration process or program options? Our enrollment specialists
                    are ready to help.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/contact">Contact Support</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
