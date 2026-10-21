'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Project } from '@/lib/projects'
import { useLanguage } from '@/context/LanguageContext'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useLanguage()
  const content = t.projects.items[project.id]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col bg-card border border-border rounded-sm p-6 md:p-8 hover:border-foreground/30 hover:shadow-lg dark:hover:shadow-foreground/5 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-1">
        <h3
          className="text-2xl font-light leading-tight"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          {project.name}
        </h3>
        <a
          href={project.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 mt-1.5"
          style={{ fontFamily: 'var(--font-jetbrains)' }}
          aria-label={t.projects.view_demo}
        >
          {project.homepage.replace(/^https?:\/\//, '')}
          <ExternalLink size={12} />
        </a>
      </div>
      <p className="text-sm text-foreground/80 mb-4">{content.tagline}</p>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {content.description}
      </p>

      {content.bullets.length > 0 && (
        <ul className="space-y-2 mb-5">
          {content.bullets.map((b, bi) => (
            <li key={bi} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-highlight" />
              {b}
            </li>
          ))}
        </ul>
      )}

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-sm"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
        {project.repos.map((repo) => (
          <a
            key={repo.url}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`${t.projects.view_github} (${repo.label})`}
          >
            <Github size={12} />
            {repo.label}
          </a>
        ))}
      </div>
    </motion.div>
  )
}
