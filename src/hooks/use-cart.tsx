
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem } from '@/types';

interface CartStore {
  items: CartItem[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  updateQuantity: (id: string, quantity: number) => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (data: Product) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === data.id);
          
          if (existingItem) {
            return {
              items: state.items.map((item) => {
                if (item.id === data.id) {
                  return { ...item, quantity: item.quantity + 1 };
                }
                return item;
              }),
            };
          }
          
          return {
            items: [...state.items, { ...data, quantity: 1 }],
          };
        });
      },
      removeItem: (id: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      removeAll: () => set({ items: [] }),
      updateQuantity: (id: string, quantity: number) => {
        set((state) => ({
          items: state.items.map((item) => {
            if (item.id === id) {
              return { ...item, quantity };
            }
            return item;
          }),
        }));
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
