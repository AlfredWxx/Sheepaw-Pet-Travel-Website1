'use client'

import { motion } from 'framer-motion'
import { Heart, Plane, Shield, MapPin } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '@/lib/contexts/I18nContext'

export default function Hero() {
  const { t, locale } = useI18n()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-blue/20 to-primary-light/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-accent-orange/20 to-accent-warm/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-primary-light/20 to-accent-orange/20 rounded-full blur-xl"
        />
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-hero font-bold leading-tight"
              >
                <span className="text-gradient">{t.hero.title}</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed max-w-2xl lg:max-w-none"
              >
                {t.hero.subtitle}
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 max-w-md lg:max-w-none"
            >
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-success" />
                <span>{t.hero.features.fullProtection}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Plane className="w-4 h-4 text-primary-blue" />
                <span>{t.hero.features.professionalTransport}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Heart className="w-4 h-4 text-accent-orange" />
                <span>{t.hero.features.caringService}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-primary-light" />
                <span>{t.hero.features.globalCoverage}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href={`/${locale}#contact`} className="btn-primary text-center">
                {t.hero.buttons.freeConsultation}
              </Link>
              <Link href={`/${locale}#services`} className="btn-secondary text-center">
                {t.hero.buttons.learnMore}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-blue/10 to-primary-light/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-primary-light/5" />
                
                {/* Pet Illustration Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-r from-primary-blue to-primary-light rounded-full flex items-center justify-center">
                      <Heart className="w-16 h-16 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="w-48 h-4 bg-gradient-to-r from-primary-blue/20 to-primary-light/20 rounded-full mx-auto" />
                      <div className="w-32 h-3 bg-gradient-to-r from-accent-orange/20 to-accent-warm/20 rounded-full mx-auto" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-accent-orange to-accent-warm rounded-full flex items-center justify-center shadow-lg"
              >
                <Plane className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary-light to-primary-blue rounded-full flex items-center justify-center shadow-lg"
              >
                <Shield className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
