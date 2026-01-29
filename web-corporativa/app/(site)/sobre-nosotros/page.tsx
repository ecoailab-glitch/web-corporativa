import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | EcoAI Lab',
  description: 'Equipo especializado en IA práctica. 25+ soluciones implementadas. ROI comprobado.',
}

export default function SobreNosotrosPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1>Equipo especializado en IA práctica</h1>
          <p>13 profesionales. 80+ años de experiencia combinada en tech.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2>Nuestra historia</h2>
          <p>
            EcoAI Lab nace en 2023 de la frustración de ver empresas invertir millones sin
            resultados reales. Decidimos construir un equipo que no solo consultase, sino que
            implementase.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Misión y valores</h2>
          <h3>Misión</h3>
          <p>Democratizar la IA. Que empresas de cualquier tamaño puedan competir con IA real.</p>
          <h3>Valores</h3>
          <ul>
            <li>🎯 Pragmatismo - Soluciones que funcionan hoy</li>
            <li>💪 Responsabilidad - ROI es lo que importa</li>
            <li>🤝 Transparencia - Contamos qué es posible y qué no</li>
            <li>🚀 Excelencia - Hacemos lo mejor posible</li>
          </ul>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2>El equipo</h2>
          <p>
            13 personas especializadas. 6 engineers (ML, backend, frontend). 2 product managers.
            2 especialistas en integración. 2 technical account managers. 1 founder (CEO).
          </p>
        </div>
      </section>
    </div>
  )
}
