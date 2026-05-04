import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/content/case-studies/data";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, MapPin, Tag } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return { title: "Not Found" };
  return {
    title: cs.title,
    description: cs.summary,
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) notFound();

  const currentIndex = CASE_STUDIES.findIndex((c) => c.slug === cs.slug);
  const prevCase = CASE_STUDIES[currentIndex - 1];
  const nextCase = CASE_STUDIES[currentIndex + 1];

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-surface border-b border-border py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-wide relative z-10">
          <Link
            href="/case-studies"
            className="btn-ghost text-sm mb-8 inline-flex"
          >
            <ArrowLeft className="w-4 h-4" />
            All Case Studies
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="label-mono text-accent">{cs.industry}</span>
              </div>
              <h1 className="heading-lg text-ink">{cs.title}</h1>
              <p className="text-ink-muted leading-relaxed">{cs.summary}</p>

              <div className="flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Meta sidebar */}
            <div className="space-y-3">
              {[
                { icon: Tag, label: "Client", value: cs.client },
                { icon: MapPin, label: "Location", value: cs.location },
                { icon: Clock, label: "Timeline", value: cs.timeline },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 py-3 border-b border-border last:border-0"
                  >
                    <Icon className="w-4 h-4 text-ink-faint flex-shrink-0" />
                    <div>
                      <div className="font-mono text-xs text-ink-faint">{item.label}</div>
                      <div className="font-display font-600 text-ink text-sm">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Metrics bar */}
      <div className="border-b border-border bg-panel">
        <div className="container-wide py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-border">
            {cs.metrics.map((metric) => (
              <div key={metric.label} className="px-4 first:pl-0">
                <div
                  className={`font-display font-800 text-3xl ${
                    metric.color === "cyan"
                      ? "text-cyan"
                      : metric.color === "green"
                      ? "text-green-400"
                      : "text-accent"
                  }`}
                >
                  {metric.value}
                  {metric.unit || ""}
                </div>
                <div className="font-display font-600 text-ink text-xs mt-1">
                  {metric.label}
                </div>
                <div className="font-mono text-xs text-ink-faint mt-1 leading-tight">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body content */}
      <div className="container-wide py-20">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-14">
            {/* Problem */}
            <div>
              <span className="label-mono mb-4 block">The Problem</span>
              <p className="text-ink-muted leading-relaxed">{cs.problem}</p>
            </div>

            {/* Approach */}
            <div>
              <span className="label-mono mb-4 block">Technical Approach</span>
              <ul className="space-y-3">
                {cs.approach.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-mono text-xs text-accent">{i + 1}</span>
                    </div>
                    <p className="text-ink-muted text-sm leading-relaxed">{step}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div>
              <span className="label-mono mb-4 block">The Solution</span>
              <p className="text-ink-muted leading-relaxed">{cs.solution}</p>
            </div>

            {/* Testimonial */}
            {cs.testimonial && (
              <div className="border-l-2 border-accent pl-6 py-2">
                <p className="text-ink text-lg leading-relaxed mb-4">
                  &ldquo;{cs.testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-display font-600 text-ink text-sm">
                    {cs.testimonial.author}
                  </div>
                  <div className="font-mono text-xs text-ink-faint">
                    {cs.testimonial.role}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technical stack */}
            <div className="card-base">
              <h3 className="font-mono text-xs text-ink-faint uppercase tracking-wider mb-4">
                Technical Stack
              </h3>
              <ul className="space-y-2">
                {cs.technicalStack.map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    <span className="text-ink-muted text-sm">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="card-base bg-accent/5 border-accent/20">
              <h3 className="font-display font-700 text-ink mb-2">
                Build something similar?
              </h3>
              <p className="text-ink-muted text-sm mb-4">
                Start with a free audit. We&apos;ll scope your equivalent automation
                and project the ROI before any commitment.
              </p>
              <Link href="/contact" className="btn-primary text-sm w-full justify-center">
                Book Free Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Next/Prev navigation */}
        <div className="mt-20 pt-12 border-t border-border grid md:grid-cols-2 gap-4">
          {prevCase ? (
            <Link
              href={`/case-studies/${prevCase.slug}`}
              className="group card-base card-hover flex items-center gap-4"
            >
              <ArrowLeft className="w-4 h-4 text-ink-faint group-hover:text-accent transition-colors flex-shrink-0" />
              <div>
                <div className="font-mono text-xs text-ink-faint mb-1">Previous</div>
                <div className="font-display font-600 text-ink text-sm group-hover:text-accent transition-colors">
                  {prevCase.title}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextCase ? (
            <Link
              href={`/case-studies/${nextCase.slug}`}
              className="group card-base card-hover flex items-center gap-4 text-right"
            >
              <div className="flex-1">
                <div className="font-mono text-xs text-ink-faint mb-1">Next</div>
                <div className="font-display font-600 text-ink text-sm group-hover:text-accent transition-colors">
                  {nextCase.title}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-ink-faint group-hover:text-accent transition-colors flex-shrink-0" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
