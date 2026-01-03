import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={3} />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact customer service. This includes your name, email address, shipping address, payment information, and phone number.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Process and fulfill your orders</li>
                <li>Send you order confirmations and updates</li>
                <li>Respond to your customer service requests</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell or rent your personal information to third parties. We may share your information with service providers who help us operate our business, such as payment processors and shipping companies, but only to the extent necessary to provide our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@easybuysell.com or call 1-800-EASYBUYS.
              </p>
            </section>

            <p className="text-sm text-muted-foreground pt-6 border-t">
              Last Updated: January 1, 2024
            </p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
