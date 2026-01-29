import Link from 'next/link'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  title: string
  description: string
  benefits: string[]
  href?: string
  icon?: string
}

export default function ServiceCard({
  title,
  description,
  benefits,
  href,
  icon,
}: ServiceCardProps) {
  const content = (
    <div className={styles.card}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className={styles.benefits}>
        {benefits.map((benefit, index) => (
          <li key={index}>✅ {benefit}</li>
        ))}
      </ul>
      {href && (
        <div className={styles.link}>
          Ver más →
        </div>
      )}
    </div>
  )

  return href ? <Link href={href}>{content}</Link> : content
}
