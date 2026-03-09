'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { useLanguage } from '@/context/LanguageContext'
import type { Locale } from '@/lib/translations'

const navItems = ['about', 'experience', 'skills', 'projects', 'education', 'contact'] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { t, locale, setLocale } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    navItems.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-light text-xl tracking-tight hover:opacity-70 transition-opacity"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            AG
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative text-sm transition-colors group ${
                  active === item ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t.nav[item as keyof typeof t.nav]}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-foreground transition-all duration-300 ${
                    active === item ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Lang toggle */}
            <button
              onClick={() => setLocale(locale === 'en' ? 'pt' : 'en')}
              className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors tracking-wider"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              {locale === 'en' ? 'PT' : 'EN'}
            </button>
            <ThemeToggle />
            {/* Mobile menu */}
            <button
              className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-64 bg-background border-l border-border z-40 flex flex-col pt-24 px-8 gap-6"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(item)}
                className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav[item as keyof typeof t.nav]}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-30 bg-foreground/10 md:hidden" onClick={() => setOpen(false)} />
      )}
    </>
  )
}
