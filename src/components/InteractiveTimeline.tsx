import { useState } from "react";
import { CheckCircle2, Circle, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const InteractiveTimeline = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  const timeline = [
    {
      week: "Week 1-2",
      title: "Foundation & Discovery",
      milestones: [
        "Complete career assessment",
        "Map coursework to career projects",
        "Identify target companies & roles"
      ],
      deliverables: ["Career roadmap", "Project selection list"]
    },
    {
      week: "Week 3-4",
      title: "Portfolio Building",
      milestones: [
        "Transform 2-3 academic projects",
        "Create GitHub portfolio",
        "Draft project case studies"
      ],
      deliverables: ["Live portfolio website", "3 project showcases"]
    },
    {
      week: "Week 5-6",
      title: "Professional Branding",
      milestones: [
        "CV optimization (German standards)",
        "LinkedIn profile overhaul",
        "Cover letter templates"
      ],
      deliverables: ["ATS-optimized CV", "Professional LinkedIn", "5 cover letters"]
    },
    {
      week: "Week 7-8",
      title: "Interview Prep & Practice",
      milestones: [
        "Mock interviews (technical & behavioral)",
        "German workplace culture training",
        "Salary negotiation strategies"
      ],
      deliverables: ["Interview playbook", "Negotiation scripts"]
    },
    {
      week: "Week 9-12",
      title: "Active Job Search",
      milestones: [
        "Apply to 10-15 targeted positions",
        "Attend 3+ networking events",
        "Follow up strategies"
      ],
      deliverables: ["Job applications tracker", "Network connections", "Interview invites"]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background via-primary/5 to-background" aria-labelledby="timeline-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="timeline-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your 12-Week Journey to Career Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Track your progress from student to professional with our structured program
            </p>
          </div>

          {/* Timeline Navigation */}
          <div className="flex justify-center mb-8 flex-wrap gap-2">
            {timeline.map((phase, index) => (
              <Button
                key={index}
                variant={activeWeek === index ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveWeek(index)}
                className="text-xs md:text-sm"
              >
                {phase.week}
              </Button>
            ))}
          </div>

          {/* Visual Timeline */}
          <div className="relative mb-12">
            <div className="absolute top-8 left-0 right-0 h-1 bg-muted hidden md:block" />
            <div 
              className="absolute top-8 left-0 h-1 bg-primary transition-all duration-500 hidden md:block"
              style={{ width: `${(activeWeek / (timeline.length - 1)) * 100}%` }}
            />
            <div className="relative flex justify-between">
              {timeline.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setActiveWeek(index)}
                  className="flex flex-col items-center group"
                  aria-label={`View ${phase.week} details`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    index <= activeWeek 
                      ? 'bg-primary text-primary-foreground scale-110' 
                      : 'bg-muted text-muted-foreground group-hover:scale-105'
                  }`}>
                    {index <= activeWeek ? (
                      <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                    ) : (
                      <Circle className="w-8 h-8" aria-hidden="true" />
                    )}
                  </div>
                  <span className="text-xs mt-2 font-medium text-center max-w-[80px] hidden md:block">
                    {phase.week}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Phase Details */}
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{timeline[activeWeek].week}</h3>
                  <p className="text-lg text-primary font-semibold">{timeline[activeWeek].title}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Milestones */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
                    Key Milestones
                  </h4>
                  <ul className="space-y-3">
                    {timeline[activeWeek].milestones.map((milestone, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-muted-foreground leading-relaxed">{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary" aria-hidden="true" />
                    What You'll Get
                  </h4>
                  <ul className="space-y-3">
                    {timeline[activeWeek].deliverables.map((deliverable, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-muted-foreground leading-relaxed">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={() => setActiveWeek(Math.max(0, activeWeek - 1))}
                  disabled={activeWeek === 0}
                >
                  Previous Phase
                </Button>
                <Button
                  onClick={() => setActiveWeek(Math.min(timeline.length - 1, activeWeek + 1))}
                  disabled={activeWeek === timeline.length - 1}
                >
                  Next Phase
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;
