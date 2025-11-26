import { Mail, Linkedin, Phone, Shield, FileText } from "lucide-react";
import logo from "@/assets/careerleap-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl overflow-hidden">
                <img src={logo} alt="CareerLeap Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#eb993d] to-white bg-clip-text text-transparent">
                CareerLeap
              </div>
            </div>
            <p className="text-background/80  mx-auto text-xl leading-relaxed">
              Empowering international students to break entry barriers in the German job market
            </p>
          </div>
          
          {/* Contact Section */}
          <div className="bg-white backdrop-blur-sm rounded-xl p-8 mb-12 border border-background/10">
            <p className="text-primary mb-6 text-lg font-semibold text-center">Get in Touch</p>
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="mailto:careerleap.de@gmail.com"
                className="flex items-center justify-center gap-2 text-primary  animated-underline font-medium transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>careerleap.de@gmail.com</span>
              </a>
              <a 
                href="https://linkedin.com/company/careerleap"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-primary animated-underline font-medium transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="tel:+49XXXXXXXXX"
                className="flex items-center justify-center gap-2 text-primary animated-underline font-medium transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
            <a 
              href="/privacy-policy" 
              className="flex items-center gap-2 text-background/80 hover:text-primary-light animated-underline font-medium transition-colors"
            >
              <Shield className="w-4 h-4" />
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service" 
              className="flex items-center gap-2 text-background/80 hover:text-primary-light animated-underline font-medium transition-colors"
            >
              <FileText className="w-4 h-4" />
              Terms of Service
            </a>
            <a 
              href="/gdpr-compliance" 
              className="flex items-center gap-2 text-background/80 hover:text-primary-light animated-underline font-medium transition-colors"
            >
              <Shield className="w-4 h-4" />
              GDPR Compliance
            </a>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-background/30 to-transparent mb-8"></div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} CareerLeap. All rights reserved.
            </p>
            <p className="text-background/50 text-xs mt-2">
              Designed to empower international students in Germany
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;