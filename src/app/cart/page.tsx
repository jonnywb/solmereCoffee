"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { useCart } from "@/components/cart/cart-content";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function CartPage() {
  const { items, increaseItem, decreaseItem, removeItem } = useCart();

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10 lg:px-10">
        <section className="mt-20">
          <h1 className="font-serif text-4xl">Your cart</h1>

          {items.length === 0 ? (
            <div className="mt-10 border-t border-border pt-8">
              <p className="text-muted-foreground">Your cart is currently empty.</p>
              <Link
                href="/shop"
                className="mt-6 inline-flex rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Continue shopping
              </Link>
            </div>
          ) : (
            <div className="mt-10 border-t border-border pt-8">
              <div className="space-y-6">
                {items.map((item) => {
                  const lineTotal = item.price * item.quantity;
                  return (
                    <article
                      key={item.slug}
                      className="flex items-start justify-between gap-6 border-b border-border pb-6"
                    >
                      <div>
                        <h2 className="font-serif text-2xl">{item.name}</h2>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Quantity</span>

                          <div className="flex items-center rounded-md border border-border">
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon-sm"
                              aria-label={`Decrease ${item.name} quantity`}
                              title={`Decrease ${item.name} quantity`}
                              onClick={() => decreaseItem(item.slug)}
                            >
                              <Minus aria-hidden="true" />
                            </Button>

                            <span className="flex w-8 justify-center text-sm font-medium" aria-live="polite">
                              {item.quantity}
                            </span>

                            <Button
                              type="button"
                              variant="ghost"
                              size="icon-sm"
                              aria-label={`Increase ${item.name} quantity`}
                              title={`Increase ${item.name} quantity`}
                              onClick={() => increaseItem(item.slug)}
                            >
                              <Plus aria-hidden="true" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="text-right">
                          <p className="font-medium">£{lineTotal}</p>
                          <p className="mt-1 text-xs text-muted-foreground">£{item.price} each</p>
                        </div>

                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          aria-label={`Remove ${item.name} from cart`}
                          title={`Remove ${item.name} from cart`}
                          onClick={() => removeItem(item.slug)}
                        >
                          <Trash2 aria-hidden="true" />
                        </Button>
                      </div>
                    </article>
                  );
                })}
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Subtotal</span>

                  <span className="font-serif text-2xl">£{subtotal}</span>
                </div>

                <div className="mt-6 flex justify-end">
                  <Button render={<Link href="/checkout" />}>Continue to checkout</Button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
