"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProductActionsProps {
  slug: string;
  name: string;
  price: string;
}
export function ProductActions({ slug, name, price }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center rounded-md border border-border">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Decrease quantity"
          title="Decrease quantity"
          disabled={quantity === 1}
          onClick={() => setQuantity((current) => Math.max(1, current - 1))}
        >
          <Minus aria-hidden="true" />
        </Button>

        <span className="flex w-8 justify-center text-sm font-medium" aria-live="polite">
          {quantity}
        </span>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Increase quantity"
          title="Increase quantity"
          onClick={() => setQuantity((current) => current + 1)}
        >
          <Plus aria-hidden="true" />
        </Button>
      </div>

      <Button type="button">Add to cart</Button>
    </div>
  );
}
