import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { I18nProvider } from '@/lib/contexts/I18nContext'
import { locales, type Locale } from '@/lib/i18n'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: Locale }
}

export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <I18nProvider locale={locale}>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
