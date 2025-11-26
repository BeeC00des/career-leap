import { Shield, Award, Users, TrendingUp, Clock, Star } from "lucide-react";
import { Card } from "./ui/card";

const TrustBadges = () => {
  const badges = [
    { icon: Shield, title: "Mission-Driven", description: "Community-supported initiative" },
    { icon: Award, title: "Expert Mentors", description: "10+ years industry experience" },
    { icon: Users, title: "Personalized Coaching", description: "1:1 founder mentorship" },
    { icon: TrendingUp, title: "Proven Framework", description: "Based on 4Ps methodology" },
    { icon: Clock, title: "Lifetime Access", description: "Alumni network & resources" },
    { icon: Star, title: "Beta Exclusive", description: "Free community-supported" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-muted/10 to-white" aria-labelledby="trust-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h3
            id="trust-heading"
            className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight animate-slideUp"
          >
            Why Students Trust CareerLeap
          </h3>
          <p className="text-muted-foreground text-sm md:text-base animate-slideUp delay-150">
            Commitment to your success backed by real support
          </p>
        </div>

        {/* 3 per row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <Card
                key={index}
                className="w-full group bg-card shadow-md hover:shadow-xl transition-all duration-300 rounded-3xl p-10 text-center border border-border/50 animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                </div>

                <h4 className="font-semibold text-lg text-foreground mb-2">
                  {badge.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {badge.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;


