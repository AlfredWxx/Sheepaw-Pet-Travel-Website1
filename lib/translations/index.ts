import zh from './zh'
import en from './en'
import fr from './fr'

export const translations = {
  zh,
  en,
  fr
}

export type Locale = keyof typeof translations
export type Translation = typeof zh

export default translations

