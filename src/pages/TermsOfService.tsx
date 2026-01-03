import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={3} />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using EasyBuySell, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Product Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, or error-free. We reserve the right to correct errors and update information at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Orders and Payments</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                By placing an order, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide accurate and complete information</li>
                <li>Pay all charges at the prices in effect when incurred</li>
                <li>Accept our right to refuse or cancel any order</li>
                <li>Acknowledge that order confirmation does not guarantee acceptance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Shipping and Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will make reasonable efforts to deliver products within estimated timeframes, but we are not liable for delays beyond our control. Risk of loss passes to you upon delivery to the carrier.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Returns and Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our return policy allows returns within 30 days of delivery for most items. Products must be in original condition. Refunds will be issued to the original payment method within 5-7 business days of receiving the return.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on our website, including text, graphics, logos, and images, is the property of EasyBuySell and protected by copyright laws. You may not reproduce, distribute, or create derivative works without our permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                EasyBuySell shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or products purchased through our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, contact us at legal@easybuysell.com or 1-800-EASYBUYS.
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

export default TermsOfService;
