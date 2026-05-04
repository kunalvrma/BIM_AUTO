import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/lib/blog";
import { ArrowLeft, Clock } from "lucide-react";
import { remark } from "remark";
import remarkHtml from "remark-html";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const contentHtml = post.content ? await markdownToHtml(post.content) : "";

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 2);

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-surface border-b border-border py-14">
        <div className="container-tight">
          <Link href="/blog" className="btn-ghost text-sm mb-8 inline-flex">
            <ArrowLeft className="w-4 h-4" />
            All Articles
          </Link>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <h1 className="heading-lg text-ink">{post.title}</h1>
            <p className="text-ink-muted text-lg leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 font-mono text-xs text-ink-faint">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime} read
              </div>
              <span className="font-mono text-xs text-ink-faint">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric", month: "long", day: "numeric",
                })}
              </span>
              <span className="font-mono text-xs text-ink-faint">by {post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article content */}
      <div className="container-tight py-16">
        <div
          className="bim-prose"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="font-display font-700 text-ink mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group card-base card-hover"
                >
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {related.tags.slice(0, 1).map((tag) => (
                      <span key={tag} className="tag text-xs">{tag}</span>
                    ))}
                  </div>
                  <h4 className="font-display font-600 text-ink text-sm group-hover:text-accent transition-colors">
                    {related.title}
                  </h4>
                  <p className="text-ink-faint text-xs mt-2 line-clamp-2">{related.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 p-8 border border-accent/20 bg-accent/5 rounded-xl text-center">
          <h3 className="font-display font-700 text-ink text-xl mb-2">
            Want this applied to your workflows?
          </h3>
          <p className="text-ink-muted text-sm mb-5">
            We run free automation audits that apply exactly this kind of analysis to your specific firm.
          </p>
          <Link href="/contact" className="btn-primary">Book Free Audit</Link>
        </div>
      </div>
    </div>
  );
}
