import { Metadata } from 'next'
import { getPostBySlug, getAllPostSlugs, getAllPosts, markdownToHtml } from '@/lib/mdx'
import BlogPostClient from '@/components/BlogPostClient'

interface Params {
  slug: string
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const allPosts = getAllPosts()

  if (!post) {
    return (
      <main>
        <h1>Post no encontrado</h1>
      </main>
    )
  }

  const htmlContent = markdownToHtml(post.content)
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <BlogPostClient
      slug={post.slug}
      title={post.title}
      description={post.description}
      content={htmlContent}
      category={post.category}
      date={post.date}
      author={post.author}
      relatedPosts={relatedPosts}
    />
  )
}
