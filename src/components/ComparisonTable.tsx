import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ComparisonTable = () => {
  const comparisons = [
    {
      category: "Job Search Strategy",
      before: "Random applications without a clear plan",
      after: "Targeted strategy based on your strengths and market demand",
    },
    {
      category: "Portfolio",
      before: "Generic resume with no concrete projects",
      after: "3-5 portfolio projects showcasing real skills",
    },
    {
      category: "CV & LinkedIn",
      before: "University-style CV that doesn't match German standards",
      after: "Professional, German-market optimized CV & LinkedIn",
    },
    {
      category: "Interview Performance",
      before: "Unprepared for German interview culture and questions",
      after: "Confident, well-rehearsed with cultural awareness",
    },
    {
      category: "Network",
      before: "Limited or no professional connections in Germany",
      after: "Active network with mentors, alumni, and industry contacts",
    },
    {
      category: "Market Knowledge",
      before: "Unclear about salary expectations and opportunities",
      after: "Data-driven insights into roles, salaries, and growth paths",
    },
    {
      category: "Application Response",
      before: "Low response rate, few interviews",
      after: "Higher response rate, more interview invitations",
    },
    {
      category: "Confidence Level",
      before: "Uncertain and overwhelmed by the job search",
      after: "Confident with clear direction and support system",
    },
  ];

  return (
    <section
      className="section-padding bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-black border-t"
      aria-labelledby="comparison-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2
              id="comparison-heading"
              className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white"
            >
              Your Journey: Before vs. After CareerLeap
            </h2>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto mt-4">
              See the transformation students experience when they join our program
            </p>
          </div>

          {/* Table Header */}
          <div className="hidden lg:grid grid-cols-3 gap-6 mb-6">
            <div className="text-2xl font-medium text-primary mt-10 px-10">Category</div>

            <div className="text-center p-4 rounded-xl backdrop-blur-xl bg-primary dark:bg-neutral-800/40 border">
              <X className="w-6 h-6 text-red-500 mx-auto mb-2" />
              <p className="font-medium text-white dark:text-white">
                Before CareerLeap
              </p>
              <p className="text-xs text-white">Struggling & Uncertain</p>
            </div>

            <div className="text-center p-4 rounded-xl backdrop-blur-xl bg-primary dark:bg-neutral-800/40 border">
              <Check className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
              <p className="font-medium text-white dark:text-white">
                After CareerLeap
              </p>
              <p className="text-xs text-white">Confident & Job-Ready</p>
            </div>
          </div>

          {/* Desktop Rows */}
          <div className="hidden lg:flex flex-col gap-2">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-6 p-6 rounded-2xl border bg-white/70 dark:bg-neutral-900/40 backdrop-blur-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="font-medium text-neutral-800 dark:text-neutral-200">
                  {item.category}
                </div>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                  {item.before}
                </p>
                <p className="text-neutral-800 dark:text-neutral-100 text-sm font-medium">
                  {item.after}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {comparisons.map((item, i) => (
              <Card
                key={i}
                className="border-none shadow-sm backdrop-blur-xl bg-white/70 dark:bg-neutral-900/40"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold tracking-tight">
                    {item.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-xl p-4 bg-red-50 dark:bg-red-500/10 border">
                    <div className="flex items-center space-x-2 mb-2">
                      <X className="w-4 h-4 text-red-500" />
                      <span className="font-medium">Before</span>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {item.before}
                    </p>
                  </div>

                  <div className="rounded-xl p-4 bg-emerald-50 dark:bg-emerald-500/10 border">
                    <div className="flex items-center space-x-2 mb-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="font-medium">After</span>
                    </div>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                      {item.after}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
         <div className="mt-16 text-center">
            <div className="p-10 rounded-3xl bg-primary border shadow-sm">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready to Transform Your Career?
              </h3>
              <p className="text-white dark:text-neutral-400">
                Join 50 ambitious students in our beta cohort and be part of the transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;


