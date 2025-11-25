import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using CareerLeap's platform, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              CareerLeap provides career development services, mentorship, and job placement support specifically designed for international students in Germany. Our services include career assessments, strategy consultations, resume optimization, and access to job opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              To use our services, you must:
            </p>
            <ul className="list-disc list-inside ml-4 text-muted-foreground space-y-1">
              <li>Be at least 18 years of age</li>
              <li>Be an international student or recent graduate in Germany</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. User Obligations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">4.1 Accurate Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to provide accurate, current, and complete information when using our services and to update such information as necessary.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">4.2 Prohibited Activities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2 text-muted-foreground space-y-1">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful or malicious code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Harass, abuse, or harm other users</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Service Availability</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to provide uninterrupted service, we do not guarantee that our platform will be available at all times. We reserve the right to modify, suspend, or discontinue any part of our services without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Payment and Fees</h2>
            <p className="text-muted-foreground leading-relaxed">
              Some services may require payment. By subscribing to paid services, you agree to pay all applicable fees. All fees are non-refundable unless otherwise specified or required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content, features, and functionality on our platform, including but not limited to text, graphics, logos, and software, are owned by CareerLeap and are protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. No Guarantee of Job Placement</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we work diligently to support your career development, CareerLeap does not guarantee job placement or specific employment outcomes. Our services are designed to enhance your employability and provide guidance, but employment decisions are ultimately made by third-party employers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, CareerLeap shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify and hold CareerLeap harmless from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of Germany, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our platform. Your continued use of our services after such changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="font-medium">CareerLeap</p>
              <p className="text-muted-foreground">Email: careerleap.de@gmail.com</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
