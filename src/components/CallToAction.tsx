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
      
      <section className="section-padding bg-gradient-to-br from-primary/20 to-secondary/20" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Rocket className="w-12 h-12 text-primary" aria-hidden="true" />
            </div>
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-8 slide-in-up">
              Ready to land your first job in Germany?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 slide-in-up animate-delay-200">
              Join our community-supported program and transform your career journey.
            </p>
            <Button 
              variant="cta" 
              size="xl"
              className="slide-in-up animate-delay-300"
              onClick={() => setWaitlistOpen(true)}
              aria-label="Join the CareerLeap waitlist for free"
            >
              <Rocket className="w-5 h-5 mr-2" aria-hidden="true" />
              Join the Waitlist (Free)
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;