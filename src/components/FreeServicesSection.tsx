import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StrategyCallForm from "@/components/StrategyCallForm";
import CareerAssessmentForm from "@/components/CareerAssessmentForm";
import { Calendar, FileText, Users, Target, Clock, CheckCircle } from "lucide-react";

const FreeServicesSection = () => {
  const [strategyCallOpen, setStrategyCallOpen] = useState(false);
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  return (
    <>
      <StrategyCallForm 
        open={strategyCallOpen} 
        onOpenChange={setStrategyCallOpen}
      />
      <CareerAssessmentForm 
        open={assessmentOpen} 
        onOpenChange={setAssessmentOpen}
      />
      
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium">
              Free Resources
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Career Journey Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get personalized guidance and insights to accelerate your career — completely free.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Free Strategy Call Card */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                  <Clock className="w-3 h-3 mr-1" />
                  30 min
                </Badge>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Free Strategy Call</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Get 1:1 guidance from a CareerLeap coach. We'll map out your job search strategy and next steps.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    What You'll Get
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Personalized career roadmap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Job search strategy tailored to your background</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Actionable next steps for immediate progress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Insider tips from industry professionals</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => setStrategyCallOpen(true)}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Your Free Strategy Call
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Available in English & German • No commitment required
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Free Career Assessment Card */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                  <Clock className="w-3 h-3 mr-1" />
                  5 min
                </Badge>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <FileText className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Free Career Assessment</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Get a personalized analysis of your career path, skills, and opportunities in just 5 minutes.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    What You'll Get
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Detailed career path recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Skills gap analysis with improvement plan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Market opportunities in your field</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Curated resources for your career goals</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <Button 
                    className="w-full" 
                    size="lg"
                    variant="secondary"
                    onClick={() => setAssessmentOpen(true)}
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Take Free Career Assessment
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Results delivered in 24 hours • No spam, ever
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>500+ Students Helped</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>Personalized Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeServicesSection;