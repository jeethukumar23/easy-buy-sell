import { Search, ShoppingCart, User, Menu, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useState } from "react";

interface HeaderProps {
  cartItemsCount?: number;
}

export function Header({ cartItemsCount = 0 }: HeaderProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-surface-elevated shadow-elegant">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="EasyBuySell" className="h-8 w-8" />
              <span className="text-xl font-bold text-brand-primary">EasyBuySell</span>
            </Link>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for products, brands and more..."
                className="pl-10 bg-surface-base border-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>

          {/* Navigation Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </Link>
            
            <Link to="/login">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Categories (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6 mt-3 pt-3 border-t">
          <span className="text-sm font-medium">Categories:</span>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/products?category=Electronics" className="hover:text-foreground transition-colors">Electronics</Link>
            <Link to="/products?category=Fashion" className="hover:text-foreground transition-colors">Fashion</Link>
            <Link to="/products?category=Home & Garden" className="hover:text-foreground transition-colors">Home & Garden</Link>
            <Link to="/products?category=Books" className="hover:text-foreground transition-colors">Books</Link>
            <Link to="/products?category=Sports" className="hover:text-foreground transition-colors">Sports</Link>
            <Link to="/products?category=Beauty" className="hover:text-foreground transition-colors">Beauty</Link>
          </div>
        </div>
      </div>
    </header>
  );
}