import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useToast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Placeholder blog posts data
  const posts: Record<string, any> = {
    "5-steps-land-first-job-germany": {
      title: "5 Steps to Land Your First Job in Germany",
      excerpt: "Essential strategies for international students navigating the German job market",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "Career Tips",
      author: "CareerLeap Team",
      content: `
        <h2>Introduction</h2>
        <p>Landing your first job in Germany as an international student can feel overwhelming. With 70% of international students struggling to secure employment within 6 months of graduation, having a strategic approach is essential.</p>
        
        <h2>Step 1: Understand the German Job Market</h2>
        <p>The German job market values:</p>
        <ul>
          <li><strong>Formal qualifications:</strong> Degrees and certifications matter</li>
          <li><strong>Practical experience:</strong> Internships and projects demonstrate capability</li>
          <li><strong>Language skills:</strong> German proficiency opens more doors</li>
          <li><strong>Cultural fit:</strong> Understanding German workplace culture is crucial</li>
        </ul>

        <h2>Step 2: Build a Portfolio That Stands Out</h2>
        <p>German employers want to see tangible proof of your skills. Transform your academic projects into portfolio pieces:</p>
        <ul>
          <li>Select 2-3 significant university projects</li>
          <li>Document your process, challenges, and solutions</li>
          <li>Create a professional website or GitHub repository</li>
          <li>Include measurable outcomes and results</li>
        </ul>

        <h2>Step 3: Optimize Your CV for the German Market</h2>
        <p>German CVs have specific expectations:</p>
        <ul>
          <li>Include a professional photo</li>
          <li>Use a chronological format (newest first)</li>
          <li>List education, work experience, and skills clearly</li>
          <li>Keep it to 2 pages maximum</li>
          <li>Include language proficiency levels (A1-C2)</li>
        </ul>

        <h2>Step 4: Network Strategically</h2>
        <p>Networking in Germany is formal but effective:</p>
        <ul>
          <li>Attend industry-specific meetups and conferences</li>
          <li>Join LinkedIn groups relevant to your field</li>
          <li>Connect with university alumni working in your target companies</li>
          <li>Participate in career fairs and company information sessions</li>
        </ul>

        <h2>Step 5: Prepare for the Interview Process</h2>
        <p>German interviews are structured and detailed:</p>
        <ul>
          <li>Research the company thoroughly</li>
          <li>Prepare examples using the STAR method</li>
          <li>Be ready to discuss technical details</li>
          <li>Ask thoughtful questions about the role and company</li>
          <li>Follow up with a professional thank-you email</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Landing your first job in Germany requires strategy, preparation, and persistence. By following these 5 steps, you'll position yourself ahead of other candidates and increase your chances of success.</p>

        <p><em>Need personalized guidance? Join CareerLeap's program to get 1:1 coaching and accelerate your job search.</em></p>
      `
    }
  };

  const post = posts[slug || ""];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Button onClick={() => navigate("/blog")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Blog post URL copied to clipboard",
    });
  };

  return (
    <>
      <SEOHead
        title={`${post.title} - CareerLeap Blog`}
        description={post.excerpt}
        canonicalUrl={`https://careerleap.io/blog/${slug}`}
        keywords={`${post.category}, job search Germany, career tips, ${post.title}`}
      />
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/blog")}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>

          <article>
            {/* Header */}
            <header className="mb-8">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <span>By {post.author}</span>
                </div>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </header>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
