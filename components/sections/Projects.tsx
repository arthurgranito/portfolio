import { getGitHubRepos } from '@/lib/github'
import { ProjectsClient } from './ProjectsClient'

export async function Projects() {
  const repos = await getGitHubRepos()
  return <ProjectsClient repos={repos} />
}
