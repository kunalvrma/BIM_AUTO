import Link from "next/link";
import { Zap, Mail, Linkedin, Github, Twitter } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Automation Audit", href: "/services#audit" },
    { label: "Custom Scripts", href: "/services#scripts" },
    { label: "Workflow Optimization", href: "/services#workflow" },
    { label: "Training", href: "/services#training" },
  ],
  Resources: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Automation Library", href: "/automation-library" },
    { label: "Blog", href: "/blog" },
  ],
  Company: [
    { label: "Contact", href: "/contact" },
    { label: "Free Audit", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-7 h-7 bg-accent rounded-md flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-700 text-ink text-sm">
                BIM<span className="text-accent">_AUTO</span>
              </span>
            </Link>
            <p className="text-ink-muted text-sm leading-relaxed max-w-xs">
              BIM automation consulting for MEP and architecture firms.
            </p>
            <p className="font-mono text-xs text-ink-faint mt-1">
              Dynamo · Python · Revit API
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="mailto:hello@bimautomation.consulting"
                className="text-ink-faint hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-faint hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-faint hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-display font-600 text-ink text-sm">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-ink-faint hover:text-ink text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ink-faint text-xs font-mono">
            © {new Date().getFullYear()} BIM Automation Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-2 font-mono text-xs text-ink-faint">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Available for new projects
          </div>
        </div>
      </div>
    </footer>
  );
}
