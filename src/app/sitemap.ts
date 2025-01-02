import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trippal.co'
  
  // 基础路由
  const routes = [
    '',
    '/guide/China-visa-free-Policy-144',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 多语言路由
  const locales = ['en', 'ja', 'ko']
  const localizedRoutes = locales.flatMap((locale) =>
    [
      '',
    ].map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  )

  return [...routes, ...localizedRoutes]
} 