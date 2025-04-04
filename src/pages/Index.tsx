
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import FeatureSection from '@/components/FeatureSection';
import ProductGrid from '@/components/ProductGrid';
import TestimonialSection from '@/components/TestimonialSection';
import FaqSection from '@/components/FaqSection';
import NewsletterSection from '@/components/NewsletterSection';
import { Product } from '@/types';

// Sample featured products
const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Farm Fresh Eggs (Dozen)",
    description: "Freshly laid eggs from free-range chickens, packed with nutrients and flavor.",
    price: 4.99,
    imageUrl: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "eggs",
    isPopular: true,
    inStock: true,
  },
  {
    id: "2",
    name: "Organic Chicken Breast",
    description: "Tender, boneless chicken breast from our free-range, organically raised chickens.",
    price: 12.99,
    imageUrl: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "meat",
    inStock: true,
  },
  {
    id: "3",
    name: "Premium Poultry Feed (5kg)",
    description: "Nutritionally balanced feed formula for optimal poultry health and egg production.",
    price: 19.99,
    imageUrl: "https://images.unsplash.com/photo-1586788224331-947f68671cf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "feed",
    inStock: true,
  },
  {
    id: "4",
    name: "Automatic Chicken Feeder",
    description: "Durable automatic feeder that ensures consistent feeding for your poultry.",
    price: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "equipment",
    isPopular: true,
    inStock: true,
  },
];

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <CategorySection />
        <ProductGrid products={featuredProducts} title="Featured Products" />
        <FeatureSection />
        <TestimonialSection />
        <FaqSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
