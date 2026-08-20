import type { Metadata } from "next";
import { DM_Mono, Instrument_Serif, Manrope } from "next/font/google";
import { CartProvider } from "@/components/cart/cart-content";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const monoFont = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Solmere Coffee Company",
  description: "Built and designed by Jonathan Brierley",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} antialiased`}>
      <body className="flex min-h-full flex-col">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
