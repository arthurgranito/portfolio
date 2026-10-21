export interface Project {
  id: 'seedash' | 'devtoclient'
  name: string
  homepage: string
  repos: { label: string; url: string }[]
  stack: string[]
}

export const projects: Project[] = [
  {
    id: 'seedash',
    name: 'Seedash',
    homepage: 'https://seedash.com.br',
    repos: [{ label: 'GitHub', url: 'https://github.com/andrelzgiroto/hackathon-2026' }],
    stack: ['Python', 'FastAPI', 'LangGraph', 'Claude / OpenAI', 'PostgreSQL / Supabase', 'Next.js', 'TypeScript', 'Docker'],
  },
  {
    id: 'devtoclient',
    name: 'devToClient',
    homepage: 'https://devtoclient.com',
    repos: [
      { label: 'Backend', url: 'https://github.com/arthurgranito/devtoclient-backend' },
      { label: 'Frontend', url: 'https://github.com/arthurgranito/devtoclient-frontend' },
    ],
    stack: ['Java 21', 'Spring Boot', 'Spring Security', 'JWT', 'React', 'TypeScript', 'MongoDB', 'Docker', 'AWS'],
  },
]
