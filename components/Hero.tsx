'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useI18n } from '@/lib/contexts/I18nContext'

export default function Hero() {
  const { t, locale } = useI18n()

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Pet travel video at airport"
          title="Pet travel video at airport"
          poster="https://images.unsplash.com/photo-1516375195448-0b5457b03129?q=80&w=1600&auto=format&fit=crop"
        >
          <source src="https://videos.pexels.com/video-files/856003/856003-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 container-max px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-hero font-bold text-white">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}#contact`} className="btn-primary text-center">
              {t.hero.buttons.freeConsultation}
            </Link>
            <Link href={`/${locale}#services`} className="btn-secondary text-center">
              {t.hero.buttons.learnMore}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
