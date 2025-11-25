import { useState } from "react";
import { Sparkles, Users, Percent, Award, ArrowRight } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

const PilotOffer = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  return (
    <>
      <WaitlistForm 
        open={waitlistOpen} 
        onOpenChange={setWaitlistOpen}
        onStrategyCallRequest={() => {}}
      />
      <section className="section-padding bg-gradient-to-br from-accent/10 to-primary/10" aria-labelledby="pilot-heading">
        <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 card-gradient hover-lift text-center">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-12 h-12 text-accent" aria-hidden="true" />
            </div>
            <h2 id="pilot-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-8 slide-in-up">
              Pilot Cohort Launch
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-muted/30 rounded-xl p-6 slide-in-up animate-delay-200">
                <div className="flex justify-center mb-3">
                  <Users className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">First 10 Students</div>
                <p className="text-sm text-muted-foreground">Limited spots available</p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 slide-in-up animate-delay-300">
                <div className="flex justify-center mb-3">
                  <Percent className="w-8 h-8 text-secondary" aria-hidden="true" />
                </div>
                <div className="text-2xl font-bold text-secondary mb-2">Free Access</div>
                <p className="text-sm text-muted-foreground">Community-supported program</p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 slide-in-up animate-delay-400">
                <div className="flex justify-center mb-3">
                  <Award className="w-8 h-8 text-accent" aria-hidden="true" />
                </div>
                <div className="text-2xl font-bold text-accent mb-2">Lifetime Access</div>
                <p className="text-sm text-muted-foreground">Alumni support group</p>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-8 slide-in-up animate-delay-500">
              <p className="text-foreground font-medium">
                Community-driven mentorship from experienced professionals in Data, Risk & Business
              </p>
            </div>

            <button 
              onClick={() => setWaitlistOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-colors slide-in-up animate-delay-600 inline-flex items-center gap-2"
              aria-label="Apply to CareerLeap pilot cohort"
            >
              Apply Now – Limited Spots Available
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PilotOffer;