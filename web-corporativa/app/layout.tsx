import type { Metadata } from 'next'
import { Inter, Poppins, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import MouseWaves from '@/components/MouseWaves'
import Chatbot from '@/components/Chatbot'
import './globals.css'
import './animations.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
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
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script 
              strategy="beforeInteractive" 
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              async
            />
            <Script
              id="gtag-init"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="antialiased" style={{ position: 'relative' }}>
        <MouseWaves />
        <Chatbot />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  )
}
