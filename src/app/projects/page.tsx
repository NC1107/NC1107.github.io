import { fetchGitHubRepos } from "@/lib/github";
import { ProjectCard } from "@/components/ProjectCard";

export default async function ProjectsPage() {
  const repos = await fetchGitHubRepos("NC1107");

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 p-12 min-h-screen">
      {repos.map((repo) => (
        <ProjectCard
          key={repo.id}
          name={repo.name}
          description={repo.description}
          html_url={repo.html_url}
          language={repo.language}
        />
      ))}
    </div>
  );
}
