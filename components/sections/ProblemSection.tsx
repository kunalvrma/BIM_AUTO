"use client";

import { Clock, AlertTriangle, RefreshCw, FileX, Users, DollarSign } from "lucide-react";

const PROBLEMS = [
  {
    icon: Clock,
    title: "Manual Sheet Generation",
    description:
      "Engineers spend 2–4 days manually creating, naming, and organizing drawing sheets for every project submission. Zero automation. Pure labor.",
    cost: "~32 hrs / project",
  },
  {
    icon: AlertTriangle,
    title: "Uncoordinated Models",
    description:
      "Clash detection runs late. MEP vs structural conflicts discovered during construction. RFIs pile up. Change orders destroy margin.",
    cost: "$15K–80K per RFI",
  },
  {
    icon: RefreshCw,
    title: "Redundant Parameter Entry",
    description:
      "The same data entered in Revit, Excel, and the project management system. Three times. By hand. Every time something changes.",
    cost: "3× data entry",
  },
  {
    icon: FileX,
    title: "Inconsistent Naming Standards",
    description:
      "Every team member follows their own convention. Model audits take days. Federated models break. Clients request endless revisions.",
    cost: "8–12 hrs per audit",
  },
  {
    icon: Users,
    title: "Senior Engineers on Junior Tasks",
    description:
      "Your $120/hr BIM manager is manually placing tags, renumbering rooms, and chasing missing parameters. That's not a workflow. It's waste.",
    cost: "$480/day burned",
  },
  {
    icon: DollarSign,
    title: "No Scalable Delivery System",
    description:
      "Output capacity is capped by headcount. Every new project requires linear staff increases. The business can't scale without the cost scaling too.",
    cost: "Revenue ceiling",
  },
];

export function ProblemSection() {
  return (
    <section className="section-pad bg-surface border-y border-border relative overflow-hidden">
      {/* Subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('/noise.png')] pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="label-mono">The Problem</span>
          <h2 className="heading-lg text-ink mt-4 mb-6">
            BIM workflows haven&apos;t changed.{" "}
            <span className="text-ink-muted">Your competitors&apos; have.</span>
          </h2>
          <p className="text-ink-muted leading-relaxed">
            Most engineering firms are still operating BIM the way they did in 2012.
            Manual processes disguised as standard practice. The firms automating now
            will outbid you, outdeliver you, and outscale you within 24 months.
          </p>
        </div>

        {/* Problem grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROBLEMS.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <div
                key={i}
                className="card-base card-hover group relative overflow-hidden"
              >
                {/* Top border accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-600 text-ink text-sm">
                      {problem.title}
                    </h3>
                    <span className="font-mono text-xs text-red-400/80 mt-0.5 block">
                      {problem.cost}
                    </span>
                  </div>
                </div>
                <p className="text-ink-faint text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 p-6 border border-border-bright rounded-xl bg-panel flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <div>
            <p className="font-display font-600 text-ink">
              Combined, these inefficiencies cost a 10-person firm{" "}
              <span className="text-accent">$200K–$400K/year</span> in billable time.
            </p>
            <p className="text-ink-muted text-sm mt-1">
              That&apos;s not an estimate. That&apos;s based on audits we&apos;ve run across 20+ firms.
            </p>
          </div>
          <a
            href="/contact"
            className="btn-primary whitespace-nowrap flex-shrink-0 text-sm"
          >
            Calculate Your Loss
          </a>
        </div>
      </div>
    </section>
  );
}
