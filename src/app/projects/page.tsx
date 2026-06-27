import { fetchGitHubRepos } from "@/lib/github";
import { ProjectCard } from "@/components/ProjectCard";
import { FeaturedCard } from "@/components/FeaturedCard";
import { featuredProjects } from "@/lib/featured";

export default async function ProjectsPage() {
  const repos = await fetchGitHubRepos("NC1107");

  const featuredRepoNames = new Set(
    featuredProjects.map((p) => p.repoName).filter(Boolean) as string[]
  );
  const rest = repos.filter((repo) => !featuredRepoNames.has(repo.name));

  return (
    <div className="p-8 md:p-12 min-h-screen">
      <h1 className="text-[2.5rem] text-bone mb-10 text-center drop-shadow-lg">
        Projects
      </h1>

      {/* Featured */}
      <section className="max-w-6xl mx-auto mb-14">
        <h2 className="flex items-center gap-2 mb-4 text-bone/90 text-sm uppercase tracking-[0.2em] drop-shadow">
          <span className="text-olive" aria-hidden="true">★</span> Featured
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          {featuredProjects.map((p, index) => (
            <FeaturedCard
              key={p.name}
              name={p.name}
              description={p.description}
              url={p.url}
              language={p.language}
              tag={p.tag}
              live={p.live}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* All projects */}
      <section className="max-w-6xl mx-auto">
        <h2 className="mb-4 text-bone/90 text-sm uppercase tracking-[0.2em] drop-shadow">
          All Projects
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          {rest.map((repo, index) => (
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
      </section>
    </div>
  );
}
