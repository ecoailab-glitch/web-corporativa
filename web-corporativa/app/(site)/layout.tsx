import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CUSTOM AI LAB SOLUTIONS - Soluciones IA para Empresas',
  description:
    'Automatiza procesos, chatbots inteligentes y aplicaciones con IA. Implementado en 90 días. ROI medible.',
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
