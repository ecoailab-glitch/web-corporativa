import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import BenefitsList from '@/components/BenefitsList'
import CaseStudy from '@/components/CaseStudy'
import Testimonial from '@/components/Testimonial'

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
      benefits: ['3-4x más rápido que lo tradicional', 'Features IA integradas', 'Escalable desde el inicio'],
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

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Automatiza tu empresa con IA"
        subtitle="Reduce costos, genera ingresos. Implementado en 90 días."
        description="EcoAI Lab lleva inteligencia artificial a tu negocio. Sin equipo técnico. Sin inversión en R&D. Soluciones probadas en fintech, retail, manufactura y servicios."
        cta={{
          text: 'Solicita tu Auditoría IA Gratuita (15 min)',
          href: '/contacto',
        }}
        backgroundImage="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      />

      {/* El Problema */}
      <section className="section section-light">
        <div className="container">
          <h2>Tu empresa se queda atrás con procesos manuales</h2>
          <p>
            Tareas repetitivas consumen 40-50% del tiempo de tu equipo. Servicios al cliente
            atienden solo en horario de oficina. Tomar decisiones sin datos en tiempo real.
          </p>
          <p>
            <strong>La IA no es futuro, es presente. Tus competidores ya la usan.</strong>
          </p>
        </div>
      </section>

      {/* Nuestra Solución */}
      <section className="section">
        <div className="container">
          <h2>IA que funciona. Desde el día 1.</h2>
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
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nuestros Servicios</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="section section-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Casos de Éxito</h2>
        </div>
      </section>

      <CaseStudy
        index={0}
        company="Startup Fintech"
        role="CTO"
        challenge="20 personas en soporte atendiendo solo en horario de oficina, saturadas"
        solution="Implementamos agente IA que resuelve 70% de consultas sin intervención humana"
        result="Pasaron de 20 personas en soporte a 5. ROI pagado en 3 meses."
        resultNumber="70%"
        quote="Implementaron un agente que resuelve 70% de nuestras consultas sin intervención humana. En 3 meses pagamos la inversión."
      />

      <CaseStudy
        index={1}
        company="E-commerce Retail"
        role="Operations Manager"
        challenge="500 órdenes diarias procesadas manualmente. Errores frecuentes, escalabilidad bloqueada"
        solution="Automatización inteligente de procesamiento de órdenes con validación automática"
        result="Pasaron de 500 a 5000 órdenes diarias sin expandir el equipo. Errores 95% reducidos."
        resultNumber="95%"
        quote="La automatización de órdenes nos permitió pasar de 500 a 5000 órdenes diarias sin expandir el equipo. Errores se redujeron 95%."
      />

      <CaseStudy
        index={2}
        company="Manufactura"
        role="Plant Manager"
        challenge="Inspección manual de calidad es lenta y pierde defectos. Cuellos de botella"
        solution="Visión por computadora para detección automática de defectos en línea de producción"
        result="Inspectores ahora revisan lo que IA marca como potencial defecto. Productividad +30%."
        resultNumber="30%"
        quote="Instalaron visión por computadora. Nuestros inspectores ahora revisan lo que la IA marca como potencial defecto. Productividad +30%."
      />

      {/* Testimonios */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Lo que Dicen Nuestros Clientes</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            <Testimonial
              quote="Implementaron un agente que resuelve 70% de nuestras consultas sin intervención humana. En 3 meses pagamos la inversión."
              author="Carlos M."
              role="CTO"
              company="Startup Fintech"
            />

            <Testimonial
              quote="La automatización de órdenes nos permitió pasar de 500 a 5000 órdenes diarias sin expandir el equipo."
              author="María L."
              role="Operations Manager"
              company="Retail Online"
            />

            <Testimonial
              quote="Instalaron visión por computadora. Productividad subió 30% y detectamos defectos que antes se pasaban."
              author="Juan P."
              role="Plant Manager"
              company="Manufactura"
            />

            <Testimonial
              quote="Integraron IA en nuestro producto. Users aman la búsqueda semántica. Engagement subió 45%."
              author="Sophie D."
              role="Product Manager"
              company="SaaS"
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
