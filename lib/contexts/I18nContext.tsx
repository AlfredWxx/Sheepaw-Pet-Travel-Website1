'use client'

import { createContext, useContext, ReactNode } from 'react'
import translations, { type Translation } from '../translations'
import { defaultLocale, type Locale } from '../i18n'

interface I18nContextType {
  t: Translation
  locale: Locale
}

const I18nContext = createContext<I18nContextType>({
  t: translations[defaultLocale],
  locale: defaultLocale
})

interface I18nProviderProps {
  children: ReactNode
  locale: Locale
}

export function I18nProvider({ children, locale }: I18nProviderProps) {
  const t = translations[locale] || translations[defaultLocale]

  return (
    <I18nContext.Provider value={{ t, locale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

