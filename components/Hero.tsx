'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useI18n } from '@/lib/contexts/I18nContext'

export default function Hero() {
  const { t, locale } = useI18n()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // 媒体内容数组 - 图片和视频
  const mediaItems = [
    {
      type: 'video',
      src: '/Hero Video 1.mp4'
    }
  ]

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length)
    }, 5000) // 每5秒切换一次

    return () => clearInterval(interval)
  }, [mediaItems.length])

  // 手动切换
  // const goToSlide = (index: number) => {
  //   setCurrentIndex(index)
  // }

  // 视频播放处理
  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  const handleVideoPause = () => {
    setIsVideoPlaying(false)
  }

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {mediaItems[currentIndex].type === 'video' ? (
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                poster=""
                aria-label="Sheepaw Pet Travel hero video"
                title="Sheepaw Pet Travel hero video"
              >
                <source src={mediaItems[currentIndex].src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={mediaItems[currentIndex].src}
                alt="Hero image"
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 内容 */}
      <div className="relative z-10 container-max px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href={`/${locale}#contact`} className="btn-primary text-center text-lg px-8 py-4">
              {t.hero.buttons.freeConsultation}
            </Link>
            <Link href={`/${locale}#services`} className="btn-secondary text-center text-lg px-8 py-4">
              {t.hero.buttons.learnMore}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 滚动指示器 */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}
