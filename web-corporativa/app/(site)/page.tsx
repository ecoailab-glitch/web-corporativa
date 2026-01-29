export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <h1>Automatiza tu empresa con IA</h1>
          <p>
            EcoAI Lab lleva inteligencia artificial a tu negocio. Sin equipo técnico. Sin inversión
            en R&D. Soluciones probadas en fintech, retail, manufactura y servicios.
          </p>
          <button className="btn btn-primary">Solicita tu Auditoría IA Gratuita (15 min)</button>
        </div>
      </section>

      {/* El Problema */}
      <section className="section section-light">
        <div className="container">
          <h2>Tu empresa se queda atrás con procesos manuales</h2>
          <p>Tareas repetitivas consumen 40-50% del tiempo de tu equipo.</p>
          <p>Servicios al cliente atienden solo en horario de oficina.</p>
          <p>Tomar decisiones sin datos en tiempo real.</p>
        </div>
      </section>

      {/* Nuestra Solución */}
      <section className="section">
        <div className="container">
          <h2>IA que funciona. Desde el día 1.</h2>
          <p>
            EcoAI Lab implementa soluciones IA que se integran con tus sistemas existentes y
            generan ROI en 3-6 meses.
          </p>
        </div>
      </section>

      {/* Placeholder para más secciones */}
      <section className="section section-light">
        <div className="container">
          <h2>Próximas secciones por completar</h2>
          <p>
            - Cómo funciona (3 pasos) - Beneficios principales - Servicios - Casos de éxito -
            FAQs - CTA final
          </p>
        </div>
      </section>
    </div>
  )
}
