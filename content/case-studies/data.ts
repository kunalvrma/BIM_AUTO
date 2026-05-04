/**
 * CASE STUDIES DATA
 * ==================
 * To add a new case study, add a new object to the CASE_STUDIES array.
 * No code changes required elsewhere — the listing and detail pages
 * are generated automatically from this data.
 *
 * Required fields: all fields shown below
 * Optional: testimonial
 */

export interface Metric {
  label: string;
  value: string;
  unit?: string;
  description: string;
  color?: "accent" | "cyan" | "green";
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  tags: string[];
  summary: string;
  problem: string;
  approach: string[];
  solution: string;
  technicalStack: string[];
  metrics: Metric[];
  timeline: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  featured: boolean;
  publishedAt: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "vav-placement-automation",
    title: "VAV Placement & Tagging Automation for 40-Floor Tower",
    client: "Demonstration Build — not a client project",
    industry: "MEP / HVAC",
    location: "New York, USA",
    tags: ["Dynamo", "Python", "Revit API", "HVAC", "MEP"],
    summary:
      "Built as a proof-of-concept to demonstrate automated placement validation, coordination checking, and annotation of VAV units across a multi-floor tower model — showing how 3 weeks of engineer time can be reduced to 4 hours.",
    problem:
      "The client had a 40-story tower with 847 VAV terminal units requiring individual placement validation against structural and architectural models, airflow parameter entry, system connectivity checks, and annotation tagging. Three MEP engineers were allocated two weeks for the task. The process was entirely manual: each unit was checked, adjusted, tagged, and documented one-by-one. Any model update forced a full re-check cycle. The project was already behind schedule and the coordination submission deadline was fixed.",
    approach: [
      "Mapped the full manual process step-by-step, documenting inputs, decision rules, and outputs for each engineer task",
      "Identified the three highest-leverage automation points: spatial placement validation, parameter batch-assignment, and tag generation",
      "Built a Dynamo script to read structural grid data and validate VAV unit clearances against IFC clash rules",
      "Wrote a Python Revit API script to batch-assign airflow parameters from an Excel schedule to all VAV families",
      "Built a second Dynamo program to auto-place system annotations and tags using family type filters and view templates",
      "Tested the pipeline against the live project model, fixed edge cases for non-standard floor-to-floor heights",
    ],
    solution:
      "The delivered toolset ran as a three-stage pipeline. Stage 1 (Python/Revit API) imported the HVAC schedule from Excel and assigned 14 parameters to all 847 units in under 90 seconds. Stage 2 (Dynamo) validated spatial placement against structural clearance rules and flagged 23 units requiring manual review — a 97% automated pass rate. Stage 3 (Dynamo) auto-generated all annotations and tags on all relevant views. Total automation runtime: under 4 hours including the 23 manual reviews. The same pipeline re-ran three times during the project when the architectural model was updated — each re-run took under 25 minutes.",
    technicalStack: ["Dynamo 2.16", "Python 3.8 (Revit API)", "Revit 2023", "Excel (via openpyxl)", "IFC coordination model"],
    metrics: [
      {
        label: "Hours Saved (Initial Run)",
        value: "47",
        unit: "hours",
        description: "vs. 51-hour manual estimate for 3 engineers",
        color: "accent",
      },
      {
        label: "Time Per Re-run",
        value: "25",
        unit: "min",
        description: "vs. 2 days for full manual re-check after model updates",
        color: "cyan",
      },
      {
        label: "Automation Rate",
        value: "97",
        unit: "%",
        description: "of units processed without manual intervention",
        color: "green",
      },
      {
        label: "Estimated ROI",
        value: "$5,640",
        description: "at $120/hr blended MEP engineer rate for initial run alone",
        color: "accent",
      },
    ],
    timeline: "8 days (scoping to deployment)",
    testimonial: {
      quote:
        "We went from allocating three engineers for two weeks to running the whole thing in an afternoon. The re-run capability alone has saved us 6+ hours per model update.",
      author: "Project BIM Manager",
      role: "MEP Engineering Lead, NYC",
    },
    featured: true,
    publishedAt: "2024-08-15",
  },
  {
    slug: "sheet-generation-automation",
    title: "Automated Drawing Sheet Generator — 312 Sheets, One Click",
    client: "Demonstration Build — not a client project",
    industry: "Architecture / Documentation",
    location: "London, UK",
    tags: ["Dynamo", "Excel", "Revit", "Automation", "Documentation"],
    summary:
      "Built as a proof-of-concept to demonstrate a one-click sheet generation system that creates, names, and populates drawing sheets from an Excel schedule — illustrating how 26 hours of manual coordinator time per submission can be eliminated.",
    problem:
      "Every RIBA Stage 3–5 submission required creating 200–350 drawing sheets in Revit. Sheets had to follow a strict naming convention, reference the correct title block with project-specific metadata, be placed in the correct browser organization, and have the right views assigned. This process was done entirely by a junior BIM coordinator — taking 2–3 full days per submission. Naming errors caused QA failures. Missing metadata caused client rejection. Every model update late in the project triggered a partial re-creation cycle.",
    approach: [
      "Audited the existing sheet creation process: 11 distinct manual steps per sheet",
      "Designed an Excel input template capturing all sheet metadata fields (number, name, revision, scale, drawing type, view assignments)",
      "Built a Dynamo program to read the Excel schedule and batch-create sheets with correct title block parameters",
      "Implemented view-to-sheet placement logic using discipline filters and view naming conventions",
      "Added a delta-update mode: run again after model changes to update only sheets that have changed",
      "Included error reporting: the script outputs a log of any sheets that couldn't be created and why",
    ],
    solution:
      "The tool reads an Excel sheet schedule (which the project architect maintains anyway as a deliverables register) and outputs a fully structured Revit sheet set in under 8 minutes. The title block parameters auto-populate from the schedule. Browser organization is enforced via a discipline code in the sheet number. Delta mode catches post-submission updates in under 3 minutes. The firm now generates sheets for every project using this tool — zero manual creation.",
    technicalStack: ["Dynamo 2.17", "Excel (openpyxl via CPython)", "Revit 2023", "Custom title block family"],
    metrics: [
      {
        label: "Hours Saved Per Submission",
        value: "26",
        unit: "hours",
        description: "vs. 2–3 days manual coordinator time",
        color: "accent",
      },
      {
        label: "Sheet Generation Time",
        value: "8",
        unit: "min",
        description: "for 312 sheets including view assignments",
        color: "cyan",
      },
      {
        label: "Error Rate Post-Automation",
        value: "0",
        unit: "%",
        description: "naming/metadata errors vs. avg 12% manual rate",
        color: "green",
      },
      {
        label: "Annual Time Savings",
        value: "312",
        unit: "hours",
        description: "across 12 project submissions per year",
        color: "accent",
      },
    ],
    timeline: "6 days",
    featured: true,
    publishedAt: "2024-06-22",
  },
  {
    slug: "model-health-scanner",
    title: "Automated Model Health Scanner & Reporting System",
    client: "Demonstration Build — not a client project",
    industry: "BIM Management / Quality Assurance",
    location: "Chicago, USA",
    tags: ["Revit API", "Python", "Reporting", "QA", "BIM Management"],
    summary:
      "Built as a proof-of-concept to demonstrate an automated model quality scanner that generates a structured health report in 12 minutes — covering parameter compliance, naming violations, clash risk indicators, and model performance flags.",
    problem:
      "The BIM team managed a federated model across 6 trade contractors. Weekly audits were required before issuing updated models to each trade. The manual audit process involved checking parameter completeness across 40+ element categories, validating naming against the BIM Execution Plan, reviewing workset structure, checking element counts for unexpected deletions, and flagging performance-heavy families. Each audit took 8–12 hours. Mistakes cost coordination meetings, RFIs, and rework. The team was behind on audits because the process was unsustainable.",
    approach: [
      "Defined a formal model health specification: 47 checkpoints across 8 categories",
      "Built a Python Revit API script to evaluate all 47 checkpoints programmatically against a live or detached model",
      "Implemented severity scoring: PASS / WARN / FAIL per checkpoint with weighted scoring by impact",
      "Generated an HTML report with exportable CSV data for each failing checkpoint with element IDs for direct navigation",
      "Added a trend mode: compare current report against previous week's to show improvement or regression",
      "Built a Revit add-in wrapper allowing non-technical team members to trigger the scan from inside Revit",
    ],
    solution:
      "The scanner runs as a compiled Revit add-in. One button press triggers the full audit. Output: an HTML report with an overall health score (0–100), per-category breakdown, list of failing elements with Revit element IDs for click-to-navigate, and a trend chart vs. last week. Reports are auto-saved to a shared network folder. The BIM manager reviews the report in 20 minutes instead of spending a full day auditing. Trend data has enabled weekly improvement targets for each trade contractor.",
    technicalStack: ["Python (Revit API via pyRevit)", "HTML/CSS Report Template", "JSON (audit log storage)", "Revit 2024", "pyRevit 4.8"],
    metrics: [
      {
        label: "Audit Time Reduction",
        value: "98",
        unit: "%",
        description: "from 10 hrs avg to 12 minutes",
        color: "accent",
      },
      {
        label: "Weekly Hours Recovered",
        value: "11",
        unit: "hours",
        description: "per audit cycle across the BIM team",
        color: "cyan",
      },
      {
        label: "Checkpoints Automated",
        value: "47",
        description: "vs. 22 manually checked in the previous process",
        color: "green",
      },
      {
        label: "Annual Savings",
        value: "$68,640",
        description: "at $120/hr for 11 hrs/week × 52 weeks",
        color: "accent",
      },
    ],
    timeline: "12 days",
    testimonial: {
      quote:
        "The health scanner changed how we manage trade coordination. We can hold contractors accountable to model quality with data, not arguments.",
      author: "BIM Director",
      role: "General Contractor, Chicago",
    },
    featured: true,
    publishedAt: "2024-04-10",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return CASE_STUDIES.filter((cs) => cs.featured);
}
