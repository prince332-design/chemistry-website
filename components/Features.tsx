'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Monitor, 
  FileText, 
  HeadphonesIcon 
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Expert Mentors',
    description: 'Learn from PhDs and industry professionals with years of teaching experience.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Monitor,
    title: 'Interactive Simulations',
    description: '3D molecular visualizations and virtual labs for hands-on learning experience.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FileText,
    title: 'Past Paper Bank',
    description: 'Access thousands of past papers and practice questions with detailed solutions.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Doubt Support',
    description: 'Round-the-clock assistance from our teaching assistants and community forum.',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function Features() {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            Why Choose ChemLab?
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We provide everything you need to excel in chemistry, from expert guidance to cutting-edge tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/50 dark:border-slate-700/50">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-4 mb-4`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}