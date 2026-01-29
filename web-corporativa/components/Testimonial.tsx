import styles from './Testimonial.module.css'

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
}

export default function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <div className={styles.testimonial}>
      <p className={styles.quote}>"{quote}"</p>
      <div className={styles.author}>
        <strong>{author}</strong>
        <span>
          {role}, {company}
        </span>
      </div>
    </div>
  )
}
