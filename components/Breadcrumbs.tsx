'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  return (
    <nav className="text-sm text-slate-500 dark:text-slate-400 py-4">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = '/' + segments.slice(0, index + 1).join('/')
          const isLast = index === segments.length - 1
          return (
            <li key={segment} className="flex items-center gap-2">
              <span>/</span>
              {isLast ? (
                <span className="text-slate-800 dark:text-white font-medium">
                  {segment.replace(/-/g, ' ')}
                </span>
              ) : (
                <Link href={href} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">
                  {segment.replace(/-/g, ' ')}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
