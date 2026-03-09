'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Copy, Check } from 'lucide-react'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { useLanguage } from '@/context/LanguageContext'

const EMAIL = 'arthurgranitodev@gmail.com'

export function Contact() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-[clamp(80px,12vw,160px)] bg-muted/20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-mono"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            {t.contact.subtitle}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-12"
            style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '-0.02em' }}
          >
            {t.contact.title}
          </motion.h2>

          <div className="space-y-4">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="group flex items-center gap-4 p-5 border border-border hover:border-foreground/40 transition-colors bg-card"
            >
              <div className="w-10 h-10 bg-muted rounded-sm flex items-center justify-center flex-shrink-0">
                <Mail size={16} className="text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-0.5" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                  {t.contact.email_label}
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm hover:text-highlight transition-colors truncate block"
                >
                  {EMAIL}
                </a>
              </div>
              <button
                onClick={copyEmail}
                className="flex-shrink-0 p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={t.contact.copy_email}
              >
                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
              </button>
            </motion.div>

            {/* GitHub */}
            <motion.a
              href="https://github.com/arthurgranito"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="group flex items-center gap-4 p-5 border border-border hover:border-foreground/40 transition-colors bg-card"
            >
              <div className="w-10 h-10 bg-muted rounded-sm flex items-center justify-center flex-shrink-0">
                <Github size={16} className="text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-0.5" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                  {t.contact.github_label}
                </p>
                <span className="text-sm group-hover:text-highlight transition-colors">
                  github.com/arthurgranito
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
