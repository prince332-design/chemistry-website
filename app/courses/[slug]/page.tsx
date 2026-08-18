import { sanityClient } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react'

const query = `*[_type == "class" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  educationLevel,
  institutionType,
  description,

  "subjects": *[
    _type == "subject" &&
    references(^._id) &&
    active == true
  ] | order(order asc) {
    _id,
    title,
    slug,
    description,
    code,
    educationLevel,
    institutionType,
    program,
    semester,
    credits,

    "chapters": *[
      _type == "chapter" &&
      references(^._id) &&
      active == true
    ] | order(order asc, chapterNumber asc) {
      _id,
      title,
      slug,
      chapterNumber,
      learningObjectives,
      estimatedTime,
      difficulty,

      "topics": *[
        _type == "topic" &&
        references(^._id)
      ] | order(order asc) {
        _id,
        title,
        slug,
        free,
        difficulty,
        timeEstimate
      }
    }
  }
}`

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ClassPage({ params }: PageProps) {
  const { slug } = await params

  const classData = await sanityClient.fetch(query, { slug })

  if (!classData) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Classes
        </Link>

        {/* Class Header */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200/50 dark:border-slate-700/50 mb-8">

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-900/30">
              <BookOpen className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
                {classData.title}
              </h1>

              <div className="flex flex-wrap gap-2 mt-3">
                {classData.educationLevel && (
                  <span className="px-3 py-1 text-xs rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300">
                    {classData.educationLevel}
                  </span>
                )}

                {classData.institutionType && (
                  <span className="px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                    {classData.institutionType}
                  </span>
                )}
              </div>
            </div>
          </div>

          {classData.description && (
            <p className="mt-6 text-slate-600 dark:text-slate-300">
              {classData.description}
            </p>
          )}
        </div>

        {/* Subjects */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white">
                Subjects
              </h2>

              <p className="mt-1 text-slate-500 dark:text-slate-400">
                Subjects available for {classData.title}
              </p>
            </div>

            <span className="text-sm text-slate-500 dark:text-slate-400">
              {classData.subjects?.length || 0} Subjects
            </span>
          </div>

          {!classData.subjects?.length ? (
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center border border-slate-200 dark:border-slate-700">
              <p className="text-slate-500 dark:text-slate-400">
                No subjects are currently available for this class.
              </p>
            </div>
          ) : (
            <div className="space-y-6">

              {classData.subjects.map((subject: any) => (
                <div
                  key={subject._id}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 overflow-hidden"
                >

                  {/* Subject Header */}
                  <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-start justify-between gap-4">

                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                          {subject.title}
                        </h3>

                        {subject.description && (
                          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                            {subject.description}
                          </p>
                        )}

                        <div className="flex flex-wrap gap-2 mt-3">

                          {subject.code && (
                            <span className="px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                              {subject.code}
                            </span>
                          )}

                          {subject.program && (
                            <span className="px-2 py-1 text-xs rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300">
                              {subject.program}
                            </span>
                          )}

                          {subject.semester && (
                            <span className="px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                              Semester {subject.semester}
                            </span>
                          )}

                        </div>
                      </div>

                      <span className="shrink-0 text-xs text-slate-500 dark:text-slate-400">
                        {subject.chapters?.length || 0} Chapters
                      </span>

                    </div>
                  </div>

                  {/* Chapters */}
                  <div className="p-6">

                    {!subject.chapters?.length ? (
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        No chapters are currently available.
                      </p>
                    ) : (
                      <div className="space-y-3">

                        {subject.chapters.map((chapter: any) => (
                          <details
                            key={chapter._id}
                            className="group border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden"
                          >

                            <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 list-none">

                              <div className="flex items-center gap-3 min-w-0">

                                <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-bold">
                                  {chapter.chapterNumber}
                                </span>

                                <div className="min-w-0">
                                  <h4 className="font-semibold text-slate-800 dark:text-white">
                                    {chapter.title}
                                  </h4>

                                  <div className="flex flex-wrap gap-2 mt-1">

                                    {chapter.difficulty && (
                                      <span className="text-xs text-slate-500 dark:text-slate-400">
                                        {chapter.difficulty}
                                      </span>
                                    )}

                                    {chapter.estimatedTime && (
                                      <span className="text-xs text-slate-500 dark:text-slate-400">
                                        • {chapter.estimatedTime} min
                                      </span>
                                    )}

                                    <span className="text-xs text-slate-500 dark:text-slate-400">
                                      • {chapter.topics?.length || 0} Topics
                                    </span>

                                  </div>
                                </div>

                              </div>

                              <ChevronRight className="h-5 w-5 shrink-0 text-slate-400 group-open:rotate-90 transition-transform" />

                            </summary>

                            <div className="border-t border-slate-200 dark:border-slate-700 p-5">

                              {/* Learning Objectives */}
                              {chapter.learningObjectives?.length > 0 && (
                                <div className="mb-5">
                                  <h5 className="font-semibold text-slate-800 dark:text-white mb-2">
                                    Learning Objectives
                                  </h5>

                                  <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                    {chapter.learningObjectives.map(
                                      (objective: string, index: number) => (
                                        <li key={index}>
                                          {objective}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}

                              {/* Topics */}
                              {chapter.topics?.length > 0 ? (
                                <div>
                                  <h5 className="font-semibold text-slate-800 dark:text-white mb-3">
                                    Topics
                                  </h5>

                                  <div className="space-y-2">

                                    {chapter.topics.map((topic: any) => (
                                      <div
                                        key={topic._id}
                                        className="flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900/50"
                                      >

                                        <div className="flex items-center gap-3 min-w-0">

                                          <span className="text-cyan-500">
                                            •
                                          </span>

                                          <span className="text-sm text-slate-700 dark:text-slate-300">
                                            {topic.title}
                                          </span>

                                          {topic.free && (
                                            <span className="shrink-0 text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded-full">
                                              Free
                                            </span>
                                          )}

                                        </div>

                                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">

                                          {topic.difficulty && (
                                            <span>
                                              {topic.difficulty}
                                            </span>
                                          )}

                                          {topic.timeEstimate && (
                                            <span>
                                              • {topic.timeEstimate} min
                                            </span>
                                          )}

                                        </div>

                                      </div>
                                    ))}

                                  </div>
                                </div>
                              ) : (
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                  No topics are currently available.
                                </p>
                              )}

                            </div>

                          </details>
                        ))}

                      </div>
                    )}

                  </div>

                </div>
              ))}

            </div>
          )}
        </section>

        {/* Enrollment */}
        <div className="mt-10 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200/50 dark:border-slate-700/50">

          <h3 className="text-xl font-bold text-slate-800 dark:text-white">
            Want to track your learning progress?
          </h3>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Enroll to access your personalized learning progress and student dashboard.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center mt-5 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Enroll Now
          </Link>

        </div>

      </div>
    </main>
  )
}