import Link from "next/link";

const navigation = [
  { label: "Shop", href: "/shop" },
  { label: "Journal", href: "/journal" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="font-serif text-3xl tracking-normal text-foreground">
          Solmere
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href="/account"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Account
          </Link>
          <Link
            href="/cart"
            className="font-mono text-xs uppercase tracking-wide text-foreground transition-colors hover:text-primary"
          >
            Cart (0)
          </Link>
        </div>
      </div>
    </header>
  );
}
