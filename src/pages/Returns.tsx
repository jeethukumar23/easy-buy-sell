import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const returnedItems = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    image: "/placeholder.svg",
    price: 999,
    reason: "Defective product",
    status: "Processing",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Samsung Galaxy Watch",
    image: "/placeholder.svg",
    price: 299,
    reason: "Wrong item delivered",
    status: "Refunded",
    date: "2024-01-10"
  },
  {
    id: 3,
    name: "Sony Headphones",
    image: "/placeholder.svg",
    price: 199,
    reason: "Not as described",
    status: "Approved",
    date: "2024-01-12"
  }
];

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={3} />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Returns & Refunds</h1>
        
        <div className="mb-8 p-6 bg-surface-elevated rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Return Policy</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Returns accepted within 30 days of delivery</li>
            <li>• Items must be unused and in original packaging</li>
            <li>• Refund processed within 5-7 business days</li>
            <li>• Free return shipping for defective items</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Recent Returns</h2>
        <div className="space-y-4">
          {returnedItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">Reason: {item.reason}</p>
                    <p className="text-sm text-muted-foreground">Date: {item.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-primary mb-2">${item.price}</p>
                    <Badge
                      variant={
                        item.status === "Refunded" ? "default" :
                        item.status === "Approved" ? "secondary" : "outline"
                      }
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <Button variant="outline">Track Return</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Returns;
