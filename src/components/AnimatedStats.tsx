import { useState, useEffect, useRef } from "react";
import { Users, Clock, TrendingUp, Award } from "lucide-react";

interface StatProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedNumber = ({ end, duration = 2000, suffix = "", prefix = "" }: StatProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={countRef} className="text-4xl md:text-5xl font-bold text-primary">
      {prefix}{count}{suffix}
    </div>
  );
};

const AnimatedStats = () => {
  const stats = [
    {
      icon: Users,
      value: 50,
      suffix: "",
      label: "Beta Spots Available",
      description: "Limited enrollment"
    },
    {
      icon: Clock,
      value: 8,
      suffix: "-12",
      label: "Week Program",
      description: "Intensive transformation"
    },
    {
      icon: TrendingUp,
      value: 100,
      suffix: "%",
      label: "Free Access",
      description: "Community-supported"
    },
    {
      icon: Award,
      value: 10,
      suffix: "+",
      label: "Years Experience",
      description: "Expert mentorship"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" aria-labelledby="stats-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4 slide-in-up">
              Program at a Glance
            </h2>
            <p className="text-lg text-muted-foreground slide-in-up animate-delay-200">
              Everything you need to know about joining our beta cohort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 text-center card-gradient hover-lift slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <AnimatedNumber
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                  <div className="mt-3 mb-2">
                    <p className="font-semibold text-foreground text-lg">{stat.label}</p>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center bg-white/50 dark:bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Applications close:</span> November 2025 •{" "}
              <span className="font-semibold text-foreground">Program starts:</span> January 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
