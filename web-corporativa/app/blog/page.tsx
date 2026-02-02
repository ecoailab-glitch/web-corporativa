import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'
import styles from '@/styles/Blog.module.css'

export const metadata: Metadata = {
  title: 'Blog | CUSTOM AI LAB SOLUTIONS',
  description: 'Artículos sobre IA, automatización y transformación digital. Casos reales, estrategia y ROI.',
  openGraph: {
    title: 'Blog | CUSTOM AI LAB SOLUTIONS',
    description: 'Artículos sobre IA, automatización y transformación digital. Casos reales, estrategia y ROI.',
    url: 'https://customailab.com/blog',
    type: 'website',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  const categories = Array.from(new Set(posts.map((post) => post.category)))

  return (
    <main className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Blog: IA, Automatización y ROI</h1>
          <p>Casos reales de empresas que transformaron su operación con inteligencia artificial. Estrategia, tecnología y resultados medibles.</p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className={styles.postsSection}>
        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <article key={post.slug} className={styles.postCard}>
              <div className={styles.postImage}>
                <div className={styles.imagePlaceholder}>{post.category}</div>
              </div>

              <div className={styles.postContent}>
                <div className={styles.postMeta}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.date}>{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>

                <h2 className={styles.postTitle}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className={styles.postDescription}>{post.description}</p>

                <div className={styles.postFooter}>
                  <span className={styles.author}>{post.author}</span>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    Leer más →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>¿Tu empresa necesita una estrategia IA?</h2>
          <p>Realiza una auditoría gratuita de 15 minutos y descubre cómo optimizar tu operación.</p>
          <Link href="/contacto" className={styles.ctaButton}>
            Solicitar auditoría gratuita
          </Link>
        </div>
      </section>
    </main>
  )
}
