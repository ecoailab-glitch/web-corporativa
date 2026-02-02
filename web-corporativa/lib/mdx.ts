import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const POSTS_DIR = path.join(process.cwd(), 'content/posts')

export interface PostMetadata {
  title: string
  description: string
  date: string
  author: string
  category: string
  image?: string
  slug: string
}

export interface Post extends PostMetadata {
  content: string
}

// Convert markdown to HTML
export function markdownToHtml(markdown: string): string {
  return marked.parse(markdown) as string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) {
    return []
  }

  const files = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith('.md'))

  const posts = files.map((file) => {
    const filePath = path.join(POSTS_DIR, file)
    const content = fs.readFileSync(filePath, 'utf-8')
    const { data, content: postContent } = matter(content)

    return {
      ...(data as Omit<PostMetadata, 'slug'>),
      slug: file.replace(/\.md$/, ''),
      content: postContent,
    }
  })

  // Ordenar por fecha (más recientes primero)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  if (!fs.existsSync(POSTS_DIR)) {
    return null
  }

  const filePath = path.join(POSTS_DIR, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const content = fs.readFileSync(filePath, 'utf-8')
  const { data, content: postContent } = matter(content)

  return {
    ...(data as Omit<PostMetadata, 'slug'>),
    slug,
    content: postContent,
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) {
    return []
  }

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
}
