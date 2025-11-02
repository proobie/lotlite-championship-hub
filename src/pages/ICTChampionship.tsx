import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Cpu,
  ShieldCheck,
  Network,
  Users,
  Star,
  BookOpen
} from "lucide-react";
import ictImage from "@/assets/training-classroom.jpg";

const ICTChampionship = () => {
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
              The <span className="gradient-text">ICT Junior Championship</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building the Foundations of Tomorrow's Technologists
            </p>
          </div>
        </div>
      </section>

      {/* What is ICT Junior Championship Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                What is the <span className="gradient-text">ICT Junior Championship?</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The ICT Junior Championship is specifically designed to cultivate computational thinking and foundational IT knowledge in younger students. This competition covers essential concepts in Information and Communication Technology, focusing on topics like networking basics, hardware, software, security, and digital citizenship. It provides an engaging and standardized way for juniors to prove their grasp of the digital world.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 gradient-primary opacity-20 blur-3xl rounded-3xl" />
              <img
                src={ictImage}
                alt="Young students in a computer lab"
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
                <Cpu className="w-12 h-12 text-primary" />
                <CardTitle>Early Tech Advantage</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Develop a strong, early understanding of the principles that govern all modern technology.</p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary" />
                <CardTitle>Essential IT Literacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Gain confidence in navigating and understanding technical environments, crucial for success in future specialized tech fields.</p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardHeader>
                <Star className="w-12 h-12 text-primary" />
                <CardTitle>Pathway to Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Serves as a perfect stepping stone to the more advanced technology championships.</p>
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
              School students in the junior age group who are beginning their journey in technology and computer science.
            </p>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Build Your Tech Foundation?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Register for the ICT Junior Championship and start your journey in technology.
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

export default ICTChampionship;

