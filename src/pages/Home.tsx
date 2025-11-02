import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Trophy, Globe, Award, TrendingUp, Users, DollarSign, Calendar, CheckCircle, BrainCircuit, Brush, Cpu } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const Home = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Compete on the world stage against top performers from over 100 countries. Your achievement will be recognized internationally by employers and academic institutions.",
    },
    {
      icon: TrendingUp,
      title: "Career Edge",
      description: "Our certifications are industry-recognized proof of your expertise. Stand out in job applications and demonstrate real, verifiable skills that employers value.",
    },
    {
      icon: Award,
      title: "Scholarship Opportunities",
      description: "Win cash prizes and gain access to exclusive scholarship opportunities from our partners and sponsors worldwide.",
    },
    {
      icon: CheckCircle,
      title: "Verifiable Skill Certification",
      description: "Earn official certifications that validate your proficiency in essential tech and creative skills for success in any modern workplace.",
    },
  ];

  const stats = [
    {
      number: "500K+",
      label: "Annual Participants Worldwide",
      description: "Join a global community of ambitious students",
    },
    {
      number: "$7,000",
      label: "Top Prize in MOS Championship",
      description: "Plus travel to the finals in the United States",
    },
    {
        number: "4",
        label: "Flagship Competitions",
        description: "Covering Productivity, Design, IT, and AI",
    },
  ];
  
  const competitions = [
    {
      icon: Trophy,
      title: "Microsoft Office Specialist (MOS) Championship",
      description: "The world's most popular competition testing students' proficiency in Microsoft Office applications: Word, Excel, and PowerPoint.",
      link: "/mos-championship",
    },
    {
      icon: Brush,
      title: "Adobe Certified Professional (ACP) Championship",
      description: "The premier event for young designers, challenging students to demonstrate mastery in Adobe's industry-leading software.",
      link: "/adobe-championship",
    },
    {
      icon: Cpu,
      title: "ICT Junior Championship",
      description: "Designed to cultivate computational thinking and foundational IT knowledge in younger students, covering networking, security, and more.",
      link: "/ict-championship",
    },
    {
      icon: BrainCircuit,
      title: "AI Hackathon",
      description: "A high-intensity, project-based competition where teams conceptualize, design, and prototype AI solutions to solve real-world problems.",
      link: "/ai-hackathon",
    },
  ];

  const advantages = [
    "Expert-led training sessions tailored for competition success",
    "Access to official Certiport practice exams and study materials",
    "Personalized coaching and mentorship throughout your journey",
    "Flexible learning schedules designed for busy students",
    "Internal competitions and mock exams to test your readiness",
    "Direct support from certification specialists and former champions",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 min-h-screen flex items-center circuit-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-text">Showcase Your Skills.</span>
                  <br />
                  <span className="text-foreground">Become a Technology</span>
                  <br />
                  <span className="gradient-text">World Champion.</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Lotlite Technology is your official gateway to earning global recognition and career advantage
                  through our world-class technology and creativity competitions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="gradient-primary text-white font-semibold text-lg px-8 py-6 hover:opacity-90 transition-opacity">
                    Register Now
                  </Button>
                </Link>
                <a href="#competitions">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-muted">
                    Explore Competitions
                  </Button>
                </a>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">Join 500K+ Students</p>
                  <p className="text-sm text-muted-foreground">Competing worldwide this year</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 gradient-primary opacity-20 blur-3xl rounded-3xl" />
              <img
                src={heroImage}
                alt="Students collaborating on technology"
                className="relative rounded-2xl shadow-2xl w-full h-auto hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <h3 className="text-5xl md:text-6xl font-bold gradient-text stat-glow">
                  {stat.number}
                </h3>
                <p className="text-xl font-semibold text-white">{stat.label}</p>
                <p className="text-accent-foreground/80">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section id="competitions" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="gradient-text">Championships</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We host a range of prestigious competitions designed to certify skills, foster creativity, and launch careers in the digital economy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {competitions.map((comp, index) => (
              <Card key={index} className="hover-lift flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <comp.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{comp.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground leading-relaxed flex-grow">{comp.description}</p>
                  <Link to={comp.link} className="mt-6">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Compete Section */}
      <section className="section-padding circuit-bg">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why <span className="gradient-text">Compete With Us?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our championships are more than a competition—they are a launchpad
              for your future career and a testament to your digital excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-lift border-2">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Lotlite Advantage */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-primary font-semibold">Your Success Partner</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  The <span className="gradient-text">Lotlite Technology</span> Advantage
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  As an authorized training and certification partner, Lotlite Technology provides comprehensive support
                  to ensure you're not just prepared—you're championship-ready. Our proven methodology
                  has helped hundreds of students achieve certification success and competition excellence.
                </p>
              </div>

              <div className="space-y-3">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-foreground">{advantage}</p>
                  </div>
                ))}
              </div>

              <Link to="/resources">
                <Button size="lg" variant="outline" className="border-2">
                  Explore Training Programs
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="hover-lift">
                <CardContent className="p-6 space-y-3">
                  <Trophy className="w-10 h-10 text-primary" />
                  <h4 className="font-bold text-2xl">95%</h4>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </CardContent>
              </Card>
              <Card className="hover-lift mt-8">
                <CardContent className="p-6 space-y-3">
                  <Users className="w-10 h-10 text-secondary" />
                  <h4 className="font-bold text-2xl">5000+</h4>
                  <p className="text-sm text-muted-foreground">Students Trained</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="p-6 space-y-3">
                  <Award className="w-10 h-10 text-primary" />
                  <h4 className="font-bold text-2xl">50+</h4>
                  <p className="text-sm text-muted-foreground">Competition Winners</p>
                </CardContent>
              </Card>
              <Card className="hover-lift mt-8">
                <CardContent className="p-6 space-y-3">
                  <Calendar className="w-10 h-10 text-secondary" />
                  <h4 className="font-bold text-2xl">5+</h4>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white circuit-pattern">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Begin Your Championship Journey?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Registration is open now. Don't miss this opportunity to compete on the world stage,
            gain invaluable skills, and potentially win life-changing prizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-semibold">
                Register for Competition
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white/20">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
