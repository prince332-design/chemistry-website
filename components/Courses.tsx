'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, FlaskConical } from 'lucide-react'
import { courses } from '@/app/data/courses'

export default function Courses() {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            Explore Our Courses
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Master every branch of chemistry with our comprehensive curriculum designed by experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <FlaskConical className="h-6 w-6 text-cyan-500" />
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  {course.title}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                {course.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {course.chapters.length} Chapters
                </span>
                <Link
                  href={`/courses/${course.id}`}
                  className="inline-flex items-center text-cyan-600 dark:text-cyan-400 font-medium hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
