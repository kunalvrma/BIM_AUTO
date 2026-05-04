import { Search, FileCode2, FlaskConical, Rocket, LifeBuoy } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    number: "01",
    title: "Audit",
    description:
      "We map your current BIM workflows, identify the highest-ROI automation targets, and deliver a written report with time and cost projections. Free, no commitment.",
    duration: "3–5 days",
  },
  {
    icon: FileCode2,
    number: "02",
    title: "Scope & Spec",
    description:
      "We define the exact automation deliverables, input/output specs, Revit version requirements, and integration points. Fixed-price proposal before any code is written.",
    duration: "2–3 days",
  },
  {
    icon: FlaskConical,
    number: "03",
    title: "Build & Test",
    description:
      "We build in iterations against your actual project files. Weekly check-ins. You see progress, not a black box. Tested on real models before handoff.",
    duration: "1–4 weeks",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deploy",
    description:
      "Handoff includes full documentation, a setup guide, and a live walkthrough session. Your team runs the tool from day one. Zero friction deployment.",
    duration: "2–3 days",
  },
  {
    icon: LifeBuoy,
    number: "05",
    title: "Support",
    description:
      "60-day post-deployment support included. Bug fixes, minor adjustments, and questions handled at no extra cost. Ongoing retainer available for larger teams.",
    duration: "60 days included",
  },
];

export function ProcessSection() {
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-wide">
        <div className="max-w-xl mb-16">
          <span className="label-mono">How It Works</span>
          <h2 className="heading-lg text-ink mt-4">
            From{" "}
            <span className="text-ink-muted">workflow audit</span> to{" "}
            <span className="text-accent">deployed automation</span>
          </h2>
          <p className="text-ink-muted text-sm mt-4 leading-relaxed">
            Every engagement starts with a free audit. No retainers. No guesswork.
            Fixed scope before any code is written.
          </p>
          <p className="text-ink-faint text-sm mt-3 leading-relaxed">
            A structured five-phase process. No surprises, no scope creep, no
            &quot;we&apos;ll figure it out as we go.&quot; Every engagement is documented before
            it starts.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-[28px] top-12 bottom-12 w-px bg-gradient-to-b from-accent/30 via-border-bright to-transparent" />

          <div className="space-y-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="flex gap-6 group"
                >
                  {/* Icon node */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-panel border border-border group-hover:border-accent/40 flex items-center justify-center transition-all duration-300 group-hover:bg-accent/5">
                      <Icon className="w-5 h-5 text-ink-muted group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-accent">{step.number}</span>
                      <h3 className="font-display font-700 text-ink text-lg">
                        {step.title}
                      </h3>
                      <span className="font-mono text-xs text-ink-faint bg-panel border border-border px-2 py-0.5 rounded-md">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-ink-muted text-sm leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
