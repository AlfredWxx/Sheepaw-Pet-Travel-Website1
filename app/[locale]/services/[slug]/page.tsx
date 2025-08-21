'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Clock, DollarSign, FileText, Plane, Shield, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/contexts/I18nContext'

const serviceDetails = {
  'china-to-canada': {
    title: 'serviceDetail.chinaToCanada.title',
    subtitle: 'serviceDetail.chinaToCanada.subtitle',
    description: 'serviceDetail.chinaToCanada.description',
    features: [
      'serviceDetail.chinaToCanada.features.1',
      'serviceDetail.chinaToCanada.features.2',
      'serviceDetail.chinaToCanada.features.3',
      'serviceDetail.chinaToCanada.features.4',
      'serviceDetail.chinaToCanada.features.5',
      'serviceDetail.chinaToCanada.features.6'
    ],
    process: [
      { step: 'serviceDetail.chinaToCanada.process.1.step', description: 'serviceDetail.chinaToCanada.process.1.description' },
      { step: 'serviceDetail.chinaToCanada.process.2.step', description: 'serviceDetail.chinaToCanada.process.2.description' },
      { step: 'serviceDetail.chinaToCanada.process.3.step', description: 'serviceDetail.chinaToCanada.process.3.description' },
      { step: 'serviceDetail.chinaToCanada.process.4.step', description: 'serviceDetail.chinaToCanada.process.4.description' },
      { step: 'serviceDetail.chinaToCanada.process.5.step', description: 'serviceDetail.chinaToCanada.process.5.description' }
    ],
    requirements: [
      'serviceDetail.chinaToCanada.requirements.1',
      'serviceDetail.chinaToCanada.requirements.2',
      'serviceDetail.chinaToCanada.requirements.3',
      'serviceDetail.chinaToCanada.requirements.4'
    ],
    timeline: 'serviceDetail.chinaToCanada.timeline',
    price: 'serviceDetail.chinaToCanada.price'
  },
  'canada-to-china': {
    title: 'serviceDetail.canadaToChina.title',
    subtitle: 'serviceDetail.canadaToChina.subtitle',
    description: 'serviceDetail.canadaToChina.description',
    features: [
      'serviceDetail.canadaToChina.features.1',
      'serviceDetail.canadaToChina.features.2',
      'serviceDetail.canadaToChina.features.3',
      'serviceDetail.canadaToChina.features.4',
      'serviceDetail.canadaToChina.features.5',
      'serviceDetail.canadaToChina.features.6'
    ],
    process: [
      { step: 'serviceDetail.canadaToChina.process.1.step', description: 'serviceDetail.canadaToChina.process.1.description' },
      { step: 'serviceDetail.canadaToChina.process.2.step', description: 'serviceDetail.canadaToChina.process.2.description' },
      { step: 'serviceDetail.canadaToChina.process.3.step', description: 'serviceDetail.canadaToChina.process.3.description' },
      { step: 'serviceDetail.canadaToChina.process.4.step', description: 'serviceDetail.canadaToChina.process.4.description' },
      { step: 'serviceDetail.canadaToChina.process.5.step', description: 'serviceDetail.canadaToChina.process.5.description' }
    ],
    requirements: [
      'serviceDetail.canadaToChina.requirements.1',
      'serviceDetail.canadaToChina.requirements.2',
      'serviceDetail.canadaToChina.requirements.3',
      'serviceDetail.canadaToChina.requirements.4'
    ],
    timeline: 'serviceDetail.canadaToChina.timeline',
    price: 'serviceDetail.canadaToChina.price'
  },
  'document-service': {
    title: 'serviceDetail.documentService.title',
    subtitle: 'serviceDetail.documentService.subtitle',
    description: 'serviceDetail.documentService.description',
    features: [
      'serviceDetail.documentService.features.1',
      'serviceDetail.documentService.features.2',
      'serviceDetail.documentService.features.3',
      'serviceDetail.documentService.features.4',
      'serviceDetail.documentService.features.5',
      'serviceDetail.documentService.features.6'
    ],
    process: [
      { step: 'serviceDetail.documentService.process.1.step', description: 'serviceDetail.documentService.process.1.description' },
      { step: 'serviceDetail.documentService.process.2.step', description: 'serviceDetail.documentService.process.2.description' },
      { step: 'serviceDetail.documentService.process.3.step', description: 'serviceDetail.documentService.process.3.description' },
      { step: 'serviceDetail.documentService.process.4.step', description: 'serviceDetail.documentService.process.4.description' }
    ],
    requirements: [
      'serviceDetail.documentService.requirements.1',
      'serviceDetail.documentService.requirements.2',
      'serviceDetail.documentService.requirements.3'
    ],
    timeline: 'serviceDetail.documentService.timeline',
    price: 'serviceDetail.documentService.price'
  }
}

export default function ServiceDetailPage() {
  const params = useParams()
  const { t, locale } = useI18n()
  const slug = params.slug as string
  const service = serviceDetails[slug as keyof typeof serviceDetails]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t.common?.notFound ?? 'Service Not Found'}</h1>
          <Link href={`/${locale}`} className="btn-primary">
            {t.common?.backToHome ?? 'Back to Home'}
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
              href={`/${locale}`} 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.common?.backToServiceList ?? 'Back to Service List'}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.serviceDetail?.chinaToCanada?.title || t.serviceDetail?.canadaToChina?.title || t.serviceDetail?.documentService?.title || 'Service'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t.serviceDetail?.chinaToCanada?.subtitle || t.serviceDetail?.canadaToChina?.subtitle || t.serviceDetail?.documentService?.subtitle || 'Service Description'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Content */}
      <section className="py-16">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.serviceDetail?.description ?? 'Service Description'}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t.serviceDetail?.chinaToCanada?.description || t.serviceDetail?.canadaToChina?.description || t.serviceDetail?.documentService?.description || 'Service description'}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.serviceDetail?.features ?? 'Service Features'}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-sheepaw-green mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{t.serviceDetail?.chinaToCanada?.features?.[index + 1] || t.serviceDetail?.canadaToChina?.features?.[index + 1] || t.serviceDetail?.documentService?.features?.[index + 1] || feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.serviceDetail?.process ?? 'Service Process'}</h2>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-sheepaw-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{t.serviceDetail?.chinaToCanada?.process?.[index + 1]?.step || t.serviceDetail?.canadaToChina?.process?.[index + 1]?.step || t.serviceDetail?.documentService?.process?.[index + 1]?.step || step.step}</h3>
                        <p className="text-gray-600">{t.serviceDetail?.chinaToCanada?.process?.[index + 1]?.description || t.serviceDetail?.canadaToChina?.process?.[index + 1]?.description || t.serviceDetail?.documentService?.process?.[index + 1]?.description || step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.serviceDetail?.requirements ?? 'Requirements'}</h2>
                <div className="space-y-4">
                  {service.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-sheepaw-orange mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{t.serviceDetail?.chinaToCanada?.requirements?.[index + 1] || t.serviceDetail?.canadaToChina?.requirements?.[index + 1] || t.serviceDetail?.documentService?.requirements?.[index + 1] || requirement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-sheepaw-blue" />
                  <h3 className="text-lg font-semibold text-gray-900">{t.serviceDetail?.timeline ?? 'Timeline'}</h3>
                </div>
                <p className="text-gray-600">{t.serviceDetail?.chinaToCanada?.timeline || t.serviceDetail?.canadaToChina?.timeline || t.serviceDetail?.documentService?.timeline || service.timeline}</p>
              </motion.div>

              {/* Price */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-sheepaw-orange to-accent-light text-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <DollarSign className="w-6 h-6" />
                  <h3 className="text-lg font-semibold">{t.serviceDetail?.price ?? 'Price'}</h3>
                </div>
                <p className="text-lg">{t.serviceDetail?.chinaToCanada?.price || t.serviceDetail?.canadaToChina?.price || t.serviceDetail?.documentService?.price || service.price}</p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-sheepaw-blue text-white rounded-2xl p-6 shadow-lg text-center"
              >
                <h3 className="text-lg font-semibold mb-4">{t.serviceDetail?.getStarted ?? 'Get Started Today'}</h3>
                <p className="text-white/90 mb-6">{t.serviceDetail?.contactUs ?? 'Contact us for a free consultation'}</p>
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
