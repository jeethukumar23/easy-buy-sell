import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Users, TrendingUp, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={3} />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About EasyBuySell</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                EasyBuySell was founded with a simple mission: to make online shopping easy, affordable, and accessible to everyone. We started as a small electronics retailer and have grown into a comprehensive e-commerce platform offering thousands of products across multiple categories.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve millions of customers, providing them with quality products, competitive prices, and exceptional customer service. Our commitment to innovation and customer satisfaction drives everything we do.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <ShoppingBag className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">10M+ Products</h3>
                <p className="text-muted-foreground">Wide selection across all categories</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">5M+ Customers</h3>
                <p className="text-muted-foreground">Trusted by millions worldwide</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">99% Satisfaction</h3>
                <p className="text-muted-foreground">Customer satisfaction guaranteed</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Best E-commerce</h3>
                <p className="text-muted-foreground">Award-winning platform</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Customer First:</strong> We prioritize your needs and satisfaction above all else</li>
                <li><strong>Quality:</strong> We ensure every product meets our high standards</li>
                <li><strong>Innovation:</strong> We constantly improve our platform and services</li>
                <li><strong>Trust:</strong> We build lasting relationships through transparency and reliability</li>
                <li><strong>Affordability:</strong> We offer competitive prices without compromising quality</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
