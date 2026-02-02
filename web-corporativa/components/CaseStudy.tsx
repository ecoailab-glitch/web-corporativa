import styles from './CaseStudy.module.css'

interface CaseStudyProps {
  company: string
  role: string
  challenge: string
  solution: string
  result: string
  resultNumber?: string
  quote?: string
  index?: number
}

export default function CaseStudy({
  company,
  role,
  challenge,
  solution,
  result,
  resultNumber,
  quote,
  index = 0,
}: CaseStudyProps) {
  const isEven = index % 2 === 0

  return (
    <section className={`section ${isEven ? '' : 'section-light'}`}>
      <div className="container">
        <div className={styles.caseGrid}>
          <div className={styles.content}>
            <h3>{company}</h3>
            <p className={styles.role}>
              <strong>{role}</strong>
            </p>

            <div className={styles.section}>
              <h4>Desafío</h4>
              <p>{challenge}</p>
            </div>

            <div className={styles.section}>
              <h4>Solución</h4>
              <p>{solution}</p>
            </div>

            <div className={styles.section}>
              <h4>Resultado</h4>
              <p>{result}</p>
            </div>

            {quote && (
              <div className={styles.quote}>
                <p>&quot;{quote}&quot;</p>
              </div>
            )}
          </div>

          {resultNumber && (
            <div className={styles.metric}>
              <div className={styles.number}>{resultNumber}</div>
              <p>Mejora</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
