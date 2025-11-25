import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface MobileMenuProps {
  onWaitlistOpen: () => void;
}

const MobileMenu = ({ onWaitlistOpen }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  const handleWaitlistClick = () => {
    setOpen(false);
    onWaitlistOpen();
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CL</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CareerLeap
              </span>
            </div>
          </div>

          <nav className="flex flex-col space-y-6 flex-1">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => handleNavigation('/resources')}
              className={`text-left text-lg font-medium hover:text-primary transition-colors ${
                location.pathname === '/resources' ? 'text-primary font-semibold' : 'text-foreground'
              }`}
            >
              Resources
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="mt-8">
            <Button 
              onClick={handleWaitlistClick}
              className="w-full"
              size="lg"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;