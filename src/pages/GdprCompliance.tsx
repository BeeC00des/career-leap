import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GdprCompliance = () => {
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

        <h1 className="text-4xl font-bold mb-8">GDPR Compliance</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Our Commitment to GDPR</h2>
            <p className="text-muted-foreground leading-relaxed">
              CareerLeap is fully committed to complying with the General Data Protection Regulation (GDPR) and protecting the privacy rights of individuals in the European Union. This document outlines our GDPR compliance measures and your rights under GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Legal Basis for Processing</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              We process your personal data under the following legal bases:
            </p>
            <ul className="list-disc list-inside ml-4 text-muted-foreground space-y-1">
              <li><strong>Consent:</strong> When you provide explicit consent for specific processing activities</li>
              <li><strong>Contract:</strong> When processing is necessary to fulfill our services to you</li>
              <li><strong>Legal Obligation:</strong> When we must comply with legal requirements</li>
              <li><strong>Legitimate Interest:</strong> When necessary for our legitimate business interests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Your Rights Under GDPR</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">3.1 Right to Access</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to request access to your personal data and receive a copy of the information we hold about you.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">3.2 Right to Rectification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You can request correction of any inaccurate or incomplete personal data we hold about you.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">3.3 Right to Erasure (Right to be Forgotten)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You can request deletion of your personal data when there is no compelling reason for its continued processing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">3.4 Right to Restrict Processing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You can request that we limit the processing of your personal data under certain circumstances.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">3.5 Right to Data Portability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to receive your personal data in a structured, commonly used format and transmit it to another controller.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">3.6 Right to Object</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You can object to the processing of your personal data based on legitimate interests or for direct marketing purposes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">3.7 Right to Withdraw Consent</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Where we rely on consent, you have the right to withdraw it at any time without affecting the lawfulness of processing before withdrawal.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Protection Principles</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              We adhere to the following GDPR principles:
            </p>
            <ul className="list-disc list-inside ml-4 text-muted-foreground space-y-1">
              <li><strong>Lawfulness, Fairness, and Transparency:</strong> We process data lawfully and transparently</li>
              <li><strong>Purpose Limitation:</strong> We collect data for specific, legitimate purposes</li>
              <li><strong>Data Minimization:</strong> We only collect data that is necessary</li>
              <li><strong>Accuracy:</strong> We maintain accurate and up-to-date records</li>
              <li><strong>Storage Limitation:</strong> We retain data only as long as necessary</li>
              <li><strong>Integrity and Confidentiality:</strong> We protect data with appropriate security measures</li>
              <li><strong>Accountability:</strong> We demonstrate compliance with GDPR principles</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Security Measures</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              We implement robust technical and organizational measures to protect your data:
            </p>
            <ul className="list-disc list-inside ml-4 text-muted-foreground space-y-1">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection</li>
              <li>Incident response and breach notification procedures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods vary depending on the type of data and the purpose of processing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              When transferring data outside the European Economic Area (EEA), we ensure appropriate safeguards are in place, such as:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 text-muted-foreground space-y-1">
              <li>Standard Contractual Clauses approved by the EU Commission</li>
              <li>Adequacy decisions recognizing equivalent data protection standards</li>
              <li>Binding Corporate Rules for intra-group transfers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Data Protection Officer</h2>
            <p className="text-muted-foreground leading-relaxed">
              We have appointed a Data Protection Officer (DPO) to oversee our GDPR compliance. You can contact our DPO regarding any data protection matters.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Data Breach Notification</h2>
            <p className="text-muted-foreground leading-relaxed">
              In the event of a data breach that poses a risk to your rights and freedoms, we will notify the relevant supervisory authority within 72 hours and inform affected individuals without undue delay.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Third-Party Processing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We work with trusted third-party service providers who process data on our behalf. All processors are contractually bound to comply with GDPR requirements and implement appropriate security measures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar technologies in accordance with GDPR requirements. You can manage your cookie preferences and withdraw consent at any time through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to individuals under 18. We do not knowingly collect personal data from children. If we become aware of such collection, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Exercising Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              To exercise any of your GDPR rights, please contact us using the information below. We will respond to your request within one month, or inform you if we require an extension.
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="font-medium">Data Protection Officer</p>
              <p className="text-muted-foreground">CareerLeap</p>
              <p className="text-muted-foreground">Email: careerleap.de@gmail.com</p>
              <p className="text-muted-foreground mt-2 text-sm">
                You also have the right to lodge a complaint with your local supervisory authority if you believe we have not complied with GDPR.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Updates to This Document</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this GDPR Compliance document from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GdprCompliance;
