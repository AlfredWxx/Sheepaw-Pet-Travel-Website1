import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { I18nProvider } from '@/lib/contexts/I18nContext'
import { locales, type Locale } from '@/lib/i18n'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: Locale }
}

export const metadata: Metadata = {
  title: 'Sheepaw Pet Travel | Canada ↔ China Pet Travel Agent | 宠物跨境服务',
  description: 'Sheepaw 提供中加双向宠物跨境服务：证件代办、FAVN、CFIA 健康证书、Animal Health Certificate、检验检疫、旅行指导与高端私人定制。',
  alternates: { canonical: '/' },
  keywords: [
    'pet travel',
    'Canada to China pet travel agent',
    'China to Canada pet travel',
    'FAVN test',
    'CFIA health certificate',
    'Animal Health Certificate',
    '宠物跨境',
    '携带宠物旅行',
    '中加宠物运输',
  ],
  openGraph: {
    title: 'Sheepaw Pet Travel | Canada ↔ China',
    description: '中加宠物跨境：证件代办、FAVN、CFIA 健康证书、检验检疫、旅行指导与私人定制',
    type: 'website',
  }
}

export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sheepaw Pet Travel',
    url: 'https://sheepaw.com',
    logo: 'https://sheepaw.com/logo.png',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-249-688-3003',
        contactType: 'customer service',
        areaServed: 'CA',
        availableLanguage: ['English', '中文', 'Français']
      },
      {
        '@type': 'ContactPoint',
        telephone: '+86-135-2285-3556',
        contactType: 'customer service',
        areaServed: 'CN',
        availableLanguage: ['中文', 'English']
      }
    ],
    sameAs: []
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Script id="jsonld-organization" type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </Script>
        <I18nProvider locale={locale}>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
