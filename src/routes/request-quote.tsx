import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { useState } from "react";
import { CheckCircle2, Truck, Package, Snowflake, Wrench } from "lucide-react";
import heroImg from "@/assets/hero-truck.jpg";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — SEVENTH STREET SERVICES LLC" },
      { name: "description", content: "Get a fast, competitive freight quote from SEVENTH STREET SERVICES LLC. Full truckload, LTL, reefer, flatbed and heavy haul." },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [equipment, setEquipment] = useState("dry-van");

  const equipTypes = [
    { id: "dry-van", label: "Dry Van", icon: Package },
    { id: "reefer", label: "Reefer", icon: Snowflake },
    { id: "flatbed", label: "Flatbed", icon: Truck },
    { id: "heavy", label: "Heavy Haul", icon: Wrench },
  ];

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Get a Quote"
        title="Fast, Fair, Freight Quotes."
        subtitle="Tell us about your load and we'll respond with a competitive rate — usually within the hour."
        image={heroImg}
      />

      <section className="container-x py-24">
        <div className="mx-auto max-w-4xl rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-elegant)] md:p-12">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <CheckCircle2 className="h-16 w-16 text-accent" />
              <h2 className="text-3xl">Quote Request Received!</h2>
              <p className="max-w-md text-muted-foreground">
                We've got your details. A dispatcher will follow up shortly at the number/email you provided.
              </p>
              <p className="text-sm">Need it faster? Call <a href="tel:+19732883844" className="font-semibold text-accent">(973) 288-3844</a>.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8">
              {/* Equipment */}
              <div>
                <label className="mb-3 block text-xs font-semibold uppercase tracking-wider">Equipment Type</label>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  {equipTypes.map((t) => {
                    const active = equipment === t.id;
                    return (
                      <button
                        type="button"
                        key={t.id}
                        onClick={() => setEquipment(t.id)}
                        className={`flex flex-col items-center gap-2 rounded-lg border-2 p-4 text-sm font-semibold uppercase tracking-wider transition-all ${
                          active
                            ? "border-accent bg-[oklch(0.72_0.19_55/0.1)] text-ink"
                            : "border-border text-muted-foreground hover:border-accent/50"
                        }`}
                      >
                        <t.icon className={`h-6 w-6 ${active ? "text-accent" : ""}`} />
                        {t.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Lane */}
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Origin (City, State, Zip)" name="origin" required />
                <Field label="Destination (City, State, Zip)" name="destination" required />
                <Field label="Pickup Date" name="pickup" type="date" required />
                <Field label="Weight (lbs)" name="weight" type="number" required />
                <Field label="Commodity" name="commodity" required />
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wider">Load Type</label>
                  <select name="load" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring">
                    <option>Full Truckload (FTL)</option>
                    <option>Less than Truckload (LTL)</option>
                    <option>Partial</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="text-lg">Your Contact</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <Field label="Full Name" name="name" required />
                  <Field label="Company" name="company" />
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider">Additional Notes</label>
                <textarea
                  name="notes"
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Special requirements, dimensions, hazmat, etc."
                />
              </div>

              <button type="submit" className="btn-accent w-full md:w-auto">Send Quote Request</button>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
