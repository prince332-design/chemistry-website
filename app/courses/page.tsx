import { sanityClient } from '@/lib/sanity'
import Link from 'next/link'

// =========================================================
// GROQ QUERY — EXISTING SANITY CLASSES ONLY
// =========================================================
const query = `*[_type == "class" && active != false] | order(order asc, title asc) {
  _id,
  title,
  slug,
  educationLevel,
  institutionType,
  description,
  board-> {
    _id,
    title
  },
  group
}`

export default async function CoursesPage() {
  const classes = await sanityClient.fetch(query)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* =====================================================
            PAGE HEADER
        ===================================================== */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white">
            Our Classes
          </h1>

          <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-2xl mx-auto">
            Explore classes and discover the subjects and learning resources
            available for each level.
          </p>
        </div>

        {/* =====================================================
            NO DATA
        ===================================================== */}
        {classes.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-600 dark:text-slate-400">
              No classes are currently available.
            </p>
          </div>
        ) : (

          /* ===================================================
             CLASS CARDS
             =================================================== */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {classes.map((classItem: any) => {

              const slug =
                typeof classItem.slug === 'string'
                  ? classItem.slug
                  : classItem.slug?.current

              return (
                <div
                  key={classItem._id}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
                >

                  {/* =================================================
                      CLASS TITLE
                  ================================================= */}
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                    {classItem.title}
                  </h2>

                  {/* =================================================
                      EDUCATION LEVEL
                  ================================================= */}
                  {classItem.educationLevel && (
                    <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mt-2">
                      {formatEducationLevel(classItem.educationLevel)}
                    </p>
                  )}

                  {/* =================================================
                      BOARD
                  ================================================= */}
                  {classItem.board?.title && (
                    <div className="mt-3">
                      <span className="inline-block px-2.5 py-1 text-xs bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full">
                        {classItem.board.title}
                      </span>
                    </div>
                  )}

                  {/* =================================================
                      GROUP / STREAM
                  ================================================= */}
                  {classItem.group && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
                      {formatGroup(classItem.group)}
                    </p>
                  )}

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}
                  {classItem.description && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 line-clamp-3">
                      {classItem.description}
                    </p>
                  )}

                  {/* =================================================
                      EXPLORE CLASS
                  ================================================= */}
                  {slug ? (
                    <Link
                      href={`/courses/${slug}`}
                      className="inline-block mt-5 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                      Explore Class
                    </Link>
                  ) : (
                    <span className="inline-block mt-5 px-5 py-2.5 bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 font-semibold rounded-lg cursor-not-allowed">
                      Class Unavailable
                    </span>
                  )}

                </div>
              )
            })}

          </div>
        )}

      </div>
    </div>
  )
}

// =========================================================
// EDUCATION LEVEL LABEL
// =========================================================
function formatEducationLevel(value: string) {
  const labels: Record<string, string> = {
    middle: 'Middle — Grades 6–8',
    secondary: 'Secondary / Matric — Grades 9–10',
    'higher-secondary':
      'Higher Secondary / Intermediate — Grades 11–12',
  }

  return labels[value] || value
}

// =========================================================
// GROUP / STREAM LABEL
// =========================================================
function formatGroup(value: string) {
  const labels: Record<string, string> = {
    premedical: 'Science — Pre-Medical',
    preengineering: 'Science — Pre-Engineering',
    ics: 'Computer Science / ICS',
    commerce: 'Commerce',
    generalscience: 'General Science',
    humanities: 'Humanities / Arts',
    technical: 'Technical / DAE',
    other: 'Other',
  }

  return labels[value] || value
}