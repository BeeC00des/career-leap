import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/WaitlistForm";
import ContactDialog from "@/components/ContactDialog";
import MobileMenu from "@/components/ui/mobile-menu";
import { Rocket } from "lucide-react";
import logo from "@/assets/careerleap-logo.png";

const Header = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
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
    navigate(path);
  };

  return (
    <>
      <WaitlistForm 
        open={waitlistOpen} 
        onOpenChange={setWaitlistOpen}
        onStrategyCallRequest={() => {}}
      />
      
      <header className="sticky top-0 z-50 glass-effect border-b border-border/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group" 
              onClick={() => handleNavigation('/')}
            >
              <div className="w-9 h-9 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-200">
                <img src={logo} alt="CareerLeap Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CareerLeap
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary animated-underline font-medium text-sm transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-foreground hover:text-primary animated-underline font-medium text-sm transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => handleNavigation('/resources')}
                className={`hover:text-primary animated-underline font-medium text-sm transition-colors ${
                  location.pathname === '/resources' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Resources
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-foreground hover:text-primary animated-underline font-medium text-sm transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary animated-underline font-medium text-sm transition-colors"
              >
                Contact
              </button>
            </nav>
            
            {/* Desktop CTA & Mobile Menu */}
            <div className="flex items-center gap-3">
              <ContactDialog 
                trigger={
                  <Button 
                    variant="outline"
                    className="hidden md:inline-flex"
                    size="default"
                  >
                    Contact Us
                  </Button>
                }
              />
              <Button 
                onClick={() => setWaitlistOpen(true)}
                className="hidden md:inline-flex pulse-glow"
                size="default"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Join the Waitlist
              </Button>
              <MobileMenu onWaitlistOpen={() => setWaitlistOpen(true)} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;