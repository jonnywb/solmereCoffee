"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10 lg:px-10">
        <section className="mx-auto mt-20 max-w-md">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">Your account</p>

          <h1 className="mt-3 font-serif text-4xl">Create your account.</h1>

          <p className="mt-3 text-muted-foreground">Save your details and keep track of your orders.</p>

          <form className="mt-10 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" name="name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>

            <Button type="button" className="w-full">
              Create account
            </Button>
          </form>

          <p className="mt-6 text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/account" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
