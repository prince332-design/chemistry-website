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
            ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <Atom className="h-8 w-8 text-cyan-500 dark:text-cyan-400 relative z-10" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                ChemLab Academy
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <TranslateButton />
              <ThemeToggle />
              <Button
                className="bg-secondary/50 backdrop-blur-sm border border-border text-foreground hover:bg-secondary transition-all shadow-lg hover:shadow-cyan-500/10"
                onClick={() => setIsContactOpen(true)}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Quick Contact
              </Button>
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                Enroll Now
              </Button>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <TranslateButton />
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-accent transition text-foreground"
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
              className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border"
            >
              <div className="px-4 py-6 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-foreground/80 hover:text-foreground transition"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex items-center gap-2 pt-2">
                  <TranslateButton />
                  <ThemeToggle />
                </div>
                <Button
                  className="w-full bg-secondary/50 backdrop-blur-sm border border-border text-foreground hover:bg-secondary"
                  onClick={() => {
                    setIsOpen(false)
                    setIsContactOpen(true)
                  }}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Quick Contact
                </Button>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
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
