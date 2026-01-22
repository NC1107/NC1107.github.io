import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

interface NotePostPageProps {
  params: Promise<{ slug: string }>;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: NotePostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Nicholas Conn`,
    description: post.description,
  };
}

export default async function NotePostPage({ params }: NotePostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const readingTime = calculateReadingTime(post.content);

  return (
    <div className="min-h-screen p-6 md:p-12">
      <article className="max-w-3xl mx-auto bg-bone/90 rounded-2xl p-6 md:p-10">
        <Link
          href="/notes"
          className="inline-flex items-center gap-1 text-olive hover:text-charcoal-2 transition-colors mb-6"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Notes
        </Link>

        <header className="mb-8 pb-6 border-b border-davys-gray/30">
          <h1 className="text-3xl md:text-4xl text-charcoal-2 font-bold mb-3">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-davys-gray">
            <time>{formattedDate}</time>
            <span>-</span>
            <span>{readingTime} min read</span>
          </div>
        </header>

        <div className="prose">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
