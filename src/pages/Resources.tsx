import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Award,
  HelpCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const Resources = () => {


  const faqs = [
    {
      question: "What is the age limit for the competitions?",
      answer: "The Microsoft Office Specialist (MOS) and Adobe Certified Professional (ACP) championships are open to students aged 13 to 22. The ICT Junior Championship is designed for younger students in the junior school age group. The AI Hackathon is for advanced students and young developers, and while there is no strict age limit, participants are typically in higher education or early in their careers."
    },
    {
        question: "Do I need to be certified to compete?",
        answer: "For the MOS and ACP championships, you must achieve the relevant certification to be eligible to compete. The ICT Junior Championship is focused on foundational knowledge and may not require prior certification. The AI Hackathon is a project-based competition that values practical skills and a strong portfolio over formal certifications."
    },
    {
      question: "What are the costs associated with the competitions?",
      answer: "Costs can vary. For certification-based competitions like MOS and ACP, there are fees for certification exams. Competition registration fees may also apply. The AI Hackathon may have a team registration fee. Lotlite Technology offers various training packages that can help you prepare and may include exam vouchers or discounts. Please check the specific page for each competition for detailed information."
    },
    {
      question: "Can I participate in more than one competition?",
      answer: "Absolutely! We encourage students to participate in any competition that aligns with their skills and interests. Many skills are transferable, and competing in multiple events is a great way to build a diverse portfolio and showcase a wide range of talents."
    },
    {
        question: "What kind of support and training do you offer?",
        answer: "Lotlite Technology provides comprehensive training and support for all our championships. We offer expert-led training sessions, access to official practice materials, personalized coaching, and flexible learning schedules. Our goal is to ensure you are not just prepared, but championship-ready."
    },
    {
      question: "What are the prizes for the winners?",
      answer: "Prizes vary by competition and can include cash awards, scholarships, all-expenses-paid trips to world finals, industry-recognized certifications, and cutting-edge tech gadgets. Winning also provides significant global recognition and can attract attention from universities and potential employers. The MOS championship, for example, offers a top prize of $7,000."
    },
    {
        question: "How are the competitions structured?",
        answer: "The MOS and ACP championships typically involve a certification period followed by national and world championship events. The ICT Junior Championship focuses on foundational IT concepts. The AI Hackathon is a high-intensity, team-based event where participants build and present a functional AI prototype within a tight deadline to solve a real-world problem."
    },
    {
      question: "Where do the competitions take place?",
      answer: "Initial rounds and certifications can often be completed at authorized testing centers in your country. National championships are held locally, and the World Championship finals for competitions like MOS and ACP are major international events, often held in the United States. The AI Hackathon may be held at a specific venue or virtually. Check each competition's details for specific location information."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />



      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our training programs, certifications, and championships.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-start space-x-4 pr-4">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="font-semibold text-lg">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-9">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white circuit-pattern">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Start Your Championship Journey?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join hundreds of successful students who have achieved certification and competed at the championship level with Lotlite Technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-semibold">
                Register Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white/20">
                Speak with an Advisor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
