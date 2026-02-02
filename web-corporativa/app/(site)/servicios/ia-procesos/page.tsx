import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import BenefitsList from '@/components/BenefitsList'
import FAQ from '@/components/FAQ'
import Schema from '@/components/Schema'
import ServicePageWrapper from '@/components/ServicePageWrapper'
import { serviceSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Automatización con IA | Procesos Inteligentes | CUSTOM AI LAB SOLUTIONS',
  description:
    'Automatiza procesos manuales 24/7. ROI en 90 días. Casos en fintech, retail, manufactura.',
}

export default function IAProcesoPage() {
  const faqs = [
    {
      question: '¿Cuál es el costo de implementación?',
      answer:
        'Depende de la complejidad. Proyectos típicos oscilan entre €5K-€20K. Primero hacemos auditoría gratuita donde estimamos el costo y ROI exacto para tu caso.',
    },
    {
      question: '¿Cuánto tiempo tarda la implementación?',
      answer:
        'Usualmente 4-8 semanas desde auditoría hasta producción. Arrancamos con MVP funcional en las primeras 2 semanas.',
    },
    {
      question: '¿Necesito cambiar mi infraestructura actual?',
      answer:
        'No necesariamente. Nos integramos con tus sistemas (ERP, CRM, bases de datos). Si usan APIs, es ideal. Si no, hacemos la integración nosotros.',
    },
    {
      question: '¿Qué soporte dan después del lanzamiento?',
      answer:
        'Incluimos 3 meses de soporte técnico. Monitoreamos la solución, hacemos ajustes, optimizamos. Luego puedes contratar soporte continuo o mantener con tu equipo.',
    },
    {
      question: '¿Qué pasa si la IA comete errores?',
      answer:
        'Configuramos reglas de validación. Temas críticos siempre pasan por revisión humana. El objetivo es reducir errores, no eliminarlos.',
    },
    {
      question: '¿Necesito un equipo técnico interno?',
      answer:
        'No para la implementación. Pero sí alguien que entienda el proceso que querés automatizar. Hacemos training a tu equipo como parte del proyecto.',
    },
  ]

  const benefits = [
    {
      icon: '⏱️',
      title: '40-60% Ahorro de Tiempo',
      description: 'Tareas que tomaban horas ahora se resuelven en minutos',
    },
    {
      icon: '✅',
      title: 'Cero Errores Humanos',
      description: 'Validación automática, procesamiento consistente',
    },
    {
      icon: '⚡',
      title: '10x Más Rápido',
      description: 'Decisiones en tiempo real. Escalabilidad infinita.',
    },
    {
      icon: '🔗',
      title: 'Integración Transparente',
      description: 'Conecta con tus sistemas sin disrupciones',
    },
  ]

  const useCases = [
    {
      icon: '🏦',
      title: 'Fintech & Banca',
      description: 'Aprobación automática de créditos. Análisis de documentos + scoring.',
    },
    {
      icon: '📦',
      title: 'E-commerce & Retail',
      description: 'Clasificación automática de órdenes. Routing a almacenes.',
    },
    {
      icon: '🛡️',
      title: 'Seguros',
      description: 'Validación de reclamaciones. Decisión de pago automático.',
    },
    {
      icon: '🏭',
      title: 'Manufactura',
      description: 'Inspección visual automática. Detección de defectos.',
    },
    {
      icon: '👥',
      title: 'RRHH',
      description: 'Clasificación de CVs. Preselección automática.',
    },
    {
      icon: '📊',
      title: 'Datos & Análisis',
      description: 'Extracción automática. Validación de información.',
    },
  ]

  return (
    <ServicePageWrapper
      serviceId="ia-procesos"
      serviceName="Automatización de Procesos con IA"
    >
      <div>
        <Hero
          title="Automatiza procesos empresariales con IA"
          subtitle="Trabajo inteligente 24/7. Sin errores. Sin cansancio."
          description="Reducción de tareas manuales en 40-60%. Implementación en 90 días. ROI medible."
          cta={{
            text: 'Solicita tu Auditoría IA Gratuita (15 min)',
            href: '/contacto',
          }}
        />

      {/* Problema */}
      <section className="section section-light">
        <div className="container">
          <h2>El problema: Tareas manuales que consumen recursos</h2>
          <p>
            Tareas repetitivas consumen 40-50% del tiempo de tu equipo. Personal dedicado solo a
            entrada de datos, validaciones, clasificación. Errores que requieren corrección manual.
            Escalabilidad bloqueada: más volumen = más empleados.
          </p>
          <p>
            <strong>Resultado: Equipo saturado, ineficiencia, oportunidades perdidas.</strong>
          </p>
        </div>
      </section>

      {/* Solución */}
      <section className="section">
        <div className="container">
          <h2>Nuestra solución: Automación inteligente 24/7</h2>
          <p>
            Implementamos automaciones que trabajan 24/7, sin errores, sin cansancio. Tu equipo
            se enfoca en lo estratégico. IA maneja lo repetitivo.
          </p>

          <BenefitsList benefits={benefits} columns={4} />
        </div>
      </section>

      {/* Proceso */}
      <section className="section section-light">
        <div className="container">
          <h2>Cómo funciona: Integración sin complejidad</h2>

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
              <h3>Diagnóstico</h3>
              <p>Analizamos tu proceso. Identificamos automatización + ROI potencial.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>2</div>
              <h3>Desarrollo</h3>
              <p>Construimos la solución. Testing. Integración con tus sistemas.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>3</div>
              <h3>Lanzamiento</h3>
              <p>Deploy en producción. Training. Soporte continuo incluido.</p>
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
          <h2>¿Listo para optimizar tus procesos?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Auditoría gratuita (15 min). Sin compromiso. Te contaremos exactamente cuánto
            podrías ahorrar.
          </p>
          <Link href="/contacto" className="btn btn-primary">
            Solicita tu Auditoría IA Gratuita
          </Link>
        </div>
      </section>

      {/* Service Schema */}
      <Schema
        schema={serviceSchema(
          'Automatización de Procesos con IA',
          'Automatiza procesos manuales 24/7. ROI en 90 días. Casos en fintech, retail, manufactura.',
          'https://customailab.com/servicios/ia-procesos'
        )}
      />

      {/* FAQ Schema */}
      <Schema
        schema={faqPageSchema([
          {
            question: '¿Cuánto cuesta la automatización de procesos?',
            answer:
              'El costo varía según complejidad. Desde €5K para procesos simples a €50K+ para orquestaciones complejas. ROI típico: 6-18 meses.',
          },
          {
            question: '¿Cuánto tiempo toma implementar?',
            answer:
              'De 4-12 semanas según el alcance. MVP funcional en 4 semanas. Optimización y escalado posterior.',
          },
          {
            question: '¿Se integra con mis sistemas legacy?',
            answer:
              'Sí. Trabajamos con ERP, CRM, bases de datos antiguas. API, web scraping, RPA según sea necesario.',
          },
          {
            question: '¿Qué ROI puedo esperar?',
            answer:
              'Ahorro típico: 40-60% en costos operacionales. Reducción de errores: 90%+. Tiempo de procesamiento: -70%.',
          },
          {
            question: '¿Necesito equipo técnico interno?',
            answer:
              'No. Nosotros manejamos la implementación. Te capacitamos para mantenimiento básico.',
          },
          {
            question: '¿Hay soporte post-implementación?',
            answer:
              'Sí. 6 meses de soporte técnico incluido. Monitoreo, ajustes, optimizaciones continuas.',
          },
        ])}
      />
      </div>
    </ServicePageWrapper>
  )
}
}
