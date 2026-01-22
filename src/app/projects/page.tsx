import { fetchGitHubRepos } from "@/lib/github";
import { ProjectCard } from "@/components/ProjectCard";

export default async function ProjectsPage() {
  const repos = await fetchGitHubRepos("NC1107");

  return (
    <div className="p-8 md:p-12 min-h-screen">
      <h1 className="text-[2.5rem] text-bone mb-8 text-center drop-shadow-lg">
        Projects
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 max-w-6xl mx-auto">
        {repos.map((repo, index) => (
          <ProjectCard
            key={repo.id}
            name={repo.name}
            description={repo.description}
            html_url={repo.html_url}
            language={repo.language}
            stargazers_count={repo.stargazers_count}
            forks_count={repo.forks_count}
            topics={repo.topics}
            updated_at={repo.updated_at}
            homepage={repo.homepage}
            archived={repo.archived}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
