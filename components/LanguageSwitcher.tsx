'use client'

import { useState, useRef, useEffect } from 'react'
import { Globe, ChevronDown } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'
import { locales, localeNames, localeFlags, type Locale } from '@/lib/i18n'

interface LanguageSwitcherProps {
  className?: string
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLocale, setCurrentLocale] = useState<Locale>('zh')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // 从路径中提取语言代码
    const pathLocale = pathname.split('/')[1] as Locale
    if (locales.includes(pathLocale)) {
      setCurrentLocale(pathLocale)
    }
  }, [pathname])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (locale: Locale) => {
    setCurrentLocale(locale)
    setIsOpen(false)
    
    // 构建新的路径
    const pathSegments = pathname.split('/')
    if (locales.includes(pathSegments[1] as Locale)) {
      pathSegments[1] = locale
    } else {
      pathSegments.splice(1, 0, locale)
    }
    
    const newPath = pathSegments.join('/')
    router.push(newPath)
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {localeFlags[currentLocale]} {localeNames[currentLocale]}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 ${
                currentLocale === locale ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{localeFlags[locale]}</span>
              <span className="text-sm font-medium">{localeNames[locale]}</span>
              {currentLocale === locale && (
                <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

