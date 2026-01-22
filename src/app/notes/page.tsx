import { getAllPosts } from "@/lib/blog";
import { NoteCard } from "@/components/NoteCard";

export default function NotesPage() {
  const posts = getAllPosts();

  if (posts.length === 0) {
    return (
      <div className="min-h-[calc(100vh-60px)] flex items-center justify-center">
        <div className="bg-bone/80 rounded-2xl p-8 text-center">
          <h1 className="text-[2rem] text-charcoal-2 mb-4">Notes</h1>
          <p className="text-[1.2rem] text-charcoal">
            Nothing here yet. Check back soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-12">
      <h1 className="text-[2.5rem] text-bone mb-8 text-center drop-shadow-lg">
        Notes
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 max-w-5xl mx-auto">
        {posts.map((post) => (
          <NoteCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date}
            description={post.description}
            readingTime={post.readingTime}
          />
        ))}
      </div>
    </div>
  );
}
