'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin, Heart, Calendar, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/contexts/I18nContext'

const allCases = [
  {
    slug: 'golden-retriever-canada',
    title: 'caseList.goldenRetriever.title',
    subtitle: 'caseList.goldenRetriever.subtitle',
    image: '/Pet in cabin pic1.jpeg',
    route: 'caseList.goldenRetriever.route',
    petType: 'caseList.goldenRetriever.petType',
    duration: 'caseList.goldenRetriever.duration',
    status: 'caseList.goldenRetriever.status'
  },
  {
    slug: 'persian-cat-china',
    title: 'caseList.persianCat.title',
    subtitle: 'caseList.persianCat.subtitle',
    image: '/Pet in cabin pic2.jpeg',
    route: 'caseList.persianCat.route',
    petType: 'caseList.persianCat.petType',
    duration: 'caseList.persianCat.duration',
    status: 'caseList.persianCat.status'
  },
  {
    slug: 'french-bulldog-europe',
    title: 'caseList.frenchBulldog.title',
    subtitle: 'caseList.frenchBulldog.subtitle',
    image: '/Pet in cabin pic1.jpeg',
    route: 'caseList.frenchBulldog.route',
    petType: 'caseList.frenchBulldog.petType',
    duration: 'caseList.frenchBulldog.duration',
    status: 'caseList.frenchBulldog.status'
  },
  {
    slug: 'border-collie-canada',
    title: 'caseList.borderCollie.title',
    subtitle: 'caseList.borderCollie.subtitle',
    image: '/Pet in cabin pic2.jpeg',
    route: 'caseList.borderCollie.route',
    petType: 'caseList.borderCollie.petType',
    duration: 'caseList.borderCollie.duration',
    status: 'caseList.borderCollie.status'
  },
  {
    slug: 'ragdoll-cat-china',
    title: 'caseList.ragdollCat.title',
    subtitle: 'caseList.ragdollCat.subtitle',
    image: '/Pet in cabin pic1.jpeg',
    route: 'caseList.ragdollCat.route',
    petType: 'caseList.ragdollCat.petType',
    duration: 'caseList.ragdollCat.duration',
    status: 'caseList.ragdollCat.status'
  },
  {
    slug: 'labrador-retriever-europe',
    title: 'caseList.labradorRetriever.title',
    subtitle: 'caseList.labradorRetriever.subtitle',
    image: '/Pet in cabin pic2.jpeg',
    route: 'caseList.labradorRetriever.route',
    petType: 'caseList.labradorRetriever.petType',
    duration: 'caseList.labradorRetriever.duration',
    status: 'caseList.labradorRetriever.status'
  }
]

export default function CasesPage() {
  const { t, locale } = useI18n()



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sheepaw-blue to-primary-light text-white py-20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link 
              href={`/${locale}`} 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200 mb-6"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              {t.common?.backToHome ?? 'Back to Home'}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t.cases?.pageTitle ?? 'Our Success Cases'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t.cases?.pageSubtitle ?? 'Every case represents our commitment to pets and their owners'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sheepaw-blue mb-2">500+</div>
              <div className="text-sm text-gray-600">{t.cases?.stats?.successCases ?? 'Success Cases'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sheepaw-orange mb-2">98%</div>
              <div className="text-sm text-gray-600">{t.cases?.stats?.satisfaction ?? 'Client Satisfaction'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sheepaw-green mb-2">24h</div>
              <div className="text-sm text-gray-600">{t.cases?.stats?.responseTime ?? 'Response Time'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">100%</div>
              <div className="text-sm text-gray-600">{t.cases?.stats?.successRate ?? 'Success Rate'}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-16">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.cases?.recentCases ?? 'Recent Success Cases'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.cases?.recentCasesSubtitle ?? 'Explore our latest successful pet transportation cases'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={caseItem.image}
                    alt={t.caseList?.[caseItem.slug as keyof typeof t.caseList]?.title || caseItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t.caseList?.[caseItem.slug as keyof typeof t.caseList]?.status || caseItem.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t.caseList?.[caseItem.slug as keyof typeof t.caseList]?.title || caseItem.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t.caseList?.[caseItem.slug as keyof typeof t.caseList]?.subtitle || caseItem.subtitle}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-sheepaw-blue" />
                      <span className="text-sm text-gray-600">{t.caseList?.[caseItem.slug as keyof typeof t.caseList]?.route || caseItem.route}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-sheepaw-orange" />
                      <span className="text-sm text-gray-600">{t.caseList?.[caseItem.slug as keyof typeof t.caseList]?.petType || caseItem.petType}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-sheepaw-green" />
                      <span className="text-sm text-gray-600">{t.caseList?.[caseItem.slug as keyof typeof t.caseList]?.duration || caseItem.duration}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/${locale}/cases/${caseItem.slug}`}
                    className="inline-flex items-center space-x-2 text-sheepaw-blue hover:text-primary-dark transition-colors duration-200 font-medium"
                  >
                    <span>{t.cases?.viewDetails ?? 'View Details'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sheepaw-blue to-primary-light">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.cases?.cta?.title ?? 'Ready to Start Your Pet\'s Journey?'}
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {t.cases?.cta?.subtitle ?? 'Contact our professional consultants to create the best transportation plan for your furry friend'}
            </p>
            <Link 
              href={`/${locale}#contact`}
              className="inline-flex items-center space-x-2 bg-white text-sheepaw-blue font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <span>{t.common?.contactUs ?? 'Contact Us'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
