export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-xs text-muted-foreground sm:flex-row">
        <div>
          <span className="font-semibold text-primary">TissueCraft</span>
          <p className="mt-1">Premium custom tissues & wet wipes</p>
        </div>
        <div className="flex gap-6">
          <a href="/#about" className="hover:text-foreground transition-colors">About</a>
          <a href="/#products" className="hover:text-foreground transition-colors">Products</a>
          <a href="/#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <span>© {new Date().getFullYear()} TissueCraft. All rights reserved.</span>
      </div>
    </footer>
  );
}
