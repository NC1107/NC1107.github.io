import { languageColors, DEFAULT_LANGUAGE_COLOR } from "@/lib/languages";

interface FeaturedCardProps {
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly language?: string;
  readonly tag?: string;
  readonly live?: boolean;
  readonly index: number;
}

export function FeaturedCard({
  name,
  description,
  url,
  language,
  tag,
  live,
  index,
}: FeaturedCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex min-h-[210px] flex-col overflow-hidden rounded-2xl bg-bone p-5
                 shadow-lg ring-1 ring-olive/40 transition-all duration-200
                 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-olive
                 focus:outline-none focus:ring-2 focus:ring-olive animate-fade-in-up"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* accent bar */}
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-olive via-battleship-gray to-olive" />

      {/* star */}
      <svg
        className="absolute right-4 top-4 h-4 w-4 text-olive"
        fill="currentColor"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z" />
      </svg>

      <div className="mb-2 flex items-center gap-2 pr-6">
        <h3 className="text-[1.25rem] font-bold leading-tight text-charcoal-2 transition-colors group-hover:text-olive">
          {name}
        </h3>
        {tag && (
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] ${
              live ? "bg-olive text-bone" : "bg-olive/20 text-charcoal-2"
            }`}
          >
            {tag}
          </span>
        )}
      </div>

      <p className="mb-4 flex-grow text-[0.95rem] text-charcoal">{description}</p>

      <div className="mt-auto flex items-center justify-between border-t border-davys-gray/30 pt-3 text-sm text-davys-gray">
        {language ? (
          <span className="flex items-center gap-1.5">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: languageColors[language] || DEFAULT_LANGUAGE_COLOR }}
            />
            {language}
          </span>
        ) : (
          <span />
        )}
        <span className="flex items-center gap-1 text-olive transition-colors group-hover:text-charcoal-2">
          {live ? "Visit" : "View"}
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
