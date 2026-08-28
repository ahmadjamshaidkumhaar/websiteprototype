import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      </div>
      <div className="container-x relative py-24 text-white md:py-32">
        <p className="animate-fade-up text-xs uppercase tracking-[0.4em] text-accent">{eyebrow}</p>
        <h1 className="animate-fade-up mt-4 max-w-3xl text-4xl md:text-6xl">{title}</h1>
        {subtitle && <p className="animate-fade-up mt-4 max-w-2xl text-lg text-white/75">{subtitle}</p>}
      </div>
    </section>
  );
}
