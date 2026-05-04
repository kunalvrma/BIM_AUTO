"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Terminal, ChevronRight } from "lucide-react";

const TERMINAL_LINES = [
  { text: "$ bim-auto init --project hvac-tower-nyc", delay: 0 },
  { text: "> Scanning model: 847 VAV units detected", delay: 800 },
  { text: "> Running placement validation...", delay: 1600 },
  { text: "> Generating tag annotations...", delay: 2400 },
  { text: "> Creating 312 sheets automatically...", delay: 3200 },
  { text: "> ✓ Complete. Time saved: 47 hours", delay: 4000, accent: true },
];



function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    TERMINAL_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay + 1000);
    });
  }, []);

  return (
    <div className="terminal p-5 relative overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center gap-2 pb-4 border-b border-border mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-2 text-ink-faint text-xs">bim-automation-engine v2.4.1</span>
      </div>

      {/* Terminal lines */}
      <div className="space-y-1.5 min-h-[180px]">
        {TERMINAL_LINES.map((line, i) => (
          <div
            key={i}
            className={`transition-all duration-300 text-sm ${
              visibleLines.includes(i) ? "opacity-100" : "opacity-0"
            } ${line.accent ? "text-accent font-500" : "text-ink-muted"}`}
          >
            {line.text}
            {i === TERMINAL_LINES.length - 1 && visibleLines.includes(i) && (
              <span className="inline-block w-2 h-4 bg-accent ml-1 animate-blink" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            {/* Label */}
            <div className="animate-entry">
              <span className="label-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Revit & Dynamo Automation Consulting
              </span>
            </div>

            {/* Headline */}
            <div className="animate-entry-delay-1 space-y-2">
              <h1 className="heading-xl text-ink">
                Your engineers are wasting{" "}
                <span className="text-accent relative">
                  40 hours
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent/40" />
                </span>{" "}
                per project
                <br />
                <span className="text-ink-muted">doing what scripts can do.</span>
              </h1>
            </div>

            {/* Sub */}
            <p className="animate-entry-delay-2 text-ink-muted text-lg leading-relaxed max-w-lg">
              We build custom BIM automation systems for{" "}
              <span className="text-ink">MEP and architecture firms</span>
              {" "}— turning repetitive Revit workflows into one-click operations.
            </p>

            {/* CTAs */}
            <div className="animate-entry-delay-3 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">
                Get Free Automation Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Case Studies
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="animate-entry-delay-4 flex items-center gap-6 pt-2">
              {[
                { value: "40–60h", label: "saved per project" },
                { value: "10×", label: "output speed" },
                { value: "$0", label: "audit cost" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="font-display font-800 text-accent text-xl">{item.value}</div>
                  <div className="font-mono text-xs text-ink-faint mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="animate-entry-delay-2 space-y-4">
            <TerminalAnimation />

            {/* Floating stats cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="card-base border-border-bright">
                <div className="label-mono text-xs mb-2">Model Health Score</div>
                <div className="flex items-end gap-2">
                  <span className="metric-display text-3xl">94</span>
                  <span className="text-accent text-sm mb-1">/100</span>
                </div>
                <div className="mt-2 h-1.5 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-[94%] bg-gradient-to-r from-accent to-yellow-400 rounded-full" />
                </div>
              </div>

              <div className="card-base border-border-bright">
                <div className="label-mono text-xs mb-2">Automation Coverage</div>
                <div className="flex items-end gap-2">
                  <span className="metric-display text-3xl">78</span>
                  <span className="text-accent text-sm mb-1">%</span>
                </div>
                <div className="mt-2 h-1.5 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-[78%] bg-gradient-to-r from-cyan to-blue-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent pointer-events-none" />
    </section>
  );
}
