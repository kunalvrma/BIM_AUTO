import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FounderStrip() {
  return (
    <section className="section-pad">
      <div className="container-wide">
        <div className="max-w-2xl">
          <span className="label-mono">Who Builds This</span>

          <h2 className="font-display font-800 text-3xl text-accent mt-4 mb-1">
            KUNAL VERMA
          </h2>
          <p className="font-display font-600 text-ink text-lg mb-6">
            BIM Automation Specialist
          </p>

          <p className="text-ink-muted text-base leading-relaxed max-w-xl">
            I&apos;m a BIM technologist with hands-on experience delivering automation
            for US-based MEP firms — working across Revit, Dynamo, and Python to
            eliminate the manual workflows that slow projects down.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 text-accent font-display font-600 text-sm hover:text-accent-dim transition-colors group"
          >
            Currently accepting new clients
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
