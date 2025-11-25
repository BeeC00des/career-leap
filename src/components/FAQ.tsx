import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What exactly is included in the beta program?",
      answer: "Beta participants get free access to our complete 8-week career acceleration program, including 1:1 mentoring sessions, portfolio development guidance, CV optimization, interview prep, and exclusive access to our founder for direct feedback and support. This is a community-supported initiative."
    },
    {
      question: "Who is this program designed for?",
      answer: "International students in Germany who are approaching graduation or recent graduates (within 2 years) looking to transition from academic life to professional careers. We focus on students from non-EU countries who face additional challenges in the German job market."
    },
    {
      question: "What's the time commitment expected?",
      answer: "The program is designed to fit around your schedule. Expect 3-5 hours per week including 1 weekly group session, 1 bi-weekly 1:1 mentoring session, and self-paced work on assignments and portfolio development."
    },
    {
      question: "Will this work for my field of study?",
      answer: "Our methodology applies across disciplines - whether you're in engineering, business, sciences, or humanities. We customize the approach to your specific field while focusing on universal career development principles that work in the German job market."
    },
    {
      question: "What happens after the beta program ends?",
      answer: "Beta participants become lifetime members of our alumni network and continue to receive support through our community platform. You'll also help shape the future versions of the program and get priority access to advanced modules we develop."
    },
    {
      question: "Do I need perfect German language skills?",
      answer: "While German skills are helpful, many international companies in Germany operate in English. We'll help you identify opportunities that match your current language level and provide guidance on improving your German for better career prospects."
    },
    {
      question: "How do you select beta participants?",
      answer: "We're looking for motivated students who are committed to their career development and willing to provide feedback to help us improve the program. We'll have a brief conversation to ensure mutual fit and program readiness."
    },
    {
      question: "What if I can't complete the full 8 - 12 weeks?",
      answer: "Life happens! The program is designed with flexibility in mind. If you need to adjust your timeline or take breaks, we'll work with you to ensure you still get maximum value from the experience."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-muted/30" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-6 slide-in-up">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-in-up animate-delay-200">
              Everything you need to know about our beta program and what to expect
            </p>
          </div>

          <div className="slide-in-up animate-delay-300">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left py-6 hover:no-underline">
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12 slide-in-up animate-delay-500">
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                We're here to help! Reach out and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:careerleap.de@gmail.com"
                  className="text-primary hover:text-primary-dark font-medium transition-colors"
                  aria-label="Email us at careerleap.de@gmail.com"
                >
                  📧 careerleap.de@gmail.com
                </a>
                <span className="hidden sm:block text-muted-foreground" aria-hidden="true">•</span>
                <a 
                  href="https://linkedin.com/company/careerleap"
                  className="text-primary hover:text-primary-dark font-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with us on LinkedIn"
                >
                  💼 LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;