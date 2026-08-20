import Link from "next/link";

interface ProductCardProps {
  name: string;
  note: string;
  price: number;
  slug: string;
}

export default function ProductCard({ name, note, price, slug }: ProductCardProps) {
  return (
    <Link href={`/shop/${slug}`} className="block h-full">
      <article key={name} className="rounded-[1.5rem] border border-border bg-card p-4">
        <div className="rounded-[1rem] bg-secondary p-5">
          <div className="h-48 rounded-[0.8rem] bg-background/60" />
        </div>

        <div className="mt-5 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif text-2xl">{name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{note}</p>
          </div>
          <span className="font-medium">£{price}</span>
        </div>
      </article>
    </Link>
  );
}
