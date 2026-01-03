import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap, Gift } from "lucide-react";
import { Link } from "react-router-dom";

export function DealsSection() {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Today's Best Deals</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Limited time offers and flash sales you don't want to miss
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Flash Sale */}
          <Card className="lg:col-span-2 bg-gradient-to-r from-red-500 to-pink-600 text-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <Badge variant="secondary" className="bg-white/20 text-white mb-3">
                    <Zap className="h-3 w-3 mr-1" />
                    Flash Sale
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Up to 70% Off Electronics
                  </h3>
                  <p className="text-white/90 mb-4">
                    Smartphones, laptops, and accessories at unbeatable prices
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 text-sm mb-1">
                    <Clock className="h-4 w-4" />
                    Ends in
                  </div>
                  <div className="text-2xl font-bold">23:45:12</div>
                </div>
              </div>
              <Link to="/products">
                <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                  Shop Flash Sale
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Daily Deals */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
              <CardContent className="p-6">
                <Badge variant="secondary" className="bg-white/20 text-white mb-3">
                  <Gift className="h-3 w-3 mr-1" />
                  Deal of the Day
                </Badge>
                <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
                <p className="text-white/90 mb-4 text-sm">
                  On orders over $50. Limited time only.
                </p>
                <Link to="/products">
                  <Button size="sm" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                    Shop Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardContent className="p-6">
                <Badge variant="secondary" className="bg-white/20 text-white mb-3">
                  New Customer
                </Badge>
                <h3 className="text-xl font-bold mb-2">20% Off First Order</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Welcome bonus for new customers.
                </p>
                <Link to="/products">
                  <Button size="sm" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                    Get Discount
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Deal Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { title: "Fashion Sale", discount: "40% Off", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop&auto=format", category: "Fashion" },
            { title: "Home Essentials", discount: "25% Off", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&auto=format", category: "Home & Garden" },
            { title: "Beauty Products", discount: "30% Off", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop&auto=format", category: "Beauty" },
            { title: "Sports Gear", discount: "35% Off", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&auto=format", category: "Sports" }
          ].map((deal, index) => (
            <Link key={index} to={`/products?category=${encodeURIComponent(deal.category)}`}>
              <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={deal.image} 
                      alt={deal.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center text-white">
                        <p className="font-semibold text-sm">{deal.title}</p>
                        <p className="text-lg font-bold">{deal.discount}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}