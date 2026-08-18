import SiteFooter from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import ProductCard from "@/components/shop/product-card";

const featuredProducts = [
  {
    name: "Yirgacheffe Bloom",
    note: "Floral · Orange zest · Honey",
    price: "£18",
  },
  {
    name: "House Espresso",
    note: "Cocoa · Fig · Toasted almond",
    price: "£17",
  },
  {
    name: "Brew Kit",
    note: "V60 set · Ceramic dripper · Filters",
    price: "£42",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* MAIN */}
      <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10 lg:px-10">
        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-3xl lg:pr-6">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Small batch coffee · Est. 2026
            </p>

            <h1 className="font-serif text-6xl leading-none sm:text-8xl">Coffee with a point of view.</h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
              Carefully sourced coffee and considered tools for slower mornings.
            </p>
          </div>

          {/* FEATURED PRODUCT */}
          <div className="rounded-[1.5rem] border border-border bg-card p-4 shadow-[0_20px_60px_-40px_rgba(74,45,36,0.45)]">
            <div className="rounded-[1.2rem] bg-[radial-gradient(circle_at_top,_rgba(184,107,66,0.18),_rgba(247,241,232,0.82)_40%,_rgba(232,216,196,0.92)_100%)] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">Featured roast</p>

              <div className="mt-4 flex items-end justify-between gap-4">
                <div>
                  <p className="font-serif text-3xl text-foreground">Solstice</p>
                  <p className="mt-2 text-sm text-muted-foreground">Ethiopia · Light roast</p>
                </div>

                <span className="rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
                  New harvest
                </span>
              </div>

              <div className="mt-6 rounded-[1rem] border border-border bg-background/60 p-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Brightness</span>
                  <span className="font-medium text-foreground">92</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-secondary">
                  <div className="h-2 w-[82%] rounded-full bg-primary" />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">From</p>
                  <p className="mt-2 text-2xl font-medium text-foreground">£18</p>
                </div>

                <button className="rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="mt-20">
          <div className="mb-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">Favourites</p>
            <h2 className="mt-2 font-serif text-4xl">This season's essentials.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.name} name={product.name} note={product.note} price={product.price} />
            ))}
          </div>
        </section>

        {/* VALUES */}
        <section className="mt-20 grid gap-6 md:grid-cols-3">
          <article className="rounded-[1.5rem] border border-border bg-card p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">01</p>
            <h3 className="mt-4 font-serif text-3xl">Roasted with care</h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Our coffees are sourced directly and roasted in small batches.
            </p>
          </article>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
