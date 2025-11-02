import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Award,
  Calendar,
  CheckCircle,
  Globe,
  Trophy,
  Users,
  FileText,
  Target,
  DollarSign,
  Plane
} from "lucide-react";
import competitionImage from "@/assets/competition-winner.jpg";

const MOSChampionship = () => {
  const timeline = [
    {
      phase: "Phase 1",
      title: "School Recruitment & Awareness",
      period: "October - December",
      description: "Information sessions at schools, registration opens, initial student outreach and engagement activities.",
      activities: ["School presentations", "Information booths", "Online webinars", "Q&A sessions"]
    },
    {
      phase: "Phase 2",
      title: "Certification Period",
      period: "January - March",
      description: "Students complete MOS certification exams in Word, Excel, or PowerPoint at authorized testing centers.",
      activities: ["Practice exams", "Training sessions", "Certification testing", "Score submissions"]
    },
    {
      phase: "Phase 3",
      title: "National Championship",
      period: "April",
      description: "Top scorers from each country compete in national finals to determine country representatives.",
      activities: ["National competition", "Live challenges", "Awards ceremony", "Media coverage"]
    },
    {
      phase: "Phase 4",
      title: "World Championship Finals",
      period: "July - August",
      description: "National champions travel to the United States for the ultimate showdown in the World Championship.",
      activities: ["International travel", "World finals", "Networking events", "Grand awards ceremony"]
    }
  ];

  const eligibility = [
    {
      icon: Users,
      title: "Student Status",
      requirement: "Must be currently enrolled in an accredited school",
      details: "Full-time or part-time enrollment accepted. Proof of enrollment required during registration."
    },
    {
      icon: Calendar,
      title: "Age Requirements",
      requirement: "Must be between 13-22 years old",
      details: "Age calculated as of the World Championship finals date. Valid ID required for verification."
    },
    {
      icon: FileText,
      title: "Certification",
      requirement: "Must achieve MOS certification in at least one application",
      details: "Choose from Word, Excel, or PowerPoint. Multiple certifications increase competitiveness."
    },
    {
      icon: Globe,
      title: "Citizenship",
      requirement: "No citizenship restrictions - open to all nationalities",
      details: "International students welcome. Travel documents required for World Finals participation."
    }
  ];

  const prizes = [
    {
      place: "1st Place",
      prize: "$7,000",
      color: "text-yellow-500",
      benefits: ["Gold trophy", "All-expenses-paid trip to World Finals", "Microsoft certification vouchers", "Media recognition"]
    },
    {
      place: "2nd Place",
      prize: "$3,500",
      color: "text-gray-400",
      benefits: ["Silver trophy", "Trip sponsorship to World Finals", "Microsoft software package", "Certificate of achievement"]
    },
    {
      place: "3rd Place",
      prize: "$1,500",
      color: "text-orange-600",
      benefits: ["Bronze trophy", "Partial travel support", "Training materials", "Recognition certificate"]
    },
    {
      place: "4th-10th Place",
      prize: "$500",
      color: "text-primary",
      benefits: ["Certificate of excellence", "Microsoft learning resources", "Networking opportunities", "LinkedIn recognition"]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Certify",
      description: "Pass the Microsoft Office Specialist certification exam in your chosen application (Word, Excel, or PowerPoint). Lotlite Technology provides comprehensive training to ensure your success.",
      icon: CheckCircle
    },
    {
      number: "02",
      title: "Compete",
      description: "Submit your certification score to enter the competition. Top scorers advance to the National Championship round where you'll compete against the best from your country.",
      icon: Target
    },
    {
      number: "03",
      title: "Nationals",
      description: "Compete in the National Championship finals. The highest-performing student from each country earns the right to represent their nation at the World Championship.",
      icon: Trophy
    },
    {
      number: "04",
      title: "World Finals",
      description: "Travel to the United States to compete against champions from over 100 countries in the ultimate test of Microsoft Office mastery. Win prizes, prestige, and global recognition.",
      icon: Globe
    }
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
              <span className="text-primary font-semibold">Competition Details</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              The <span className="gradient-text">MOS World Championship</span> Journey
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive guide to competition format, rules, timeline, and prizes. Everything you need to know
              about competing on the world's premier stage for Microsoft Office expertise.
            </p>
          </div>
        </div>
      </section>

      {/* What is MOS Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                What is <span className="gradient-text">MOS Certification?</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The Microsoft Office Specialist (MOS) certification is the world's premier credential for
                  validating expertise in Microsoft Office applications. Recognized globally by employers and
                  educational institutions, MOS certification demonstrates that you possess the skills necessary
                  to get the most out of Office.
                </p>
                <p>
                  Available for Microsoft Word, Excel, and PowerPoint across multiple Office versions, MOS
                  certification tests real-world application skills through performance-based exams. Unlike
                  traditional tests, you'll complete actual tasks in the live applications, proving you can
                  perform under real workplace conditions.
                </p>
                <p>
                  The MOS World Championship takes this a step further, challenging certified individuals to
                  compete in timed, high-pressure scenarios that mirror real business challenges. It's not just
                  about knowing the software—it's about mastery, speed, and excellence under pressure.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold">Word</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <FileText className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <p className="font-semibold">Excel</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold">PowerPoint</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 gradient-primary opacity-20 blur-3xl rounded-3xl" />
              <img
                src={competitionImage}
                alt="Competition winner celebrating"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Competition Steps */}
      <section className="section-padding circuit-bg">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              How to <span className="gradient-text">Compete</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow these four essential steps to go from certification to competing on the world stage
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="hover-lift overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-[auto,1fr] gap-6 items-center">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center">
                        <step.icon className="w-12 h-12 text-white" />
                      </div>
                      <span className="text-4xl font-bold gradient-text">{step.number}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-3xl font-bold">{step.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Competition <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mark your calendar with these key phases and dates for the MOS World Championship
            </p>
            <p className="text-sm text-muted-foreground italic">
              Note: Dates are approximate and based on typical championship schedules. Official dates will be confirmed annually.
            </p>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
                        <span className="text-sm font-semibold text-primary">{item.phase}</span>
                      </div>
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold">{item.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {item.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Eligibility <span className="gradient-text">Requirements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ensure you meet these criteria before registering for the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {eligibility.map((item, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-lg font-semibold text-primary">{item.requirement}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prize Breakdown */}
      <section className="section-padding circuit-pattern bg-accent text-accent-foreground">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Prize <span className="gradient-text">Breakdown</span>
            </h2>
            <p className="text-xl text-accent-foreground/80 max-w-3xl mx-auto">
              Compete for substantial cash prizes and life-changing opportunities at the World Championship Finals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {prizes.map((prize, index) => (
              <Card key={index} className="hover-lift bg-background">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{prize.place}</h3>
                    <div className="text-right">
                      <div className={`text-4xl font-bold ${prize.color}`}>{prize.prize}</div>
                      <div className="text-sm text-muted-foreground">Cash Prize</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {prize.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
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
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Start Your Competition Journey?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Register now and begin your path to becoming a Microsoft Office Specialist World Champion
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

export default MOSChampionship;

