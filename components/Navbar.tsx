'use client'

import { useState, useEffect } from 'react'
import { Atom, Menu, X, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from './ThemeToggle'
import TranslateButton from './TranslateButton'
import QuickContact from './QuickContact'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '#courses' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-slate-900/95 dark:bg-white/95 backdrop-blur-md border-b border-slate-700/50 dark:border-slate-200/50 shadow-lg dark:shadow-slate-200/20'
            : 'bg-slate-900/80 dark:bg-white/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <Atom className="h-8 w-8 text-cyan-400 dark:text-cyan-500 relative z-10" />
              </div>
              <span className="text-xl font-bold text-white dark:text-slate-800">
                ChemLab Academy
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/80 dark:text-slate-700/80 hover:text-white dark:hover:text-slate-900 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 dark:from-cyan-600 dark:to-purple-600 transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <TranslateButton />
              <ThemeToggle />
              <Button
                className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 text-white dark:text-slate-800 hover:bg-white/20 dark:hover:bg-slate-800/20 transition-all shadow-md"
                onClick={() => setIsContactOpen(true)}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Quick Contact
              </Button>
              <Button className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                Enroll Now
              </Button>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <TranslateButton />
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-slate-800/10 transition text-white dark:text-slate-800"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/95 dark:bg-white/95 backdrop-blur-md border-t border-slate-700/50 dark:border-slate-200/50"
            >
              <div className="px-4 py-6 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-white/80 dark:text-slate-700/80 hover:text-white dark:hover:text-slate-900 transition"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex items-center gap-2 pt-2">
                  <TranslateButton />
                  <ThemeToggle />
                </div>
                <Button
                  className="w-full bg-white/10 dark:bg-slate-800/10 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 text-white dark:text-slate-800 hover:bg-white/20 dark:hover:bg-slate-800/20"
                  onClick={() => {
                    setIsOpen(false)
                    setIsContactOpen(true)
                  }}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Quick Contact
                </Button>
                <Button className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white">
                  Enroll Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <QuickContact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
