import Link from 'next/link'
import Hero from '@/components/Hero'
import TechHand from '@/components/TechHand'
import ServiceCard from '@/components/ServiceCard'
import ServiceCardHover from '@/components/ServiceCardHover'
import BenefitsList from '@/components/BenefitsList'
import Testimonial from '@/components/Testimonial'
import Schema from '@/components/Schema'
import { organizationSchema } from '@/lib/schema'

export default function Home() {
  const services = [
    {
      title: 'IA en Procesos',
      description: 'Automatiza tareas manuales 24/7. Sin errores, sin cansancio.',
      benefits: ['40-60% ahorro de tiempo', 'Cero errores humanos', 'Escalabilidad infinita'],
      href: '/servicios/ia-procesos',
      icon: '⚙️',
    },
    {
      title: 'Chatbots y Agentes IA',
      description: 'Soporte al cliente inteligente disponible 24/7 en cualquier idioma.',
      benefits: ['60-80% consultas resueltas automáticamente', 'Disponibilidad 24/7', 'Integración con tu CRM'],
      href: '/servicios/chatbots-agentes',
      icon: '💬',
    },
    {
      title: 'Desarrollo Web/App IA',
      description: 'Aplicaciones inteligentes. MVP en 4-6 semanas sin equipo ML.',
      benefits: ['3-4x más rápido que lo tradicional', 'Funcionalidades de IA integradas', 'Escalable desde el inicio'],
      href: '/servicios/desarrollo-web-app-ia',
      icon: '🚀',
    },
  ]

  const benefits = [
    {
      icon: '📊',
      title: '40-60% Ahorro',
      description: 'Reducción de tareas manuales y costos operacionales',
    },
    {
      icon: '⏰',
      title: '24/7 Disponible',
      description: 'Soluciones que trabajan sin parar, sin empleados adicionales',
    },
    {
      icon: '💰',
      title: 'ROI en 90 días',
      description: 'Resultados medibles. Inversión que se paga rápidamente',
    },
    {
      icon: '🎯',
      title: 'Sin R&D Interno',
      description: 'Nuestra expertise. Tu crecimiento. Implementación completa',
    },
  ]

  const partners = [
    {
      name: 'Menttoriza',
      image: '/images/partners/logo-menttoriza.png',
    },
    {
      name: 'KoKoLife',
      image: '/images/partners/logo-kokolife.png',
    },
    {
      name: 'EcoAI Lab',
      image: '/images/partners/logo-ecoai-lab.png',
    },
    {
      name: 'Unicornio Solitario',
      image: '/images/partners/logo-unicornio-solitario.png',
    },
    {
      name: 'UvEmpren',
      image: '/images/partners/logo-uvempren.png',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Automatiza tu empresa con IA"
        subtitle="Reduce costos, genera ingresos. Implementado en 90 días."
        description="CUSTOM AI LAB SOLUTIONS lleva inteligencia artificial a tu negocio. Sin equipo técnico. Sin inversión en R&D. Soluciones probadas y escalables."
        cta={{
          text: 'Solicita tu Auditoría IA Gratuita (15 min)',
          href: '/contacto',
        }}
        centered={false}
        visual={<TechHand />}
      />

      {/* Schema Organization */}
      <Schema schema={organizationSchema()} />

      {/* Páginas Principales */}
      <section className="section section-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Explora Nuestras Soluciones</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <ServiceCardHover
              href="/servicios/ia-procesos"
              title="IA en Procesos"
              description="Automatiza tareas manuales 24/7. Sin errores, sin cansancio."
            />

            <ServiceCardHover
              href="/servicios/chatbots-agentes"
              title="Chatbots y Agentes IA"
              description="Soporte al cliente inteligente disponible 24/7."
            />

            <ServiceCardHover
              href="/servicios/desarrollo-web-app-ia"
              title="Desarrollo Web/App IA"
              description="Aplicaciones inteligentes. MVP en 4-6 semanas."
            />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section section-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Partners</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', alignItems: 'center', justifyItems: 'center' }}>
            {partners.map((partner, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <img
                  src={partner.image}
                  alt={partner.name}
                  style={{
                    width: '100%',
                    maxWidth: '180px',
                    height: 'auto',
                    objectFit: 'contain',
                    marginBottom: '0.5rem',
                  }}
                />
                <p style={{ fontSize: '0.9rem', color: '#666' }}>{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra Solución */}
      <section className="section section-light">
        <div className="container">
          <h2>Nuestros Servicios</h2>
          <p>
            CUSTOM AI LAB SOLUTIONS implementa soluciones IA que se integran con tus sistemas existentes y
            generan ROI en 3-6 meses.
          </p>

          <BenefitsList benefits={benefits} columns={4} />
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="section section-light">
        <div className="container">
          <h2>3 pasos hacia la transformación</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>1️⃣</div>
              <h3>Auditoría (semana 1)</h3>
              <p>Análisis de procesos, identificación de oportunidades, estimación de ROI</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>2️⃣</div>
              <h3>Implementación (semana 2-8)</h3>
              <p>Desarrollo, integración con sistemas, testing y ajustes</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>3️⃣</div>
              <h3>Escalado (semana 9+)</h3>
              <p>Training al equipo, soporte técnico, optimización continua</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="section section-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nuestros Servicios</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section section-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Lo que Dicen Nuestros Clientes</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            <Testimonial
              quote="Implementaron un agente que resuelve el 70% de nuestras consultas sin intervención humana."
              author="Carlos M."
                role="CTO"
                company="Empresa Tech"
            />

            <Testimonial
              quote="La automatización nos permitió escalar operaciones sin expandir el equipo."
              author="María L."
                role="Responsable de Operaciones"
                company="Empresa Tech"
            />

            <Testimonial
              quote="Integraron IA en nuestro producto. El engagement subió significativamente."
              author="Juan P."
                role="Responsable de Producto"
                company="Empresa Tech"
            />

            <Testimonial
              quote="La solución fue implementada rápidamente y generó ROI en los primeros 3 meses."
              author="Sofía D."
                role="Directora General"
                company="Startup Tech"
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section section-light">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>¿Cuánto podrías ahorrar con IA?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Calcula el impacto en tu negocio. Auditoría gratuita, sin compromiso.
          </p>
          <Link href="/contacto" className="btn btn-primary">
            Solicita tu Auditoría IA Gratuita
          </Link>
        </div>
      </section>
    </div>
  )
}
