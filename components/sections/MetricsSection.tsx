"use client";

import { useEffect, useRef, useState } from "react";

const METRICS = [
  {
    value: 47,
    suffix: "h",
    label: "Average hours saved per project",
    description: "Across sheet generation, tagging, and model coordination tasks",
    color: "accent",
  },
  {
    value: 94,
    suffix: "%",
    label: "Parameter accuracy rate",
    description: "After automated standardization vs. 71% manual average",
    color: "cyan",
  },
  {
    value: 12,
    suffix: "×",
    label: "Faster sheet generation",
    description: "From 3 days manual to under 2 hours automated",
    color: "accent",
  },
  {
    value: 340,
    suffix: "K",
    prefix: "$",
    label: "Average annual ROI per firm",
    description: "Based on recovered billable time across 10-person teams",
    color: "cyan",
  },
];

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, start]);

  return count;
}

function MetricCard({
  metric,
  index,
}: {
  metric: (typeof METRICS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(metric.value, 2000 + index * 200, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isAccent = metric.color === "accent";

  return (
    <div
      ref={ref}
      className="relative p-8 border border-border rounded-xl bg-panel overflow-hidden group hover:border-border-bright transition-all duration-300"
    >
      {/* Background glow */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isAccent ? "bg-accent/3" : "bg-cyan/3"
        }`}
      />

      {/* Corner accent */}
      <div
        className={`absolute top-0 right-0 w-16 h-16 opacity-10 ${
          isAccent ? "bg-accent" : "bg-cyan"
        } blur-2xl`}
      />

      <div className="relative z-10">
        <div
          className={`font-display font-800 text-5xl lg:text-6xl tabular-nums ${
            isAccent ? "text-accent" : "text-cyan"
          }`}
        >
          {metric.prefix || ""}
          {count}
          {metric.suffix}
        </div>
        <div className="font-display font-600 text-ink text-sm mt-3 mb-2">
          {metric.label}
        </div>
        <p className="font-body text-ink-faint text-xs leading-relaxed">
          {metric.description}
        </p>
        <p className="font-mono text-xs text-ink-faint/50 mt-2">* projected avg.</p>
      </div>
    </div>
  );
}

export function MetricsSection() {
  return (
    <section className="section-pad">
      <div className="container-wide">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="label-mono">Projected Outcomes</span>
          <h2 className="heading-lg text-ink mt-4">
            What automation recovers for a{" "}
            <span className="text-gradient">10-person MEP firm</span>
          </h2>
          <p className="text-ink-muted mt-4 text-sm leading-relaxed">
            Based on industry benchmarks and workflow analysis across comparable
            AEC firms. Your numbers will vary — the audit tells you exactly
            what&apos;s recoverable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map((metric, i) => (
            <MetricCard key={i} metric={metric} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
