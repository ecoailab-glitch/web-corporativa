'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { trackBlogView } from '@/lib/gtag'
import styles from '@/styles/BlogPost.module.css'

interface RelatedPost {
  slug: string
  title: string
  description: string
  category: string
}

interface BlogPostClientProps {
  slug: string
  title: string
  description: string
  content: string
  category: string
  date: string
  author: string
  relatedPosts: RelatedPost[]
}

export default function BlogPostClient({
  slug,
  title,
  description,
  content,
  category,
  date,
  author,
  relatedPosts,
}: BlogPostClientProps) {
  // Track blog view
  useEffect(() => {
    trackBlogView(slug, title, category)
  }, [slug, title, category])

  return (
    <main className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroMeta}>
            <span className={styles.category}>{category}</span>
            <span className={styles.date}>
              {new Date(date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
          <h1>{title}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.author}>
            <div>
              <span className={styles.authorLabel}>Por</span>
              <span className={styles.authorName}>{author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className={styles.content}>
        <div className={styles.postBody} dangerouslySetInnerHTML={{ __html: content }} />

        {/* CTA dentro del post */}
        <div className={styles.inlineCtaSection}>
          <h3>¿Quieres implementar esto en tu empresa?</h3>
          <p>Realiza una auditoría gratuita de 15 minutos y descubre el ROI específico para tu situación.</p>
          <Link href="/contacto" className={styles.inlineCtaButton}>
            Solicitar auditoría IA gratuita
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className={styles.relatedSection}>
          <h2>Artículos relacionados</h2>
          <div className={styles.relatedGrid}>
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className={styles.relatedCard}>
                <div className={styles.relatedMeta}>
                  <span className={styles.relatedCategory}>{relatedPost.category}</span>
                </div>
                <h3>{relatedPost.title}</h3>
                <p>{relatedPost.description}</p>
                <span className={styles.readMore}>Leer →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Navigation */}
      <nav className={styles.navigation}>
        <Link href="/blog" className={styles.backLink}>
          ← Volver al blog
        </Link>
      </nav>
    </main>
  )
}
