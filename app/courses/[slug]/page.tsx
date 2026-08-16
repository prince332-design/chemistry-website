import { sanityClient } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react'
import PortableTextRenderer from '@/components/PortableTextRenderer'

// GROQ Query — single course with chapters and topics
const query = `*[_type == "subject" && slug.current == $slug][0] {
  _id,
  title,
  description,
  classes[]-> { title },
  subjects[]-> {
    title,
    slug,
    chapters[]-> {
      title,
      slug,
      order,
      topics[]-> {
        title,
        slug,
        free,
        difficulty,
        timeEstimate,
        content
      }
    }
  }
}`

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params
  const course = await sanityClient.fetch(query, { slug })

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200/50 dark:border-slate-700/50">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            {course.title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            {course.description}
          </p>

          {course.subjects?.map((subject: any) => (
            <div key={subject._id} className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                {subject.title}
              </h2>

              <div className="space-y-4">
                {subject.chapters?.map((chapter: any, index: number) => (
                  <div
                    key={chapter._id}
                    className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden"
                  >
                    <details className="group">
                      <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50">
                        <div className="flex items-center gap-3">
                          <span className="text-cyan-500 font-bold text-sm">
                            Chapter {index + 1}
                          </span>
                          <span className="font-medium text-slate-800 dark:text-white">
                            {chapter.title}
                          </span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-400 group-open:rotate-90 transition-transform" />
                      </summary>
                      <ul className="p-4 pt-0 space-y-2 border-t border-slate-200 dark:border-slate-700">
                        {chapter.topics?.map((topic: any) => (
                          <li
                            key={topic._id}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900/50"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-cyan-500 text-sm">•</span>
                              <span className="text-slate-700 dark:text-slate-300">
                                {topic.title}
                              </span>
                              {topic.free && (
                                <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded-full">
                                  Free
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                              {topic.difficulty && <span>{topic.difficulty}</span>}
                              {topic.timeEstimate && <span>· {topic.timeEstimate} min</span>}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
              Ready to enroll?
            </h3>
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Enroll Now →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}