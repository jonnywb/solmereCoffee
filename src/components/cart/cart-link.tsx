"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/cart-content";

export function CartLink() {
  const { items } = useCart();

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link
      href="/cart"
      className="font-mono text-xs uppercase tracking-wide text-foreground transition-colors hover:text-primary"
    >
      Cart ({itemCount})
    </Link>
  );
}
