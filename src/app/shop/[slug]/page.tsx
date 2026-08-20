import { SiteHeader } from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/footer";
import { ProductActions } from "@/components/shop/product-actions";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import products from "@/data/products";

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const product = products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }
  return (
    <>
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10 lg:px-10">
        <section className="mt-20">
          <Link
            href="/shop"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            <span>Back to shop</span>
          </Link>
          <article className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
            <div className="aspect-square rounded-[1.5rem] bg-secondary p-6">
              <div className="h-full w-full rounded-[1rem] bg-background/60" />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">{product.category}</p>

                <h1 className="mt-2 font-serif text-4xl leading-tight sm:text-5xl">{product.name}</h1>

                <p className="mt-2 text-sm text-muted-foreground">{product.note}</p>

                <div className="mt-8 border-t border-border pt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">About this product</p>

                  <p className="mt-4 text-muted-foreground">{product.description}</p>
                </div>
              </div>
              <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-6">
                <ProductActions slug={product.slug} name={product.name} price={product.price} />
                <span className="font-serif text-2xl">£{product.price}</span>
              </div>
            </div>
          </article>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
