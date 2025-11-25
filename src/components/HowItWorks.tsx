import { useState } from "react";
import { MapPin, Sparkles, Send } from "lucide-react";
import StrategyCallForm from "./StrategyCallForm";

const HowItWorks = () => {
  const [strategyCallOpen, setStrategyCallOpen] = useState(false);
  const steps = [
    {
      number: 1,
      title: "Map your coursework → career project",
      description: "We help you identify projects from your studies that employers actually care about.",
      timeline: "Step 1",
      outcomes: ["Identify valuable coursework", "Transform academic projects", "Create compelling narratives"],
      color: "primary",
      Icon: MapPin
    },
    {
      number: 2,
      title: "Build your portfolio & get 1:1 coaching", 
      description: "Personalized sessions to polish your CV, LinkedIn, and interview prep.",
      timeline: "Step 2",
      outcomes: ["Professional portfolio", "Optimized CV & LinkedIn", "Interview confidence"],
      color: "secondary",
      Icon: Sparkles
    },
    {
      number: 3,
      title: "Apply with confidence",
      description: "Leave guesswork behind—apply with a portfolio and a strategy built for the German market.",
      timeline: "Step 3", 
      outcomes: ["Strategic applications", "German market expertise", "Higher interview rates"],
      color: "accent",
      Icon: Send
    }
  ];

  return (
    <>
      <StrategyCallForm 
        open={strategyCallOpen} 
        onOpenChange={setStrategyCallOpen}
      />
      <section id="how-it-works" className="section-padding bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" aria-labelledby="how-it-works-heading">
        <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-8 slide-in-up">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-in-up animate-delay-200">
              3 simple steps to transform your academic background into career success
            </p>
          </div>
          
          {/* Steps grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`bg-card rounded-2xl p-8 card-gradient hover-lift slide-in-up animate-delay-${(index + 1) * 200} text-center`}
              >
                <div className="flex justify-center mb-4">
                  <step.Icon className="w-10 h-10 text-primary" aria-hidden="true" />
                </div>
                <div className={`w-12 h-12 rounded-full bg-${step.color} flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {step.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground mb-3">Key Outcomes:</p>
                  {step.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start space-x-2 text-left">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 text-center border border-primary/20 slide-in-up animate-delay-600">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Ready to get started?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              Book your free strategy call to see how we can transform your academic background into career success.
            </p>
            <button 
              onClick={() => setStrategyCallOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
              aria-label="Book your free strategy call"
            >
              Book Your Free Strategy Call
            </button>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;