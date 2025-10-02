import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={3} />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Cookies Policy</h1>
        
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Types of Cookies We Use</h2>
              
              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, shopping cart functionality, and secure access to certain areas of the website.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Performance Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies collect information about how visitors use our website, such as which pages are visited most often. This helps us improve the performance and user experience of our site.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Functionality Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies allow our website to remember choices you make (such as your username, language, or region) and provide enhanced, personalized features.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Targeting/Advertising Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies are used to deliver advertisements that are relevant to you and your interests. They also help limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">How We Use Cookies</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>To keep you signed in to your account</li>
                <li>To remember items in your shopping cart</li>
                <li>To understand and analyze how you use our website</li>
                <li>To personalize your experience and show relevant content</li>
                <li>To improve our website performance and functionality</li>
                <li>To deliver targeted advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may also use third-party services that set cookies on our website. These include analytics services (like Google Analytics), advertising networks, and social media platforms. These third parties may use cookies to track your browsing activity across different websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Setting your browser to refuse all cookies or to alert you when a cookie is being sent</li>
                <li>Deleting cookies that have already been set</li>
                <li>Using our cookie consent tool when you first visit our website</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Please note that if you choose to block or delete cookies, some features of our website may not function properly, and your user experience may be affected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookies Policy from time to time to reflect changes in technology, legislation, or our business operations. We encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our use of cookies, please contact us at privacy@easybuysell.com or call 1-800-EASYBUYS.
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

export default CookiesPolicy;
