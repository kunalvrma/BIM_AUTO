"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TOOLS,
  TOOL_CATEGORIES,
  getToolsByCategory,
} from "@/content/tools/data";
import {
  CheckCircle2,
  Clock,
  Download,
  BookOpen,
  FlaskConical,
  Lock,
  Zap,
} from "lucide-react";

const COMPLEXITY_COLORS = {
  beginner: "text-green-400 bg-green-400/10 border-green-400/20",
  intermediate: "text-cyan bg-cyan/10 border-cyan/20",
  advanced: "text-accent bg-accent/10 border-accent/20",
};

const STATUS_CONFIG = {
  available: { label: "Available", color: "text-green-400", dot: "bg-green-400" },
  beta: { label: "Beta", color: "text-yellow-400", dot: "bg-yellow-400" },
  "coming-soon": { label: "Coming Soon", color: "text-ink-faint", dot: "bg-ink-faint" },
};

export default function AutomationLibraryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = getToolsByCategory(activeCategory);

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="section-pad bg-surface border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="container-wide relative z-10">
          <span className="label-mono">Automation Library</span>
          <h1 className="heading-xl text-ink mt-4 max-w-3xl">
            {TOOLS.length} tools.{" "}
            <span className="text-ink-muted">All engineered for real workflows.</span>
          </h1>
          <p className="text-ink-muted mt-6 text-lg max-w-xl leading-relaxed">
            Free tools available for download. Custom implementations and
            integrations available as a consulting engagement.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="border-b border-border bg-panel sticky top-16 z-40">
        <div className="container-wide py-3 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {TOOL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-md font-mono text-xs whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-accent text-white"
                  : "text-ink-muted hover:text-ink hover:bg-surface border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto font-mono text-xs text-ink-faint whitespace-nowrap pl-4">
            {filteredTools.length} tools
          </span>
        </div>
      </div>

      {/* Tools grid */}
      <div className="container-wide py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => {
            const status = STATUS_CONFIG[tool.status];
            const isAvailable = tool.status === "available";

            return (
              <div
                key={tool.id}
                className={`card-base group relative overflow-hidden flex flex-col transition-all duration-300 ${
                  isAvailable
                    ? "card-hover"
                    : "opacity-70 cursor-default"
                }`}
              >
                {/* Status + complexity */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                    <span className={`font-mono text-xs ${status.color}`}>
                      {status.label}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-xs px-2 py-0.5 rounded border ${
                      COMPLEXITY_COLORS[tool.complexity]
                    }`}
                  >
                    {tool.complexity}
                  </span>
                </div>

                {/* Tool header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-700 text-ink text-base leading-tight">
                      {tool.name}
                    </h3>
                    <p className="text-accent text-xs mt-0.5 font-display">
                      {tool.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-ink-faint text-sm leading-relaxed mb-4 flex-1">
                  {tool.description}
                </p>

                {/* Time saved */}
                <div className="flex items-center gap-2 py-2 border-y border-border mb-4">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  <span className="font-mono text-xs text-ink-muted">
                    Saves <span className="text-accent">{tool.timeSaved}</span>
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {tool.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-ink-faint text-xs">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tool.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">{tag}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-auto">
                  {tool.downloadUrl && isAvailable ? (
                    <a
                      href={tool.downloadUrl}
                      className="btn-primary text-xs py-2 px-3 flex-1 justify-center"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </a>
                  ) : tool.status === "coming-soon" ? (
                    <button
                      disabled
                      className="flex-1 flex items-center justify-center gap-2 border border-border text-ink-faint text-xs py-2 px-3 rounded-lg cursor-not-allowed"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      Coming Soon
                    </button>
                  ) : (
                    <Link
                      href="/contact"
                      className="btn-secondary text-xs py-2 px-3 flex-1 justify-center"
                    >
                      <FlaskConical className="w-3.5 h-3.5" />
                      Request Access
                    </Link>
                  )}

                  {tool.documentationUrl && (
                    <a
                      href={tool.documentationUrl}
                      className="btn-ghost text-xs py-2 px-3 border border-border rounded-lg hover:border-border-bright"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom tool CTA */}
        <div className="mt-16 p-8 border border-border-bright rounded-xl bg-panel text-center">
          <h3 className="font-display font-700 text-ink text-xl mb-2">
            Need a tool that isn&apos;t here?
          </h3>
          <p className="text-ink-muted text-sm mb-6 max-w-md mx-auto">
            Every tool in this library was built for a specific client need. 
            If your workflow problem isn&apos;t solved by any of these, we&apos;ll build it.
          </p>
          <Link href="/contact" className="btn-primary">
            Scope Custom Tool
          </Link>
        </div>
      </div>
    </div>
  );
}
