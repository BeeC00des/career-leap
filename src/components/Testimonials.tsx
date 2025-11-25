"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-[#f8f9f9]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from international students who transformed their careers
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 p-3 rounded-full bg-background shadow hover:bg-muted transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Cards */}
          <div className="flex overflow-hidden w-full">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                className="min-w-full flex justify-center px-4"
                animate={{ x: `${-100 * current}%` }}
                transition={{ type: "spring", stiffness: 160, damping: 26 }}
              >
                <Card className="w-full max-w-3xl backdrop-blur-md bg-card/80 border shadow-xl rounded-2xl p-8">
                  <CardContent>
                    <div className="flex mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <span key={i} className="text-accent text-2xl">★</span>
                      ))}
                    </div>
                    <blockquote className="text-xl text-foreground leading-relaxed mb-6 italic">
                      "{t.text}"
                    </blockquote>
                    <p className="text-muted-foreground font-medium">
                      — {t.author}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={next}
            className="hidden md:flex absolute right-0 p-3 rounded-full bg-background shadow hover:bg-muted transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                current === index ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
