'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './Chatbot.module.css'

interface Message {
  id: string
  type: 'user' | 'bot'
  text: string
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: '¡Hola! 👋 Soy el asistente de CUSTOM AI LAB SOLUTIONS. ¿En qué puedo ayudarte?',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    // Base de conocimiento del sitio
    const knowledge: Record<string, Record<string, string>> = {
      servicios: {
        'ia en procesos|automatización|procesos manuales': 
          '⚙️ **IA en Procesos**: Automatización de tareas manuales 24/7. Ideal para:\n• Clasificación de datos\n• Validación de documentos\n• Entrada de datos automática\n• Decisiones en tiempo real\n\nResultados: 40-60% ahorro de tiempo, cero errores humanos.\n\n¿Tienes procesos manuales que automatizar?',
        
        'chatbot|agente|soporte|consultas':
          '💬 **Chatbots & Agentes IA**: Soporte inteligente 24/7 en cualquier idioma.\n• Resuelve 60-80% de consultas sin intervención\n• Integración con CRM y bases de datos\n• Disponibilidad 24/7 sin costos operacionales\n• Escalable a millones de conversaciones\n\n¿Necesitas mejorar tu atención al cliente?',
        
        'desarrollo|app|producto|mvp|web':
          '🚀 **Desarrollo Web/App IA**: Aplicaciones inteligentes en 4-6 semanas.\n• MVP funcional sin equipo ML interno\n• Stack moderno (React, Node, Python)\n• Features IA integradas desde el inicio\n• Escalable desde día 1\n\n¿Tienes idea de qué producto construir?'
      },
      
      precios: {
        'precio|costo|cuánto cuesta|inversión|presupuesto':
          '💰 **Precios**: Proyectos típicos €5K-€20K según complejidad.\n\nProceso:\n1. Auditoría gratuita (15 min) - Análisis de tu caso\n2. Estimación exacta - ROI y timeline\n3. Plan personalizado - Sin sorpresas\n\nLos clientes generan ROI en 3-6 meses. ¿Te interesa agendar una auditoría gratuita?'
      },
      
      tiempo: {
        'cuánto tarda|tiempo|implementación|cuándo empezamos|timeline':
          '⏱️ **Timeline**: 4-8 semanas de auditoría a producción.\n\nFases:\n• Semana 1: Auditoría y análisis\n• Semanas 2-8: Desarrollo e integración\n• Semanas 9+: Escalado y optimización\n\nMVP funcional en las primeras 2 semanas. ¿Cuál es tu proyecto?'
      },
      
      equipo: {
        'equipo|quiénes somos|team|profesionales':
          '👥 **Nuestro Equipo**: 13 profesionales con 80+ años de experiencia.\n\n• 6 Engineers (ML, Backend, Frontend)\n• 2 Product Managers\n• 2 Integration Specialists\n• 2 Account Managers\n• 1 Founder (Ex-Google, Mercado Libre)\n\nTodos especializados en IA en producción.'
      },
      
      roi: {
        'roi|resultados|casos|éxito|generamos|ahorro':
          '📊 **ROI Comprobado**: 25+ soluciones implementadas, €5M+ en valor generado.\n\nNuestros clientes:\n• Generan ROI en 3-6 meses\n• Ahorran 40-60% en costos\n• Reducen time-to-market 3-4x\n• Escalan sin expandir equipo\n\n¿Quieres saber el ROI para tu caso?'
      },
      
      industrias: {
        'fintech|banca|retail|ecommerce|seguros|manufactura|rrhh|datos|industrias':
          '🏢 **Industrias**: Trabajamos en 6 sectores diferentes.\n\n🏦 Fintech: Aprobación automática de créditos\n📦 Retail: Clasificación de órdenes\n🛡️ Seguros: Validación de reclamaciones\n🏭 Manufactura: Inspección visual\n👥 RRHH: Preselección de CVs\n📊 Datos: Extracción automática\n\n¿Tu industria está aquí?'
      },
      
      infraestructura: {
        'infraestructura|sistemas|api|integración|cambiar|compatibilidad':
          '🔗 **Integración**: NO necesitas cambiar tu infraestructura.\n\n• Nos integramos con tus sistemas (ERP, CRM, bases de datos)\n• APIs ideales, pero hacemos integración custom si es necesario\n• Implementación sin disrupciones\n• Soporte técnico post-lanzamiento incluido\n\n¿Qué sistemas usas actualmente?'
      },
      
      soporte: {
        'soporte|post-lanzamiento|mantenimiento|después|training':
          '🤝 **Post-Lanzamiento**: Incluye 3 meses de soporte técnico.\n\n• Monitoreo de solución\n• Ajustes y optimizaciones\n• Training a tu equipo\n• Documentación completa\n\nLuego puedes mantenerlo con tu equipo o contratar soporte continuo.'
      },
      
      errores: {
        'errores|validación|crítico|falla|riesgo':
          '✅ **Calidad & Validación**: La IA no comete errores, pero validamos todo.\n\n• Configuramos reglas de validación automática\n• Temas críticos siempre pasan por revisión humana\n• Objetivo: Reducir errores, no eliminarlos\n• Auditoría de cada decisión\n\n¿Cuáles son tus procesos críticos?'
      },
      
      auditoria: {
        'auditoría|consulta|asesoría|gratis|gratuita|libre':
          '🔍 **Auditoría Gratuita**: 15 minutos sin compromiso.\n\nAnalizamos:\n• Procesos actuales\n• Oportunidades de IA\n• Estimación de ROI\n• Timeline personalizado\n\n¿Te gustaría agendar una? Clic en "Contactar equipo" →'
      },
      
      beneficios: {
        'beneficio|ventaja|ahorro|mejora|eficiencia|escalabilidad':
          '⚡ **Beneficios Clave**:\n• 40-60% ahorro de tiempo\n• Disponibilidad 24/7\n• ROI en 90 días\n• Sin R&D interno\n• Escalabilidad infinita\n• Cero errores humanos\n• Decisiones en tiempo real\n\n¿Cuál es tu mayor reto?'
      },
      
      contacto: {
        'contacto|hablar|equipo|llamada|agendar|cita|reunion':
          '📞 **Contacta Nuestro Equipo**:\n\n1. Auditoría Gratuita → 15 min sin compromiso\n2. Demostración personalizada → Ve tu solución\n3. Propuesta detallada → Con ROI exacto\n\n¿Preferirías hablar ahora o agendar para otro momento?'
      }
    }

    // Buscar coincidencias en la base de conocimiento
    for (const category of Object.values(knowledge)) {
      for (const [keywords, response] of Object.entries(category)) {
        const keywordArray = keywords.split('|')
        if (keywordArray.some(keyword => message.includes(keyword))) {
          return response
        }
      }
    }

    // Respuestas adicionales para interacciones generales
    if (message.match(/hola|hi|buenos días|buenas noches|hey|qué tal/)) {
      return '¡Hola! 👋 Bienvenido a CUSTOM AI LAB SOLUTIONS.\n\n¿En qué puedo ayudarte? Soy experto en:\n• Automatización de Procesos\n• Chatbots & Agentes IA\n• Desarrollo Web/App IA\n• ROI y estrategia'
    }

    if (message.match(/gracias|thanks|merci/)) {
      return '¡De nada! 😊 Si tienes más preguntas, estoy aquí. ¿Hay algo más que quieras saber?'
    }

    if (message.match(/cuáles son tus capacidades|qué puedes hacer|funciones/)) {
      return '💪 **Mis Capacidades**:\n\n✓ Responder sobre nuestros servicios\n✓ Explicar precios y ROI\n✓ Detallar el timeline\n✓ Describir nuestro equipo\n✓ Hablar sobre casos de éxito\n✓ Agendar auditoría gratuita\n\n¿Por dónde empezamos?'
    }

    // Respuesta por defecto - redirigir con confianza
    return '👍 Buena pregunta. Nuestro equipo experto puede ayudarte mejor.\n\n**Opciones:**\n1. Agendar Auditoría Gratuita (15 min) → Sin compromiso\n2. Ver más detalles en la web\n3. Hablar directamente con el equipo\n\n¿Cuál prefieres?'
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simular delay de respuesta
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: getBotResponse(input),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsLoading(false)
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.chatButton}
        aria-label="Abrir chatbot"
        title="Preguntas frecuentes"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Widget de chat */}
      {isOpen && (
        <div className={styles.chatWidget}>
          <div className={styles.chatHeader}>
            <h3>CUSTOM AI LAB Solutions</h3>
            <p>Responde tus dudas al instante</p>
          </div>

          <div className={styles.chatMessages}>
            {messages.map((message) => (
              <div key={message.id} className={`${styles.message} ${styles[message.type]}`}>
                <div className={styles.messageBubble}>{message.text}</div>
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.message} ${styles.bot}`}>
                <div className={styles.messageBubble}>
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.chatInput}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu pregunta..."
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className={styles.sendButton}
            >
              ↑
            </button>
          </div>

          <div className={styles.chatFooter}>
            <p>Para consultas específicas, abre un ticket de contacto</p>
            <a href="/contacto" className={styles.contactLink}>
              Contactar equipo →
            </a>
          </div>
        </div>
      )}
    </>
  )
}
