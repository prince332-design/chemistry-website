'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, PlayCircle } from 'lucide-react'
import Link from 'next/link'

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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-slate-950">
      {/* Premium Animated Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full glass border border-cyan-400/30"
            >
              <span className="text-sm font-medium text-cyan-300">
                #1 Chemistry Academy Online
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">
              Master Chemistry with{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {words[index]}
              </span>
            </h1>

            <p className="mt-6 text-lg text-white/70 max-w-lg">
              Interactive courses, live labs, and expert mentors for O/A-Levels, FSc, and University students.
              Join 10,000+ students already excelling in chemistry.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#courses">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-2xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40">
                  Start Learning Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#courses">
                <Button size="lg" variant="outline" className="glass border-white/20 text-white hover:bg-white/10 transition-all">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  View Courses
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex gap-8">
              {[
                { label: 'Students', value: '10K+' },
                { label: 'Courses', value: '50+' },
                { label: 'Mentors', value: '30+' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Premium Glass Card for Atom */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 glass rounded-full flex items-center justify-center">
              {/* Rotating Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="w-full h-full border border-cyan-400/30 rounded-full" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4"
              >
                <div className="w-[calc(100%-2rem)] h-[calc(100%-2rem)] border border-purple-400/30 rounded-full" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8"
              >
                <div className="w-[calc(100%-4rem)] h-[calc(100%-4rem)] border border-pink-400/30 rounded-full" />
              </motion.div>

              {/* Floating Atoms */}
              {[
                { x: '50%', y: '0%', color: 'cyan-400', delay: 0 },
                { x: '100%', y: '50%', color: 'blue-400', delay: 0.2 },
                { x: '50%', y: '100%', color: 'purple-400', delay: 0.4 },
                { x: '0%', y: '50%', color: 'pink-400', delay: 0.6 },
                { x: '20%', y: '20%', color: 'teal-400', delay: 0.8 },
                { x: '80%', y: '80%', color: 'indigo-400', delay: 1 },
              ].map((atom, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-4 h-4 bg-${atom.color} rounded-full shadow-xl shadow-${atom.color}/50`}
                  style={{ left: atom.x, top: atom.y, transform: 'translate(-50%, -50%)' }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: atom.delay,
                  }}
                />
              ))}

              {/* Center Nucleus */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-2xl shadow-purple-500/50"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    '0 0 40px rgba(139,92,246,0.3)',
                    '0 0 80px rgba(139,92,246,0.6)',
                    '0 0 40px rgba(139,92,246,0.3)',
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
