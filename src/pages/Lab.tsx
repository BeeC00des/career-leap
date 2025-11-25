import { useState } from "react";
import { ArrowLeft, Beaker, Code, Lightbulb, Rocket, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import WaitlistForm from "@/components/WaitlistForm";

const Lab = () => {
  const navigate = useNavigate();
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const projects = [
    {
      title: "Resume Analyzer",
      description: "Practice optimizing resumes with AI-powered feedback",
      icon: Target,
      difficulty: "Beginner"
    },
    {
      title: "Mock Interview Simulator",
      description: "Prepare for interviews with realistic scenarios and feedback",
      icon: Lightbulb,
      difficulty: "Intermediate"
    },
    {
      title: "Portfolio Builder",
      description: "Create a professional portfolio showcasing your projects",
      icon: Code,
      difficulty: "All Levels"
    },
    {
      title: "Networking Challenge",
      description: "Practice networking skills in simulated professional settings",
      icon: Rocket,
      difficulty: "Intermediate"
    }
  ];

  return (
    <>
      <SEOHead
        title="Leap Lab - CareerLeap | Hands-On Career Practice & Portfolio Building"
        description="Practice real-world career skills with hands-on projects. Build your professional portfolio with resume analyzers, mock interviews, and networking challenges."
        canonicalUrl="https://careerleap.io/lab"
      />
      <WaitlistForm 
        open={waitlistOpen} 
        onOpenChange={setWaitlistOpen}
        onStrategyCallRequest={() => {}}
      />
      <div className="min-h-screen">
        <Header />
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/resources")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Resources
        </Button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-4">
            <Beaker className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Leap Lab</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hands-on practice with real-world scenarios to build your professional portfolio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="mt-1">{project.description}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Difficulty: <span className="font-medium text-foreground">{project.difficulty}</span>
                    </span>
                    <Button onClick={() => setWaitlistOpen(true)}>
                      Join Beta for Access
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Build Your Portfolio</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Complete projects and challenges to showcase your skills to potential employers
          </p>
          <Button size="lg" variant="secondary" onClick={() => setWaitlistOpen(true)}>
            Join Beta Program
          </Button>
        </div>
      </main>
        <Footer />
      </div>
    </>
  );
};

export default Lab;
