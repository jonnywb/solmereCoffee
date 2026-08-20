"use client";

import { createContext, useContext, useState } from "react";

interface CartItem {
  slug: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (slug: string) => void;
  increaseItem: (slug: string) => void;
  decreaseItem: (slug: string) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItem(item: CartItem) {
    setItems((currentItems) => {
      const existingItem = currentItems.find((currentItem) => currentItem.slug === item.slug);

      if (!existingItem) {
        return [...currentItems, item];
      }

      return currentItems.map((currentItem) =>
        currentItem.slug === item.slug
          ? {
              ...currentItem,
              quantity: currentItem.quantity + item.quantity,
            }
          : currentItem,
      );
    });
  }

  function removeItem(slug: string) {
    setItems((currentItems) => currentItems.filter((item) => item.slug !== slug));
  }

  function increaseItem(slug: string) {
    setItems((currentItems) =>
      currentItems.map((item) => (item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item)),
    );
  }

  function decreaseItem(slug: string) {
    setItems((currentItems) =>
      currentItems
        .map((item) => (item.slug === slug ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    );
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, increaseItem, decreaseItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
