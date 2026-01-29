import type { Metadata } from 'next'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Automatización con IA | Procesos Inteligentes | EcoAI Lab',
  description:
    'Automatiza procesos manuales 24/7. ROI en 90 días. Casos en fintech, retail, manufactura.',
}

export default function IAProcesoPage() {
  const faqs = [
    {
      question: '¿Cuál es el costo de implementación?',
      answer:
        'Depende de la complejidad. Proyectos típicos oscilan entre €5K-€20K. Primero hacemos auditoría gratuita donde estimamos el costo y ROI exacto.',
    },
    {
      question: '¿Cuánto tiempo tarda la implementación?',
      answer: 'Usualmente 4-8 semanas desde auditoría hasta producción. Arrancamos con MVP funcional en las primeras 2 semanas.',
    },
    // ... más FAQs
  ]

  return (
    <div>
      <section className="section">
        <div className="container">
          <h1>Automatiza procesos empresariales con IA</h1>
          <p>
            Automatización inteligente que trabaja 24/7. Tu equipo se enfoca en lo estratégico.
          </p>
          <button className="btn btn-primary">
            Solicita tu Auditoría IA Gratuita (15 min)
          </button>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2>El problema: Tareas manuales que consumen recursos</h2>
          <p>Tareas repetitivas consumen 40-50% del tiempo de tu equipo...</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Nuestra solución: Automación inteligente 24/7</h2>
          <p>Implementamos automaciones que trabajan 24/7, sin errores, sin cansancio.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2>Beneficios principales</h2>
          <ul>
            <li>40-60% ahorro de tiempo</li>
            <li>Reducción de errores humanos</li>
            <li>Procesamiento 10x más rápido</li>
            <li>Escalabilidad sin coste adicional</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Preguntas frecuentes</h2>
          {faqs.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2>¿Listo para empezar?</h2>
          <button className="btn btn-primary">
            Solicita tu Auditoría IA Gratuita (15 min)
          </button>
        </div>
      </section>
    </div>
  )
}
