import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import freightLogo from "@/assets/seventh-street-logo.png.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/load-board", label: "Load Board" },
  { to: "/carrier-registration", label: "Carriers" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[oklch(0.17_0.008_20/0.85)] backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-white">
          <img src={freightLogo} alt="SEVENTH STREET SERVICES LLC logo" className="h-11 w-auto object-contain" />
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wider">SEVENTH STREET SERVICES LLC</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/60">PATERSON, NJ</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium uppercase tracking-wider text-white/75 transition-colors hover:text-white"
              activeProps={{ className: "text-accent" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+19732883844" className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <Phone className="h-4 w-4" />
            (973) 288-3844
          </a>
          <Link to="/request-quote" className="btn-accent hover:[--tw:0] hover:-translate-y-0.5 text-sm">
            Get Quote
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[oklch(0.17_0.008_20)]">
          <div className="container-x flex flex-col gap-1 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm uppercase tracking-wider text-white/80"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/request-quote" onClick={() => setOpen(false)} className="btn-accent mt-2 text-sm">
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
