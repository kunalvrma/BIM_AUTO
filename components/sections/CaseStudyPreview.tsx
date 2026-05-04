import Link from "next/link";
import { ArrowRight, Clock, TrendingUp, Zap } from "lucide-react";

const FEATURED_CASES = [
  {
    slug: "vav-placement-automation",
    label: "MEP / HVAC",
    title: "VAV Placement & Tagging Automation",
    client: "NYC HVAC Engineering Firm",
    problem:
      "847 VAV units requiring manual placement validation, coordination checking, and annotation across 40 floors. 3 engineers, 2 weeks estimated.",
    result: "Fully automated in 4 hours via Dynamo + Python pipeline.",
    metrics: [
      { icon: Clock, value: "47h", label: "saved" },
      { icon: TrendingUp, value: "12×", label: "faster" },
      { icon: Zap, value: "$5,640", label: "recovered" },
    ],
    tags: ["Dynamo", "Python", "HVAC", "Revit API"],
    accent: "accent",
  },
  {
    slug: "sheet-generation-automation",
    label: "Architecture / Documentation",
    title: "Automated Drawing Sheet Generator",
    client: "Mid-size Architecture Practice, London",
    problem:
      "312 drawing sheets manually created per project. Naming inconsistencies, wrong revision blocks, missing title block data. 3 days of coordinator time per submission.",
    result: "One-click generation from project data. Zero manual entry.",
    metrics: [
      { icon: Clock, value: "26h", label: "saved" },
      { icon: TrendingUp, value: "18×", label: "faster" },
      { icon: Zap, value: "$3,120", label: "recovered" },
    ],
    tags: ["Dynamo", "Excel", "Revit", "Automation"],
    accent: "cyan",
  },
  {
    slug: "model-health-scanner",
    label: "BIM Management",
    title: "Automated Model Health Scanner",
    client: "US General Contractor BIM Team",
    problem:
      "Weekly model audits taking 8–12 hours. Errors discovered late. Federated model coordination failing due to inconsistent standards across 6 trade partners.",
    result: "Automated health report generated in 12 minutes with fix suggestions.",
    metrics: [
      { icon: Clock, value: "11h", label: "per audit" },
      { icon: TrendingUp, value: "55×", label: "faster" },
      { icon: Zap, value: "$1,320", label: "per week" },
    ],
    tags: ["Revit API", "Python", "Reporting", "QA"],
    accent: "accent",
  },
];

export function CaseStudyPreview() {
  return (
    <section className="section-pad">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="label-mono">Case Studies</span>
            <h2 className="heading-lg text-ink mt-4">
              Demonstration{" "}
              <span className="text-ink-muted">Builds</span>
            </h2>
            <p className="text-ink-muted text-sm mt-3 leading-relaxed">
              Purpose-built automation systems that solve real MEP and
              architecture workflow problems. Each one is production-ready and
              available as a starting point for your firm&apos;s specific requirements.
            </p>
          </div>
          <Link href="/case-studies" className="btn-ghost text-sm shrink-0">
            All case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Case study cards */}
        <div className="space-y-4">
          {FEATURED_CASES.map((cs, i) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group block card-base card-hover relative overflow-hidden"
            >
              {/* Side accent bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 ${
                  cs.accent === "cyan" ? "bg-cyan" : "bg-accent"
                } opacity-30 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="pl-4">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        className={`label-mono text-xs ${
                          cs.accent === "cyan" ? "text-cyan" : "text-accent"
                        }`}
                      >
                        {cs.label}
                      </span>
                      <span className="text-ink-faint text-xs font-mono">— {cs.client}</span>
                    </div>
                    <h3 className="font-display font-700 text-ink text-xl group-hover:text-accent transition-colors duration-200">
                      {cs.title}
                    </h3>
                    <p className="text-ink-faint text-sm leading-relaxed max-w-2xl">
                      <span className="text-ink-muted font-500">Problem: </span>
                      {cs.problem}
                    </p>
                    <p className="text-sm text-green-400/80">
                      <span className="font-500">Result: </span>
                      {cs.result}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {cs.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex lg:flex-col gap-4 lg:gap-3 lg:min-w-[140px]">
                    {cs.metrics.map((metric) => {
                      const Icon = metric.icon;
                      return (
                        <div key={metric.label} className="flex items-center gap-2.5">
                          <div
                            className={`w-7 h-7 rounded-md flex items-center justify-center ${
                              cs.accent === "cyan"
                                ? "bg-cyan/10 text-cyan"
                                : "bg-accent/10 text-accent"
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div
                              className={`font-display font-800 text-lg ${
                                cs.accent === "cyan" ? "text-cyan" : "text-accent"
                              }`}
                            >
                              {metric.value}
                            </div>
                            <div className="font-mono text-xs text-ink-faint">
                              {metric.label}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute top-6 right-6 text-ink-faint group-hover:text-accent transition-colors duration-200">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
