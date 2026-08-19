import SiteFooter from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProductGrid } from "@/components/shop/product-grid";
import products from "@/data/products";

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
