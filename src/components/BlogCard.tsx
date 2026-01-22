import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export function BlogCard({ slug, title, date, description }: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="block bg-bone border border-davys-gray rounded-2xl shadow-md p-5
                 min-h-[200px] flex flex-col
                 transition-transform hover:scale-[1.02] hover:shadow-lg"
    >
      <span className="text-sm text-davys-gray">{formattedDate}</span>
      <h2 className="text-[1.4rem] text-charcoal-2 my-2 font-bold">{title}</h2>
      <p className="text-[1rem] text-charcoal mt-1">{description}</p>
    </Link>
  );
}
