import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Shirt, Home, Book, Dumbbell, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    icon: Laptop,
    description: "Latest gadgets and technology",
    itemCount: "50,000+ items",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: Shirt,
    description: "Trendy clothing and accessories",
    itemCount: "80,000+ items",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    id: "home",
    name: "Home & Garden",
    icon: Home,
    description: "Everything for your home",
    itemCount: "30,000+ items",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    id: "books",
    name: "Books",
    icon: Book,
    description: "Knowledge and entertainment",
    itemCount: "100,000+ items",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: "sports",
    name: "Sports",
    icon: Dumbbell,
    description: "Fitness and outdoor gear",
    itemCount: "25,000+ items",
    gradient: "from-red-500 to-pink-600"
  },
  {
    id: "beauty",
    name: "Beauty",
    icon: Sparkles,
    description: "Cosmetics and skincare",
    itemCount: "40,000+ items",
    gradient: "from-purple-500 to-violet-600"
  }
];

export function CategorySection() {
  return (
    <section className="py-16 bg-surface-elevated">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through our wide range of categories and find exactly what you need
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link 
                key={category.id}
                to={`/products?category=${encodeURIComponent(category.name)}`}
              >
                <Card 
                  className="group cursor-pointer hover:shadow-product transition-all duration-300 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className={`h-32 bg-gradient-to-br ${category.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="relative h-full flex items-center justify-center">
                        <Icon className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute top-3 right-3 w-16 h-16 bg-white/10 rounded-full blur-xl" />
                      <div className="absolute bottom-3 left-3 w-12 h-12 bg-white/20 rounded-full blur-lg" />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                      <p className="text-muted-foreground mb-3">{category.description}</p>
                      <p className="text-sm font-medium text-brand-primary">{category.itemCount}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}