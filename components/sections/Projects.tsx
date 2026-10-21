'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { ProjectCard } from '@/components/shared/ProjectCard'
import { useLanguage } from '@/context/LanguageContext'
import { projects } from '@/lib/projects'

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-[clamp(80px,12vw,160px)] bg-muted/20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-4 mb-16">
          <SectionTitle label={t.projects.subtitle} title={t.projects.title} className="mb-0" />
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://github.com/arthurgranito"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0 mb-1"
          >
            <Github size={14} />
            GitHub
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
