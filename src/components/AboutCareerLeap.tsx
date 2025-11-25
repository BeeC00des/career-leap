import { Target, Sparkles, Rocket } from "lucide-react";

const AboutCareerLeap = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-muted/30 to-background" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-8 slide-in-up">
              About CareerLeap
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 card-gradient hover-lift slide-in-up text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Target className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower international students through community-driven support, breaking down entry barriers in the German job market.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 card-gradient hover-lift slide-in-up animate-delay-200 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                <Sparkles className="w-8 h-8 text-secondary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where talent, not background, defines opportunity.
              </p>
            </div>

            {/* What We Do */}
            <div className="bg-card rounded-2xl p-8 card-gradient hover-lift slide-in-up animate-delay-400 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Rocket className="w-8 h-8 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">What We Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                CareerLeap bridges the gap between university and the workplace by turning your academic coursework into practical projects, mentoring you through the job search, and helping you stand out with a professional portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCareerLeap;