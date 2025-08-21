'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, MapPin, Star, User, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/contexts/I18nContext'

const caseDetails = {
  'golden-retriever-canada': {
    title: 'caseDetail.goldenRetriever.title',
    subtitle: 'caseDetail.goldenRetriever.subtitle',
    description: 'caseDetail.goldenRetriever.description',
    image: '/Pet in cabin pic1.jpeg',
    route: 'caseDetail.goldenRetriever.route',
    petType: 'caseDetail.goldenRetriever.petType',
    duration: 'caseDetail.goldenRetriever.duration',
    clientName: 'caseDetail.goldenRetriever.clientName',
    petName: 'caseDetail.goldenRetriever.petName',
    challenges: [
      'caseDetail.goldenRetriever.challenges.1',
      'caseDetail.goldenRetriever.challenges.2',
      'caseDetail.goldenRetriever.challenges.3'
    ],
    solutions: [
      'caseDetail.goldenRetriever.solutions.1',
      'caseDetail.goldenRetriever.solutions.2',
      'caseDetail.goldenRetriever.solutions.3'
    ],
    timeline: [
      { date: 'caseDetail.goldenRetriever.timeline.1.date', event: 'caseDetail.goldenRetriever.timeline.1.event' },
      { date: 'caseDetail.goldenRetriever.timeline.2.date', event: 'caseDetail.goldenRetriever.timeline.2.event' },
      { date: 'caseDetail.goldenRetriever.timeline.3.date', event: 'caseDetail.goldenRetriever.timeline.3.event' },
      { date: 'caseDetail.goldenRetriever.timeline.4.date', event: 'caseDetail.goldenRetriever.timeline.4.event' }
    ],
    testimonial: {
      text: 'caseDetail.goldenRetriever.testimonial.text',
      rating: 5
    }
  },
  'persian-cat-china': {
    title: 'caseDetail.persianCat.title',
    subtitle: 'caseDetail.persianCat.subtitle',
    description: 'caseDetail.persianCat.description',
    image: '/Pet in cabin pic2.jpeg',
    route: 'caseDetail.persianCat.route',
    petType: 'caseDetail.persianCat.petType',
    duration: 'caseDetail.persianCat.duration',
    clientName: 'caseDetail.persianCat.clientName',
    petName: 'caseDetail.persianCat.petName',
    challenges: [
      'caseDetail.persianCat.challenges.1',
      'caseDetail.persianCat.challenges.2',
      'caseDetail.persianCat.challenges.3'
    ],
    solutions: [
      'caseDetail.persianCat.solutions.1',
      'caseDetail.persianCat.solutions.2',
      'caseDetail.persianCat.solutions.3'
    ],
    timeline: [
      { date: 'caseDetail.persianCat.timeline.1.date', event: 'caseDetail.persianCat.timeline.1.event' },
      { date: 'caseDetail.persianCat.timeline.2.date', event: 'caseDetail.persianCat.timeline.2.event' },
      { date: 'caseDetail.persianCat.timeline.3.date', event: 'caseDetail.persianCat.timeline.3.event' },
      { date: 'caseDetail.persianCat.timeline.4.date', event: 'caseDetail.persianCat.timeline.4.event' }
    ],
    testimonial: {
      text: 'caseDetail.persianCat.testimonial.text',
      rating: 5
    }
  },
  'french-bulldog-europe': {
    title: 'caseDetail.frenchBulldog.title',
    subtitle: 'caseDetail.frenchBulldog.subtitle',
    description: 'caseDetail.frenchBulldog.description',
    image: '/Pet in cabin pic1.jpeg',
    route: 'caseDetail.frenchBulldog.route',
    petType: 'caseDetail.frenchBulldog.petType',
    duration: 'caseDetail.frenchBulldog.duration',
    clientName: 'caseDetail.frenchBulldog.clientName',
    petName: 'caseDetail.frenchBulldog.petName',
    challenges: [
      'caseDetail.frenchBulldog.challenges.1',
      'caseDetail.frenchBulldog.challenges.2',
      'caseDetail.frenchBulldog.challenges.3'
    ],
    solutions: [
      'caseDetail.frenchBulldog.solutions.1',
      'caseDetail.frenchBulldog.solutions.2',
      'caseDetail.frenchBulldog.solutions.3'
    ],
    timeline: [
      { date: 'caseDetail.frenchBulldog.timeline.1.date', event: 'caseDetail.frenchBulldog.timeline.1.event' },
      { date: 'caseDetail.frenchBulldog.timeline.2.date', event: 'caseDetail.frenchBulldog.timeline.2.event' },
      { date: 'caseDetail.frenchBulldog.timeline.3.date', event: 'caseDetail.frenchBulldog.timeline.3.event' },
      { date: 'caseDetail.frenchBulldog.timeline.4.date', event: 'caseDetail.frenchBulldog.timeline.4.event' }
    ],
    testimonial: {
      text: 'caseDetail.frenchBulldog.testimonial.text',
      rating: 5
    }
  }
}

export default function CaseDetailPage() {
  const params = useParams()
  const { t, locale } = useI18n()
  const slug = params.slug as string
  const caseDetail = caseDetails[slug as keyof typeof caseDetails]

  if (!caseDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t.common?.notFound ?? 'Case Not Found'}</h1>
          <Link href={`/${locale}/cases`} className="btn-primary">
            {t.common?.backToCaseList ?? 'Back to Case List'}
          </Link>
        </div>
      </div>
    )
  }



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sheepaw-blue to-primary-light text-white py-20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href={`/${locale}/cases`} 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.common?.backToCaseList ?? 'Back to Case List'}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.caseDetail?.[slug as keyof typeof t.caseDetail]?.title || caseDetail.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t.caseDetail?.[slug as keyof typeof t.caseDetail]?.subtitle || caseDetail.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Content */}
      <section className="py-16">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Case Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-80 md:h-96">
                  <Image
                    src={caseDetail.image}
                    alt={t.caseDetail?.[slug as keyof typeof t.caseDetail]?.title || caseDetail.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                </div>
              </motion.div>

              {/* Case Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.caseDetail?.caseDetails ?? 'Case Details'}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-sheepaw-blue" />
                    <span className="text-gray-700">{t.caseDetail?.[slug as keyof typeof t.caseDetail]?.route || caseDetail.route}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-sheepaw-orange" />
                    <span className="text-gray-700">{t.caseDetail?.[slug as keyof typeof t.caseDetail]?.petType || caseDetail.petType}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-sheepaw-green" />
                    <span className="text-gray-700">{t.caseDetail?.[slug as keyof typeof t.caseDetail]?.duration || caseDetail.duration}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-primary-dark" />
                    <span className="text-gray-700">{t.caseDetail?.[slug as keyof typeof t.caseDetail]?.clientName || caseDetail.clientName}</span>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.caseDetail?.description ?? 'Case Description'}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t.caseDetail?.[slug as keyof typeof t.caseDetail]?.description || caseDetail.description}
                </p>
              </motion.div>

              {/* Challenges & Solutions */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.caseDetail?.challenges ?? 'Challenges'}</h2>
                  <div className="space-y-4">
                    {caseDetail.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{t.caseDetail?.[slug as keyof typeof t.caseDetail]?.challenges?.[0] || challenge}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.caseDetail?.solutions ?? 'Solutions'}</h2>
                  <div className="space-y-4">
                    {caseDetail.solutions.map((solution, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-sheepaw-green rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{t.caseDetail?.[slug as keyof typeof t.caseDetail]?.solutions?.[0] || solution}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.caseDetail?.timeline ?? 'Timeline'}</h2>
                <div className="space-y-6">
                  {caseDetail.timeline.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-sheepaw-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{t.caseDetail?.[slug as keyof typeof t.caseDetail]?.timeline?.[index]?.date || item.date}</h3>
                        <p className="text-gray-600">{t.caseDetail?.[slug as keyof typeof t.caseDetail]?.timeline?.[index]?.event || item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-sheepaw-orange to-accent-light text-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6">{t.caseDetail?.testimonial ?? 'Client Testimonial'}</h2>
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(caseDetail.testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-lg italic mb-4">"{t.caseDetail?.[slug as keyof typeof t.caseDetail]?.testimonial?.text || caseDetail.testimonial.text}"</p>
                <p className="font-semibold">— {t.caseDetail?.[slug as keyof typeof t.caseDetail]?.clientName || caseDetail.clientName}</p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.caseDetail?.quickInfo ?? 'Quick Info'}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500">{t.caseDetail?.petName ?? 'Pet Name'}</span>
                    <p className="font-medium">{t.caseDetail?.[slug as keyof typeof t.caseDetail]?.petName || caseDetail.petName}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">{t.caseDetail?.route ?? 'Route'}</span>
                    <p className="font-medium">{t.caseDetail?.[slug as keyof typeof t.caseDetail]?.route || caseDetail.route}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">{t.caseDetail?.duration ?? 'Duration'}</span>
                    <p className="font-medium">{t.caseDetail?.[slug as keyof typeof t.caseDetail]?.duration || caseDetail.duration}</p>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-sheepaw-blue text-white rounded-2xl p-6 shadow-lg text-center"
              >
                <h3 className="text-lg font-semibold mb-4">{t.caseDetail?.startYourJourney ?? 'Start Your Journey'}</h3>
                <p className="text-white/90 mb-6">{t.caseDetail?.contactUsForConsultation ?? 'Contact us for a free consultation'}</p>
                <Link 
                  href={`/${locale}#contact`} 
                  className="btn-secondary bg-white text-sheepaw-blue hover:bg-gray-100 w-full"
                >
                  {t.common?.contactUs ?? 'Contact Us'}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
