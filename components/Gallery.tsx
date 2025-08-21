'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Plane, Home } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '@/lib/contexts/I18nContext'

const cases = [
  {
    id: 1,
    title: '金毛寻回犬从北京到温哥华',
    subtitle: '顺利完成的家庭团聚之旅',
    description: '帮助张女士的金毛寻回犬从北京安全运输到温哥华，与家人团聚。整个流程历时2个月，包括健康检查、证件办理、航班安排等全流程服务。',
    image: '/Pet in cabin pic1.jpeg',
    route: '中国到加拿大',
    petType: '金毛寻回犬',
    duration: '2个月',
    status: '已完成',
    slug: 'golden-retriever-beijing-vancouver'
  },
  {
    id: 2,
    title: '布偶猫从多伦多到上海',
    subtitle: '高端私人定制服务',
    description: '为李先生提供从多伦多到上海的布偶猫运输服务，采用高端私人定制方案，确保猫咪在运输过程中的舒适和安全。',
    image: '/Pet in cabin pic2.jpeg',
    route: '加拿大到中国',
    petType: '布偶猫',
    duration: '3个月',
    status: '已完成',
    slug: 'ragdoll-cat-toronto-shanghai'
  },
  {
    id: 3,
    title: '边境牧羊犬从深圳到卡尔加里',
    subtitle: '专业证件代办服务',
    description: '协助王先生办理边境牧羊犬从深圳到卡尔加里的所有证件和手续，包括FAVN检测、健康证书等，确保顺利入境。',
    image: '/Pet in cabin pic1.jpeg',
    route: '中国到加拿大',
    petType: '边境牧羊犬',
    duration: '2.5个月',
    status: '已完成',
    slug: 'border-collie-shenzhen-calgary'
  },
  {
    id: 4,
    title: '波斯猫从温哥华到广州',
    subtitle: '全程贴心照顾服务',
    description: '为陈女士的波斯猫提供从温哥华到广州的运输服务，全程提供贴心照顾，确保猫咪在长途旅行中的安全和舒适。',
    image: '/Pet in cabin pic2.jpeg',
    route: '加拿大到中国',
    petType: '波斯猫',
    duration: '3个月',
    status: '已完成',
    slug: 'persian-cat-vancouver-guangzhou'
  }
]

export default function OurCases() {
  const { t, locale } = useI18n()

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50" aria-label="Our successful cases">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">{t.cases?.title ?? 'Our Success Cases'}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.cases?.subtitle ?? 'Every case represents our commitment to pets and their owners'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* 图片部分 */}
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={caseItem.image} 
                    alt={caseItem.title}
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {/* 状态标签 */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t.common?.completed ?? 'Completed'}
                    </span>
                  </div>
                </div>

                {/* 内容部分 */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-text-dark mb-2 group-hover:text-sheepaw-blue transition-colors duration-200">
                      {caseItem.title}
                    </h3>
                    <p className="text-sheepaw-orange font-medium mb-3">{caseItem.subtitle}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {caseItem.description}
                    </p>
                  </div>

                  {/* 案例信息 */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Plane className="w-4 h-4 text-sheepaw-blue" />
                      <span className="text-gray-600">{caseItem.route}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-sheepaw-orange" />
                      <span className="text-gray-600">{caseItem.petType}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Home className="w-4 h-4 text-sheepaw-blue" />
                      <span className="text-gray-600">{t.common?.duration ?? 'Duration'}: {caseItem.duration}</span>
                    </div>
                  </div>

                  {/* 查看详情按钮 */}
                  <div className="mt-auto">
                    <Link 
                      href={`/${locale}/cases/${caseItem.slug}`}
                      className="inline-flex items-center space-x-2 text-sheepaw-blue hover:text-primary-dark font-medium transition-colors duration-200 group-hover:translate-x-1"
                    >
                      <span>{t.cases?.viewDetails ?? 'View Details'}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 查看更多按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href={`/${locale}/cases`}
            className="inline-flex items-center space-x-2 bg-sheepaw-blue text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-200"
          >
            <span>{t.cases?.viewMore ?? 'View More Cases'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


