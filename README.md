# BIM Automation Consulting — Website

A production-ready client acquisition system built with Next.js 14, Tailwind CSS, and TypeScript.
Designed for BIM automation consultants targeting MEP and architecture engineering firms.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Email | Resend API |
| Fonts | Syne + DM Sans + JetBrains Mono (Google Fonts) |
| Animations | Framer Motion + CSS |
| Deployment | Vercel |

---

## Project Structure

```
bim-consultant/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (nav, footer, fonts, SEO)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles + Tailwind
│   ├── sitemap.ts                # Auto-generated sitemap
│   ├── robots.ts                 # Robots.txt
│   ├── not-found.tsx             # 404 page
│   ├── api/
│   │   └── contact/route.ts      # Contact form → Resend email API
│   ├── services/page.tsx         # Services page
│   ├── case-studies/
│   │   ├── page.tsx              # Case studies listing
│   │   └── [slug]/page.tsx       # Individual case study
│   ├── automation-library/
│   │   └── page.tsx              # Tool catalog with category filter
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Individual blog post (Markdown)
│   └── contact/page.tsx          # Contact form page
│
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx        # Sticky nav with mobile menu
│   │   └── Footer.tsx            # Footer with links
│   └── sections/                 # Homepage sections (all modular)
│       ├── HeroSection.tsx
│       ├── ProblemSection.tsx
│       ├── MetricsSection.tsx
│       ├── SolutionsSection.tsx
│       ├── CaseStudyPreview.tsx
│       ├── ProcessSection.tsx
│       └── CTASection.tsx
│
├── content/                      # ← ALL EDITABLE CONTENT LIVES HERE
│   ├── case-studies/data.ts      # Case study data (TypeScript objects)
│   ├── tools/data.ts             # Automation library tool data
│   └── blog/                     # Markdown blog posts
│       ├── revit-automation-roi-framework.md
│       ├── 5-dynamo-scripts-mep-firms.md
│       └── bim-standard-automation-enforcement.md
│
├── lib/
│   └── blog.ts                   # Markdown file reader utilities
│
├── public/                       # Static assets
│   ├── favicon.ico
│   └── og-image.png              # OpenGraph image (create: 1200×630px)
│
├── .env.example                  # Environment variable template
├── vercel.json                   # Vercel deployment config
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Quick Start (Local Development)

### 1. Clone and install

```bash
git clone <your-repo-url>
cd bim-consultant
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in:

```env
RESEND_API_KEY=re_your_key_here
CONTACT_EMAIL=your@email.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

> **Note:** The site works without a Resend key — the contact form will submit successfully but won't send emails. Add the key before going live.

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Add environment variables on Vercel

1. Go to your project on [vercel.com](https://vercel.com)
2. Settings → Environment Variables
3. Add:
   - `RESEND_API_KEY` → your Resend API key
   - `CONTACT_EMAIL` → where contact forms are sent
   - `NEXT_PUBLIC_SITE_URL` → your domain

---

## Email Setup (Resend)

1. Create a free account at [resend.com](https://resend.com) (3,000 free emails/month)
2. Add and verify your domain (or use `onboarding@resend.dev` for testing)
3. Generate an API key under API Keys
4. Add key to `.env.local` as `RESEND_API_KEY`

The contact form sends:
- **Notification email** to you (with enquiry details + reply button)
- **Auto-reply** to the enquirer (professional confirmation)

---

## Content Management — No Code Required

All content is managed through data files. **No changes to page code needed.**

---

### Adding a Blog Post

1. Create a new `.md` file in `content/blog/`
2. Use this frontmatter format:

```markdown
---
title: "Your Article Title Here"
excerpt: "One or two sentences describing the article for the listing page."
date: "2024-10-01"
readTime: "6 min"
tags: ["Revit Automation", "Dynamo", "BIM Strategy"]
author: "Your Name"
---

Your article content here. Supports full Markdown including:
- Headings (##, ###)
- Code blocks (with syntax hints)
- Tables
- Bold/italic
- Links
- Blockquotes

Internal links work too: [Contact us](/contact)
```

3. The blog listing page and sitemap update automatically.

---

### Adding a Case Study

1. Open `content/case-studies/data.ts`
2. Add a new object to the `CASE_STUDIES` array:

```typescript
{
  slug: "your-project-slug",           // URL: /case-studies/your-project-slug
  title: "Project Title",
  client: "Client Description (anonymous ok)",
  industry: "MEP / HVAC",
  location: "City, Country",
  tags: ["Dynamo", "Python", "Revit API"],
  summary: "One paragraph overview for the listing page.",
  problem: "Full description of the problem.",
  approach: [
    "Step 1: what you mapped/analysed",
    "Step 2: what you built",
    "Step 3: how you tested",
    // Add as many steps as needed
  ],
  solution: "Full description of what was delivered and how it works.",
  technicalStack: ["Dynamo 2.16", "Python 3.8", "Revit 2023"],
  metrics: [
    {
      label: "Hours Saved",
      value: "47",
      unit: "hours",
      description: "vs. 3-week manual estimate",
      color: "accent",           // "accent" | "cyan" | "green"
    },
    // Add up to 4 metrics
  ],
  timeline: "8 days",
  testimonial: {                 // Optional — remove if not available
    quote: "What the client said.",
    author: "Job Title",
    role: "Company, Location",
  },
  featured: true,                // Shows on homepage preview
  publishedAt: "2024-10-01",
}
```

3. The listing page, detail page, and sitemap all update automatically.

---

### Adding an Automation Tool

1. Open `content/tools/data.ts`
2. Add a new object to the `TOOLS` array:

```typescript
{
  id: "tool-id",                            // Unique kebab-case ID
  name: "Tool Display Name",
  tagline: "One-line description of what it does.",
  description: "Full description of the tool and what problem it solves.",
  category: "Annotation & Tagging",         // Must match a value in TOOL_CATEGORIES
  tags: ["Dynamo", "Python"],
  status: "available",                      // "available" | "beta" | "coming-soon"
  complexity: "intermediate",               // "beginner" | "intermediate" | "advanced"
  timeSaved: "3–6 hrs per project",
  requirements: ["Revit 2021+", "Dynamo 2.10+"],
  features: [
    "Feature one",
    "Feature two",
    "Feature three",
  ],
  demoAvailable: false,
  downloadUrl: "/downloads/tool-name.dyn",  // Optional
  documentationUrl: "/docs/tool-name",      // Optional
}
```

3. To add a new category, also add it to the `TOOL_CATEGORIES` array at the top of the file.

---

## SEO Configuration

Update the following in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),  // ← Your domain
  title: { ... },
  description: "...",                                // ← Your description
  authors: [{ name: "Your Name", ... }],
  creator: "Your Name",
  openGraph: {
    url: "https://yourdomain.com",                   // ← Your domain
    ...
  },
};
```

Also update the JSON-LD structured data in the same file for accurate schema markup.

---

## Customising the Design

### Colors

Edit `tailwind.config.ts` to change the colour system:

```typescript
colors: {
  void: "#080810",      // Page background
  surface: "#0E0E1A",   // Card/section background
  accent: {
    DEFAULT: "#F97316", // ← Change this to your brand colour (orange)
    dim: "#C2570F",
  },
  cyan: {
    DEFAULT: "#06B6D4", // ← Secondary accent colour
  },
  ink: {
    DEFAULT: "#E2E8F0", // Primary text
    muted: "#94A3B8",   // Secondary text
    faint: "#475569",   // Tertiary text
  },
}
```

### Fonts

Change the Google Fonts imports in `app/layout.tsx`. Three font roles:
- `--font-syne` → headings (display)
- `--font-dm-sans` → body text
- `--font-jetbrains` → code/mono

---

## Performance Checklist (Pre-launch)

- [ ] Add `public/favicon.ico`
- [ ] Create `public/og-image.png` (1200×630px)
- [ ] Set real domain in `metadata.metadataBase` (`app/layout.tsx`)
- [ ] Update `sitemap.ts` base URL
- [ ] Set `RESEND_API_KEY` in Vercel environment variables
- [ ] Set `CONTACT_EMAIL` in Vercel environment variables
- [ ] Update JSON-LD structured data with real info
- [ ] Test contact form submission end-to-end
- [ ] Verify sitemap at `/sitemap.xml`
- [ ] Verify robots.txt at `/robots.txt`
- [ ] Run Lighthouse audit (target: 95+ performance)

---

## Local Build Test

Before deploying, test the production build locally:

```bash
npm run build
npm run start
```

This catches TypeScript errors and missing static params that the dev server hides.

---

## Adding Google Analytics (Optional)

1. Get your GA4 Measurement ID (`G-XXXXXXXXXX`)
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Add the script to `app/layout.tsx`:
   ```tsx
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
     strategy="afterInteractive"
   />
   ```

Or use `@vercel/analytics` (already installed) — it works automatically on Vercel with zero config.

---

## Support

All questions about this codebase: [hello@bimautomation.consulting](mailto:hello@bimautomation.consulting)
