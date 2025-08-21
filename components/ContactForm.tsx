'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Heart, Send, CheckCircle, AlertCircle, Phone, FileText, Plane, Users, Clock } from 'lucide-react'
import { useI18n } from '@/lib/contexts/I18nContext'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { t, locale } = useI18n()

  // Define formSchema inside the component to access `t`
  const formSchema = z.object({
    name: z.string().min(2, t.contact.fields.name.error),
    phone: z.string().min(10, t.contact.fields.phone.error),
    email: z.string().email(t.contact.fields.email.error),
    petType: z.string().min(1, t.contact.fields.petType.error),
    route: z.string().min(1, t.contact.fields.route.error),
    timeline: z.string().min(1, t.contact.fields.timeline.error),
    message: z.string().min(10, t.contact.fields.message.error),
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale }),
      })
      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // 服务流程数据
  const serviceProcess = [
    {
      step: 1,
      icon: Phone,
      title: t.process?.steps?.consultation?.title ?? 'Initial Consultation',
      description: t.process?.steps?.consultation?.description ?? 'Contact our professional consultants to understand your needs and pet situation',
      color: 'from-sheepaw-blue to-primary-light'
    },
    {
      step: 2,
      icon: FileText,
      title: t.process?.steps?.planning?.title ?? 'Plan Development',
      description: t.process?.steps?.planning?.description ?? 'Develop personalized transport plans based on your specific circumstances',
      color: 'from-primary-light to-sheepaw-orange'
    },
    {
      step: 3,
      icon: Users,
      title: t.process?.steps?.documents?.title ?? 'Document Processing',
      description: t.process?.steps?.documents?.description ?? 'Assist with all necessary health checks and document procedures',
      color: 'from-sheepaw-orange to-accent-light'
    },
    {
      step: 4,
      icon: Plane,
      title: t.process?.steps?.transport?.title ?? 'Transport Arrangement',
      description: t.process?.steps?.transport?.description ?? 'Arrange flight transport and full care services',
      color: 'from-accent-light to-sheepaw-blue'
    },
    {
      step: 5,
      icon: CheckCircle,
      title: t.process?.steps?.arrival?.title ?? 'Safe Arrival',
      description: t.process?.steps?.arrival?.description ?? 'Ensure your furry companions arrive safely at their destination',
      color: 'from-sheepaw-blue to-primary-light'
    }
  ]

  return (
    <>
      {/* 服务流程部分 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              {t.process?.title ?? 'Our Service Process'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.process?.subtitle ?? 'Five simple steps to ensure your furry companions complete their cross-border journey safely and smoothly'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {serviceProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative">
                  {/* 连接线 */}
                  {index < serviceProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-sheepaw-blue to-transparent z-0"></div>
                  )}
                  
                  {/* 步骤圆圈 */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <process.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* 步骤数字 */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-sheepaw-orange text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-text-dark mb-2">
                  {process.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 时间线说明 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Clock className="w-6 h-6 text-sheepaw-blue" />
              <h3 className="text-xl font-semibold text-text-dark">{t.process?.timeline?.title ?? 'Processing Time'}</h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.process?.timeline?.description ?? 'The entire process typically takes 2-4 months, depending on your route and pet type. We will follow up throughout the process to ensure all procedures are completed on time.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 联系表单部分 */}
      <section id="contact" className="section-padding bg-gradient-to-br from-blue-50 to-purple-50 scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* 告诉我们关于您 */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-blue to-primary-light rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-text-dark">
                      {t.contact.sections.aboutYou}
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.fields.name.label} <span className="text-error">*</span>
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        placeholder={t.contact.fields.name.placeholder}
                        className="input-sheepaw"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-error flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.name.message}</span>
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.fields.phone.label} <span className="text-error">*</span>
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder={t.contact.fields.phone.placeholder}
                        className="input-sheepaw"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-error flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.phone.message}</span>
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.fields.email.label} <span className="text-error">*</span>
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder={t.contact.fields.email.placeholder}
                      className="input-sheepaw"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-error flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* 关于您的毛孩子 */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-accent-orange to-accent-warm rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-text-dark">
                      {t.contact.sections.aboutPet}
                    </h3>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.fields.petType.label} <span className="text-error">*</span>
                    </label>
                    <select {...register('petType')} className="input-sheepaw">
                      <option value="">{t.contact.fields.petType.placeholder}</option>
                      <option value="dog">{t.contact.fields.petType.options.dog}</option>
                      <option value="cat">{t.contact.fields.petType.options.cat}</option>
                      <option value="bird">{t.contact.fields.petType.options.bird}</option>
                      <option value="rabbit">{t.contact.fields.petType.options.rabbit}</option>
                      <option value="other">{t.contact.fields.petType.options.other}</option>
                    </select>
                    {errors.petType && (
                      <p className="mt-1 text-sm text-error flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.petType.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* 您的服务需求 */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-light to-primary-blue rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-text-dark">
                      {t.contact.sections.serviceNeeds}
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.fields.route.label} <span className="text-error">*</span>
                      </label>
                      <select {...register('route')} className="input-sheepaw">
                        <option value="">{t.contact.fields.route.placeholder}</option>
                        <option value="china-to-canada">{t.contact.fields.route.options.chinaToCanada}</option>
                        <option value="canada-to-china">{t.contact.fields.route.options.canadaToChina}</option>
                        <option value="other">{t.contact.fields.route.options.other}</option>
                      </select>
                      {errors.route && (
                        <p className="mt-1 text-sm text-error flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.route.message}</span>
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.fields.timeline.label} <span className="text-error">*</span>
                      </label>
                      <select {...register('timeline')} className="input-sheepaw">
                        <option value="">{t.contact.fields.timeline.placeholder}</option>
                        <option value="asap">{t.contact.fields.timeline.options.asap}</option>
                        <option value="1-month">{t.contact.fields.timeline.options.oneMonth}</option>
                        <option value="2-3-months">{t.contact.fields.timeline.options.twoThreeMonths}</option>
                        <option value="3-6-months">{t.contact.fields.timeline.options.threeSixMonths}</option>
                        <option value="flexible">{t.contact.fields.timeline.options.flexible}</option>
                      </select>
                      {errors.timeline && (
                        <p className="mt-1 text-sm text-error flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.timeline.message}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 更多想告诉我们的 */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-accent-warm to-accent-orange rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">4</span>
                    </div>
                    <h3 className="text-lg font-semibold text-text-dark">
                      {t.contact.sections.moreInfo}
                    </h3>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.fields.message.label} <span className="text-error">*</span>
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder={t.contact.fields.message.placeholder}
                      className="input-sheepaw resize-none"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-error flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.message.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{t.contact.submitting}</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>{t.contact.submit}</span>
                      </div>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-success/10 border border-success/20 rounded-lg p-4 text-center"
                  >
                    <div className="flex items-center justify-center space-x-2 text-success">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">{t.contact.success}</span>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-error/10 border border-error/20 rounded-lg p-4 text-center"
                  >
                    <div className="flex items-center justify-center space-x-2 text-error">
                      <AlertCircle className="w-5 h-5" />
                      <span className="font-medium">{t.contact.error}</span>
                    </div>
                  </motion.div>
                )}

                {/* Contact Info */}
                <div className="text-center pt-6 border-t border-gray-200">
                  <p className="text-gray-600 mb-4">
                    {t.contact.emergency}
                  </p>
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-accent-orange" />
                      <span>{t.contact.contactInfo.wechat}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-primary-blue" />
                      <span>{t.contact.contactInfo.phone}</span>
                    </div>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
