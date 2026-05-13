import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CategorySection } from "@/components/home/CategorySection";
import { ProductGrid } from "@/components/home/ProductGrid";
import { DealsSection } from "@/components/home/DealsSection";
import { useCart } from "@/hooks/useCart";

const Index = () => {
  const { cartCount } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={cartCount} />
      <main>
        <HeroSection />
        <CategorySection />
        <DealsSection />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
