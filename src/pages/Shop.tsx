
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import NewsletterSection from '@/components/NewsletterSection';
import { Product } from '@/types';

// Sample products
const allProducts: Product[] = [
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
  {
    id: "5",
    name: "Organic Duck Eggs (Half Dozen)",
    description: "Nutritious and flavorful duck eggs from our organically raised ducks.",
    price: 5.99,
    imageUrl: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "eggs",
    inStock: true,
  },
  {
    id: "6",
    name: "Whole Organic Chicken",
    description: "Farm-raised whole chicken, perfect for roasting or grilling.",
    price: 18.99,
    imageUrl: "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "meat",
    isPopular: true,
    inStock: true,
  },
  {
    id: "7",
    name: "Chick Starter Feed (2kg)",
    description: "Specially formulated feed for newly hatched chicks to promote healthy growth.",
    price: 14.99,
    imageUrl: "https://images.unsplash.com/photo-1581613868481-11711a7e9051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "feed",
    inStock: true,
  },
  {
    id: "8",
    name: "Egg Incubator",
    description: "Digital temperature-controlled incubator for hatching poultry eggs.",
    price: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1582757345040-c89cbb9c50b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "equipment",
    inStock: true,
  },
];

const categoryMap = {
  eggs: "Farm Fresh Eggs",
  meat: "Chicken Meat",
  feed: "Poultry Feed",
  equipment: "Poultry Equipment",
};

const Shop = () => {
  const { category } = useParams<{ category?: string }>();
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [pageTitle, setPageTitle] = useState("All Products");

  useEffect(() => {
    if (category && Object.keys(categoryMap).includes(category)) {
      const filteredProducts = allProducts.filter(product => product.category === category);
      setProducts(filteredProducts);
      setPageTitle(categoryMap[category as keyof typeof categoryMap]);
    } else {
      setProducts(allProducts);
      setPageTitle("All Products");
    }
  }, [category]);

  return (
    <div>
      <Navbar />
      
      <div className="bg-poultry-brown/10 py-10">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-poultry-brown text-center">{pageTitle}</h1>
          <p className="text-center text-gray-600 mt-4">
            Discover our quality poultry products, fresh from our farm to your table.
          </p>
        </div>
      </div>
      
      <div className="container-custom py-10">
        {/* Filter options can be added here in future iterations */}
        <ProductGrid products={products} />
      </div>
      
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Shop;
