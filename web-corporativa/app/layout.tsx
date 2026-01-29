import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'CUSTOM AI LAB SOLUTIONS - Soluciones IA para Empresas',
  description:
    'Automatiza procesos, chatbots inteligentes y aplicaciones con IA. Implementado en 90 días. ROI medible.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://customailab.com'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    title: 'CUSTOM AI LAB SOLUTIONS - Soluciones IA para Empresas',
    description:
      'Automatiza procesos, chatbots inteligentes y aplicaciones con IA. Implementado en 90 días. ROI medible.',
    siteName: 'CUSTOM AI LAB SOLUTIONS',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
