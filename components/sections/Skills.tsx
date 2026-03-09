'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { useLanguage } from '@/context/LanguageContext'

const skillCategories = [
  {
    title: 'Backend',
    skills: ['Java 8/11/17+', 'Spring Boot', 'Maven', 'Hibernate', 'JUnit', 'Mockito', 'RabbitMQ', 'Kafka'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'TailwindCSS', 'Bootstrap', 'Shadcn-ui', 'Styled Components', 'React Native'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Docker', 'Terraform', 'Jenkins', 'GitHub Actions', 'AWS', 'ECS', 'Kubernetes', 'Grafana', 'Prometheus', 'Redis'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'SQLite'],
  },
  {
    title: 'Tools & Methods',
    skills: ['Git', 'GitHub', 'Jira', 'Figma', 'Kanban', 'Scrum', 'Clean Architecture', 'SOLID', 'Microservices', 'Eureka', 'JWT'],
  },
  {
    title: 'AI & Automation',
    skills: ['Python', 'Pandas', 'Matplotlib', 'AI Integration'],
  },
  {
    title: 'Languages',
    skills: ['Portuguese (Native)', 'English (Fluent)'],
  },
]

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-[clamp(80px,12vw,160px)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionTitle label={t.skills.subtitle} title={t.skills.title} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08, duration: 0.5 }}
              className="group"
            >
              <h3
                className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 font-mono"
                style={{ fontFamily: 'var(--font-jetbrains)' }}
              >
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.08 + si * 0.03, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-xs border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all duration-200 rounded-sm cursor-default"
                    style={{ fontFamily: 'var(--font-jetbrains)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
