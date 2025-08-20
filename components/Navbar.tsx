'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '@/lib/contexts/I18nContext'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from './Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t, locale } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKey)
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2 group" aria-label="Sheepaw home">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href={`/${locale}`} className="text-gray-700 hover:text-primary-blue transition-colors duration-200 font-medium">
              {t.nav.home}
            </Link>
            <Link href={`/${locale}#services`} className="text-gray-700 hover:text-primary-blue transition-colors duration-200 font-medium">
              {t.nav.services}
            </Link>
            <Link href={`/${locale}#about`} className="text-gray-700 hover:text-primary-blue transition-colors duration-200 font-medium">
              {t.nav.about}
            </Link>
            <Link href={`/${locale}#contact`} className="text-gray-700 hover:text-primary-blue transition-colors duration-200 font-medium">
              {t.nav.contact}
            </Link>
            <LanguageSwitcher />
            <Link href={`/${locale}#contact`} className="btn-primary">
              {t.nav.freeConsultation}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation with overlay and animation */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                key="overlay"
                className="fixed inset-0 bg-black/30 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />
              <motion.div
                key="menu"
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="md:hidden bg-white border-t border-gray-200 relative z-50"
              >
                <div className="px-4 py-4 space-y-4">
                  <Link 
                    href={`/${locale}`} 
                    className="block text-gray-700 hover:text-primary-blue transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.nav.home}
                  </Link>
                  <Link 
                    href={`/${locale}#services`} 
                    className="block text-gray-700 hover:text-primary-blue transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.nav.services}
                  </Link>
                  <Link 
                    href={`/${locale}#about`} 
                    className="block text-gray-700 hover:text-primary-blue transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.nav.about}
                  </Link>
                  <Link 
                    href={`/${locale}#contact`} 
                    className="block text-gray-700 hover:text-primary-blue transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.nav.contact}
                  </Link>
                  <LanguageSwitcher className="block" />
                  <Link 
                    href={`/${locale}#contact`} 
                    className="btn-primary inline-block"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.nav.freeConsultation}
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
