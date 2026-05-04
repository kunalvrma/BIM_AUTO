import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bimautomation.consulting"),
  title: {
    default: "BIM Automation Consulting | Revit & Dynamo Workflow Engineers",
    template: "%s | BIM Automation Consulting",
  },
  description:
    "We automate BIM workflows for MEP and architecture firms. Custom Dynamo scripts, Revit automation, and workflow optimization that saves 20–60 hours per project.",
  keywords: [
    "BIM automation", "Revit automation", "Dynamo scripts",
    "MEP BIM consulting", "parametric design", "Revit API",
    "BIM workflow optimization", "HVAC BIM modeling", "architecture automation",
  ],
  authors: [{ name: "Kunal Verma", url: "https://bimautomation.consulting" }],
  creator: "Kunal Verma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bimautomation.consulting",
    siteName: "BIM Automation Consulting",
    title: "BIM Automation Consulting | Save 20–60 Hours Per Project",
    description: "Custom Revit automation and Dynamo scripts for MEP and architecture engineering firms.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BIM Automation Consulting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BIM Automation Consulting",
    description: "Custom Revit automation for MEP and architecture firms.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "BIM Automation Consulting",
              description: "Custom Revit automation and Dynamo workflow engineering for MEP and architecture firms.",
              url: "https://bimautomation.consulting",
              serviceType: "BIM Consulting",
              areaServed: ["US", "UK", "EU"],
              knowsAbout: ["Revit API", "Dynamo BIM", "BIM Automation", "MEP Engineering", "Parametric Design"],
            }),
          }}
        />
      </head>
      <body className="bg-void text-ink antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
