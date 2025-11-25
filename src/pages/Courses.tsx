import { useState } from "react";
import { ArrowLeft, BookOpen, Clock, Star, Target, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import WaitlistForm from "@/components/WaitlistForm";

const Courses = () => {
  const navigate = useNavigate();
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const courses = [
    {
      title: "Career Foundations",
      description: "Master the fundamentals of career planning and professional development",
      duration: "6 weeks",
      level: "Beginner",
      topics: ["Resume Writing", "LinkedIn Optimization", "Interview Prep", "Personal Branding"]
    },
    {
      title: "Technical Skills Bootcamp",
      description: "Build in-demand technical skills for the German job market",
      duration: "8 weeks",
      level: "Intermediate",
      topics: ["Data Analysis", "Project Management", "Digital Marketing", "Business Analytics"]
    },
    {
      title: "Leadership & Communication",
      description: "Develop essential soft skills for career advancement",
      duration: "4 weeks",
      level: "All Levels",
      topics: ["Leadership Skills", "Public Speaking", "Networking", "Conflict Resolution"]
    }
  ];

  return (
    <>
      <SEOHead
        title="Courses - CareerLeap | Career Development Programs for International Students"
        description="Comprehensive career development courses designed for international students in Germany. Learn resume writing, LinkedIn optimization, interview prep, and more."
        canonicalUrl="https://careerleap.io/courses"
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Leap Courses</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive career development programs designed for international students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-secondary" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Topics Covered:</h4>
                    <ul className="space-y-1">
                      {course.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full" onClick={() => setWaitlistOpen(true)}>
                    Join Waitlist for Early Access
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-xl p-8 text-center">
          <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Industry-Vetted Curriculum</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            All courses are designed by industry experts and updated regularly to match current job market demands
          </p>
          <Button size="lg" onClick={() => setWaitlistOpen(true)}>
            Join Beta Program
          </Button>
        </div>
      </main>
        <Footer />
      </div>
    </>
  );
};

export default Courses;
