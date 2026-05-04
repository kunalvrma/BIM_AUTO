import { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/content/case-studies/data";
import { getAllPostSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bimautomation.consulting";

  const staticPages = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/services`, priority: 0.9 },
    { url: `${baseUrl}/case-studies`, priority: 0.9 },
    { url: `${baseUrl}/automation-library`, priority: 0.8 },
    { url: `${baseUrl}/blog`, priority: 0.8 },
    { url: `${baseUrl}/contact`, priority: 0.9 },
  ].map((page) => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
  }));

  const caseStudyPages = CASE_STUDIES.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date(cs.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = getAllPostSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...caseStudyPages, ...blogPages];
}
