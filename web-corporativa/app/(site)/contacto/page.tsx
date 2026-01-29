import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | EcoAI Lab',
  description: 'Solicita tu auditoría IA gratuita. Te responderemos en 24 horas.',
}

export default function ContactoPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1>Solicita tu auditoría IA gratuita (15 min)</h1>
          <p>Analiza las oportunidades de IA en tu negocio. Sin compromiso.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2>Formulario de contacto</h2>
          <p>[Formulario será implementado en próxima fase]</p>
          {/* TODO: Implementar formulario */}
          <form>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Teléfono" />
            <textarea placeholder="Cuéntanos sobre tu empresa y qué te interesa"></textarea>
            <button type="submit" className="btn btn-primary">
              Solicitar Auditoría
            </button>
          </form>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Información de contacto</h2>
          <p>Email: info@ecoailab.com</p>
          <p>Teléfono: +34 XXX XXX XXX</p>
        </div>
      </section>
    </div>
  )
}
