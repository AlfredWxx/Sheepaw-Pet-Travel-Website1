import { zh } from './zh'
import { fr } from './fr'
import { en } from './en'
import type { Locale } from '../i18n'

export const translations = {
  zh,
  fr,
  en
} as const

export type Translation = typeof zh

export function getTranslation(locale: Locale): Translation {
  return translations[locale] || translations.zh
}

