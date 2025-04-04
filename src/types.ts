
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  isPopular?: boolean;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
}
