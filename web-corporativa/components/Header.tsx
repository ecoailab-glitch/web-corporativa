'use client'

import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">CUSTOM AI LAB</Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/casos">Casos</Link>
          <Link href="/sobre-nosotros">Sobre Nosotros</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        <Link href="/contacto" className={styles.cta} style={{ textDecoration: 'none' }}>
          Solicita Auditoría
        </Link>
      </div>
    </header>
  )
}
