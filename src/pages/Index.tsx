import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Building2, Heart, Phone, Mail, MapPin, ChevronRight, Palette, Printer, Package } from "lucide-react";
import { useEffect, useRef } from "react";

const products = [
  {
    icon: Building2,
    title: "Custom Logo Tissues",
    description: "Premium 2-ply tissues with your brand or event logo. Perfect for trade shows, conferences, and everyday branding.",
  },
  {
    icon: Heart,
    title: "Wedding Favor Tissues",
    description: "Elegant tissues for wedding guest favors. Happy tears guaranteed — beautifully packaged for your special day.",
  },
  {
    icon: Gift,
    title: "Corporate Branded Tissues",
    description: "Promote your business with custom-printed tissues. A thoughtful touch that keeps your brand top of mind.",
  },
];

const services = [
  {
    icon: Palette,
    step: "01",
    title: "We Help You Design",
    desc: "Share your vision and our team will craft a custom print that represents your brand beautifully.",
  },
  {
    icon: Printer,
    step: "02",
    title: "We Print Sachets",
    desc: "Your design is printed on premium soft tissue using eco-friendly inks with meticulous quality control.",
  },
  {
    icon: Package,
    step: "03",
    title: "Build Your Brand",
    desc: "Custom printed sachets elevate your brand presence at every touchpoint — events, stores, or gifts.",
  },
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
    <div ref={ref} className={`reveal-section ${className}`}>
      {children}
    </div>
  );
}

const CONTACT_EMAIL = "nextor.enterprises@gmail.com";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(35, 30%, 97%)", color: "hsl(15, 20%, 18%)" }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b" style={{ borderColor: "hsl(25, 20%, 88%)", backgroundColor: "hsla(35, 30%, 97%, 0.95)", backdropFilter: "blur(12px)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight" style={{ color: "hsl(15, 55%, 42%)" }}>
            TissueCraft
          </span>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#products" className="text-sm transition-colors" style={{ color: "hsl(15, 10%, 50%)" }}>Products</a>
            <a href="#services" className="text-sm transition-colors" style={{ color: "hsl(15, 10%, 50%)" }}>Our Process</a>
            <a href="#contact" className="text-sm transition-colors" style={{ color: "hsl(15, 10%, 50%)" }}>Contact</a>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Quote Request — TissueCraft")}`}
            className="inline-flex h-9 items-center rounded-md px-4 text-sm font-medium text-white transition-transform active:scale-[0.97]"
            style={{ backgroundColor: "hsl(15, 55%, 42%)" }}
          >
            Get a Quote
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <RevealSection className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest" style={{ color: "hsl(15, 30%, 55%)" }}>
              Handcrafted quality since 2018
            </p>
            <h1
              className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
              style={{ textWrap: "balance" as any, color: "hsl(15, 25%, 16%)" }}
            >
              Premium Custom Tissues for Every Occasion
            </h1>
            <p className="mt-6 max-w-lg text-lg" style={{ textWrap: "pretty" as any, color: "hsl(15, 10%, 45%)" }}>
              High-quality printed tissues for weddings, corporate events &amp; branding.
              Minimum order just 100 packs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex h-11 items-center gap-2 rounded-md px-6 text-sm font-medium text-white transition-transform active:scale-[0.97]"
                style={{ backgroundColor: "hsl(15, 55%, 42%)" }}
              >
                Browse Products <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Sample Request — TissueCraft")}`}
                className="inline-flex h-11 items-center rounded-md border px-6 text-sm font-medium transition-transform active:scale-[0.97]"
                style={{ borderColor: "hsl(15, 55%, 42%)", color: "hsl(15, 55%, 42%)" }}
              >
                Request Samples
              </a>
            </div>
          </RevealSection>
        </div>
        {/* Decorative blob */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, hsl(15, 55%, 50%), transparent 70%)" }}
        />
      </section>

      {/* Products */}
      <section id="products" className="border-t px-6 py-20 md:py-28" style={{ borderColor: "hsl(25, 20%, 88%)" }}>
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ textWrap: "balance" as any }}>
              Our Products
            </h2>
            <p className="mt-3 max-w-md" style={{ color: "hsl(15, 10%, 50%)" }}>
              Every pack is printed on soft, premium 2-ply tissue using eco-friendly inks.
            </p>
          </RevealSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <RevealSection key={product.title}>
                <Card
                  className="group h-full transition-shadow duration-300 hover:shadow-lg"
                  style={{ borderColor: "hsl(25, 20%, 88%)", backgroundColor: "hsl(35, 25%, 99%)", transitionDelay: `${i * 80}ms` }}
                >
                  <CardContent className="flex h-full flex-col p-8">
                    <div
                      className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "hsl(15, 40%, 92%)", color: "hsl(15, 55%, 42%)" }}
                    >
                      <product.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold" style={{ color: "hsl(15, 25%, 16%)" }}>{product.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: "hsl(15, 10%, 50%)" }}>
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Process */}
      <section id="services" className="border-t px-6 py-20 md:py-28" style={{ borderColor: "hsl(25, 20%, 88%)", backgroundColor: "hsl(30, 25%, 94%)" }}>
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What We Do For You</h2>
            <p className="mt-3 max-w-md" style={{ color: "hsl(15, 10%, 50%)" }}>
              From design to delivery, we handle everything so you can focus on your brand.
            </p>
          </RevealSection>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {services.map((item, i) => (
              <RevealSection key={item.step}>
                <div style={{ transitionDelay: `${i * 100}ms` }}>
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ backgroundColor: "hsl(15, 40%, 92%)", color: "hsl(15, 55%, 42%)" }}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: "hsl(15, 25%, 16%)" }}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "hsl(15, 10%, 50%)" }}>{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="border-t px-6 py-20 md:py-28" style={{ borderColor: "hsl(25, 20%, 88%)" }}>
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to Order?</h2>
              <p className="mt-4" style={{ color: "hsl(15, 10%, 50%)" }}>
                Get in touch for a free quote or to request samples. We'd love to help make your event unforgettable.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 text-sm" style={{ color: "hsl(15, 10%, 50%)" }}>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 transition-colors hover:opacity-80">
                  <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
                </a>
                <a href="tel:+15551234567" className="flex items-center gap-2 transition-colors hover:opacity-80">
                  <Phone className="h-4 w-4" /> (555) 123-4567
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Austin, TX
                </span>
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Inquiry — TissueCraft")}`}
                className="mt-8 inline-flex h-11 items-center rounded-md px-8 text-sm font-medium text-white transition-transform active:scale-[0.97]"
                style={{ backgroundColor: "hsl(15, 55%, 42%)" }}
              >
                Send Us a Message
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 py-8" style={{ borderColor: "hsl(25, 20%, 88%)" }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs sm:flex-row" style={{ color: "hsl(15, 10%, 55%)" }}>
          <span>© 2025 TissueCraft. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-80 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
