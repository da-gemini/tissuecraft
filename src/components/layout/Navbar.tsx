import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", sectionId: "about" },
  { label: "Products", sectionId: "products" },
  { label: "Contact", sectionId: "contact" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string) => {
    setOpen(false);
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-bold tracking-tight text-primary">
          TissueCraft
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNavClick(l.sectionId)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick("contact")}
            className="hidden h-9 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97] md:inline-flex"
          >
            Get a Quote
          </button>
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
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNavClick(l.sectionId)}
              className="block py-3 text-sm text-muted-foreground"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact")}
            className="mt-2 inline-flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground"
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
}