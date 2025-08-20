'use client'

import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'auto'
  showText?: boolean
  variant?: 'logo1' | 'logo2' | 'transparent'
}

export default function Logo({ className = '', size = 'auto', showText = false, variant = 'transparent' }: LogoProps) {
  const sizeMap = {
    sm: { width: 2400, height: 2400 },
    md: { width: 3200, height: 3200 },
    lg: { width: 4800, height: 4800 },
    auto: { width: 0, height: 0 } // 将使用CSS控制大小
  }

  const { width, height } = sizeMap[size]
  
  // 根据variant选择logo文件
  const logoSrc = variant === 'logo2' 
    ? '/Sheepaw Logo2 Transparent.svg' 
    : variant === 'transparent'
    ? '/Sheepaw Logo Transparent.svg'
    : '/Sheepaw Logo.svg'

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Image
        src={logoSrc}
        alt="Sheepaw Pet Travel logo"
        width={width}
        height={height}
        priority
        className={`object-contain ${
          size === 'auto' 
            ? 'h-60 w-auto md:h-60 lg:h-60' 
            : ''
        }`}
      />
      {showText && (
        <span className="text-xl font-bold text-sheepaw-blue">Sheepaw</span>
      )}
    </div>
  )
}


