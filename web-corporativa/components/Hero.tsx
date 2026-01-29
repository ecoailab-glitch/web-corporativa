'use client'

import Link from 'next/link'
import styles from './Hero.module.css'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  cta?: {
    text: string
    href?: string
    onClick?: () => void
  }
  backgroundImage?: string
  centered?: boolean
}

export default function Hero({
  title,
  subtitle,
  description,
  cta,
  backgroundImage,
  centered = true,
}: HeroProps) {
  return (
    <section
      className={`${styles.hero} ${centered ? styles.centered : ''}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>{title}</h1>
          {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
          {description && <p className={styles.description}>{description}</p>}

          {cta && (
            <div className={styles.cta}>
              {cta.href ? (
                <Link href={cta.href} className="btn btn-primary">
                  {cta.text}
                </Link>
              ) : (
                <button className="btn btn-primary" onClick={cta.onClick}>
                  {cta.text}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
