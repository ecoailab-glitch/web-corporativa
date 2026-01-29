import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import BenefitsList from '@/components/BenefitsList'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | EcoAI Lab',
  description: 'Equipo especializado en IA práctica. 25+ soluciones implementadas. ROI comprobado.',
}

export default function SobreNosotrosPage() {
  const values = [
    {
      icon: '🎯',
      title: 'Pragmatismo',
      description: 'Soluciones que funcionan hoy. Perfección mañana.',
    },
    {
      icon: '💪',
      title: 'Responsabilidad',
      description: 'Nos comprometemos con tu ROI, no solo con el proyecto.',
    },
    {
      icon: '🤝',
      title: 'Transparencia',
      description: 'Te contamos qué es posible y qué no. Sin vendetta.',
    },
    {
      icon: '🚀',
      title: 'Excelencia',
      description: 'No hacemos lo mínimo. Hacemos lo mejor posible.',
    },
  ]

  const team = [
    { role: '6 Engineers', description: 'ML, Backend, Frontend. Experts en IA en producción.' },
    { role: '2 Product Managers', description: 'Entienden tu negocio. Diseñan soluciones que crecen.' },
    { role: '2 Integration Specialists', description: 'Conectan tu tech con nuestro tech flawlessly.' },
    { role: '2 Account Managers', description: 'Tu punto de contacto. Soporte post-implementación.' },
    { role: '1 Founder (CEO)', description: 'Ex-Google, Mercado Libre. 15+ años en tech.' },
  ]

  return (
    <div>
      <Hero
        title="Equipo especializado en IA práctica"
        subtitle="13 profesionales. 80+ años de experiencia combinada en tech."
        description="Implementamos soluciones reales. Con resultados medibles. Desde 2023."
      />

      {/* Historia */}
      <section className="section">
        <div className="container">
          <h2>Nuestra Historia</h2>
          <p>
            EcoAI Lab nace en 2023 de la frustración de ver empresas invertir millones en
            transformación digital sin resultados reales. Decidimos construir un equipo que no
            solo consultase, sino que implementase e hiciese acompañamiento real.
          </p>
          <p>
            Hoy somos 13 personas especializadas en IA práctica. Hemos lanzado 25+ soluciones en
            producción con ROI comprobado. Nuestros clientes ahorran 40-60% en costos operacionales
            o generan ingresos adicionales con nuestras soluciones.
          </p>
        </div>
      </section>

      {/* Misión */}
      <section className="section section-light">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Nuestra Misión</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
            <strong>
              Democratizar la IA. Que empresas de cualquier tamaño puedan competir con inteligencia
              artificial real.
            </strong>
          </p>
          <p style={{ textAlign: 'center' }}>
            Sin necesidad de tener un PhD. Sin esperar 2 años. Sin quebrarse financieramente.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nuestros Valores</h2>
          <BenefitsList benefits={values} columns={4} />
        </div>
      </section>

      {/* Equipo */}
      <section className="section section-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>El Equipo</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2rem' }}>
            {team.map((member, index) => (
              <div key={index} style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '2rem' }}>
                <h3>{member.role}</h3>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Experiencia</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                25+
              </div>
              <p>Soluciones en Producción</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                €5M+
              </div>
              <p>ROI Generado</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                80+
              </div>
              <p>Años de Experiencia</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                6
              </div>
              <p>Industrias Diferentes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué nosotros */}
      <section className="section section-light">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Por qué Confiar en Nosotros</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              marginTop: '2rem',
            }}
          >
            <div>
              <h3>✅ Implementación Real</h3>
              <p>No consultamos. Implementamos y nos hacemos responsables de los resultados.</p>
            </div>

            <div>
              <h3>✅ ROI Medible</h3>
              <p>Nuestros clientes ven resultados en 30-90 días. Números reales, no promesas.</p>
            </div>

            <div>
              <h3>✅ Soporte Completo</h3>
              <p>No nos vamos después de lanzar. Soporte técnico incluido, optimización continua.</p>
            </div>

            <div>
              <h3>✅ Expertise Real</h3>
              <p>Engineers con experiencia en Google, Mercado Libre, startups unicornios.</p>
            </div>

            <div>
              <h3>✅ Transparencia</h3>
              <p>Te contamos qué es posible, qué no, costos reales, timelines honestas.</p>
            </div>

            <div>
              <h3>✅ Escalable</h3>
              <p>Soluciones diseñadas para crecer. Desde MVP a soluciones enterprise.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
