import type { Product } from "@/types/product";

const products: Product[] = [
  {
    name: "Yirgacheffe Bloom",
    note: "Floral · Orange zest · Honey",
    description:
      "A bright and delicate Ethiopian coffee with floral aromatics, citrus sweetness, and a soft honeyed finish.",
    price: 18,
    category: "coffee",
    slug: "yirgacheffe-bloom",
    featured: true,
  },
  {
    name: "House Espresso",
    note: "Cocoa · Fig · Toasted almond",
    description: "A balanced espresso blend with rich cocoa, ripe fig, and toasted almond notes.",
    price: 17,
    category: "coffee",
    slug: "house-espresso",
    featured: true,
  },
  {
    name: "Brew Kit",
    note: "V60 set · Ceramic dripper · Filters",
    description: "A considered pour-over set with everything needed to build a calm and rewarding brewing ritual.",
    price: 42,
    category: "bundles",
    slug: "brew-kit",
    featured: true,
  },
  {
    name: "Velvet Roast",
    note: "Dark chocolate · Berry · Walnut",
    description: "A full-bodied roast with dark chocolate richness, soft berry sweetness, and a rounded walnut finish.",
    price: 19,
    category: "coffee",
    slug: "velvet-roast",
  },
  {
    name: "Pour-Over Kit",
    note: "Stoneware dripper · Filters · Stand",
    description: "A tactile stoneware brewing set designed for slow mornings and precise, expressive coffee.",
    price: 35,
    category: "bundles",
    slug: "pour-over-kit",
  },
  {
    name: "Cinder Mug",
    note: "Hand-thrown ceramic · Stone grey",
    description: "A hand-thrown ceramic mug with a generous shape and quiet stone-grey finish.",
    price: 28,
    category: "accessories",
    slug: "cinder-mug",
  },
];

export default products;
