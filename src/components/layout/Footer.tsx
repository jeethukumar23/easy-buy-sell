import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.png";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Save subscription to database
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already subscribed",
            description: "This email is already subscribed to our newsletter.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Subscribed!",
          description: "Thank you for subscribing to our newsletter. You'll receive updates soon!",
        });
        setEmail("");
      }
    } catch (error: any) {
      console.error("Subscription error:", error);
      toast({
        title: "Subscription failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-brand-secondary text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="EasyBuySell" className="h-8 w-8 brightness-0 invert" />
              <span className="text-xl font-bold">EasyBuySell</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted e-commerce platform for all your shopping needs. Quality products, fast delivery, and excellent customer service.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Facebook className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://instagram.com/_mr_jeethu" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Instagram className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Youtube className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link to="/products" className="hover:text-foreground transition-colors">Shop</Link></li>
              <li><Link to="/orders" className="hover:text-foreground transition-colors">My Orders</Link></li>
              <li><Link to="/cart" className="hover:text-foreground transition-colors">Cart</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/help-center" className="hover:text-foreground transition-colors">Help Center</Link></li>
              <li><Link to="/returns" className="hover:text-foreground transition-colors">Returns</Link></li>
              <li><Link to="/shipping-info" className="hover:text-foreground transition-colors">Shipping Info</Link></li>
              <li><Link to="/track-order" className="hover:text-foreground transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get special offers and updates.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-surface-base border-border"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
                <Button 
                  variant="default" 
                  size="sm" 
                  onClick={handleSubscribe}
                  disabled={isLoading}
                >
                  {isLoading ? "..." : "Subscribe"}
                </Button>
              </div>
            </div>
            
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 9949888573</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>jeethukumar573@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>India, Andhra Pradesh, Tenali 522201</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 EasyBuySell. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
              <Link to="/cookies-policy" className="hover:text-foreground transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
