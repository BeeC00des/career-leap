// import { Target, Sparkles, Rocket } from "lucide-react";

// const AboutCareerLeap = () => {
//   return (
//     <section id="about" className="section-padding bg-gradient-to-br from-muted/30 to-background" aria-labelledby="about-heading">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-8 slide-in-up">
//               About CareerLeap
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             {/* Mission */}
//             <div className="bg-card rounded-2xl p-8 card-gradient hover-lift slide-in-up text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
//                 <Target className="w-8 h-8 text-primary" aria-hidden="true" />
//               </div>
//               <h3 className="text-xl font-bold text-foreground mb-4">Mission</h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 To empower international students through community-driven support, breaking down entry barriers in the German job market.
//               </p>
//             </div>

//             {/* Vision */}
//             <div className="bg-card rounded-2xl p-8 card-gradient hover-lift slide-in-up animate-delay-200 text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
//                 <Sparkles className="w-8 h-8 text-secondary" aria-hidden="true" />
//               </div>
//               <h3 className="text-xl font-bold text-foreground mb-4">Vision</h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 A world where talent, not background, defines opportunity.
//               </p>
//             </div>

//             {/* What We Do */}
//             <div className="bg-card rounded-2xl p-8 card-gradient hover-lift slide-in-up animate-delay-400 text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
//                 <Rocket className="w-8 h-8 text-accent" aria-hidden="true" />
//               </div>
//               <h3 className="text-xl font-bold text-foreground mb-4">What We Do</h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 CareerLeap bridges the gap between university and the workplace by turning your academic coursework into practical projects, mentoring you through the job search, and helping you stand out with a professional portfolio.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutCareerLeap;

// Optimized, more professional UI for AboutCareerLeap
// Content remains unchanged; styling, spacing, and layout upgraded.

import { Target, Sparkles, Rocket } from "lucide-react";

const AboutCareerLeap = () => {
  return (
    <section id="about" className="py-8 bg-white  relative" aria-labelledby="about-heading">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight animate-slideUp"
          >
            About CareerLeap
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base animate-slideUp delay-150">
            Empowering global talent through community, mentorship, and real-world readiness
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-card border border-border/60 rounded-2xl p-10 text-center shadow-sm hover:shadow-xl transition-all duration-300 animate-slideUp">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6 shadow-inner">
              <Target className="w-9 h-9 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              To empower international students through community-driven support, breaking down entry barriers in the
              German job market.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card border border-border/60 rounded-2xl p-10 text-center shadow-sm hover:shadow-xl transition-all duration-300 animate-slideUp delay-200">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6 shadow-inner">
              <Sparkles className="w-9 h-9 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Vision</h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              A world where talent, not background, defines opportunity.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-card border border-border/60 rounded-2xl p-10 text-center shadow-sm hover:shadow-xl transition-all duration-300 animate-slideUp delay-400">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6 shadow-inner">
              <Rocket className="w-9 h-9 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">What We Do</h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              CareerLeap bridges the gap between university and the workplace by turning your academic coursework into
              practical projects, mentoring you through the job search, and helping you stand out with a professional
              portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCareerLeap;
