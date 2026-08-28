import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Truck, Snowflake, Package, Wrench, Zap, Ship, ArrowRight } from "lucide-react";
import yardImg from "@/assets/freight-yard.jpg";
import flatbedImg from "@/assets/service-flatbed.jpg";
import reeferImg from "@/assets/service-reefer.jpg";
import dryvanImg from "@/assets/service-dryvan.jpg";
import heavyImg from "@/assets/service-heavyhaul.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — METT-ACT LLC" },
      { name: "description", content: "Dry van, reefer, flatbed, heavy haul, expedited and intermodal freight services across the USA." },
      { property: "og:title", content: "Freight Services — METT-ACT LLC" },
      { property: "og:description", content: "Full-service freight brokerage — dry van, reefer, flatbed, heavy haul & more." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Package, title: "Dry Van Freight", image: dryvanImg, desc: "The workhorse of American logistics. We handle full and partial truckload dry-van shipments with 53' trailers across all 48 states.", bullets: ["Full truckload & partials", "Dock-to-dock delivery", "OS&D handling"] },
  { icon: Snowflake, title: "Refrigerated (Reefer)", image: reeferImg, desc: "Temperature-sensitive freight demands precision. Our reefer network keeps produce, pharma and frozen goods within tolerance from pickup to POD.", bullets: ["Continuous temp monitoring", "Multi-temp trailers", "FSMA compliant"] },
  { icon: Truck, title: "Flatbed & Step Deck", image: flatbedImg, desc: "For freight that won't fit in a box. Steel, lumber, machinery and construction materials moved with tarps, straps and experience.", bullets: ["48' & 53' flatbeds", "Step decks & RGN", "Tarps & securement"] },
  { icon: Wrench, title: "Heavy Haul & Oversized", image: heavyImg, desc: "Permit loads, equipment relocation and superloads coordinated with routing engineers and pilot cars where required.", bullets: ["Multi-state permits", "Pilot car coordination", "Lowboys & RGN"] },
];

const secondary = [
  { icon: Zap, title: "Expedited", desc: "Hot loads and team drivers when the clock is running." },
  { icon: Ship, title: "Intermodal", desc: "Rail-to-truck drayage from every major US port." },
  { icon: Package, title: "LTL", desc: "Less-than-truckload freight with tiered pricing." },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Services"
        title="Full-Service Freight, Coast to Coast."
        subtitle="Whatever you ship, wherever it's going — we've got the equipment, the network and the people to get it there."
        image={yardImg}
      />

      <section className="container-x py-24">
        <div className="grid gap-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-lg group">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-[oklch(0.17_0.008_20)] text-accent">
                  <s.icon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl md:text-4xl">{s.title}</h2>
                <p className="mt-4 text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm">
                      <span className="h-1.5 w-6 bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to="/request-quote" className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-semibold uppercase tracking-wider text-ink hover:text-accent">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[oklch(0.17_0.008_20)] py-24 text-white">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Also Available</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Specialty Solutions</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {secondary.map((s) => (
              <div key={s.title} className="rounded-lg border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10">
                <s.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-4 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
