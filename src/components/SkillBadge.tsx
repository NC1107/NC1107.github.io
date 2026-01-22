interface SkillBadgeProps {
  readonly skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-block bg-olive/20 text-charcoal-2 px-3 py-1 rounded-full text-sm mr-2 mb-2">
      {skill}
    </span>
  );
}
