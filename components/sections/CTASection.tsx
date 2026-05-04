import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container-tight relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs text-accent">Currently accepting new clients</span>
        </div>

        <h2 className="heading-xl text-ink mb-6">
          Stop losing{" "}
          <span className="text-accent">$200K/year</span>
          <br />
          to manual workflows
        </h2>

        <p className="text-ink-muted text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Book a free 45-minute automation audit. We&apos;ll review your current BIM
          workflows, identify your top 3 automation opportunities, and give you a
          projected ROI — no obligation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
            Book Free Automation Audit
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/automation-library"
            className="btn-secondary text-base px-8 py-3.5"
          >
            <Calendar className="w-4 h-4" />
            Browse Free Tools
          </Link>
        </div>

        <p className="text-ink-faint text-xs font-mono mt-8">
          No sales pitch. No commitment. Just an honest analysis of your workflow.
        </p>
      </div>
    </section>
  );
}
