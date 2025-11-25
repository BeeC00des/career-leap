import { useState } from "react";
import { GraduationCap, Briefcase, TrendingUp, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import WaitlistForm from "./WaitlistForm";

const CaseStudies = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const caseStudies = [
    {
      name: "Sarah M.",
      role: "Computer Science Graduate",
      university: "TU Munich",
      challenge: "No practical experience, struggled to translate coursework into real-world projects",
      solution: "Transformed 3 academic projects into portfolio pieces: a database management system, a machine learning model, and a web application",
      results: [
        "Received 5 interview invites in 2 weeks",
        "Landed Software Engineer role at BMW",
        "3-month job search (vs. 12-month average)"
      ],
      timeline: "3 months",
      salary: "€58,000",
      icon: GraduationCap,
      color: "primary"
    },
    {
      name: "Kofi A.",
      role: "Marketing Graduate",
      university: "University of Hamburg",
      challenge: "International student with limited German network and no local work experience",
      solution: "Built marketing campaign portfolio from university projects, optimized LinkedIn profile, attended 5 targeted networking events",
      results: [
        "Connected with 50+ marketing professionals",
        "Secured Marketing Coordinator position at Siemens",
        "Doubled expected starting salary"
      ],
      timeline: "4 months",
      salary: "€45,000",
      icon: Briefcase,
      color: "secondary"
    },
    {
      name: "Priya S.",
      role: "Data Science Masters",
      university: "University of Berlin",
      challenge: "Strong technical skills but weak CV presentation, no interview callbacks",
      solution: "Restructured CV to highlight data projects, created GitHub portfolio, practiced German interview skills",
      results: [
        "Interview callback rate increased from 0% to 40%",
        "Multiple job offers within 6 weeks",
        "Data Analyst role at Zalando"
      ],
      timeline: "2 months",
      salary: "€52,000",
      icon: TrendingUp,
      color: "accent"
    }
  ];

  return (
    <>
      <WaitlistForm 
        open={waitlistOpen} 
        onOpenChange={setWaitlistOpen}
        onStrategyCallRequest={() => {}}
      />
      <section id="case-studies" className="section-padding bg-gradient-to-br from-background via-muted/10 to-background" aria-labelledby="case-studies-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 id="case-studies-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-6 slide-in-up">
                Success Stories: From Student to Hired
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-in-up animate-delay-200">
                Real students. Real results. See how CareerLeap helped international graduates land their dream jobs in Germany.
              </p>
            </div>

            {/* Case Studies Grid */}
            <div className="space-y-8 mb-12">
              {caseStudies.map((study, index) => (
                <Card 
                  key={index}
                  className="hover-lift slide-in-up border-l-4 border-l-primary"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${study.color}/10 flex-shrink-0`}>
                          <study.icon className={`w-6 h-6 text-${study.color}`} aria-hidden="true" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">{study.name}</CardTitle>
                          <CardDescription className="text-base">
                            {study.role} • {study.university}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">{study.timeline}</Badge>
                        <Badge variant="outline">{study.salary}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Challenge */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="text-destructive">⚠️</span> The Challenge
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="text-primary">✓</span> The Solution
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="text-secondary">🎉</span> The Results
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-muted-foreground leading-relaxed">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to write your success story?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join these successful graduates and transform your academic background into career success in Germany.
              </p>
              <Button size="lg" onClick={() => setWaitlistOpen(true)}>
                Join the Waitlist Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
