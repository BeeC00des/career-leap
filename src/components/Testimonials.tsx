// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       text: "I am incredibly grateful for the motivation and guidance I received from Solomon which helped me secure my first IT support job.",
//       author: "Joseph - Recent Graduate",
//       rating: 5,
//     },
//     {
//       text: "CareerLeap helped me turn my thesis into a portfolio project. That changed everything.",
//       author: "International MSc Student",
//       rating: 5,
//     },
//     {
//       text: "My CV and LinkedIn improved dramatically—I got more interviews in 3 weeks than the last 6 months.",
//       author: "Recent Graduate",
//       rating: 5,
//     },
//     {
//       text: "The mock interviews + mentorship helped me land a full-time role faster than expected.",
//       author: "Engineering Student",
//       rating: 5,
//     },
//   ];

//   // Number of slides (group of 4)
//   const totalSlides = Math.ceil(testimonials.length / 4);

//   const [current, setCurrent] = useState(0);

//   const next = () => setCurrent((prev) => (prev + 1) % totalSlides);
//   const prev = () => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);

//   useEffect(() => {
//     const interval = setInterval(next, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="testimonials" className="section-padding bg-[#f8f9f9]">
//       <div className="container mx-auto px-4 max-w-5xl">
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold text-foreground mb-4">What Students Say</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Real stories from international students who transformed their careers
//           </p>
//         </div>

//         {/* Carousel */}
//         <div className="relative flex items-center justify-center">

//           <button
//             onClick={prev}
//             className="hidden md:flex absolute left-0 p-3 rounded-full bg-background shadow hover:bg-muted transition"
//           >
//             <ChevronLeft className="h-5 w-5" />
//           </button>

//           {/* Cards Row */}
//           <div className="overflow-hidden w-full">
//             <motion.div
//               className="flex"
//               animate={{ x: `${-100 * current}%` }}
//               transition={{ type: "spring", stiffness: 160, damping: 24 }}
//               style={{ width: `${100 * totalSlides}%` }}
//             >
//               {testimonials.map((t, index) => (
//                 <div
//                   key={index}
//                   className="min-w-[25%] px-4 flex justify-center"
//                 >
//                   <Card className="w-full backdrop-blur-md bg-card/80 border shadow-xl rounded-2xl p-8">
//                     <CardContent>
//                       <div className="flex mb-4">
//                         {[...Array(t.rating)].map((_, i) => (
//                           <span key={i} className="text-accent text-2xl">★</span>
//                         ))}
//                       </div>
//                       <blockquote className="text-base text-foreground leading-relaxed mb-6 italic">
//                         "{t.text}"
//                       </blockquote>
//                       <p className="text-muted-foreground font-medium">— {t.author}</p>
//                     </CardContent>
//                   </Card>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           <button
//             onClick={next}
//             className="hidden md:flex absolute right-0 p-3 rounded-full bg-background shadow hover:bg-muted transition"
//           >
//             <ChevronRight className="h-5 w-5" />
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center mt-6 space-x-2">
//           {Array.from({ length: totalSlides }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`w-3 h-3 rounded-full transition ${
//                 current === index ? "bg-primary" : "bg-muted-foreground/30"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;





"use client";

import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      text: "I am incredibly grateful for the motivation and guidance I received from Solomon which helped me secure my first IT support job.",
      author: "Joseph - Recent Graduate",
      rating: 5,
    },
    {
      text: "CareerLeap helped me turn my thesis into a portfolio project. That changed everything.",
      author: "International MSc Student",
      rating: 5,
    },
    {
      text: "My CV and LinkedIn improved dramatically—I got more interviews in 3 weeks than in the last 6 months.",
      author: "Recent Graduate",
      rating: 5,
    },
    {
      text: "The mock interviews + mentorship helped me land a full-time role faster than expected.",
      author: "Engineering Student",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-[#f8f9f9]">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from international students who transformed their careers
          </p>
        </div>

        {/* Grid of 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <Card
              key={index}
              className="w-full lg:w-[300px] backdrop-blur-md bg-card/80 border shadow-xl rounded-2xl p-6"
            >
              <CardContent>
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-sm text-foreground leading-relaxed mb-4 italic">
                  "{t.text}"
                </blockquote>

                {/* Author */}
                <p className="text-muted-foreground font-medium">— {t.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
