'use client'

import { motion } from 'framer-motion'
import { 
  Beaker, 
  Microscope, 
  Radio, 
  Pipette, 
  Dna, 
  Leaf 
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const topics = [
  {
    icon: Beaker,
    title: 'Organic Chemistry',
    description: 'Carbon compounds, reactions, and mechanisms from basics to advanced.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Microscope,
    title: 'Inorganic Chemistry',
    description: 'Elements, periodic trends, coordination compounds, and more.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Radio,
    title: 'Physical Chemistry',
    description: 'Thermodynamics, kinetics, quantum chemistry, and spectroscopy.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Pipette,
    title: 'Analytical Chemistry',
    description: 'Quantitative analysis, chromatography, and spectroscopy techniques.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Dna,
    title: 'Biochemistry',
    description: 'Chemistry of life: proteins, enzymes, metabolism, and DNA.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Leaf,
    title: 'Environmental Chemistry',
    description: 'Atmospheric chemistry, pollution, green chemistry, and sustainability.',
    color: 'from-teal-500 to-cyan-500',
  },
]

export default function Topics() {
  return (
    <section id="topics" className="py-20 px-4 sm:px-6 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            Explore Core Topics
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Master every branch of chemistry with our comprehensive curriculum designed by experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${topic.color} p-3 mb-4`}>
                    <topic.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-800 dark:text-white">
                    {topic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 dark:text-slate-300 text-base">
                    {topic.description}
                  </CardDescription>
                  <button className="mt-4 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors flex items-center gap-1 group">
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}