import styles from './BenefitsList.module.css'

interface BenefitItem {
  icon?: string
  title: string
  description: string
}

interface BenefitsListProps {
  benefits: BenefitItem[]
  columns?: 2 | 3 | 4
}

export default function BenefitsList({ benefits, columns = 3 }: BenefitsListProps) {
  return (
    <div className={`${styles.grid} ${styles[`cols${columns}`]}`}>
      {benefits.map((benefit, index) => (
        <div key={index} className={styles.item}>
          {benefit.icon && <div className={styles.icon}>{benefit.icon}</div>}
          <h4>{benefit.title}</h4>
          <p>{benefit.description}</p>
        </div>
      ))}
    </div>
  )
}
