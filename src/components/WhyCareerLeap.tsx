import { Target, BarChart, Briefcase, Rocket } from "lucide-react";

const WhyCareerLeap = () => {
  const fourPs = [
    {
      number: "1",
      title: "Position",
      description: "Define your unique value in the German job market.",
      Icon: Target
    },
    {
      number: "2", 
      title: "Proof",
      description: "Turn your coursework into employer-ready projects.",
      Icon: BarChart
    },
    {
      number: "3",
      title: "Portfolio", 
      description: "Build a digital portfolio that sets you apart.",
      Icon: Briefcase
    },
    {
      number: "4",
      title: "Placement",
      description: "Coaching and mentoring to land interviews and job offers.",
      Icon: Rocket
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5" aria-labelledby="why-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-8 slide-in-up">
              Why CareerLeap?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-in-up animate-delay-200">
              We call it the <strong>4Ps Model</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourPs.map((item, index) => (
              <div 
                key={index}
                className={`bg-card rounded-2xl p-6 card-gradient hover-lift text-center slide-in-up animate-delay-${(index + 1) * 200}`}
              >
                <div className="flex justify-center mb-4">
                  <item.Icon className="w-10 h-10 text-primary" aria-hidden="true" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">{item.number}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCareerLeap;