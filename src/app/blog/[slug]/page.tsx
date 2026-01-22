import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
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

  return (
    <div className="min-h-screen p-8 md:p-12">
      <article className="max-w-3xl mx-auto bg-bone/90 rounded-2xl p-8 md:p-12">
        <Link
          href="/blog"
          className="text-olive hover:text-charcoal-2 mb-6 inline-block"
        >
          ← Back to Blog
        </Link>

        <header className="mb-8 border-b border-davys-gray pb-6">
          <h1 className="text-[2.5rem] text-charcoal-2 mb-2">{post.title}</h1>
          <time className="text-davys-gray">{formattedDate}</time>
        </header>

        <div className="prose prose-lg text-charcoal text-[1.1rem] leading-relaxed [&>p]:mb-4 [&>h2]:text-[1.5rem] [&>h2]:text-charcoal-2 [&>h2]:mt-8 [&>h2]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>code]:bg-charcoal/10 [&>code]:px-1 [&>code]:rounded [&>pre]:bg-charcoal [&>pre]:text-bone [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
