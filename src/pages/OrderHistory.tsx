import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Package, Eye, RotateCcw, Star } from "lucide-react";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  // Mock order data
  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "delivered",
      total: 1497,
      items: [
        { id: 1, name: "iPhone 15 Pro", price: 999, quantity: 1, image: "/placeholder.svg" },
        { id: 2, name: "AirPods Pro", price: 249, quantity: 2, image: "/placeholder.svg" }
      ],
      deliveryDate: "2024-01-18",
      trackingNumber: "TRK123456789"
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-20",
      status: "shipped",
      total: 2199,
      items: [
        { id: 3, name: "MacBook Pro 14\"", price: 1999, quantity: 1, image: "/placeholder.svg" }
      ],
      estimatedDelivery: "2024-01-25",
      trackingNumber: "TRK987654321"
    },
    {
      id: "ORD-2024-003",
      date: "2024-01-22",
      status: "processing",
      total: 2498,
      items: [
        { id: 4, name: "Sony Alpha A7 IV", price: 2498, quantity: 1, image: "/placeholder.svg" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivered":
        return "Delivered";
      case "shipped":
        return "Shipped";
      case "processing":
        return "Processing";
      case "cancelled":
        return "Cancelled";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={0} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span>Order History</span>
        </nav>

        <h1 className="text-3xl font-bold mb-8">Order History</h1>

        {orders.length === 0 ? (
          <div className="text-center py-16">
            <Package className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No orders yet</h2>
            <p className="text-muted-foreground mb-6">Start shopping to see your orders here</p>
            <Link to="/products">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg">Order {order.id}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Placed on {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className={getStatusColor(order.status)}>
                        {getStatusText(order.status)}
                      </Badge>
                      <span className="font-semibold">${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Order Items */}
                  <div className="space-y-3">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <Link to={`/product/${item.id}`}>
                            <h4 className="font-medium hover:text-primary transition-colors">
                              {item.name}
                            </h4>
                          </Link>
                          <p className="text-sm text-muted-foreground">
                            Quantity: {item.quantity} • ${item.price.toFixed(2)} each
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Separator />
                  
                  {/* Order Status Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      {order.status === "delivered" && order.deliveryDate && (
                        <p className="text-sm">
                          <span className="font-medium">Delivered on:</span>{" "}
                          {new Date(order.deliveryDate).toLocaleDateString()}
                        </p>
                      )}
                      {order.status === "shipped" && order.estimatedDelivery && (
                        <p className="text-sm">
                          <span className="font-medium">Estimated delivery:</span>{" "}
                          {new Date(order.estimatedDelivery).toLocaleDateString()}
                        </p>
                      )}
                      {order.trackingNumber && (
                        <p className="text-sm">
                          <span className="font-medium">Tracking:</span> {order.trackingNumber}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex gap-2 md:justify-end">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      
                      {order.status === "delivered" && (
                        <>
                          <Button variant="outline" size="sm">
                            <Star className="h-4 w-4 mr-2" />
                            Review
                          </Button>
                          <Button variant="outline" size="sm">
                            <RotateCcw className="h-4 w-4 mr-2" />
                            Return
                          </Button>
                        </>
                      )}
                      
                      {order.status === "shipped" && (
                        <Button variant="outline" size="sm">
                          Track Package
                        </Button>
                      )}
                      
                      <Button variant="outline" size="sm">
                        Buy Again
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default OrderHistory;