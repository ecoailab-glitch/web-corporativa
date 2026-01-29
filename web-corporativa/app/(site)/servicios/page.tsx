import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios IA | EcoAI Lab',
  description: 'Automatización, chatbots y desarrollo web con IA. Tres servicios, un objetivo: transformar tu negocio.',
}

export default function ServiciosPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1>Servicios de IA para empresas</h1>
          <p>Tres servicios especializados para transformar tu negocio</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2>1. Automatización Inteligente de Procesos</h2>
          <p>Automatiza procesos manuales con inteligencia artificial.</p>
          <a href="/servicios/ia-procesos">Ver más →</a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>2. Agentes IA Conversacionales 24/7</h2>
          <p>Agentes conversacionales inteligentes que atienden tu negocio 24/7.</p>
          <a href="/servicios/chatbots-agentes">Ver más →</a>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2>3. Desarrollo Web y App con IA</h2>
          <p>Aplicaciones inteligentes. Desde cero o integradas en tu producto.</p>
          <a href="/servicios/desarrollo-web-app-ia">Ver más →</a>
        </div>
      </section>
    </div>
  )
}
