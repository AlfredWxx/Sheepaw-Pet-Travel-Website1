import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sheepaw-pet-travel.vercel.app'
  
  const locales = ['zh', 'en', 'fr']
  const routes = ['', '/cases', '/services/china-to-canada', '/services/canada-to-china', '/services/document-service']
  
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  // Add routes for each locale
  locales.forEach(locale => {
    routes.forEach(route => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })
  
  // Add case detail pages
  const casesSlugs = ['golden-retriever', 'persian-cat', 'french-bulldog']
  locales.forEach(locale => {
    casesSlugs.forEach(slug => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/cases/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    })
  })
  
  return sitemapEntries
}
