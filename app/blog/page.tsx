import { sanityClient } from '@/lib/sanity'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'

// GROQ Query — sab blog posts fetch karega
const query = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  author,
  categories[]-> { title }
}`

export default async function BlogPage() {
  const posts = await sanityClient.fetch(query)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
          Blog
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Chemistry tips, study guides, and latest updates from ChemLab Academy.
        </p>

        {posts.length === 0 ? (
          <p className="text-slate-600 dark:text-slate-400">No blog posts yet. Please add some in Sanity.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: any) => (
              <div
                key={post._id}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-shadow"
              >
                {post.mainImage && (
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                    <Link href={`/blog/${post.slug.current}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt && (
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-4 mt-4 text-xs text-slate-500 dark:text-slate-400">
                    {post.publishedAt && (
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                    )}
                    {post.author && (
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                    )}
                  </div>
                  {post.categories?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.categories.map((cat: any) => (
                        <span
                          key={cat._id}
                          className="text-xs bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded-full"
                        >
                          {cat.title}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}