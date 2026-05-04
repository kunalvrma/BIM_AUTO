import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { CaseStudyPreview } from "@/components/sections/CaseStudyPreview";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { FounderStrip } from "@/components/sections/FounderStrip";

export const metadata: Metadata = {
  title: "BIM Automation Consulting | Revit & Dynamo Workflow Engineers",
  description:
    "We automate Revit and BIM workflows for MEP and architecture firms. Custom Dynamo scripts and automation systems that save 20–60 hours per project.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <MetricsSection />
      <SolutionsSection />
      <CaseStudyPreview />
      <ProcessSection />
      <FounderStrip />
      <CTASection />
    </>
  );
}
