import { Shield, Award, Users, TrendingUp, Clock, Star } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Mission-Driven",
      description: "Community-supported initiative"
    },
    {
      icon: Award,
      title: "Expert Mentors",
      description: "10+ years industry experience"
    },
    {
      icon: Users,
      title: "Personalized Coaching",
      description: "1:1 founder mentorship"
    },
    {
      icon: TrendingUp,
      title: "Proven Framework",
      description: "Based on 4Ps methodology"
    },
    {
      icon: Clock,
      title: "Lifetime Access",
      description: "Alumni network & resources"
    },
    {
      icon: Star,
      title: "Beta Exclusive",
      description: "Free community-supported"
    }
  ];

  return (
    <section className="py-12 bg-muted/20" aria-labelledby="trust-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 id="trust-heading" className="text-xl md:text-2xl font-bold text-foreground mb-2 slide-in-up">
              Why Students Trust CareerLeap
            </h3>
            <p className="text-muted-foreground text-sm slide-in-up animate-delay-200">
              Commitment to your success backed by real support
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-4 text-center hover-lift slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-tight">
                    {badge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
