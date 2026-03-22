import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const CONTACT_EMAIL = "nextor.enterprises@gmail.com";

const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      if (location.pathname === "/") {
        const el = document.querySelector(href.replace("/", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-bold tracking-tight text-primary">
          TissueCraft
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) =>
            l.href.startsWith("/#") ? (
              <a key={l.label} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            ) : (
              <Link key={l.label} to={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </Link>
            )
          )}
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform active:scale-[0.97] md:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border px-6 pb-4 md:hidden">
          {navLinks.map((l) =>
            l.href.startsWith("/#") ? (
              <a key={l.label} href={l.href} onClick={() => handleNavClick(l.href)} className="block py-3 text-sm text-muted-foreground">
                {l.label}
              </a>
            ) : (
              <Link key={l.label} to={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-muted-foreground">
                {l.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
