import { useState } from "react";
import { ArrowLeft, FileText, Calendar, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import WaitlistForm from "@/components/WaitlistForm";
import { useToast } from "@/hooks/use-toast";

const Blog = () => {
  const navigate = useNavigate();
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const { toast } = useToast();

  const articles = [
    {
      title: "5 Steps to Land Your First Job in Germany",
      excerpt: "Essential strategies for international students navigating the German job market",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "Career Tips"
    },
    {
      title: "Mastering the German Interview Process",
      excerpt: "Cultural insights and practical tips for successful job interviews in Germany",
      date: "2025-01-10",
      readTime: "7 min read",
      category: "Interview Prep"
    },
    {
      title: "Building a LinkedIn Profile That Gets Noticed",
      excerpt: "Optimize your LinkedIn presence to attract recruiters and opportunities",
      date: "2025-01-05",
      readTime: "6 min read",
      category: "Personal Branding"
    },
    {
      title: "Networking in Germany: A Guide for International Students",
      excerpt: "How to build meaningful professional connections in the German business culture",
      date: "2024-12-28",
      readTime: "8 min read",
      category: "Networking"
    },
    {
      title: "Understanding Work Visas and Residence Permits",
      excerpt: "Navigate the legal requirements for working in Germany as an international graduate",
      date: "2024-12-20",
      readTime: "10 min read",
      category: "Legal & Visa"
    },
    {
      title: "Top 10 In-Demand Skills in the German Job Market",
      excerpt: "Skills that employers are actively seeking in 2025",
      date: "2024-12-15",
      readTime: "5 min read",
      category: "Skills Development"
    }
  ];

  const handleReadMore = () => {
    toast({
      title: "Coming Soon! 📚",
      description: "Blog articles are being prepared. Join the waitlist to be notified when they're published.",
    });
  };

  return (
    <>
      <SEOHead
        title="Blog - CareerLeap | Career Tips & Insights for International Students in Germany"
        description="Latest career tips, job search strategies, and insights for international students navigating the German job market. Expert advice on CVs, interviews, networking, and more."
        canonicalUrl="https://careerleap.io/blog"
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
            <FileText className="w-8 h-8 text-foreground" />
          </div>
          <h1 className="text-4xl font-bold mb-4">CareerLeap Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Latest insights, tips, and strategies for career success in Germany
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="text-xs font-medium text-primary mb-2">{article.category}</div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription>{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => navigate(`/blog/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`)}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={() => setWaitlistOpen(true)}>
            Join Waitlist for Updates
          </Button>
        </div>
      </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
