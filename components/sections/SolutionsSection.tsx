import Link from "next/link";
import { Search, Code2, Workflow, GraduationCap, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Search,
    id: "audit",
    label: "01",
    title: "Automation Audit",
    tagline: "Find the hours before we recover them",
    description:
      "A structured analysis of your current Revit/BIM workflows. We map every repetitive task, quantify time spent, and deliver a prioritized automation roadmap with projected ROI.",
    deliverables: ["Workflow map", "ROI projection", "Automation roadmap", "Priority matrix"],
    price: "Free",
    cta: "Book Audit",
    href: "/contact",
  },
  {
    icon: Code2,
    id: "scripts",
    label: "02",
    title: "Custom Script Development",
    tagline: "Built for your workflow, not the general case",
    description:
      "Bespoke Dynamo scripts, Python-based Revit API tools, and automation pipelines engineered around your specific project types, standards, and delivery requirements.",
    deliverables: ["Dynamo scripts", "Revit API tools", "Python automation", "Documentation"],
    price: "From $2,400",
    cta: "Scope Project",
    href: "/contact",
  },
  {
    icon: Workflow,
    id: "workflow",
    label: "03",
    title: "Workflow Optimization",
    tagline: "System design for repeatable delivery",
    description:
      "We redesign your BIM execution process — naming conventions, template architecture, parameter strategy, and inter-team handoffs — to eliminate rework and reduce coordination overhead.",
    deliverables: ["BIM templates", "Naming standards", "Parameter protocols", "QA systems"],
    price: "From $3,800",
    cta: "Start Engagement",
    href: "/contact",
  },
  {
    icon: GraduationCap,
    id: "training",
    label: "04",
    title: "Training & Implementation",
    tagline: "Your team runs the system. We build the system.",
    description:
      "Live training sessions, recorded walkthroughs, and implementation support to ensure your engineers can deploy, modify, and extend the automation tools we build.",
    deliverables: ["Live sessions", "Video library", "Reference docs", "Ongoing support"],
    price: "From $1,200",
    cta: "Plan Training",
    href: "/contact",
  },
];

export function SolutionsSection() {
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="label-mono">Services</span>
            <h2 className="heading-lg text-ink mt-4">
              Four ways we eliminate{" "}
              <span className="text-ink-muted">manual BIM labor</span>
            </h2>
          </div>
          <Link href="/services" className="btn-ghost text-sm shrink-0">
            Full service breakdown
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Service cards */}
        <div className="grid lg:grid-cols-2 gap-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="card-base card-hover group relative overflow-hidden"
              >
                {/* Gradient top edge */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-ink-faint">{service.label}</span>
                      <h3 className="font-display font-700 text-ink text-lg leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-md whitespace-nowrap">
                    {service.price}
                  </span>
                </div>

                <p className="text-accent font-display font-500 text-sm mb-3">
                  {service.tagline}
                </p>

                <p className="text-ink-muted text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.deliverables.map((d) => (
                    <span key={d} className="tag">{d}</span>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="btn-ghost text-sm text-accent hover:text-accent-dim group-hover:gap-3 transition-all"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
