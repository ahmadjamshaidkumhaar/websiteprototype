import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Truck,
  DollarSign,
  Calendar,
  ArrowRight,
  Package,
  Ruler,
  Clock,
  Phone,
  Mail,
  User,
  ChevronDown,
  ChevronUp,
  Route as RouteIcon,
} from "lucide-react";
import dispatchImg from "@/assets/dispatch.jpg";

export const Route = createFileRoute("/load-board")({
  head: () => ({
    meta: [
      { title: "Load Board — METT-ACT LLC" },
      {
        name: "description",
        content:
          "Live freight loads across the USA — full details, rates, dimensions and dispatcher contact. Book direct with METT-ACT LLC.",
      },
    ],
  }),
  component: LoadBoardPage,
});

type Equipment = "Dry Van" | "Reefer" | "Flatbed" | "Heavy Haul";

type Load = {
  id: string;
  origin: string;
  destination: string;
  miles: number;
  deadhead: number;
  equipment: Equipment;
  weight: number;
  length: number;
  rate: number;
  pickup: string;
  pickupWindow: string;
  delivery: string;
  commodity: string;
  stops: number;
  temp?: string;
  hazmat: boolean;
  notes: string;
  dispatcher: string;
  dispatcherPhone: string;
  dispatcherEmail: string;
};

const LOADS: Load[] = [
  { id: "MA-2401", origin: "Brooklyn, NY", destination: "Atlanta, GA", miles: 630, deadhead: 12, equipment: "Dry Van", weight: 42000, length: 53, rate: 2450, pickup: "Tomorrow", pickupWindow: "07:00–11:00", delivery: "+1 day", commodity: "General Merchandise", stops: 1, hazmat: false, notes: "Drop & hook at origin. Live unload.", dispatcher: "Tene Cudjoe-Pierre", dispatcherPhone: "(516) 637-0715", dispatcherEmail: "mett718@yahoo.com" },
  { id: "MA-2402", origin: "Charlotte, NC", destination: "Los Angeles, CA", miles: 2080, deadhead: 45, equipment: "Reefer", weight: 38000, length: 53, rate: 5200, pickup: "Today", pickupWindow: "14:00–18:00", delivery: "+3 days", commodity: "Frozen Foods", stops: 1, temp: "-10 °F", hazmat: false, notes: "Continuous temp. TWIC not required.", dispatcher: "Tene Cudjoe-Pierre", dispatcherPhone: "(516) 637-0715", dispatcherEmail: "mett718@yahoo.com" },
  { id: "MA-2403", origin: "Chicago, IL", destination: "Denver, CO", miles: 1000, deadhead: 60, equipment: "Flatbed", weight: 46000, length: 48, rate: 2900, pickup: "Wed", pickupWindow: "08:00–12:00", delivery: "+2 days", commodity: "Steel Coils", stops: 1, hazmat: false, notes: "Tarps & 8 straps required. Coil racks provided.", dispatcher: "Tene Cudjoe-Pierre", dispatcherPhone: "(516) 637-0715", dispatcherEmail: "mett718@yahoo.com" },
  { id: "MA-2404", origin: "Brooklyn, NY", destination: "Dallas, TX", miles: 1050, deadhead: 0, equipment: "Dry Van", weight: 40000, length: 53, rate: 3100, pickup: "Thu", pickupWindow: "06:00–10:00", delivery: "+2 days", commodity: "Electronics", stops: 2, hazmat: false, notes: "High-value freight. Sealed trailer. Team optional.", dispatcher: "Tene Cudjoe-Pierre", dispatcherPhone: "(516) 637-0715", dispatcherEmail: "mett718@yahoo.com" },
  { id: "MA-2405", origin: "Columbus, OH", destination: "Phoenix, AZ", miles: 1830, deadhead: 90, equipment: "Reefer", weight: 35000, length: 53, rate: 4650, pickup: "Today", pickupWindow: "10:00–14:00", delivery: "+3 days", commodity: "Fresh Produce", stops: 1, temp: "34 °F", hazmat: false, notes: "Pulp temp required at pickup and delivery.", dispatcher: "Tene Cudjoe-Pierre", dispatcherPhone: "(516) 637-0715", dispatcherEmail: "mett718@yahoo.com" },
  { id: "MA-2406", origin: "Detroit, MI", destination: "Nashville, TN", miles: 540, deadhead: 130, equipment: "Dry Van", weight: 41000, length: 53, rate: 2200, pickup: "Fri", pickupWindow: "09:00–13:00", delivery: "Same day", commodity: "Auto Parts", stops: 1, hazmat: false, notes: "Drop trailer OK. 24-hr detention starts after 2 hrs.", dispatcher: "Tene Cudjoe-Pierre", dispatcherPhone: "(516) 637-0715", dispatcherEmail: "mett718@yahoo.com" },
  { id: "MA-2407", origin: "Louisville, KY", destination: "Kansas City, MO", miles: 570, deadhead: 105, equipment: "Flatbed", weight: 45000, length: 48, rate: 2100, pickup: "Tomorrow", pickupWindow: "07:00–11:00", delivery: "+1 day", commodity: "Lumber", stops: 1, hazmat: false, notes: "Tarps required. 4 straps min.", dispatcher: "Tene Cudjoe-Pierre", dispatcherPhone: "(516) 637-0715", dispatcherEmail: "mett718@yahoo.com" },
  { id: "MA-2408", origin: "Cincinnati, OH", destination: "Miami, FL", miles: 1180, deadhead: 155, equipment: "Reefer", weight: 39000, length: 53, rate: 3400, pickup: "Wed", pickupWindow: "12:00–16:00", delivery: "+2 days", commodity: "Seafood", stops: 1, temp: "28 °F", hazmat: false, notes: "Continuous temp. Chain up if OTR northbound return.", dispatcher: "Tene Cudjoe-Pierre", dispatcherPhone: "(516) 637-0715", dispatcherEmail: "mett718@yahoo.com" },
  { id: "MA-2409", origin: "Gary, IN", destination: "Seattle, WA", miles: 2050, deadhead: 155, equipment: "Heavy Haul", weight: 68000, length: 53, rate: 6800, pickup: "Mon", pickupWindow: "05:00–09:00", delivery: "+4 days", commodity: "Construction Equipment", stops: 1, hazmat: false, notes: "Oversize permits provided. Escorts arranged in WY.", dispatcher: "Tene Cudjoe-Pierre", dispatcherPhone: "(516) 637-0715", dispatcherEmail: "mett718@yahoo.com" },
  { id: "MA-2410", origin: "Brooklyn, NY", destination: "New Orleans, LA", miles: 950, deadhead: 0, equipment: "Flatbed", weight: 44000, length: 48, rate: 2650, pickup: "Today", pickupWindow: "13:00–17:00", delivery: "+2 days", commodity: "Steel Pipe", stops: 1, hazmat: false, notes: "Coil racks & tarps. Overnight parking secure on-site.", dispatcher: "Tene Cudjoe-Pierre", dispatcherPhone: "(516) 637-0715", dispatcherEmail: "mett718@yahoo.com" },
  { id: "MA-2411", origin: "St. Louis, MO", destination: "Charlotte, NC", miles: 720, deadhead: 260, equipment: "Dry Van", weight: 38500, length: 53, rate: 2350, pickup: "Thu", pickupWindow: "08:00–12:00", delivery: "+1 day", commodity: "Packaged Goods", stops: 1, hazmat: false, notes: "Drop & hook both ends.", dispatcher: "Tene Cudjoe-Pierre", dispatcherPhone: "(516) 637-0715", dispatcherEmail: "mett718@yahoo.com" },
  { id: "MA-2412", origin: "Milwaukee, WI", destination: "Newark, NJ", miles: 890, deadhead: 200, equipment: "Reefer", weight: 40000, length: 53, rate: 3550, pickup: "Fri", pickupWindow: "16:00–20:00", delivery: "+2 days", commodity: "Dairy", stops: 2, temp: "36 °F", hazmat: false, notes: "Multi-stop delivery. FIFO enforced.", dispatcher: "Tene Cudjoe-Pierre", dispatcherPhone: "(516) 637-0715", dispatcherEmail: "mett718@yahoo.com" },
];

const equipColors: Record<Equipment, string> = {
  "Dry Van": "bg-[oklch(0.9_0.05_240)] text-[oklch(0.3_0.1_240)]",
  Reefer: "bg-[oklch(0.9_0.07_190)] text-[oklch(0.3_0.1_200)]",
  Flatbed: "bg-[oklch(0.92_0.09_60)] text-[oklch(0.35_0.15_45)]",
  "Heavy Haul": "bg-[oklch(0.9_0.08_20)] text-[oklch(0.35_0.15_25)]",
};

function LoadBoardPage() {
  const [q, setQ] = useState("");
  const [equip, setEquip] = useState<string>("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return LOADS.filter((l) => {
      const matchQ =
        q === "" ||
        `${l.origin} ${l.destination} ${l.commodity} ${l.id}`
          .toLowerCase()
          .includes(q.toLowerCase());
      const matchE = equip === "All" || l.equipment === equip;
      return matchQ && matchE;
    });
  }, [q, equip]);

  return (
    <PageShell>
      <PageHero
        eyebrow="Load Board"
        title="Live Freight, Ready to Roll."
        subtitle="Full lane details, rates, weight, dimensions and dispatcher contact — updated daily. Book direct."
        image={dispatchImg}
      />

      <section className="container-x py-16">
        {/* Stats */}
        <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { label: "Active Loads", value: LOADS.length },
            { label: "Avg Rate/Mile", value: "$3.05" },
            { label: "Coverage", value: "48 States" },
            { label: "Dispatch", value: "24 / 7" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg border border-border bg-card px-4 py-3">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              <div className="mt-1 font-display text-2xl text-ink">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col gap-4 rounded-lg border border-border bg-card p-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search origin, destination, commodity or load ID..."
              className="w-full rounded-md border border-input bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", "Dry Van", "Reefer", "Flatbed", "Heavy Haul"].map((e) => (
              <button
                key={e}
                onClick={() => setEquip(e)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
                  equip === e
                    ? "border-accent bg-accent text-[oklch(0.99_0.002_20)]"
                    : "border-border hover:border-accent/60"
                }`}
              >
                {e}
              </button>
            ))}
          </div>
        </div>

        {/* Loads */}
        <div className="space-y-3">
          {filtered.map((l) => {
            const open = expanded === l.id;
            const rpm = (l.rate / l.miles).toFixed(2);
            return (
              <div
                key={l.id}
                className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="grid grid-cols-1 gap-4 px-6 py-4 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-1">
                    <div className="font-mono text-xs text-muted-foreground">{l.id}</div>
                    <span
                      className={`mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${equipColors[l.equipment]}`}
                    >
                      <Truck className="h-3 w-3" /> {l.equipment}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                      <MapPin className="h-4 w-4 text-accent" />
                      {l.origin}
                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                      {l.destination}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {l.commodity} · {l.weight.toLocaleString()} lbs · {l.length}′
                      {l.temp ? ` · ${l.temp}` : ""}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Miles</div>
                    <div className="text-sm font-semibold">
                      {l.miles.toLocaleString()} mi
                      <span className="ml-1 text-xs font-normal text-muted-foreground">
                        (+{l.deadhead} DH)
                      </span>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Pickup</div>
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                      {l.pickup} · {l.pickupWindow}
                    </div>
                  </div>

                  <div className="md:col-span-2 md:text-right">
                    <div className="flex items-baseline gap-1 md:justify-end">
                      <DollarSign className="h-4 w-4 text-accent" />
                      <span className="font-display text-2xl text-ink">
                        {l.rate.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground md:text-right">
                      ${rpm}/mi all-in
                    </div>
                  </div>

                  <div className="md:col-span-1 md:text-right">
                    <button
                      onClick={() => setExpanded(open ? null : l.id)}
                      className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider hover:border-accent"
                    >
                      {open ? <>Less <ChevronUp className="h-3 w-3" /></> : <>Details <ChevronDown className="h-3 w-3" /></>}
                    </button>
                  </div>
                </div>

                {open && (
                  <div className="grid gap-6 border-t border-border bg-secondary/40 px-6 py-5 md:grid-cols-4">
                    <Detail icon={RouteIcon} label="Route">
                      {l.origin} → {l.destination}
                      <div className="mt-1 text-xs text-muted-foreground">
                        {l.stops} {l.stops === 1 ? "stop" : "stops"} · Deadhead {l.deadhead} mi
                      </div>
                    </Detail>
                    <Detail icon={Package} label="Freight">
                      {l.commodity}
                      <div className="mt-1 text-xs text-muted-foreground">
                        {l.weight.toLocaleString()} lbs · Hazmat: {l.hazmat ? "Yes" : "No"}
                      </div>
                    </Detail>
                    <Detail icon={Ruler} label="Equipment">
                      {l.equipment} · {l.length}′
                      {l.temp ? (
                        <div className="mt-1 text-xs text-muted-foreground">Temp: {l.temp}</div>
                      ) : null}
                    </Detail>
                    <Detail icon={Clock} label="Schedule">
                      Pickup {l.pickup}, {l.pickupWindow}
                      <div className="mt-1 text-xs text-muted-foreground">Delivery {l.delivery}</div>
                    </Detail>

                    <div className="md:col-span-4 rounded-md border border-border bg-card p-4 text-sm">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Notes</div>
                      <p className="mt-1">{l.notes}</p>
                    </div>

                    <div className="md:col-span-4 flex flex-wrap items-center justify-between gap-4 rounded-md border border-accent/40 bg-accent/5 p-4">
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="flex items-center gap-1.5">
                          <User className="h-4 w-4 text-accent" /> {l.dispatcher}
                        </span>
                        <a href={`tel:${l.dispatcherPhone.replace(/\D/g, "")}`} className="flex items-center gap-1.5 hover:text-accent">
                          <Phone className="h-4 w-4 text-accent" /> {l.dispatcherPhone}
                        </a>
                        <a href={`mailto:${l.dispatcherEmail}`} className="flex items-center gap-1.5 hover:text-accent break-all">
                          <Mail className="h-4 w-4 text-accent" /> {l.dispatcherEmail}
                        </a>
                      </div>
                      <button className="rounded-md bg-[var(--gradient-accent)] px-5 py-2 text-xs font-bold uppercase tracking-wider text-[oklch(0.99_0.002_20)] transition-transform hover:-translate-y-0.5">
                        Book This Load
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="rounded-lg border border-border bg-card p-12 text-center text-sm text-muted-foreground">
              No loads match your search. Try adjusting the filters.
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            Showing {filtered.length} of {LOADS.length} loads · Rates all-in, subject to broker confirmation.
          </p>
          <p>
            Not registered yet?{" "}
            <Link to="/carrier-registration" className="font-semibold text-accent hover:underline">
              Join our carrier network <ArrowRight className="inline h-3 w-3" />
            </Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}

function Detail({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Package;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3.5 w-3.5" /> {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-ink">{children}</div>
    </div>
  );
}
