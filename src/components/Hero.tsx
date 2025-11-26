import { useState } from "react";
import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/WaitlistForm";
import StrategyCallForm from "@/components/StrategyCallForm";
import CareerAssessmentForm from "@/components/CareerAssessmentForm";
import heroImage from "@/assets/hero-image.jpg";
import {
  GraduationCap,
  Rocket,
  TrendingUp,
  FileCheck2,
  BarChart3,
} from "lucide-react";

const Hero = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [strategyCallOpen, setStrategyCallOpen] = useState(false);
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  return (
    <>
      <WaitlistForm
        open={waitlistOpen}
        onOpenChange={setWaitlistOpen}
        onStrategyCallRequest={() => setStrategyCallOpen(true)}
      />
      <StrategyCallForm open={strategyCallOpen} onOpenChange={setStrategyCallOpen} />
      <CareerAssessmentForm open={assessmentOpen} onOpenChange={setAssessmentOpen} />

      {/* ========================= */}
      {/* SECTION 1 — HERO + CTA   */}
      {/* ========================= */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
        aria-labelledby="hero-heading"
      >
      

        <div className="relative z-10 w-full py-10 bg-primary">

          {/* Banner */}
          <div className="text-center mb-10 animate-slideUp">
            <div className="inline-flex items-center gap-3 bg-white border border-white/20 rounded-full px-6 py-3 text-white/90 text-sm font-medium shadow-lg">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-black">Applications Close November 2025 • Program Starts January 2026</span>
            </div>
          </div>

          <div className="container mx-auto px-6 max-w-5xl text-center text-white">

            {/* Icon */}
            <div className="flex justify-center mb-6 animate-slideUp delay-100">
              <GraduationCap className="w-16 h-16 text-accent drop-shadow-xl" />
            </div>

            {/* Main Heading */}
            <h1
              id="hero-heading"
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight animate-slideUp delay-200 drop-shadow-2xl"
            >
              Turn Your Coursework into
              <span className="text-accent"> Career-Ready Projects </span>
              & Land a Job in Germany
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed animate-slideUp delay-300">
              International students and graduates: Don’t let your degree go unnoticed.
              We help you turn your academic work into a portfolio that employers trust.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12 animate-slideUp delay-500">
              <Button
                variant="cta"
                size="xl"
                className="shadow-2xl hover:shadow-accent/25 transition-all animate-pulse-soft"
                onClick={() => setWaitlistOpen(true)}
              >
                <Rocket className="w-5 h-5 mr-2" /> Join the Waitlist (Free)
              </Button>

              <Button
                variant="outline"
                size="xl"
                className="bg-white border-white/20 text-primary hover:bg-white hover:text-primary backdrop-blur-md"
                onClick={() => setAssessmentOpen(true)}
              >
                <FileCheck2 className="w-5 h-5 mr-2" /> Get Free Career Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* SECTION 2 — DETAILS AREA */}
      {/* ========================= */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">

          {/* Challenge Box */}
          <div className="bg-primary rounded-2xl p-8 max-w-xl mx-auto border border-white/20 shadow-xl animate-slideUp">
            <h3 className="text-white text-xl font-semibold mb-3">The Challenge is Real</h3>
            <p className="text-white text-base mb-4">
              70% of international students in Germany struggle to land their first professional job
              within 6 months of graduation. We’re building the solution.
            </p>
            <div className="flex items-center justify-center gap-2 text-accent font-medium text-xl">
              <BarChart3 className="w-4 h-4" />
              <span>Source: DAAD 2024 Report</span>
            </div>
          </div>

          {/* Program Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slideUp delay-100">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">50</div>
              <p className="text-primary mt-1">Beta Students</p>
              <p className="text-primary text-sm">Limited spots available</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary">8 - 12 Weeks</div>
              <p className="text-primary mt-1">Program Duration</p>
              <p className="text-primary text-sm">Intensive transformation</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary">Free</div>
              <p className="text-primary mt-1">Community-Supported</p>
              <p className="text-primary text-sm">No-cost pilot program</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-14 animate-slideUp delay-200">
            <p className="text-primary text-2xl mb-4 font-bold">Early Applicant Benefits:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: TrendingUp, label: "Priority consideration" },
                { icon: FileCheck2, label: "Onboarding support" },
                { icon: GraduationCap, label: "Lifetime alumni network" },
                { icon: Rocket, label: "1:1 founder mentorship" },
              ].map(({ icon: Icon, label }, index) => (
                <div key={index} className="flex justify-center">
                  <div className="text-primary bg-primary text-white rounded-lg px-4 py-3 text-sm font-medium border border-white/20 flex items-center gap-2 backdrop-blur-md shadow-lg">
                    <Icon className="w-4 h-4" /> {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

