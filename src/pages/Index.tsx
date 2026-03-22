import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Droplets, Utensils, Plane, PartyPopper, Heart, Package,
  ChevronRight, Palette, Printer, Building2, ShieldCheck
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealSection from "@/components/layout/RevealSection";

const products = [
  { icon: Droplets, title: "Scented Wet Wipes", description: "Premium scented wipes perfect for restaurants, airlines, and hospitality — individually wrapped for hygiene." },
  { icon: Utensils, title: "Restaurant Hand Wipes", description: "Refreshment wipes designed for dining. Compact sachets that elevate the guest experience at every table." },
  { icon: PartyPopper, title: "Event Sachet Wipes", description: "Custom-branded sachet wipes for weddings, corporate events, and large gatherings — a thoughtful guest touch." },
  { icon: Heart, title: "Facial Tissues", description: "Soft 2-ply facial tissues available in custom-branded boxes and packs. Ideal for retail and hospitality." },
  { icon: Package, title: "Table Napkins", description: "Quality table napkins with custom print options — perfect for restaurants, cafés, and catering services." },
  { icon: Building2, title: "Utility Tissue Packs", description: "Versatile tissue packs for everyday use. Available in bulk for institutional and retail distribution." },
];

const useCases = [
  { icon: Utensils, label: "Restaurants & Cafés" },
  { icon: Plane, label: "Airlines & Travel" },
  { icon: Building2, label: "Corporate Events" },
  { icon: Heart, label: "Weddings & Gatherings" },
  { icon: ShieldCheck, label: "Promotional Branding" },
];

const services = [
  { icon: Palette, title: "Custom Design", desc: "Share your brand vision — we design custom packaging with your logo, colors, and preferred fragrance." },
  { icon: Printer, title: "Quality Production", desc: "Printed on premium material using eco-friendly inks. Every sachet and pack passes rigorous quality checks." },
  { icon: Package, title: "Flexible Supply", desc: "From bulk cartons to branded retail packs and event-volume orders — we scale to your needs." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-36">
        {/* Background pattern */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/[0.12]" />
          <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/[0.14]" />
          <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/[0.06]" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          {/* Diagonal lines decoration */}
          <svg className="absolute right-0 top-0 h-full w-1/3 opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diag" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="20" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diag)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-6xl">
          <RevealSection className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Ontario-based · B2B Supply
            </p>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl" style={{ textWrap: "balance" as any }}>
              Custom Tissues & Wet Wipes for Every Business
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground" style={{ textWrap: "pretty" as any }}>
              Premium scented wipes, facial tissues, and table napkins — custom-designed and supplied in bulk for restaurants, events, and retail branding.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform active:scale-[0.97]"
              >
                Get a Quote <ChevronRight className="h-4 w-4" />
              </Link>
              <a
                href="#products"
                className="inline-flex h-11 items-center rounded-md border border-primary px-6 text-sm font-medium text-primary transition-transform active:scale-[0.97]"
              >
                Browse Products
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="relative border-t border-border px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-secondary/80" />
        {/* Dot pattern */}
        <div className="pointer-events-none absolute inset-0">
          <svg className="h-full w-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-6xl">
          <RevealSection>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ textWrap: "balance" as any }}>
              Our Product Range
            </h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              From scented wet wipes to custom-branded napkins — everything your business needs, packaged your way.
            </p>
          </RevealSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <RevealSection key={product.title}>
                <Card className="group h-full border-border bg-card transition-shadow duration-300 hover:shadow-lg" style={{ transitionDelay: `${i * 70}ms` }}>
                  <CardContent className="flex h-full flex-col p-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-primary">
                      <product.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                  </CardContent>
                </Card>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Customization & Services */}
      <section className="relative border-t border-border px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.04]" />
        <div className="relative mx-auto max-w-6xl">
          <RevealSection>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How We Work With You</h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              From design to delivery — we handle everything so you can focus on your brand.
            </p>
          </RevealSection>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {services.map((item, i) => (
              <RevealSection key={item.title}>
                <div style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-muted text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Use Cases */}
      <section className="border-t border-border px-6 py-16 md:py-24 bg-secondary/50">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">Trusted Across Industries</h2>
          </RevealSection>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {useCases.map((uc, i) => (
              <RevealSection key={uc.label}>
                <div
                  className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium shadow-sm"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <uc.icon className="h-4 w-4 text-primary" />
                  {uc.label}
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to Order?</h2>
              <p className="mt-4 text-muted-foreground">
                Whether you need product specifications, samples, or a detailed quotation — our team is ready to assist.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-transform active:scale-[0.97]"
              >
                Submit an Inquiry <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
