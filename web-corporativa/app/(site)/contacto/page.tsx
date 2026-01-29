import type { Metadata } from 'next'
import ContactoPageClient from './contacto-client'

export const metadata: Metadata = {
  title: 'Contacto | EcoAI Lab',
  description: 'Cuéntanos tu reto. Auditoría IA gratuita en 15 minutos. Sin compromisos.',
}

export default function ContactoPage() {
  return <ContactoPageClient />
}
