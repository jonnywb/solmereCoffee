"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ProductCard from "./product-card";
import { useState } from "react";

export function FilterToggles({ setSelectedCategory }: { setSelectedCategory: (category: string) => void }) {
  return (
    <ToggleGroup
      variant="outline"
      className="md:col-span-3"
      defaultValue={["all"]}
      aria-label="Filter products by category"
      onValueChange={(value) => setSelectedCategory(value[0])}
    >
      <ToggleGroupItem value="all" aria-label="All Products">
        All Products
      </ToggleGroupItem>
      <ToggleGroupItem value="coffee" aria-label="Toggle Coffee">
        Coffee
      </ToggleGroupItem>
      <ToggleGroupItem value="accessories" aria-label="Toggle Accessories">
        Accessories
      </ToggleGroupItem>
      <ToggleGroupItem value="bundles" aria-label="Toggle Bundles">
        Bundles
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export function ProductGrid({
  products,
}: {
  products: Array<{ name: string; note: string; price: number; category: string; slug: string }>;
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <FilterToggles setSelectedCategory={setSelectedCategory} />
      {products
        .filter((product) => selectedCategory === "all" || product.category === selectedCategory)
        .map((product) => (
          <ProductCard
            key={product.slug}
            name={product.name}
            note={product.note}
            price={product.price}
            slug={product.slug}
          />
        ))}
    </div>
  );
}
