import SiteFooter from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProductGrid } from "@/components/shop/product-grid";

const products = [
  {
    name: "Yirgacheffe Bloom",
    note: "Floral · Orange zest · Honey",
    price: "£18",
    category: "coffee",
  },
  {
    name: "House Espresso",
    note: "Cocoa · Fig · Toasted almond",
    price: "£17",
    category: "coffee",
  },
  {
    name: "Brew Kit",
    note: "V60 set · Ceramic dripper · Filters",
    price: "£42",
    category: "bundles",
  },
  {
    name: "Velvet Roast",
    note: "Dark chocolate · Berry · Walnut",
    price: "£19",
    category: "coffee",
  },
  {
    name: "Pour-Over Kit",
    note: "Stoneware dripper · Filters · Stand",
    price: "£35",
    category: "bundles",
  },
  {
    name: "Cinder Mug",
    note: "Hand-thrown ceramic · Stone grey",
    price: "£28",
    category: "accessories",
  },
];

export default function Shop() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10 lg:px-10">
        <section className="mt-20">
          <div className="mb-8">
            <h1 className="mt-2 font-serif text-4xl">Shop</h1>
          </div>

          <ProductGrid products={products} />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
