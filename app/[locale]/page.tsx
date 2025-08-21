"use client"
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { useI18n } from '@/lib/contexts/I18nContext'
import OurCases from '@/components/Gallery'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  // localizable about section
  const { t } = useI18n()
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="about" className="section-padding bg-white scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* 左侧文字内容 */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark">{t.about?.title ?? 'About Us'}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{t.about?.body ?? ''}</p>
              
              {/* 添加一些关键数据 */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sheepaw-blue mb-2">500+</div>
                  <div className="text-sm text-gray-600">{t.about?.stats?.successCases ?? 'Success Cases'}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sheepaw-orange mb-2">98%</div>
                  <div className="text-sm text-gray-600">{t.about?.stats?.satisfaction ?? 'Client Satisfaction'}</div>
                </div>
              </div>
            </div>
            
            {/* 右侧图片 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Pet in cabin pic1.jpeg"
                  alt="Pet travel service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* 装饰性元素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-sheepaw-blue to-primary-light rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-sheepaw-orange to-accent-light rounded-full opacity-20"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Services />
      <OurCases />
      <ContactForm />
      <Footer />
    </main>
  )
}

