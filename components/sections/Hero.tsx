'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function Hero() {
  const { t } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const fgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  const words = ['Arthur', 'Granito.']

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Parallax background text */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[clamp(100px,20vw,280px)] font-bold opacity-[0.03] whitespace-nowrap leading-none"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          Arthur Granito
        </span>
      </motion.div>

      {/* Floating geometric elements */}
      {[
        { x: '15%', y: '20%', size: 4, delay: 0 },
        { x: '80%', y: '30%', size: 3, delay: 0.5 },
        { x: '70%', y: '70%', size: 5, delay: 1 },
        { x: '20%', y: '75%', size: 3, delay: 1.5 },
      ].map((el, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-foreground/10"
          style={{ left: el.x, top: el.y, width: el.size, height: el.size }}
          animate={{ y: [0, -12, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: el.delay }}
          aria-hidden="true"
        />
      ))}

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute top-20 right-6 md:right-10 flex items-center gap-2 text-xs text-muted-foreground"
        style={{ fontFamily: 'var(--font-jetbrains)' }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        {t.hero.available}
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y: fgY }}
        className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 pt-24 pb-16"
      >
        {/* Name */}
        <div className="mb-6">
          {words.map((word, wi) => (
            <div key={wi} className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + wi * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(56px,12vw,140px)] font-light leading-[0.9] tracking-tight"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-border mb-6 origin-left"
          style={{ maxWidth: '480px' }}
        />

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-2"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
            {t.hero.subtitle}
          </p>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex items-center gap-1.5 text-sm text-muted-foreground mb-12"
        >
          <MapPin size={13} />
          {t.hero.location}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="group relative px-6 py-3 bg-foreground text-background text-sm overflow-hidden"
          >
            <span className="relative z-10">{t.hero.cta_projects}</span>
            <motion.div
              className="absolute inset-0 bg-highlight"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-6 py-3 border border-border text-sm hover:border-foreground transition-colors duration-300"
          >
            {t.hero.cta_contact}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
