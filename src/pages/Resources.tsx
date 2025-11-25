import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Beaker, Users, FileText, ArrowRight, Star, Clock, Target, Shield, Cloud, Smartphone, Building, Linkedin, UserPlus } from "lucide-react";
import { MentorApplicationForm } from "@/components/MentorApplicationForm";
import { OptimizedImage } from "@/components/ui/optimized-image";
import ransfordImage from "@/assets/ransford.jpeg";

// Move structured data outside component to prevent recreation on every render
const mentorsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Person",
      "name": "Ransford J. Annan",
      "jobTitle": "Cybersecurity & Cloud Security Professional",
      "description": "Over 5 years of experience across cybersecurity, cloud security, and IT governance",
      "url": "https://linkedin.com/in/ransford-j-annan-bb5ba8215",
      "expertise": ["Cybersecurity", "Cloud Security", "Identity & Access Management", "IT Governance"]
    },
    {
      "@type": "Person",
      "name": "Love Nana Ama Tenkorang",
      "jobTitle": "Social Media Marketing & Business Development Expert",
      "description": "Experience in digital marketing, sales, and account management with Facebook (Meta)",
      "url": "https://linkedin.com/in/love-nana-ama-tenkorang",
      "expertise": ["Leadership", "Communication", "Social Media Advertising", "SEO"]
    },
    {
      "@type": "Person",
      "name": "Solomon Banuba",
      "jobTitle": "Data & Risk Analyst",
      "description": "10+ years across data analysis and commodity trading in fintech and health-tech",
      "url": "https://linkedin.com/in/solomon-banuba-b5486016a",
      "expertise": ["Data Analytics", "Business Intelligence", "Risk Analytics", "Career Coaching"]
    },
    {
      "@type": "Person",
      "name": "E. Delali Aggor",
      "jobTitle": "Mathematics Graduate & Financial Engineer",
      "description": "Expertise in numerical methods, scientific computing, and financial engineering",
      "url": "https://linkedin.com/in/edelali-aggor",
      "expertise": ["Quantitative Analysis", "Financial Engineering", "Trading Strategies", "Machine Learning"]
    }
  ]
};

const Resources = () => {
  const navigate = useNavigate();
  const [mentorFormOpen, setMentorFormOpen] = useState(false);

  // Memoize structured data string to prevent re-serialization
  const structuredDataString = useMemo(() => JSON.stringify(mentorsStructuredData), []);

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Resources - CareerLeap | Free Career Support for International Students</title>
        <meta name="description" content="Access free mentorship, courses, hands-on practice labs, and expert career insights. CareerLeap's non-profit community supports international students in Germany." />
        <meta property="og:title" content="Resources - CareerLeap" />
        <meta property="og:description" content="Career development resources for international students in Germany" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://careerleap.com/resources" />
        <script type="application/ld+json">
          {structuredDataString}
        </script>
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              CareerLeap Resources
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              Everything you need to accelerate your career journey - from courses and mentorship to hands-on practice and expert insights.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            
            {/* Leap Mentors - Enhanced Section */}
            <div className="md:col-span-2">
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Users className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl">Leap Mentors</CardTitle>
                      <CardDescription>Connect with industry professionals</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Hero Section for Mentors */}
                  <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Meet Our Mentors & Coaches</h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
                      They have walked the path you aspire to take. With years of proven industry experience, they bring both expertise and lived insights to guide you. Their mission is to help you navigate your career journey smoothly — avoiding common pitfalls and accelerating your growth with the right knowledge, skills, and mindset.
                    </p>
                  </div>

                  {/* Mentor Grid */}
                  <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                    
                    {/* Ransford J. Annan */}
                    <div className="bg-muted/30 rounded-lg p-4 md:p-6 border">
                      <div className="text-center mb-4">
                        <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden">
                          <OptimizedImage 
                            src={ransfordImage} 
                            alt="Ransford J. Annan" 
                            className="rounded-full object-cover object-center w-full h-full"
                          />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">Ransford J. Annan</h3>
                        <p className="text-sm md:text-base text-primary font-semibold">Cybersecurity & Cloud Security Professional</p>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        With over 5 years of experience across cybersecurity, cloud security, and IT governance, Ransford specialises in identity & access management, endpoint protection, and mobile device security.
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-sm">Areas of Expertise:</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center space-x-2">
                            <Shield className="h-3 w-3 text-primary" />
                            <span>Cybersecurity & Cloud Security</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Cloud className="h-3 w-3 text-primary" />
                            <span>Identity & Access Management</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Smartphone className="h-3 w-3 text-primary" />
                            <span>Mobile Device & Endpoint Security</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Building className="h-3 w-3 text-primary" />
                            <span>IT Governance & Business Systems</span>
                          </li>
                        </ul>
                      </div>

                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full group hover:bg-primary hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <a 
                          href="https://linkedin.com/in/ransford-j-annan-bb5ba8215" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Linkedin className="mr-2 h-4 w-4" />
                          Connect with Ransford
                        </a>
                      </Button>
                    </div>

                    {/* Love Nana Ama Tenkorang */}
                    <div className="bg-muted/30 rounded-lg p-4 md:p-6 border">
                      <div className="text-center mb-4">
                        <Avatar className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 md:mb-4">
                          <AvatarFallback className="text-lg md:text-xl font-semibold bg-secondary text-secondary-foreground">LT</AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-bold mb-2">Love Nana Ama Tenkorang</h3>
                        <p className="text-primary font-semibold">Social Media Marketing & Business Development Expert</p>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        Love brings rich experience in digital marketing, sales, and account management. She is passionate about supporting emerging professionals through community-driven mentorship.
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-sm">Areas of Expertise:</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center space-x-2">
                            <Target className="h-3 w-3 text-primary" />
                            <span>Leadership & Personal Growth</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Users className="h-3 w-3 text-primary" />
                            <span>Communication & Networking</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Smartphone className="h-3 w-3 text-primary" />
                            <span>Social Media Advertising</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Star className="h-3 w-3 text-primary" />
                            <span>SEO & Content Marketing</span>
                          </li>
                        </ul>
                      </div>

                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full group hover:bg-primary hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <a 
                          href="https://linkedin.com/in/love-nana-ama-tenkorang" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Linkedin className="mr-2 h-4 w-4" />
                          Connect with Love
                        </a>
                      </Button>
                    </div>

                    {/* Solomon Banuba */}
                    <div className="bg-muted/30 rounded-lg p-4 md:p-6 border">
                      <div className="text-center mb-4">
                        <Avatar className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 md:mb-4">
                          <AvatarFallback className="text-lg md:text-xl font-semibold bg-accent text-accent-foreground">SB</AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-bold mb-2">Solomon Banuba</h3>
                        <p className="text-primary font-semibold">Data & Risk Analyst | FinTech & Business Intelligence</p>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        Solomon Banuba is a Data & Risk Analyst with 10+ years across data analysis and commodity trading. He's worked in fintech, health-tech, and non-profit settings, and specializes in turning raw data into clear, actionable insights using SQL, Python, and Power BI. Solomon is passionate about mentoring international students and young professionals to convert academic coursework into career-ready, portfolio-worthy projects.
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-sm">Areas of Expertise:</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center space-x-2">
                            <Target className="h-3 w-3 text-primary" />
                            <span>Data Analytics & Business Intelligence (SQL, Python, Power BI, Excel)</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Shield className="h-3 w-3 text-primary" />
                            <span>Risk & Compliance Analytics (AML, Fraud Detection, FinCrime Ops)</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <FileText className="h-3 w-3 text-primary" />
                            <span>Reporting Automation & Data Quality</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Users className="h-3 w-3 text-primary" />
                            <span>Career Pathway Coaching for International Students</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Building className="h-3 w-3 text-primary" />
                            <span>Financial Risk Management (FRM Candidate)</span>
                          </li>
                        </ul>
                      </div>

                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full group hover:bg-primary hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <a 
                          href="https://linkedin.com/in/solomon-banuba-b5486016a" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Linkedin className="mr-2 h-4 w-4" />
                          Connect with Solomon
                        </a>
                      </Button>
                    </div>

                    {/* E. Delali Aggor */}
                    <div className="bg-muted/30 rounded-lg p-4 md:p-6 border">
                      <div className="text-center mb-4">
                        <Avatar className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 md:mb-4">
                          <AvatarFallback className="text-lg md:text-xl font-semibold bg-primary text-primary-foreground">EDA</AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-bold mb-2">E. Delali Aggor</h3>
                        <p className="text-primary font-semibold">Mathematics Graduate & Financial Engineer | Quantitative Analyst & Trader</p>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        E. Delali Aggor is a Mathematics graduate with deep expertise in numerical methods, scientific computing, and financial engineering. Delali combines strong quantitative skills with experience in big-data analytics and risk modelling. Delali is passionate about mentoring those interested in quantitative finance, machine learning, and turning theoretical knowledge into applied, market-oriented solutions.
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-sm">Areas of Expertise:</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center space-x-2">
                            <Target className="h-3 w-3 text-primary" />
                            <span>Quantitative Analysis & Financial Engineering</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <FileText className="h-3 w-3 text-primary" />
                            <span>Trading Strategies & Data Analysis</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Building className="h-3 w-3 text-primary" />
                            <span>Scientific Computing & Numerical Methods</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Users className="h-3 w-3 text-primary" />
                            <span>Machine Learning & Statistical Modelling</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Shield className="h-3 w-3 text-primary" />
                            <span>Risk Management & Financial Markets</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Star className="h-3 w-3 text-primary" />
                            <span>Programming: Python, R, SQL, C++, Quant libraries</span>
                          </li>
                        </ul>
                      </div>

                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full group hover:bg-primary hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <a 
                          href="https://linkedin.com/in/edelali-aggor" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Linkedin className="mr-2 h-4 w-4" />
                          Connect with E. Delali
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button 
                      className="group-hover:shadow-md transition-all"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      Connect with a Mentor
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline"
                      className="group-hover:shadow-md transition-all"
                      onClick={() => setMentorFormOpen(true)}
                    >
                      <UserPlus className="mr-2 h-4 w-4" />
                      Become a Leap Mentor
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Leap Courses */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Leap Courses</CardTitle>
                    <CardDescription>Comprehensive career development programs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Industry-vetted curriculum</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Self-paced learning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Job-ready skills</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Master the skills that top companies are hiring for. From technical skills to soft skills, our courses are designed by industry experts and updated regularly.
                </p>
                <Button 
                  className="w-full group-hover:shadow-md transition-all"
                  onClick={() => navigate('/courses')}
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Leap Lab */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Beaker className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Leap Lab</CardTitle>
                    <CardDescription>Hands-on practice and real projects</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Real-world projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Interactive simulations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Portfolio building</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Practice your skills in a safe environment with real-world scenarios. Build a portfolio that showcases your abilities to potential employers.
                </p>
                <Button 
                  variant="default" 
                  className="w-full group-hover:shadow-md transition-all"
                  onClick={() => navigate('/lab')}
                >
                  Start Practicing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Blog */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <FileText className="h-8 w-8 text-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Blog</CardTitle>
                    <CardDescription>Latest insights and career tips</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Expert insights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Weekly updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Actionable advice</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Stay up-to-date with the latest trends, tips, and strategies for career success. Learn from industry leaders and successful professionals.
                </p>
                <Button 
                  variant="default" 
                  className="w-full group-hover:shadow-md transition-all"
                  onClick={() => navigate('/blog')}
                >
                  Read Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <MentorApplicationForm open={mentorFormOpen} onOpenChange={setMentorFormOpen} />
      
      <Footer />
    </main>

  );
};

export default Resources;