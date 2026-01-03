import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Clock, MapPin } from "lucide-react";

const ShippingInfo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={3} />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Shipping Information</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Standard Shipping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary mb-2">FREE</p>
              <p className="text-muted-foreground">Delivery in 5-7 business days</p>
              <p className="text-sm text-muted-foreground mt-2">Available on all orders</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Express Shipping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary mb-2">$9.99</p>
              <p className="text-muted-foreground">Delivery in 2-3 business days</p>
              <p className="text-sm text-muted-foreground mt-2">Fastest delivery option</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6" />
              Processing Time
            </h2>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Orders placed before 2 PM EST ship the same day</li>
                  <li>• Orders placed after 2 PM EST ship the next business day</li>
                  <li>• Processing time: 1-2 business days</li>
                  <li>• Weekend orders process on Monday</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              Delivery Areas
            </h2>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4">We currently ship to all addresses within the country.</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Major cities: 2-3 days delivery</li>
                  <li>• Metro areas: 3-5 days delivery</li>
                  <li>• Rural areas: 5-7 days delivery</li>
                  <li>• PO Boxes supported for most items</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Tracking Your Order</h2>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Tracking number sent via email when order ships</li>
                  <li>• Real-time tracking updates available</li>
                  <li>• Track orders in your account dashboard</li>
                  <li>• SMS notifications available upon request</li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingInfo;
