const Testimonials = () => {
  const testimonials = [
    {
      text: "I am incredibly grateful for the motivation and guidance I received from Solomon which played a crucial role in helping me secure my current job in IT support. At a time when I was uncertain about what to do after completing my MSc. and doubting myself, Solomon continuously encouraged me, reminded me of my strengths, applying to multiple companies and pushed me to aim higher. His support went beyond words as he helped refine my resume and shared practical insights that gave me a competitive edge. His motivation helped boost my confidence and keep me going. Securing the job felt like a shared victory, and I know I couldn't have done it without his support and mentorship.",
      author: "Joseph - Recent Graduate",
      rating: 5
    },
    {
      text: "I thought my thesis was useless for jobs—CareerLeap helped me turn it into a portfolio project. I finally felt confident applying in Germany.",
      author: "International MSc Student",
      rating: 5
    },
    {
      text: "The coaching sessions gave me clarity and focus. My CV and LinkedIn now stand out, and I got more interviews in 3 weeks than in the past 6 months.",
      author: "Recent Graduate", 
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-secondary/5 to-accent/5" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-8 slide-in-up">
              What Students Say
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-in-up animate-delay-200">
              Real stories from international students who transformed their careers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-card rounded-2xl p-8 card-gradient hover-lift slide-in-up animate-delay-${(index + 1) * 200}`}
              >
                <div className="flex mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl" aria-hidden="true">⭐</span>
                  ))}
                </div>
                <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="text-muted-foreground font-medium">
                  — {testimonial.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;