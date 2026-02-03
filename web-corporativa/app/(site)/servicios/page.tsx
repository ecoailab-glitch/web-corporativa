import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Servicios IA | CUSTOM AI LAB SOLUTIONS',
  description: 'Automatización, chatbots y desarrollo web con IA. Tres servicios, un objetivo: transformar tu negocio.',
}

export default function ServiciosPage() {
  const services = [
    {
      title: 'Automatización con IA',
      description: 'Procesos que trabajan 24/7. Automatiza tareas repetitivas, reduce errores, escala sin empleados.',
      benefits: ['40-60% ahorro de tiempo', 'Integración con sistemas existentes', 'ROI en 90 días'],
      href: '/servicios/ia-procesos',
      icon: '⚙️',
    },
    {
      title: 'Chatbots y Agentes IA',
      description: 'Soporte inteligente 24/7. Resuelve 60-80% de consultas automáticamente. Disponible en cualquier idioma.',
      benefits: ['Disponibilidad 24/7', 'Resolución automática de consultas', 'Integración con tu CRM'],
      href: '/servicios/chatbots-agentes',
      icon: '💬',
    },
    {
      title: 'Desarrollo Web/App IA',
      description: 'Aplicaciones inteligentes. MVP en 4-6 semanas. Features de IA sin equipo ML interno.',
      benefits: ['3-4x más rápido', 'Stack moderno y escalable', 'Expertise ML incluida'],
      href: '/servicios/desarrollo-web-app-ia',
      icon: '🚀',
    },
  ]

  return (
    <div>
      <Hero
        title="Servicios de IA para empresas"
        subtitle="Tres soluciones especializadas para transformar tu negocio"
        cta={{
          text: 'Solicita tu Auditoría Gratuita',
          href: '/contacto',
        }}
      />

      <section className="section section-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
            <h3 style={{ textAlign: 'center' }}>¿Cuál es tu caso?</h3>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', marginTop: '1rem' }}>
              Haz clic en el servicio que mejor se ajusta a tu necesidad. O si no estás seguro,
              <strong> solicita una auditoría gratuita </strong>
              y te ayudaremos a identificar las mejores oportunidades.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
