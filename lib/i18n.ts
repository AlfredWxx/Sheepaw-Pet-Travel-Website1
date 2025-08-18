export const locales = ['zh', 'fr', 'en'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'zh'

export const localeNames: Record<Locale, string> = {
  zh: '中文',
  fr: 'Français',
  en: 'English'
}

export const localeFlags: Record<Locale, string> = {
  zh: '🇨🇳',
  fr: '🇫🇷',
  en: '🇺🇸'
}

