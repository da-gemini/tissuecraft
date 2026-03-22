import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-xs text-muted-foreground sm:flex-row">
        <div>
          <span className="font-semibold text-primary">TissueCraft</span>
          <p className="mt-1">Premium custom tissues & wet wipes — Ontario, Canada</p>
        </div>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
        <span>© {new Date().getFullYear()} TissueCraft. All rights reserved.</span>
      </div>
    </footer>
  );
}
