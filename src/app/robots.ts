import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: ['/api/'],
      allow: ['/', '/sitemap.xml'],
    },
    sitemap: 'https://trippal.co/sitemap.xml',
  }
} 