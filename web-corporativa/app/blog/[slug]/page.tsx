'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import { getPostBySlug, getAllPostSlugs, getAllPosts, markdownToHtml } from '@/lib/mdx'
import { trackBlogView } from '@/lib/gtag'
import styles from '@/styles/BlogPost.module.css'

interface Params {
  slug: string
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post no encontrado',
      description: 'El artículo que buscas no existe.',
    }
  }

  return {
    title: `${post.title} | CUSTOM AI LAB SOLUTIONS`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://customailab.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug)
  const allPosts = getAllPosts()

  // Track blog view
  useEffect(() => {
    if (post) {
      trackBlogView(post.slug, post.title, post.category)
    }
  }, [post])

  if (!post) {
    return (
      <main className={styles.container}>
        <section className={styles.notFound}>
          <h1>Post no encontrado</h1>
          <p>Lo sentimos, el artículo que buscas no existe.</p>
          <Link href="/blog" className={styles.backLink}>
            ← Volver al blog
          </Link>
        </section>
      </main>
    )
  }

  // Convertir markdown a HTML
  const htmlContent = markdownToHtml(post.content)

  // Calcular posts relacionados (misma categoría, diferente post)
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <main className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroMeta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.date}>{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <h1>{post.title}</h1>
          <p className={styles.description}>{post.description}</p>
          <div className={styles.author}>
            <div>
              <span className={styles.authorLabel}>Por</span>
              <span className={styles.authorName}>{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className={styles.content}>
        <div className={styles.postBody} dangerouslySetInnerHTML={{ __html: htmlContent }} />

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
