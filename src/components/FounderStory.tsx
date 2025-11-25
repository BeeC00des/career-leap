import { useState } from "react";
import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/WaitlistForm";
import StrategyCallForm from "@/components/StrategyCallForm";

const FounderStory = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [strategyCallOpen, setStrategyCallOpen] = useState(false);

  const whyWeBuilding = [
    {
      stat: "70%",
      description: "Of international students struggle to find jobs within 6 months",
      source: "DAAD Report 2024"
    },
    {
      stat: "€2.8B",
      description: "Lost potential in untapped international talent annually",
      source: "German Economic Institute"
    },
    {
      stat: "45%",
      description: "Skills gap exists in German companies seeking international talent",
      source: "McKinsey Global Institute"
    }
  ];

  const betaBenefits = [
    "Free access to the complete 8-week community-supported program",
    "Direct 1:1 mentorship with program founders",
    "Lifetime access to alumni network",
    "Shape the program development with your feedback",
    "Priority placement support even after graduation"
  ];

  return (
    <>
      <WaitlistForm 
        open={waitlistOpen} 
        onOpenChange={setWaitlistOpen}
        onStrategyCallRequest={() => setStrategyCallOpen(true)}
      />
      <StrategyCallForm 
        open={strategyCallOpen} 
        onOpenChange={setStrategyCallOpen}
      />
      
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Founder Story */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 slide-in-up">
                Why We're Building CareerLeap
              </h2>
            </div>
            
            {/* Market Reality */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {whyWeBuilding.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 card-gradient hover-lift slide-in-up text-center"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-4xl font-bold text-primary mb-4">{item.stat}</div>
                  <p className="text-foreground font-medium mb-3">{item.description}</p>
                  <p className="text-xs text-muted-foreground">{item.source}</p>
                </div>
              ))}
            </div>

            {/* The Vision */}
            <div className="bg-card rounded-3xl p-8 md:p-12 card-gradient hover-lift text-center mb-16 slide-in-up animate-delay-600">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                The Vision: Every Student Deserves a Clear Path to Success
              </h3>
              <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed mb-8">
                <p className="mb-6">
                  We've seen too many brilliant international students struggle not because they lack talent, 
                  but because they lack the right guidance, network, and understanding of the German job market.
                </p>
                <p className="mb-6">
                  CareerLeap isn't just another career service. We're building a systematic approach that transforms 
                  academic achievements into market-ready skills, German cultural understanding, and professional networks.
                </p>
                <p>
                  <strong>Our commitment:</strong> Make the path from graduation to employment predictable, 
                  supportive, and successful for every international student in Germany.
                </p>
              </div>
            </div>

            {/* Beta Program Call to Action */}
            <div className="bg-card rounded-3xl p-8 md:p-12 card-gradient text-center hover-lift slide-in-up animate-delay-800">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Be Part of the Solution: Join Our Beta Program
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're looking for 50 ambitious international students to help us perfect this program. 
                In return, you get everything for free.
              </p>
              
              {/* Beta Benefits */}
              <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
                <h4 className="text-xl font-bold text-secondary mb-4">What Beta Students Get:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  {betaBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-secondary font-bold mt-1">✓</div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button 
                  size="xl"
                  className="text-lg px-8 py-4 pulse-glow"
                  onClick={() => setWaitlistOpen(true)}
                >
                  Apply for Early Access
                </Button>
                
                <Button 
                  variant="outline"
                  size="xl"
                  className="text-lg px-8 py-4"
                  onClick={() => setStrategyCallOpen(true)}
                >
                  Schedule Discovery Call
                </Button>
              </div>
              
              {/* Launch Timeline */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Timeline:</strong> Applications close November 2025 • Program starts January 2026
                </p>
                <p className="text-xs text-muted-foreground">
                  Early applicants get priority consideration and onboarding support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FounderStory;