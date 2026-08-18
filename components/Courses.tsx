'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, GraduationCap } from 'lucide-react'

interface ClassItem {
  _id: string
  title: string
  slug?: {
    current: string
  }
  educationLevel?: string
  institutionType?: string
  description?: string
}

interface CoursesProps {
  classes: ClassItem[]
}

export default function Courses({ classes }: CoursesProps) {
  return (
    <section
      id="courses"
      className="py-20 px-4 sm:px-6 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            Explore Our Classes
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore classes and subjects available on our learning platform.
            Select your class to discover the subjects and learning content
            available for you.
          </p>
        </motion.div>

        {/* No Classes */}
        {classes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">
              No classes are currently available.
            </p>
          </div>
        ) : (

          /* Class Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {classes.map((classItem, index) => {

              const slug =
                classItem.slug?.current ||
                classItem.title
                  ?.toLowerCase()
                  .replace(/\s+/g, '-')
                  .replace(/[^\w-]/g, '')

              return (
                <motion.div
                  key={classItem._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg transition-shadow"
                >

                  {/* Icon + Class Name */}
                  <div className="flex items-center gap-3 mb-3">

                    <div className="w-11 h-11 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-cyan-500" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      {classItem.title}
                    </h3>

                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                    {classItem.description ||
                      `Explore subjects and learning resources available for ${classItem.title}.`}
                  </p>

                  {/* Education Information */}
                  <div className="flex flex-wrap gap-2 mb-5">

                    {classItem.educationLevel && (
                      <span className="text-xs px-2 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300">
                        {classItem.educationLevel}
                      </span>
                    )}

                    {classItem.institutionType && (
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        {classItem.institutionType}
                      </span>
                    )}

                  </div>

                  {/* Open Class */}
                  <div className="flex items-center justify-end">

                    <Link
                      href={`/courses/${slug}`}
                      className="inline-flex items-center text-cyan-600 dark:text-cyan-400 font-medium hover:underline"
                    >
                      Explore Class
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>

                  </div>

                </motion.div>
              )
            })}

          </div>
        )}

      </div>
    </section>
  )
}