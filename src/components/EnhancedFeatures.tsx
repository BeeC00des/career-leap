const EnhancedFeatures = () => {
  const features = [
    {
      icon: "🎯",
      title: "Personalized Career Roadmap",
      description: "Custom 8-week plan based on your background, goals, and target German market.",
      outcome: "Clear direction with actionable steps",
      stats: "Tailored to you"
    },
    {
      icon: "📂",
      title: "Portfolio Transformation", 
      description: "We'll help you transform coursework into 3-5 impressive portfolio pieces.",
      outcome: "Stand out from other candidates",
      stats: "Real project outcomes"
    },
    {
      icon: "💼",
      title: "German-Standard Applications",
      description: "Learn to create CVs and LinkedIn profiles that German recruiters actually read.",
      outcome: "Get more interview invitations",
      stats: "Market-tested formats"
    },
    {
      icon: "🎤",
      title: "Interview Preparation",
      description: "Practice with scenarios specific to German corporate culture and expectations.",
      outcome: "Interview with confidence",
      stats: "Culture-specific prep"
    },
    {
      icon: "🤝",
      title: "Founder Mentorship",
      description: "Direct access to the program founders during the beta phase.",
      outcome: "Insider guidance and support",
      stats: "Beta-exclusive access"
    },
    {
      icon: "💡",
      title: "Market Insights",
      description: "Deep dive into German job market trends, salary expectations, and opportunities.",
      outcome: "Make informed career decisions", 
      stats: "Data-driven insights"
    }
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 slide-in-up">
              What Beta Students Will Receive
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto slide-in-up animate-delay-200">
              Everything you need to transform your academic background into career success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 card-gradient hover-lift interactive-card slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-3">
                  <p className="text-primary font-medium text-sm">
                    <strong>Outcome:</strong> {feature.outcome}
                  </p>
                </div>
                
                <div className="text-xs text-muted-foreground font-medium bg-accent/10 px-3 py-1 rounded-full inline-block">
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>

          {/* Beta Program Value */}
          <div className="mt-16 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 text-center slide-in-up animate-delay-800">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Beta Program Value
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Free</div>
                <p className="text-sm text-muted-foreground">Community-supported access</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary mb-2">50</div>
                <p className="text-sm text-muted-foreground">Limited beta spots</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-2">Launching Soon</div>
                <p className="text-sm text-muted-foreground">Program timeline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedFeatures;