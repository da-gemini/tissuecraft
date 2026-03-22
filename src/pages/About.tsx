import { Link } from "react-router-dom";
import {
  Droplets, Palette, Package, ChevronRight,
  CheckCircle2, MapPin
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealSection from "@/components/layout/RevealSection";

const customization = [
  "Custom printed sachets and packs",
  "Logo and brand color printing",
  "Fragrance selection options",
  "Pack size and format flexibility",
  "Event-specific packaging themes",
];

const supplyOptions = [
  "Bulk cartons for large operations",
  "Branded retail packs",
  "Event-volume orders",
  "Ongoing contract supply",
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary/[0.05]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-accent/[0.06]" />
        <div className="relative mx-auto max-w-6xl">
          <RevealSection>
            <div className="flex items-center gap-2 text-sm text-accent font-medium mb-4">
              <MapPin className="h-4 w-4" /> Based in Ontario, Canada
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl" style={{ textWrap: "balance" as any }}>
              Your Trusted Partner for Custom Tissues & Wet Wipes
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground" style={{ textWrap: "pretty" as any }}>
              We specialize in manufacturing and supplying scented wet wipes, facial tissues, table napkins, and custom-branded tissue products — especially for restaurants, events, and promotional branding.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Customization */}
      <section className="border-b border-border px-6 py-20 md:py-28 bg-secondary/40">
        <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-2">
          <RevealSection>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-primary mb-6">
              <Palette className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Customization Capabilities</h2>
            <p className="mt-3 text-muted-foreground">
              We provide custom-designed packages for branding, with a wide variety of products tailored to your needs.
            </p>
            <ul className="mt-8 space-y-4">
              {customization.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </RevealSection>

          <RevealSection>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-primary mb-6">
              <Package className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Supply Options</h2>
            <p className="mt-3 text-muted-foreground">
              Flexible supply arrangements for retailers, distributors, importers, and institutional buyers.
            </p>
            <ul className="mt-8 space-y-4">
              {supplyOptions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </RevealSection>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Let's Work Together</h2>
              <p className="mt-4 text-muted-foreground">
                Whether you need bulk supply, private labeling, or custom packaging — reach out and we'll tailor a solution for you.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-transform active:scale-[0.97]"
              >
                Contact Us <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
