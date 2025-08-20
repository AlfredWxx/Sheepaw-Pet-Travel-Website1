import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sheepaw Pet Travel - Professional Pet Transportation Service',
  description: 'Canada ↔ China pet travel agent. FAVN test, CFIA Health Certificate, Animal Health Certificate, CIQ procedures, guidance and premium planning.',
  keywords: 'pet travel,Canada to China pet travel agent,China to Canada pet travel,FAVN,CFIA health certificate,Animal Health Certificate,CIQ,pet immigration,pet shipping',
  authors: [{ name: 'Sheepaw Pet Travel' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/Sheepaw Logo2 Transparent.svg',
    shortcut: '/Sheepaw Logo2 Transparent.svg',
    apple: '/Sheepaw Logo2 Transparent.svg',
  },
  openGraph: {
    title: 'Sheepaw Pet Travel - Professional Pet Transportation Service',
    description: 'Canada ↔ China pet travel agent. FAVN test, CFIA Health Certificate, Animal Health Certificate, CIQ procedures, guidance and premium planning.',
    images: ['/Sheepaw Logo2 Transparent.svg'],
  },
  twitter: {
    card: 'summary',
    title: 'Sheepaw Pet Travel - Professional Pet Transportation Service',
    description: 'Canada ↔ China pet travel agent. FAVN test, CFIA Health Certificate, Animal Health Certificate, CIQ procedures, guidance and premium planning.',
    images: ['/Sheepaw Logo2 Transparent.svg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Sheepaw Logo2 Transparent.svg" />
        <link rel="shortcut icon" href="/Sheepaw Logo2 Transparent.svg" />
        <link rel="apple-touch-icon" href="/Sheepaw Logo2 Transparent.svg" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
