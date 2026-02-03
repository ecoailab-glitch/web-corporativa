import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | CUSTOM AI LAB SOLUTIONS',
  description: 'Equipo especializado en IA práctica. 25+ soluciones implementadas. ROI comprobado.',
}

export default function SobreNosotrosPage() {
  const services = [
    {
      icon: '⚙️',
      title: 'IA en Procesos',
      description: 'Automatización de tareas manuales que consume tiempo y recursos.',
    },
    {
      icon: '💬',
      title: 'Chatbots & Agentes',
      description: 'Soporte inteligente 24/7 que escala sin costos operacionales.',
    },
    {
      icon: '🚀',
      title: 'Desarrollo Web/App IA',
      description: 'Productos inteligentes que se construyen en semanas, no meses.',
    },
    {
      icon: '📊',
      title: 'Análisis Predictivo',
      description: 'Datos que predecen el futuro de tu negocio.',
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
      {/* Hero Hero Section */}
      <section className={`section ${styles.heroSection}`}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <p className={styles.heroLabel}>SOBRE NOSOTROS</p>
            <h1 className={styles.heroTitle}>
              Somos especialistas en <span>IA práctica</span>
            </h1>
            <p className={styles.heroText}>
              13 profesionales con 80+ años de experiencia combinada. Implementamos soluciones reales que generan resultados medibles en 30-90 días.
            </p>
            <p className={styles.heroText}>
              Desde 2023, hemos lanzado 25+ soluciones en producción. Nuestros clientes ahorran 40-60% en costos operacionales o generan ingresos adicionales.
            </p>
          </div>
          <div className={styles.visualBox}>
            <div className={styles.smallEmoji}>🧠</div>
          </div>
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="section section-light">
        <div className="container">
          <h2 className={styles.sectionTitle}>
            <span className={styles.colorAccent}>QUÉ</span> HACEMOS
          </h2>
          <p className={styles.sectionSubtitle}>
            Implementamos soluciones IA que se integran con tus sistemas y generan ROI desde el primer mes.
          </p>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className={styles.heroLabel}>EL EQUIPO</p>
            <h2 className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>
              <span className={styles.colorAccent}>Quiénes</span> somos
            </h2>
            <p className={styles.sectionSubtitle} style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
              13 profesionales con 80+ años de experiencia. Cada rol está diseñado para llevar tu proyecto al éxito.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.teamRoleCount}>{member.role.split(' ')[0]}</div>
                <h3 className={styles.teamRoleTitle}>{member.role}</h3>
                <p className={styles.teamDescription}>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-light">
        <div className="container">
          <h2 className={styles.sectionTitle} style={{ marginBottom: '4rem' }}>Números que hablan</h2>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>25+</div>
              <p className={styles.statLabel}>Soluciones Implementadas</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>€5M+</div>
              <p className={styles.statLabel}>ROI Generado</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>80+</div>
              <p className={styles.statLabel}>Años de Experiencia</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>6</div>
              <p className={styles.statLabel}>Industrias Diferentes</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}


