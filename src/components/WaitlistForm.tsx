import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import supabase from "@/config/supabaseclient";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  location: z.string().min(2, "Please enter your location"),
  university: z.string().min(2, "Please enter your university"),
  currentStatus: z.enum(["final-year-student", "recent-graduate", "career-changer", "other"]),
  fieldOfStudy: z.string().min(2, "Please enter your field of study or career interest"),
  careerChallenge: z.string().optional(),
  wantsStrategyCall: z.enum(["yes", "no"]),
});

interface WaitlistFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStrategyCallRequest: () => void;
}

const WaitlistForm = ({ open, onOpenChange, onStrategyCallRequest }: WaitlistFormProps) => {
  // console.log(supabase);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      university: "",
      fieldOfStudy: "",
      careerChallenge: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      if (!values) {
        toast({
          title: "Missing fields",
          description: "Please fill in all input fields.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
      console.log("Waitlist form submitted:", values);

      // Direct insert into database (edge function optional)
      const { data: dbData, error: dbError } = await supabase
      .from('careerleap')
      .insert({
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        location: values.location,
        university: values.university,
        currentStatus: values.currentStatus,
        fieldOfStudy: values.fieldOfStudy,
        careerChallenge: values.careerChallenge,
        wantsStrategyCall: values.wantsStrategyCall,
      });
      if (dbError) {
        console.log(dbError)
        throw dbError;
      } 

      if(dbData) {
        console.log(dbData)
      }

      setIsSubmitted(true);
      toast({
        title: "Welcome to the waitlist! 🎉",
        description: "Check your email for confirmation. We'll be in touch soon!",
      });

      // If user wants strategy call, show that form
      if (values.wantsStrategyCall === "yes") {
        setTimeout(() => {
          onOpenChange(false);
          onStrategyCallRequest();
        }, 2000);
      }
    } catch (error: any) {
      console.error("Error submitting waitlist form:", error);
      toast({
        title: "Submission failed",
        description: error?.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setIsSubmitted(false);
    form.reset();
  };

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-primary">
              Thanks for joining the waitlist!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <p className="text-muted-foreground mb-6">We'll be in touch soon with early access and program updates.</p>
            {form.getValues("wantsStrategyCall") === "yes" && (
              <p className="text-sm text-muted-foreground">Taking you to book your strategy call...</p>
            )}
            {form.getValues("wantsStrategyCall") === "no" && (
              <Button onClick={onStrategyCallRequest} variant="outline">
                Want to get started now? Book a free strategy call →
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Join the CareerLeap Waitlist</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Want early access to our career breakthrough program? Join the waitlist to be the first to know when we
            launch.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+49 123 456 7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Where are you currently based?</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Berlin, Hamburg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="university"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current/Previous University</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. University of Berlin, TU Munich" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="currentStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your current status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="final-year-student">Final-year student</SelectItem>
                      <SelectItem value="recent-graduate">Recent graduate</SelectItem>
                      <SelectItem value="career-changer">Career changer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fieldOfStudy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field of Study / Career Interest</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Computer Science, Marketing, Finance" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="careerChallenge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What's your biggest career challenge right now? (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g. CV not getting noticed, no portfolio, unclear job path, etc."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="wantsStrategyCall"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Would you like to book a free strategy call?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select yes or no" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="yes">Yes, I'd like a strategy call</SelectItem>
                      <SelectItem value="no">No, just the waitlist for now</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Submitting...
                </>
              ) : (
                "Join the Waitlist"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistForm;
