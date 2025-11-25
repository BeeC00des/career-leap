import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ComparisonTable = () => {
  const comparisons = [
    {
      category: "Job Search Strategy",
      before: "Random applications without a clear plan",
      after: "Targeted strategy based on your strengths and market demand"
    },
    {
      category: "Portfolio",
      before: "Generic resume with no concrete projects",
      after: "3-5 portfolio projects showcasing real skills"
    },
    {
      category: "CV & LinkedIn",
      before: "University-style CV that doesn't match German standards",
      after: "Professional, German-market optimized CV & LinkedIn"
    },
    {
      category: "Interview Performance",
      before: "Unprepared for German interview culture and questions",
      after: "Confident, well-rehearsed with cultural awareness"
    },
    {
      category: "Network",
      before: "Limited or no professional connections in Germany",
      after: "Active network with mentors, alumni, and industry contacts"
    },
    {
      category: "Market Knowledge",
      before: "Unclear about salary expectations and opportunities",
      after: "Data-driven insights into roles, salaries, and growth paths"
    },
    {
      category: "Application Response",
      before: "Low response rate, few interviews",
      after: "Higher response rate, more interview invitations"
    },
    {
      category: "Confidence Level",
      before: "Uncertain and overwhelmed by the job search",
      after: "Confident with clear direction and support system"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5" aria-labelledby="comparison-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="comparison-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4 slide-in-up">
              Your Journey: Before vs. After CareerLeap
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-in-up animate-delay-200">
              See the transformation students experience when they join our program
            </p>
          </div>

          {/* Mobile View */}
          <div className="block lg:hidden space-y-4">
            {comparisons.map((item, index) => (
              <Card
                key={index}
                className="slide-in-up hover-lift"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{item.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <div className="flex items-start space-x-2 mb-2">
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="font-semibold text-foreground">Before</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.before}</p>
                  </div>
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
                    <div className="flex items-start space-x-2 mb-2">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="font-semibold text-foreground">After</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.after}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-6 mb-4">
              <div className="text-center">
                <div className="text-xl font-bold text-foreground">Category</div>
              </div>
              <div className="text-center bg-destructive/10 border border-destructive/20 rounded-t-lg p-4">
                <X className="w-8 h-8 text-destructive mx-auto mb-2" />
                <div className="text-xl font-bold text-foreground">Before CareerLeap</div>
                <p className="text-sm text-muted-foreground mt-1">Struggling & Uncertain</p>
              </div>
              <div className="text-center bg-secondary/10 border border-secondary/20 rounded-t-lg p-4">
                <Check className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-xl font-bold text-foreground">After CareerLeap</div>
                <p className="text-sm text-muted-foreground mt-1">Confident & Job-Ready</p>
              </div>
            </div>

            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-6 mb-4 slide-in-up ${
                  index % 2 === 0 ? "bg-muted/30" : "bg-card"
                } rounded-lg p-6 hover-lift`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center">
                  <span className="font-semibold text-foreground">{item.category}</span>
                </div>
                <div className="flex items-center">
                  <p className="text-muted-foreground text-sm">{item.before}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-foreground text-sm font-medium">{item.after}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 slide-in-up animate-delay-800">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-muted-foreground mb-4">
              Join 50 ambitious students in our beta cohort and be part of the transformation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
