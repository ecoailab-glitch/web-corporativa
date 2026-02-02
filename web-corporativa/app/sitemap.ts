import type { MetadataRoute } from 'next'
import { getAllPostSlugs } from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://customailab.com'
  const postSlugs = getAllPostSlugs()

  const blogRoutes = postSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2026-02-02'),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    // Home
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2026-01-29'),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },

    // Servicios Hub
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date('2026-01-29'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },

    // Servicio: IA Procesos
    {
      url: `${baseUrl}/servicios/ia-procesos`,
      lastModified: new Date('2026-01-29'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },

    // Servicio: Chatbots
    {
      url: `${baseUrl}/servicios/chatbots-agentes`,
      lastModified: new Date('2026-01-29'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },

    // Servicio: Desarrollo Web
    {
      url: `${baseUrl}/servicios/desarrollo-web-app-ia`,
      lastModified: new Date('2026-01-29'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },

    // Blog Hub
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-02-02'),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },

    // Blog Posts
    ...blogRoutes,

    // Sobre Nosotros
    {
      url: `${baseUrl}/sobre-nosotros`,
      lastModified: new Date('2026-01-29'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },

    // Casos
    {
      url: `${baseUrl}/casos`,
      lastModified: new Date('2026-01-29'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },

    // Contacto
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date('2026-01-29'),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]
}
