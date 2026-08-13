'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, PlayCircle } from 'lucide-react'

const words = ['Confidence', 'Excellence', 'Success', 'Mastery']

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-pulse delay-1000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6"
            >
              <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
                🎓 #1 Chemistry Academy Online
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Master Chemistry with{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {words[index]}
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-lg">
              Interactive courses, live labs, and expert mentors for O/A-Levels, FSc, and University students.
              Join 10,000+ students already excelling in chemistry.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all">
                Start Learning Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800">
                <PlayCircle className="mr-2 h-4 w-4" />
                View Courses
              </Button>
            </div>

            <div className="mt-12 flex gap-8">
              {[
                { label: 'Students', value: '10K+' },
                { label: 'Courses', value: '50+' },
                { label: 'Mentors', value: '30+' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-slate-800 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="w-full h-full border-4 border-cyan-400/30 rounded-full" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4"
              >
                <div className="w-[calc(100%-2rem)] h-[calc(100%-2rem)] border-4 border-purple-400/30 rounded-full" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8"
              >
                <div className="w-[calc(100%-4rem)] h-[calc(100%-4rem)] border-4 border-blue-400/30 rounded-full" />
              </motion.div>

              {[
                { x: '50%', y: '0%', color: 'cyan-400', delay: 0 },
                { x: '100%', y: '50%', color: 'blue-400', delay: 0.2 },
                { x: '50%', y: '100%', color: 'purple-400', delay: 0.4 },
                { x: '0%', y: '50%', color: 'indigo-400', delay: 0.6 },
                { x: '20%', y: '20%', color: 'pink-400', delay: 0.8 },
                { x: '80%', y: '80%', color: 'teal-400', delay: 1 },
              ].map((atom, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-6 h-6 bg-${atom.color} rounded-full shadow-lg shadow-${atom.color}/50`}
                  style={{ left: atom.x, top: atom.y, transform: 'translate(-50%, -50%)' }}
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      `0 0 20px rgba(34,211,238,0.3)`,
                      `0 0 40px rgba(34,211,238,0.6)`,
                      `0 0 20px rgba(34,211,238,0.3)`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: atom.delay,
                  }}
                />
              ))}

              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-2xl shadow-purple-500/50"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    '0 0 30px rgba(139,92,246,0.3)',
                    '0 0 60px rgba(139,92,246,0.6)',
                    '0 0 30px rgba(139,92,246,0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}