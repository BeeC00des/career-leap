import { Target, BarChart, Briefcase, Rocket } from "lucide-react";

const WhyCareerLeap = () => {
  const fourPs = [
    {
      number: "1",
      title: "Position",
      description: "Define your unique value in the German job market.",
      Icon: Target,
      backgroundColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      number: "2",
      title: "Proof",
      description: "Turn your coursework into employer-ready projects.",
      Icon: BarChart,
      backgroundColor: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      number: "3",
      title: "Portfolio",
      description: "Build a digital portfolio that sets you apart.",
      Icon: Briefcase,
      backgroundColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      number: "4",
      title: "Placement",
      description: "Coaching and mentoring to land interviews and job offers.",
      Icon: Rocket,
      backgroundColor: "bg-accent/10",
      iconColor: "text-accent",
    },
  ];

  return (
    <section className="py-20 bg-white" aria-labelledby="why-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2
            id="why-heading"
            className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4 animate-slideUp"
          >
            Why CareerLeap?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slideUp delay-150">
            We call it the <strong>4Ps Model</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fourPs.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border/60 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex justify-center mb-5">
                <div className={`p-4 rounded-2xl ${item?.backgroundColor} shadow-inner`}>
                  <item.Icon className={`w-10 h-10 ${item?.iconColor}`} aria-hidden="true" />
                </div>
              </div>

              <div className={`text-3xl font-extrabold  ${item?.iconColor} mb-2 tracking-tight`}>{item.number}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>

              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCareerLeap;
