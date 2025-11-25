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

      <section
        className="section-padding bg-gradient-to-b from-primary/5 via-background to-background"
        aria-labelledby="pilot-heading"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-3xl shadow-xl p-10 md:p-14 border border-border/40 backdrop-blur-xl">
              <div className="flex justify-center mb-6">
                <Sparkles className="w-14 h-14 text-primary drop-shadow-md" />
              </div>

              <h2
                id="pilot-heading"
                className="text-center text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-10"
              >
                Pilot Cohort Launch
              </h2>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-muted/20 border border-border/30 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-3">
                    <Users className="w-9 h-9 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">First 10 Students</div>
                  <p className="text-sm text-muted-foreground">Limited spots available</p>
                </div>

                <div className="bg-muted/20 border border-border/30 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-3">
                    <Percent className="w-9 h-9 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">Free Access</div>
                  <p className="text-sm text-muted-foreground">Community-supported program</p>
                </div>

                <div className="bg-muted/20 border border-border/30 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-3">
                    <Award className="w-9 h-9 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">Lifetime Access</div>
                  <p className="text-sm text-muted-foreground">Alumni support group</p>
                </div>
              </div>

              {/* Highlight Banner */}
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-10 text-center">
                <p className="text-lg font-medium text-foreground">
                  Community-driven mentorship from experienced professionals in
                  Data, Risk & Business
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button
                  onClick={() => setWaitlistOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-2xl font-semibold text-lg transition-all shadow-md hover:shadow-xl inline-flex items-center gap-2"
                >
                  Apply Now – Limited Spots Available
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PilotOffer;
