import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import supabase from "@/config/supabaseclient";
import emailjs from "emailjs-com";

interface ContactDialogProps {
  trigger?: React.ReactNode;
}

const ContactDialog = ({ trigger }: ContactDialogProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Direct insert into database (edge function optional)
    const { data: dbData, error: dbError } = await supabase.from("contact_us").insert({
      fullName: formData.fullName,
      emailAddress: formData?.emailAddress,
      message: formData?.message,
    });
    if (dbError) {
      console.log(dbError);
      throw dbError;
    }

    if (dbData) {
      console.log(dbData);
    }

    // Access Vite environment variables
    const serviceId = import.meta.env.VITE_EMMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMMAILJS_PUBLIC_ID;

    console.log("send");
    console.log(serviceId);

    // 2️⃣ Send email to admin using EmailJS
    await emailjs.send(
      serviceId,
      templateId,
      // <-- replace
      {
        fullName: formData.fullName,
        emailAddress: formData.emailAddress,
        message: formData.message,
      },
      publicKey // <-- replace
    );

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      setFormData({ fullName: "", emailAddress: "", message: "" });
      setIsLoading(false);
      setOpen(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="pulse-glow">
            <Mail className="w-4 h-4 mr-2" />
            Contact Us
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Get In Touch</DialogTitle>
          <DialogDescription>
            Have questions? Ready to start your career transformation? We're here to help.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input
              type="text"
              name="fullName"
              placeholder="Your Name  full name*"
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
              className="w-full min-h-[120px]"
            />
          </div>

          <Button type="submit" className="w-full pulse-glow" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to receive career tips and program updates from CareerLeap.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
