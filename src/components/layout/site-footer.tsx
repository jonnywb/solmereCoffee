import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p className="font-serif text-2xl text-foreground">Solmere</p>
          <p className="mt-2">Coffee, tools, and slower rituals.</p>
        </div>

        <div className="flex gap-6">
          <Link href="/shop" className="transition-colors hover:text-primary">
            Shop
          </Link>
          <Link href="/journal" className="transition-colors hover:text-primary">
            Journal
          </Link>
          <Link href="/account" className="transition-colors hover:text-primary">
            Account
          </Link>
        </div>
      </div>
    </footer>
  );
}
