'use client'

import { Heart, Mail, Phone, MapPin, Globe } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '@/lib/contexts/I18nContext'

export default function Footer() {
  const { t, locale } = useI18n()

  return (
    <footer className="bg-gradient-to-r from-text-dark to-gray-800 text-white">
      <div className="container-max py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-r from-primary-blue to-primary-light rounded-full">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Sheepaw</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-blue to-primary-light rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-accent-orange to-accent-warm rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Globe className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}`} className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#services`} className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#contact`} className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#about`} className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t.footer.quickLinks}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">{t.footer.contactInfo}</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-blue to-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">{t.footer.phone}</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-accent-orange to-accent-warm rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">{t.footer.email}</p>
                  <p className="text-white">hello@sheepaw.com</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-light to-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">{t.footer.address}</p>
                  <p className="text-white">{t.footer.addressValue}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              {t.footer.copyright}
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors duration-200">
                {t.footer.privacy}
              </Link>
              <Link href={`/${locale}/terms`} className="hover:text-white transition-colors duration-200">
                {t.footer.terms}
              </Link>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-accent-orange" />
                <span>{t.footer.slogan}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
