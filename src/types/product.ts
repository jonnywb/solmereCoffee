export interface Product {
  name: string;
  note: string;
  description: string;
  price: number;
  category: "coffee" | "accessories" | "bundles";
  slug: string;
  featured?: boolean;
}
