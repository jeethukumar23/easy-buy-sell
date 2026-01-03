import { Search, ShoppingCart, User, Menu, Heart, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useWishlist } from "@/hooks/useWishlist";

interface HeaderProps {
  cartItemsCount?: number;
}

export function Header({ cartItemsCount = 0 }: HeaderProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { user, signOut } = useAuth();
  const { wishlistCount } = useWishlist();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-surface-elevated shadow-elegant">
      <div className="container mx-auto px-2 md:px-4 py-3">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="EasyBuySell" className="h-6 w-6 md:h-8 md:w-8" />
              <span className="text-base md:text-xl font-bold text-brand-primary hidden sm:inline">EasyBuySell</span>
            </Link>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-2 md:mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 pr-4 bg-surface-base border-border text-left"
                style={{ direction: 'ltr' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>

          {/* Navigation Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex relative">
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {wishlistCount}
                </Badge>
              )}
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
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="font-medium">
                    {user.email}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/order-history">Order History</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Categories (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6 mt-3 pt-3 border-t">
          <span className="text-sm font-medium">Categories:</span>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/products?category=Electronics" className="hover:text-foreground transition-colors">Electronics</Link>
            <Link to="/products?category=Fashion" className="hover:text-foreground transition-colors">Fashion</Link>
            <Link to={`/products?category=${encodeURIComponent('Home & Garden')}`} className="hover:text-foreground transition-colors">Home & Garden</Link>
            <Link to="/products?category=Books" className="hover:text-foreground transition-colors">Books</Link>
            <Link to="/products?category=Sports" className="hover:text-foreground transition-colors">Sports</Link>
            <Link to="/products?category=Beauty" className="hover:text-foreground transition-colors">Beauty</Link>
          </div>
        </div>
      </div>
    </header>
  );
}