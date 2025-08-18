import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sheepaw Pet Travel - Professional Pet Transportation Service',
  description: 'Professional, safe, and caring cross-border pet transportation service between China and Canada. Let us take care of your furry companions.',
  keywords: 'pet transportation,China-Canada pet transport,pet immigration,pet shipping,Canada pet transport,China pet transport',
  authors: [{ name: 'Sheepaw Pet Travel' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
