import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desarrollo Web y App con IA | EcoAI Lab',
  description: 'Aplicaciones inteligentes. Desde cero o integradas en tu producto. MVP en 4-6 semanas.',
}

export default function DesarrolloWebAppIAPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1>Aplicaciones inteligentes. Desde cero o en tu producto.</h1>
          <p>Apps con IA integrada. Time-to-market 3-4x más rápido.</p>
          <button className="btn btn-primary">
            Solicita una Consulta Gratuita
          </button>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2>El problema: Competidores con IA ya te llevan ventaja</h2>
          <p>Tus users esperan experiencias inteligentes. Features de IA toman tiempo y dinero.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Nuestra solución: IA embedded en tu aplicación</h2>
          <p>Stack moderno, deployment en 4-6 semanas. Sin equipo ML interno necesario.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2>Beneficios principales</h2>
          <ul>
            <li>Time-to-market 3-4x más rápido</li>
            <li>Features IA sin equipo ML interno</li>
            <li>User experience 10x mejor</li>
            <li>Escalable desde el inicio</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>¿Listo para empezar?</h2>
          <button className="btn btn-primary">
            Solicita una Consulta Gratuita
          </button>
        </div>
      </section>
    </div>
  )
}
