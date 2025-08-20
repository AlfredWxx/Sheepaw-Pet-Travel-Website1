'use client'

import Image from 'next/image'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Image
        src="/logo.png"
        alt="Sheepaw Pet Travel logo"
        width={32}
        height={32}
        priority
      />
      <span className="text-xl font-bold text-gradient">Sheepaw</span>
    </div>
  )
}


