import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Heart, Shield, Zap, Users, ArrowRight } from "lucide-react";
import texasImg from "@/assets/texas-highway.jpg";
import driverImg from "@/assets/driver.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Apex Logistics & Freight Inc" },
      { name: "description", content: "Learn about Apex Logistics & Freight Inc, a trusted freight brokerage built on reliable service, strong relationships, and nationwide coverage." },
      { property: "og:title", content: "About Apex Logistics & Freight Inc" },
      { property: "og:description", content: "Trusted freight brokerage built on service, transparency and dependable logistics support." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Driver First", desc: "We built this company for the people behind the wheel." },
  { icon: Shield, title: "Transparent", desc: "Honest rates, real conversations, no hidden fees." },
  { icon: Zap, title: "Responsive", desc: "24/7 dispatch that actually picks up the phone." },
  { icon: Users, title: "Relationship-Driven", desc: "Long-term partners, not one-off transactions." },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title="A Coast-to-Coast Story Written in Miles."
        subtitle="Apex Logistics & Freight Inc is built on dependable service, strong relationships, and freight solutions that move with precision."
        image={texasImg}
      />

      <section className="container-x py-24">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Our Story</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Founded on the Freeway.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Apex Logistics & Freight Inc was built to serve shippers and carriers with fast communication,
                dependable execution, and freight solutions designed around real business needs.
              </p>
              <p>
                We move freight across the country with a focus on reliability, transparency, and performance —
                from dry vans and reefers to flatbeds and specialized freight.
              </p>
              <p>
                Whether you're a shipper needing a trusted logistics partner or a carrier looking for consistent,
                fair-paying opportunities — we’re here to move you forward.
              </p>
            </div>
            <Link to="/request-quote" className="mt-10 btn-accent inline-flex">
              Work With Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <img src={driverImg} alt="Truck driver beside semi truck" loading="lazy" width={1200} height={1400} className="rounded-lg object-cover shadow-[var(--shadow-elegant)]" />
            <div className="absolute -bottom-6 -right-6 max-w-xs rounded-lg bg-[oklch(0.17_0.008_20)] p-6 text-white shadow-[var(--shadow-elegant)]">
              <p className="font-display text-lg leading-tight">"Reliable freight. Real communication. Results that keep moving."</p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-accent">— Apex Logistics & Freight Inc</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">What We Stand For</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Our Core Values</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                style={{ animationDelay: `${i * 80}ms` }}
                className="animate-fade-up rounded-lg border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <v.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-5 text-xl">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="rounded-2xl bg-[oklch(0.17_0.008_20)] p-12 text-white md:p-16">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent">Get in Touch</p>
              <h2 className="mt-3 text-3xl">Talk to a Human.</h2>
            </div>
            <div className="md:col-span-2 grid gap-6 sm:grid-cols-3">
              <div>
                <div className="text-xs uppercase tracking-wider text-white/50">Company</div>
                <div className="mt-1 text-lg">Apex Logistics & Freight Inc</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/50">MC51906956</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/50">Phone</div>
                <a href="tel:+15623328138" className="mt-1 block text-lg hover:text-accent">(562) 332-8138</a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/50">Email</div>
                <a href="mailto:apexlogisticsinc91@gmail.com" className="mt-1 block text-lg hover:text-accent break-all">apexlogisticsinc91@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
