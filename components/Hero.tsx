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
      type: 'image',
      src: '/Pet in cabin pic1.jpeg',
      alt: 'Pet in cabin 1'
    },
    {
      type: 'image', 
      src: '/Pet in cabin pic2.jpeg',
      alt: 'Pet in cabin 2'
    },
    {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/856003/856003-uhd_2560_1440_25fps.mp4',
      poster: '/Pet in cabin pic1.jpeg'
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
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // 视频播放处理
  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  const handleVideoPause = () => {
    setIsVideoPlaying(false)
  }

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
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
                poster={mediaItems[currentIndex].poster}
                aria-label="Sheepaw Pet Travel hero video"
                title="Sheepaw Pet Travel hero video"
              >
                <source src={mediaItems[currentIndex].src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={mediaItems[currentIndex].src}
                alt={mediaItems[currentIndex].alt}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 轮播指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {mediaItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-sheepaw-orange scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* 内容 */}
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
