import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream shadow-[0_1px_0_rgba(18,17,16,0.08)]">
      <div className="bg-ink text-cream text-center text-xs tracking-widest uppercase py-2">
        Free shipping on install bundles over $150
      </div>
      <div className="container-px mx-auto flex items-center justify-between h-20">
        <Link to="/" className="font-display font-semibold text-2xl md:text-3xl text-ink">
          Noir Hair Co.
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `font-body text-sm font-medium pb-1 border-b-2 transition-colors ${
                  isActive ? "border-gold text-ink" : "border-transparent text-ink/60 hover:text-ink hover:border-ink/20"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/shop" className="hidden md:inline-block bg-gold text-ink px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-dark hover:text-cream transition-colors">
          Shop Now
        </Link>

        <button className="md:hidden text-ink" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden container-px pb-6 pt-4 flex flex-col gap-4 bg-cream shadow-[0_1px_0_rgba(18,17,16,0.08)]">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `font-body text-base font-medium ${isActive ? "text-ink" : "text-ink/60"}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}