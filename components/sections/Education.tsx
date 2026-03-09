'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { useLanguage } from '@/context/LanguageContext'

export function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="py-[clamp(80px,12vw,160px)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionTitle label={t.education.subtitle} title={t.education.title} />

        <div className="grid md:grid-cols-2 gap-6">
          {t.education.schools.map((school, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -2 }}
              className="bg-card border border-border p-8 rounded-sm hover:border-foreground/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-muted flex items-center justify-center">
                  <GraduationCap size={18} className="text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-xl font-light leading-snug mb-1"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                  >
                    {school.institution}
                  </h3>
                  <p className="text-sm text-muted-foreground">{school.degree}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-5" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                <span>{school.period}</span>
                <span className="flex items-center gap-1">
                  <MapPin size={10} />
                  {school.location}
                </span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground mb-3" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                  {t.education.subjects}
                </p>
                <div className="flex flex-wrap gap-2">
                  {school.subjects.map((subj) => (
                    <span
                      key={subj}
                      className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-sm"
                      style={{ fontFamily: 'var(--font-jetbrains)' }}
                    >
                      {subj}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
