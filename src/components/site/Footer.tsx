import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import freightLogo from "@/assets/freight-logo.png";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.11_0.006_20)] text-white/80">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 text-white">
            <img src={freightLogo} alt="Apex Logistics & Freight Inc logo" className="h-12 w-auto object-contain" />
            <div>
              <div className="font-display text-lg">Apex Logistics & Freight Inc</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/60">MC51906956</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/60">
            Reliable freight solutions moving shipments across the country with speed, precision, and service.
          </p>
        </div>

        <div>
          <h4 className="text-sm text-white">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/load-board" className="hover:text-accent">Load Board</Link></li>
            <li><Link to="/carrier-registration" className="hover:text-accent">Carrier Registration</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm text-white">Get Started</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/request-quote" className="hover:text-accent">Request a Quote</Link></li>
            <li><Link to="/carrier-registration" className="hover:text-accent">Join Our Network</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" /> Nationwide</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-accent" /> <a href="tel:+15623328138">(562) 332-8138</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-accent" /> <a href="mailto:apexlogisticsinc91@gmail.com" className="break-all">apexlogisticsinc91@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col justify-between gap-2 py-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Apex Logistics & Freight Inc. All rights reserved.</p>
          <p>MC51906956 · Licensed Freight Brokerage</p>
        </div>
      </div>
    </footer>
  );
}
