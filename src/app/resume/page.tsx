import Link from "next/link";
import { TimelineItem } from "@/components/TimelineItem";
import { SkillBadge } from "@/components/SkillBadge";

// Simple SVG icons (no emojis)
function GraduationIcon() {
  return (
    <svg className="w-6 h-6 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="w-6 h-6 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="w-6 h-6 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg className="w-6 h-6 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

const experiences = [
  {
    company: "Accenture Federal Services",
    title: "Software Developer",
    date: "Present",
    items: [
      "Lead migrations of legacy systems and contact center platforms (Cisco to AWS)",
      "Build infrastructure-as-code solutions with Terraform, Python, and Shell",
      "Modernize systems to improve scalability, reliability, and maintainability",
    ],
  },
  {
    company: "M&T Bank",
    title: "Technology Intern",
    date: "May 2023 - Aug 2023",
    items: [
      "Built tooling to reduce complexity in Informatica data pathways and transformations",
      "Contributed to enterprise software development within cross-functional teams",
    ],
  },
  {
    company: "Crestron Electronics",
    title: "AV Technician",
    date: "May 2019 - Aug 2019",
    items: [
      "Configured and deployed servers for ~10 customer locations",
      "Performed recurring quality assurance testing of AV systems",
    ],
  },
  {
    company: "St. Charles Hackathon",
    title: "Lead Organizer",
    date: "Jun 2018 - Nov 2018",
    items: [
      "Managed communications between staff, donors, and volunteers",
      "Raised $10,000 to host a community hackathon for ~500 students",
    ],
  },
];

const skills = {
  languages: ["Java", "Python", "C++", "Rust", "TypeScript", "HTML/CSS", "Arduino"],
  tools: ["Git", "Terraform", "Docker", "Shell", "Unity", "Unreal Engine", "Blender"],
  cloud: ["AWS", "Google Cloud"],
  focus: ["Systems/Infrastructure", "Self-hosting", "Web Development", "AI/ML", "Graphics Programming"],
};

export default function ResumePage() {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Education */}
        <section className="bg-bone/90 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <GraduationIcon />
            <h2 className="text-2xl text-charcoal-2 font-bold">Education</h2>
          </div>

          <div className="border-l-2 border-olive/30 pl-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h3 className="text-xl text-charcoal-2 font-bold">
                University of Maryland, Baltimore County
              </h3>
              <span className="text-sm text-davys-gray">Jan 2021 - Jan 2024</span>
            </div>
            <p className="text-lg text-charcoal mb-2">
              B.S. in Computer Science, AI/ML Specialization
            </p>
            <p className="text-charcoal">GPA: 3.5/4.0</p>
            <p className="text-sm text-davys-gray mt-3">
              Coursework: Data Structures & Algorithms, Object-Oriented Programming, Embedded Systems, Computer Architecture
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="bg-bone/90 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <BriefcaseIcon />
            <h2 className="text-2xl text-charcoal-2 font-bold">Experience</h2>
          </div>

          <div>
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.company}
                company={exp.company}
                title={exp.title}
                date={exp.date}
                items={exp.items}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="bg-bone/90 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <CodeIcon />
            <h2 className="text-2xl text-charcoal-2 font-bold">Projects</h2>
          </div>

          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-2 text-charcoal">
              <span className="text-olive mt-1">&#9632;</span>
              Homelab and self-hosted services (reverse proxy, monitoring, IaC, backups)
            </li>
            <li className="flex items-start gap-2 text-charcoal">
              <span className="text-olive mt-1">&#9632;</span>
              Rust graphics and systems programming experiments
            </li>
            <li className="flex items-start gap-2 text-charcoal">
              <span className="text-olive mt-1">&#9632;</span>
              Web and CLI tools for workflow automation
            </li>
          </ul>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-olive hover:text-charcoal-2 transition-colors"
          >
            View all projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>

        {/* Skills */}
        <section className="bg-bone/90 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <ToolsIcon />
            <h2 className="text-2xl text-charcoal-2 font-bold">Skills</h2>
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="text-sm text-davys-gray uppercase tracking-wide mb-2">Languages</h3>
              <div>
                {skills.languages.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm text-davys-gray uppercase tracking-wide mb-2">Tools</h3>
              <div>
                {skills.tools.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm text-davys-gray uppercase tracking-wide mb-2">Cloud</h3>
              <div>
                {skills.cloud.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm text-davys-gray uppercase tracking-wide mb-2">Focus Areas</h3>
              <div>
                {skills.focus.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-davys-gray/20">
              <span className="text-sm text-davys-gray">Certifications: </span>
              <span className="text-charcoal">CompTIA A+</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
