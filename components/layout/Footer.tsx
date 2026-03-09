'use client'

import { useLanguage } from '@/context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p style={{ fontFamily: 'var(--font-jetbrains)' }}>{t.contact.footer_credit}</p>
        <p style={{ fontFamily: 'var(--font-jetbrains)' }}>© {new Date().getFullYear()} Arthur Granito</p>
      </div>
    </footer>
  )
}
