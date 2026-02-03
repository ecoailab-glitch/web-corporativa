'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
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
  visual?: ReactNode
}

export default function Hero({
  title,
  subtitle,
  description,
  cta,
  backgroundImage,
  centered = true,
  visual,
}: HeroProps) {
  const hasVisual = visual && !centered

  return (
    <section
      className={`${styles.hero} ${centered ? styles.centered : ''} ${hasVisual ? styles.withVisual : ''}`}
      style={backgroundImage && centered ? { backgroundImage: `url(${backgroundImage})` } : {}}
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

        {visual && (
          <div className={styles.visual}>
            {visual}
          </div>
        )}
      </div>
    </section>
  )
}
