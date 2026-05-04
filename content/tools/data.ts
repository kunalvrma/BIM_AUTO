/**
 * AUTOMATION LIBRARY DATA
 * ========================
 * Add new tools by appending to the TOOLS array.
 * No other code changes needed — the library page renders from this data.
 *
 * status: "available" | "beta" | "coming-soon"
 * category: used for filtering
 */

export interface AutomationTool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  status: "available" | "beta" | "coming-soon";
  complexity: "beginner" | "intermediate" | "advanced";
  timeSaved: string;
  requirements: string[];
  features: string[];
  demoAvailable: boolean;
  downloadUrl?: string;
  documentationUrl?: string;
}

export const TOOL_CATEGORIES = [
  "All",
  "Annotation & Tagging",
  "Documentation",
  "Model Quality",
  "Parameters",
  "HVAC & MEP",
  "Structural",
];

export const TOOLS: AutomationTool[] = [
  {
    id: "auto-tagger",
    name: "Auto Tagger",
    tagline: "Tag every element in a view. One click.",
    description:
      "Automatically places and positions tags for all selected element categories in a view. Handles leader conflicts, avoids overlapping placements, and respects view crop regions. Supports all standard Revit tag families.",
    category: "Annotation & Tagging",
    tags: ["Dynamo", "Annotation", "Views"],
    status: "available",
    complexity: "beginner",
    timeSaved: "2–4 hrs per sheet set",
    requirements: ["Revit 2021+", "Dynamo 2.10+"],
    features: [
      "Tags all elements in selected categories",
      "Avoids overlapping tag placement",
      "Respects view crop boundaries",
      "Supports custom tag families",
      "Works on multiple views simultaneously",
    ],
    demoAvailable: true,
    downloadUrl: "#",
    documentationUrl: "#",
  },
  {
    id: "parameter-standardizer",
    name: "Parameter Standardizer",
    tagline: "Find and fix parameter inconsistencies across your entire model.",
    description:
      "Scans all elements in a model and reports on parameter completeness, naming inconsistencies, and empty required fields. Batch-fills parameters from an Excel schedule. Exports a compliance report for QA review.",
    category: "Parameters",
    tags: ["Python", "Parameters", "QA"],
    status: "available",
    complexity: "intermediate",
    timeSaved: "4–8 hrs per audit",
    requirements: ["Revit 2022+", "pyRevit 4.7+", "Python 3.8+"],
    features: [
      "Full parameter audit across all element categories",
      "Batch parameter assignment from Excel",
      "Compliance report with element IDs",
      "Supports shared and project parameters",
      "Delta mode for incremental updates",
    ],
    demoAvailable: true,
    downloadUrl: "#",
    documentationUrl: "#",
  },
  {
    id: "sheet-generator",
    name: "Sheet Generator",
    tagline: "Create 300+ sheets from an Excel schedule in under 10 minutes.",
    description:
      "Reads a structured Excel sheet register and batch-creates drawing sheets in Revit with correct title block parameters, browser organization, and view assignments. Supports delta-run for model updates.",
    category: "Documentation",
    tags: ["Dynamo", "Excel", "Sheets"],
    status: "available",
    complexity: "intermediate",
    timeSaved: "20–30 hrs per project",
    requirements: ["Revit 2021+", "Dynamo 2.12+", "Excel"],
    features: [
      "Batch sheet creation from Excel register",
      "Auto-populates title block parameters",
      "Browser organization via sheet number prefix",
      "View-to-sheet placement by name matching",
      "Delta mode for updates without duplicates",
      "Error log for failed sheets",
    ],
    demoAvailable: true,
    downloadUrl: "#",
    documentationUrl: "#",
  },
  {
    id: "model-health-checker",
    name: "Model Health Checker",
    tagline: "47-point model audit in 12 minutes. Full HTML report.",
    description:
      "Automated model quality audit covering parameter completeness, naming convention compliance, workset structure, element count anomalies, family performance flags, and clash risk indicators. Outputs structured HTML report with element IDs.",
    category: "Model Quality",
    tags: ["Python", "Revit API", "QA", "Reporting"],
    status: "available",
    complexity: "advanced",
    timeSaved: "8–12 hrs per audit",
    requirements: ["Revit 2022+", "pyRevit 4.7+"],
    features: [
      "47-checkpoint automated audit",
      "Severity scoring: PASS / WARN / FAIL",
      "HTML report with exportable CSV",
      "Trend comparison vs. previous audit",
      "Element IDs for click-to-navigate",
      "Runs on detached model (non-disruptive)",
    ],
    demoAvailable: false,
    documentationUrl: "#",
  },
  {
    id: "duct-sizing-tool",
    name: "Duct Sizing Tool",
    tagline: "Auto-size duct systems from airflow schedules.",
    description:
      "Reads airflow values from linked HVAC schedule and applies duct sizing calculations per ASHRAE or custom sizing tables. Updates duct dimensions and insulation parameters across entire systems in batch.",
    category: "HVAC & MEP",
    tags: ["Python", "HVAC", "MEP", "Sizing"],
    status: "beta",
    complexity: "advanced",
    timeSaved: "6–14 hrs per system",
    requirements: ["Revit MEP 2022+", "pyRevit 4.7+"],
    features: [
      "ASHRAE velocity and pressure drop methods",
      "Custom sizing table support (CSV)",
      "Batch updates entire duct system",
      "Logs all size changes for review",
      "Handles supply, return, and exhaust systems",
    ],
    demoAvailable: false,
    documentationUrl: "#",
  },
  {
    id: "room-renumber",
    name: "Room & Space Renumbering Tool",
    tagline: "Renumber all rooms by floor level and zone. Automatic.",
    description:
      "Automatically renumbers room and space elements following a configurable convention (floor prefix + sequential number). Handles multi-level buildings, zone groupings, and excludes excluded room types.",
    category: "Annotation & Tagging",
    tags: ["Dynamo", "Rooms", "Annotation"],
    status: "available",
    complexity: "beginner",
    timeSaved: "3–6 hrs per project",
    requirements: ["Revit 2020+", "Dynamo 2.8+"],
    features: [
      "Level-based prefix assignment",
      "Sequential renumbering by sort order",
      "Zone grouping support",
      "Configurable exclusion list",
      "Preview mode before applying",
    ],
    demoAvailable: true,
    downloadUrl: "#",
  },
  {
    id: "clash-report-generator",
    name: "Clash Report Generator",
    tagline: "Turn Navisworks XML clash exports into clean client reports.",
    description:
      "Parses Navisworks clash detection XML exports and generates formatted HTML or PDF reports organized by discipline, severity, and location. Includes element thumbnails, clash coordinates, and responsible party fields.",
    category: "Model Quality",
    tags: ["Python", "Navisworks", "Reporting"],
    status: "coming-soon",
    complexity: "intermediate",
    timeSaved: "4–6 hrs per clash review",
    requirements: ["Python 3.8+", "Navisworks XML export"],
    features: [
      "Parses Navisworks XML clash export",
      "Organizes by discipline and severity",
      "HTML and PDF output formats",
      "Responsible party assignment columns",
      "Summary dashboard with clash counts",
    ],
    demoAvailable: false,
  },
  {
    id: "workset-manager",
    name: "Workset Compliance Manager",
    tagline: "Enforce workset assignment rules across your model automatically.",
    description:
      "Checks that all elements are on their correct worksets per BEP rules and batch-moves non-compliant elements. Supports custom workset assignment rules defined in a simple JSON config file.",
    category: "Model Quality",
    tags: ["Python", "Worksets", "BIM Management"],
    status: "beta",
    complexity: "advanced",
    timeSaved: "3–5 hrs per compliance check",
    requirements: ["Revit 2021+", "pyRevit 4.7+"],
    features: [
      "Rules defined in JSON config (no code required)",
      "Non-compliant element report",
      "Batch workset reassignment",
      "Exceptions list support",
      "Runs on workshared models",
    ],
    demoAvailable: false,
    documentationUrl: "#",
  },
];

export function getToolsByCategory(category: string): AutomationTool[] {
  if (category === "All") return TOOLS;
  return TOOLS.filter((t) => t.category === category);
}

export function getToolById(id: string): AutomationTool | undefined {
  return TOOLS.find((t) => t.id === id);
}
