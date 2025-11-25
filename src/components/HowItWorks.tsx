import { useState } from "react";
import { MapPin, Sparkles, Send } from "lucide-react";
import StrategyCallForm from "./StrategyCallForm";

const HowItWorks = () => {
  const [strategyCallOpen, setStrategyCallOpen] = useState(false);

  const steps = [
    {
      number: 1,
      title: "Map your coursework → career project",
      description:
        "We help you identify projects from your studies that employers actually care about.",
      outcomes: [
        "Identify valuable coursework",
        "Transform academic projects",
        "Create compelling narratives"
      ],
      Icon: MapPin
    },
    {
      number: 2,
      title: "Build your portfolio & get 1:1 coaching",
      description:
        "Personalized sessions to polish your CV, LinkedIn, and interview prep.",
      outcomes: [
        "Professional portfolio",
        "Optimized CV & LinkedIn",
        "Interview confidence"
      ],
      Icon: Sparkles
    },
    {
      number: 3,
      title: "Apply with confidence",
      description:
        "Leave guesswork behind—apply with a portfolio and a strategy built for the German market.",
      outcomes: [
        "Strategic applications",
        "German market expertise",
        "Higher interview rates"
      ],
      Icon: Send
    }
  ];

  return (
    <>
      <StrategyCallForm open={strategyCallOpen} onOpenChange={setStrategyCallOpen} />

      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-b from-muted/20 via-background to-muted/10"
        aria-labelledby="how-it-works-heading"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-10">
            <h2
              id="how-it-works-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6"
            >
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              3 simple steps to transform your academic background into career success
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-3xl bg-card border border-border/60 shadow-sm hover:shadow-xl transition-all duration-300 p-10 text-center backdrop-blur-sm group"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <step.Icon className="w-9 h-9 text-primary" />
                  </div>
                </div>

                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold shadow mb-6">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4 leading-snug">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                  {step.description}
                </p>

                <div className="text-left space-y-3">
                  <p className="text-sm font-semibold text-foreground">Key Outcomes:</p>
                  {step.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5" />
                      <span className="text-sm text-muted-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-3xl p-10 md:p-14 text-center shadow-md">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to get started?
            </h3>
            <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto mb-10">
              Book your free strategy call to see how we can transform your academic background into career success.
            </p>
            <button
              onClick={() => setStrategyCallOpen(true)}
              className="px-10 py-4 rounded-xl bg-white hover:bg-white text-black font-semibold text-lg shadow hover:bg-primary/90 transition-colors"
            >
              Book Your Free Strategy Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;