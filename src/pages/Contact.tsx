import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealSection from "@/components/layout/RevealSection";

const CONTACT_EMAIL = "nextor.enterprises@gmail.com";

export default function Contact() {
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

      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.05]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Left info */}
            <div className="lg:col-span-2">
              <RevealSection>
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ textWrap: "balance" as any }}>
                  Let's Discuss Your Bulk Requirements
                </h1>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We work closely with retailers, distributors, importers, and institutional buyers looking for reliable bulk supply and custom packaging solutions across our product range.
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Whether you need product specifications, samples, private label options, or a detailed quotation, our team is ready to assist you.
                </p>

                <div className="mt-10 space-y-5 text-sm">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="h-4 w-4 text-primary" /> {CONTACT_EMAIL}
                  </a>
                  <span className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" /> Ontario, Canada
                  </span>
                </div>

                <div className="mt-10 space-y-4 rounded-lg border border-border bg-secondary/50 p-5">
                  <div className="flex items-start gap-3 text-sm">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">Response Commitment</p>
                      <p className="mt-1 text-muted-foreground">Most requests receive a response within one business day. For technical products, we may follow up with clarification questions before sharing pricing.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">Your Information Matters</p>
                      <p className="mt-1 text-muted-foreground">All inquiries and shared details are kept strictly confidential and used only for business communication and quotation purposes.</p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>

            {/* Right form */}
            <div className="lg:col-span-3">
              <RevealSection>
                <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
                  <h2 className="text-xl font-semibold mb-6">Inquiry Form</h2>
                  {submitted ? (
                    <div className="py-12 text-center">
                      <p className="text-lg font-medium text-primary">Thank you!</p>
                      <p className="mt-2 text-muted-foreground">Your email client should have opened with the inquiry details. If not, please email us directly at {CONTACT_EMAIL}.</p>
                      <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-primary underline underline-offset-4">
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form action="https://formspree.io/f/mpqklprg" method="POST" className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" name="name" required placeholder="Your name" className="bg-background" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" name="email" type="email" required placeholder="you@company.com" className="bg-background" />
                        </div>
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input id="company" name="company" placeholder="Your company" className="bg-background" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="product">Product Interest</Label>
                          <Input id="product" name="product" placeholder="e.g. Scented Wet Wipes" className="bg-background" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Estimated Quantity</Label>
                        <Input id="quantity" name="quantity" placeholder="e.g. 5,000 packs per month" className="bg-background" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Details *</Label>
                        <Textarea id="message" name="message" required rows={4} placeholder="Tell us about your requirements, specifications, or questions..." className="bg-background" />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform active:scale-[0.97]"
                      >
                        Submit Your Inquiry
                      </button>
                      <p className="text-center text-xs text-muted-foreground">
                        Submit your inquiry today — and our team will contact you with the best available supply and pricing options.
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
}
