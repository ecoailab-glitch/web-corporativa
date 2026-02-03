'use client'

import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Servicios</h3>
            <ul>
              <li>
                <Link href="/servicios/ia-procesos">IA en Procesos</Link>
              </li>
              <li>
                <Link href="/servicios/chatbots-agentes">Chatbots y Agentes</Link>
              </li>
              <li>
                <Link href="/servicios/desarrollo-web-app-ia">Desarrollo Web/App</Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Empresa</h3>
            <ul>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/sobre-nosotros">Sobre Nosotros</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Legal</h3>
            <ul>
              <li>
                <Link href="/privacidad">Política de Privacidad</Link>
              </li>
              <li>
                <Link href="/terminos">Términos de Servicio</Link>
              </li>
              <li>
                <Link href="/cookies">Política de Cookies</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} CUSTOM AI LAB SOLUTIONS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
