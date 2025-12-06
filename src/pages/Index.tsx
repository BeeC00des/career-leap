import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutCareerLeap from "@/components/AboutCareerLeap";
import WhyCareerLeap from "@/components/WhyCareerLeap";
import HowItWorks from "@/components/HowItWorks";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import Testimonials from "@/components/Testimonials";
import PilotOffer from "@/components/PilotOffer";
import ComparisonTable from "@/components/ComparisonTable";
import AnimatedStats from "@/components/AnimatedStats";
import TrustBadges from "@/components/TrustBadges";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "CareerLeap",
    "description": "Non-profit career acceleration program empowering international students in Germany",
    "url": "https://careerleap.io",
    "sameAs": [
      "https://linkedin.com/company/careerleap"
    ],
    "offers": {
      "@type": "Offer",
      "category": "Career Mentorship",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <SEOHead
        title="CareerLeap - Transform Your Coursework into Career-Ready Projects | Non-Profit Career Support"
        description="Join 50 international students in our free community-supported program. Transform academic work into job-ready portfolios with expert mentorship. Program starts January 2026."
        canonicalUrl="https://careerleap.io"
        structuredData={structuredData}
      />
      {/* <ExitIntentPopup /> */}
      <BackToTop />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <TrustBadges />
        <AboutCareerLeap />
        <WhyCareerLeap />
        <AnimatedStats />
        <HowItWorks />
        <InteractiveTimeline />
        <ComparisonTable />
        <Testimonials />
        <PilotOffer />
        <FAQ />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
};

export default Index;
