"use client";

import { useState } from "react";
import type { Metadata } from "next";
import {
  Mail, Clock, CheckCircle2, Send, AlertCircle, ArrowRight, Calendar
} from "lucide-react";

const AUDIT_INCLUDES = [
  "Workflow map of your current BIM process",
  "Top 3 automation opportunities identified",
  "Time and cost savings projected per opportunity",
  "Recommended toolset and build sequence",
  "Written report delivered within 5 business days",
  "30-minute debrief call included",
];

const PROJECT_TYPES = [
  "Automation Audit (Free)",
  "Custom Script Development",
  "Workflow Optimisation",
  "Training & Implementation",
  "Other / Not sure yet",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "",
    description: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="section-pad bg-surface border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="container-wide relative z-10">
          <span className="label-mono">Contact</span>
          <h1 className="heading-xl text-ink mt-4 max-w-2xl">
            Start with the{" "}
            <span className="text-accent">free audit.</span>
          </h1>
          <p className="text-ink-muted mt-6 text-lg max-w-lg leading-relaxed">
            No pitch. No proposal before we understand your problem. Fill out
            the form — we&apos;ll respond within one business day.
          </p>
        </div>
      </div>

      <div className="container-wide py-20">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="font-display font-700 text-ink text-2xl">
                  Message received
                </h2>
                <p className="text-ink-muted max-w-sm">
                  We&apos;ll review your workflow details and respond within one
                  business day with next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-ink-faint block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full bg-panel border border-border rounded-lg px-4 py-3 text-ink text-sm font-body placeholder:text-ink-faint focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-ink-faint block">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Acme MEP Engineering"
                      className="w-full bg-panel border border-border rounded-lg px-4 py-3 text-ink text-sm font-body placeholder:text-ink-faint focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-ink-faint block">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="jane@acmeengineering.com"
                    className="w-full bg-panel border border-border rounded-lg px-4 py-3 text-ink text-sm font-body placeholder:text-ink-faint focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-ink-faint block">
                    Service Type
                  </label>
                  <select
                    name="projectType"
                    value={formState.projectType}
                    onChange={handleChange}
                    className="w-full bg-panel border border-border rounded-lg px-4 py-3 text-ink text-sm font-body focus:outline-none focus:border-accent transition-colors appearance-none"
                  >
                    <option value="" className="text-ink-faint">
                      Select a service...
                    </option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-ink-faint block">
                    Tell us about your workflow / problem *
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={5}
                    value={formState.description}
                    onChange={handleChange}
                    placeholder="Describe the repetitive BIM tasks your team is doing, the tools you currently use (Revit version, Dynamo, etc.), and your team size. The more specific, the better our audit will be."
                    className="w-full bg-panel border border-border rounded-lg px-4 py-3 text-ink text-sm font-body placeholder:text-ink-faint focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full justify-center py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="font-mono text-xs text-ink-faint text-center">
                  We respond within 1 business day. No spam, no newsletter.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* What's included */}
            <div className="card-base">
              <h3 className="font-display font-700 text-ink mb-1">
                Free Automation Audit includes:
              </h3>
              <p className="text-ink-faint text-sm mb-4">
                No engagement required. No sales call.
              </p>
              <ul className="space-y-2.5">
                {AUDIT_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-ink-muted text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Response time */}
            <div className="card-base">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-cyan" />
                </div>
                <h4 className="font-display font-600 text-ink">Response time</h4>
              </div>
              <p className="text-ink-muted text-sm">
                We respond to all enquiries within{" "}
                <span className="text-ink">1 business day</span>.
                Audit reports delivered within{" "}
                <span className="text-ink">5 business days</span> of initial call.
              </p>
            </div>

            {/* Direct email */}
            <div className="card-base">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <h4 className="font-display font-600 text-ink">Direct email</h4>
              </div>
              <a
                href="mailto:hello@bimautomation.consulting"
                className="text-accent text-sm font-mono hover:text-accent-dim transition-colors"
              >
                hello@bimautomation.consulting
              </a>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 text-xs font-mono text-ink-faint">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Currently accepting new clients — 2 slots remaining this month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
