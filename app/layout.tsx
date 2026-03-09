import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/context/LanguageContext'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Arthur Granito — Full Stack Developer',
  description:
    'Full Stack Developer specializing in Java, Spring Boot, React and Next.js. Building scalable, clean and well-structured applications.',
  keywords: ['Arthur Granito', 'Full Stack Developer', 'Java', 'Spring Boot', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Arthur Granito' }],
  openGraph: {
    title: 'Arthur Granito — Full Stack Developer',
    description: 'Full Stack Developer based in Rio de Janeiro, Brazil',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
