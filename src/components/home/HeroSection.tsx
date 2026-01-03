import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Truck, Shield, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-brand text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Shop Everything
            <br />
            <span className="text-gray-300">You Need</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-8 leading-relaxed">
            Discover millions of products at unbeatable prices. From electronics to fashion, 
            we have everything you're looking for.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/products">
              <Button size="lg" variant="secondary" className="group">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Browse Categories
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-2">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">Million+ Products</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-2">
                <Truck className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">Fast Delivery</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-2">
                <Shield className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">Secure Shopping</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-2">
                <CreditCard className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">Easy Returns</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-32 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
    </section>
  );
}