interface ProjectCardProps {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
}

export function ProjectCard({ name, description, html_url, language }: ProjectCardProps) {
  return (
    <a
      href={html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-bone border border-davys-gray rounded-2xl shadow-md p-5
                 min-h-[300px] flex flex-col justify-between
                 transition-transform hover:scale-[1.02] hover:shadow-lg"
    >
      <div>
        <h2 className="text-[1.2rem] text-charcoal-2 my-2.5 font-bold">{name}</h2>
        <p className="text-[1rem] text-charcoal my-2.5">
          {description || "No description available"}
        </p>
      </div>
      {language && (
        <span className="text-sm text-davys-gray mt-auto">{language}</span>
      )}
    </a>
  );
}
