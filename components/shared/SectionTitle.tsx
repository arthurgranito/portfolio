'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  label: string
  title: string
  className?: string
}

export function SectionTitle({ label, title, className = '' }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${className}`}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-mono"
        style={{ fontFamily: 'var(--font-jetbrains)' }}
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-light"
        style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '-0.02em' }}
      >
        {title}
      </motion.h2>
    </div>
  )
}
