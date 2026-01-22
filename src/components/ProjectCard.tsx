"use client";

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Rust: "#dea584",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Go: "#00ADD8",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Dockerfile: "#384d54",
  Makefile: "#427819",
};

interface ProjectCardProps {
  readonly name: string;
  readonly description: string | null;
  readonly html_url: string;
  readonly language: string | null;
  readonly stargazers_count: number;
  readonly forks_count: number;
  readonly topics: readonly string[];
  readonly updated_at: string;
  readonly homepage: string | null;
  readonly archived: boolean;
  readonly index: number;
}

function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Updated today";
  if (diffDays === 1) return "Updated yesterday";
  if (diffDays < 7) return `Updated ${diffDays} days ago`;
  if (diffDays < 30) return `Updated ${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `Updated ${Math.floor(diffDays / 30)} months ago`;
  return `Updated ${Math.floor(diffDays / 365)} years ago`;
}

export function ProjectCard({
  name,
  description,
  html_url,
  language,
  stargazers_count,
  forks_count,
  topics,
  updated_at,
  homepage,
  archived,
  index,
}: ProjectCardProps) {
  const languageColor = language ? languageColors[language] || "#858585" : null;

  const handleCardClick = () => {
    window.open(html_url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleCardClick}
      className={`block bg-bone border border-davys-gray rounded-2xl shadow-md p-4
                 min-h-[280px] flex flex-col cursor-pointer text-left
                 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg
                 animate-fade-in-up focus:outline-none focus:ring-2 focus:ring-olive
                 ${archived ? "opacity-70" : ""}`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <h2 className="text-[1.1rem] text-charcoal-2 font-bold leading-tight">
          {name}
        </h2>
        {archived && (
          <span className="text-xs bg-davys-gray/20 text-davys-gray px-2 py-0.5 rounded shrink-0">
            Archived
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-[0.95rem] text-charcoal mb-3 flex-grow line-clamp-3">
        {description || "No description available"}
      </p>

      {/* Topics */}
      {topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="text-xs bg-olive/20 text-charcoal-2 px-2 py-0.5 rounded-full"
            >
              {topic}
            </span>
          ))}
          {topics.length > 4 && (
            <span className="text-xs text-davys-gray">+{topics.length - 4}</span>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="mt-auto pt-3 border-t border-davys-gray/30">
        <div className="flex items-center justify-between text-sm text-davys-gray">
          {/* Language */}
          <div className="flex items-center gap-4">
            {language && (
              <span className="flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: languageColor || "#858585" }}
                />
                {language}
              </span>
            )}

            {/* Stars */}
            {stargazers_count > 0 && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z" />
                </svg>
                {stargazers_count}
              </span>
            )}

            {/* Forks */}
            {forks_count > 0 && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                </svg>
                {forks_count}
              </span>
            )}
          </div>

          {/* Homepage link */}
          {homepage && (
            <a
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-olive hover:text-charcoal-2 transition-colors"
              title="Live demo"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>

        {/* Updated time */}
        <p className="text-xs text-davys-gray/70 mt-2">
          {getRelativeTime(updated_at)}
        </p>
      </div>
    </button>
  );
}
