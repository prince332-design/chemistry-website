'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Ahmed',
    role: 'A-Level Student',
    result: 'A* in Chemistry',
    quote: 'ChemLab Academy completely transformed my understanding of chemistry. The interactive simulations and expert mentors made complex concepts so easy to grasp. I went from struggling to scoring an A*!',
    avatar: 'SA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    id: 2,
    name: 'Muhammad Ali',
    role: 'FSc Student',
    result: 'Top 1% in Board Exams',
    quote: 'The past paper bank and doubt support were game-changers for me. I could practice endlessly and get instant help whenever I was stuck. The structured courses made revision so much easier.',
    avatar: 'MA',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    id: 3,
    name: 'Fatima Khan',
    role: 'University Student',
    result: "Dean's List Honors",
    quote: "As a biochemistry major, I needed deep understanding, not just memorization. ChemLab's approach to teaching fundamental concepts with real-world applications has been invaluable for my university studies.",
    avatar: 'FK',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            What Our Students Say
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Real stories from students who achieved their chemistry goals with us.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 sm:p-12 border border-slate-200/50 dark:border-slate-700/50"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-cyan-500/20" />
              
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16 border-2 border-cyan-500">
                  <AvatarImage src={testimonials[current].image} />
                  <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-600 text-white text-lg">
                    {testimonials[current].avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    {testimonials[current].name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonials[current].role}
                  </p>
                  <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                    {testimonials[current].result}
                  </p>
                </div>
              </div>

              <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                "{testimonials[current].quote}"
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
          >
            <ChevronLeft className="h-6 w-6 text-slate-600 dark:text-slate-300" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
          >
            <ChevronRight className="h-6 w-6 text-slate-600 dark:text-slate-300" />
          </button>
        </div>
      </div>
    </section>
  )
}