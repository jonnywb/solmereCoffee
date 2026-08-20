"use client";

import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AccountPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10 lg:px-10">
        <section className="mx-auto mt-20 max-w-md">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">Your account</p>

          <h1 className="mt-3 font-serif text-4xl">Welcome back.</h1>

          <p className="mt-3 text-muted-foreground">Sign in to view your orders and account details.</p>

          <form className="mt-10 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>

            <Button type="button" className="w-full">
              Sign in
            </Button>
          </form>

          <p className="mt-6 text-sm text-muted-foreground">
            New to Solmere?{" "}
            <Link href="/account/register" className="text-primary hover:underline">
              Create an account
            </Link>
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
