import { sanityClient } from '@/lib/sanity'
import Link from 'next/link'

// GROQ Query — sab courses fetch karega
const query = `*[_type == "subject"] {
  _id,
  title,
  slug,
  description,
  icon,
  classes[]-> { title },
  subjects[]-> { title, slug }
}`

export default async function CoursesPage() {
  const subjects = await sanityClient.fetch(query)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-8">
          Our Courses
        </h1>

        {subjects.length === 0 ? (
          <p className="text-slate-600 dark:text-slate-400">No courses found. Please add some in Sanity.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject: any) => (
              <div
                key={subject._id}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-shadow"
              >
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                  {subject.title}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  {subject.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {subject.classes?.map((cls: any) => (
                    <span
                      key={cls._id}
                      className="px-2 py-1 text-xs bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full"
                    >
                      {cls.title}
                    </span>
                  ))}
                </div>
                {subject.subjects?.length > 0 && (
                  <div className="mt-3">
                    <p className="text-xs text-slate-500 dark:text-slate-400">Courses:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {subject.subjects.map((sub: any) => (
                        <Link
                          key={sub.slug.current}
                          href={`/courses/${sub.slug.current}`}
                          className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}