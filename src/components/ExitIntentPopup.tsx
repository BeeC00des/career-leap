import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
// import { supabase } from "@/integrations/supabase/client";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    let hasShown = sessionStorage.getItem("exitIntentShown");
    
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves from top of page
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    // Wait 10 seconds before activating exit intent
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // const { error } = await supabase.from('waitlist_submissions').insert({
      //   email: email,
      //   full_name: 'Exit Intent Subscriber',
      //   phone: '',
      //   location: '',
      //   university: '',
      //   current_status: 'other',
      //   field_of_study: '',
      //   career_challenge: 'Captured via exit intent popup',
      //   wants_strategy_call: false,
      // });

      // if (error) throw error;

      toast({
        title: "Success! 🎉",
        description: "Check your email for your free career guide and early access details.",
      });

      setIsOpen(false);
    } catch (error) {
      console.error("Exit intent submission error:", error);
      toast({
        title: "Submission failed",
        description: "Please try again or join our waitlist directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          aria-label="Close exit intent popup"
        >
          <X className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-accent/10 rounded-full">
              <Gift className="w-12 h-12 text-accent" aria-hidden="true" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl font-bold">
            Wait! Don't Leave Empty-Handed
          </DialogTitle>
          <DialogDescription className="text-center">
            Get our <span className="font-semibold text-primary">FREE Career Breakthrough Guide</span> for international students in Germany
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="bg-primary/5 rounded-lg p-4 space-y-2">
            <p className="text-sm font-medium text-foreground">Inside this guide:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Top 5 mistakes international students make</li>
              <li>✓ How to transform coursework into portfolio projects</li>
              <li>✓ German CV template and LinkedIn checklist</li>
              <li>✓ Salary negotiation tips for German market</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Me the Free Guide"}
            </Button>
          </form>

          <p className="text-xs text-center text-muted-foreground">
            Plus, get priority access to our beta program
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
