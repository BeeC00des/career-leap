import { useState } from "react";
import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/WaitlistForm";
import { Rocket } from "lucide-react";

const CallToAction = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <>
      <WaitlistForm
        open={waitlistOpen}
        onOpenChange={setWaitlistOpen}
        onStrategyCallRequest={() => {}}
      />

      <section
        className="section-padding bg-gradient-to-b from-primary/10 via-background to-background"
        aria-labelledby="cta-heading"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="bg-primary/10 p-5 rounded-2xl shadow-inner border border-primary/20">
                <Rocket className="w-12 h-12 text-primary" />
              </div>
            </div>

            {/* Heading */}
            <h2
              id="cta-heading"
              className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground"
            >
              Ready to land your first job in Germany?
            </h2>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              Join our community-supported program and transform your career journey.
            </p>

            {/* CTA Button */}
            <Button
              variant="cta"
              size="xl"
              className="rounded-2xl text-white bg-primary px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              onClick={() => setWaitlistOpen(true)}
              aria-label="Join the CareerLeap waitlist for free"
            >
              <Rocket className="w-6 h-6" />
              Join the Waitlist (Free)
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
