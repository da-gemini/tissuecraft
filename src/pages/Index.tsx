import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Droplets, Utensils, Plane, PartyPopper, Heart, Package,
  ChevronRight, Palette, Printer, Building2, ShieldCheck,
  MapPin, CheckCircle2, Mail, Clock,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealSection from "@/components/layout/RevealSection";

const CONTACT_EMAIL = "nextor.enterprises@gmail.com";

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

const services = [
  { icon: Palette, title: "We Help You Design", desc: "Share your brand vision — we design custom packaging with your logo, colors, and preferred fragrance." },
  { icon: Printer, title: "We Print Sachets", desc: "Printed on premium material using eco-friendly inks. Every sachet and pack passes rigorous quality checks." },
  { icon: Package, title: "Build Your Brand", desc: "From bulk cartons to branded retail packs and event-volume orders — we scale to your needs." },
];

const Index = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const product = data.get("product") as string;
    const quantity = data.get("quantity") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Inquiry from ${name} — ${company || "N/A"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nProduct Interest: ${product}\nEstimated Quantity: ${quantity}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-6 py-28 md:py-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/[0.08]" />
          <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/[0.06]" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <RevealSection className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <MapPin className="h-3 w-3 text-primary" /> Ontario, Canada · B2B Supply
            </p>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
              Custom Tissues &amp; Wet Wipes for Every Business
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Premium scented wipes, facial tissues, and table napkins — custom-designed and supplied in bulk for restaurants, events, and retail branding.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97]"
              >
                Get a Quote <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#products"
                className="inline-flex h-12 items-center rounded-lg border border-border bg-secondary px-7 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Browse Products
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── About Us ── */}
      <section id="about" className="relative border-t border-border px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-secondary/40" />
        <div className="relative mx-auto max-w-6xl">
          <RevealSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">About Us</p>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
              Your Trusted Partner for Custom Tissues &amp; Wet Wipes
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Based in Ontario, Canada — we specialize in manufacturing and supplying scented wet wipes, facial tissues, table napkins, and custom-branded tissue products for restaurants, events, and promotional branding.
            </p>
          </RevealSection>

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {/* Services */}
            {services.map((item, i) => (
              <RevealSection key={item.title}>
                <div className="rounded-xl border border-border bg-card p-7" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Customization + Supply */}
          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <RevealSection>
              <div className="flex items-center gap-3 mb-5">
                <Palette className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Customization Capabilities</h3>
              </div>
              <ul className="space-y-3">
                {customization.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </RevealSection>
            <RevealSection>
              <div className="flex items-center gap-3 mb-5">
                <Package className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Supply Options</h3>
              </div>
              <ul className="space-y-3">
                {supplyOptions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section id="products" className="relative border-t border-border px-6 py-20 md:py-28">
        <div className="relative mx-auto max-w-6xl">
          <RevealSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Products</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Our Product Range
            </h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              From scented wet wipes to custom-branded napkins — everything your business needs, packaged your way.
            </p>
          </RevealSection>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <RevealSection key={product.title}>
                <Card className="group h-full border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5" style={{ transitionDelay: `${i * 70}ms` }}>
                  <CardContent className="flex h-full flex-col p-7">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <product.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                  </CardContent>
                </Card>
              </RevealSection>
            ))}
          </div>

          {/* Use cases */}
          <div className="mt-16">
            <RevealSection>
              <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">Trusted Across Industries</p>
            </RevealSection>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {useCases.map((uc, i) => (
                <RevealSection key={uc.label}>
                  <div
                    className="flex items-center gap-2.5 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <uc.icon className="h-4 w-4 text-primary" />
                    {uc.label}
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact / Get a Quote ── */}
      <section id="contact" className="relative border-t border-border px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-secondary/40" />
        <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-5">
            {/* Left info */}
            <div className="lg:col-span-2">
              <RevealSection>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Get in Touch</p>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Let's Discuss Your Bulk Requirements
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We work closely with retailers, distributors, importers, and institutional buyers looking for reliable bulk supply and custom packaging solutions.
                </p>

                <div className="mt-8 space-y-4 text-sm">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="h-4 w-4 text-primary" /> {CONTACT_EMAIL}
                  </a>
                  <span className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" /> Ontario, Canada
                  </span>
                </div>

                <div className="mt-8 space-y-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex items-start gap-3 text-sm">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">Response Commitment</p>
                      <p className="mt-1 text-muted-foreground">Most requests receive a response within one business day.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">Your Information Matters</p>
                      <p className="mt-1 text-muted-foreground">All inquiries are kept strictly confidential and used only for business communication.</p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>

            {/* Right form */}
            <div className="lg:col-span-3">
              <RevealSection>
                <div className="rounded-xl border border-border bg-card p-8">
                  <h3 className="text-xl font-semibold mb-6">Inquiry Form</h3>
                  {submitted ? (
                    <div className="py-12 text-center">
                      <p className="text-lg font-medium text-primary">Thank you!</p>
                      <p className="mt-2 text-muted-foreground">Your email client should have opened with the inquiry details. If not, please email us directly at {CONTACT_EMAIL}.</p>
                      <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-primary underline underline-offset-4">
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" name="name" required placeholder="Your name" className="bg-background border-border" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" name="email" type="email" required placeholder="you@company.com" className="bg-background border-border" />
                        </div>
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input id="company" name="company" placeholder="Your company" className="bg-background border-border" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="product">Product Interest</Label>
                          <Input id="product" name="product" placeholder="e.g. Scented Wet Wipes" className="bg-background border-border" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Estimated Quantity</Label>
                        <Input id="quantity" name="quantity" placeholder="e.g. 5,000 packs per month" className="bg-background border-border" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Details *</Label>
                        <Textarea id="message" name="message" required rows={4} placeholder="Tell us about your requirements..." className="bg-background border-border" />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97]"
                      >
                        Submit Your Inquiry
                      </button>
                      <p className="text-center text-xs text-muted-foreground">
                        Our team will contact you with the best available supply and pricing options.
                      </p>
                    </form>
                  )}
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
