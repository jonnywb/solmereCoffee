"use client";

import { useCart } from "@/components/cart/cart-content";
import { SiteHeader } from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/footer";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CheckoutPage() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const { items, clearCart } = useCart();

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10 lg:px-10">
        <section className="mt-20">
          <Link href="/cart" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            Back to Cart
          </Link>

          <h1 className="mt-6 font-serif text-4xl">Checkout</h1>

          {orderPlaced ? (
            <div className="mt-12 max-w-xl border-t border-border pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">Order confirmed</p>

              <h2 className="mt-4 font-serif text-4xl">Thanks for your order.</h2>

              <p className="mt-4 leading-7 text-muted-foreground">
                Your mock order has been placed successfully. No payment has been taken, and this order has not been
                sent anywhere.
              </p>

              <Button render={<Link href="/shop" />} className="mt-8">
                Continue shopping
              </Button>
            </div>
          ) : (
            <div>
              <p className="mt-3 text-muted-foreground">Complete your details to place a mock order.</p>

              <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                <form className="space-y-10">
                  <section>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">Contact details</p>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" name="firstName" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" name="lastName" required />
                      </div>
                    </div>

                    <div className="mt-5 space-y-2">
                      <Label htmlFor="email">Email address</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                  </section>

                  <section>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">Delivery address</p>

                    <div className="mt-5 space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" name="address" required />
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" name="city" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="postcode">Postcode</Label>
                          <Input id="postcode" name="postcode" required />
                        </div>
                      </div>
                    </div>
                  </section>
                </form>
                <aside className="h-fit border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">Order summary</p>

                  <div className="mt-5 space-y-4">
                    {items.map((item) => (
                      <div key={item.slug} className="flex justify-between gap-4 text-sm">
                        <span className="text-muted-foreground">
                          {item.name} × {item.quantity}
                        </span>
                        <span>£{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Subtotal</span>

                    <span className="font-serif text-2xl">£{subtotal}</span>
                  </div>

                  <Button
                    type="button"
                    className="mt-6 w-full"
                    onClick={() => {
                      setOrderPlaced(true);
                      clearCart();
                    }}
                  >
                    Place mock order
                  </Button>

                  <p className="mt-3 text-xs leading-5 text-muted-foreground">
                    No payment will be taken. This is a preview checkout flow.
                  </p>
                </aside>
              </div>
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
