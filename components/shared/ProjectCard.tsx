'use client'

import { motion } from 'framer-motion'
import { Star, GitFork, ExternalLink, Github } from 'lucide-react'
import { GitHubRepo } from '@/types/github'
import { getLanguageColor } from '@/lib/github'
import { useLanguage } from '@/context/LanguageContext'

interface ProjectCardProps {
  repo: GitHubRepo
  index: number
}

function formatRepoName(name: string): string {
  return name.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export function ProjectCard({ repo, index }: ProjectCardProps) {
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col bg-card border border-border rounded-sm p-6 hover:border-foreground/30 hover:shadow-lg dark:hover:shadow-foreground/5 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3
          className="text-xl font-light leading-tight"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          {formatRepoName(repo.name)}
        </h3>
        <div className="flex items-center gap-2 flex-shrink-0">
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={t.projects.view_demo}
            >
              <ExternalLink size={14} />
            </a>
          )}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={t.projects.view_github}
          >
            <Github size={14} />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
        {repo.description || '—'}
      </p>

      {/* Topics */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-sm"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
        {repo.language && (
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: getLanguageColor(repo.language) }}
            />
            {repo.language}
          </div>
        )}
        <div className="flex items-center gap-3 ml-auto text-xs text-muted-foreground">
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1">
              <Star size={11} />
              {repo.stargazers_count}
            </span>
          )}
          {repo.forks_count > 0 && (
            <span className="flex items-center gap-1">
              <GitFork size={11} />
              {repo.forks_count}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
