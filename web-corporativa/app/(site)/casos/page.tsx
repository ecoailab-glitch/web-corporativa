import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import CaseStudy from '@/components/CaseStudy'

export const metadata: Metadata = {
  title: 'Casos de Éxito | EcoAI Lab',
  description: 'Proyectos reales con ROI comprobado. Automatización, chatbots, desarrollo web con IA.',
}

export default function CasosPage() {
  const cases = [
    {
      company: 'Banco Fintech Spain',
      role: 'Automatización de procesos de compliance',
      challenge:
        'Procesaban 50K documentos al mes manualmente. 5 personas dedicadas. Errores recurrentes. Auditoría rechazaba 15% de casos.',
      solution:
        'Implementamos IA de clasificación y validación. OCR inteligente. RPA para procesos post-validación. Integración con sistema legacy.',
      result: '90% automatización. De 5 personas a 1. Cero errores de auditoría. 3.2M€/año en reducción de costos.',
      resultNumber: '€3.2M/año',
      quote: 'Pensamos que era imposible automatizar compliance. EcoAI demostró lo contrario en 8 semanas.',
    },
    {
      company: 'Retail Especializado (Fashion)',
      role: 'Chatbot multilingual para soporte',
      challenge:
        'Recibían 15K tickets/mes en 5 idiomas. Solo 60% se resolvían en primer nivel. Tiempo de respuesta: 6-8 horas.',
      solution:
        'Chatbot con LLM fine-tuned. Base de conocimientos de 500+ artículos. Enrutamiento inteligente a agentes humanos cuando era necesario.',
      result: '80% de resolución automática. Tiempo de respuesta: < 2 minutos. Satisfacción: 92%.',
      resultNumber: '80% automatización',
      quote: 'El chatbot entiende contexto, historia de compra, preferencias. No es un bot bobo.',
    },
    {
      company: 'B2B SaaS Analytics',
      role: 'MVP de dashboard predictivo con IA',
      challenge:
        'Necesitaban un MVP en 4 semanas. Presupuesto limitado. Tecnología compleja (ML pipeline + frontend reactivo).',
      solution:
        'Next.js + Python backend. ML pipeline con scikit-learn. Deploy en AWS. Diseño component-based para escalabilidad.',
      result: 'MVP en producción en 28 días. 200+ early users. Series A completada 6 meses después.',
      resultNumber: 'MVP en 28 días',
      quote: 'EcoAI no solo desarrolló el MVP, nos enseñó a construir en AWS. Independencia real.',
    },
    {
      company: 'Fabrica Manufacturera (Chemicals)',
      role: 'Predicción de fallos en línea de producción',
      challenge:
        'Pérdidas por paradas no programadas: €400K/año. Predictive maintenance manual = inefectivo.',
      solution:
        'Sensors + IoT + Python para procesamiento. Modelo de predicción (gradient boosting). Dashboard en React.',
      result: '78% reducción de downtime. €280K ahorrados en año 1. Implementación en 3 turnos.',
      resultNumber: '€280K ahorrados',
      quote: 'La IA es real. Y rentable. Nos la hicieron accesible.',
    },
    {
      company: 'Aseguradora (Insurance)',
      role: 'Automatización de underwriting',
      challenge:
        'Revisaban 200 propuestas/día manualmente. 35% rechazadas por inconsistencias. Procesamiento: 5-7 días.',
      solution:
        'IA de clasificación (reglas + ML). Validación automática contra políticas. Dashboard para excepciones.',
      result: '95% automatización. Tiempo: de 5-7 días a 2 horas. Reducción de costos: 45%.',
      resultNumber: '95% automatización',
      quote: 'Parecía imposible. EcoAI lo hizo realidad. Y rápido.',
    },
    {
      company: 'Marketplace B2C',
      role: 'Sistema de detección de fraude con IA',
      challenge:
        'Pérdidas por fraude: 2.3% de transacciones (€120K/mes). Falsos positivos bloqueaban clientes legítimos.',
      solution:
        'Modelo ensemble (3 modelos distintos). Análisis de patrón de comportamiento. Score de riesgo en real-time.',
      result: 'Fraude reducido a 0.3% (€20K/mes). Falsos positivos reducidos 80%. Conversión mejoró 5%.',
      resultNumber: '84% reducción de fraude',
      quote: 'Es magia. Pero basada en datos y modelos sólidos. Confiamos en EcoAI.',
    },
  ]

  return (
    <div>
      <Hero
        title="Casos de Éxito"
        subtitle="Proyectos reales con ROI comprobado"
        description="Automatización, chatbots, desarrollo web con IA. Resultados en 30-90 días."
      />

      <section className="section">
        <div className="container">
          <p style={{ fontSize: '1.1rem', textAlign: 'center', color: '#666' }}>
            Estos son algunos de nuestros proyectos. Todos completados. Todos con ROI medible. Todos con clientes
            satisfechos.
          </p>
        </div>
      </section>

      {cases.map((caseStudy, index) => (
        <CaseStudy key={index} {...caseStudy} index={index} />
      ))}

      {/* CTA Final */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>¿Te late tu caso?</h2>
          <p>Cuéntanos tu reto. Haremos una auditoría IA gratuita (15 min) para ver si podemos ayudarte.</p>
          <a href="/contacto" className="button button-primary" style={{ marginTop: '1rem' }}>
            Solicitar Auditoría IA
          </a>
        </div>
      </section>
    </div>
  )
}
