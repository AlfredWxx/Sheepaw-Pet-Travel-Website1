'use client'

import Image from 'next/image'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1600&auto=format&fit=crop',
    alt: 'Traveler with dog at airport terminal',
  },
  {
    src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop',
    alt: 'Happy dog looking up outdoors',
  },
  {
    src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop',
    alt: 'Cat in a travel bag',
  },
  {
    src: 'https://images.unsplash.com/photo-1519066629447-267fffa62d05?q=80&w=1600&auto=format&fit=crop',
    alt: 'Couple traveling with pet',
  },
]

export default function Gallery() {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50" aria-label="Photo gallery">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Gallery</h2>
        <p className="text-gray-600 mb-8">People, pets and travel moments</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((p, i) => (
            <div key={i} className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden shadow-md">
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


