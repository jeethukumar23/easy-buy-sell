import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  category: string;
}

// Mock data for demonstration
const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&auto=format",
    badge: "Best Seller",
    category: "Electronics"
  },
  {
    id: "2",
    name: "Premium Cotton T-Shirt",
    price: 24.99,
    rating: 4.3,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&auto=format",
    category: "Fashion"
  },
  {
    id: "3",
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.7,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&auto=format",
    badge: "Featured",
    category: "Electronics"
  },
  {
    id: "4",
    name: "Ceramic Coffee Mug Set",
    price: 39.99,
    rating: 4.2,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=300&h=300&fit=crop&auto=format",
    category: "Home & Garden"
  },
  {
    id: "5",
    name: "Gaming Mechanical Keyboard",
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.6,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop&auto=format",
    badge: "New",
    category: "Electronics"
  },
  {
    id: "6",
    name: "Leather Laptop Bag",
    price: 79.99,
    rating: 4.4,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&auto=format",
    category: "Fashion"
  }
];

export function ProductGrid() {
  return (
    <section className="py-16 bg-surface-base">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our hand-picked selection of the best products across all categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-product transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {product.badge && (
                    <Badge 
                      variant="destructive" 
                      className="absolute top-3 left-3"
                    >
                      {product.badge}
                    </Badge>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                  <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                  
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <Button size="sm" className="shrink-0">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}