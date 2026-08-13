'use client'

import { Atom, Mail, MapPin, Phone } from "lucide-react"
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Atom className="h-8 w-8 text-cyan-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                ChemLab Academy
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 max-w-xs">
              Empowering students worldwide with world-class chemistry education and interactive learning experiences.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-slate-800 dark:text-white mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">About Us</Link></li>
              <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Courses</Link></li>
              <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Topics</Link></li>
              <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-800 dark:text-white mb-3">Resources</h5>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Past Papers</Link></li>
              <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Simulations</Link></li>
              <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Mentors</Link></li>
              <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Community</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-800 dark:text-white mb-3">Contact</h5>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-500" />
                hello@chemlab.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan-500" />
                +92 (305) 8411027
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-500" />
                Okara, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-700/50 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} ChemLab Academy. All rights reserved. Made with ❤️ for chemistry lovers.
          </p>
        </div>
      </div>
    </footer>
  )
}
