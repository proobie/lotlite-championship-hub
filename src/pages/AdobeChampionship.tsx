import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Brush,
  Zap,
  Award,
  Users,
  Briefcase,
  Layers
} from "lucide-react";
import adobeImage from "@/assets/hero-students.jpg";

const AdobeChampionship = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 circuit-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold">Competition Details</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              The <span className="gradient-text">Adobe Certified Professional (ACP) Championship</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Igniting Creativity: The Ultimate Digital Design Showcase
            </p>
          </div>
        </div>
      </section>

      {/* What is ACP Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                What is the <span className="gradient-text">ACP Championship?</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The ACP Championship is the premier event for young designers and aspiring content creators. It challenges students to demonstrate mastery in Adobe's industry-leading software, including Photoshop, Illustrator, and InDesign. Competitors use their technical skills and creative vision to design compelling projects that address real-world scenarios.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 gradient-primary opacity-20 blur-3xl rounded-3xl" />
              <img
                src={adobeImage}
                alt="Students collaborating on a design project"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Participate Section */}
      <section className="section-padding circuit-bg">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why <span className="gradient-text">Participate?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <Award className="w-12 h-12 text-primary" />
                <CardTitle>Industry Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Achieve the highly sought-after Adobe Certified Professional status, making you a recognized expert in digital media creation.</p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardHeader>
                <Briefcase className="w-12 h-12 text-primary" />
                <CardTitle>Build Your Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Create powerful, project-based work under pressure that serves as an excellent foundation for a professional design portfolio.</p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary" />
                <CardTitle>Unleash Your Potential</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Showcase your artistic talent and technical precision on a global stage, attracting attention from top design institutions and creative agencies.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom text-center">
            <Users className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Target Audience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Students passionate about graphic design, video editing, web development, and digital arts, aiming to become professional content creators and visual communicators.
            </p>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Showcase Your Creativity?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Register now and take the first step towards becoming an Adobe Certified Professional Champion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-semibold">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdobeChampionship;

