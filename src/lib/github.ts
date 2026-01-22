export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  topics: string[];
  updated_at: string;
  homepage: string | null;
  license: { name: string } | null;
  archived: boolean;
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: {
        revalidate: 3600, // Revalidate every hour during dev, but static at build
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch repos: ${response.statusText}`);
  }

  const repos: GitHubRepo[] = await response.json();

  // Filter out forks if you want only original repos
  return repos.filter((repo) => !repo.fork);
}
