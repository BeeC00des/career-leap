import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
// import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  university: z.string().min(2, "Please enter your university"),
  currentStatus: z.enum(["student", "graduate", "working", "unemployed", "other"]),
  fieldOfStudy: z.string().min(2, "Field of study is required"),
  careerGoals: z.string().min(10, "Please describe your career goals"),
  skills: z.string().min(5, "Please list your key skills"),
  challenges: z.string().min(10, "Please describe your main challenges"),
  experience: z.enum(["none", "internships", "part-time", "full-time", "freelance"]),
});

interface CareerAssessmentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CareerAssessmentForm = ({ open, onOpenChange }: CareerAssessmentFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      university: "",
      fieldOfStudy: "",
      careerGoals: "",
      skills: "",
      challenges: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log('Career assessment form submitted:', values);

      // const { error: dbError } = await supabase.from('career_assessment_submissions').insert({
      //   full_name: values.fullName,
      //   email: values.email,
      //   phone: values.phone,
      //   university: values.university,
      //   current_status: values.currentStatus,
      //   field_of_study: values.fieldOfStudy,
      //   career_goals: values.careerGoals,
      //   skills: values.skills,
      //   challenges: values.challenges,
      //   experience: values.experience,
      // });
      // if (dbError) throw dbError;

      setIsSubmitted(true);
      toast({
        title: 'Assessment submitted!',
        description: "We'll send your personalized career report within 24 hours.",
      });
    } catch (error: any) {
      console.error('Career assessment submission error:', error);
      toast({
        title: 'Submission failed',
        description: error?.message || 'Please try again or contact us directly.',
        variant: 'destructive',
      });
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
            <DialogTitle className="text-center text-2xl font-bold text-primary flex items-center justify-center gap-2">
              <CheckCircle className="w-8 h-8 text-green-500" />
              Assessment Complete!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <p className="text-muted-foreground mb-4">
              Thank you for completing your career assessment. We'll analyze your responses and send you a personalized career report within 24 hours.
            </p>
            <div className="bg-muted rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-2">What happens next?</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Personalized career path recommendations</li>
                <li>• Skills gap analysis</li>
                <li>• Action plan with next steps</li>
                <li>• Resources tailored to your goals</li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground">
              Check your email for your career report.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Free Career Assessment</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Get a personalized analysis of your career path, skills, and opportunities. Takes 3-5 minutes.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="graduate">Recent Graduate</SelectItem>
                        <SelectItem value="working">Currently Working</SelectItem>
                        <SelectItem value="unemployed">Job Seeking</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work Experience Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="none">No work experience</SelectItem>
                        <SelectItem value="internships">Internships only</SelectItem>
                        <SelectItem value="part-time">Part-time jobs</SelectItem>
                        <SelectItem value="full-time">Full-time experience</SelectItem>
                        <SelectItem value="freelance">Freelance/Contract work</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="fieldOfStudy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field of Study/Background</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Computer Science, Business, Engineering..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="careerGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What are your career goals?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g. Become a software engineer at a tech company, transition to product management, start my own business..."
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
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Key Skills & Strengths</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g. Programming (Python, Java), Data analysis, Leadership, Communication, Design..."
                      className="min-h-[80px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="challenges"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What are your biggest career challenges?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g. Lack of experience, networking difficulties, unclear career path, skill gaps..."
                      className="min-h-[80px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" size="lg">
              Get My Free Career Assessment
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              Your personalized report will be sent to your email within 24 hours
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CareerAssessmentForm;