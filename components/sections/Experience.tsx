'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { useLanguage } from '@/context/LanguageContext'

export function Experience() {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section id="experience" className="py-[clamp(80px,12vw,160px)] bg-muted/30">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionTitle label={t.experience.subtitle} title={t.experience.title} />

        <div ref={ref} className="relative pl-8 md:pl-16">
          {/* Animated vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
            <motion.div
              className="absolute top-0 left-0 w-full bg-foreground"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12">
            {t.experience.jobs.map((job, i) => {
              const isPresent = job.period.includes('Present') || job.period.includes('Presente')
              return (
                <ExperienceCard key={i} job={job} index={i} isPresent={isPresent} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

interface Job {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
}

function ExperienceCard({ job, index, isPresent }: { job: Job; index: number; isPresent: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="relative group"
    >
      {/* Timeline node */}
      <div className="absolute -left-8 md:-left-16 top-1.5 w-3 h-3 rounded-full border-2 border-foreground bg-background transform -translate-x-1/2 transition-colors group-hover:bg-foreground" />

      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className="bg-background border border-border p-6 md:p-8 rounded-sm hover:border-foreground/30 transition-colors duration-300"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
          <div>
            <h3
              className="text-2xl font-light"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {job.company}
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">{job.role}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            {isPresent && (
              <span className="text-xs px-2 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 rounded-full font-mono">
                Present
              </span>
            )}
            <span className="text-xs text-muted-foreground font-mono" style={{ fontFamily: 'var(--font-jetbrains)' }}>
              {job.period}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-5" style={{ fontFamily: 'var(--font-jetbrains)' }}>
          <MapPin size={11} />
          {job.location}
        </div>

        <ul className="space-y-2">
          {job.bullets.map((b, bi) => (
            <li key={bi} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-highlight" />
              {b}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}
