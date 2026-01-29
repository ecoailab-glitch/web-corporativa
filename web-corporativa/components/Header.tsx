'use client'

import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">EcoAI Lab</Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/servicios">Servicios</Link>
          <Link href="/sobre-nosotros">Sobre Nosotros</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        <button className={styles.cta}>Solicita Auditoría</button>
      </div>
    </header>
  )
}
