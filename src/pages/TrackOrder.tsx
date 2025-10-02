import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Truck, CheckCircle, MapPin } from "lucide-react";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [tracking, setTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId) {
      setTracking(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={3} />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Track Your Order</h1>
        
        <Card className="max-w-2xl mx-auto mb-12">
          <CardContent className="p-6">
            <form onSubmit={handleTrack} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Order ID or Tracking Number</label>
                <Input
                  placeholder="Enter your order ID (e.g., ORD-123456)"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Track Order</Button>
            </form>
          </CardContent>
        </Card>

        {tracking && (
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Order #{orderId || "ORD-123456"}</h2>
                  <p className="text-muted-foreground">Estimated delivery: January 25, 2024</p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary text-primary-foreground">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Order Confirmed</h3>
                      <p className="text-sm text-muted-foreground">January 20, 2024 at 10:30 AM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary text-primary-foreground">
                      <Package className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Order Packed</h3>
                      <p className="text-sm text-muted-foreground">January 21, 2024 at 2:15 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary text-primary-foreground">
                      <Truck className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Out for Delivery</h3>
                      <p className="text-sm text-muted-foreground">January 22, 2024 at 8:00 AM</p>
                      <p className="text-sm mt-2">Currently in transit to your location</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 opacity-50">
                    <div className="p-3 rounded-full bg-muted">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Delivered</h3>
                      <p className="text-sm text-muted-foreground">Pending</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default TrackOrder;
