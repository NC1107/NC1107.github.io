interface TimelineItemProps {
  readonly title: string;
  readonly company: string;
  readonly date: string;
  readonly items: string[];
  readonly isLast?: boolean;
}

export function TimelineItem({ title, company, date, items, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-3 bottom-0 w-0.5 bg-davys-gray/40" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-olive border-4 border-bone" />

      {/* Content */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <h3 className="text-xl text-charcoal-2 font-bold">{company}</h3>
          <span className="text-sm text-davys-gray">{date}</span>
        </div>
        <p className="text-lg text-charcoal-2 mb-3">{title}</p>
        <ul className="space-y-1.5">
          {items.map((item, index) => (
            <li key={index} className="text-charcoal flex items-start gap-2">
              <span className="text-olive mt-1.5 text-xs">&#9632;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
