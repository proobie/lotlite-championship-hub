import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BrainCircuit,
  Lightbulb,
  Users,
  TrendingUp,
  Code
} from "lucide-react";
import aiImage from "@/assets/hero-students.jpg";

const AIHackathon = () => {
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
              The <span className="gradient-text">AI Hackathon</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Innovate the Future: The High-Stakes Artificial Intelligence Challenge
            </p>
          </div>
        </div>
      </section>

      {/* What is AI Hackathon Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                What is the <span className="gradient-text">AI Hackathon?</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The AI Hackathon is a high-intensity, project-based competition where teams conceptualize, design, and prototype AI solutions to solve complex, real-world problems within a tight deadline. This championship goes beyond theoretical knowledge, demanding practical application of machine learning, data science, and ethical AI principles. Lotlite Technology fully supports this event as the pinnacle of cutting-edge technology application.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 gradient-primary opacity-20 blur-3xl rounded-3xl" />
              <img
                src={aiImage}
                alt="Students working on AI projects"
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
                <Code className="w-12 h-12 text-primary" />
                <CardTitle>Practical AI Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Gain invaluable, hands-on experience by working with real datasets and developing functional AI models.</p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardHeader>
                <Users className="w-12 h-12 text-primary" />
                <CardTitle>Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Develop essential teamwork, rapid prototyping, and presentation skills—the core competencies of modern tech innovation.</p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary" />
                <CardTitle>Attract Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Winners and high-performing teams often catch the eye of industry leaders, venture capitalists, and partner companies like Lotlite Technology for future opportunities.</p>
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
              Advanced students and young developers with programming, data science, and engineering backgrounds who are ready to apply their knowledge to solve global challenges using Artificial Intelligence.
            </p>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Innovate with AI?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join the AI Hackathon and build solutions for tomorrow's challenges.
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

export default AIHackathon;

