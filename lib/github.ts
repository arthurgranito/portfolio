import { GitHubRepo } from '@/types/github'

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      'https://api.github.com/users/arthurgranito/repos?sort=updated&per_page=12',
      {
        next: { revalidate: 3600 },
        headers: { Accept: 'application/vnd.github+json' },
      }
    )
    if (!res.ok) return []
    const repos: GitHubRepo[] = await res.json()
    return repos
      .filter((r) => !r.fork && r.visibility === 'public')
      .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
      .slice(0, 9)
  } catch {
    return []
  }
}

export function getLanguageColor(language: string | null): string {
  const colors: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Java: '#b07219',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Vue: '#41b883',
    Go: '#00ADD8',
    Rust: '#dea584',
    Shell: '#89e051',
    Dockerfile: '#384d54',
    SCSS: '#c6538c',
  }
  return language ? (colors[language] ?? '#8b8b8b') : '#8b8b8b'
}
