'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Plane, Home, FileText, Heart, Shield, Clock, Users, ArrowRight } from 'lucide-react'
import { useI18n } from '@/lib/contexts/I18nContext'
import Link from 'next/link'

export default function Services() {
  const { t, locale } = useI18n()

  type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>

  interface ServiceItem {
    id: number
    icon: IconComponent
    title: string
    description: string
    features: string[]
    color: string
    slug: string
  }

  const services: ServiceItem[] = [
    {
      id: 1,
      icon: Plane,
      title: t.services?.chinaToCanada?.title || '中国到加拿大',
      description: t.services?.chinaToCanada?.description || '全流程证件代办',
      features: [],
      color: "from-sheepaw-blue to-primary-light",
      slug: "china-to-canada"
    },
    {
      id: 2,
      icon: Home,
      title: t.services?.canadaToChina?.title || '加拿大到中国',
      description: t.services?.canadaToChina?.description || '全流程证件代办',
      features: [],
      color: "from-primary-light to-sheepaw-orange",
      slug: "canada-to-china"
    },
    {
      id: 3,
      icon: FileText,
      title: t.services?.documentService?.title || '宠物旅行指导',
      description: t.services?.documentService?.description || '高端私人定制',
      features: [],
      color: "from-sheepaw-orange to-accent-light",
      slug: "document-service"
    }
  ]

  const features: { icon: IconComponent; title: string; description: string }[] = [
    {
      icon: Heart,
      title: t.services?.whyChooseUs?.features?.caring?.title || '贴心服务',
      description: t.services?.whyChooseUs?.features?.caring?.description || '全程专业照顾您的宠物'
    },
    {
      icon: Shield,
      title: t.services?.whyChooseUs?.features?.protection?.title || '安全保障',
      description: t.services?.whyChooseUs?.features?.protection?.description || '完善的安全保障体系'
    },
    {
      icon: Clock,
      title: t.services?.whyChooseUs?.features?.realtime?.title || '实时跟踪',
      description: t.services?.whyChooseUs?.features?.realtime?.description || '全程实时跟踪宠物状态'
    },
    {
      icon: Users,
      title: t.services?.whyChooseUs?.features?.local?.title || '本地团队',
      description: t.services?.whyChooseUs?.features?.local?.description || '两地专业团队服务'
    }
  ]

  return (
    <section id="services" className="section-padding bg-white scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-primary-blue/20 card-hover h-full flex flex-col">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-sheepaw-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-sheepaw-blue rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Learn More Button - 统一位置 */}
                <div className="mt-auto">
                  <Link 
                    href={`/${locale}/services/${service.slug}`}
                    className="inline-flex items-center space-x-2 text-sheepaw-blue hover:text-primary-dark font-medium transition-colors duration-200 group-hover:translate-x-1"
                  >
                    <span>{t.common?.learnMore ?? 'Learn More'}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">
              {t.services?.whyChooseUs?.title || '为什么选择我们'}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.services?.whyChooseUs?.subtitle || '专业、安全、贴心的宠物运输服务'}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-sheepaw-blue to-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-dark mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
