import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CategorySection } from "@/components/home/CategorySection";
import { ProductGrid } from "@/components/home/ProductGrid";
import { DealsSection } from "@/components/home/DealsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={3} />
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
