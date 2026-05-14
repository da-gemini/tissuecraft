import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-xs text-muted-foreground sm:flex-row">
        <div>
          <span className="font-semibold text-primary">TissueCraft</span>
          <p className="mt-1">Premium custom tissues & wet wipes</p>
        </div>
        <div className="flex gap-6">
          <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-foreground transition-colors">About</button>
          <button onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-foreground transition-colors">Products</button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-foreground transition-colors">Contact</button>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/tissuecraft_eh?iigsh=MXRrbmNndG56Zzdmcg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-foreground transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/nextor-enterprises"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-foreground transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
        <span>© {new Date().getFullYear()} TissueCraft. All rights reserved.</span>
      </div>
    </footer>
  );
}
