import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import BenefitsList from '@/components/BenefitsList'
import FAQ from '@/components/FAQ'
import Schema from '@/components/Schema'
import { serviceSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Desarrollo Web y App con IA | CUSTOM AI LAB SOLUTIONS',
  description: 'Aplicaciones inteligentes. Desde cero o integradas en tu producto. MVP en 4-6 semanas.',
}

export default function DesarrolloWebAppIAPage() {
  const faqs = [
    {
      question: '¿Cuál es el costo de una app con IA?',
      answer:
        'Proyecto típico cuesta €15K-€50K. MVPs simples desde €8K. Proyectos enterprise €100K+. Primero hacemos proposal tras entender requerimientos.',
    },
    {
      question: '¿Cuánto tarda desarrollar una app con IA?',
      answer:
        'MVP funcional en 4-6 semanas. Versión completa 8-12 semanas. Depende de complejidad. Usamos metodología ágil con demos cada 2 semanas.',
    },
    {
      question: '¿Qué tech stack usan?',
      answer:
        'Frontend (React, Vue, Next.js), Backend (Node.js, Python, FastAPI), IA (OpenAI, Hugging Face, custom). Desplegamos en AWS/Azure/GCP. Cloud-native desde el inicio.',
    },
    {
      question: '¿Puedo escalar la app si crece más de lo esperado?',
      answer:
        'Diseñamos para escala desde el inicio. No hay surprises. Pasar de 1K a 1M usuarios es cuestión de infraestructura, no de rediseño.',
    },
    {
      question: '¿Qué sucede después del desarrollo? ¿Soporte?',
      answer:
        'Incluimos 3 meses de soporte técnico post-deploy. Bugs fixes, optimización de performance, pequeños cambios. Luego puedes mantener con tu equipo o contratar soporte continuo.',
    },
    {
      question: '¿Necesito un equipo técnico interno?',
      answer:
        'Para desarrollo: no (nosotros lo hacemos). Para mantener después: idealmente sí. Pero si no tienes, ofrecemos DevOps + soporte.',
    },
  ]

  const benefits = [
    {
      icon: '⚡',
      title: '3-4x Más Rápido',
      description: 'MVP en 4-6 semanas vs 6 meses tradicionales',
    },
    {
      icon: '🧠',
      title: 'Features IA sin Equipo ML',
      description: 'Expertise ML incluida. Tu crecimiento acelerado.',
    },
    {
      icon: '😍',
      title: 'UX 10x Mejor',
      description: 'Recomendadores, búsqueda semántica, personalizaci ón',
    },
    {
      icon: '📈',
      title: 'Escalable Desde Inicio',
      description: 'Cloud-native. Crece de 1K a 1M usuarios sin redesign',
    },
  ]

  const useCases = [
    {
      icon: '🛒',
      title: 'E-commerce',
      description: 'Motor de recomendaciones, búsqueda semántica, detección de fraude',
    },
    {
      icon: '🚀',
      title: 'SaaS',
      description: 'Automatización de workflows, análisis predictivo, alertas inteligentes',
    },
    {
      icon: '💳',
      title: 'Fintech',
      description: 'Scoring de riesgo, detección de anomalías, asesor financiero chatbot',
    },
    {
      icon: '🤝',
      title: 'Marketplace',
      description: 'Matching inteligente, precios dinámicos, recomendaciones',
    },
    {
      icon: '🏥',
      title: 'Healthcare',
      description: 'Triage automático, análisis de documentos, alertas clínicas',
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'Dashboards inteligentes, predicciones, insights automáticos',
    },
  ]

  return (
    <div>
      <Hero
        title="Aplicaciones inteligentes. Desde cero o en tu producto."
        subtitle="MVP en 4-6 semanas sin equipo ML interno"
        description="Stack moderno, cloud-native, features de IA integradas desde el diseño. Escalable para millones de usuarios."
        cta={{
          text: 'Solicita una Consulta Gratuita',
          href: '/contacto',
        }}
      />

      {/* Problema */}
      <section className="section section-light">
        <div className="container">
          <h2>El problema: Competidores con IA ya te llevan ventaja</h2>
          <p>
            Tus usuarios esperan experiencias inteligentes. Features de IA toman tiempo y dinero
            desarrollar. Sin equipo ML interno, estás bloqueado. Tu competencia ya integró IA y les
            va mejor.
          </p>
          <p>
            <strong>Resultado: Pérdida de usuarios, market share, oportunidades.</strong>
          </p>
        </div>
      </section>

      {/* Solución */}
      <section className="section">
        <div className="container">
          <h2>Nuestra solución: IA embedded en tu aplicación</h2>
          <p>
            Stack moderno, deployment en 4-6 semanas. Sin equipo ML interno necesario. Toda la
            expertise incluida.
          </p>

          <BenefitsList benefits={benefits} columns={4} />
        </div>
      </section>

      {/* Proceso */}
      <section className="section section-light">
        <div className="container">
          <h2>Cómo funciona: Metodología ágil</h2>

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
              <h3>Discovery</h3>
              <p>Entendemos tu producto. Definimos features IA prioritarios.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>2</div>
              <h3>Desarrollo</h3>
              <p>Sprints ágiles. MVP cada 2 semanas. Feedback continuo.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>3</div>
              <h3>Deploy & Support</h3>
              <p>Lanzamiento en producción. 3 meses de soporte incluidos.</p>
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
          <h2>¿Listo para llevar tu producto al siguiente nivel?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Consulta gratuita de 30 minutos. Diseñamos tu MVP con IA.
          </p>
          <Link href="/contacto" className="btn btn-primary">
            Solicita una Consulta Gratuita
          </Link>
        </div>
      </section>

      {/* Service Schema */}
      <Schema
        schema={serviceSchema(
          'Desarrollo Web y App con IA',
          'MVP en 4-6 semanas. Next.js, React, Python, Node.js. Cloud-native. Escalable.',
          'https://customailab.com/servicios/desarrollo-web-app-ia'
        )}
      />

      {/* FAQ Schema */}
      <Schema
        schema={faqPageSchema([
          {
            question: '¿Cuál es el costo de desarrollar una app con IA?',
            answer:
              'MVP: €15-30K (4-6 semanas). Producto completo: €50-150K+. Depende del scope.',
          },
          {
            question: '¿Cuánto tiempo toma el MVP?',
            answer:
              '4-6 semanas. Funcionalidad core + UI básica. Perfecto para validar mercado.',
          },
          {
            question: '¿Qué tecnología usan?',
            answer:
              'Next.js/React (frontend), Node.js/Python (backend), PostgreSQL/MongoDB (BD), AWS/Azure (cloud).',
          },
          {
            question: '¿Me transferen el código?',
            answer:
              'Sí. Código limpio, documentado, con tests. Puedes mantenerlo internamente o contratarnos.',
          },
          {
            question: '¿Hacen mantenimiento post-lanzamiento?',
            answer:
              'Sí. Mantenimiento, bugfixes, escalado, optimización. Planes desde €1K/mes.',
          },
          {
            question: '¿Es cloud-native?',
            answer:
              'Sí. Arquitectura serverless, auto-scaling, global CDN. Producción-ready desde el día 1.',
          },
        ])}
      />
    </div>
  )
}
