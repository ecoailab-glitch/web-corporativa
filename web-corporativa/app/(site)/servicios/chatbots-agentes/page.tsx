import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chatbots y Agentes IA | Soporte 24/7 | EcoAI Lab',
  description: 'Agentes conversacionales inteligentes. 60-80% de consultas resueltas automáticamente. Soporte 24/7.',
}

export default function ChatbotsAgentesPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1>Agentes IA que atienden tu negocio 24/7</h1>
          <p>Servicio al cliente inteligente, sin empleados, escalable a millones de conversaciones.</p>
          <button className="btn btn-primary">
            Solicita una Demostración Gratuita
          </button>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2>El problema: Saturación de tickets</h2>
          <p>Tickets se acumulan, costo por contacto es alto, disponibilidad solo en horarios de oficina.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Nuestra solución: Agentes conversacionales que resuelven</h2>
          <p>IA que entiende contexto, accede a datos reales, toma acciones en tus sistemas.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2>Beneficios principales</h2>
          <ul>
            <li>Disponibilidad 24/7 en múltiples idiomas</li>
            <li>60-80% de consultas resueltas automáticamente</li>
            <li>Integración con tu CRM/APIs</li>
            <li>Aprendizaje continuo</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>¿Listo para empezar?</h2>
          <button className="btn btn-primary">
            Solicita una Demostración Gratuita
          </button>
        </div>
      </section>
    </div>
  )
}
