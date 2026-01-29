'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'

interface FAQProps {
  question: string
  answer: string
}

export default function FAQ({ question, answer }: FAQProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.faq}>
      <button className={styles.question} onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className={isOpen ? styles.iconOpen : styles.icon}>▼</span>
      </button>
      {isOpen && <div className={styles.answer}>{answer}</div>}
    </div>
  )
}
