"use client"
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { useI18n } from '@/lib/contexts/I18nContext'
import Gallery from '@/components/Gallery'

export default function Home() {
  // localizable about section
  const { t } = useI18n()
  return (
    <main className="min-h-screen pt-16 md:pt-20 lg:pt-24">
      <Navbar />
      <Hero />
      <section id="about" className="section-padding bg-white scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">{t.about?.title ?? 'About Us'}</h2>
          <p className="text-gray-600 max-w-3xl">{t.about?.body ?? ''}</p>
        </div>
      </section>
      <Services />
      <Gallery />
      <ContactForm />
      <Footer />
    </main>
  )
}

