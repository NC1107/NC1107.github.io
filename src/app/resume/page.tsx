export default function ResumePage() {
  return (
    <div className="bg-bone/70">
      <section className="mb-6">
        <h2 className="text-[30px] text-charcoal-2 pt-5 pb-5">Education</h2>
        <p className="text-[20px] text-charcoal-2 py-1">
          <strong>University of Maryland, Baltimore County (UMBC)</strong> | Jan 2021 – Jan 2024
        </p>
        <p className="text-[20px] text-charcoal-2 py-1 pl-5">
          B.S. in Computer Science, AI/ML Specialization | GPA: 3.5/4.0
        </p>
        <p className="text-[20px] text-charcoal-2 py-1 pl-5">
          Coursework: Data Structures &amp; Algorithms, Object-Oriented Programming, Embedded Systems, Computer Architecture
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-[30px] text-charcoal-2 pt-5 pb-5">Experience</h2>

        <div className="mb-4">
          <p className="text-[20px] text-charcoal-2 py-1">
            <strong>Accenture Federal Services</strong> — Software Developer | Present
          </p>
          <ul className="text-[20px] text-charcoal-2 pl-5">
            <li>• Lead migrations of legacy systems and contact center platforms (Cisco to AWS)</li>
            <li>• Build infrastructure-as-code solutions with Terraform, Python, and Shell</li>
            <li>• Modernize systems to improve scalability, reliability, and maintainability</li>
          </ul>
        </div>

        <div className="mb-4">
          <p className="text-[20px] text-charcoal-2 py-1">
            <strong>M&amp;T Bank</strong> — Technology Intern | May 2023 – Aug 2023
          </p>
          <ul className="text-[20px] text-charcoal-2 pl-5">
            <li>• Built tooling to reduce complexity in Informatica data pathways and transformations</li>
            <li>• Contributed to enterprise software development within cross-functional teams</li>
          </ul>
        </div>

        <div className="mb-4">
          <p className="text-[20px] text-charcoal-2 py-1">
            <strong>Crestron Electronics</strong> — AV Technician | May 2019 – Aug 2019
          </p>
          <ul className="text-[20px] text-charcoal-2 pl-5">
            <li>• Configured and deployed servers for ~10 customer locations</li>
            <li>• Performed recurring quality assurance testing of AV systems</li>
          </ul>
        </div>

        <div className="mb-4">
          <p className="text-[20px] text-charcoal-2 py-1">
            <strong>St. Charles Hackathon</strong> — Lead Organizer | Jun 2018 – Nov 2018
          </p>
          <ul className="text-[20px] text-charcoal-2 pl-5">
            <li>• Managed communications between staff, donors, and volunteers</li>
            <li>• Raised $10,000 to host a community hackathon for ~500 students</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-[30px] text-charcoal-2 pt-5 pb-5">Projects</h2>
        <p className="text-[20px] text-charcoal-2 py-1 pl-5">
          • Homelab and self-hosted services (reverse proxy, monitoring, IaC, backups)
        </p>
        <p className="text-[20px] text-charcoal-2 py-1 pl-5">
          • Rust graphics and systems programming experiments
        </p>
        <p className="text-[20px] text-charcoal-2 py-1 pl-5">
          • Web and CLI tools for workflow automation
        </p>
        <p className="text-[20px] text-charcoal-2 py-1 pl-5">
          View more on the{" "}
          <a href="/projects" className="text-charcoal-2 underline hover:text-olive">
            projects page
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-[30px] text-charcoal-2 pt-5 pb-5">Skills</h2>
        <p className="text-[20px] text-charcoal-2 py-1 pl-5">
          <strong>Languages:</strong> Java, Python, C++, Rust, HTML/CSS, Arduino
        </p>
        <p className="text-[20px] text-charcoal-2 py-1 pl-5">
          <strong>Tools:</strong> Git, Terraform, Shell scripting, Unity, Unreal Engine, Blender
        </p>
        <p className="text-[20px] text-charcoal-2 py-1 pl-5">
          <strong>Cloud:</strong> AWS, Google Cloud
        </p>
        <p className="text-[20px] text-charcoal-2 py-1 pl-5">
          <strong>Focus Areas:</strong> Systems/Infrastructure, Self-hosting, Web Development, AI/ML, Graphics Programming
        </p>
        <p className="text-[20px] text-charcoal-2 py-1 pl-5">
          <strong>Certifications:</strong> CompTIA A+
        </p>
      </section>
    </div>
  );
}
