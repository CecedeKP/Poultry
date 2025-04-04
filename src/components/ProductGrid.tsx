
import { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid = ({ products, title }: ProductGridProps) => {
  return (
    <section className="py-12">
      <div className="container-custom">
        {title && (
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-poultry-brown">{title}</h2>
            <div className="w-24 h-1 bg-poultry-green mx-auto mt-4"></div>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
