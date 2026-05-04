import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES } from "@/content/case-studies/data";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real BIM automation projects with documented results. VAV automation, sheet generation, model health scanning, and more.",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="section-pad bg-surface border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="container-wide relative z-10">
          <span className="label-mono">Case Studies</span>
          <h1 className="heading-xl text-ink mt-4 max-w-3xl">
            Production automation systems.{" "}
            <span className="text-ink-muted">Documented results.</span>
          </h1>
          <p className="text-ink-muted mt-6 text-lg max-w-xl leading-relaxed">
            Every case study below represents a system we built, deployed, and
            measured. Problem, approach, solution, and hours saved — all real.
          </p>
        </div>
      </div>

      {/* Case Studies List */}
      <div className="container-wide py-20 space-y-6">
        {CASE_STUDIES.map((cs, i) => (
          <Link
            key={cs.slug}
            href={`/case-studies/${cs.slug}`}
            className="group block card-base card-hover relative overflow-hidden"
          >
            {/* Side accent */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-1 opacity-30 group-hover:opacity-100 transition-opacity duration-300 ${
                i % 2 === 0 ? "bg-accent" : "bg-cyan"
              }`}
            />

            <div className="pl-5">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span
                      className={`label-mono ${i % 2 === 0 ? "text-accent" : "text-cyan"}`}
                    >
                      {cs.industry}
                    </span>
                    <span className="text-ink-faint text-xs font-mono">
                      — {cs.client}
                    </span>
                    <span className="text-ink-faint text-xs font-mono">
                      {cs.location}
                    </span>
                  </div>

                  <h2 className="font-display font-700 text-xl text-ink mb-3 group-hover:text-accent transition-colors">
                    {cs.title}
                  </h2>

                  <p className="text-ink-muted text-sm leading-relaxed max-w-2xl mb-4">
                    {cs.summary}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Key metrics */}
                <div className="flex flex-row lg:flex-col gap-6 lg:gap-4 lg:min-w-[160px]">
                  {cs.metrics.slice(0, 3).map((metric) => (
                    <div key={metric.label} className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-md flex items-center justify-center ${
                          metric.color === "cyan"
                            ? "bg-cyan/10 text-cyan"
                            : metric.color === "green"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {metric.color === "cyan" ? (
                          <TrendingUp className="w-3.5 h-3.5" />
                        ) : (
                          <Clock className="w-3.5 h-3.5" />
                        )}
                      </div>
                      <div>
                        <div
                          className={`font-display font-800 text-lg ${
                            metric.color === "cyan"
                              ? "text-cyan"
                              : metric.color === "green"
                              ? "text-green-400"
                              : "text-accent"
                          }`}
                        >
                          {metric.value}
                          {metric.unit ? metric.unit : ""}
                        </div>
                        <div className="font-mono text-xs text-ink-faint leading-tight">
                          {metric.label.split(" ").slice(0, 2).join(" ")}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="absolute top-6 right-6 text-ink-faint group-hover:text-accent transition-colors">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="border-t border-border bg-surface py-20">
        <div className="container-tight text-center">
          <h2 className="heading-lg text-ink mb-4">
            Ready to build your case study?
          </h2>
          <p className="text-ink-muted mb-8 max-w-md mx-auto text-sm">
            Your workflow inefficiency is the problem. Your automation tool is
            the result. Let&apos;s build the story.
          </p>
          <Link href="/contact" className="btn-primary">
            Start Free Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
