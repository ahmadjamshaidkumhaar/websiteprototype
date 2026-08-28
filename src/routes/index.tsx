import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowRight, Truck, Snowflake, Package, Wrench, Shield, Clock, Globe2, TrendingUp } from "lucide-react";
import heroImg from "@/assets/hero-truck.jpg";
import yardImg from "@/assets/freight-yard.jpg";
import texasImg from "@/assets/texas-highway.jpg";
import dispatchImg from "@/assets/dispatch.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const services = [
  { icon: Package, title: "Dry Van", desc: "Standard freight, secured and delivered on time." },
  { icon: Snowflake, title: "Refrigerated", desc: "Temperature-controlled reefer loads coast to coast." },
  { icon: Truck, title: "Flatbed", desc: "Open-deck freight for construction, steel & oversized cargo." },
  { icon: Wrench, title: "Heavy Haul", desc: "Permit loads, equipment moves and specialized logistics." },
];

const stats = [
  { k: "10K+", v: "Loads Moved" },
  { k: "48", v: "States Served" },
  { k: "500+", v: "Carrier Partners" },
  { k: "24/7", v: "Dispatch" },
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Semi truck on American highway at sunset" className="h-full w-full object-cover animate-slow-zoom" width={1920} height={1080} />
          <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        </div>
        <div className="container-x relative flex min-h-[90vh] flex-col justify-center py-24 text-white">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.5em] text-accent">
            Apex Logistics & Freight Inc · MC51906956
          </p>
          <h1 className="animate-fade-up mt-6 max-w-4xl text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
            <span className="hero-navy">Moving America's </span>
            <span className="hero-red">Freight</span>
            <span className="hero-navy"> Forward.</span>
          </h1>
          <p className="animate-fade-up mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            Apex Logistics & Freight Inc connects shippers and carriers with reliable, coast-to-coast trucking solutions —
            backed by responsive dispatch, transparent rates and dependable service.
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-4">
            <Link to="/request-quote" className="btn-accent">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/load-board" className="btn-ghost-light hover:bg-white/10">
              View Load Board
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-up mt-16 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.v}>
                <div className="font-display text-4xl text-accent md:text-5xl">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.25em] text-white/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated truck strip */}
        <div className="relative h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-[oklch(0.17_0.008_20)] py-4 text-white/40 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12 pr-12 font-display text-xl uppercase tracking-[0.3em]">
              <span>Dry Van</span><span className="text-accent">◆</span>
              <span>Reefer</span><span className="text-accent">◆</span>
              <span>Flatbed</span><span className="text-accent">◆</span>
              <span>Heavy Haul</span><span className="text-accent">◆</span>
              <span>Expedited</span><span className="text-accent">◆</span>
              <span>Intermodal</span><span className="text-accent">◆</span>
              <span>LTL</span><span className="text-accent">◆</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-24">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent">What We Move</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Full-Service Freight Solutions</h2>
          </div>
          <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ink hover:text-accent">
            All services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              style={{ animationDelay: `${i * 100}ms` }}
              className="animate-fade-up group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-md bg-[oklch(0.17_0.008_20)] text-accent transition-colors group-hover:bg-[var(--gradient-accent)] group-hover:text-[oklch(0.17_0.008_20)]">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="absolute -bottom-1 left-0 h-1 w-0 bg-[var(--gradient-accent)] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </section>

      {/* SPLIT: TEXAS */}
      <section className="bg-[oklch(0.17_0.008_20)] text-white">
        <div className="container-x grid gap-12 py-24 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-lg">
            <img src={texasImg} alt="Freight truck on American highway at sunset" loading="lazy" width={1600} height={900} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Built for Moving Freight</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Built by Truckers.<br /> Powered by <span className="text-gradient-accent">People.</span></h2>
            <p className="mt-6 text-white/70">
              Apex Logistics & Freight Inc delivers dependable logistics support with a nationwide network and a
              service-first approach. We believe great logistics starts with honest relationships — between brokers,
              drivers, and shippers.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { icon: Shield, t: "Fully Bonded" },
                { icon: Clock, t: "24/7 Support" },
                { icon: Globe2, t: "48 States" },
              ].map((f) => (
                <div key={f.t} className="flex flex-col gap-2 border-l-2 border-accent pl-4">
                  <f.icon className="h-6 w-6 text-accent" />
                  <span className="text-sm uppercase tracking-wider">{f.t}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-10 inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-semibold uppercase tracking-wider text-accent">
              About the Company <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DISPATCH */}
      <section className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Live Dispatch</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Every Load Tracked.<br /> Every Mile Managed.</h2>
            <p className="mt-6 text-muted-foreground">
              Our dispatch center runs day and night, keeping shippers informed and carriers moving. From
              pickup to POD, you'll never wonder where your freight is.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Real-time GPS tracking on every load",
                "Same-day quote turnaround",
                "Dedicated account manager for shippers",
                "Quick-pay and factoring for carriers",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-accent text-[10px] font-bold text-[oklch(0.99_0.002_20)]">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src={dispatchImg} alt="Freight dispatch operations" loading="lazy" width={1400} height={900} className="rounded-lg shadow-[var(--shadow-elegant)]" />
            <div className="absolute -bottom-6 -left-6 rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-elegant)]">
              <TrendingUp className="h-8 w-8 text-accent" />
              <div className="mt-2 font-display text-2xl">98.7%</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">On-time delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={yardImg} alt="Freight distribution yard" loading="lazy" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[oklch(0.17_0.008_20/0.88)]" />
        <div className="container-x relative py-24 text-center text-white">
          <h2 className="text-4xl md:text-6xl">Ready to Move?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Get a competitive quote in minutes or join our growing carrier network.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/request-quote" className="btn-accent">Request a Quote</Link>
            <Link to="/carrier-registration" className="btn-ghost-light hover:bg-white/10">Carrier Sign-Up</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
