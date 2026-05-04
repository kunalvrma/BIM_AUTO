import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles on Revit automation, BIM efficiency, Dynamo scripting, and workflow engineering for MEP and architecture firms.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="section-pad bg-surface border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="container-wide relative z-10">
          <span className="label-mono">Blog</span>
          <h1 className="heading-xl text-ink mt-4 max-w-3xl">
            Technical writing on{" "}
            <span className="text-ink-muted">BIM automation</span>
          </h1>
          <p className="text-ink-muted mt-6 text-lg max-w-xl leading-relaxed">
            Deep dives into Revit automation, Dynamo scripting, workflow
            engineering, and the business case for BIM efficiency.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="container-wide py-20">
        {posts.length === 0 ? (
          <div className="text-center py-20 text-ink-muted">
            <p>No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Featured post */}
            {posts[0] && (
              <Link
                href={`/blog/${posts[0].slug}`}
                className="lg:col-span-3 group card-base card-hover relative overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      {posts[0].tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                      <span className="font-mono text-xs text-ink-faint">
                        {new Date(posts[0].date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="font-display font-700 text-2xl text-ink group-hover:text-accent transition-colors">
                      {posts[0].title}
                    </h2>
                    <p className="text-ink-muted leading-relaxed max-w-2xl">
                      {posts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-1.5 text-ink-faint text-xs font-mono">
                        <Clock className="w-3.5 h-3.5" />
                        {posts[0].readTime} read
                      </div>
                      <span className="btn-ghost text-sm text-accent">
                        Read article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Other posts */}
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group card-base card-hover flex flex-col"
              >
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="tag text-xs">{tag}</span>
                  ))}
                </div>

                <h2 className="font-display font-700 text-lg text-ink mb-3 group-hover:text-accent transition-colors flex-1">
                  {post.title}
                </h2>

                <p className="text-ink-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-ink-faint text-xs font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime} read
                  </div>
                  <span className="font-mono text-xs text-ink-faint">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
