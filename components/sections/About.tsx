'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { useLanguage } from '@/context/LanguageContext'
import { useCountUp } from '@/hooks/useCountUp'

const stats = [
  { value: 2, suffix: '+', key: 'experience' as const },
  { value: 15, suffix: '+', key: 'students' as const },
  { value: 200, suffix: '+', key: 'employees' as const },
  { value: 10, suffix: 'h+', key: 'hours' as const },
]

function StatItem({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 1500, start)
  return (
    <div className="py-6 border-b border-border last:border-0">
      <div
        className="text-4xl md:text-5xl font-light mb-1"
        style={{ fontFamily: 'var(--font-cormorant)' }}
      >
        {count}
        <span className="text-highlight">{suffix}</span>
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

export function About() {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-[clamp(80px,12vw,160px)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionTitle label={t.about.subtitle} title={t.about.title} />

        <div className="grid md:grid-cols-[3fr_2fr] gap-16 md:gap-24">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground"
            >
              {t.about.text.split(/(scalable|clean architecture|Java|React\/Next\.js|CI\/CD|Kubernetes|AWS|Computer Science)/g).map((part, i) =>
                ['scalable', 'clean architecture', 'Java', 'React/Next.js', 'CI/CD', 'Kubernetes', 'AWS', 'Computer Science'].includes(part)
                  ? <strong key={i} className="text-foreground font-medium">{part}</strong>
                  : part
              )}
            </p>
          </motion.div>

          {/* Stats */}
          <div ref={ref}>
            {stats.map((s, i) => (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <StatItem
                  value={s.value}
                  suffix={s.suffix}
                  label={t.about.stats[s.key]}
                  start={inView}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
