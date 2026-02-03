'use client'

import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import Hero from '@/components/Hero'
import { trackLeadSubmit, trackFormError, trackCalendarClick } from '@/lib/gtag'
import styles from './contacto.module.css'

export default function ContactoPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    auditType: 'ia-procesos', // Default auditoría
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Validación básica
      if (!formData.name || !formData.email || !formData.company || !formData.message) {
        const errorMsg = 'Por favor completa todos los campos obligatorios.'
        setError(errorMsg)
        trackFormError('contacto', errorMsg)
        setLoading(false)
        return
      }

      // Email básico regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        const errorMsg = 'Email inválido.'
        setError(errorMsg)
        trackFormError('contacto', errorMsg)
        setLoading(false)
        return
      }

      // Enviar a API
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Error al enviar el formulario')
      }

      // Track successful lead submission
      trackLeadSubmit({
        email: formData.email,
        company: formData.company,
        auditType: formData.auditType,
      })

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', company: '', auditType: 'ia-procesos', message: '' })

      // Reset form después de 4 segundos
      setTimeout(() => {
        setSubmitted(false)
      }, 4000)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al enviar. Intenta de nuevo.'
      setError(errorMessage)
      trackFormError('contacto', errorMessage)
      console.error('Error submitting form:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Hero
        title="Hablemos"
        subtitle="Cuéntanos tu reto. Haremos una auditoría IA gratuita."
        description="Sin compromisos. Solo quiero entender si podemos ayudarte."
      />

      <section className="section section-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            {/* Formulario */}
            <div>
              <h2>Escríbenos</h2>

              {submitted && (
                <div className={styles.successMessage}>
                  ✓ Auditoría solicitada exitosamente. Te contactaremos en 24 horas.
                </div>
              )}

              {error && <div className={styles.errorMessage}>{error}</div>}

              {!submitted && (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Nombre *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="company">Empresa *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Tu empresa"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+34 666 777 888"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="auditType">Tipo de Auditoría *</label>
                    <select
                      id="auditType"
                      name="auditType"
                      value={formData.auditType}
                      onChange={handleChange}
                      required
                    >
                      <option value="ia-procesos">IA en Procesos</option>
                      <option value="chatbots-agentes">Chatbots y Agentes</option>
                      <option value="desarrollo-web-app-ia">Desarrollo Web/App + IA</option>
                      <option value="otro">Otro (explica en mensaje)</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Mensaje *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos tu reto. Quiero entender bien."
                      rows={6}
                      required
                    />
                  </div>

                  <button type="submit" className="button button-primary" disabled={loading}>
                    {loading ? 'Enviando...' : 'Solicitar Auditoría Gratuita'}
                  </button>

                  <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '1rem' }}>
                    * Campos obligatorios. Responderemos en 24h.
                  </p>
                </form>
              )}
            </div>

            {/* Info de contacto */}
            <div>
              <h2>Contacto Directo</h2>

              <div className={styles.contactInfo}>
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:hola@ecoailab.es">hola@ecoailab.es</a>
                  </p>
                </div>

                <div>
                  <h3>Teléfono</h3>
                  <p>
                    <a href="tel:+34912345678">+34 912 345 678</a>
                  </p>
                </div>

                <div>
                  <h3>Ubicación</h3>
                  <p>Madrid, Spain</p>
                </div>

                <div>
                  <h3>Redes</h3>
                  <p>
                    <a href="https://linkedin.com/company/ecoailab" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                    {' | '}
                    <a href="https://twitter.com/ecoailab" target="_blank" rel="noopener noreferrer">
                      X (Twitter)
                    </a>
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f0f2f5', borderRadius: '8px' }}>
                <h3>¿Prefieres agendar una llamada?</h3>
                <p>
                  Usa nuestro calendario para reservar 15 minutos. Sin sales, sin BS. Solo conversación.
                </p>
                <a
                  href="https://calendly.com/ecoailab/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary"
                  style={{ marginTop: '1rem' }}
                  onClick={() => trackCalendarClick('contact-form')}
                >
                  Agendar Llamada
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ de Contacto */}
      <section className="section section-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Preguntas Frecuentes</h2>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <details style={{ marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                ¿Cuánto tiempo tarda una auditoría IA?
              </summary>
              <p style={{ marginTop: '0.5rem' }}>
                15 minutos. Analizamos tu situación actual, identificamos oportunidades de IA, estimamos ROI y siguiente
                pasos. Sin presión.
              </p>
            </details>

            <details style={{ marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>¿Es gratuita la auditoría?</summary>
              <p style={{ marginTop: '0.5rem' }}>Sí. Totalmente gratis. Es nuestra forma de conocer tu negocio.</p>
            </details>

            <details style={{ marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                ¿Cuál es el próximo paso después de la auditoría?
              </summary>
              <p style={{ marginTop: '0.5rem' }}>
                Te presentamos un plan (3-6 meses). Si te interesa, iniciamos con un MVP. Si no, sin rencor.
              </p>
            </details>

            <details style={{ marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                ¿Cuánto tiempo de respuesta tengo?
              </summary>
              <p style={{ marginTop: '0.5rem' }}>
                Respondemos en 24 horas. Si es urgente, llama directamente. Nos encanta hablar.
              </p>
            </details>

            <details style={{ marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                ¿Trabajan con empresas pequeñas?
              </summary>
              <p style={{ marginTop: '0.5rem' }}>
                Sí. Pero nuestro focus es mid-market (50-500 empleados). Si eres startup, podemos recomendar partners.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
