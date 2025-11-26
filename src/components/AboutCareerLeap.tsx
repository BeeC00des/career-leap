import { Target, Sparkles, Rocket } from "lucide-react";
import { Card } from "./ui/card";

const AboutCareerLeap = () => {
  return (
    <section id="about" className="py-8 bg-white  relative" aria-labelledby="about-heading">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight animate-slideUp"
          >
            About CareerLeap
          </h2>
          <p className="text-muted-foreground  mx-auto text-sm md:text-base animate-slideUp delay-150">
            Empowering global talent through community, mentorship, and real-world readiness
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6 md:gap-10">
          {/* Mission */}
          <Card className="w-full lg:w-[300px] border border-border/60 rounded-2xl p-10 text-center shadow-sm hover:shadow-xl transition-all duration-300 animate-slideUp">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6 shadow-inner">
              <Target className="w-9 h-9 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              To empower international students through community-driven support, breaking down entry barriers in the
              German job market.
            </p>
          </Card>

          {/* Vision */}
          <Card className="w-full lg:w-[300px] border border-border/60 rounded-2xl p-10 text-center shadow-sm hover:shadow-xl transition-all duration-300 animate-slideUp delay-200">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6 shadow-inner">
              <Sparkles className="w-9 h-9 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Vision</h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              A world where talent, not background, defines opportunity.
            </p>
          </Card>

          {/* What We Do */}
          <Card className="w-full lg:w-[300px] border border-border/60 rounded-2xl p-10 text-center shadow-sm hover:shadow-xl transition-all duration-300 animate-slideUp delay-400">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6 shadow-inner">
              <Rocket className="w-9 h-9 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">What We Do</h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              CareerLeap bridges the gap between university and the workplace by turning your academic coursework into
              practical projects, mentoring you through the job search, and helping you stand out with a professional
              portfolio.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutCareerLeap;
