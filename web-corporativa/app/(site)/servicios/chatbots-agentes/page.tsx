import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import BenefitsList from '@/components/BenefitsList'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Chatbots y Agentes IA | Soporte 24/7 | CUSTOM AI LAB SOLUTIONS',
  description: 'Agentes conversacionales inteligentes. 60-80% de consultas resueltas automáticamente. Soporte 24/7.',
}

export default function ChatbotsAgentesPage() {
  const faqs = [
    {
      question: '¿Qué diferencia hay entre un chatbot normal y tu agente?',
      answer:
        'Chatbots normales usan reglas (if-then-else). Nuestros agentes usan IA real (LLMs). Entienden contexto, razonan, acceden a datos en tiempo real, toman acciones en sistemas.',
    },
    {
      question: '¿Cuántas conversaciones puede manejar simultáneamente?',
      answer:
        'Teóricamente ilimitadas. Escalamos automáticamente. Podemos pasar de 10 a 10,000 chats sin hacer nada. El costo se ajusta al uso.',
    },
    {
      question: '¿En qué idiomas funciona?',
      answer:
        'Español, inglés, portugués, francés, alemán, italiano. Cualquier idioma que soporte OpenAI o similar. Entrenamos el agente en tu idioma de negocio.',
    },
    {
      question: '¿Qué pasa si el agente no entiende una pregunta?',
      answer:
        'Escalamos a un humano automáticamente. Guardamos la conversación completa para que tu equipo sepa exactamente qué pasó.',
    },
    {
      question: '¿Se integra con mi CRM/base de datos?',
      answer:
        'Sí. Conectamos con cualquier API. El agente puede consultar información, crear registros, enviar emails, actualizar tickets. Todo automatizado.',
    },
    {
      question: '¿Cuál es el costo mensual?',
      answer:
        'Setup inicial €3K-€8K + costo por conversación (típicamente €0.10-€0.50 dependiendo de complejidad). Una empresa mediana con 1000 chats/mes gasta €150-€300/mes.',
    },
  ]

  const benefits = [
    {
      icon: '⏰',
      title: '24/7 Disponible',
      description: 'Soporte sin horarios. Español e idiomas ilimitados',
    },
    {
      icon: '🤖',
      title: '60-80% Resolución',
      description: 'Mayoría de consultas se resuelven sin intervención humana',
    },
    {
      icon: '⚡',
      title: 'Integración Real',
      description: 'Conecta con tu CRM, bases de datos, sistemas',
    },
    {
      icon: '📈',
      title: 'Aprendizaje Continuo',
      description: 'Mejora cada semana basado en conversaciones reales',
    },
  ]

  const useCases = [
    {
      icon: '🛒',
      title: 'E-commerce',
      description: 'Consultas de productos, seguimiento de órdenes, devoluciones',
    },
    {
      icon: '🏦',
      title: 'Banca',
      description: 'Saldos, transferencias, bloqueo de tarjeta, cambio de contraseña',
    },
    {
      icon: '📱',
      title: 'Telecomunicaciones',
      description: 'Facturación, cambios de plan, soporte técnico',
    },
    {
      icon: '🚀',
      title: 'SaaS',
      description: 'Onboarding, FAQ, troubleshooting, escalada a soporte',
    },
    {
      icon: '🏥',
      title: 'Salud',
      description: 'Reservas, cancelaciones, cambios de cita médica',
    },
    {
      icon: '🎯',
      title: 'Ventas',
      description: 'Calificación de leads, respuesta a preguntas, presupuestos',
    },
  ]

  return (
    <div>
      <Hero
        title="Agentes IA que atienden tu negocio 24/7"
        subtitle="60-80% de consultas resueltas sin intervención humana"
        description="Servicio al cliente inteligente, sin empleados, escalable a millones de conversaciones simultáneas."
        cta={{
          text: 'Solicita una Demostración Gratuita',
          href: '/contacto',
        }}
      />

      {/* Problema */}
      <section className="section section-light">
        <div className="container">
          <h2>El problema: Saturación de tickets, costo por contacto alto</h2>
          <p>
            Tickets se acumulan. Disponibilidad limitada (solo horario de oficina). Costo por
            contacto crece con volumen. Muchas preguntas repetidas, respuestas lentas.
          </p>
          <p>
            <strong>Resultado: Clientes insatisfechos, costos operacionales altos.</strong>
          </p>
        </div>
      </section>

      {/* Solución */}
      <section className="section">
        <div className="container">
          <h2>Nuestra solución: Agentes conversacionales que resuelven</h2>
          <p>
            IA que entiende contexto, accede a datos reales, toma acciones en tus sistemas.
            Resolver 60-80% de consultas sin intervención humana. Escalable a millones de
            conversaciones.
          </p>

          <BenefitsList benefits={benefits} columns={4} />
        </div>
      </section>

      {/* Proceso */}
      <section className="section section-light">
        <div className="container">
          <h2>Cómo funciona: Integración con tu CRM/APIs</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              marginTop: '2rem',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>1</div>
              <h3>Entrenamiento</h3>
              <p>Compartimos tu documentación. El agente aprende tu negocio.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>2</div>
              <h3>Integración</h3>
              <p>Conectamos con tu CRM, APIs. Acceso a datos en tiempo real.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>3</div>
              <h3>Lanzamiento</h3>
              <p>Deploy en canales (WhatsApp, web, email). Live con soporte.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Casos de Uso</h2>
          <BenefitsList benefits={useCases} columns={3} />
        </div>
      </section>

      {/* FAQs */}
      <section className="section section-light">
        <div className="container">
          <h2>Preguntas Frecuentes</h2>
          {faqs.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>¿Listo para mejorar tu soporte?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Demostración gratuita de 30 minutos. Verás exactamente cómo funciona tu agente.
          </p>
          <Link href="/contacto" className="btn btn-primary">
            Solicita una Demostración
          </Link>
        </div>
      </section>
    </div>
  )
}
