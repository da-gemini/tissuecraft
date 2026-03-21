import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Building2, Heart, Phone, Mail, MapPin, ChevronRight, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const products = [
  {
    icon: Building2,
    title: "Custom Logo Tissues",
    description: "Premium 2-ply tissues with your brand or event logo. Perfect for trade shows, conferences, and everyday branding.",
    price: "From $0.35/pack",
  },
  {
    icon: Heart,
    title: "Wedding Favor Tissues",
    description: "Elegant tissues for wedding guest favors. Happy tears guaranteed — beautifully packaged for your special day.",
    price: "From $0.50/pack",
  },
  {
    icon: Gift,
    title: "Corporate Branded Tissues",
    description: "Promote your business with custom-printed tissues. A thoughtful touch that keeps your brand top of mind.",
    price: "From $0.30/pack",
  },
];

const testimonials = [
  { name: "Rachel M.", role: "Bride", text: "Our guests loved the custom tissues! Such a sweet touch for the ceremony." },
  { name: "David K.", role: "Marketing Director", text: "We ordered 5,000 branded packs for our conference. Excellent quality and fast turnaround." },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal-section ${className}`}
    >
      {children}
    </div>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight" style={{ color: "hsl(25, 65%, 45%)" }}>
            TissueCraft
          </span>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#products" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Products</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">How It Works</a>
            <a href="#testimonials" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Reviews</a>
            <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Contact</a>
          </div>
          <Button size="sm" className="active:scale-[0.97] transition-transform" asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <RevealSection className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Handcrafted quality since 2018
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl" style={{ textWrap: "balance" as any }}>
              Premium Custom Tissues for Every Occasion
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground" style={{ textWrap: "pretty" as any }}>
              High-quality printed tissues for weddings, corporate events &amp; branding.
              Minimum order just 100 packs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="active:scale-[0.97] transition-transform" asChild>
                <a href="#products">Browse Products <ChevronRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="active:scale-[0.97] transition-transform" asChild>
                <a href="#contact">Request Samples</a>
              </Button>
            </div>
          </RevealSection>
        </div>
        {/* Decorative blob */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, hsl(25, 65%, 55%), transparent 70%)" }}
        />
      </section>

      {/* Products */}
      <section id="products" className="border-t border-border px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ textWrap: "balance" as any }}>
              Our Products
            </h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Every pack is printed on soft, premium 2-ply tissue using eco-friendly inks.
            </p>
          </RevealSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <RevealSection key={product.title}>
                <Card
                  className="group h-full border border-border bg-card transition-shadow duration-300 hover:shadow-lg"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <CardContent className="flex h-full flex-col p-8">
                    <div
                      className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "hsl(25, 65%, 95%)", color: "hsl(25, 65%, 45%)" }}
                    >
                      <product.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    <p className="mt-6 text-sm font-semibold" style={{ color: "hsl(25, 65%, 45%)" }}>
                      {product.price}
                    </p>
                  </CardContent>
                </Card>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-border px-6 py-20 md:py-28" style={{ backgroundColor: "hsl(30, 20%, 97%)" }}>
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How It Works</h2>
          </RevealSection>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {[
              { step: "01", title: "Send Your Design", desc: "Upload your logo or artwork, or work with our design team." },
              { step: "02", title: "We Print & Pack", desc: "Your tissues are printed on premium stock and quality-checked." },
              { step: "03", title: "Delivered to You", desc: "Fast shipping nationwide. Bulk discounts available." },
            ].map((item, i) => (
              <RevealSection key={item.step}>
                <div style={{ transitionDelay: `${i * 100}ms` }}>
                  <span className="text-4xl font-bold" style={{ color: "hsl(25, 65%, 80%)" }}>{item.step}</span>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-t border-border px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What Our Customers Say</h2>
          </RevealSection>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <RevealSection key={t.name}>
                <Card className="border border-border bg-card" style={{ transitionDelay: `${i * 80}ms` }}>
                  <CardContent className="p-8">
                    <div className="mb-4 flex gap-1" style={{ color: "hsl(40, 90%, 50%)" }}>
                      {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground italic">"{t.text}"</p>
                    <div className="mt-4">
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="border-t border-border px-6 py-20 md:py-28" style={{ backgroundColor: "hsl(30, 20%, 97%)" }}>
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to Order?</h2>
              <p className="mt-4 text-muted-foreground">
                Get in touch for a free quote or to request samples. We'd love to help make your event unforgettable.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 text-sm text-muted-foreground">
                <a href="mailto:hello@tissuecraft.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" /> hello@tissuecraft.com
                </a>
                <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4" /> (555) 123-4567
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Austin, TX
                </span>
              </div>
              <Button size="lg" className="mt-8 active:scale-[0.97] transition-transform" asChild>
                <a href="mailto:hello@tissuecraft.com">Send Us a Message</a>
              </Button>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <span>© 2025 TissueCraft. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
