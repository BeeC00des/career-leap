import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import supabase from "@/config/supabaseclient";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
      // Direct insert into database (edge function optional)
          const { data: dbData, error: dbError } = await supabase
          .from("contact_us")
          .insert({
            fullName: formData.fullName,
            emailAddress: formData?.emailAddress,
            message:  formData?.message
          
          });
          if (dbError) {
            console.log(dbError)
            throw dbError;
          } 
    
          if(dbData) {
            console.log(dbData)
          }
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      setFormData({ fullName: "", emailAddress: "", message: "" });
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 slide-in-up">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground slide-in-up animate-delay-200">
              Have questions? Ready to start your career transformation? We're here to help.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="slide-in-up animate-delay-300">
              <h3 className="text-xl font-bold text-foreground mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <a 
                    href="mailto:careerleap.de@gmail.com"
                    className="text-primary hover:text-primary-dark animated-underline"
                  >
                    careerleap.de@gmail.com
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                  <p className="text-muted-foreground">Within 24 hours on weekdays</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Office Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday, 9 AM - 6 PM CET</p>
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="mt-8 p-6 bg-card rounded-xl card-gradient">
                <h4 className="font-semibold text-foreground mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <button className="w-full text-left text-primary hover:text-primary-dark animated-underline">
                    → Schedule a free strategy call
                  </button>
                  <button className="w-full text-left text-primary hover:text-primary-dark animated-underline">
                    → Download success stories
                  </button>
                  <button className="w-full text-left text-primary hover:text-primary-dark animated-underline">
                    → Join our LinkedIn community
                  </button>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 card-gradient hover-lift slide-in-up animate-delay-400">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Your Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="emailAddress"
                    placeholder="Email Address *"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your goals, background, or any questions you have..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-32"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full pulse-glow"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to receive career tips and program updates from CareerLeap.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;