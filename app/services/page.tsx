import type { Metadata } from "next";
import Link from "next/link";
import {
  Search, Code2, Workflow, GraduationCap,
  CheckCircle2, ArrowRight, Clock, TrendingUp, Target
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "BIM automation services: workflow audits, custom Dynamo scripts, Revit API tools, and BIM workflow optimization for MEP and architecture firms.",
};

const SERVICES = [
  {
    id: "audit",
    icon: Search,
    number: "01",
    title: "Automation Audit",
    tagline: "Map the waste before we eliminate it",
    price: "Free — No obligation",
    timeline: "3–5 business days",
    idealFor: "Any firm doing active Revit/BIM projects",
    problem:
      "Most firms don't know exactly where their BIM hours go. They have a general sense that coordination, documentation, and QA take too long — but no data. Decisions about tooling happen on gut feel, not metrics.",
    solution:
      "We conduct a structured workflow interview and model review session. We map your current process step-by-step, measure time per task, and identify the top automation opportunities ranked by ROI. You receive a written report with projected time savings, implementation complexity, and recommended toolset.",
    roi: "Average firms discover $80K–$200K in recoverable time within the first audit.",
    deliverables: [
      "Workflow map document (all major repetitive tasks)",
      "Time quantification per task category",
      "Top 5 automation opportunities with ROI projections",
      "Recommended tooling and implementation sequence",
      "30-minute debrief call",
    ],
    color: "accent",
  },
  {
    id: "scripts",
    icon: Code2,
    number: "02",
    title: "Custom Script Development",
    tagline: "Built around your standards, your models, your team",
    price: "From $2,400",
    timeline: "1–4 weeks",
    idealFor: "Firms with specific repetitive tasks that off-the-shelf tools don't solve",
    problem:
      "Generic Dynamo packages solve generic problems. Your VAV placement routine, your title block logic, your project-specific parameter dependencies — those need custom engineering. Templates and YouTube tutorials won't get there.",
    solution:
      "We scope, build, and deliver purpose-built automation tools: Dynamo visual programs, Python Revit API scripts, C# add-ins, or multi-system pipelines connecting Revit with Excel, databases, or project management platforms.",
    roi: "Typical scripts recover their cost within 2–3 project uses. Most clients see 10–20× ROI in year one.",
    deliverables: [
      "Custom script or Dynamo program (source included)",
      "Setup and installation documentation",
      "Video walkthrough of the tool",
      "Test against 2 client project files",
      "60-day bug-fix support",
    ],
    color: "cyan",
  },
  {
    id: "workflow",
    icon: Workflow,
    number: "03",
    title: "Workflow Optimization",
    tagline: "Rebuild the system, not just the tools",
    price: "From $3,800",
    timeline: "2–6 weeks",
    idealFor: "Growing firms where BIM inconsistency is causing rework or coordination failures",
    problem:
      "Individual tools don't fix systemic problems. If your naming conventions are inconsistent, your shared parameters are duplicated, your templates differ between projects, and your handoff process is word-of-mouth — scripts are band-aids on structural failures.",
    solution:
      "We redesign the entire BIM delivery system: project template architecture, parameter strategy, naming convention enforcement, model health checkpoints, and inter-team handoff protocols. Then we automate enforcement of those standards so the system maintains itself.",
    roi: "Firms undergoing workflow optimization typically reduce coordination-related rework by 60–80%.",
    deliverables: [
      "Revit project templates (standardized and parameterized)",
      "Shared parameter library (structured and documented)",
      "Naming convention guide and Dynamo enforcement tool",
      "Model health checklist and automated scanner",
      "BIM Execution Protocol document",
      "Staff implementation session",
    ],
    color: "accent",
  },
  {
    id: "training",
    icon: GraduationCap,
    number: "04",
    title: "Training & Implementation",
    tagline: "Your team owns the system after we leave",
    price: "From $1,200",
    timeline: "1–2 weeks",
    idealFor: "Teams receiving new automation tools or transitioning to a new BIM standard",
    problem:
      "Most consulting engagements fail at handoff. Tools get built, delivered, and then quietly abandoned because no one on the team knows how to use, modify, or troubleshoot them. The ROI evaporates inside 6 months.",
    solution:
      "We provide structured training designed around your team's actual tools. Live sessions, recorded walkthroughs, written guides, and a practice project to apply skills before going live. We don't hand you a script and disappear.",
    roi: "Teams with proper training continue using automation tools 90%+ of the time vs. 30% for teams with no training.",
    deliverables: [
      "2× live training sessions (recorded)",
      "Step-by-step usage documentation",
      "Troubleshooting guide",
      "Practice exercise project",
      "30-day Q&A support via email",
    ],
    color: "cyan",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="section-pad bg-surface border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="container-wide relative z-10">
          <span className="label-mono">Services</span>
          <h1 className="heading-xl text-ink mt-4 max-w-3xl">
            Every service maps to{" "}
            <span className="text-accent">recovered time</span> and{" "}
            <span className="text-ink-muted">measurable ROI</span>
          </h1>
          <p className="text-ink-muted mt-6 text-lg max-w-xl leading-relaxed">
            No retainers for the sake of retainers. No vague consulting hours.
            Every engagement delivers a specific output with a defined value.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="container-wide py-20 space-y-24">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          const isEven = i % 2 === 0;
          return (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Main content */}
                <div className={`lg:col-span-3 space-y-6 ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        service.color === "cyan"
                          ? "bg-cyan/10 border border-cyan/20"
                          : "bg-accent/10 border border-accent/20"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          service.color === "cyan" ? "text-cyan" : "text-accent"
                        }`}
                      />
                    </div>
                    <span className="font-mono text-xs text-ink-faint">{service.number}</span>
                  </div>

                  <div>
                    <h2 className="heading-md text-ink">{service.title}</h2>
                    <p
                      className={`font-display font-500 mt-1 ${
                        service.color === "cyan" ? "text-cyan" : "text-accent"
                      }`}
                    >
                      {service.tagline}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-mono text-xs text-ink-faint uppercase tracking-wider mb-2">
                        The Problem
                      </h4>
                      <p className="text-ink-muted text-sm leading-relaxed">
                        {service.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-mono text-xs text-ink-faint uppercase tracking-wider mb-2">
                        The Solution
                      </h4>
                      <p className="text-ink-muted text-sm leading-relaxed">
                        {service.solution}
                      </p>
                    </div>
                  </div>

                  {/* ROI highlight */}
                  <div
                    className={`p-4 rounded-lg border ${
                      service.color === "cyan"
                        ? "border-cyan/20 bg-cyan/5"
                        : "border-accent/20 bg-accent/5"
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <TrendingUp
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          service.color === "cyan" ? "text-cyan" : "text-accent"
                        }`}
                      />
                      <p className="text-sm text-ink leading-relaxed">{service.roi}</p>
                    </div>
                  </div>

                  <Link href="/contact" className="btn-primary inline-flex">
                    Start with {service.title}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Sidebar */}
                <div className={`lg:col-span-2 space-y-4 ${!isEven ? "lg:order-1" : ""}`}>
                  {/* Pricing / meta */}
                  <div className="card-base">
                    <div className="space-y-3">
                      {[
                        { icon: Target, label: "Investment", value: service.price },
                        { icon: Clock, label: "Timeline", value: service.timeline },
                      ].map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <div
                            key={item.label}
                            className="flex items-center justify-between py-2 border-b border-border last:border-0"
                          >
                            <div className="flex items-center gap-2 text-ink-faint text-sm">
                              <ItemIcon className="w-3.5 h-3.5" />
                              {item.label}
                            </div>
                            <span className="font-display font-600 text-ink text-sm">
                              {item.value}
                            </span>
                          </div>
                        );
                      })}
                      <div className="pt-1">
                        <div className="text-ink-faint text-xs mb-1">Ideal for</div>
                        <p className="text-ink-muted text-sm">{service.idealFor}</p>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="card-base">
                    <h4 className="font-mono text-xs text-ink-faint uppercase tracking-wider mb-4">
                      Deliverables
                    </h4>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                              service.color === "cyan" ? "text-cyan" : "text-accent"
                            }`}
                          />
                          <span className="text-ink-muted text-sm">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {i < SERVICES.length - 1 && (
                <div className="mt-24 h-px bg-border" />
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-border bg-surface py-20">
        <div className="container-tight text-center">
          <h2 className="heading-lg text-ink mb-4">
            Not sure which service fits?
          </h2>
          <p className="text-ink-muted mb-8 max-w-md mx-auto">
            The audit is free and takes 45 minutes. It&apos;ll tell you exactly what
            to do next.
          </p>
          <Link href="/contact" className="btn-primary">
            Book Free Automation Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
