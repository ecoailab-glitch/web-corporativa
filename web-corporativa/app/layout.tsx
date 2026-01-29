import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EcoAI Lab - Soluciones IA para Empresas',
  description:
    'Automatiza procesos, chatbots inteligentes y aplicaciones con IA. Implementado en 90 días. ROI medible.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ecoailab.com'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    title: 'EcoAI Lab - Soluciones IA para Empresas',
    description:
      'Automatiza procesos, chatbots inteligentes y aplicaciones con IA. Implementado en 90 días. ROI medible.',
    siteName: 'EcoAI Lab',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  )
}
