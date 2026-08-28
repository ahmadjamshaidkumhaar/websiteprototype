import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import yardImg from "@/assets/freight-yard.jpg";

export const Route = createFileRoute("/carrier-registration")({
  head: () => ({
    meta: [
      { title: "Carrier Registration — Apex Logistics & Freight Inc" },
      { name: "description", content: "Join the Apex Logistics & Freight Inc carrier network. Register your MC/DOT and start hauling consistent, fair-paying loads." },
    ],
  }),
  component: CarrierPage,
});

function CarrierPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const perks = [
    "Weekly settlements & quick-pay options",
    "Dedicated dispatch relationships",
    "Consistent lanes across 48 states",
    "No forced dispatch — ever",
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow="Carrier Portal"
        title="Join the Apex Logistics & Freight Inc Carrier Network."
        subtitle="Consistent freight, fair pay and a broker that answers the phone."
        image={yardImg}
      />

      <section className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Why Us</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Built for Carriers.</h2>
            <p className="mt-4 text-muted-foreground">
              We're a New York-based brokerage that treats carriers like partners, not order numbers. Register today
              and get access to our load board and dispatch team.
            </p>
            <ul className="mt-8 space-y-4">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-lg border-l-4 border-accent bg-secondary p-6">
              <p className="text-sm">
                Have questions before signing up? Call our carrier line at{" "}
                <a href="tel:+15623328138" className="font-semibold text-accent">(562) 332-8138</a>.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-elegant)]">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-16 text-center">
                <CheckCircle2 className="h-16 w-16 text-accent" />
                <h3 className="text-2xl">Registration Received!</h3>
                <p className="max-w-sm text-muted-foreground">
                  Thanks for signing up. Our carrier team will reach out within 1 business day with your login and next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl">Carrier Registration</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Get set up with our dispatch team.</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Company Name" name="company" required />
                  <Field label="Contact Name" name="name" required />
                  <Field label="MC Number" name="mc" required />
                  <Field label="DOT Number" name="dot" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="Home Base (City, State)" name="location" required />
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wider">Fleet Size</label>
                  <select name="fleet" required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Select...</option>
                    <option>Owner-Operator (1 truck)</option>
                    <option>Small Fleet (2–10)</option>
                    <option>Mid Fleet (11–50)</option>
                    <option>Large Fleet (50+)</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wider">Equipment Types</label>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {["Dry Van", "Reefer", "Flatbed", "Step Deck", "RGN / Lowboy", "Power Only"].map((e) => (
                      <label key={e} className="flex items-center gap-2 rounded-md border border-input px-3 py-2 hover:bg-secondary">
                        <input type="checkbox" name="equipment" value={e} className="accent-[oklch(0.72_0.19_55)]" />
                        {e}
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" className="btn-accent w-full">Submit Registration</button>
                <p className="text-xs text-muted-foreground">
                  By submitting you agree to be contacted by our carrier onboarding team.
                </p>
              </form>
            )}
          </div>
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
