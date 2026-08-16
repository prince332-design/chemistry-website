import { sanityClient } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import PortableTextRenderer from '@/components/PortableTextRenderer'

// GROQ Query — single blog post
const query = `*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  content,
  mainImage,
  publishedAt,
  author,
  categories[]-> { title }
}`

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await sanityClient.fetch(query, { slug })

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200/50 dark:border-slate-700/50">
          {post.mainImage && (
            <img
              src={post.mainImage.asset.url}
              alt={post.title}
              className="w-full h-auto rounded-lg mb-6"
            />
          )}

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
            {post.publishedAt && (
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </span>
            )}
            {post.author && (
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </span>
            )}
            {post.categories?.length > 0 && (
              <span className="flex flex-wrap gap-2">
                {post.categories.map((cat: any) => (
                  <span
                    key={cat._id}
                    className="text-xs bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded-full"
                  >
                    {cat.title}
                  </span>
                ))}
              </span>
            )}
          </div>

          {post.content && (
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <PortableTextRenderer value={post.content} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}